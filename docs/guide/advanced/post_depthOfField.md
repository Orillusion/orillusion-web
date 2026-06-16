---
aside: false
---
# Depth of Field - DepthOfField
The depth of field effect implemented by the engine defines the nearest and farthest distance thresholds from the camera. Objects within the range between the camera and the nearest distance are rendered sharply; once an object exceeds the nearest distance, it becomes increasingly blurred as the distance increases, until it reaches the maximum blur level at the farthest distance.
```ts
//Initialize the engine
let engine = await Engine3D.init();

engine.setting.render.postProcessing.depthOfView.near = 150;
engine.setting.render.postProcessing.depthOfView.far = 300;
engine.setting.render.postProcessing.depthOfView.pixelOffset = 1;

// Add a DepthOfFieldPost
let postProcessing = this.scene.addComponent(PostProcessingComponent);
postProcessing.addPost(DepthOfFieldPost); //Depth of field effect.

//Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);
```

Configuration parameters for [engine.setting.render.postProcessing.depthOfView](../../api/types/DepthOfViewSetting.md).

| Parameter | Type | Description |
| --- | --- | --- |
| near | number | Objects closer than this distance will not be blurred |
| far | number | Objects farther than this distance will receive the maximum amount of blur. Objects between `[near,far]` are blurred using a factor linearly interpolated between `[0,1]` |
| pixelOffset | number | Pixel diffusion distance of the blur effect |

<Demo src="/demos/advanced/Sample_depth.ts"></Demo>

<<< @/public/demos/advanced/Sample_depth.ts