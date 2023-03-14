# 纹理

## 纹理总览
纹理（Texture）, 是在 3D 渲染中最常用到的资源之一。我们在给模型着色时，需要给每个片元设置一个颜色值，这个色值除了直接手动设置，我们还可以选择从纹理中读取纹素进行着色，从而达到更加丰富的美术效果。


## 纹理类型

| 类型 | 描述 |
| --- | --- |
| [2D纹理](/api/classes/BitmapTexture2D) | 最常用的美术资源，使用二维 UV 坐标进行采样 |
| [十字立方纹理](/api/classes/BitmapTextureCube) | 6张 2D 纹理组成了一个十字立方纹理，可以用来实现天空盒、环境反射等特效 |
| [LDR立方纹理](/api/classes/LDRTextureCube) | 6张 LDR 纹理组成了一个全景天空图，可以用来实现天空盒、环境反射等特效 |
| [HDR纹理](/api/classes/HDRTexture) | 支持 `RGBE` 格式的采样纹理 |
| [HDR立方纹理](/api/classes/HDRTextureCube) | 6张 HDR 纹理组成了一个全景天空图，可以用来实现天空盒、环境反射等特效 |

## 创建贴图

### 1. 手动创建2D纹理

通过创建纹理实例，我们可以手动创建一个贴图对象，再通过 `load` 手动加载对应的图片资源：
- `2D纹理` 支持 web 常见的图片格式，`jpg/png/webp`;
- `HDR纹理` 支持加载 `RGBE` 格式的 `.hdr` 图片;
```ts
import { BitmapTexture2D } from '@orillusion/core';
// 创建2D纹理
let texture = new BitmapTexture2D();
// 加载贴图资源
texture.load('path/to/image.png');

// 创建 HDR 贴图
let hdrTexture = new HDRTexture();
hdrTexture = await hdrTexture.load('path/to/image.hdr');
```

### 2. 通过资源管理器加载

除了手动创建纹理对象，我们推荐通过 [资源管理器](/guide/resource/Readme) 便捷的加载图片并自动创建对应的纹理贴图：


```ts
import { Engine3D } from '@orillusion/core';
// 2D纹理
let texture = Engine3D.res.loadTexture('path/to/image.png');
// HDR贴图
let hdrTexture = Engine3D.res.loadHDRTexture('path/to/image.hdr');
// 十字立方纹理
let texture = Engine3D.res.loadTextureCube('path/to/sky.png');
// LDR全景图
let HDRTextureCube = Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// HDR全景图
let HDRTextureCube = Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```

### 3. 手动填写颜色数据

纹理底层其实对应着每个像素的颜色值，即 `RGBA` 通道，我们可以手动创建 `Uint8Array` 填写 `rgba` 颜色通道的具体数值，然后通过 [Uint8ArrayTexture](/api/classes/Uint8ArrayTexture) 类手动创建纹理：

```ts
// 图片参数
let w = 32;
let h = 32;
let r = 255;
let g = 0;
let b = 0;
let a = 255;
// 创建 raw Uint8Array
let textureData = new Uint8Array(w * h * 4);
// 填充 rgba 数值
for (let i = 0; i < w; i++) {
  for (let j = 0; j < h; j++) {
      let pixelIndex = j * w + i;
      textureData[pixelIndex * 4 + 0] = r;
      textureData[pixelIndex * 4 + 1] = g;
      textureData[pixelIndex * 4 + 2] = b;
      textureData[pixelIndex * 4 + 3] = a;
    }
  }
// 通过 rawData 创建贴图
let texture = new Uint8ArrayTexture();
texture.create(16, 16, textureData, true);
```

## 加载贴图

### 2D贴图

我们可以直接将纹理赋予材质球的相应属性，比如基础的贴图 `(baseMap)`：

```ts
let floorMat = new LitMaterial();
let texture = await Engine3D.res.loadTexture('path/to/image.png');
floorMat.baseMap = texture;
```

<Demo :height="300" src="/demos/texture/texture2D.ts"></Demo>

<<< @/public/demos/texture/texture2D.ts

### 十字立方贴图

`十字立方贴图` 有 6 个面，即用 6 张 2D 纹理按下图的顺序排列组合成一个立方盒子：

![box](/images/box.webp)

