# Material
## Material Overview
The engine adds a corresponding `material` object to an object through the [MeshRenderer](/api/classes/MeshRenderer) component, used to simulate its color, lighting, texture, and other properties. Currently, the engine has 2 built-in classic material models:
| Name | Description |
| :---: | --- |
| UnLitMaterial | Does not compute lighting and shadows, only renders the original color and texture information |
| LitMaterial | `PBR`, i.e. Physically-Based Rendering, aims to simulate real-world lighting effects |

We recommend using the [glTF](/guide/resource/gltf) format file, which contains the object's material information. Users can design and modify model files through common modeling software. After the engine parses the model file, it automatically assigns the corresponding material to the object.

## Basic Usage
```ts
import {Object3D. MeshRenderer, LitMaterial, SphereGeometry, Color} from '@orillusion/core'

let object = new Object3D();
// Add MeshRenderer component
let mesh = object.addComponent(MeshRenderer);

// Set the component material
mesh.material = new UnLitMaterial();
mesh.material.baseColor = new Color(1, 1, 1, 1);

// Switch Material
mesh.material = new LitMaterial();
```

## Unlit Material
The engine provides the [UnLitMaterial](/api/classes/CylinderGeometry) material, which only renders the physical base color and does not compute lighting and shadows.

| Property | Description |
| :---: | :---: |
| baseColor | Base color |
| baseMap | Base texture |

<Demo src="/demos/materials/UnLitMaterial.ts"></Demo>

<<< @/public/demos/materials/UnLitMaterial.ts

## PBR Material
We advocate using [LitMaterial](/api/classes/LitMaterial), i.e. the `PBR` material, for rendering. `PBR` is the abbreviation of `Physically-Based Rendering`, referring to a material based on physical rendering, which better conforms to a real physical lighting model.

| Property | Description |
| :---: | :---: |
| baseColor | Material base color |
| emissiveColor | Material emissive color |
| emissiveIntensity | Material emissive intensity; BloomPost must be enabled to display the emissive effect |
| roughness | Material roughness |
| metallic | Material metalness |
| normalScale | The degree to which the normal map affects the material |
| clearCoat | Clear coat intensity |
| envMap | Environment map |
| envIntensity | Environment light intensity |
| materialF0 | Material reflectance |
| ao | Ambient Occlusion, handles the effect of ambient light occlusion on objects |
| aoMap | Ambient occlusion map |
| baseMap | Base texture |
| normalMap | Normal map |
| maskMap | Mask map |
| emissiveMap | Material emissive map |
| brdfLUT | BRDF lookup table |

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

For blend mode details, please refer to [BlendMode](/api/enums/BlendMode.html)

### Switching Cull Mode
To save `GPU` performance, `Orillusion` uses the `back` cull mode by default, i.e. only rendering the front-facing material of an object. We can set the material's [cullMode](/api/classes/LitMaterial#cullMode) property to switch the display mode
```ts
let mat = new LitMaterial();
mat.cullMode = GPUCullMode.none; // No culling, double-sided display
mat.cullMode = GPUCullMode.front; // Cull the front, display the back
mat.cullMode = GPUCullMode.back; // Cull the back, display the front
```

<Demo :height="300" :code="false" src="/demos/materials/cullMode.ts"></Demo>

### Depth State
A material can control how it participates in the depth buffer (Depth Buffer), which is commonly used to handle transparent object sorting, avoid Z-fighting, and implement "always visible" overlay layers, etc.

```ts
let mat = new LitMaterial();

// Whether to write to the depth buffer. Transparent objects usually turn this off to avoid sorting errors caused by mutual occlusion
mat.depthWriteEnabled = false;

// Depth compare function (GPUCompareFunction). Default 'less-equal'
// For example, set to 'always' to make the object always pass the depth test (overlay layer / outline)
mat.depthCompare = 'always' as GPUCompareFunction;
```

