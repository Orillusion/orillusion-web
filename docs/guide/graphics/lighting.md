# 光照

光照使场景更有层次感，使用光照，能建立更真实的三维场景。`Orillusion` 引擎的光照系统主要由以下几部分组成：

| 光源 | 说明 |
| :---: | :---: |
| 灯光组件 | 基础光源组件：平行光，点光源，聚光灯 和 矩形面光源 |
| 环境反射 | 天空盒环境光，全局曝光 |
| 全局光照 | 场景中反射或折射的间接光源 |

## 灯光组件
引擎目前内置了4种光源类型：

### 平行光

[平行光](/api/classes/DirectLight) 表示的是光线从以某个方向均匀射出，光线之间是平行的，太阳照射在地球表面的光可以认为是平行光，因为太阳和地球距离的远大于地球半径，所以照射在地球的阳光可以看作是来自同一个方向的光，即平行光。`平行光` 有 `4` 个主要个特性：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| lightColor | Color | 灯光的颜色, 默认是白色 `rgb(1.0,1.0,1.0)` |
| intensity | Number | 光照强度，默认值为 `1` |
| direction | Vector3 | 只读属性，获取平行光的方向向量 |
| castShadow | Boolean | 是否开启投影, 默认 `false` 不开启 |

一般使用平行光所在的 `Object3D` 的 `rotation` 控制灯光方向
```ts
let lightObj = new Object3D();
scene.addChild(lightObj);

//添加平行光
let dl = lightObj.addComponent(DirectLight);
//设置颜色
dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
//设置强度
dl.intensity = 20;

// 通过 Object3D 设置光源的方向
lightObj.rotateX = 45;
lightObj.rotateY = 45;
// 可以通过 direction 获取方向向量
let target = dl.direction
```

<Demo :height="500" src="/demos/graphics/lighting_dir.ts"></Demo>
 
<<< @/public/demos/graphics/lighting_dir.ts

### 点光源

[点光源](/api/classes/PointLight) 是存在于空间中的一个点，由该点向四面八方发射光线，超过有效距离的地方将无法接受到点光源的光线，并且离光源越远光照强度也会逐渐降低。通常用来模拟生活中常见的灯泡。点光源有主要以下属性：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| lightColor | Color | 灯光的颜色, 默认是白色 `rgb(1.0,1.0,1.0)` |
| intensity | Number | 光照强度，默认值为 `1` |
| range | Number | 光照最远距离 |


```ts
let pointLightObj = new Object3D();
// 设置光源 Object3D 的位置
pointLightObj.x = -10;
pointLightObj.y = 10;
pointLightObj.z = 10;
scene.addChild(pointLightObj);

// 设置点光源组件的半径，强度和颜色
let pointLight = pointLightObj.addComponent(PointLight);
pointLight.range = 20;
pointLight.intensity = 10;
pointLight.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
```

<Demo :height="500" src="/demos/graphics/lighting_point.ts"></Demo>
 
<<< @/public/demos/graphics/lighting_point.ts
    
### 聚光灯
    
[聚光灯](/api/classes/SpotLight) 和 `点光源` 类似，但是它的光线不是朝四面八方发射，而是朝某个方向范围，就像现实生活中的手电筒发出的光。聚光灯有几个主要特性：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| lightColor | Color | 灯光的颜色, 默认是白色 `rgb(1.0,1.0,1.0)` |
| intensity | Number | 光照强度，默认值为 `1` |
| direction | Vector3 | 只读属性，获取聚光的方向向量 |
| range | Number | 光照最远距离 |
| innerAngle | Number | 光锥内切角，聚光在小于这个角度的范围内有光线 |
| outerAngle | Number | 光锥外切角，光线会在内切角到外切角的范围内逐步衰减到0 |
    
```ts
let spotLightObj = new Object3D();
// 设置光源 Object3D 的位置
spotLightObj.y = 100;
spotLightObj.rotationX= 90;
scene.addChild(spotLightObj);

// 设置聚光灯组件的属性
let spotLight = spotLightObj.addComponent(SpotLight);
spotLight.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
spotLight.intensity = 20;
spotLight.range = 200;
spotLight.innerAngle = 20;
spotLight.outerAngle = 35;
```

<Demo :height="500" src="/demos/graphics/lighting_spot.ts"></Demo>
 
<<< @/public/demos/graphics/lighting_spot.ts

### 矩形面光源

