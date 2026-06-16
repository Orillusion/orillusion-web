# Object3D
`Object3D` is the engine's built-in entity object, usually used as a basic component container, and can implement different functions by combining different components.

![Object3D](/images/Object3D.svg)

By default, `Object3D` comes with a [Transform](/guide/core/transform) component. When there are no other components, it only retains the basic container capability and can be used as a parent node to add or combine other `Object3D`.

`Object3D` provides a series of methods that can conveniently add or find child objects and the component information attached to child objects, and can also establish connections with other components through code.


## State of Node

After initializing an `Object3D` object, it is in the displayed state by default. You change the state of the node by setting the `transform.enable` property. If set to `false`, this will disable this node object and all child node objects under this node, and all components attached to these nodes will also stop being called.
```ts
let obj = new Object3D();
obj.transform.enable = false; //Hide the node and all its child nodes
```

## Add and Remove a Node
To add a child node, use the [addChild](/api/classes/Object3D#addchild) method.   
To remove a child node, use the [removeChild](/api/classes/Object3D#removeChild) method.   
To remove a child node at a specific index, use the [removeChildByIndex](/api/classes/Object3D#removeChildByIndex) method.   
To remove this from the parent, use the [removeFromParent](/api/classes/Object3D#removeFromParent) method.   
To remove all child nodes, use the [removeAllChild](/api/classes/Object3D#removeAllChild) method.   

```ts
let parent = new Object3D();
let child = new Object3D();
//Add a node
parent.addChild(child);
//Remove the node
parent.removeChild(child);
//or remove the child node by itself
child.removeFromParent();
//or remove all child nodes
parent.removeAllChild();
```

## Add and Remove Components
Using the built-in [addComponent](/api/classes/Object3D#addComponent) and [removeComponent](/api/classes/Object3D#removeComponent) methods of `Object3D`, you can conveniently add and remove components at runtime.

```ts
let obj = new Object3D();
//Add a directional light component to the node
let dl = obj.addComponent(DirectLight);
//Remove the component
obj.removeComponent(DirectLight);
```

## Get Component Node
All components are extended from `ComponentBase`. Inside a component, you can get the node to which the current component belongs through the `this.object3D` property.
```ts
//Custom a component, the effect is to increase the node's X-axis position by 10
class CustomComponent extends ComponentBase {
    public start() {
        this.object3D.x += 10;
    } 
}
```

## Get Other Components of Node
Using the built-in [getComponent](/api/classes/Object3D#getComponent) method of `Object3D`, you can conveniently get the components on the node.
```ts
//Custom a component, the effect is to change another light component on the node, changing the color of the light
class CustomComponent extends ComponentBase {
    public start() {
        let light = this.object3D.getComponent(DirectLight)
        light.lightColor = new Color(1, 0, 0);
    } 
}
let obj = new Object3D();
obj.addComponent(DirectLight);
obj.addComponent(CustomComponent);
```

## Get Child Node
Using the [getChildByIndex](/api/classes/Object3D#getChildByIndex) method, you can get a child node by the order of the child node hierarchy.   
Using the [getChildByName](/api/classes/Object3D#getChildByName) method, you can get a child node when you know the name of the child node.

## Traverse all child nodes
We can use [forChild](/api/classes/Object3D#forChild) to traverse all nodes under the current node, including the child nodes of the child nodes, and complete the specific operation through a callback function.
```ts
// Traverse all child nodes and execute the callback
parent.forChild((child)=>{
    // Specific operation logic
})
```

## Release Object
Using the [destroy](/api/classes/Object3D#destroy) method, you can release the resources of the current node, including the object itself and all components loaded by the object. However, by default, the materials, geometries, and texture resources required by the rendering components will not be released along with the node, because multiple objects may be sharing the same material and geometry, or these resources may be needed by future scenes. If you want to release all resources, you generally need to manually release the rendering objects.
```ts
// Create object
let obj = new Object3D();
//Add a rendering component to the node
let mr = obj.addComponent(MeshRenderer)
let geometry = mr.geometry = new BoxGeometry()
let material = mr.material = new LitMaterial()

// Destroy the object, release memory
obj.destroy() // but this won't release the geometry and material
geometry.destroy() // manually release the geometry resource
material.destroy() // manually release the material resource
```
If you are sure the node's resources are no longer used, you can use the additional `destroy(true)` parameter to forcibly destroy all related resources of the node.
::: tip
If a rendering object is being shared, forcing deletion may trigger engine errors and cause rendering failure.
:::
```ts
let obj1 = new Object3D();
let obj2 = new Object3D();

// Create geometry and material
let metry = new BoxGeometry()
let material = new LitMaterial()

// Add rendering components to the nodes, sharing the geometry and material information
let mr1 = obj1.addComponent(MeshRenderer)
let mr2 = obj2.addComponent(MeshRenderer)
mr1.geometry = mr2.geometry = geometry
mr2.material = mr2.material = material

// Forcibly destroying one of them will trigger an engine error and rendering cannot continue
obj1.detroy(true) // will forcibly release the geometry and material
```

See [Object3D](/api/classes/Object3D) API for more detailed usage.


