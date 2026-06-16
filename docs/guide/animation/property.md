# Property Animation (PropertyAnimation)

The property animation component [PropertyAnimation](/api/classes/PropertyAnimation) changes the value of an object's properties continuously to change the state of the target, achieving the animation effect.
![Animation](/images/animation.svg)

## Examples
1. Properties of `Object3D`: `position`, `scale`, `rotation`
2. Texture of `Material`: `uv`, `offset`, `tiling`
3. `Post-processing effect` parameters: `color`, `strength`

All properties above can be provided as the content that property animation changes.

## Basic Usage
Specify a node `Object3D` in the scene, add the component `PropertyAnimation` to it; then append a movie clip to the component and you can use it.

::: tip
Currently the engine only supports importing `Clip` assets exported from `Unity` through `Curve` curves or `Animation` data. Custom property animations defined in code are not supported at this time, but this feature will be added in future versions.
:::

```cs
// Script for exporting clips in Unity
public class AnimationInfo : InfoBase
{
    [SerializeField] public Animation animation;
    [SerializeField] public List<AnimationClip> clipList;

    public string WriteJson()
    {
        string ret = JsonUtility.ToJson(this);
        return ret;
    }
}

```

```ts
// load test model
let node = new Object3D();
scene.addChild(node);
// Add component
let animation = node.addComponent(PropertyAnimation);

// Load clip asset
let res = await fetch('path/to/clip.json')
let json = await res.json()
// Initialize clip
let animClip = new PropertyAnimClip();
// Parse clip
animClip.parse(json);
animClip.wrapMode = WrapMode.Once;
animation.defaultClip = animClip.name;
animation.autoPlay = false;
// Append clip to component
animation.appendClip(animClip);
    
```

## Play Animation

You can use the [play](/api/classes/PropertyAnimation#play) method to play the `PropertyAnimClip` with the corresponding name `(name)`.

```ts
animation.play('anim_0', true); // Play from start, true by default
```

## Pause Animation

You can use the [stop](/api/classes/PropertyAnimation#stop) method to play the specified `PropertyAnimClip`.

```ts
animation.stop();
```

## Toggle Animation

You can use the [toggle](/api/classes/PropertyAnimation#toggle) method to play a paused animation, or pause the animation that is playing.

```ts
animation.toggle();
```

## Specify Animation Time
You can use the [seek](/api/classes/PropertyAnimation#seek) method to specify the starting time of the animation playback.

```ts
animation.seek(1.2);// Specify to 1.2s
```

## Get Movie Clip

You can use the [getClip](/api/classes/PropertyAnimation#getclip) method to get the movie clip `PropertyAnimClip` that has been bound to the component. The parameter is the `name` of the `PropertyAnimClip`.

```ts
let clip: PropertyAnimClip = animation.getClip('anim_0');
```

## Get Current Clip
You can use the [currentClip](/api/classes/PropertyAnimation#currentclip) method to get the `PropertyAnimClip` that is currently playing.

```ts
const currentClip = animation.currentClip;
```

## Get Animation Time
You can use the [time](/api/classes/PropertyAnimation#time) method to get the current time.

```ts
const currentClip = animation.time;
```

## Example

<Demo :height="500" src="/demos/animation/propertyAnim.ts"></Demo>

<<< @/public/demos/animation/propertyAnim.ts

