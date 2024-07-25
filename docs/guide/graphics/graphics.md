# 图形绘制

`Orillusion` 提供了 [@orillusion/graphic](/graphic/) 扩展包，主要用于对具有实时变化的点、线、面、体的绘制，使用特定的方法创建出一个动态网格，统一管理并参与到引擎渲染管线中去，性能高效、使用方便。

目前提供三个模块来创建高性能图形数据：
1. `Graphic3D`: 提供基础的线条制能力，常用于绘制辅助线等。
1. `Graphic3DMesh` 渲染器：在同一个渲染器中批量创建出一组 `Mesh` 克隆体，可以自由定义调整每个克隆体的 `Transform`、`Texture` 以及 `Material`，组合出高自由度的图形和动画。
2. `Shape3D` 渲染器： 创建复杂的自定义 `Shape3D` 对象，例如 `EllipseShape3D`、`RoundRectShape3D`、`CircleShape3D` 等。对于拥有可持续绘制功能的 `Shape3D` ，比如`Path2DShape3D`、`Path3DShape3D`，参照了 [CanvasPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) 中的API设计来实现，让开发者能借鉴和沿用自己熟悉的开发方式进行图形绘制工作。

## 安装
跟引擎方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入物理插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/graphic --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Graphic3D, Shape3D } from "@orillusion/graphic"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Graphic3D, Shape3D } from "https://unpkg.com/@orillusion/graphic/dist/graphic.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `Shape3D` 模块：
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/stats/dist/graphic.umd.js"></script>
<script>
  const { Engine3D, Graphic3D, Shape3D } = Orillusion
</script>
```

## `Graphic3D`
通过创建一个 `Graphic3D` 对象统一绘制场景中的图形，目前提供 `drawLines`，`drawBox`，`drawCircle` 三种 `API` 快捷创建不同的线段组合。

### 基本方法
```ts
import {Graphic3D} from '@orillusion/graphic'
// ...

// 创建一个 Graphic3D 对象
let graphic3D = new Graphic3D();
// 添加到场景中
scene.addChild(graphic3D);

// 使用 graphic3D 统一绘制线段
// line - (uid, [start1, end1, start2, end2, ...], color)
graphic3D.drawLines('line', [new Vector3(0, 0, 0), new Vector3(0, 10, 0)], new Color(1, 0, 0));
// box - (uid, center, size, color)
graphic3D.drawBox('box', new Vector3(-5, -5, -5), new Vector3(5, 5, 5), new Color(0, 1, 0));
// circle - (uid, center, radius, segments, up, color)
graphic3D.drawCircle('circle', new Vector3(-15, -5, -5), 5, 15, Vector3.X_AXIS, new Color(0, 0, 1));
```

<Demo src="/examples/graphic/GraphicLine.ts"></Demo>

<<< @/public/examples/graphic/GraphicLine.ts


## `Graphic3DMesh` 渲染器
通过 `Graphic3DMesh.draw()` 快速创建一个 `Graphic3DMeshRenderer` 实例，该对象可视为多个克隆 `Geometry` 的集合体，对于这个集合体中每一个对象都可以设置位置和贴图，通过组合达到想要的视觉效果。

### 参数概览

| 参数 | 描述 |
| --- | --- |
| scene | 在指定Scene3D中创建 |
| geo | 指定网格数据源 |
| texture | 贴图列表（使用下标进行索引） |
| count | 指定一个渲染器能够支持的克隆集合体的最大数量（选择合适的数值将会提高性能） |

::: tip
`geo` 一般输入一个简单的 `PlaneGeometry` 作为模型源即可，通过不同的贴图来表现不同的外观。理论上你可以传入的任何模型源来创作。例如传入一个 `BoxGeometry` 类型的模型，即可获得由许多方块组合成的图形，创建像素风格的场景，或者模拟体素的渲染。
:::

1. 修改 `Transform`: 对特定下标的（index）单元修改其旋转、缩放、位置。   
取得 `Graphic3DMeshRenderer` 所属的 `object3Ds`，使用数组的下标（index）获得对应的 `Object3D`，对 `Object3D` 的 `Transform` 修改即可同步至目标单元。   

2. 修改 `Texture`: 调用函数 `setTextureID`，指定修改特定下标（index）单元对应的贴图下标（textureIndex），贴图从 `Graphic3DMeshRenderer` 初始化参数的texture中获取。   

3. 修改 `Material` : 在 `Graphic3DMeshRenderer` 类中开放有一些列命名为类似`setTextureID` 这样的API。第一个参数为指定设置的目标单元，第二个接口为设置的相关参数。开发者可以通过这样的API，修改修改图形的内容。例如Color、UV、Emissive等数据。

### 使用示例

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color, ColorUtil } from "@orillusion/core";
import { Graphic3D, Graphic3DMesh, Graphic3DMeshRenderer } from '@orillusion/graphic';

// 加载贴图列表
let textureArray = [];
textureArray.push(await Engine3D.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);

bitmapTexture2DArray.setTextures(textureArray);

// 使用Plane作为网格克隆数据源
let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);

// 在当前场景中，使用 plane 作为克隆数据源，创建一个 Graphic3DMeshRenderer 实例，该实例最大支持 100 个克隆对象。
let mr:Graphic3DMeshRenderer = Graphic3DMesh.draw(scene, geometry, bitmapTexture2DArray, 100);

// 修改材质球属性
mr.material.blendMode = BlendMode.ADD;
mr.material.transparent = true;
mr.material.depthWriteEnabled = false;
mr.material.useBillboard = true;

// 拿到每个克隆体单元所对应的Object3D对象，修改该 Object3D 的 Transform 属性，即可同步修改目标克隆体 Transform。
// 同样的操作，放在引擎的主update函数里，则可每帧修改以驱动动画效果。
let parts = mr.object3Ds;
for (let i = 0; i < 100; i++) {
    const element = parts[i];
    // set texture index from textureArray
    mr.setTextureID(i, 0);
    // update transform
    element.transform.x = 1;
    element.transform.scaleX = 1;
    element.transform.rotationX = 0;
    // ...
}

```

