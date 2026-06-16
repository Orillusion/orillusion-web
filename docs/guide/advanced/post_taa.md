---
aside: false
---
# Anti-Aliasing - TAAPost
A 3D rendering `anti-aliasing` implementation. During the rasterization process of 3D rendering, the displayed objects are stored in the form of a two-dimensional array of dots, and the edges of objects in the resulting raw image inevitably have aliasing. The method adopted by `TAA` is to slightly apply some offset values to the camera according to a certain strategy, so that objects produce slightly different results during rasterization due to the different camera offset values. This is especially noticeable at the edges. The color finally output to the screen uses the interpolation of the history frame and the current frame as the result, and this result is used for the next interpolation.
```ts
//Initialize the engine (global engine configuration is merged into init)
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                taa: {
                    jitterSeedCount: 8,
                    blendFactor: 0.1,
                    sharpFactor: 0.6,
                    sharpPreBlurFactor: 0.5,
                    temporalJitterScale: 0.6
                }
            }
        }
    }
});

// Add the post-processing component
let postProcessing = this.scene.addComponent(PostProcessingComponent);

// Add TAAPost
let taaPost = postProcessing.addPost(TAAPost);

// Set via the taaPost object (the global engine configuration and the settings based on the taaPost object here are equivalent)
taaPost.jitterSeedCount = 8;
taaPost.blendFactor = 0.1;
taaPost.sharpFactor = 0.6;
taaPost.sharpPreBlurFactor = 0.5;
taaPost.temporalJitterScale = 0.6;

// Start rendering the view
let view = new View3D();
view.scene = this.scene;
view.camera = mainCamera;
engine.startRenderView(view);
```

[engine.setting.render.postProcessing.taa](../../api/types/TAASetting.md) configuration parameters.
| Parameter | Type | Description |
| --- | --- | --- |
| jitterSeedCount | number | The number of random seeds used for jittering the camera, default 8. (Reducing the number can solve some problems where the jitter is too obvious, but the aliasing will become more obvious) |
| blendFactor | number | The coefficient for merging the history frame and the current frame. The smaller the parameter, the smaller the proportion of the current frame.|
| sharpFactor | number | Image sharpening coefficient [0.1,1.9]: The smaller the coefficient, the weaker the sharpening effect and the better the anti-aliasing effect; conversely, the stronger the sharpening, the weaker the anti-aliasing effect.|
| sharpPreBlurFactor | number | Image sharpening sampling coefficient scaling factor: the scaling of the sampling offset during sharpening.|
| temporalJitterScale | number | The scaling factor of the random offset value of the jittered camera [0,1]: The smaller the coefficient, the weaker the anti-aliasing effect, and the weaker the pixel jitter.|

<Demo src="/demos/advanced/Sample_taa.ts"></Demo>

<<< @/public/demos/advanced/Sample_taa.ts
