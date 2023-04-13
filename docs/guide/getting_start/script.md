---
aside: false
---
# First script
The core of `Orillusion` is [component system](/guide/core/component), in addition to the basic components built into the engine, users can also write custom components to extend any functionality. In this section we will learn how to use custom components to add animation scripts to objects, such as adding a rotation animation to the cube created in the previous section. Let's take a look at the final result: we added a custom `RotateScript` component to the cube to make it rotate continuously around the `Y` axis.

<Demo :height="500" src="/demos/getting_start/script.ts"></Demo>

<<< @/public/demos/getting_start/script.ts

Users can extend functions from the `ComponentBase` class, and by using callbacks of [Life Cycle](/guide/core/component#life-cycle) to write your own logic. Set the behavior, state and orientation of the object for each frame by setting update callbacks of the script component.   
In the example, we use a simple script component with `update` lifecycle, and write a script to add rotation animation to the object.

```ts
class RotateScript extends ComponentBase {
    public update() {
        //update lifecycle, executed every frame in the main loop
    }
}
```

We can get the current [object3D](/guide/core/object) of the component by `this.object3D`, and then change the state of the node. For example, in `update()` we increase `object3D.rotationY`, in order to rotate the object around the `Y` axis by `1` degree every frame.

```ts
public update() {
  this.object3D.rotationY += 1;
}
```

After defining the component, we can use [addComponent](/api/classes/Object3D#addcomponent) to mount the component to the object.

```ts
obj.addComponent(RotateScript);
```
The main loop of engine will run `update` callback automatically to complete the animation effect. For more usage of custom components, please refer to [Custom Components](/guide/core/component) page.