`十字立方纹理` 可以用来实现天空盒、环境反射等特效，我们推荐直接使用 [Res](#_2-通过资源管理器加载) 方式加载 `1` 张完整的十字立方贴图，直接赋值给 `scene.envMap` 即可：

```ts
// 加载一张十字立方贴图
let textureCube = Engine3D.res.loadTextureCube('path/to/crossSky.png');
// 设置天空盒
scene.envMap = textureCube;
```
除此之外，我们也可以通过 [BitmapTextureCube](/api/classes/BitmapTextureCube) 类手动加载 `6` 个独立面的立方贴图：
```ts
let textureCube = new BitmapTextureCube();
// 分别加在独立6个面
await textureCube.load([
    'x Right',
    '-x Left',
    'y Up',
    '-y Down',
    'z Front',
    '-z Back'
]);
```

<Demo :height="300" src="/demos/texture/textureBox.ts"></Demo>

<<< @/public/demos/texture/textureBox.ts

### 全景立方贴图
除了 `十字立方贴图`，我们也可以通过 [Res](#_2-通过资源管理器加载) 加载全景 (equirectangular) 类型的贴图。同时支持 `RGBA` 类型的普通图片和支持 `RGBE` 格式的 `hdr` 图片：
```ts
// 普通格式全景图
let ldrTextureCube = await Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// 加载hdr全景贴图
let hdrTextureCube = await Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```

<Demo :height="300" src="/demos/texture/hdrBox.ts"></Demo>

<<< @/public/demos/texture/hdrBox.ts

## 纹理设置

### 1. 纹理重复

纹理采样的默认范围为`[0,1]`, 即平铺纹理到整个平面，我们可以通过设置 [材质](/guide/graphics/materials) 的 [uvTransform_1](/api/classes/LitMaterial#uvtransform-1) 属性，手动的改变贴图重复的坐标范围：
```ts
let mat = new LitMaterial();
// 使得贴图在 水平 和 竖直 方向上重复2次
mat.uvTransform_1 = new Vector4(0,0,2,2);
mat.baseMap = new BitmapTexture2D();
```
当纹理 `uvtransform_1` 超出 `[0,1]` 范围时，我们可以通过设置纹理的 `addressModeU` 和 `addressModeV` 两个属性，来控制水平方向和竖直方向上重复的方式，例如：

```ts
let texture = new BitmapTexture2D();
// 水平方向，默认 repeat 模式
texture.addressModeU = GPUAddressMode.repeat;
// 竖直方向, 默认 repeat 模式
texture.addressModeV = GPUAddressMode.repeat;
```

目前 `WebGPU` 默认支持以下几种循环模式：

- 重复模式（repeat）：默认模式，即对超出范围从 `[0,1]` 开始重新采样

![repeat](/images/repeat.webp)

- 镜像重复模式（mirror_repeat）：对超出范围经过镜像翻转后在从 `[0,1]` 开始重新采样。

![mirror](/images/mirror.webp)

- 截取模式（clamp_to_edge）：超出范围采样纹理边缘纹素颜色。

![clamp](/images/clamp.webp)


<Demo :height="500" src="/demos/texture/texture_address.ts"></Demo>

<<< @/public/demos/texture/texture_address.ts
 
### 2. 采样过滤模式

一般来说，纹素和屏幕像素不会刚好对应，这就需要 `GPU` 去缩放像素大小。但不同的缩放模式会对最终像素颜色有一定的影响。我们可以通过设置纹理的 `magFilter` 和  `minFilter` 属性来控制 `GPU` 放大（Mag）和 缩小（Min）像素时采用的过滤模式。

```ts
let texture = new BitmapTexture2D();
// 放大模式，默认 linear 模式
texture.magFilter = 'linear';
// 缩小模式，默认 linear 模式
texture.minFilter = 'linear';
```
目前 `WebGPU` 支持 `linear` 线性采样 和 `nearest` 临近点采样模式。   
一般来说 `linear` 模式像素边缘更加平滑，适合复杂的图形过渡；`nearest` 像素边缘更加锐利，适合颜色分布清晰，边缘明显的纹理，可以通过如下例子，看到不同的采样模式对贴图变现的影响：

<Demo :height="500" src="/demos/texture/texture_filter.ts"></Demo>

<<< @/public/demos/texture/texture_filter.ts

### 3. 多级渐远纹理 (Mipmap)
在3D世界中，因为不同的物体和摄像机距离有近有远，对应的纹理图像有大有小。如果采用同样分辨率的纹理，对于远处的物体需要从高分辨率的原始图像中拾取一小分部像素颜色，这不仅浪费 `GPU` 性能，也会因为像素畸变造成不真实的感觉或产生大量 `摩尔纹`。   
`Orillusion` 使用一种 `多级渐远纹理 (Mipmap)` 的概念来解决这个问题，简单说就是对一个高分辨的图形自动缩放成一系列不同分辨率的纹理。根据贴图和观察者的距离不同，使用不同分辨率的贴图。远距离的物体使用低分辨的纹理，解析度更自然，而且也能有效节省 `GPU` 性能。

我们可以通过 `useMipmap` 来进行开启或关闭，默认开启
```ts
let texture = new BitmapTexture2D();
// 默认为 true
texture.useMipmap = true;
```

<Demo :height="500" src="/demos/texture/texture_mipmap.ts"></Demo>

<<< @/public/demos/texture/texture_mipmap.ts