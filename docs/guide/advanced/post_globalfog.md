---
aside: false
---
# Post Fog Effect - GlobalFog
Fog is a very common effect that simulates the hazy feeling perceived by the human eye when observing objects in a real environment, covered by a semi-transparent layer of fog with a specific color, density, and volume. The engine's simulation process uses parameters such as the camera position, object position, and object height, and provides various attenuation functions to achieve different fog effects.
```ts
//Initialize the engine
let engine = await Engine3D.init();

engine.setting.render.postProcessing.globalFog.fogType = 0; //Liner:0, Exp:1, Exp2:2
engine.setting.render.postProcessing.globalFog.start = 400;
engine.setting.render.postProcessing.globalFog.end = 0;
engine.setting.render.postProcessing.globalFog.fogHeightScale = 1;
engine.setting.render.postProcessing.globalFog.density = 0.02;
engine.setting.render.postProcessing.globalFog.ins = 1;
engine.setting.render.postProcessing.globalFog.fogColor = new Color(84,90,239,255);
engine.setting.render.postProcessing.globalFog.skyFactor = 0.5;
engine.setting.render.postProcessing.globalFog.skyRoughness = 0.4;
engine.setting.render.postProcessing.globalFog.overrideSkyFactor = 0.8;

// Add GlobalFog
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(GlobalFog);

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

Configuration parameters for [engine.setting.render.postProcessing.globalFog](../../api/types/GlobalFogSetting.md).

| Parameter | Type | Description |
| --- | --- | --- |
| enable | boolean | Enable/disable. |
| fogColor | Color | The color of the fog |
| fogType | number | Type of fog: Linear: 0, Exponential: 1, Exponential squared: 2 |
| start | number |  The starting distance for fog density attenuation; from start to end the density decreases toward 0, interpolated according to the type |
| end | number |  The ending distance for fog density attenuation; from start to end the density decreases toward 0, interpolated according to the type |
| density | number | Fog density attenuation coefficient; for the exponential/exponential squared fog types, this coefficient is applied as an additional factor |
| fogHeightScale | number |  Fog height influence parameter |
| ins | number | Height influence coefficient |
| skyFactor | number | Blend factor between the fog color and the sky color |
| skyRoughness | number | Sky sampling mipmap level |
| overrideSkyFactor | number | Factor for the fog overriding the sky |

<Demo src="/demos/advanced/Sample_fog.ts"></Demo>

<<< @/public/demos/advanced/Sample_fog.ts