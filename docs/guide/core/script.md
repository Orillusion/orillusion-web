# Script

We have introduced the [Component](/guide/core/component) in the [Component Lifecycle](/guide/core/component#life-cycle), users can extend from [ComponentBase](/api/classes/ComponentBase) class to develop custom components. Users can customize the running logic by overwriting the lifecycle functions of the component base class:
 - `Initialize/stop`: like `init` and `stop`
 - `State change`: like `start`, `onEnable` and `onDisable`
 - `Update logic`: like `update`, `lateUpdate` and `beforeUpdate`


## Basic Usage
Add a custom script to an entity
```ts
class Script extends ComponentBase {
    //Overwrite init
    public init() {
        //This function is called when the component is created, and can be used to initialize internal variables
        //Note that the component has not been mounted to the Object3D at this time, so it cannot be accessed by this.object3D
    }
    // Overwrite start
    public start() {
        // This function is called before the component starts rendering,
        // At this time, you can access this.object3D to get the attributes of the node or other components
    }
    // Overwrite update
    public update() {
        // This function is called every frame rendering loop, usually defined the node's loop logic
        // For example, update the rotation angle of the object every frame
        this.object3D.rotationY += 1;
    }
}

let ball: Object3D = new Object3D();
ball.addComponent(Script);
```
In a custom script, you can get the `object3D` object which current component mounted through `this.object3D`, and then change the object state.  
A key point of game or animation development is to update the behavior, state and orientation of the object before each frame rendering. These update operations can usually be defined in the `update` callback of the component itself. The engine will automatically register the `update` callback to the main loop to achieve the update logic of each frame.

## Examples
Here are three different script animation examples to show you more complex script component usage.

### 1. Light Animation Script Component
---
<Demo src="/demos/core/script_light.ts"></Demo>

<<< @/public/demos/core/script_light.ts

```ts
class LightAnimation extends ComponentBase {
    private light: DirectLight;
    private color: Color;

    // Overwrite start initialize variables of start
    protected start() {
        this.light = this.object3D.getComponent(DirectLight);
        this.color = this.light.lightColor;
    }

    update() {
        // Update lightColor
        this.color.r = Math.pow(Math.sin(Time.time * 0.001), 10);
        this.light.lightColor = this.color;
    }
}
```
Here we change the red component of the light color every frame, so that it changes with time, and finally produces the effect of light animation.

### 2. Material Animation Script Component
---
<Demo src="/demos/core/script_mat.ts"></Demo>

<<< @/public/demos/core/script_mat.ts

```ts
class MaterialAnimation extends ComponentBase {
    private material: LitMaterial;

    // Overwrite start initialize variables of start
    protected start() {
        let mr = this.object3D.getComponent(MeshRenderer);
        this.material = mr.material;
    }

    update() {
        // Update baseColor
        let delta = Time.time * 0.001
        this.material.baseColor = new Color(Math.sin(delta), Math.cos(delta), Math.sin(delta));
    }
}
```
Similar to above, we can change the material object of the object, such as changing the material color according to the time, so as to achieve the corresponding animation effect.

### 3. Path Animation Script Component
---
<Demo src="/demos/core/script_path.ts"></Demo>

<<< @/public/demos/core/script_path.ts

```ts
class PathAnimation extends ComponentBase {
  update() {
    // Update Position
    this.object3D.x = Math.sin(Time.time * 0.001) * 2;
    this.object3D.y = Math.cos(Time.time * 0.001) * 2;
  }
}
```
In this case, we change the `Position` property of the `Object3D` object, so that the object moves in a circular motion on the `xy` plane with time.
