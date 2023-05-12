# Transform

[Transform](/api/classes/Transform) is a built-in basic [Component](/guide/core/component), which will be added on all `Object3D` by default, used to control the `position`, `scale` and `rotation` of the container coordinate parameters.

---
<Demo src="/demos/core/transform.ts"></Demo>

<<< @/public/demos/core/transform.ts

## Position
The position of the node relative to the parent container
```ts
let obj = new Object3D();
// The frist method (Recommended)
obj.x = 0;
obj.y = 0;
obj.z = 0;
// Or
obj.transform.x = 0;
obj.transform.y = 0;
obj.transform.z = 0;
// The second method
obj.transform.localPosition.set(0,0,0);
// The third method
obj.transform.localPosition = new Vector3(0,0,0);
```

## Rotation 
The rotation of the node relative to the parent container
```ts
let obj = new Object3D();
// The frist method (Recommended)
obj.rotationX = 0;
obj.rotationY = 0;
obj.rotationZ = 0;
// Or
obj.transform.rotationX = 0;
obj.transform.rotationY = 0;
obj.transform.rotationZ = 0;
// The second method
obj.transform.localRotation.set(0,0,0);
// The third method
obj.transform.localRotation = new Vector3(0,0,0);
```

## Scale
The scale of the node relative to the parent container
```ts
let obj = new Object3D();
// The frist method
obj.scaleX = 1;
obj.scaleY = 1;
obj.scaleZ = 1;
// Or
obj.transform.scaleX = 1;
obj.transform.scaleY = 1;
obj.transform.scaleZ = 1;
// The second method
obj.transform.localScale.set(1,1,1);
// The third method
obj.transform.localScale = new Vector3(0,0,0);
```

See more usages in [Transform](/api/classes/Transform) API