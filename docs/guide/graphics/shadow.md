# Shadow
Shadow is a way to add depth and realism to a scene or model. Shadows can show the scale and position of objects, making them look more three-dimensional. In the engine, light sources can cast shadows of objects onto other parts of themselves or nearby scenes. These shadows can be real-time or static.

## Shadow Configuration

Shadow is implemented by light sources. Currently, [DirectLight](/guide/graphics/lighting.html#DirectLight), [PointLight](/guide/graphics/lighting.html#PointLight), and [SpotLight](/guide/graphics/lighting.html#SpotLight) in the engine can produce shadows. When rendering shadow effects, just set the `castShadow` property of the corresponding light source to `true`.

```ts{12}
let lightObj = new Object3D();
// Set the position of the light
lightObj.x = 0;
lightObj.y = 0;
lightObj.z = 0;
// Set the angle of the light and rotate 45 degrees around the X axis
lightObj.rotationX = 45;
lightObj.rotationY = 0;
lightObj.rotationZ = 0;
// Add a direct light component and enable shadows
let lc = lightObj.addComponent(DirectLight);
lc.castShadow = true; // 默认为 false
lc.intensity = 5;
scene.addChild(lightObj);
```

If you want the light to cast shadows on a certain object, you need to add a [MeshRenderer](/api/classes/MeshRenderer) component to the object, and set the `castShadow` property of the component to `true`.

```ts{6}
// Create a box to generate shadows
let castShadowObj = new Object3D();
let mr1 = castShadowObj.addComponent(MeshRenderer);
mr1.geometry = new BoxGeometry();
mr1.material = new LitMaterial();
mr1.castShadow = true
scene.addChild(castShadowObj);
```

Then you need to add a [MeshRenderer](/api/classes/MeshRenderer) component to the object that receives the shadow, and set the `receiveShadow` property of the component to `true`.

```ts{6}
// Create a plane to receive shadows
let receiveShadowObj = new Object3D();
let mr2 = receiveShadowObj.addComponent(MeshRenderer);
mr2.geometry  = new PlaneGeometry(1000,1000);
mr2.material =new LitMaterial();
mr2.receiveShadow = true;
scene.addChild(receiveShadowObj);
```
In this way, you can see a `box` in the scene, which casts a shadow under the parallel light and casts it on the `plane`:

### Direct light shadow
---
<Demo :height="500" src="/demos/graphics/shadow_dir.ts"></Demo>

<<< @/public/demos/graphics/shadow_dir.ts

### Point light shadow
---
<Demo :height="500" src="/demos/graphics/shadow_point.ts"></Demo>

<<< @/public/demos/graphics/shadow_point.ts

### Spot light shadow
---
<Demo :height="500" src="/demos/graphics/shadow_spot.ts"></Demo>

<<< @/public/demos/graphics/shadow_spot.ts

## Shadow Bias
Shadow bias `shadowBias` is an important parameter that affects shadow rendering. Because the size of the shadow texture and the size of the final rendering texture are not completely the same, it will cause sampling distortion and other situations. Usually, you can manually set a small offset `shadowBias` to solve the sampling distortion.

```ts
Engine3D.setting.shadow.shadowBias = 0.0002 // Shadow bias for direct light
Engine3D.setting.shadow.pointShadowBias = 0.2 // Shadow bias for point light or spot light
```

> Normally, if `shadowBias` is set too small, it will cause large areas of moire or completely cover the shadow; on the contrary, if it is set too large, it will cause the shadow and object to be separated (leakage).

<Demo :height="500" src="/demos/graphics/shadow_bias.ts"></Demo>

<<< @/public/demos/graphics/shadow_bias.ts

## Shadow Type

You can determine the shadow performance by setting the shadow type.These are the types of shadows currently supported:
- HARD: Hard shadow is a sharper shadow, usually used for shadows close to the object.
- SOFT: Soft shadow is a softer, blurred shadow, and the edge of the shadow is blurred. It is usually used for shadows far from the object.
- PCF: PCF (Percentage-Closer Filtering) is a common soft shadow processing algorithm. By sampling the current pixel and the surrounding shadow depth and averaging them by distance, a soft shadow effect is artificially forged. The engine currently uses this type of shadow by default.

Configuration shadow type:
```ts
Engine3D.setting.shadow.type = 'HARD'; // PCF by default
```

<Demo :height="500" src="/demos/graphics/shadow_type.ts"></Demo>

<<< @/public/demos/graphics/shadow_type.ts

## Shadow Bound
The engine's "setting" provides control parameters for the shadow size, which can control the texture size and area size used by the shadow in different scenes.

The relevant attributes are as follows:
| Attribute       | Type    | Description |
| --- | --- | --- |
| shadowBound | Number | Shadow area range |
| shadowSize | Number | Parallel light shadow map size, default 1024 |
| pointShadowSize | Number | Point light Shadow Map Size Size, default 1024 |

Shadow map size (`shadowSize`, `pointShadowSize`) directly affects the final shadow quality, and the smaller the value, the lower the performance overhead, and the more obvious the shadow jagged feeling.

The `shadowBound` parameter controls the size of the illuminated shadow area in the scene. The larger the area, the size of the shadow map should also be increased appropriately. When a large area is cast on a small shadow map, it will also cause a significant shadow jagging.
```ts
Engine3D.setting.shadow.shadowBound = 100
```

Set the parallel light shadow map size:
```ts
Engine3D.setting.shadow.shadowSize = 2048
```
<Demo :height="500" src="/demos/graphics/shadow_size.ts"></Demo>

<<< @/public/demos/graphics/shadow_size.ts


Set point light shadow map size Size:
```ts
Engine3D.setting.shadow.pointShadowSize = 2048
```

<Demo :height="500" src="/demos/graphics/shadow_size_point.ts"></Demo>

<<< @/public/demos/graphics/shadow_size_point.ts

## Cascaded Shadow Maps (CSM)
Often used to support better shadow rendering effect in large scenes, the shadow in the cone is divided into four levels, and the appropriate shadow map is selected according to the current shadow level in the shading process stage, which can obtain a more accurate shadow effect covering the full scope of the cone. After the use of CSM shadow, it can solve the problem that the shadow Bound range is too large, and the pixel density of the shadow is not enough, resulting in too serious Mosaic; The scope is small, the shadow area is too small, and distant objects lose their shadows.

enable CSM shadow
```ts
let mainCamera:Camera3D;
mainCamera.enableCSM = true;
```

<Demo :height="500" src="/demos/graphics/shadow_csm.ts"></Demo>

<<< @/public/demos/graphics/shadow_csm.ts

## Shadow Attribute

| Attribute       | Type    | Description |
|-----------------|---------|------------------------|
| enable          | Boolean | Whether to enable shadow, default false |
| type            | String  | Shadow type, default PCF |
| shadowQuality   | Number  | Shadow rendering quality |
| shadowBound     | Number  | Shadow area range |
| pointShadowBias | Number  | Offset value of point light and spotlight shadow |
| shadowSize      | Number  | Size of parallel light shadow map, default 2048, the smaller the number, the lower the performance cost, but the more obvious the shadow aliasing |
| pointShadowSize | Number  | Size of point light shadow map, default 1024 |
| autoUpdate      | Boolean | Whether to automatically update the shadow, default false |
| csmMargin | Number | Set the transition range for different levels of shadows and adjust it in the 0-1 range |
| csmScatteringExp | Number | Fine-tune the range of shades at each level to suit different scene needs |
| csmAreaScale | Number | Fine-tune the maximum range that the shadow can cover, adjusted in the range of 0.0-1 |