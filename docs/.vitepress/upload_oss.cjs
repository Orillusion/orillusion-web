// 将 docs/.vitepress/dist 上传到三个地域的 OSS bucket
// 用法：OSS_ACCESS_KEY_ID=xxx OSS_ACCESS_KEY_SECRET=xxx node docs/.vitepress/upload_oss.cjs
const OSS = require('ali-oss');
const fs = require('fs/promises');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const CONCURRENCY = 40;

const { OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET } = process.env;
if (!OSS_ACCESS_KEY_ID || !OSS_ACCESS_KEY_SECRET) {
    console.error('Missing OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET');
    process.exit(1);
}

const createClient = (region, bucket) =>
    new OSS({
        region,
        bucket,
        accessKeyId: OSS_ACCESS_KEY_ID,
        accessKeySecret: OSS_ACCESS_KEY_SECRET,
        timeout: '5m',
        retryMax: 3
    });

const clients = [
    createClient('oss-cn-beijing', 'orillusion-web'),
    createClient('oss-cn-hongkong', 'orillusion-web-hk'),
    createClient('oss-us-west-1', 'orillusion-la')
];

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
    let done = 0;
    for (let i = 0; i < files.length; i += CONCURRENCY) {
        await Promise.all(
            files.slice(i, i + CONCURRENCY).map(async file => {
                const key = path.relative(DIST, file).split(path.sep).join('/');
                const headers = /^(assets|images)\//.test(key) ? { 'Cache-Control': 'public, max-age=31536000' } : {};
                await client.put(key, file, { headers });
            })
        );
        done = Math.min(i + CONCURRENCY, files.length);
        console.log(`[${client.options.bucket}] uploaded ${done}/${files.length}`);
    }
}

// 先上传新文件，再删除 assets/ 下本次构建中不存在的旧文件，避免部署过程中页面引用的资源 404
async function deleteStaleAssets(client, newKeys) {
    const stale = (await listKeys(client, 'assets/')).filter(k => !newKeys.has(k));
    for (let i = 0; i < stale.length; i += 1000) {
        await client.deleteMulti(stale.slice(i, i + 1000), { quiet: true });
    }
    console.log(`[${client.options.bucket}] deleted ${stale.length} stale assets`);
}

async function run() {
    // html 最后上传：保证页面上线时它引用的资源已就位
    const isHtml = f => f.endsWith('.html');
    const files = (await listFiles(DIST)).sort((a, b) => isHtml(a) - isHtml(b));
    const newKeys = new Set(files.map(f => path.relative(DIST, f).split(path.sep).join('/')));
    console.log(`${files.length} files in ${DIST}`);

    for (const client of clients) {
        console.log('Uploading', client.options.bucket);
        await upload(client, files);
        await deleteStaleAssets(client, newKeys);
        console.log('Done', client.options.bucket);
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
