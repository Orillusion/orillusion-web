# 骨骼动画
骨骼动画是模型动画中的一种，通过骨骼关节的旋转、平移，变换 `Mesh` 顶点位置，达到驱动模型动画的目的。

::: tip
1、目前引擎只支持模型内置的骨骼动画，需要用户提前通过3D建模软件制作对应的骨骼动画素材

2、从0.8开始，骨骼动画和Morph动画通过 `AnimatorComponent` 统一驱动
:::

## 简介
`Mesh` 上的每个顶点数据，都包含该点受影响的骨骼索引编号，以及受该骨骼影响的权重，这类数据信息统称为蒙皮信息，顶点受影响的骨骼一般限制为4根，更多的骨骼数只会增加计算量，对动画质量没有显著提高。

在 `AnimatorComponent` 组件中，`PrefabBoneData` 包含骨骼关节相关的数据，拥有名称，旋转、平移、父骨骼等信息，多个 `PrefabBoneData` 组成一套完整的骨架 `PrefabAvatarData`

`PropertyAnimationClip` 是一系列骨骼姿势变换的曲线数据集，存储了每根骨骼节点的缩放、旋转、平移的变换数据。

`PropertyAnimationClipState` 为动画播放状态，它与 `PropertyAnimationClip` 关联，用于维护播放状态，以及插值权重等相关数据。

`AnimatorComponent` 是整个动画的驱动组件，它与多个 `PropertyAnimationClipState` 关联，用来在多个动画状态之间切换，融合，驱动整个骨骼动画的最终变换姿势。


## 加载动画模型
当加载带有骨骼动画数据的模型文件后，引擎会自动为模型添加一个 `AnimatorComponent` 组件，并将模型中的动画数据加入其中。可以直接在模型的根实体上获取 `AnimatorComponent` 组件，并播放指定动画。
```ts
// load test model
let soldier = await Engine3D.res.loadGltf('gltfs/glb/Soldier.glb');
soldier.rotationY = -90;
soldier.localScale.set(2, 2, 2);
scene.addChild(soldier);

// get animator component
let animator = soldier.getComponentsInChild(AnimatorComponent)[0];
animator.playAnim('Walk');
```

