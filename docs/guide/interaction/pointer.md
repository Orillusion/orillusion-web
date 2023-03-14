# 鼠标与触控
引擎中提供了基本的输入系统 [inputSystem](/api/classes/InputSystem)，可以统一处理鼠标与触屏的操作输入。

## 监听事件
`inputSystem` 接口已经整合到引擎的 `Engine3D` 实例中，用户可以很方便地使用，只需要监听对应的事件类型就可以在事件回调函数中获得对应的事件。
```ts{6}
import { ComponentBase, PointerEvent3D, Engine3D } from "@orillusion/core";
export class PickScript extends ComponentBase {
  protected init() {}

  protected start() {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_CLICK, this.onClick, this);
  }
  onClick(e: PointerEvent3D) {
    // 点击回调
  }
}
```

引擎已经整合了触控与鼠标的操作，使用统一事件模型， 用 [PointerEvent3D](/api/classes/PointerEvent3D) 来指定具体的事件类型。
| 事件 | 说明 |
| --- | --- |
| POINTER_CLICK | 触摸点击事件  |
| POINTER_MOVE | 触摸滑动事件 |
| POINTER_DOWN | 触摸开始事件  |
| POINTER_UP | 触摸结束事件 |
| POINTER_OUT | 触摸滑出事件 |


## PointerEvent3D  

引擎会默认监听当前 `canvas`，统一了触控与鼠标的事件模型，调用监听函数后会在回调函数中获取到 [PointerEvent3D](/api/classes/PointerEvent3D) 类型的事件。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| pointerId | number |  对于某个由指针引起的事件的唯一标识。 |
| pointerType | string |  表明引发该事件的设备类型（鼠标/笔/触摸等）。 |
| isPrimary | boolean |  表示该指针是否为该类型指针中的首选指针。 |
| pressure | number |  规范化后的指针输入的压力值，取值范围为 0 到 1，0 代表硬件可检测到的压力最小值，1 代表最大值。 |
| mouseX | number |  当前 x 坐标 |
| mouseY | number |  当前 y 坐标 |
| movementX | number | 它提供了当前事件和上一个鼠标事件之间鼠标在水平方向上的移动值。 |
| movementY | number | 它提供了当前事件和上一个鼠标事件之间鼠标在垂直方向上的移动值。 |
| deltaX | number |  在向左滚动时返回负双值，向右滚动时返回正双值，否则为0。 |
| deltaY | number |  在向下滚动时返回正值，向上滚动时返回负值，否则为0。 |


## 示例
该示例演示如何监听左键、右键、滚轮的操作。  

<Demo :height="500" src="/demos/interaction/pointEvent.ts"></Demo>

<<< @/public/demos/interaction/pointEvent.ts