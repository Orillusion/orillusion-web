# 阴影
阴影为场景和模型添加了一定程度的深度和真实感，因为它们可以显示物体的比例和位置，使场景中的物体看起来更加立体。在引擎中，光源可以将物体的阴影投射到自身的其他部分或者附近的场景中，这些阴影可以是实时的，也可以是静态的。

## 配置阴影

阴影是通过光源来实现的，目前引擎中 [平行光(DirectLight)](/guide/graphics/lighting.html#平行光)、[点光源(PointLight)](/guide/graphics/lighting.html#点光源)、[聚光灯(SpotLight)](/guide/graphics/lighting.html#聚光灯) 都可以产生阴影。需要渲染阴影效果时，只需要将对应灯光的 `castShadow` 属性设置为 `true` 即可。

```ts{12}
let lightObj = new Object3D();
// 设置灯光位置
lightObj.x = 0;
lightObj.y = 0;
lightObj.z = 0;
// 设置灯光角度，绕X轴旋转45度
lightObj.rotationX = 45;
lightObj.rotationY = 0;
lightObj.rotationZ = 0;
// 添加平行光组件，并开启阴影
let lc = lightObj.addComponent(DirectLight);
lc.castShadow = true; // 默认为 false
lc.intensity = 5;
scene.addChild(lightObj);
```

想要看到阴影效果，我们还需要产生阴影的物体和承载阴影的物体。如果希望光线照射到某个物体上产生阴影效果，需要在物体上添加一个 [MeshRenderer](/api/classes/MeshRenderer) 组件，并且将该组件的 `castShadow` 属性设置为 `true`。

```ts{6}
//创建一个box，用于产生阴影
let castShadowObj = new Object3D();
let mr1 = castShadowObj.addComponent(MeshRenderer);
mr1.geometry = new BoxGeometry();
mr1.material = new LitMaterial();
mr1.castShadow = true
scene.addChild(castShadowObj);
```

然后需要在接受阴影的物体上添加一个 [MeshRenderer](/api/classes/MeshRenderer) 组件，并且将该组件的 `receiveShadow` 属性设置为 `true`。

```ts{6}
//创建一个plane，用于接受阴影
let receiveShadowObj = new Object3D();
let mr2 = receiveShadowObj.addComponent(MeshRenderer);
mr2.geometry  = new PlaneGeometry(1000,1000);
mr2.material =new LitMaterial();
mr2.receiveShadow = true;
scene.addChild(receiveShadowObj);
```
这样就可以在场景上看到一个 `box` 在平行光的照射下，产生了一个阴影并投射在了 `plane` 上：

### 平行光阴影
---
<Demo :height="500" src="/demos/graphics/shadow_dir.ts"></Demo>

<<< @/public/demos/graphics/shadow_dir.ts

### 点光源阴影
---
<Demo :height="500" src="/demos/graphics/shadow_point.ts"></Demo>

<<< @/public/demos/graphics/shadow_point.ts

### 聚光灯阴影
---
<Demo :height="500" src="/demos/graphics/shadow_spot.ts"></Demo>

<<< @/public/demos/graphics/shadow_spot.ts

## 阴影偏移
阴影偏移 `shadowBias` 是影响阴影渲染的重要参数，因为一般阴影贴图的尺寸和最终渲染贴图的尺寸不完全相同的，会造成阴影采样失真等情况，通常可以通过手动设置一个微小的偏移量 `shadowBias` 来解决采样失真的情况。

```ts
Engine3D.setting.shadow.shadowBias = 0.0002 // 平行光阴影偏移
Engine3D.setting.shadow.pointShadowBias = 0.2 // 点光源/聚光灯阴影偏移
```

> 一般 `shadowBias` 设置过小，会出现大面积摩尔纹或者完全覆盖阴影的情况；反之，如果设置过大，则会出现阴影和物体分离（漏光）的情况：

<Demo :height="500" src="/demos/graphics/shadow_bias.ts"></Demo>

<<< @/public/demos/graphics/shadow_bias.ts

## 阴影类型
通过设置阴影类型，可以控制阴影的表现效果。目前支持的阴影类型有：
- HARD：硬阴影，是一种比较锐利的阴影，通常用于阴影距离物体比较近的情况。
- SOFT：软阴影，是一种比较柔和、模糊的阴影，阴影边缘做了模糊处理，通常用于阴影离物体比较远的情况。
- PCF：PCF（Percentage-Closer Filtering） 是一种常见的软阴影处理算法，通过对当前像素和周围的阴影深度进行采样并按距离进行加权平均，从而得到一种人工伪造的柔和阴影效果。目前引擎默认使用这个类型的阴影。

配置阴影类型：
```ts
Engine3D.setting.shadow.type = 'HARD'; // 默认 PCF
```
<!-- 
<Demo :height="500" src="/demos/graphics/shadow_type.ts"></Demo>

<<< @/public/demos/graphics/shadow_type.ts
-->

## 阴影属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | Boolean | 是否启用阴影，默认 false |
| type | String | 阴影类型，默认 PCF |
| shadowQuality | Number | 阴影渲染品质 |
| shadowBound | Number | 阴影区域范围 |
| shadowBias | Number | 平行光阴影偏移值，可以通过调节阴影和物体的距离，来避免阴影失真，减少条纹或波纹图案 |
| pointShadowBias | Number | 点光源和聚光灯的阴影偏移值 |
| shadowSize | Number | 平行光阴影贴图尺寸大小，默认2048，数值越小性能开销越低，但阴影锯齿感越明显 |
| pointShadowSize | Number | 点光源阴影贴图大小尺寸，默认1024 |
| shadowNear | Number | 阴影近截面|
| shadowFar | Number | 阴影远截面 |
| autoUpdate | Boolean | 是否自动更新阴影，默认 false |