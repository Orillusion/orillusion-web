# Lighting

Lighting makes the scene more layered. Using lighting, you can build a more realistic three-dimensional scene. The lighting system of the `Orillusion` engine is mainly composed of the following parts:

| Light Source | Description |
| :---: | :---: |
| Light Component | Basic light source components: directional light, point light and spotlight |
| Ambient Reflection | Skybox environment light, global exposure |
| Global Illumination | Indirect light sources reflected or refracted in the scene |

## Light Component
The engine currently has three classic types of light sources built in:

### Directional Light

[Directional Light](/api/classes/DirectLight) represents light that is emitted uniformly from a certain direction, with the light rays parallel to each other. The light from the sun shining on the earth's surface can be considered as directional light, because the distance between the sun and the earth is far greater than the radius of the earth, so the sunlight shining on the earth can be regarded as light coming from the same direction, that is, directional light. `Directional light` has `4` main features:

| Property | Type | Description |
| --- | --- | --- |
| lightColor | Color | The color of the light, the default is white `rgb(1.0,1.0,1.0)` |
| intensity | Number | The intensity of the light, the default value is `1` |
| direction | Vector3 | Read-only property, gets the direction vector of the directional light |
| castShadow | Boolean | Whether to enable shadow casting, the default `false` is disabled |

Generally, the `rotation` of the `Object3D` where the directional light is located is used to control the direction of the light.
```ts
let lightObj = new Object3D();
scene.addChild(lightObj);

// Add directional light
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

[Point Light](/api/classes/PointLight) is a point that exists in space, emitting light from that point in all directions. Places beyond the effective distance cannot receive the light from the point light, and the lighting intensity gradually decreases the farther it is from the light source. It is usually used to simulate common bulbs in life. The point light has the following main properties:

| Property | Type | Description |
| --- | --- | --- |
| lightColor | Color | The color of the light, the default is white `rgb(1.0,1.0,1.0)` |
| intensity | Number | The intensity of the light, the default value is `1` |
| range | Number | The farthest distance of the light |


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
    
### Spotlight
    
[Spotlight](/api/classes/SpotLight) is similar to the `point light`, but its light is not emitted in all directions, but toward a certain direction range, just like the light emitted by a flashlight in real life. The spotlight has several main features:

| Property | Type | Description |
| --- | --- | --- |
| lightColor | Color | The color of the light, the default is white `rgb(1.0,1.0,1.0)` |
| intensity | Number | The intensity of the light, the default value is `1` |
| direction | Vector3 | Read-only property, gets the direction vector of the spotlight |
| range | Number | The farthest distance of the light |
| innerAngle | Number | The inner angle of the light cone, within which the spotlight has light |
| outerAngle | Number | The outer angle of the light cone, the light gradually attenuates to 0 in the range from the inner angle to the outer angle |
    
```ts
let spotLightObj = new Object3D();
// Set the position of the light source Object3D
spotLightObj.y = 100;
spotLightObj.rotationX= 90;
scene.addChild(spotLightObj);

// Set the properties of the spotlight component
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
The Illuminating Engineering Society (IES) defines a file format that can describe the light intensity distribution of real lights in the real world. IES files describe the light intensity, attenuation curves of various types of luminaires, and simulate light variation behaviors such as the transmission and refraction of the lamp beads, ultimately decoding into a specified 2D data map for lighting mapping in 3D space.

### IES Light Examples
![ies_0](/images/ies/image2017-6-29_11-38-7584f.webp)
![ies_1](/images/ies/image2017-6-29_11-41-2a59d.webp)
![ies_2](/images/ies/image2017-6-30_19-21-325aef.webp)

### Load IES Texture
In addition to the regular light source type settings, the engine also supports setting complex light distribution by loading preset `IES` textures:
```ts
// Load IES texture
let iesTexture = await engine.res.loadTexture("https://cdn.orillusion.com/ies/ies_2.png");
// Create IES object
let iesPofiles = new IESProfiles();
iesPofiles.IESTexture = iesTexture;
let light = new Object3d()
let pointLight = light.addComponent(PointLight);
// Set the light IES distribution
pointLight.iesPofile = iesPofiles;
```

<Demo :height="500" src="/demos/graphics/lighting_pointIes.ts"></Demo>

<<< @/public/demos/graphics/lighting_pointIes.ts

### Get IES Textures
There are many high-quality `IES` resource sharing communities, and some lighting equipment manufacturers also share professional `IES` files, which are generally free, such as:

- [ieslibrary](https://ieslibrary.com/en/home)
- [leomoon](https://leomoon.com/store/shaders/ies-lights-pack/)
- [Lithonia Lighting](https://lithonia.acuitybrands.com/resources/technical-downloads/photometricdownloads)
- [Philips](https://www.usa.lighting.philips.com/support/support/literature/photometric-data)

The community also has many professional `IES` preview/conversion software, such as [IESviewer](http://photometricviewer.com/). You can also use professional 3D modeling software to convert `IES` files into ordinary `png` texture files, and finally load them into the engine.

##  Environment Light
In addition to direct light sources, the engine performs basic environment lighting rendering by setting the `Scene3D.evnMap` skybox texture. For details, refer to the related [Skybox](/guide/core/scene.html) introduction.

## Global Illumination
A general lighting system only considers the effect produced by the light source directly shining on the surface of the object, and does not calculate the light reflected or refracted by the surface of the object, that is, indirect lighting. The global illumination system can model indirect lighting to achieve more realistic light effects. For details, refer to [Advanced GI](/guide/advanced/gi)
