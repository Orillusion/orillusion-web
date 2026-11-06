// 将 docs/.vitepress/dist 上传到三个地域 OSS bucket 的 en/ 子目录（站点 base 为 /en）
// 只写入、删除 en/ 下的对象，不影响根目录内容
// 用法：OSS_ACCESS_KEY_ID=xxx OSS_ACCESS_KEY_SECRET=xxx node docs/.vitepress/upload_oss.cjs
const OSS = require('ali-oss');
const fs = require('fs/promises');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const PREFIX = 'en/';
const CONCURRENCY = 40;

const { OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET } = process.env;
if (!OSS_ACCESS_KEY_ID || !OSS_ACCESS_KEY_SECRET) {
    console.error('Missing OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET');
    process.exit(1);
}

const createClient = (region, bucket, extra = {}) =>
    new OSS({
        region,
        bucket,
        ...extra,
        accessKeyId: OSS_ACCESS_KEY_ID,
        accessKeySecret: OSS_ACCESS_KEY_SECRET,
        timeout: '5m',
        retryMax: 3
    });

const clients = [
    // 北京 bucket 走全球加速域名（CI 在海外，直连北京较慢）
    createClient('oss-cn-beijing', 'orillusion-web', { endpoint: 'https://oss-accelerate.aliyuncs.com' }),
    createClient('oss-cn-hongkong', 'orillusion-web-hk'),
    createClient('oss-us-west-1', 'orillusion-la')
];

// dist 内文件 → OSS 对象名（统一加 en/ 前缀）
const toKey = file => PREFIX + path.relative(DIST, file).split(path.sep).join('/');

async function listFiles(dir) {
    const out = [];
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...(await listFiles(full)));
        else out.push(full);
    }
    return out;
}

async function listKeys(client, prefix) {
    const keys = [];
    let token;
    do {
        const res = await client.listV2({ prefix, 'max-keys': 1000, 'continuation-token': token });
        for (const obj of res.objects || []) keys.push(obj.name);
        token = res.nextContinuationToken;
    } while (token);
    return keys;
}

async function upload(client, files) {
    for (let i = 0; i < files.length; i += CONCURRENCY) {
        await Promise.all(
            files.slice(i, i + CONCURRENCY).map(async file => {
                const key = toKey(file);
                if (!key.startsWith(PREFIX)) throw new Error(`Refusing to upload outside ${PREFIX}: ${key}`);
                const rel = key.slice(PREFIX.length);
                const headers = /^(assets|images)\//.test(rel) ? { 'Cache-Control': 'public, max-age=31536000' } : {};
                await client.put(key, file, { headers });
            })
        );
        console.log(`[${client.options.bucket}] uploaded ${Math.min(i + CONCURRENCY, files.length)}/${files.length}`);
    }
}

// 先上传新文件，再删除 en/assets/ 下本次构建中不存在的旧文件，避免部署过程中页面引用的资源 404
async function deleteStaleAssets(client, newKeys) {
    const stale = (await listKeys(client, PREFIX + 'assets/')).filter(k => !newKeys.has(k));
    for (let i = 0; i < stale.length; i += 1000) {
        await client.deleteMulti(stale.slice(i, i + 1000), { quiet: true });
    }
    console.log(`[${client.options.bucket}] deleted ${stale.length} stale assets`);
}

async function run() {
    // html 最后上传：保证页面上线时它引用的资源已就位
    const isHtml = f => f.endsWith('.html');
    const files = (await listFiles(DIST)).sort((a, b) => isHtml(a) - isHtml(b));
    const newKeys = new Set(files.map(toKey));
    console.log(`${files.length} files in ${DIST} -> ${PREFIX}`);

    // 各 bucket 独立上传，一个失败不影响其它，最后统一报错
    const failed = [];
    for (const client of clients) {
        const bucket = client.options.bucket;
        try {
            console.log('Uploading', bucket);
            await upload(client, files);
            await deleteStaleAssets(client, newKeys);
            console.log('Done', bucket);
        } catch (err) {
            console.error(`[${bucket}] FAILED:`, err.code || '', err.message);
            failed.push(bucket);
        }
    }
    if (failed.length) {
        console.error('Failed buckets:', failed.join(', '));
        process.exit(1);
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
