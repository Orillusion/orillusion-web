# Materials
## Overview of Materials
Our engine adds the corresponding `material` object to the object through the [MeshRenderer](/api/classes/MeshRenderer) component to simulate its color, lighting, texture, etc. Currently, the engine has two built-in classic material models:

|     Name      | Description                                                                                     |
|:-------------:|-------------------------------------------------------------------------------------------------|
| UnLitMaterial | Does not calculate lighting, only renders original color and texture information                |
|  LitMaterial  | `PBR` is based on physical rendering, aiming to simulate the lighting effects of the real world |

We recommend that users use the [glTF](/guide/resource/gltf) format file to contain the material information of the object. Users can design and modify the model file through common modeling software. After the engine parses the model file, it automatically assigns the corresponding material to the object.

## Basic Usages
```ts
import {Object3D. MeshRenderer, LitMaterial, SphereGeometry, Color} from '@orillusion/core'

let object = new Object3D();
// Add MeshRenderer component
let mesh = object.addComponent(MeshRenderer);

// Set material of MeshRenderer
mesh.material = new UnLitMaterial();
mesh.material.baseColor = new Color(1, 1, 1, 1);

// Switch Material
mesh.material = new LitMaterial();
```

## Unlit Material
The engine provides the [UnLitMaterial](/api/classes/UnLitMaterial) class for rendering `Unlit` materials.

| Attribute |   Description   |
|:---------:|:---------------:|
| baseColor |   Base color    |
|  baseMap  |    Base map     |
|  envMap   | Environment map |
| shadowMap |   Shadow map    |

<Demo src="/demos/materials/UnLitMaterial.ts"></Demo>

<<< @/public/demos/materials/UnLitMaterial.ts

## PBR Material
We recommend using the [PBR](/api/classes/LitMaterial) material for rendering, `PBR` stands for `Physicallly-Based Rendering`, which is a material based on physical rendering. That means to be more in line with the physical lighting model of reality.

|     Attribute     |                                     Description                                     |
|:-----------------:|:-----------------------------------------------------------------------------------:|
|     baseColor     |                                     Base color                                      |
|   emissiveColor   |                                   Emissive color                                    |
| emissiveIntensity |      Emissive intensity, need to open HDRBloomPost to display the glow effect       |
|     roughness     |                              Roughness of the material                              |
|     metallic      |                              Metallic of the material                               |
|    normalScale    |                    The effect of the normal map on the material                     |
|     clearCoat     |                                Clear coat intensity                                 |
|      envMap       |                                   Environment map                                   |
|   envIntensity    |                             Environment light intensity                             |
|    materialF0     |                                Material reflectance                                 |
|        ao         | Ambient Occlussion, handles the effect of ambient light on the occlusion of objects |
|       aoMap       |                             Ambient light occlusion map                             |
|      baseMap      |                                      Base map                                       |
|     normalMap     |                                     Normal map                                      |
|      maskMap      |                                      Mask map                                       |
|    emissiveMap    |                                    Emissive map                                     |
|      brdfLUT      |                                  BRDF lookup table                                  |

<Demo src="/demos/materials/PBR.ts"></Demo>

<<< @/public/demos/materials/PBR.ts


## Material Settings
### Color
```ts
let mat = new UnLitMaterial();
mat.baseColor = new Color(1, 0, 0, 1);
```

<Demo :height="300" :code="false" src="/demos/materials/color.ts"></Demo>

### Transparency & Blend Mode
```ts
let mat = new UnLitMaterial();
mat.transparent = true;
mat.blendMode = BlendMode.ALPHA;
mat.baseColor = new Color(1, 0, 0, 0.5);
```

<Demo :height="300" :code="false" src="/demos/materials/blendMode.ts"></Demo>

See more about [BlendMode](/api/enums/BlendMode.html)

### Switching Cull Mode
In order to save `GPU` performance, `Orillusion` uses the `back` culling mode by default, that is, only the front face material of the object is rendered. Set the material [cullMode](/api/classes/LitMaterial#cullMode) property to switch the display mode.
```ts
let mat = new LitMaterial();
mat.cullMode = GPUCullMode.none; // Do not cull, display both sides
mat.cullMode = GPUCullMode.front; // Cull the front, display the back
mat.cullMode = GPUCullMode.back; // Cull the back, display the front
```

<Demo :height="300" :code="false" src="/demos/materials/cullMode.ts"></Demo>

### UV Transform
The model vertex will store multiple sets of texture mapping coordinates, which define the 2D coordinates corresponding to the vertex in the texture. It is usually represented by a two-dimensional variable `(u,v)`, so it is also called `UV coordinates`.   
We can customize the texture mapping relationship by performing matrix transformations on the `uv` coordinates of the model. For example, set the material `transformUV1` shader value to perform coordinate transformations of the original `uv` for `offset` and `scaling`:
```ts
let mat = new LitMaterial();
// Get current uv transform
let uv = mat.defaultPass.getUniform(`transformUV1`)
// Set a new uv transform - Vector4(offsetU, offsetV, scalingU, scalingV)
mat.defaultPass.setUniform(`transformUV1`, new Vector4(0, 0, 1, 1))
```

<Demo :height="300" :code="false" src="/demos/materials/uv.ts"></Demo>
