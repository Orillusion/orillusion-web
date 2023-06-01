# UIButton

[UIButton](/api/classes/UIButton.md) 继承自 [UIInteractive](/api/classes/UIInteractive)（可交互组件）, 实现基本的按钮功能。 按钮组件内部封装有 `UIImage` 用于显示背景图，集成自可交互组件 `UIInteractive`，使用内置的 `UITransform` 描述的方形区域作为感应热区。

## 组件贴图

组件有多种状态 [UIInteractiveStyle](/api/enums/UIInteractiveStyle.md)，每种状态对应一个贴图
- `normalSprite` - 默认状态对应的贴图
- `downSprite` - 鼠标按下时对应的贴图
- `overSprite` - 鼠标 over 时对应的贴图
- `disableSprite` - 组件被禁用时的贴图

我们可以设置组件各种状态下对应的背景图，即可获得按钮随状态切换变换样式的效果
```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
// 加载一组精灵贴图
await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json')
// 设置button对应状态贴图
guiButton.normalSprite = Engine3D.res.getGUISprite('button-up')
guiButton.downSprite = Engine3D.res.getGUISprite('button-down')
guiButton.overSprite = Engine3D.res.getGUISprite('button-over')
guiButton.disableSprite = Engine3D.res.getGUISprite('button-disable')
```

## 启用/禁用
设置组件是否有效：
- `true` - 按钮会响应鼠标事件
- `false` - 不响应鼠标事件，并且呈现 `disableSprite` 的贴图

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
guiButton.enable = true; //false
```

## 组件交互
跟普通 `Object3D` 一样，我们可以使用事件监听器来监听`PointerEvent3D` 中关于 `GUI` 系列事件，即可获得用户操作响应函数回调:

- `PointerEvent3D.PICK_CLICK_GUI`：鼠标点击
- `PointerEvent3D.PICK_OVER_GUI`：鼠标滑入
- `PointerEvent3D.PICK_OUT_GUI`：鼠标移除
- `PointerEvent3D.PICK_UP_GUI`：鼠标抬起
- `PointerEvent3D.PICK_DOWN_GUI`：鼠标按下

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)

button.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onClick, this)
button.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this)
button.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this)
button.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this)
```

## 按钮文字
一个对象可以添加多个 GUI 组件，比如同时添加 `UIButton` 和 `UITextField`

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
...
// 加载字体资源
await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
// 添加 GUI文字
let buttonLabel = button.addComponent(UITextField);
buttonLabel.text = 'Click me';
```

<Demo :height="500" src="/demos/gui/button.ts"></Demo>

<<< @/public/demos/gui/button.ts