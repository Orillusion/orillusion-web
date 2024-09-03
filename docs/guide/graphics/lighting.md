# Lighting

Lighting can make the scene more layered, using lighting, you can build a more realistic three-dimensional scene. The
lighting system of the `Orillusion` engine is mainly composed of the following parts:

|     Light Source     |                              Description                               |
|:--------------------:|:---------------------------------------------------------------------  |
|   Light Component    | Basic light source components: direct light, point light and spotlight |
|  Ambient Reflection  |               Skybox environment light, global exposure                |
| Global  Illumination |       Indirect light sources reflected or refracted in the scene       |

## Light Component

There are currently three types of classic light sources built into the engine:

### Direct Light

[Direct Light](/api/classes/DirectLight) represents the light that is emitted uniformly from a certain direction and lights between them are parallel. The lights from the sun to the earth can be considered as the parallel light, because the distance between the sun and the earth is far greater than the radius of the earth, so the lights from the sun to the earth can be seen as lights from the same direction, that is, the parallel light. The `direct light` has `4` main features:

| Attribute  | Type    | Description                                                        |
|------------|---------|--------------------------------------------------------------------|
| lightColor | Color   | The color of the light, the default is white `rgb(1.0,1.0,1.0)`    |
| intensity  | Number  | The intensity of the light, the default value is `1`               |
| direction  | Vector3 | Read-only property, get the direction vector of the parallel light |
| castShadow | Boolean | Whether to enable projection, the default `false` is disabled      |

Normally, the `rotation` of the `Object3D`, where the `direct light` is located, is used to control the direction of the light.

```ts
let lightObj = new Object3D();
scene.addChild(lightObj);

// Add direct light
let dl = lightObj.addComponent(DirectLight);
// Set color
dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
// Set intensity
dl.intensity = 20;

// Set the direction of the light source through Object3D
lightObj.rotateX = 45;
lightObj.rotateY = 45;
// You can get the direction vector through direction
let target = dl.direction
```

<Demo :height="500" src="/demos/graphics/lighting_dir.ts"></Demo>

<<< @/public/demos/graphics/lighting_dir.ts

### Point Light

[Point Light](/api/classes/PointLight) is a point that exists in space, and light is emitted from that point in all
directions. The light beyond the effective distance cannot receive the light from the point light, and the intensity of
the light will gradually decrease as the light source moves away. It is usually used to simulate the common bulbs in
life. The point light has the following main attributes:

| Attribute  | Type   | Description                                                     |
|------------|--------|-----------------------------------------------------------------|
| lightColor | Color  | The color of the light, the default is white `rgb(1.0,1.0,1.0)` |
| intensity  | Number | The intensity of the light, the default value is `1`            |
| range      | Number | The farthest distance of the light   |

```ts
let pointLightObj = new Object3D();
// Set the position of the light source Object3D
pointLightObj.x = -10;
pointLightObj.y = 10;
pointLightObj.z = 10;
scene.addChild(pointLightObj);

// Set the radius, intensity, and color of the point light component
let pointLight = pointLightObj.addComponent(PointLight);
pointLight.range = 20;
pointLight.intensity = 10;
pointLight.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
```

<Demo :height="500" src="/demos/graphics/lighting_point.ts"></Demo>

<<< @/public/demos/graphics/lighting_point.ts

### Spot Light

[Spot Light](/api/classes/SpotLight) is similar to the `point light`, but its light is not emitted in all directions,
but in a certain direction range, just like the light emitted by the flashlight in real life. The spotlight has several
main features:

| Attribute  | Type    | Description                                                                                                                   |
|------------|---------|-------------------------------------------------------------------------------------------------------------------------------|
| lightColor | Color   | The color of the light, the default is white `rgb(1.0,1.0,1.0)`                                                               |
| intensity  | Number  | The intensity of the light, the default value is `1`                                                                          |
| direction  | Vector3 | Read-only property, get the direction vector of the spotlight                                                                 |
| range      | Number  | The farthest distance of the light                                                                 |
| innerAngle | Number  | The inner angle of the spotlight, the light has light in the range of less than this angle                                    |
| outerAngle | Number  | The outer angle of the spotlight, the light will gradually decrease to 0 in the range from the inner angle to the outer angle |

```ts
let spotLightObj = new Object3D();
// Set the position of the light source Object3D
spotLightObj.y = 100;
spotLightObj.rotationX = 90;
scene.addChild(spotLightObj);

// Set the attributes of the spotlight component
let spotLight = spotLightObj.addComponent(SpotLight);
spotLight.lightColor = new Color(1.0, 0.95, 0.84, 1.0);
spotLight.intensity = 20;
spotLight.range = 200;
spotLight.innerAngle = 20;
spotLight.outerAngle = 35;
```

<Demo :height="500" src="/demos/graphics/lighting_spot.ts"></Demo>

<<< @/public/demos/graphics/lighting_spot.ts

## IES Light Information

The Illuminating Engineering Society(IES) defines a file format that can describe the light intensity distribution of real light in the real world. The IES file describes the light intensity of various types of lamps, attenuation curves, simulating the transmission and refraction of the lamp beads, and finally decoding into a specified 2D data map for 3D space lighting mapping.

### IES Light Example

![ies_0](/images/ies/image2017-6-29_11-38-7584f.webp)
![ies_1](/images/ies/image2017-6-29_11-41-2a59d.webp)
![ies_2](/images/ies/image2017-6-30_19-21-325aef.webp)

### Load IES Texture

Besides the common light source type settings, the engine also supports setting complex light distribution by loading preset `IES` textures:

```ts
// Load IES texture
let iesTexture = await Engine3D.res.loadTexture("https://cdn.orillusion.com/ies/ies_2.png");
// Create IES object
let iesPofiles = new IESProfiles();
iesPofiles.IESTexture = iesTexture;
let light = new Object3d()
let pointLight = light.addComponent(PointLight);
// Set light IES distribution
pointLight.iesPofile = iesPofiles;
```

<Demo :height="500" src="/demos/graphics/lighting_pointIes.ts"></Demo>

<<< @/public/demos/graphics/lighting_pointIes.ts

### Get IES Texture

The community has a lot of high-quality `IES` resources, some lighting equipment manufacturers will also share professional `IES` files, they are generally free, such as:

- [ieslibrary](https://ieslibrary.com/en/home)
- [leomoon](https://leomoon.com/store/shaders/ies-lights-pack/)
- [Lithonia Lighting](https://lithonia.acuitybrands.com/resources/technical-downloads/photometricdownloads)
- [Philips](https://www.usa.lighting.philips.com/support/support/literature/photometric-data)

The community also has a lot of professional `IES` preview/conversion software, such as [IESviewer](http://photometricviewer.com/), you can also use professional 3D modeling software to convert the `IES` file to a normal `png` texture file, and then load it into the engine.

## Environment Light

Besides the direct light source, the engine can also render basic environment lighting by setting the `Scene3D.evnMap` skybox texture, see [Skybox](/guide/core/scene.html) for related settings.

## Global Illumination

Normal lighting system only considers the effect of light source directly irradiating the surface of the object, and does not calculate the light reflected or refracted by the light source through the surface of the object, that is, indirect lighting. Global illumination system can model indirect lighting to achieve more realistic lighting effects. See [Advanced GI](/guide/advanced/gi) for details.