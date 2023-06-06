# 属性动画（PropertyAnimation）

属性动画组件 [PropertyAnimation](/api/classes/PropertyAnimation) 通过持续更改对象的属性值来变更目标的状态，实现动画效果。
![Animation](/images/animation.svg)

## 应用举例
1. `Object3D` 的属性：`position`, `scale`, `rotation`
2. `材质球` 中的贴图：`uv`, `offset`, `tiling`
3. `后处理效果` 参数：`color`, `strength`

以上属性都可以提供为属性动画更改的内容。

## 基本使用
指定场景中的某个节点 `Object3D`，为其添加组件 `PropertyAnimation`；然后给组件追加影片剪辑后即能使用。

> 目前引擎只支持导入经过专业建模软件制作的 `Clip` 素材，暂不支持代码中自定义属性动画，后续版本会加入

```ts
// load test model
let node = new Object3D();
scene.addChild(node);
// 添加组件
let animation = node.addComponent(PropertyAnimation);

// 加载clip素材
let res = await fetch('path/to/clip.json')
let json = await res.json()
// 初始化clip
let animClip = new PropertyAnimClip();
// 解析clip
animClip.parse(json);
animClip.wrapMode = WrapMode.Once;
animation.defaultClip = animClip.name;
animation.autoPlay = false;
// 将clip追加至组件
animation.appendClip(animClip);
    
```

## 播放动画

可以使用 [play](/api/classes/PropertyAnimation#play) 方法来播放对应名称 `(name)` 的 `PropertyAnimClip`。

```ts
animation.play('anim_0', true); // 默认 true 从头播放
```

## 暂停动画

可以使用 [stop](/api/classes/PropertyAnimation#stop) 方法来播放指定的 `PropertyAnimClip`。

```ts
animation.stop();
```

## 切换动画

可以使用 [toggle](/api/classes/PropertyAnimation#toggle) 方法来播放已暂停的动画，或暂停正在播放的动画。

```ts
animation.toggle();
```

## 指定动画时间
可以使用 [seek](/api/classes/PropertyAnimation#seek) 方法来指定动画播放起始时间。

```ts
animation.seek(1.2);//指定到1.2s
```

## 获取影片剪辑

使用 [getClip](/api/classes/PropertyAnimation#getclip) 方法，获取组件已绑定过的影片剪辑 `PropertyAnimClip`，参数为 `PropertyAnimClip` 的 `name`。

```ts
let clip: PropertyAnimClip = animation.getClip('anim_0');
```

## 获取当前剪辑
可以使用 [currentClip](/api/classes/PropertyAnimation#currentclip) 方法来获取当前正在播放的 `PropertyAnimClip`。

```ts
const currentClip = animation.currentClip;
```

## 获取动画时间
可以使用 [time](/api/classes/PropertyAnimation#time) 方法来获取当前时间。

```ts
const currentClip = animation.time;
```

## 示例

<Demo :height="500" src="/demos/animation/propertyAnim.ts"></Demo>

<<< @/public/demos/animation/propertyAnim.ts

