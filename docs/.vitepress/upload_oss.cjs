// 将 docs/.vitepress/dist 上传到三个地域 OSS bucket 的 en/ 子目录（站点 base 为 /en）
// 只写入、删除 en/ 下的对象，不影响根目录内容
// 用法：OSS_ACCESS_KEY_ID=xxx OSS_ACCESS_KEY_SECRET=xxx node docs/.vitepress/upload_oss.cjs
// 可单独刷新 CDN：OSS_ACCESS_KEY_ID=xxx OSS_ACCESS_KEY_SECRET=xxx node docs/.vitepress/upload_oss.cjs --cdn-only
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const DIST = path.join(__dirname, 'dist');
const PREFIX = 'en/';
const CONCURRENCY = 40;
const CDN_REFRESH_PATH = 'https://www.orillusion.com/en/';

const { OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET } = process.env;
if (!OSS_ACCESS_KEY_ID || !OSS_ACCESS_KEY_SECRET) {
    console.error('Missing OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET');
    process.exit(1);
}

const createClient = (region, bucket, extra = {}) => {
    const OSS = require('ali-oss');
    return new OSS({
        region,
        bucket,
        ...extra,
        accessKeyId: OSS_ACCESS_KEY_ID,
        accessKeySecret: OSS_ACCESS_KEY_SECRET,
        timeout: '5m',
        retryMax: 3
    });
};

const getClients = () => [
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

function percentEncode(str) {
    if (str === null || str === undefined) return '';
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}

// 阿里云 CDN 刷新目录缓存 (RPC 规范签名)
async function refreshCdn({ accessKeyId, accessKeySecret, objectPath, objectType = 'Directory' }) {
    const params = {
        Action: 'RefreshObjectCaches',
        ObjectPath: objectPath,
        ObjectType: objectType,
        Version: '2018-05-10',
        Format: 'JSON',
        AccessKeyId: accessKeyId,
        SignatureMethod: 'HMAC-SHA1',
        SignatureVersion: '1.0',
        SignatureNonce: crypto.randomUUID(),
        Timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')
    };

    const sortedKeys = Object.keys(params).sort();
    const canonicalizedQueryString = sortedKeys
        .map(key => `${percentEncode(key)}=${percentEncode(params[key])}`)
        .join('&');

    const stringToSign = `POST&%2F&${percentEncode(canonicalizedQueryString)}`;
    const signature = crypto
        .createHmac('sha1', accessKeySecret + '&')
        .update(stringToSign)
        .digest('base64');

    const body = `${canonicalizedQueryString}&Signature=${percentEncode(signature)}`;

    return new Promise((resolve, reject) => {
        const req = https.request(
            'https://cdn.aliyuncs.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(body)
                }
            },
            res => {
                let data = '';
                res.on('data', chunk => (data += chunk));
                res.on('end', () => {
                    try {
                        const parsed = JSON.parse(data);
                        if (res.statusCode >= 200 && res.statusCode < 300) {
                            resolve(parsed);
                        } else {
                            reject(new Error(`CDN Refresh Error [${res.statusCode}]: ${parsed.Message || data}`));
                        }
                    } catch (e) {
                        reject(new Error(`Failed to parse CDN response: ${data}`));
                    }
                });
            }
        );
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function refreshSiteCdn() {
    console.log(`Refreshing CDN directory: ${CDN_REFRESH_PATH}`);
    try {
        const res = await refreshCdn({
            accessKeyId: OSS_ACCESS_KEY_ID,
            accessKeySecret: OSS_ACCESS_KEY_SECRET,
            objectPath: CDN_REFRESH_PATH,
            objectType: 'Directory'
        });
        console.log('CDN refresh task created:', res.RefreshTaskId, 'RequestId:', res.RequestId);
    } catch (err) {
        console.error('Failed to refresh CDN:', err.message);
        process.exit(1);
    }
}

async function run() {
    if (process.argv.includes('--cdn-only')) {
        await refreshSiteCdn();
        return;
    }

    // html 最后上传：保证页面上线时它引用的资源已就位
    const isHtml = f => f.endsWith('.html');
    const files = (await listFiles(DIST)).sort((a, b) => isHtml(a) - isHtml(b));
    const newKeys = new Set(files.map(toKey));
    console.log(`${files.length} files in ${DIST} -> ${PREFIX}`);

    // 各 bucket 独立上传，一个失败不影响其它，最后统一报错
    const failed = [];
    for (const client of getClients()) {
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

    // 完成所有上传后刷新 CDN 目录
    await refreshSiteCdn();
}

module.exports = { refreshCdn, refreshSiteCdn };

if (require.main === module) {
    run().catch(err => {
        console.error(err);
        process.exit(1);
    });
}
