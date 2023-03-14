# 坐标变换

[Transform](/api/classes/Transform) 组件是系统内置的基础 [组件](/guide/core/component)，默认会添加在所有 `Object3D` 上，用来控制容器的`位置`，`缩放` 和 `旋转`坐标参数。

---
<Demo src="/demos/core/transform.ts"></Demo>

<<< @/public/demos/core/transform.ts

## Position
场景节点相对父容器的位置
```ts
let obj = new Object3D();
//第一种用法（推荐用法）
obj.x = 0;
obj.y = 0;
obj.z = 0;
// or
obj.transform.x = 0;
obj.transform.y = 0;
obj.transform.z = 0;
//第二种用法
obj.transform.localPosition.set(0,0,0);
//第三种用法
obj.transform.localPosition = new Vector3(0,0,0);
```

## Rotation 
场景节点相对父容器的旋转
```ts
let obj = new Object3D();
//第一种用法（推荐用法）
obj.rotationX = 0;
obj.rotationY = 0;
obj.rotationZ = 0;
// or
obj.transform.rotationX = 0;
obj.transform.rotationY = 0;
obj.transform.rotationZ = 0;
//第二种用法
obj.transform.localRotation.set(0,0,0);
//第三种用法
obj.transform.localRotation = new Vector3(0,0,0);
```

## Scale
场景节点相对父容器的缩放
```ts
let obj = new Object3D();
//第一种用法
obj.scaleX = 1;
obj.scaleY = 1;
obj.scaleZ = 1;
// or
obj.transform.scaleX = 1;
obj.transform.scaleY = 1;
obj.transform.scaleZ = 1;
//第二种用法
obj.transform.localScale.set(1,1,1);
//第三种用法
obj.transform.localScale = new Vector3(0,0,0);
```

其它用法详见 [Transform](/api/classes/Transform) API