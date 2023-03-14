# 键盘
引擎同样可以通过 [inputSystem](/api/classes/InputSystem) 监听键盘输入事件，而且支持开发者随时查询当前的键盘交互实况，不需引入额外包且调用接口十分简单。

## 监听事件
跟监听鼠标事件一样，开发者可以将感兴趣的键盘按键挂载到事件系统，当该按钮触发后引擎会触发对应的回调函数。

键盘事件支持的类型
| 事件 | 说明 |
| --- | --- |
| KEY_DOWN | 按键每次按下时响应。 |
| KEY_UP | 按键每次回弹时响应。 |

基本使用方法:

```ts{6}
import { ComponentBase, KeyEvent, Engine3D } from "@orillusion/core";
export class keyScript extends ComponentBase {
  protected init() {}

  protected start() {
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.onKeyUp, this);
  }
  onKeyUp(e: KeyEvent) {
    // 按键回调
  }
}
```

## KeyEvent
引擎会默认监听当前 `window` 下的键盘事件，调用监听函数后会在回调函数中获取到 [KeyEvent](/api/classes/KeyEvent) 类型的事件。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| KEY_DOWN | string | 按键每次按下时响应。 |
| KEY_UP | string | 按键每次回弹时响应。 |
| keyCode | number | 对应的按键码，详情请参考 [keycode](/api/enums/KeyCode) 定义。 |


## 示例
该示例演示 W、S、A、D、Q、E六个按钮的操作

<Demo :height="500" src="/demos/interaction/keyboard.ts"></Demo>

<<< @/public/demos/interaction/keyboard.ts

