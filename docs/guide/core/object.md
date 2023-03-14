# Object3D
`Object3D` 是引擎内置的实体对象，通常被当做基本的组件容器，可以通过不同组件组合来实现不同的功能。    

![Object3D](/images/Object3D.svg)

`Object3D` 默认自带了 [Transform](/guide/core/transform) 组件，在没有其它组件时，只保留基础的容器能力，可以被当做父节点添加或组合其它的 `Object3D`。  

`Object3D`提供了一系列方法，可以方便添加或者查找子对象以及子对象所附加的组件信息，还可以通过代码的方式和其它组件建立连接。


## 节点状态

初始化一个`Object3D`对象之后，默认处于启用状态，通过设置`enable`变更节点的状态，如果设置为`false`，这将停用该节点对象以及该节点下所有的子节点对象，同时附加在这些节点之上的所有组件也将停止调用。
```ts
let obj = new Object3D();
obj.enable = false;
```

## 节点的添加和移除
添加一个子节点，可以使用 [addChild](/api/classes/Object3D#addchild) 方法   
移除一个子节点，可以使用 [removeChild](/api/classes/Object3D#removeChild) 方法   
移除特定位置子节点，可以使用 [removeChildByIndex](/api/classes/Object3D#removeChildByIndex) 方法   
从父级移除自己，可以使用 [removeFromParent](/api/classes/Object3D#removeFromParent) 方法   
移除所有子节点，可以使用 [removeAllChild](/api/classes/Object3D#removeAllChild) 方法   

```ts
let parent = new Object3D();
let child = new Object3D();
//添加节点
parent.addChild(child);
//移除节点
parent.removeChild(child);
//or 子节点自己删除
child.removeFromParent();
//or 移除所有子节点
parent.removeAllChild();
```

## 添加和移除组件
通过 `Object3D` 自带的 [addComponent](/api/classes/Object3D#addComponent) 和 [removeComponent](/api/classes/Object3D#removeComponent) 方法，可以方便的在运行时添加和移除组件。

```ts
let obj = new Object3D();
//为节点添加平行光组件
let dl = obj.addComponent(DirectLight);
//移除组件
obj.removeComponent(DirectLight);
```

## 获取组件节点
所有的组件都是继承于 `ComponentBase`，在组件内部可以通过 `this.object3D` 属性获得当前组件所属的节点。
```ts
//自定义一个组件，效果是把节点的X轴位置增加10
class CustomComponent extends ComponentBase {
    public start() {
        this.object3D.x += 10;
    } 
}
```

## 获取节点的其它组件
通过 `Object3D` 自带的 [getComponent](/api/classes/Object3D#getComponent) 方法，可以方便的获取节点上的组件。
```ts
//自定义一个组件，效果是变更节点上的另一个灯光组件，改变灯光的颜色
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

## 查找子节点
通过方法 [getChildByIndex](/api/classes/Object3D#getChildByIndex) 可以按子节点层级顺序来获取子节点   
通过方法 [getChildByName](/api/classes/Object3D#getChildByName) 可以在知道子节点名称的情况下获取子节点

## 遍历所有子节点
我们可以通过 [forChild](/api/classes/Object3D#forChild) 遍历当前节点下的所有节点，包括子节点的子节点，通过回调函数完成具体操作。
```ts
// 遍历所有子节点，执行回调
parent.forChild((child)=>{
    // 具体操作逻辑
})
```

更多详细用法请参看 [Object3D](/api/classes/Object3D) API


