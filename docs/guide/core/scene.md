# Scene3D

`Scene3D` 继承自 `Object3D`，拥有 `Object3D` 相同的属性和方法，不同的是 `Scene3D` 是引擎渲染根节点，是场景树的最高层级，所有想要被渲染的节点必须添加到 `Scene3D` 或 `Scene3D` 的子节点中。  

![Scene3D](/images/Scene3D.svg)  

`Scene3D` 主要功能：
1. `Scene3D` 中定义了场景的天空盒和环境光贴图。
2. `Scene3D` 可以用来控制和管理场景树中的节点，例如：添加、删除、查找节点。


## 基础用法
```ts
await Engine3D.init();
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

## 大气天空盒
可以通过 [AtmosphericComponent](/api/classes/AtmosphericComponent.md) 组件创建一个大气散射的天空盒：
```ts
// 添加大气天空盒组件，自动生成背景和环境光
let sky = scene3D.addComponent(AtmosphericComponent);
```
详见以下示例：
<Demo src="/demos/core/scene.ts"></Demo>

<<< @/public/demos/core/scene.ts

通过 `AtmosphericComponent` 组件的 `sunY`, `exposure` 等属性来调整环境光的的变化。

```ts
let sky = scene3D.addComponent(AtmosphericComponent);
sky.sunY = 0.54  // 太阳垂直位置，可以调节环境光亮度
sky.exposure = 1.5; //调整环境光曝光度, 默认值1
```

## 自定义天空盒
如果想要自定义天空盒材质纹理，可以通过给 `Scene3D` 添加 `SkyRenderer` 组件来显示自定义背景; 同时，可以通过 `Scene3D` 对象的 `envMap` 属性来设置环境光。

### 1. 单色背景和环境光
可以通过 [SolidColorSky](/api/classes/SolidColorSky) 创建一个纯色的贴图来设置背景和环境光:
```ts
import {Scene3D, SolidColorSky, Color, SkyRenderer} from '@orillusion/core';

let scene = new Scene3D();
// 创建一个纯色贴图
let colorSky = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1))
// 添加 SkyRenderer 组件，然后设置 map 贴图
let sky = scene.addComponent(SkyRenderer);
sky.map = colorSky;

// 同时设置单色环境光
scene.envMap = colorSky;
```

### 2. 十字天空盒
可以通过加载 [十字立方贴图](/guide/graphics/texture#十字立方贴图) 设置天空盒:
```ts
// 可以加载一张完整十字立方贴图
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
// 添加 SkyRenderer 组件，设置 map 贴图
let sky = scene.addComponent(SkyRenderer);
sky.map = textureCube;

// 设置环境光
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

// 添加 SkyRenderer 组件，设置 map 贴图
let sky = scene.addComponent(SkyRenderer);
sky.map = skyTexture;

// 设置环境光
scene.envMap = skyTexture;
```

### 4. 透明背景
如果想显示透明背景，通过关闭天空盒组件来隐藏背景，注意一般还需要使用透明 [Canvas](/guide/core/engine#配置-canvas) 才能生效：

```ts
// 初始化引擎
await Engine3D.init({
    canvasConfig:{
        alpha: true, // 使用透明的 Canvas 配置
        zIndex: 1
    }
});
let scene = new Scene3D();

// 可以先添加大气天空盒，获得基本环境光
let sky = scene3D.addComponent(AtmosphericComponent);
// 再隐藏大气天空盒, 环境光不会消失
sky.enable = false
```
当然也可以不添加大气天空盒或背景，直接设置环境光
```ts
// 设置一个简单白色环境光
scene.envMap = new SolidColorSky(new Color(0.75, 0.75, 0.75));
// 或者加载环境贴图
scene.envMap = await Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```

更多详细用法请参考 [Scene3D](/api/classes/Scene3D)