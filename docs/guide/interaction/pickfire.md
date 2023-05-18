# 拾取事件
在三维应用中时常需要点击场景中的物体，引擎支持射线包围盒拾取和帧缓冲区拾取。

拾取支持的事件类型：
| 名称 | 解释 |
| --- | --- |
| PICK_OVER | 当触控点进入碰撞体范围时触发一次 |
| PICK_OUT | 当触控点离开碰撞体范围时触发一次 |
| PICK_CLICK | 当触控点在碰撞体范围内按下并松开，在松开时触发一次 |
| PICK_MOVE | 当触控点在碰撞体范围内移动时触发 |
| PICK_UP | 当触控点在碰撞体范围内松开时触发一次 |
| PICK_DOWN | 当触控点在碰撞体范围内按下时触发一次 |

## 监听事件
拾取事件依赖 [ColliderComponent](/guide/physics/collider) 组件，我们可以直接对 `Object3D` 进行 `PointerEvent3D` 事件监听。引擎统一封装了两种拾取类型的用法，可以通过简单配置进行切换

```ts
//引擎启动前需要配置开启拾取和拾取类型
Engine3D.setting.pick.enable = true;
// Bound: 包围盒拾取, pixel: 帧缓冲区拾取
Engine3D.setting.pick.mode = `bound`; // or 'pixel'

await Engine3D.init()
// 拾取检测依赖 Collider 碰撞组件
let obj = Object3D();
obj.addComponent(ColliderComponent);

// 在节点上添加 PickEvent 事件监听，在回调函数可以获取到对应的事件
obj.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

// 或者通过 view.pickFire 监听所有物体点击事件
view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, onPick, this);

//回调函数中获取到事件信息
function onPick(e: PointerEvent3D) {
    ...
}
```

## 包围盒拾取
射线包围盒是一种常用的 CPU 计算拾取方法，需要计算 [ColliderComponent](/guide/physics/collider) 组件的 `shape` 和鼠标射线的交集，在物体数量不多的场景中性能较好，但是精度较差，因为包围盒往往不能够精准的表达物体的真实形状。   
> 为了保持 `cpu` 性能，目前包围盒拾取只支持主动 `pick` 点击拾取，暂不支持 `over/hover` 状态拾取。 

```ts
import {Object3D, Collider, BoxColliderShape, Vector3} from '@orillusion/core';

let box = new Object3D();
let mr = box.addComponent(MeshRenderer);
// 设置 box geometry
mr.geometry = new BoxGeometry(1,1,1);
// 添加碰撞盒检测
let collider = box.addComponent(ColliderComponent);
// bound 模式需要手动设置碰撞盒样式和大小
// 拾取精度取决于 box.geometry 和 collider.shape 的匹配程度
collider.shape = new BoxColliderShape().setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
```

- 左面的 `box` 使用同形状的 `BoxColliderShape` 进行检测，精度较好
- 右边的 `sphere` 也使用 `BoxColliderShape`，但可点击区域就会比实际模型要大，精度较差

<Demo :height="400" src="/demos/interaction/pick_bound.ts"></Demo>

<<< @/public/demos/interaction/pick_bound.ts


## 帧缓冲拾取
`pixel` 模式和 `bound` 模式不同，`帧缓冲拾取` 利用的是 `GPU` 的像素检测，几乎不消耗 `CPU` 性能，可以无视场景中交互对象的数量和形状复杂度，支持所有触控事件。当场景模型形状复杂或物体数量众多的时候，我们推荐使用 `pixel` 模式进行拾取检测。

<Demo :height="400" src="/demos/interaction/pick_pixel.ts"></Demo>

<<< @/public/demos/interaction/pick_pixel.ts
