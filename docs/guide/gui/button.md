# UIButton

UIButton组件，实现基本的按钮功能；继承自UIInteractive（可交互组件）


> 按钮组件内部封装有UIImage用于显示背景图，集成自可交互组件UIInteractive，使用内置的UITransform描述的方形区域作为感应热区。

> 组件设定有多种状态，参照`UIInteractiveStyle`；设置组件各种状态下对应的的精灵，即可获得按钮随状态切换变换样式的效果；

> 使用事件监听器，监听组件的object3D对象的GUI系列事件，即可获得用户操作响应函数回调。
>1. PointerEvent3D.PICK_CLICK_GUI：鼠标点击
>2. PointerEvent3D.PICK_OVER_GUI：鼠标滑入
>3. PointerEvent3D.PICK_OUT_GUI：鼠标移除
>4. PointerEvent3D.PICK_UP_GUI：鼠标抬起
>5. PointerEvent3D.PICK_DOWN_GUI：鼠标按下


```ts
import { Engine3D } from '@orillusion/core';
// 加载精灵图集素材
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 创建用于显示UI的面板
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// 面板加入到系统canvas中
renderJob.guiCanvas.addGUIChild(panelRoot);
// 创建按钮节点
let buttonQuad = new Object3D();
panelRoot.addChild(buttonQuad);
this.button = buttonQuad.addComponent(UIButton);
this.button.uiTransform.resize(400, 60);
this.button.uiTransform.y = 100;

this.button.upTexture = Engine3D.res.getSubTexture('button-up');
this.button.downTexture = Engine3D.res.getSubTexture('button-down');
this.button.overTexture = Engine3D.res.getSubTexture('button-over');
this.button.disableTexture = Engine3D.res.getSubTexture('button-disable');

// 监听按钮鼠标事件
buttonQuad.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onUIClick, this);
buttonQuad.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this);
buttonQuad.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this);
buttonQuad.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this);

function onUIClick(){ 
    console.log('onUIClick');
}

function onOut(){
    console.log('onOut');
}

function onOver(){
    console.log('onOver');
}

function onDown(){
    console.log('onDown');
}
```

# upTexture

设置组件在Up状态下显示的精灵。

```ts
image.upTexture = Engine3D.res.getSubTexture('button-up');
```

# downTexture

设置组件在Down状态下显示的精灵。

```ts
image.downTexture = Engine3D.res.getSubTexture('button-down');
```

# overTexture

设置组件在Over状态下显示的精灵。

```ts
image.overTexture = Engine3D.res.getSubTexture('button-over');
```

# disableTexture

设置组件在disable状态下显示的精灵。

```ts
image.disableTexture = Engine3D.res.getSubTexture('button-disable');
```

# enable
设置组件是否有效：true，按钮会响应鼠标事件；false，不响应鼠标事件，并且呈现disableTexture的精灵。

```ts
image.enable = true;//false
```

<Demo :height="500" src="/demos/gui/button.ts"></Demo>

<<< @/public/demos/gui/button.ts`