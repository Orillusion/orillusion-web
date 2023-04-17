# Texture

## Overview of Texture
Texture is one of the most commonly used resources in 3D rendering. When we color a model, we need to set a color value for each fragment. In addition to setting the color value directly, we can also choose to read the texel from the texture to color it, thus achieving a richer artistic effect.


## Texture Type

| Type                                                 | Description                                                                                                               |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [2D Texture](/api/classes/BitmapTexture2D)           | Most commonly used art resources, using two-dimensional UV coordinates for sampling                                       |
| [Cross Cube Texture](/api/classes/BitmapTextureCube) | 6 2D textures form a cross cube texture, which can be used to implement skybox, environment reflection, and other effects |
| [LDR Cube Texture](/api/classes/LDRTextureCube)      | 6 LDR textures form a panoramic sky map, which can be used to implement skybox, environment reflection, and other effects |
| [HDR Texture](/api/classes/HDRTexture)               | Supports sampling textures in `RGBE` format                                                                               |
| [HDR Cube Texture](/api/classes/HDRTextureCube)      | 6 HDR textures form a panoramic sky map, which can be used to implement skybox, environment reflection, and other effects |

## Create Texture

### 1. Create 2D Texture Manually

By creating a texture instance, we can manually create a texture object, and then load the corresponding image resource through `load`:
- `2D Texture` supports web common image formats, `jpg/png/webp`;
- `HDR Texture` supports loading `.hdr` images in `RGBE` format;
```ts
import { BitmapTexture2D } from '@orillusion/core';
// Create 2D Texture
let texture = new BitmapTexture2D();
// Load texture resource
texture.load('path/to/image.png');

// Create HDR Texture
let hdrTexture = new HDRTexture();
hdrTexture = await hdrTexture.load('path/to/image.hdr');
```

### 2. Load Texture Through Resource Manager

Besides manually creating texture objects, we recommend loading images through the [resource manager](/guide/resource/Readme) to automatically create the corresponding texture maps:

```ts
import { Engine3D } from '@orillusion/core';
// 2D Texture
let texture = Engine3D.res.loadTexture('path/to/image.png');
// HDR Texture
let hdrTexture = Engine3D.res.loadHDRTexture('path/to/image.hdr');
// Cross Texture Cube
let texture = Engine3D.res.loadTextureCube('path/to/sky.png');
// LDR Texture Cube
let HDRTextureCube = Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// HDR Texture Cube
let HDRTextureCube = Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```

### 3. Manually Fill Color Data

The texture actually corresponds to the color value of each pixel, that is, the `RGBA` channel. We can manually create `Uint8Array` to fill in the specific numerical values of the `rgba` color channel, and then create the texture through [Uint8ArrayTexture](/api/classes/Uint8ArrayTexture) class:

```ts
// Parameters of picture
let w = 32;
let h = 32;
let r = 255;
let g = 0;
let b = 0;
let a = 255;
// Creat raw Uint8Array
let textureData = new Uint8Array(w * h * 4);
// Fill rgba values
for (let i = 0; i < w; i++) {
  for (let j = 0; j < h; j++) {
      let pixelIndex = j * w + i;
      textureData[pixelIndex * 4 + 0] = r;
      textureData[pixelIndex * 4 + 1] = g;
      textureData[pixelIndex * 4 + 2] = b;
      textureData[pixelIndex * 4 + 3] = a;
    }
  }
// Create texture through rawData
let texture = new Uint8ArrayTexture();
texture.create(16, 16, textureData, true);
```

## Load Texture

### 2D Texture

We can directly assign the texture to the corresponding property of the material, such as the basic texture `(baseMap)`:

```ts
let floorMat = new LitMaterial();
let texture = await Engine3D.res.loadTexture('path/to/image.png');
floorMat.baseMap = texture;
```

<Demo :height="300" src="/demos/texture/texture2D.ts"></Demo>

<<< @/public/demos/texture/texture2D.ts

### Cross Texture Cube

`Cross Texture Cube` has 6 faces, that is, 6 2D textures are arranged in the order of the following figure to form a cube box:

![box](/images/box.webp)

