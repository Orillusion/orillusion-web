# UIButton

[UIButton](/api/classes/UIButton.md) 继承自 [UIInteractive](/api/classes/UIInteractive)（可交互组件）, 实现基本的按钮功能。 按钮组件内部封装有 `UIImage` 用于显示背景图，集成自可交互组件 `UIInteractive`，使用内置的 `UITransform` 描述的方形区域作为感应热区。

## 组件贴图

组件有多种状态 [UIInteractiveStyle](/api/enums/UIInteractiveStyle.md)，每种状态对应一个贴图
- `normalSprite` - 默认状态对应的贴图
- `downSprite` - 鼠标按下时对应的贴图
- `overSprite` - 鼠标 over 时对应的贴图
- `disableSprite` - 组件被禁用时的贴图

我们可以设置组件各种状态下对应的背景图，即可获得按钮随状态切换变换样式的效果。

## 组件交互
我们可以使用事件监听器，监听组件的 `object3D` 对象的`GUI` 系列事件，即可获得用户操作响应函数回调:

- `PointerEvent3D.PICK_CLICK_GUI`：鼠标点击
- `PointerEvent3D.PICK_OVER_GUI`：鼠标滑入
- `PointerEvent3D.PICK_OUT_GUI`：鼠标移除
- `PointerEvent3D.PICK_UP_GUI`：鼠标抬起
- `PointerEvent3D.PICK_DOWN_GUI`：鼠标按下

## 启用/禁用
设置组件是否有效：
- `true` - 按钮会响应鼠标事件
- `false` - 不响应鼠标事件，并且呈现 `disableSprite` 的贴图

```ts
button.enable = true; //false
```

<Demo :height="500" src="/demos/gui/button.ts"></Demo>

<<< @/public/demos/gui/button.ts