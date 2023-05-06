# Scene3D

`Scene3D` 继承自 `Object3D`，拥有 `Object3D` 相同的属性和方法，不同的是 `Scene3D` 是引擎渲染根节点，是场景树的最高层级，所有想要被渲染的节点必须添加到 `Scene3D` 或 `Scene3D` 的子节点中。  

![Scene3D](/images/Scene3D.svg)  

`Scene3D` 主要功能：
1. `Scene3D` 中定义了场景的天空盒和环境光贴图。
2. `Scene3D` 可以用来控制和管理场景树中的节点，例如：添加、删除、查找节点。


## 基础用法
```ts
await Engine3D.init();
// 指定天空盒子大小
Engine3D.setting.sky.defaultFar = 5000;
// 创建场景
let scene = new Scene3D();
// 添加一个节点
let obj = new Object3D();
scene.addChild(obj);
// 添加相机节点
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);
scene.addChild(cameraObj);

// 开始渲染
let view = new View3D();
view.scene = scene;
view.camera = camera;
Engine3D.startRenderView(view);

// 移除一个节点
scene.removeChild(obj);
```

## 天空盒
可以通过以下代码创建天空盒：
```ts
let sky = scene3D.addComponent(AtmosphericComponent);
```
详见以下示例：
<Demo src="/demos/core/scene.ts"></Demo>

<<< @/public/demos/core/scene.ts{7-13}

可以通过 `Scene3D` 对象的 `exposure` 属性来调整环境光的曝光度。

```ts
let scene = new Scene3D();
scene.exposure = 1.5; //调整环境光曝光度, 默认值1
```

如果想要自定义天空盒材质纹理，可以通过更新 `Scene3D` 对象的 `envMap` 属性来设置自定义天空盒。
### 1. 纯色背景
可以通过 [SolidColorSky](/api/classes/SolidColorSky) 创建一个纯色的背景贴图:
```ts{5}
import {Scene3D, SolidColorSky, Color} from '@orillusion/core';

let scene = new Scene3D();
// 设置一个纯色的背景贴图
scene.envMap = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1));
```

### 2. 十字天空盒
可以通过加载 [十字立方贴图](/guide/graphics/texture#十字立方贴图) 设置天空盒:
```ts
let textureCube = Engine3D.res.loadTextureCube('path/to/sky.png')
// 或加载独立的6张立方贴图
textureCube = Engine3D.res.loadTextureCube([
    'path/to/sky1.png',
    'path/to/sky2.png',
    'path/to/sky3.png',
    'path/to/sky4.png',
    'path/to/sky5.png',
    'path/to/sky6.png'
])
// 设置天空盒
scene.envMap = textureCube;
```
> 目前十字天空盒只支持 `LDR` 普通格式的图片。

### 3. 全景天空盒
引擎还支持设置 [全景图（equirectangular）](https://en.wikipedia.org/wiki/Equirectangular_projection) 类型的天空盒。我们可以通过内置的 `res` 快速加载普通 `RGBA` 格式的 `LDR` 图片， 也支持加载 `RGBE` 格式的 `HDR` 图片:
```ts
// 普通全景贴图
let skyTexture = Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// HDR全景贴图
skyTexture = Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
// 设置天空盒
scene.envMap = skyTexture;
```

### 4. 透明背景
如果想显示透明背景，可以调用 [hideSky](/api/classes/Scene3D#hidesky) 隐藏天空盒，注意需要也需要配置 [Canvas](/guide/core/engine#配置-canvas) 透明:

```ts
// 初始化引擎，使用透明的 Canvas 配置
await Engine3D.init({
    canvasConfig:{
        alpha: true,
        zIndex: 1
    }
});
let scene = new Scene3D();
// 隐藏天空盒
scene.hideSky();
```


更多详细用法请参考 [Scene3D](/api/classes/Scene3D)