| Property | Type | Description |
| --- | --- | --- |
| `depthWriteEnabled` | `boolean` | Whether to write this material's fragment depth to the depth buffer |
| `depthCompare` | `GPUCompareFunction` | Depth compare function, such as `'less'`, `'less-equal'`, `'greater'`, `'always'`, etc. |

### Stencil Buffer (Stencil)
::: tip Version Notes
The stencil buffer API was introduced in `@orillusion/core` **0.9.0**. It can be used to implement effects such as outline strokes, mirror masks, and projected decals that require "marking a region and then drawing it a second time".
:::

The stencil test uses an additional 8-bit buffer to perform a "mark—compare—decide whether to draw" operation on each fragment. `Material` exposes the complete stencil state:

```ts
let mat = new LitMaterial();

// Reference value and read/write masks
mat.stencilRef = 1;          // The reference value used when comparing / writing
mat.stencilReadMask = 0xFF;  // The mask AND-ed with the buffer value when comparing
mat.stencilWriteMask = 0xFF; // The bits allowed to be modified when writing

// Stencil operations for front / back faces (GPUStencilFaceState)
mat.stencilFront = {
    compare: 'always',     // Compare function: always pass
    failOp: 'keep',        // When the stencil test fails
    depthFailOp: 'keep',   // When the stencil passes but the depth test fails
    passOp: 'replace',     // When all pass: replace the buffer value with stencilRef (write the mark)
};
mat.stencilBack = {
    compare: 'always',
    failOp: 'keep',
    depthFailOp: 'keep',
    passOp: 'keep',
};
```

| Property | Type | Description |
| --- | --- | --- |
| `stencilFront` | `GPUStencilFaceState` | Stencil operations for front-facing triangles (compare function + three operations) |
| `stencilBack` | `GPUStencilFaceState` | Stencil operations for back-facing triangles |
| `stencilReadMask` | `number` | The read mask in the compare stage, default `0xFF` |
| `stencilWriteMask` | `number` | The write mask in the write stage, default `0xFF` |
| `stencilRef` | `number` | The stencil reference value, default `0` |

The typical two-pass method (mark first, then use the mark to restrict the drawing area): in the first pass, the material uses `passOp: 'replace'` to write the covered area as `stencilRef`; in the second pass, the material uses `compare: 'equal'` and `passOp: 'keep'` to draw only in the marked area.

> Effects such as the engine's built-in [projected decal](/api/classes/DecalComponent) are implemented based on the stencil buffer and generally do not require manual configuration.

### UV Transform
Model vertices store multiple sets of texture mapping coordinates, which define the 2D coordinate of that vertex in the texture. It is usually represented by a two-dimensional variable `(u,v)`, so it is also called `UV coordinates`.   
We can customize the texture mapping relationship by performing a matrix transformation on the model's `uv` coordinates. For example, set the `transformUV1` variable in the material shader to perform `offset` and `scaling` coordinate transformations on the original `uv`: 
```ts
let mat = new LitMaterial();
// Get uv - Vector4(offsetU, offsetV, scalingU, scalingV)
let uv: Vector4 = mat.getUniformV4(`transformUV1`);
// Set uv
uv.set(1, 1, 2, 2);
// Update uv
mat.setUniformVector4(`transformUV1`, uv);
```

<Demo :height="300" :code="false" src="/demos/materials/uv.ts"></Demo>


:::tip
Starting from `v0.8`, [LitMaterial](/api/classes/LitMaterial) uses `xxxMapOffsetSize` to get and set the `uv` transform of each texture:
```ts
let mat = new LitMaterial();
let baseUV = mat.getUniformV4('baseMapOffsetSize');
let normalUV = mat.getUniformV4('normalMapOffsetSize');
let emissiveUV = mat.getUniformV4('emissiveMapOffsetSize');
let roughnessUV = mat.getUniformV4('roughnessMapOffsetSize');
let metallicUV = mat.getUniformV4('metallicMapOffsetSize');
let aoUV = mat.getUniformV4('aoMapOffsetSize');
```
:::
