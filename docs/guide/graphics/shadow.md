# Shadow
Shadows add a certain degree of depth and realism to scenes and models, because they can show the scale and position of objects, making the objects in the scene look more three-dimensional. In the engine, light sources can cast the shadows of objects onto other parts of themselves or nearby scenes. These shadows can be real-time or static.

## Configuring Shadows

Shadows are implemented through light sources. Currently in the engine, [DirectLight](/guide/graphics/lighting.html#directional-light), [PointLight](/guide/graphics/lighting.html#point-light), and [SpotLight](/guide/graphics/lighting.html#spotlight) can all produce shadows. When you want to render a shadow effect, just set the `castShadow` property of the corresponding light to `true`.

```ts{12}
let lightObj = new Object3D();
// Set the light position
lightObj.x = 0;
lightObj.y = 0;
lightObj.z = 0;
// Set the light angle, rotating 45 degrees around the X axis
lightObj.rotationX = 45;
lightObj.rotationY = 0;
lightObj.rotationZ = 0;
// Add a direct light component and enable shadows
let lc = lightObj.addComponent(DirectLight);
lc.castShadow = true; // false by default
lc.intensity = 5;
scene.addChild(lightObj);
```

To see the shadow effect, we also need an object that produces the shadow and an object that receives the shadow. If you want the light shining on a certain object to produce a shadow effect, you need to add a [MeshRenderer](/api/classes/MeshRenderer) component to the object and set the component's `castShadow` property to `true`.

```ts{6}
// Create a box to produce shadows
let castShadowObj = new Object3D();
let mr1 = castShadowObj.addComponent(MeshRenderer);
mr1.geometry = new BoxGeometry();
mr1.material = new LitMaterial();
mr1.castShadow = true
scene.addChild(castShadowObj);
```

Then you need to add a [MeshRenderer](/api/classes/MeshRenderer) component to the object that receives the shadow, and set the component's `receiveShadow` property to `true`.

```ts{6}
// Create a plane to receive shadows
let receiveShadowObj = new Object3D();
let mr2 = receiveShadowObj.addComponent(MeshRenderer);
mr2.geometry  = new PlaneGeometry(1000,1000);
mr2.material =new LitMaterial();
mr2.receiveShadow = true;
scene.addChild(receiveShadowObj);
```
In this way, you can see in the scene a `box` that, under the illumination of the direct light, produces a shadow and casts it onto the `plane`:

### Direct Light Shadow
---
<Demo :height="500" src="/demos/graphics/shadow_dir.ts"></Demo>

<<< @/public/demos/graphics/shadow_dir.ts

### Point Light Shadow
---
<Demo :height="500" src="/demos/graphics/shadow_point.ts"></Demo>

<<< @/public/demos/graphics/shadow_point.ts

### Spot Light Shadow
---
<Demo :height="500" src="/demos/graphics/shadow_spot.ts"></Demo>

<<< @/public/demos/graphics/shadow_spot.ts

## Shadow Bias
The shadow bias `shadowBias` is an important parameter that affects shadow rendering. Because the size of the shadow map and the size of the final rendering map are generally not exactly the same, it can cause situations such as shadow sampling distortion. Usually, you can solve the sampling distortion by manually setting a tiny bias `shadowBias`.

```ts
engine.setting.shadow.shadowBias = 0.0002 // Direct light shadow bias
engine.setting.shadow.pointShadowBias = 0.2 // Point light / spot light shadow bias
```

> Generally, if `shadowBias` is set too small, large areas of moire or completely covered shadows will appear; conversely, if it is set too large, the shadow will separate from the object (light leakage):

<Demo :height="500" src="/demos/graphics/shadow_bias.ts"></Demo>

<<< @/public/demos/graphics/shadow_bias.ts

## Shadow Type
By setting the shadow type, you can control the visual effect of the shadow. The currently supported shadow types are:
- HARD: Hard shadow, a relatively sharp shadow, usually used when the shadow is relatively close to the object.
- SOFT: Soft shadow, a relatively soft, blurred shadow, with the shadow edges processed to be blurred, usually used when the shadow is relatively far from the object.
- PCF: PCF (Percentage-Closer Filtering) is a common soft shadow processing algorithm. By sampling the current pixel and the surrounding shadow depths and performing a distance-weighted average, it obtains an artificially faked soft shadow effect. The engine currently uses this type of shadow by default.

Configuring the shadow type:
```ts
engine.setting.shadow.type = 'SOFT'; // HARD by default
```
<Demo :height="500" src="/demos/graphics/shadow_type.ts"></Demo>

<<< @/public/demos/graphics/shadow_type.ts

## Shadow Size
The engine's `setting` provides control parameters for the shadow size, which can be used to control the texture size and area size used by shadows in different scenes.

The relevant properties are as follows:
| Property | Type | Description |
| --- | --- | --- |
| shadowBound | Number | Shadow area range |
| shadowSize | Number | Direct light shadow map size, default 1024 |
| pointShadowSize | Number | Point light shadow map size, default 1024 |

The shadow map size (`shadowSize`, `pointShadowSize`) directly affects the final shadow quality. The smaller the value, the lower the performance overhead, and the more obvious the shadow aliasing.

The `shadowBound` parameter controls the size of the illuminated shadow area in the scene. The larger the area, the more the shadow map size should be appropriately increased; when a large area is cast onto a small shadow map, it will also lead to very obvious shadow aliasing.
```ts
engine.setting.shadow.shadowBound = 100
```

Set the direct light shadow map size:
```ts
engine.setting.shadow.shadowSize = 2048
```
<Demo :height="500" src="/demos/graphics/shadow_size.ts"></Demo>

<<< @/public/demos/graphics/shadow_size.ts


Set the point light shadow map size:
```ts
engine.setting.shadow.pointShadowSize = 2048
```

<Demo :height="500" src="/demos/graphics/shadow_size_point.ts"></Demo>

<<< @/public/demos/graphics/shadow_size_point.ts


## Cascaded Shadow Maps
Commonly used to support better shadow rendering effects in large scenes, it divides the shadows within the view frustum into four levels, and during the shading stage that processes shadows, selects the appropriate shadow map according to the current shadow level, obtaining a more accurate shadow effect that covers the full range of the view frustum. After using CSM shadows, it can solve the problem where the shadow Bound range is too large and the pixel density of the shadow is insufficient, causing excessively severe mosaicking; and where the Bound range is small and the shadow area is too small, causing distant objects to lose their shadows.

Starting from `0.9.0`, CSM is controlled by the **direct light (`DirectLight`)** (previously on the camera). Just enable it on the direct light that casts the shadow:

```ts
import { Object3D, DirectLight } from '@orillusion/core';

let lightObj = new Object3D();
let light = lightObj.addComponent(DirectLight);
light.castShadow = true;   // The direct light must first enable shadow casting
light.enableCSM = true;    // Enable cascaded shadows
light.cascadeNum = 4;      // Number of cascade levels (optional)
```

::: tip Migrating from Older Versions
In `0.8.x`, CSM was enabled on the camera (`camera.enableCSM = true`); the camera's `csm` / `getCSMShadowWorldExtents` and other interfaces have been removed. Please set `enableCSM` on the `DirectLight` that casts the shadow instead. The `csmMargin` / `csmScatteringExp` / `csmAreaScale` that control the cascade range are still in `engine.setting.shadow` (see [Shadow Properties](#shadow-properties) below).
:::

<Demo :height="500" src="/demos/graphics/shadow_csm.ts"></Demo>

<<< @/public/demos/graphics/shadow_csm.ts

## Shadow Properties

| Property | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable shadows, default false |
| type | String | Shadow type, default PCF |
| shadowQuality | Number | Shadow rendering quality |
| shadowBound | Number | Shadow area range |
| shadowSize | Number | Direct light shadow map size, default 1024; the smaller the value, the lower the performance overhead, but the more obvious the shadow aliasing |
| pointShadowSize | Number | Point light shadow map size, default 1024 |
| pointShadowBias | Number | Shadow bias value for point lights and spot lights |
| autoUpdate | Boolean | Whether to automatically update shadows, default false |
| csmMargin | Number | Sets the transition range between different levels of shadows, adjusted in the 0-1 range |
| csmScatteringExp | Number | Fine-tunes the range of each level of shadow to meet different scene needs |
| csmAreaScale | Number | Fine-tunes the maximum range that shadows can cover, adjusted in the 0.0-1 range |