## 获取动画名称
组件提供 [clips](/api/classes/AnimatorComponent#clips) 属性，用来获取所有动画剪辑数据对象，该对象都有唯一的 `clipName` ，用以区分不同动画状态。
```ts
let clips = animation.clips;
for (var i = 0; i < clips.length; i++) {
    console.log("Name:", clips[i].clipName)
}
```

## 播放指定动画
`AnimatorComponent` 组件提供 [playAnim](/api/classes/AnimatorComponent#playAnim) 方法来播放指定动画：
```ts
// 播放 Walk 名称的动画
animator.playAnim('Walk');

// 播放列表中首个动画
let clips = animation.clips;
animator.playAnim(clips[0].clipName);
```

## 调整播放速度
`playAnim` 方法播放指定动画时，默认为正常速度播放`(1.0)`，如需加速播放通过参数 `speed` 设置，数值越大播放速度越快，数值越小播放速度越慢，当该值为负时将进行倒播。
```ts
// 正常播放
animator.playAnim('Walk', 1);

// 2倍减速
animator.playAnim('Walk', 0.5);

// 3倍加速
animator.playAnim('Walk', 3.0);

// 正常倒播
animator.playAnim('Walk', -1.0);

// 3倍加速倒播
animator.playAnim('Walk', -3.0);
```

也可通过 `AnimatorComponent` 上的 `timeScale` 属性设置全局时间线缩放，与 `speed` 相同，数值越大播放速度越快，数值越小播放速度越慢，当该值为负时将进行倒播。
```ts
// 正常播放
animator.timeScale = 1.0;

// 2倍减速
animator.timeScale = 0.5;

// 2倍加速
animator.timeScale = 2.0;

// 2倍加速倒播
animator.timeScale = -2.0;
```

<Demo :height="500" src="/demos/animation/animationSingle.ts"></Demo>

<<< @/public/demos/animation/animationSingle.ts
<!--  
## 添加动画剪辑
一般情况动画师都会给模型独立制作动画剪辑，每个动画剪辑拥有一个唯一名称，但也有全部动画状态做在同一个动画剪辑中的情况。例如一个包含`待机`、`走`、`跑`等状态的动画剪辑，通过不同时间段区分，比如 0~1s 为待机、1~3s为走路、3~6s为跑步。为了方便状态切换，可以在引擎中通过指定的动画剪辑创建多个子状态，并通过 [addAnimationClip](/api/classes/AnimatorComponent#addanimationclip) 方法添加到控制器中，例如：
```ts
// 获取首个动画剪辑数据对象
let clip = animator.clips[0];

// 裁剪并创建新的动画剪辑数据对象（截取待机动画）
animator.addAnimationClip(clip.createSubClip('Idel', 0, 1.0))

// 裁剪并创建新的动画剪辑数据对象（截取走路动画）
animator.addAnimationClip(clip.createSubClip('Walk', 1.0, 3.0))

// 裁剪并创建新的动画剪辑数据对象（截取跑步动画）
animator.addAnimationClip(clip.createSubClip('Run', 3.0, 6.0))
``` -->
<!-- 
## 获取动画状态
可以使用 [currName](/api/classes/AnimatorComponent#currname) 属性来获取当前正在播放的动画名称，如需获取更详细的播放状态信息，可以通过 [getAnimationClipState](/api/classes/AnimatorComponent#getanimationclipstate) 方法获取：
```ts
// 获取当前在播放的动画名称
var currentPlayName = animator.currName;

// 获取当前在播放的动画剪辑状态;
const currentState = animator.getAnimationClipState(animator.currName);
``` -->
<!-- 
## 设置动画循环
加载的动画剪辑默认状态为循环播放，可通过 [setAnimIsLoop](/api/classes/AnimatorComponent#setanimisloop) 方法设置是否循环：
```ts
// 设置死亡动画为单次播放(不循环播放)
animation.setAnimIsLoop('death', false);
// 播放死亡动画
animation.playAnim('death');
```
也可直接修改 `SkeletonAnimationClipState` 的 `loop` 属性：
```ts
// 获取死亡动画的 SkeletonAnimationClipState 对象
var deathClipState = animation.getAnimationClipState('death');
// 设置死亡动画为单次播放(不循环播放)
deathClipState.loop = false;
// 播放死亡动画
animation.playAnim('death');
``` -->

## 动画过渡
可以使用 [crossFade](/api/classes/AnimatorComponent#crossFade) 方法来使当前动画过渡到指定状态。第一个参数为要过渡到的动画状态名称，第二个参数为过渡时间`(秒)`。
```ts
// 播放走路动画
animation.playAnim('Walk');
// 从走路状态历时1秒过度到跑步状态
animation.crossFade('Run', 1.0);
```

<Demo :height="500" src="/demos/animation/animationSingleMix.ts"></Demo>

<<< @/public/demos/animation/animationSingleMix.ts
<!--  
## 动画事件
可以通过 `SkeletonAnimationClip` 上的 `addEvent` 方法为 `clip` 添加事件点，该方法接受两个参数，第一个为事件名称，第二个为触发时刻(秒)，当 `clip` 动画播放到指定时刻时，将触发事件：
```ts
// 获取指定名称的clip
const runClip = animation.getAnimationClip("Run");

// 在 0.0 秒时刻添加一个名称为 BeginRun 的事件
runClip.addEvent("BeginRun", 0);

// 在末尾时刻添加一个名称为 EndRun 的事件
runClip.addEvent("EndRun", runClip.totalTime);

// 添加 BeginRun 事件监听
animation.events.addEventListener("BeginRun", (e: AnimationEvent) => {
    console.log("Run-Begin", e.skeletonAnimation.getAnimationClipState('Run').time)
}, this);

// 添加 EndRun 事件监听
animation.events.addEventListener("EndRun", (e: AnimationEvent) => {
    console.log("Run-End:", e.skeletonAnimation.getAnimationClipState('Run').time)
    e.skeletonAnimation.crossFade("Idle", 0.5);
}, this);
```
<Demo :height="500" src="/demos/animation/animationSingleEvent.ts"></Demo>

<<< @/public/demos/animation/animationSingleEvent.ts
  -->
