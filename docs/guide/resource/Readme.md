# 资源加载
引擎通常需要加载不同的资源文件，为了统一管理所有文件的加载和读取，我们在 `Engine3D` 里封装了统一的 `res` 资源管理器，可以方便用户加载，存储和读取各种文件资源。


## 基本用法
```ts
// 加载 2D贴图
let texture = await Engine3D.res.loadTexture('path/to/image.png');
// 加载 GLTF/GLB 模型
let gltf = await Engine3D.res.loadGltf('path/to/model.gltf');
let glb = await Engine3D.res.loadGltf('path/to/model.glb');
```

## 下载进度回调
`res` 支持下载进度回调，我们可以配置 [LoaderFunctions](/api/types/LoaderFunctions) 用来监听文件加载事件回调，常用于 UI 加载进度提示:
```ts

let parser = await Engine3D.res.loadGltf('/sample.gltf',{
  onProgress: (receivedLength:number, contentLength:number, url:string) => {
    // 监听下载进度
  },
  onComplete: (url:string) => {
    // 文件下载完成
  },
  onError: (e) => {
    // 文件加载错误
  },
  onUrl: (url:string) =>{
    // 可以根据需求，修改原始url，返回自定义路径
  }
});
```

## 贴图管理器
我们可以将加载的贴图统一储存在 `res` 资源池中，使用时直接读取即可，方便集中下载和管理贴图
```ts
// 提前下载贴图
let brdfLUTTexture = new BitmapTexture2D();
await brdfLUTTexture.load('PBR/BRDFLUT.png');
// 统一存储
Engine3D.res.addTexture('BRDFLUT', brdfLUTTexture);
// 需要时取出
let brdfLUTTexture = Engine3D.res.getTexture('BRDFLUT');
```

## 材质球管理器
同理，统一将各类材质球添加到材质球管理器，方便后续使用
```ts
let floorMat = new LitMaterial();
Engine3D.res.addMat('floorMat', floorMat );
// 需要时取出
let floorMat = Engine3D.res.getMat('floorMat');
```

## 预设体管理器
也可以将 `Object3D` 节点添加到资源管理内，方便查找和调用
```ts 
let box = new Object3D();
res.addPrefab('box', box);
// 需要时取出
let box = res.getPrefab('box');
```

## 示例
<Demo :height="500" src="/demos/resource/resource.ts"></Demo>

<<< @/public/demos/resource/resource.ts



