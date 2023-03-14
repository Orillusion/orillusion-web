# Morph动画

使用系统的 [Time](/api/classes/Time) 模块计算模型顶点的基础位置 `basePosition` 和目标位置 `morphTargetPosition` 的插值系数 `interpolation`，持续改变物体模型的点前顶点位置 `position`，从而获得连续的动画效果。

> 目前引擎只支持模型内置的 `Morph` 动画状态，需要提前在建模工具中制作好对应的模型状态，后续版本将加入代码内手动创建自定义 `Morph` 对象。

## 基本使用

```ts
import { Engine3D } from '@orillusion/core';
// 加载支持 Morph 状态模型
let faceObject = await Engine3D.res.loadGltf('gltfs/glb/face.glb');
scene.addChild(faceObject);
```
引擎会自动为模型的所有节点添加 [MeshRenderer](/api/classes/MeshRenderer) 组件用于渲染显示，同时也会为所有支持 `Morph` 动画的节点添加对应的 [rendererMask](/api/classes/MeshRenderer#renderermask)。我们可以通过遍历所有 `MeshRenderer` 节点，找到所有符合 `MorphTarget` 的节点：
```ts
function findMorphRenderers(obj: Object3D): MeshRenderer[] {
    let rendererList: MeshRenderer[] = [];
    // 遍历所有节点
    obj.forChild((child) => {
        let mr = child.getComponent(MeshRenderer)
        // 找到同时存在 MeshRenderer 和 MorphTarget 的节点
        if(mr && mr.hasMask(RendererMask.MorphTarget))
            rendererList.push(mr)   
    })
    return rendererList;
}

let MorphRenders = findMorphRenderers(faceObject)
```

## 控制插值
我们可以通过节点 `geometry` 的 [morphTargetDictionary](/api/classes/GeometryBase#morphtargetdictionary) 属性查找到节点对应的 `morph` 状态，然后通过 [setMorphInfluence](/api/classes/MeshRenderer#setmorphinfluence) 调节对应的插值系数来改变模型状态：
```ts
console.log(renderer.geometry.morphTargetDictionary)
// {mouth:0} - 完全闭嘴状态
renderer.setMorphInfluence('mouth', 1); // 设置完全张嘴状态
```

## 使用说明
`morph` 动画，以人脸表情为例，假定参与脸部动画部分为 `眼睛` 和 `嘴唇`。 需要提前制作好对应模型，包含 `eye` 和`lip` 两块内容的 `morph` 动画状态：

1. 定义模型基础状态：`睁眼` 和 `闭嘴`；
2. 定义完全闭眼状态：`anim_close_eye`；
3. 定义完全张嘴状态：`anim_open_lip`；
4. 将眼睛 `开/闭` 状态对应插值系数 `eye_interpolation` - `0` 对应完全睁眼，`1` 对应完全闭眼；   
同理将嘴唇 `开/闭` 状态对应差值系数 `lip_interpolation` - `0` 对应完全闭合，`1` 对应完全张开；
5. 在代码中通过调节两者 `interpolation` 系数数值，即可以混合对应 `闭眼` 和 `张嘴` 动态效果。

<Demo :height="500" src="/demos/animation/morphAnim.ts"></Demo>

<<< @/public/demos/animation/morphAnim.ts