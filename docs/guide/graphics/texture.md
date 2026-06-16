# Texture

## Texture Overview
Texture, is one of the most commonly used resources in 3D rendering. When shading a model, we need to set a color value for each fragment. Besides setting this color value directly and manually, we can also choose to read texels from a texture for shading, thereby achieving richer artistic effects.


## Texture Types

| Type | Description |
| --- | --- |
| [2D Texture](/api/classes/BitmapTexture2D) | The most commonly used art resource, sampled using two-dimensional UV coordinates |
| [Cross Cube Texture](/api/classes/BitmapTextureCube) | 6 2D textures form a cross cube texture, which can be used to implement effects such as skyboxes and environment reflections |
| [LDR Cube Texture](/api/classes/LDRTextureCube) | 6 LDR textures form a panoramic sky image, which can be used to implement effects such as skyboxes and environment reflections |
| [HDR Texture](/api/classes/HDRTexture) | Supports sampling textures in `RGBE` format |
| [HDR Cube Texture](/api/classes/HDRTextureCube) | 6 HDR textures form a panoramic sky image, which can be used to implement effects such as skyboxes and environment reflections |

## Creating Textures

### 1. Manually Creating a 2D Texture

By creating a texture instance, we can manually create a texture object, and then manually load the corresponding image resource through `load`:
- `2D textures` support common web image formats, `jpg/png/webp`;
- `HDR textures` support loading `.hdr` images in `RGBE` format;
```ts
import { BitmapTexture2D } from '@orillusion/core';
// Create a 2D texture
let texture = new BitmapTexture2D();
// Load the texture resource
texture.load('path/to/image.png');

// Create an HDR texture
let hdrTexture = new HDRTexture();
hdrTexture = await hdrTexture.load('path/to/image.hdr');
```

### 2. Loading via the Resource Manager

In addition to manually creating texture objects, we recommend conveniently loading images and automatically creating the corresponding textures through the [resource manager](/guide/resource/Readme):


```ts
import { Engine3D } from '@orillusion/core';
// 2D texture
let texture = engine.res.loadTexture('path/to/image.png');
// HDR texture
let hdrTexture = engine.res.loadHDRTexture('path/to/image.hdr');
// Cross cube texture
let texture = engine.res.loadTextureCube('path/to/sky.png');
// LDR panorama
let HDRTextureCube = engine.res.loadLDRTextureCube('path/to/sky.png');
// HDR panorama
let HDRTextureCube = engine.res.loadHDRTextureCube('path/to/sky.hdr');
```

### 3. Manually Filling in Color Data

At its core, a texture actually corresponds to the color value of each pixel, i.e. the `RGBA` channels. We can manually create a `Uint8Array` to fill in the specific values of the `rgba` color channels, and then manually create a texture through the [Uint8ArrayTexture](/api/classes/Uint8ArrayTexture) class:

```ts
// Image parameters
let w = 32;
let h = 32;
let r = 255;
let g = 0;
let b = 0;
let a = 255;
// Create a raw Uint8Array
let textureData = new Uint8Array(w * h * 4);
// Fill in the rgba values
for (let i = 0; i < w; i++) {
  for (let j = 0; j < h; j++) {
      let pixelIndex = j * w + i;
      textureData[pixelIndex * 4 + 0] = r;
      textureData[pixelIndex * 4 + 1] = g;
      textureData[pixelIndex * 4 + 2] = b;
      textureData[pixelIndex * 4 + 3] = a;
    }
  }
// Create a texture through rawData
let texture = new Uint8ArrayTexture();
texture.create(16, 16, textureData, true);
```

## Loading Textures

### 2D Texture

We can directly assign a texture to the corresponding property of a material, such as the base texture `(baseMap)`:

```ts
let floorMat = new LitMaterial();
let texture = await engine.res.loadTexture('path/to/image.png');
floorMat.baseMap = texture;
```

<Demo :height="300" src="/demos/texture/texture2D.ts"></Demo>

<<< @/public/demos/texture/texture2D.ts

### Cross Cube Texture

A `cross cube texture` has 6 faces, i.e. 6 2D textures arranged and combined into a cube box in the order shown below:

![box](/images/box.webp)

