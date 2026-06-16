# Skeletal Animation
Skeletal animation is a type of model animation. By rotating and translating the skeleton's joints, it transforms the `Mesh` vertex positions to drive the model animation.

::: tip
1. Currently the engine only supports the model's built-in skeletal animation. Users need to prepare the corresponding skeletal animation assets in advance with 3D modeling software.  
2. From `v0.8`, both skeletal animation and Morph animation are driven uniformly through the `AnimatorComponent`.
:::

## Introduction
Each vertex data on a `Mesh` contains the index numbers of the bones that affect that vertex, as well as the weights of those influences. This type of data is collectively referred to as skinning information. The number of bones that influence a vertex is generally limited to 4; more bones only increase the computational load without significantly improving animation quality.

In the `AnimatorComponent`, `PrefabBoneData` contains data related to bone joints, such as name, rotation, translation, and parent bone. Multiple `PrefabBoneData` entries together form a complete skeleton called `PrefabAvatarData`.

`PropertyAnimationClip` is a dataset of curves representing a series of skeletal pose transformations, storing the scale, rotation, and translation transformation data for each bone node.

`PropertyAnimationClipState` represents the animation playback state. It is associated with `PropertyAnimationClip` and is used to maintain playback status, interpolation weights, and other related data.

The `AnimatorComponent` is the driving component for the entire animation. It is associated with multiple `PropertyAnimationClipState` instances, used to switch and blend between various animation states, driving the final transformation pose of the entire skeletal animation.


## Load Animation Model
When loading a model file with skeletal animation data, the engine automatically adds an `AnimatorComponent` component to the model and adds the model's animation data into it. You can directly get the `AnimatorComponent` component on the root entity of the model and play the specified animation.
```ts
// load test model
let soldier = await engine.res.loadGltf('gltfs/glb/Soldier.glb');
soldier.rotationY = -90;
soldier.localScale.set(2, 2, 2);
scene.addChild(soldier);

// get animator component
let animator = soldier.getComponentsInChild(AnimatorComponent)[0];
animator.playAnim('Walk');
```