[矩形面光源](/api/classes/RectLight) 是一块有实际尺寸的矩形发光面板，只从一侧发光，可以用来模拟窗户、柔光箱、吸顶灯板、屏幕等。与点光源、聚光灯不同，它的光来自一整块面积：近处的表面会得到柔和、能"包裹"物体的漫反射，光滑的表面上会映出矩形的高光。矩形面光源有以下主要属性：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| lightColor | Color | 灯光的颜色, 默认是白色 `rgb(1.0,1.0,1.0)` |
| intensity | Number | 面板的发光强度（辐亮度），默认值为 `5` |
| width | Number | 面板宽度（沿物体的右方向），默认值为 `2` |
| height | Number | 面板高度（沿物体的上方向），默认值为 `1` |
| range | Number | 光照最远距离，从面板中心到该距离处衰减为 `0`，默认值为 `20` |

面板朝物体的前方发光，与聚光灯一样通过 `Object3D` 的旋转控制朝向，也可以用 `lookAt` 让它直接朝向某个目标点：
```ts
let rectLightObj = new Object3D();
scene.addChild(rectLightObj);

// 设置矩形面光源组件的属性
let rectLight = rectLightObj.addComponent(RectLight);
rectLight.lightColor = new Color(1.0, 0.72, 0.45, 1.0);
rectLight.intensity = 6;
rectLight.width = 5;
rectLight.height = 4;
rectLight.range = 45;

// 放在 (-9, 5, 3)，朝向 (0, 2, 0) 发光
rectLightObj.transform.lookAt(new Vector3(-9, 5, 3), new Vector3(0, 2, 0));
```

::: tip
- `intensity` 表示面板单位面积的发光强度，因此面板越大，场景越亮，这与现实中的柔光箱一致；
- 矩形面光源不产生阴影，`castShadow` 会被忽略；
- 光源本身是不可见的。如果希望看到发光面板，可以在同一位置放一个尺寸相同的 `UnLitMaterial` 平面或薄盒子，如下面的示例所示。
:::

下面的示例是一个只由三块矩形面光源照亮的暗室：左侧暖色主光、右侧冷色补光，以及一条在舞台上方摆动的品红色灯条。光滑的地面上可以看到每块面板被拉长的矩形倒影，背墙和磨砂小球上可以看到随面板尺寸变化的柔和漫反射；两排小球的粗糙度从镜面逐渐过渡到磨砂。

<Demo :height="500" src="/demos/graphics/lighting_rect.ts"></Demo>

<<< @/public/demos/graphics/lighting_rect.ts

## IES 灯光信息
照明工程学会（IES）定义了一种文件格式，可以描述真实灯光在现实世界的光照强度分布情况。IES 文件描述了各种类型的灯具的光线强弱度，衰减曲线，模拟灯珠的透射，折射等光线变化行为，最终解码成指定的2D数据图进行3D空间的灯光映射。

### IES 灯光示例
![ies_0](/images/ies/image2017-6-29_11-38-7584f.webp)
![ies_1](/images/ies/image2017-6-29_11-41-2a59d.webp)
![ies_2](/images/ies/image2017-6-30_19-21-325aef.webp)

### 加载 IES 贴图
除了常规的光源类型设置，引擎还支持通过加载预设的 `IES` 贴图来设置复杂的光线分布：
```ts
// 加载 IES 贴图
let iesTexture = await engine.res.loadTexture("https://cdn.orillusion.com/ies/ies_2.png");
// 创建 IES 对象
let iesPofiles = new IESProfiles();
iesPofiles.IESTexture = iesTexture;
let light = new Object3d()
let pointLight = light.addComponent(PointLight);
// 设置灯光 IES 分布
pointLight.iesPofile = iesPofiles;
```

<Demo :height="500" src="/demos/graphics/lighting_pointIes.ts"></Demo>

<<< @/public/demos/graphics/lighting_pointIes.ts

### 获取 IES 贴图
社区中有大量优质的 `IES` 资源分享社区，一些灯光设备厂商也会分享专业的 `IES` 文件，它们一般都是免费的，比如：

- [ieslibrary](https://ieslibrary.com/en/home)
- [leomoon](https://leomoon.com/store/shaders/ies-lights-pack/)
- [Lithonia Lighting](https://lithonia.acuitybrands.com/resources/technical-downloads/photometricdownloads)
- [Philips](https://www.usa.lighting.philips.com/support/support/literature/photometric-data)

社区中同样有很多专业的 `IES` 预览/转换的软件，比如 [IESviewer](http://photometricviewer.com/)，您也可以使用专业的3D建模软件来将 `IES` 文件转换到普通的 `png` 贴图文件，最后加载到引擎中来。

##  环境光
除了直接的光源，引擎通过设置 `Scene3D.evnMap` 天空盒贴图进行基本的环境光渲染，详情参考 [天空盒](/guide/core/scene.html) 相关介绍

## 全局光照
一般光照系统只考虑光源直接照射到物体表面所产生的效果，不会计算光源经过物体表面反射或折射的光线，即间接光照。全局光照系统能够对间接光照进行建模，实现更加逼真的光线效果。详情参考 [高级 GI](/guide/advanced/gi)