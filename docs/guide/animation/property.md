# Property Animation

[PropertyAnimation](/api/classes/PropertyAnimation) change the value of the object's property continuously to change the state of the target, and achieve the animation effect.
![Animation](/images/animation.svg)

## Examples
1. Attributes of`Object3D` :`position`, `scale`, `rotation`
2. Texture of `Material`: `uv`, `offset`, `tiling`
3. `Post-processing effect` parameters: `color`, `strength`

All attributes above can be provided as the content of the property animation to be changed.

## Basic Usage
Specify a node `Object3D` in the scene, add the component `PropertyAnimation` to it; then add the movie clip to the component and you can use it.

> Currently, the engine only supports the import of `Clip` materials made by professional modeling software, and does not support custom property animation in the code. The subsequent version will be added

```ts
// Load external model
let node = new Object3D();
scene.addChild(node);
// Add animation component
let animation = node.addComponent(PropertyAnimation);

// Load clip material
let res = await fetch('path/to/clip.json')
let json = await res.json()
// Initialize clip
let animClip = new PropertyAnimClip();
// Parse clip
animClip.parser(json);
animClip.wrapMode = WrapMode.Once;
animation.defaultClip = animClip.name;
animation.autoPlay = false;
// Append clip to component
animation.appendClip(animClip);
    
```

## Play Animation

You can use the [play](/api/classes/PropertyAnimation#play) method to play the `PropertyAnimClip` corresponding to the name `(name)`.

```ts
animation.play('anim_0', true); // Play from start if true(by default)
```

## Pause Animation

You can use the [stop](/api/classes/PropertyAnimation#stop) method to pause the `PropertyAnimClip` corresponding to the name `(name)`.

```ts
animation.stop();
```

## Toggle Animation

You can use the [toggle](/api/classes/PropertyAnimation#toggle) method to play the paused animation, or pause the animation that is playing.

```ts
animation.toggle();
```

## Specify Animation Time
You can use the [seek](/api/classes/PropertyAnimation#seek) method to specify the starting time of the animation playback.

```ts
animation.seek(1.2);// Specify to 1.2s
```

## Get Movie Clip

You can use the [getClip](/api/classes/PropertyAnimation#getclip) method to get the movie clip `PropertyAnimClip` that has been bound to the component, and the parameter is the `name` of `PropertyAnimClip`.

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

