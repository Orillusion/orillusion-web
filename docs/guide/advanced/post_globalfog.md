---
aside: false
---
# GlobalFog
Fog is a very common effect that simulates the hazy feeling caused by a semi-transparent layer of fog with a specific color, concentration, and volume covering objects observed by the human eye in a real environment. The implementation process of the engine uses parameters such as camera position, object position, and object height, and provides various attenuation functions to achieve different fog effects.
```ts
//Engine initialization
await Engine3D.init();

//Liner: 0,Exp: 1,Exp2: 2,
Engine3D.setting.render.postProcessing.globalFog.fogType = 0;
Engine3D.setting.render.postProcessing.globalFog.start = 400;
Engine3D.setting.render.postProcessing.globalFog.end = 0;
Engine3D.setting.render.postProcessing.globalFog.height = 100;
Engine3D.setting.render.postProcessing.globalFog.density = 0.02;
Engine3D.setting.render.postProcessing.globalFog.ins = 1;
Engine3D.setting.render.postProcessing.globalFog.fogColor = new Color(84,90,239,255);

// Add GlobalFog
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(GlobalFog);
//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);
```

[Engine3D.setting.render.postProcessing.globalFog](../../api/types/GlobalFogSetting.md) configuration parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| enable | boolean | Enable/Disable|
| fogType | number | Type of the fog: Linear fog (0), Exponential fog (1), Exponential squared fog (2)|
| start | number |  The distance of the object to the camera is "distance". The concentration of the fog is linearly interpolated between "start" and "end" |
| end | number |  The distance of the object to the camera is "distance". The concentration of the fog is linearly interpolated between "start" and "end" |
| height | number |  The influence of height on the fog|
| density | number | Density coefficient of the fog for exponential and exponential squared fog |
| ins | number |The influence of height on the fog (working with "height" parameter) |
| fogColor | Color | The color of the fog |

<Demo src="/demos/advanced/Sample_fog.ts"></Demo>

<<< @/public/demos/advanced/Sample_fog.ts