<Demo src="/demos/graphics/graphic_mesh3d.ts"></Demo>

<<< @/public/demos/graphics/graphic_mesh3d.ts

> 更多 `Graphic3D` API 用法请参考 [GraphicMesh](/example/graphic/GraphicMesh.html) 示例代码。

## `Shape3D` 渲染器

通过 `Shape3DMaker` 创建一个 `Shape3DRenderer` 渲染器，它可以持有和维护一个 `Shape3D` 数据集，每个Shape3D是被定义好的各种各样的形状。例如 `EllipseShape3D`、`RoundRectShape3D`、`CircleShape3D` 等等，其中 `Path2DShape3D` 和 `Path3DShape3D` 拥有更加丰富的API，可以帮你组合绘制出复杂的图形。

| 参数 | 描述 |
| --- | --- |
| name | 名称，用于标识Shape3DRenderer |
| scene | 初始化的Shape3DRenderer所属Object3D将会放入到scene的目录树中 |
| textureList | 贴图列表，使用下标进行索引 |
| maxNodeCount | 指定一个渲染器支持最多Shape3D的数量 |
| triangleEachNode | 指定每个Shape3D平均拥有的三角形的数量 |

 > 渲染器参照 `CanvasPath` 中的API设计来实现，让开发者能沿用和借鉴自己熟悉的开发方式，使用 `Orillusion` 引擎做 `Graphics` 3D绘制工作。渲染器的2D绘制部分指的是在xz平面中绘制点、线、面。同时对每个单元仍然可以通过 `Transform` 独立控制。而在3D空间中绘制图形，则需使用 `Path3DShape3D` 即可开始具有Y轴高程数据的图形绘制。

### 图形基础属性

引擎内置了很多基础图形，这些基础图形基类为 `Shape3D` 。以下表格对 `Shape3D` 的属性做了个简要列举和说明。
| 属性名称 | 描述 |
| --- | --- |
| lineColor | 绘制线条时加成的颜色|
| fillColor | 绘制填充区域时加成的颜色|
| lineTextureID | 设定绘制线条时采用的贴图|
| fillTextureID | 设定绘制填充区域时采用的贴图|
| fillRotation | 设置填充区域，使用贴图的旋转角度|
| shapeOrder | 设置每个Shape的层级（消除zFighting，每个Shape3DRenderer可以设定zFighting最大范围，根据这个范围和Shape3D的数量，得到每个Shape3D拥有的偏移量）|
| points3D | 预留外部传入关键点的集合|
| isClosed | 图形首尾首尾封闭|
| fill | 图形是否填充|
| lineWidth | 绘制线条的宽度|
| lineUVRect | UV数据：xy分别对应线条贴图的offset、zw对应贴图数据的缩放|
| fillUVRect | UV数据：xy分别对应填充区域贴图的offset、zw对应贴图数据的缩放|
| uvSpeed | UV数据：xy分别填充区域贴图的uv移动速度；zw对应线条绘制时贴图数据的uv移动速度|