`Cross Texture Cube` can be used to implement skybox, environment reflection, and other effects. We recommend loading `1` complete cross cube texture directly through [Res](#_2-load-texture-through-resource-manager) and assigning it to `scene.envMap

```ts
// Load a cross texture cube
let textureCube = Engine3D.res.loadTextureCube('path/to/crossSky.png');
// Set skybox
scene.envMap = textureCube;
```
Also, we can manually load `6` independent faces of the cube texture through [BitmapTextureCube](/api/classes/BitmapTextureCube):
```ts
let textureCube = new BitmapTextureCube();
// Load 6 independent faces
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

### Panoramic Texture Cube
By loading a panoramic texture cube using [Res](#_2-load-texture-through-resource-manager), we can also load a panoramic (equirectangular) type of texture. Both common `RGBA` type images and `hdr` images in `RGBE` format are supported:
```ts
// Load LDR panoramic texture cube
let ldrTextureCube = await Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// Load HDR panoramic texture cube
let hdrTextureCube = await Engine3D.res.loadHDRTextureCube('path/to/sky.hdr');
```

<Demo :height="300" src="/demos/texture/hdrBox.ts"></Demo>

<<< @/public/demos/texture/hdrBox.ts

## Texture Settings

### 1. 纹理重复
### 1. Texture Repeat

The default range of texture sampling is `[0,1]`, that is, the texture is tiled to the entire plane. We can manually change the coordinate range of texture repetition by setting the [uvTransform_1](/api/classes/LitMaterial#uvtransform-1) property of the [material](/guide/graphics/materials):
```ts
let mat = new LitMaterial();
// Make the texture repeat 2 times in the horizontal and vertical directions
mat.uvTransform_1 = new Vector4(0,0,2,2);
mat.baseMap = new BitmapTexture2D();
```
When the `uvtransform_1` of the texture exceeds the range of `[0,1]`, we can control the way of repetition in the horizontal and vertical directions by setting the `addressModeU` and `addressModeV` properties of the texture, for example:
```ts
let texture = new BitmapTexture2D();
// Horizontal direction, default repeat mode
texture.addressModeU = GPUAddressMode.repeat;
// Vertical direction, default repeat mode
texture.addressModeV = GPUAddressMode.repeat;
```

`WebGPU` currently supports the following repeat modes:

- Repeat: default mode, the range beyond the range is resampled from `[0,1]` starting from the beginning.

![repeat](/images/repeat.webp)

- Mirror_repeat: beyond the range, after the mirror flip, resampling starts from `[0,1]`.

![mirror](/images/mirror.webp)

- Clamp_to_edge: beyond the range, sample the edge pixel color of the texture.

![clamp](/images/clamp.webp)


<Demo :height="500" src="/demos/texture/texture_address.ts"></Demo>

<<< @/public/demos/texture/texture_address.ts
 
### 2. Sampling Filter Mode

Generally speaking, pixels and screen pixels may not correspond exactly, which requires the `GPU` to scale the pixel size. But different scaling modes can have a certain impact on the final pixel color. We can control the filtering mode used when `GPU` zooms in (Mag) and out (Min) pixels by setting the `magFilter` and `minFilter` attributes of the texture. 

```ts
let texture = new BitmapTexture2D();
// Magnification mode, default linear mode
texture.magFilter = 'linear';
// Minification mode, default linear mode
texture.minFilter = 'linear';
```
`WenGPU` currently supports `linear` sampling and `nearest` point sampling modes.   
Generally speaking, the `linear` mode has a smoother pixel edge, which is suitable for complex graphic transitions; the `nearest` mode has a sharper pixel edge, which is suitable for textures with clear color distribution and obvious edges. We can see the effect of different sampling modes on the texture display through the following example:

<Demo :height="500" src="/demos/texture/texture_filter.ts"></Demo>

<<< @/public/demos/texture/texture_filter.ts

### 3. Mipmap
In 3D world, different objects and cameras have different distances, the corresponding texture images are large and small. If the same resolution texture is used, for distant objects, a small part of the pixel color needs to be picked up from the high resolution original image, which not only wastes GPU performance, but also causes a sense of unreality or a large number of moire patterns due to pixel distortion.  
`Orillusion` uses the concept of `mipmap` to solve this problem. Simply put, it is a high resolution graphic that is automatically scaled into a series of different resolution textures. According to the distance between the texture and the observer, different resolution textures are used. Distant objects use low resolution textures, which are more natural in resolution, and can also effectively save GPU performance.

We can enable or disable it through `useMipmap`, which is enabled by default:
```ts
let texture = new BitmapTexture2D();
// True by default
texture.useMipmap = true;
```

<Demo :height="500" src="/demos/texture/texture_mipmap.ts"></Demo>

<<< @/public/demos/texture/texture_mipmap.ts