## Get Animation Name
The component provides the [clips](/api/classes/AnimatorComponent#clips) property to get all animation clip data objects, which each have a unique `clipName` to distinguish different animation states.
```ts
let clips = animation.clips;
for (var i = 0; i < clips.length; i++) {
    console.log("Name:", clips[i].clipName)
}
```

## Play Specified Animation
The `AnimatorComponent` component provides the [playAnim](/api/classes/AnimatorComponent#playAnim) method to play the specified animation:
```ts
// Play the animation named Walk
animator.playAnim('Walk');

// Play the first animation in the list
let clips = animation.clips;
animator.playAnim(clips[0].clipName);
```

## Adjust Playback Speed
When the `playAnim` method plays the specified animation, it plays at normal speed `(1.0)` by default. If you need to speed up playback, set it through the `speed` parameter. The larger the value, the faster the playback speed; the smaller the value, the slower the playback speed; when the value is negative, it will play in reverse.
```ts
// Normal speed
animator.playAnim('Walk', 1);

// 2 times slower
animator.playAnim('Walk', 0.5);

// 3 times faster
animator.playAnim('Walk', 3.0);

// Normal reverse playback
animator.playAnim('Walk', -1.0);

// 3 times faster reverse playback
animator.playAnim('Walk', -3.0);
```

You can also set the global timeline scaling through the `timeScale` property on `AnimatorComponent`, which is the same as `speed`. The larger the value, the faster the playback speed; the smaller the value, the slower the playback speed; when the value is negative, it will play in reverse.
```ts
// Normal speed
animator.timeScale = 1.0;

// 2 times slower
animator.timeScale = 0.5;

// 2 times faster
animator.timeScale = 2.0;

// 2 times faster reverse playback
animator.timeScale = -2.0;
```

<Demo :height="500" src="/demos/animation/animationSingle.ts"></Demo>

<<< @/public/demos/animation/animationSingle.ts
<!--  
## Add Animation Clip
Normally, the animator makes a separate animation clip for each model, and each animation clip has a unique name. But there are also cases where all animation states are made in the same animation clip. For example, an animation clip containing `Idle`, `Walk`, `Run` and other states, distinguished by different time periods, such as 0~1s for idle, 1~3s for walking, and 3~6s for running. In order to facilitate state switching, you can create multiple substates in the engine from the specified animation clip and add them to the controller through the [addAnimationClip](/api/classes/AnimatorComponent#addanimationclip) method, for example:
```ts
// Get the first animation clip data object
let clip = animator.clips[0];

// Cut and create a new animation clip data object (cut idle animation)
animator.addAnimationClip(clip.createSubClip('Idel', 0, 1.0))

// Cut and create a new animation clip data object (cut walking animation)
animator.addAnimationClip(clip.createSubClip('Walk', 1.0, 3.0))

// Cut and create a new animation clip data object (cut running animation)
animator.addAnimationClip(clip.createSubClip('Run', 3.0, 6.0))
``` -->
<!-- 
## Get Animation State
You can use the [currName](/api/classes/AnimatorComponent#currname) property to get the name of the animation currently being played. If you need more detailed playback status information, you can get it through the [getAnimationClipState](/api/classes/AnimatorComponent#getanimationclipstate) method:
```ts
// Get the name of the animation currently being played
var currentPlayName = animator.currName;

// Get the animation clip state currently being played;
const currentState = animator.getAnimationClipState(animator.currName);
``` -->
<!-- 
## Set Animation Loop
The loaded animation clip is in a loop state by default, which can be set to loop or not through the [setAnimIsLoop](/api/classes/AnimatorComponent#setanimisloop) method:
```ts
// Set the death animation to play once (not loop)
animation.setAnimIsLoop('death', false);
// Play death animation
animation.playAnim('death');
```
You can also directly modify the `loop` property of `SkeletonAnimationClipState`:
```ts
// Get the SkeletonAnimationClipState object of the death animation
var deathClipState = animation.getAnimationClipState('death');
// Set the death animation to play once (not loop)
deathClipState.loop = false;
// Play death animation
animation.playAnim('death');
``` -->

## Animation Transition

::: warning Old API (deprecated for blending)
Achieving multi-animation blending through `crossFade` / manually adjusting `clipsState[].weight` is the **old API**. For animation blending in new projects, switch to [Animation Layering and Blending (addLayer)](#animation-layering-and-blending) described below. `crossFade` itself can still be used for single-track transitions on the base layer.
:::

You can use the [crossFade](/api/classes/AnimatorComponent#crossFade) method to transition the current animation to the specified state. The first parameter is the name of the animation state to transition to, and the second parameter is the transition time `(seconds)`.
```ts
// Play walk animation
animation.playAnim('Walk');
// Transition from walk state to run state over 1 second
animation.crossFade('Run', 1.0);
```

<Demo :height="500" src="/demos/animation/animationSingleMix.ts"></Demo>

<<< @/public/demos/animation/animationSingleMix.ts

## Animation Layering and Blending

::: tip Version Notes
Animation layering (`AnimationLayer` / `AnimatorComponent.addLayer`) was introduced in `@orillusion/core` **0.9.0**. It is the recommended way to blend multiple animations, replacing the old approach of manually adjusting `clipsState` weights.
:::

The new version blends animations through a **layer** mechanism: the **base layer (layer 0)** is driven by `playAnim` / `crossFade`; on top of it you can stack any number of `AnimationLayer` instances, each independently playing one animation, controlling its blend amount with `weight`, and using a `BoneMask` to restrict it to only affect some bones (such as moving only the upper body).

### Create and Add a Layer

`new AnimationLayer(name, weight, blendMode, mask)`:

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` | Layer name (unique) |
| `weight` | `number` | Blend weight `0~1` |
| `blendMode` | `LayerBlendMode` | Blend mode: `Override` (interpolate toward this layer's pose) or `Additive` (add the delta on top of the base pose) |
| `mask` | `BoneMask \| null` | Bone mask, `null` means the whole body |

```ts
import { AnimatorComponent, AnimationLayer, LayerBlendMode } from '@orillusion/core';

const animator = model.getComponentsInChild(AnimatorComponent)[0];

// Base layer: normally play walking
animator.playAnim('Walk');

// Stack an Additive layer (e.g. "hit shake"), weight 0.6, whole body
const layer = new AnimationLayer('hit', 0.6, LayerBlendMode.Additive, null);
layer.clipName = 'HitReact';   // The animation this layer plays
animator.addLayer(layer);

// Adjust this layer's weight at runtime (fade in/out)
animator.setLayerWeight('hit', 0.3);
```

### Blend Modes

| Mode | Formula | Use |
| --- | --- | --- |
| `LayerBlendMode.Override` | `lerp(base, layer, weight)` | Override the base pose with this layer's pose (interpolated by weight), such as switching the upper body action |
| `LayerBlendMode.Additive` | `base + (layer - rest) * weight` | Add a delta action on top of the base pose, such as breathing, aim offset, or being hit |

### Bone Mask (BoneMask)

Use a `BoneMask` to restrict a layer to only affect some bones, for example to make the upper body play "wave" while the lower body keeps "walking":

```ts
import { BoneMask } from '@orillusion/core';

const upperBody = new BoneMask();
upperBody.add('Spine').add('Chest').add('LeftArm').add('RightArm');
// Or add a subtree in bulk: upperBody.addSubtree(avatar, 'Spine');

const waveLayer = new AnimationLayer('wave', 1.0, LayerBlendMode.Override, upperBody);
waveLayer.clipName = 'Wave';
animator.addLayer(waveLayer);
```

### Layer Management API

| Method | Description |
| --- | --- |
| `addLayer(layer)` | Add a layer, returns that layer |
| `getLayer(name)` | Get a layer by name |
| `removeLayer(name)` | Remove a layer |
| `setLayerWeight(name, weight)` | Set a layer's weight |
| `setLayerClip(name, clipName, time?, timeScale?)` | Set the animation a layer plays |
| `layers` | Read-only, all current layers |
<!--  
## Animation Event
You can add an event point to a `clip` through the `addEvent` method on `SkeletonAnimationClip`. This method takes two parameters: the first is the event name, and the second is the trigger time (seconds). When the `clip` animation plays to the specified time, the event will be triggered:
```ts
// Get the clip with the specified name
const runClip = animation.getAnimationClip("Run");

// Add an event named BeginRun at 0.0 seconds
runClip.addEvent("BeginRun", 0);

// Add an event named EndRun at the end
runClip.addEvent("EndRun", runClip.totalTime);

// Add BeginRun event listener
animation.events.addEventListener("BeginRun", (e: AnimationEvent) => {
    console.log("Run-Begin", e.skeletonAnimation.getAnimationClipState('Run').time)
}, this);

// Add EndRun event listener
animation.events.addEventListener("EndRun", (e: AnimationEvent) => {
    console.log("Run-End:", e.skeletonAnimation.getAnimationClipState('Run').time)
    e.skeletonAnimation.crossFade("Idle", 0.5);
}, this);
```
<Demo :height="500" src="/demos/animation/animationSingleEvent.ts"></Demo>

<<< @/public/demos/animation/animationSingleEvent.ts
  -->
