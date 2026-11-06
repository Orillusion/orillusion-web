const OSS = require('ali-oss');
const fs = require('fs/promises');
const path = require('path');
const base = ''

const cn = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: env.OSS_ACCESS_KEY_ID,
    accessKeySecret: env.OSS_ACCESS_KEY_SECRET,
    bucket: 'orillusion-web'
});
const hk = new OSS({
    region: 'oss-cn-hongkong',
    accessKeyId: env.OSS_ACCESS_KEY_ID,
    accessKeySecret: env.OSS_ACCESS_KEY_SECRET,
    bucket: 'orillusion-web-hk'
});
const la = new OSS({
    region: 'oss-us-west-1',
    accessKeyId: env.OSS_ACCESS_KEY_ID,
    accessKeySecret: env.OSS_ACCESS_KEY_SECRET,
    bucket: 'orillusion-la'
});

async function deleteAssets(client, prefix) {
    const list = await client.listV2({
        prefix: prefix,
        "max-keys": 1000,
    });
    list.objects = list.objects || [];
    console.log(list.objects.length)
    
    let tobeDelete = []
    for(let file of list.objects)
        tobeDelete.push(file.name)

    if(tobeDelete.length > 0)
        await client.deleteMulti(tobeDelete, {
            quiet: true
        })
    
    if(list.nextContinuationToken)
        await deleteAssets(client, prefix)
}

async function travel(client, dir) {
    let files = await fs.readdir(dir)
    for(let file of files){
        var pathname = path.join(dir, file)
        let stats = await fs.stat(pathname)
        if(stats.isDirectory())
            await travel(client, pathname)
        else{
            if(p.length > 40){
                console.log('wait')
                await Promise.all(p)
                p.length = 0
            }
            const headers = pathname.match(/assets|images/) ? {
                'Cache-Control': 'public, max-age=31536000'
            } : {}
            p.push(client.put(pathname.replace(__dirname + '/dist', base), path.normalize(pathname), { headers }).then((result)=>{
                console.log('[upload]', result.name)
            }))
        }
    }
}

let p = []
async function run(){
    for(let client of [cn, hk, la]){
        console.log('Deleting', client.options.bucket)
        await deleteAssets(client, 'assets/')

        console.log('Uploading', client.options.bucket)
        await travel(client, __dirname + '/dist')
        await Promise.all(p)
        console.log('Done', client.options.bucket)
        p.length = 0
    }
}

run()