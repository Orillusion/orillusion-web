# Skeleton Animation
Skeleton animation is a type of model animation, which drives the model animation by rotating and translating the `Joint` of the skeleton, transforming the position of the `Mesh` vertex.

::: tip
1. Currently, the engine only supports bone animations that are built into the model, requiring users to prepare the corresponding skeletal animation assets in advance using 3D modeling software.
2. From `v0.8`, both skeletal animations and Morph animations are driven uniformly through the [AnimatorComponent](/api/classes/AnimatorComponent).
:::

## Introduction
Each vertex data on a `Mesh` contains the index numbers of the bones that affect that vertex, as well as the weights of those influences. This type of data is collectively referred to as skinning information. The number of bones that can influence a vertex is generally limited to `4`; more bones only increase the computational load without significantly improving animation quality.

In the `AnimatorComponent`, `PrefabBoneData` includes data related to bone joints, such as names, rotation, translation, and parent bones. Multiple `PrefabBoneData` entries together form a complete skeletal structure called `PrefabAvatarData`.

`PropertyAnimationClip` is a dataset of curves representing a series of transformations for skeletal poses, storing transformation data for scaling, rotation, and translation for each bone node.

`PropertyAnimationClipState` represents the animation playback state, which is associated with `PropertyAnimationClip` and is used to maintain playback status, interpolation weights, and other related data.

The `AnimatorComponent` is the driving component for the entire animation. It is associated with multiple `PropertyAnimationClipState` instances to switch and blend between various animation states, driving the final transformation posture of the entire skeletal animation.


## Load Animation Model
When loading a model file with skeleton animation data, the engine will automatically add a `AnimatorComponent` component to the model, and add the animation clip data in the model to it. You can directly get the `AnimatorComponent` component on the root entity of the model, and play the specified animation.
```ts
// Load external model;
let soldier = await Engine3D.res.loadGltf('gltfs/glb/Soldier.glb');
soldier.rotationY = -90;
soldier.localScale.set(2, 2, 2);
scene.addChild(soldier);

// Get animation controller;
let animator = soldier.getComponentsInChild(AnimatorComponent)[0];
animator.playAnim('Walk');
```

## Get Animation Name
This component provides the [clips](/api/classes/AnimatorComponent#clips) property to get all animation clip data objects, which all have a unique `clipName` property to distinguish different animation states.
```ts
let clips = animation.clips;
for (var i = 0; i < clips.length; i++) {
    console.log("Name:", clips[i].clipName)
}
```

## Play Specified Animation
`AnimatorComponent` provides the [playAnim](/api/classes/AnimatorComponent#playAnim) method to play the specified animation:
```ts
//Play animation with name 'Walk'
animator.playAnim('Walk');

// Play the first animation in the list
let clips = animation.clips;
animator.playAnim(clips[0].clipName);
```

## Adjust Playback Speed
`playAnim` method plays the specified animation at the default normal speed `(1.0)`, if you need to accelerate the playback, set the parameter `speed`, the larger the number, the faster the playback speed, the smaller the number, the slower the playback speed, when the value is negative, it will be reversed.
```ts
// Normal speed
animator.playAnim('Walk', 1);

// 2 times slower
animator.playAnim('Walk', 0.5);

// 3 times faster
animator.playAnim('Walk', 3.0);

// Reverse playback
animator.playAnim('Walk', -1.0);

// 3 times faster reverse playback
animator.playAnim('Walk', -3.0);
```

You can also set the global timeline scaling through the `timeScale` property on `AnimatorComponent`, which is the same as `speed`. The larger the number, the faster the playback speed, the smaller the number, the slower the playback speed, and when the value is negative, it will be reversed.
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
 
<!-- ## Add Animation Clip

Normally, the animator will make a separate animation clip for each model, and each animation clip has a unique name. But there are also cases where all animation states are in the same animation clip. For example, an animation clip containing `Idle`, `Walk`, `Run` and other states, which are differentiated by different time periods, such as 0~1s for idle, 1~3s for walking, and 3~6s for running. In order to facilitate state switching, you can create multiple substates in the engine by specifying the animation clip, and add them to the controller through the [addAnimationClip](/api/classes/SkeletonAnimation#addanimationclip) method, for example:
```ts
// Get the first animation clip data object
let clip = animator.getAnimationClips()[0];

// Cut and create a new animation clip data object (cut idle animation)
animator.addAnimationClip(clip.createSubClip('Idel', 0, 1.0))

// Cut and create a new animation clip data object (cut walking animation)
animator.addAnimationClip(clip.createSubClip('Walk', 1.0, 3.0))

// Cut and create a new animation clip data object (cut running animation)
animator.addAnimationClip(clip.createSubClip('Run', 3.0, 6.0))
```

## Get Animation State
You can use the [currName](/api/classes/SkeletonAnimation#currname) property to get the name of the animation currently being played. If you need more detailed playback status information, you can use the [getAnimationClipState](/api/classes/SkeletonAnimation#getanimationclipstate) method to get it:
```ts
// Get the name of the animation currently being played
var currentPlayName = animator.currName;

// Get the current animation clip state
const currentState = animator.getAnimationClipState(animator.currName);
```

## Set Animation Loop
The loaded animation clip is in a default loop state, which can be set to loop or not through the [setAnimIsLoop](/api/classes/SkeletonAnimation#setanimisloop) method:
```ts
// Set the death animation to play once (not loop)
animation.setAnimIsLoop('death', false);
// Play death animation
animation.play('death');
```
Also, you can directly modify the `loop` property of `SkeletonAnimationClipState`:
```ts
// Get the SkeletonAnimationClipState object of the death animation
var deathClipState = animation.getAnimationClipState('death');
// Set the death animation to play once (not loop)
deathClipState.loop = false;
// Play death animation
animation.play('death');
``` 
-->

## Animation Transition
You can use the [crossFade](/api/classes/AnimatorComponent#crossfade) method to transition the current animation to the specified state. The first parameter is the name of the animation state to transition to, and the second parameter is the transition time `(seconds)`.
```ts
// Play walk animation
animation.playAnim('Walk');
// Transition from walk state to run state in 1 second
animation.crossFade('Run', 1.0);
```

<Demo :height="500" src="/demos/animation/animationSingleMix.ts"></Demo>

<<< @/public/demos/animation/animationSingleMix.ts
 
<!-- ## Animation Event
You can add an event point to the `clip` through the `addEvent` method on `SkeletonAnimationClip`, which takes two parameters, the first is the event name, and the second is the trigger time (seconds). When the `clip` animation plays to the specified time, the event will be triggered:
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