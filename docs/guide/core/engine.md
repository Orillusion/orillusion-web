# Engine3D
`Engine3D` 是引擎核心唯一的全局实例，主要有以下几个常用方法：
1. 调用 `Engine3D.init()` 来初始化引擎
2. 调用 `Engine3D.startRenderView()` 开启视图渲染循环
3. `Engine3D.res` 加载网络贴图或模型资源，详见 [资源加载](/guide/resource/Readme)
4. `Engine3D.inputSystem` 统一管理用户的输入事件，详见 [交互](/guide/interaction/pointer)
5. `Engine3D.setting` 统一配置渲染相关功能，详见 [配置](/guide/core/config)

## 初始化
通过 `Engine3D.init()` 方法来初始化引擎，默认参数可以为空。

引擎内部的初始化需要请求 `GPU` 设备，初始化请求 `GPU` 设备是异步过程，因此需要用异步的方式调用，我们推荐使用 `async/await` 字段进行调用。

```ts
Engine3D.init().then(()=>{
    // ...
})
// or
async function run(){
    await Engine3D.init();
    // ...
}
run()
```

## 渲染循环回调
在初始化时，通过传入参数，可以获取渲染主循环的回调，并在回调中执行自定义逻辑。

```ts
await Engine3D.init({
    beforeRender: ()=>{
        // 每一帧渲染前回调
    },
    renderLoop: ()=>{
        // 每一帧回调
    },
    lateRender: ()=>{
        // 每一帧渲染后回调
    }
});
```

## 配置 Canvas
除了配置渲染回调，在初始化时还可以指定渲染的 `canvas`，如果没有指定，则引擎默认创建一个覆盖整个窗口的不透明 `canvas`。

```ts
await Engine3D.init({
    canvasConfig:{
        canvas: document.getElementById("xxx"), // 指定 canvas 元素, 可以自定义管理 canvas 大小或布局
        alpha: true, // 是否背景透明, 默认 false
        zIndex: 1, // CSS z-index, 默认 0
        backgroundImage: "path/to/bg", // 若 alpha 透明时的背景图片
        devicePixelRatio: 1 // 渲染 DPR, 默认使用 window.devicePixelRatio
    }
});
``` 
> 降低 `devicePixelRatio` 可以有效降低渲染压力，提高渲染性能，但同时渲染分辨率也会降低，可能增加锯齿效果

更多详细配置，请参考 [CanvasConfig](/api/types/CanvasConfig)

## 开始渲染
在引擎初始化完成之后，需要创建一个 [View3D](/api/classes/View3D) 来开始渲染。`View3D` 至少需要一个场景 [Scene3D](/guide/core/scene) 和一个观察相机 [Camera3D](/api/classes/Camera3D) 才能启动，基本用法如下：

```ts
await Engine3D.init();
// 创建场景
this.scene = new Scene3D();

//开始渲染
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);

// 暂停渲染循环
Engine3D.pause();
// 恢复渲染循环
Engine3D.resume();
```
---
详细用法请参考 [Engine3D](/api/classes/Engine3D) API

