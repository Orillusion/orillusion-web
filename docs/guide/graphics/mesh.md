# 网格
`mesh` 描述了模型的几何信息`(geometry)`和材质信息`(material)`。如果你想用一个 `Object3D` 对象展示一个3D的模型，那么它必须添加 [MeshRenderer](/api/classes/MeshRenderer) 组件，它主要包含两个属性：
1. `geometry` 对象，它决定了物体具体的几何形状，包括`顶点位置`，`拓扑`，`UV`等；
2. `material` 对象，它决定了物体呈现的材质球样式，包括`贴图`，`颜色`，`透明度`等属性。

`Orillusion` 内置了几种常见的几何体，可以很方便的创建不同的 `mesh`类型:
## 长方体
[BoxGeometry](/api/classes/BoxGeometry) 类提供长方体创建功能。
参数概览：
| 参数 | 描述 |
| --- | --- |
| width | X轴上面的宽度，默认值为1。 |
| height | y轴上面的高度，默认值为1。 |
| depth | Z轴上面的深度，默认值为1。 |

使用示例：
```ts
import {Object3D, MeshRenderer, BoxGeometry} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置组件 geometry
mr.geometry = new BoxGeometry(5,2,3);
```

<Demo src="/demos/mesh/box.ts"></Demo>

<<< @/public/demos/mesh/box.ts


## 球体
[SphereGeometry](/api/classes/SphereGeometry) 类提供球体创建功能。
参数概览：
| 参数 | 描述 |
| --- | --- |
| widthSegments | 球体水平分段数（沿着经线分段） |
| heightSegments | 球体垂直分段数（沿着纬线分段） |
| phiStart | （可选）指定水平（经线）起始角度 |
| phiLength | （可选）指定水平（经线）扫描角度的大小球体赤道线的弧长 |
| thetaStart | （可选）指定垂直（纬线）起始角度 |
| thetaLength | （可选）指定垂直（纬线）扫描角度大小 |

使用示例：
```ts
import {Object3D, MeshRenderer, SphereGeometry} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置组件 geometry
mr.geometry = new SphereGeometry(2, 50, 50);
```

<Demo src="/demos/mesh/sphere.ts"></Demo>

<<< @/public/demos/mesh/sphere.ts


## 圆柱体
[CylinderGeometry](/api/classes/CylinderGeometry) 类提供圆柱体创建功能。

参数概览：
| 参数 | 描述 |
| --- | --- |
| radiusTop | 顶部半径，默认值为1 |
| radiusBottom | 底部半径，默认值为1 |
| height | 桶高度，默认值为1 |
| radialSegments | 圆面细分数量，默认值为8 |
| heightSegments | 桶壁细分数量，默认值为8 |
| openEnded | 是否开放的桶（有上下底），默认值为false |
| thetaStart | 第一个分段的起始角度，默认值为0 |
| thetaLength | 圆形扇区的中心角，默认值为Math.PI * 2 |

使用示例：
```ts
import {Object3D, MeshRenderer, CylinderGeometry} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置组件 geometry
mr.geometry = new CylinderGeometry(2, 2, 10);
```
<Demo src="/demos/mesh/cylinder.ts"></Demo>

<<< @/public/demos/mesh/cylinder.ts

## 圆环
[TorusGeometry](/api/classes/TorusGeometry) 类提供圆柱体创建功能。

参数概览：
| 参数 | 描述 |
| --- | --- |
| radius | 圆环半径，默认值0.4 |
| tube | 管道半径，默认值0.1 |
| radialSegments | 圆环细分数量，默认值32 |
| tubularSegments | 管道细分数量，默认值32 |

使用示例：
```ts
import {Object3D, MeshRenderer, TorusGeometry} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置组件 geometry
mr.geometry = new TorusGeometry(3, 1, 32, 32);
```
<Demo src="/demos/mesh/torus.ts"></Demo>

<<< @/public/demos/mesh/torus.ts

## 平面
[PlaneGeometry](/api/classes/PlaneGeometry) 类提供平面创建功能。

参数概览：
| 参数 | 描述 |
| --- | --- |
| width | 平面沿着X轴的宽度。默认值是1。 |
| height | 平面沿着Y轴的高度。默认值是1。 |
| segmentW | 平面的宽度分段数，默认值是1。 |
| segmentH | 平面的高度分段数，默认值是1。 |
| up | 平面朝向，默认值是Vector3.Y_AXIS。 |

使用示例：
```ts
import {Object3D, MeshRenderer, PlaneGeometry} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置组件 geometry
mr.geometry = new PlaneGeometry(100, 100, 1, 1);
```
<Demo src="/demos/mesh/plane.ts"></Demo>

<<< @/public/demos/mesh/plane.ts

## 自定义几何体
我们可以通过更新现有的几何体的顶点 [vertexBuffer](/api/classes/GeometryVertexBuffer) 来自定义几何体的形状

使用示例：
```ts
import {Object3D, MeshRenderer, PlaneGeometry, LitMaterial, VertexAttributeName} from '@orillusion/core';

let obj = new Object3D();
// 添加 MeshRenderer 组件
let mr = obj.addComponent(MeshRenderer);
// 设置一个平面作为基础, 定义大小和分段数量
mr.geometry = new PlaneGeometry(100, 100, 100, 100);
mr.material = new LitMaterial()

// 获得现有顶点信息
let posAttrData = mr.geometry.getAttribute(VertexAttributeName.position);
// 重写所有顶点 xyz 坐标
for (let i = 0, count = posAttrData.data.length / 3; i < count; i++) {
    posAttrData.data[i * 3 + 0] = Math.random(); // position x
    posAttrData.data[i * 3 + 1] = Math.random(); // position y
    posAttrData.data[i * 3 + 2] = Math.random(); // poisiton z
}
// 更新顶点信息
mr.geometry.vertexBuffer.upload(VertexAttributeName.position, posAttrData);
// 重新计算法向量
mr.geometry.computeNormals();
```
我们甚至可以在主循环中每帧更改顶点信息

<Demo src="/demos/mesh/custom.ts"></Demo>

<<< @/public/demos/mesh/custom.ts
