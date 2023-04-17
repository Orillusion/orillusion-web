# Shadow
Shadow is a way to add depth and realism to a scene or model. Shadows can show the scale and position of objects, making them look more three-dimensional. In the engine, light sources can cast shadows of objects onto other parts of themselves or nearby scenes. These shadows can be real-time or static.

## Shadow Configuration

Shadow is implemented by light sources. Currently, [DirectLight](/guide/graphics/lighting.html#DirectLight), [PointLight](/guide/graphics/lighting.html#PointLight), and [SpotLight](/guide/graphics/lighting.html#SpotLight) in the engine can produce shadows. When rendering shadow effects, just set the `castShadow` property of the corresponding light source to `true`.

```ts
let lightObj = new Object3D();
// Set the position of the light
lightObj.x = 0;
lightObj.y = 0;
lightObj.z = 0;
// Set the angle of the light, rotate 45 degrees around the X axis
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

<<< @/public/demos/graphics/shadow_dir.ts

### Spot light shadow
---
<Demo :height="500" src="/demos/graphics/shadow_spot.ts"></Demo>

<<< @/public/demos/graphics/shadow_dir.ts

## Shadow Bias
Shadow bias `shadowBias` is an important parameter that affects shadow rendering. Because the size of the shadow texture and the size of the final rendering texture are not completely the same, it will cause sampling distortion and other situations. Usually, you can manually set a small offset `shadowBias` to solve the sampling distortion.

```ts
Engine3D.setting.shadow.shadowBias = 0.0002 // Shadow bias for direct light
Engine3D.setting.shadow.pointShadowBias = 0.2 // Shadow bias for point light or spot light
```

> Nomally, if `shadowBias` is set too small, it will cause large areas of moire or completely cover the shadow; on the contrary, if it is set too large, it will cause the shadow and object to be separated (leakage).

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

<!-- <Demo :height="500" src="/demos/graphics/shadow_type.ts"></Demo>

<<< @/public/demos/graphics/shadow_type.ts -->

## Shadow Attribute

| Attribute       | Type    | Description                                                                                                                                                        |
|-----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enable          | Boolean | Whether to enable shadow, default false                                                                                                                            |
| type            | String  | Shadow type, default PCF                                                                                                                                           |
| shadowQuality   | Number  | Shadow rendering quality                                                                                                                                           |
| shadowBound     | Number  | Shadow area range                                                                                                                                                  |
| shadowBias      | Number  | Offset value of parallel light shadow, you can adjust the distance between the shadow and the object to avoid shadow distortion, reduce the stripe or wave pattern |
| pointShadowBias | Number  | Offset value of point light and spotlight shadow                                                                                                                   |
| shadowSize      | Number  | Size of parallel light shadow map, default 2048, the smaller the number, the lower the performance cost, but the more obvious the shadow aliasing                  |
| pointShadowSize | Number  | Size of point light shadow map, default 1024                                                                                                                       |
| shadowNear      | Number  | Shadow near plane                                                                                                                                                  |
| shadowFar       | Number  | Shadow far plane                                                                                                                                                   |
| autoUpdate      | Boolean | Whether to automatically update the shadow, default false                                                                                                          |