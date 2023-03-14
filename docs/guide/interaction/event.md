# 自定义事件
除了基本的鼠标和键盘事件，引擎还提供了自定义事件 [CEvent](#cevent) 类方便开发者使用，可以使用 `Engine3D.inputSystem` 触发和监听任意的自定义事件。我们推荐组件间需要交互时使用事件系统通信。

<Demo :height="500" src="/demos/interaction/event.ts"></Demo>

<<< @/public/demos/interaction/event.ts

## 事件派发
调用 `Engine3D.inputSystem.dispatchEvent` 方法可以派发事件，派发对应事件会触发监听事件回调函数的执行。
```ts
import {Engine3D, CEvent} from '@orillusion/core';

let customEvent = new CEvent("UserEvent", {name:'name',data:'data'});
Engine3D.inputSystem.dispatchEvent(customEvent);
```

## 事件监听
事件监听可以将事件与处理函数相关连
```ts
// 监听事件
Engine3D.inputSystem.addEventListener("UserEvent", this.OnUserEvent, this);
// 处理函数
private OnUserEvent(e: CEvent) {
    let params = e.data;
}
```

## 移除事件
不再需要的事件可以移除
```ts
Engine3D.inputSystem.removeEventListener("UserEvent", this.OnUserEvent, this);
```

## CEvent
事件处理函数的参数是 [CEvent](/api/classes/CEvent) 类型，从该参数获取事件信息
| 参数 | 类型 | 描述 | 示例 |
| --- | --- | --- | --- |
| type | string |  引擎中的事件的类型标识字符串 | "UserEvent" | 
| data | any |  附加数据 | {{ {name: 'name', data: 'any'} }} |