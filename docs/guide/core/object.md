# Object3D
`Object3D` in a built-in entity in the engine, which is usually used as a basic component container, and can be used to implement different functions by combining different components.

![Object3D](/images/Object3D.svg)

By default, `Object3D` has a built-in component [Transform](/guide/core/transform), which only retains the basic function of being a container when no other components are attached, and can be used as a parent node to add or combine other `Object3D`.

`Object3D` provides a series of methods that can easily add or find child objects and the components attached to them, and can also establish connections with other components through code.


## State of Node

When you initialize an `Object3D` object, it is enabled by default. By setting the `enable` property, you can change the state of the node. If set to `false`, this will disable this node and all child node objects of this node. Also all components attached to these nodes will also stop calling.

```ts
let obj = new Object3D();
obj.enable = false;
```

## Add and Remove a Node

To add a child node, you can use [addChild](/api/classes/Object3D#addchild) method
To delete a child node, you can use [removeChild](/api/classes/Object3D#removeChild) method
To remove a child node at a specific position, you can use [removeChildByIndex](/api/classes/Object3D#removeChildByIndex) method
To remove this from the parent, you can use [removeFromParent](/api/classes/Object3D#removeFromParent) method
To remove all child nodes, you can use [removeAllChild](/api/classes/Object3D#removeAllChild) method

```ts
let parent = new Object3D();
let child = new Object3D();
//Add a child node
parent.addChild(child);
//Remove the node
parent.removeChild(child);
//Or remove the child node by itself
child.removeFromParent();
//Or remove all child nodes
parent.removeAllChild();
```

## Add and Remove Components
Using the built-in [addComponent](/api/classes/Object3D#addComponent) and [removeComponent](/api/classes/Object3D#removeComponent) methods of `Object3D`, you can easily add and remove components when calling them.

```ts
let obj = new Object3D();
//Add a parallel light component to the node
let dl = obj.addComponent(DirectLight);
//Remove the component
obj.removeComponent(DirectLight);
```

## Get Component Node
All the components are extended from `ComponentBase`, and you can get the current component through the `this.object3D` property inside the component.
```ts
//Custom component, to increase the X-axis position of the node by 10
class CustomComponent extends ComponentBase {
    public start() {
        this.object3D.x += 10;
    } 
}
```

## Get Other Components of Node
Using the built-in [getComponent](/api/classes/Object3D#getComponent) method of `Object3D`, you can easily get the components on the node.
```ts
//Custom a component, to change another light component on the node, change the color of the light
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
Using [getChildByIndex](/api/classes/Object3D#getChildByIndex) method, you can get the child node by the order of the child node hierarchy
Using [getChildByName](/api/classes/Object3D#getChildByName) method, you can get the child node by the name of the child node

## Traverse all child nodes
Using [forChild](/api/classes/Object3D#forChild) method, you can traverse all child nodes under the current node, including the child nodes of the child nodes, and complete the specific operation through the callback function.
```ts
// Traverse all child nodes and execute the callback
parent.forChild((child)=>{
    // Specific operation logic
})
```

See [Object3D](/api/classes/Object3D) API for more details.


