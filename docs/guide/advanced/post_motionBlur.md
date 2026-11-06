---
aside: false
---
# Motion Blur - MotionBlurPost
When the camera or the subject moves while a real camera's shutter is open, the image streaks along the direction of motion. `MotionBlurPost` computes the screen-space path each pixel travelled since the previous frame and averages several samples along it, producing realistic motion blur.

The path of a pixel comes from one of two sources:

| Mode | How to enable | Effect |
| --- | --- | --- |
| Camera motion blur | Default | Reconstructed from depth and the previous view-projection matrix; only blurs the motion caused by panning, orbiting and dollying the camera. With a still camera, objects that move on their own stay sharp |
| [Object motion blur](#object-motion-blur) | `setting.render.objectMotionVectors = true` | Every object also draws its own screen-space velocity, so moving objects streak even with a still camera |

```ts
// Initialize the engine; default parameters can be configured here
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                motionBlur: {
                    intensity: 0.5,
                    samples: 12,
                    maxBlurPixels: 64
                }
            }
        }
    }
});

// Add the post-processing component
let postProcessing = scene.addComponent(PostProcessingComponent);

// Add MotionBlurPost
let motionBlur = postProcessing.addPost(MotionBlurPost);

// The motionBlur object can be configured too, equivalent to the engine settings above
motionBlur.intensity = 0.5; // 180° shutter
motionBlur.samples = 16;
```

[engine.setting.render.postProcessing.motionBlur](../../api/types/MotionBlurSetting.md) parameters:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | Whether the effect is on; set automatically when `MotionBlurPost` is added / removed |
| `intensity` | `number` | `0.5` | Shutter scale. `1` blurs each pixel along the full distance it moved in one frame (a 360° shutter at 60 Hz), `0.5` is the classic 180° film shutter, `0` disables the blur |
| `samples` | `number` | `12` | Samples along the direction of motion, `2 ~ 32`; more is smoother and slower |
| `maxBlurPixels` | `number` | `64` | Upper bound of the blur length in pixels, so a camera cut or teleport does not smear the whole frame |
| `frameRateIndependent` | `boolean` | `true` | Normalize the blur length to a 60 Hz frame so it looks the same at any frame rate; turn off to blur by the raw per-frame displacement |

### Camera Cuts

When the camera jumps to a new position, the displacement between the previous and the current frame is huge and produces one frame of unnatural streaks (although limited by `maxBlurPixels`). Call `resetHistory()` after the cut and the next frame is not blurred:

```ts
camera.object3D.localPosition = newPosition;
motionBlur.resetHistory();
```

With [object motion blur](#object-motion-blur) on, `resetHistory()` also resets `MotionVectorPass`, and per-object velocities are not drawn on the frame after the reset, so objects that jump together with the camera do not streak either.

### Example: Camera Motion Blur

In the example below the camera orbits the scene on its own; the faster it turns, the longer the streaks. Dragging the mouse to look around blurs the image too; set `orbitSpeed` to `0` and the image snaps back to sharp.

<Demo src="/demos/advanced/Sample_motionBlur.ts"></Demo>

<<< @/public/demos/advanced/Sample_motionBlur.ts

## Object Motion Blur

In the default mode the blur only follows the camera's motion: objects moving on their own (a spinning propeller, a driving car) do not streak while the camera stands still. Turn on `objectMotionVectors` when initializing the engine and moving objects blur according to their own speed:

```ts
let engine = await Engine3D.init({
    setting: {
        render: {
            // Must be set at initialization
            objectMotionVectors: true
        }
    }
});

// Used the same way as camera motion blur
let motionBlur = scene.addComponent(PostProcessingComponent).addPost(MotionBlurPost);
motionBlur.intensity = 1;
```

With it on, the engine keeps every object's model matrix from the previous frame and adds a velocity sub-pass to every opaque material. `MotionVectorPass` writes each pixel's screen-space velocity (camera motion + the object's own motion) into a velocity texture, and `MotionBlurPost` blurs along it. `motionBlur.usesVelocityTexture` tells whether per-object velocities are in use.

::: tip Note
- `objectMotionVectors` must be set in `Engine3D.init`: the velocity sub-pass is created when materials are set up, so changing it at runtime has no effect;
- only opaque, depth-writing materials produce velocities; transparent objects are not blurred;
- skinned and morph-target meshes only carry their rigid motion (the previous model matrix with the current pose); the motion of bones and morph targets themselves is not blurred;
- every opaque object is drawn one extra time per frame, so watch the cost in scenes with many objects.
:::

### Example: Object Motion Blur

In the example below the camera stands still while a propeller spins, a pendulum swings, a row of spheres shuttles back and forth and a cube tumbles. Each streaks according to its own speed, while the static ground and pillars stay sharp.

<Demo src="/demos/advanced/Sample_objectMotionBlur.ts"></Demo>

<<< @/public/demos/advanced/Sample_objectMotionBlur.ts