The `cross cube texture` can be used to implement effects such as skyboxes and environment reflections. We recommend directly using the [Res](#_2-loading-via-the-resource-manager) method to load `1` complete cross cube texture and assigning it directly to `scene.envMap`:

```ts
// Load a cross cube texture
let textureCube = engine.res.loadTextureCube('path/to/crossSky.png');
// Set the skybox
scene.envMap = textureCube;
```
In addition, we can also manually load a cube texture of `6` independent faces through the [BitmapTextureCube](/api/classes/BitmapTextureCube) class:
```ts
let textureCube = new BitmapTextureCube();
// Load the 6 independent faces separately
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

### Panorama Cube Texture
In addition to the `cross cube texture`, we can also load equirectangular type textures through [Res](#_2-loading-via-the-resource-manager). It supports both `RGBA` type ordinary images and `hdr` images in `RGBE` format:
```ts
// Ordinary format panorama
let ldrTextureCube = await engine.res.loadLDRTextureCube('path/to/sky.png');
// Load an hdr panorama texture
let hdrTextureCube = await engine.res.loadHDRTextureCube('path/to/sky.hdr');
```

<Demo :height="300" src="/demos/texture/hdrBox.ts"></Demo>

<<< @/public/demos/texture/hdrBox.ts

## Texture Settings

### 1. Texture Repeat

The default sampling range of a texture is `[0,1]`, i.e. tiling the texture across the entire plane. We can manually change the coordinate range over which the texture repeats by setting the [uvTransform_1](/api/classes/LitMaterial#uvtransform-1) property of the [material](/guide/graphics/materials):
```ts
let mat = new LitMaterial();
// Make the texture repeat 2 times in both the horizontal and vertical directions
mat.uvTransform_1 = new Vector4(0,0,2,2);
mat.baseMap = new BitmapTexture2D();
```
When the texture `uvtransform_1` exceeds the `[0,1]` range, we can control the way it repeats in the horizontal and vertical directions by setting the texture's `addressModeU` and `addressModeV` properties, for example:

```ts
let texture = new BitmapTexture2D();
// Horizontal direction, default repeat mode
texture.addressModeU = GPUAddressMode.repeat;
// Vertical direction, default repeat mode
texture.addressModeV = GPUAddressMode.repeat;
```

Currently `WebGPU` supports the following repeat modes by default:

- Repeat mode (repeat): the default mode, i.e. for out-of-range values, resampling starts again from `[0,1]`

![repeat](/images/repeat.webp)

- Mirror repeat mode (mirror_repeat): for out-of-range values, after a mirror flip, resampling starts again from `[0,1]`.

![mirror](/images/mirror.webp)

- Clamp mode (clamp_to_edge): for out-of-range values, samples the color of the texel at the texture edge.

![clamp](/images/clamp.webp)


<Demo :height="500" src="/demos/texture/texture_address.ts"></Demo>

<<< @/public/demos/texture/texture_address.ts
 
### 2. Sampling Filter Mode

Generally speaking, texels and screen pixels do not correspond exactly, which requires the `GPU` to scale the pixel size. However, different scaling modes will have a certain influence on the final pixel color. We can control the filter mode used by the `GPU` when magnifying (Mag) and minifying (Min) pixels by setting the texture's `magFilter` and `minFilter` properties.

```ts
let texture = new BitmapTexture2D();
// Magnification mode, default linear mode
texture.magFilter = 'linear';
// Minification mode, default linear mode
texture.minFilter = 'linear';
```
Currently `WebGPU` supports `linear` linear sampling and `nearest` nearest-point sampling modes.   
Generally speaking, `linear` mode has smoother pixel edges, suitable for complex graphic transitions; `nearest` has sharper pixel edges, suitable for textures with clear color distribution and distinct edges. You can see the influence of different sampling modes on the texture's appearance through the following example:

<Demo :height="500" src="/demos/texture/texture_filter.ts"></Demo>

<<< @/public/demos/texture/texture_filter.ts

### 3. Mipmap
In the 3D world, because different objects are at near and far distances from the camera, the corresponding texture images are large and small. If the same texture resolution is used, distant objects need to pick a small portion of pixel colors from the high-resolution original image, which not only wastes `GPU` performance but also causes an unrealistic feeling or a large amount of `moire` due to pixel distortion.   
`Orillusion` uses the concept of a `Mipmap` to solve this problem. Simply put, it automatically scales a high-resolution image into a series of textures of different resolutions. Depending on the distance between the texture and the viewer, textures of different resolutions are used. Distant objects use lower-resolution textures, which is more natural in resolution and can also effectively save `GPU` performance.

We can enable or disable it through `useMipmap`, which is enabled by default
```ts
let texture = new BitmapTexture2D();
// true by default
texture.useMipmap = true;
```

<Demo :height="500" src="/demos/texture/texture_mipmap.ts"></Demo>

<<< @/public/demos/texture/texture_mipmap.ts
