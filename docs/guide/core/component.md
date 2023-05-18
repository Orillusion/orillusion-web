# Entity and Component
The core of `Orillusion` is inspired by the [ECS](https://wikipedia.org/wiki/Entity_component_system) structure, and follows the principle of `Composition over inheritance`. Implemented own component system. We divide the traditional complex logic into independent and reusable parts. Each part can be encapsulated and run independently. Then, by flexible combination, multiple simple components are combined to perform complex functions and logic.

![ECS](/images/component.svg)

## Entity
`Entity` is a container for components to connect various components. It doesn't have actual function and will not render or express any functions if no components are added to it.
In practice, we will not operate `Entity` directly. Usually, we use [Object3D](/guide/core/object) and [Scene3D](/guide/core/scene) as scene container nodes to connect various components.

## Compnent
`Component` is a series of reusable modules or data. All the functions of `Entity` are implemented by loading `Component`. By defining the logic callback and lifecycle of the component, we can freely combine different components to make the `Entity` have different functions, such as:

- `a camera = Position + Rotation + Camera3D`  
- `a bulb = Position + Rotation + PointLight + Shadow` 
- `a box = Position + Rotation + Scale + BoxGeometry + Material` 

Among them, all components are independent and equal, and each performs a single function. This split makes the `Position` and `Rotation` modules reusable, and they can be combined as needed, which greatly improves the efficiency of code reuse, and also effectively reduces the coupling between modules.

## Built-in Components

We have built-in a lot of basic components in the Orillusion engine, which encapsulates a lot of basic functions. For example, `Object3D` has already built-in the `Transform` component, which contains the `Position`, `Rotation`, `Scale` and other related functions. Make it convenient for users to operate the spatial transformation of `Object3D`.


These are the commonly used built-in components in the Orillusion engine:

|            Name            |                                       Description                                       |
|:--------------------------:|:---------------------------------------------------------------------------------------:|
|          Camera3D          |                          Camera component, set the camera node                          |
|         Transform          | Transform component, used to control the matrix coordinate transformation of the object |
|   HoverCameraController    |      Camera controlort, used to control the position and orientation of the camera      |
|        MeshRenderer        |              Mesh renderer component, used to render meshes and materials               |
|        DirectLight         |         Directional light, set the type and parameters of the directional light         |
|         PointLight         |           Point light source, set the type and parameters of the point light            |
|         SpotLight          |                 Spotlight, set the type and parameters of the spotlight                 |
|     ColliderComponent      |                      Collider component, used to detect collisions                      |
| SkeletonAnimationComponent |            Skeleton animation component, used to control animation playback             |
|    AtmosphericComponent    |                              Atmospheric skybox component                               |

And more built-in components can be found in [Components](/api/#components)

## Basic Usage
```ts
//Create a new entity
let obj = new Object3D();
//Add the entity to scene
scene.addChild(obj);
```
## Add Component
```ts
let obj = new Object3D();
let light = obj.addComponent(DirectLight)
```

## Delete Component
```ts
let obj = new Object3D();
let light = obj.removeComponent(DirectLight)
```

## Disable Component
```ts
let obj = new Object3D();
let light = obj.getComponent(DirectLight)
light.enable = false
```

## Enable Component
```ts
let obj = new Object3D();
let light = obj.getComponent(DirectLight)
light.enable = true
```

## Lifecycle of Component
The component extends from the [CompnentBase](/api/classes/ComponentBase), which defines several basic lifecycles:

|   Lifecycle    | Description                                                           |
|:--------------:|-----------------------------------------------------------------------|
|      init      | Component initialization, only run once when the component is created |
|     start      | Component starts running, only called before the first `onUpdate`     |
|      stop      | Component runs before destruction                                     |
|    onUpdate    | Component runs every frame                                            |
| onBeforeUpdate | Component runs before rendering update                                |
|  onLateUpdate  | Component runs after rendering update                                 |
|    onEnable    | Work when `enable = true` , component joins the main loop update      |
|   onDisable    | Work when `enable = false` , component will no longer trigger loop    |

Users can extend different custom functions by inheriting the [ComponentBase](/api/classes/ComponentBase) base class, see [Script Component](/guide/core/script) for details.