### 特定的图形

在做图形绘制的时候，往往需要绘制一些特定的图形，这些是我们经常碰到和使用的形状。从CanvasPath的API中，我们作出了如下分类和抽象，他们是 `Shape3D` 的子类/派生类：
| 图形名称 | 描述 |
| --- | --- |
| CircleShape3D | 圆形、圆弧 |
| CurveShape3D | 拥有2个锚点控制的贝塞尔曲线 |
| EllipseShape3D | 椭圆 |
| LineShape3D | 折线 |
| Path2DShape3D | 在xz平面绘制线条路径 |
| Path3DShape3D | 在3D空间内绘制线条路径 |
| QuadraticCurveShape3D | 拥有1个锚点控制的贝塞尔曲线 |
| RoundRectShape3D | 矩形、圆角矩形 |


### 如何创建特定图形
创建获得 `Shape3DMaker` 的实例，有以下方法供调用，可获得对应的特定图形：
| 函数名称 | 图形类型 |
| --- | --- |
| ellipse | EllipseShape3D |
| arc | CircleShape3D |
| line | LineShape3D |
| quadraticCurve | QuadraticCurveShape3D |
| curve | CurveShape3D |
| path2D | Path2DShape3D |
| path3D | Path3DShape3D |
| rect | RoundRectShape3D |
| roundRect | RoundRectShape3D |

 > 得到的2D绘制类的图形，它将会被展开在XZ平面。参数里Y相关的数据会被映射至Z轴使用！

 `Shape3DRenderer` 是持有 `Shape3D` 数据的渲染器。通过它可以做 `Shape3D` 的增删改操作，下面的表格为API介绍：
| 函数名称 | 获得Shape3D |
| --- | --- |
| createShape | 指定Shape3D的类型，在渲染器中创建Shape3D实例 |
| removeShape | 删除一个Shape3D实例 |
| getShapeObject3D | 通过Shape3D的实例的shapeIndex属性，获得对应的Object3D。供后续修改Transform使用 |

### 使用示例

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color,ColorUtil } from "@orillusion/core";
import { CircleShape3D, EllipseShape3D, Shape3DMaker, Shape3D } from "@orillusion/graphic";

// 加载贴图列表
let textureArray = [];
textureArray.push(await Engine3D.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);
bitmapTexture2DArray.setTextures(textureArray);

//在当前场景中，创建一个Shape3DRenderer实例
maker = Shape3DMaker.makeRenderer(`path`, bitmapTexture2DArray, scene);
maker.renderer.material.doubleSide = true;

//创建一个基于XZ平面的Circle，其半径为5、圆心为(0, 0)
let circle:CircleShape3D = maker.arc(5, 0, 0);
circle.lineWidth = 1;//线条宽度为1
circle.segment = 16;//该圆弧将会使用16条线段拟合
circle.fill = true;//设置是否填充
circle.line = true;//设置是否画线描边
circle.uvSpeed = new Vector4(0, 0, 0, Math.random() - 0.5).multiplyScalar(0.005);//设置UV滚动速度
circle.fillColor = Color.randomRGB();//设置填充色加成
circle.lineColor = Color.randomRGB();//设置线条描边色加成

circle.startAngle = 30;//设置圆弧起始角度
circle.endAngle = 240;//设置圆弧结束角度

//将对circle的控制脚本放在引擎的主update函数里，则可驱动动画效果。

```

> 上述代码展示绘制一个独立圆形/圆弧，采用创建 `CircleShape3D` 的实例的方法。你也可以通过创建通用 `Path2DShape3D` 实例，然后调用其 `arc()` 函数获得。

<Demo src="/demos/graphics/graphic_shape3d.ts"></Demo>

<<< @/public/demos/graphics/graphic_shape3d.ts

> 更多 `Shape3D` API 用法请参考 [Shape3D](/example/graphic/Shape3D.html) 示例代码。