# 图形
`Graphics` 模块主要用于对具有实时变化的点、线、面、体的数据，使用特定的方法创建模型网格，并配置好`Transform`、`Texture`、`Material`等信息，传入到渲染管线中参与渲染。通过这个方法创建出来的动态网格，性能高效、使用方便。

引擎内置封装有多种`Graphics`渲染API，供不同的需求提供实现路径。
1. `Graphic3DMeshRenderer`渲染器：通过`Graphic3DMesh.draw()`，指定输入`Mesh`网格，在同一个渲染器中批量创建、控制一组克隆体。对每个克隆体的`Transform`、`Texture`，以及渲染器的`Material`进行动态调整，达到组装出目标图形、动画的目的。
2. `Shape3DRenderer` 渲染器：通过`Shape3DMaker.makeRenderer()`，获得渲染器实例。通过Shape3DMaker提供的API，可以快速创建出想要的`Shape3D`。例如`Ellipse`、`Rect`、`Circle`等等，后续后更详尽的描述。对于创建出的`Path`类型的`Shape3D`，比如`Path2DShape3D`、`Path3DShape3D`，引擎参照`CanvasPath`中的API设计来实现，让开发者能借鉴和沿用自己熟悉的开发方式，使用`Orillusion`引擎做`Graphics`3D绘制工作。

### 认识`Graphic3DMeshRenderer`

初始化概览：
| 参数 | 描述 |
| --- | --- |
| scene | 创建出的渲染器将会被放入指定的Scene3D目录树中 |
| geo | 指定网格数据源 |
| texture | 贴图列表，使用下标进行索引 |
| count | 指定一个渲染器能够支持的克隆集合体的最大个数（选择合适的数值将会提高性能） |

对创建获得到的`Graphic3DMeshRenderer`实例，内部可视为多个克隆对象的集合体（想象他是一个数组）。对于这个集合体执行一系列的修改和设置，达到让其满足视觉表现的目的。修改和设置的工作分情况使用不同的方法实现。

>> 引擎的sample里大多为输入一个Plane作为模型源。实际上你可以传入你需要的模型源来创作。例如传入一个Box3D类型的模型，即可获得由许多方块组合成的图形，创建像素风格的场景。甚至你也可以模拟体素的渲染。

1. 修改`Transform`：对特定下标的（index）单元修改其旋转、缩放、位置。
    取得`Graphic3DMeshRenderer`所属的`object3Ds`，使用数组的下标（index）获得对应的`Object3D`，对`Object3D`的`Transform`修改即可同步至目标单元。
2. 修改`Texture`: 调用函数setTextureID，指定修改特定下标（index）单元对应的贴图下标（textureIndex），贴图从`Graphic3DMeshRenderer`初始化参数的texture中获取。
3. 修改`Material`：在`Graphic3DMeshRenderer`类中开放有一些列命名为类似`setTextureID`这样的API。第一个参数为指定设置的目标单元，第二个接口为设置的相关参数。开发者可以通过这样的API，修改修改图形的内容。例如Color、UV、Emissive等数据。

### `Graphic3DMeshRenderer`使用示例：
```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Graphic3DMesh, Matrix4, Time, BlendMode, Color, ColorUtil, Graphic3DMeshRenderer } from "@orillusion/core";

// 加载贴图列表
let texts = [];
texts.push(await Engine3D.res.loadTexture("textures/128/star_0008.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(texts[0].width, texts[0].height, texts.length);

bitmapTexture2DArray.setTextures(texts);

// 使用Plane作为网格克隆数据源
let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);

//在当前场景中，使用geometry作为克隆数据源，创建一个Graphic3DMeshRenderer实例，该实例支持最多100个克隆对象。
let graphicMeshRenderer = Graphic3DMesh.draw(scene, geometry, bitmapTexture2DArray, 10, 10);

//修改材质球属性
graphicMeshRenderer.material.blendMode = BlendMode.ADD;
graphicMeshRenderer.material.transparent = true;
graphicMeshRenderer.material.depthWriteEnabled = false;
graphicMeshRenderer.material.useBillboard = true;

//至此，渲染器创建完毕，拿到每个克隆体单元所对应的Object3D对象，修改该Object3D的Transform属性，即可同步修改目标克隆体Transform。
//同样的操作，放在引擎的主update函数里，则可每帧修改，以实现相应的动画效果。
let parts = graphicMeshRenderer.object3Ds;
for (let i = 0; i < this.width * this.height; i++) {
    const element = parts[i];
    graphicMeshRenderer.setTextureID(i, 0);
    element.transform.scaleX = 5.5;
    element.transform.scaleY = 5.5;
    element.transform.scaleZ = 5.5;
}

```

<Demo src="/demos/graphics/graphic_3d_color.ts"></Demo>

<<< @/public/demos/graphics/graphic_3d_color.ts


### 认识`Shape3DRenderer`

通过帮助类`Shape3DMaker`初始化`Shape3DRenderer`，获得maker并使用它。
| 参数 | 描述 |
| --- | --- |
| name | 名称，用于标识Shape3DRenderer |
| scene | 初始化的Shape3DRenderer所属Object3D将会放入到scene的目录树中 |
| textureList | 贴图列表，使用下标进行索引 |
| maxNodeCount | 指定一个渲染器支持最多Shape3D的数量 |
| triangleEachNode | 指定每个Shape3D平均拥有的三角形的数量 |

`Shape3DRenderer`中是持有和维护`Shape3D`数据集的渲染器，对于每个Shape3D可以是被定义好的各种各样的形状。例如`EllipseShape3D`、`RoundRectShape3D`、`CircleShape3D`等等，其中`Path2DShape3D`和`Path3DShape3D`拥有更加丰富的API，可以帮你组合绘制出复杂的图案。

 >>渲染器参照`CanvasPath`中的API设计来实现，让开发者能沿用和借鉴自己熟悉的开发方式，使用`Orillusion`引擎做`Graphics`3D绘制工作。渲染器的2D绘制部分指的是在xz平面中绘制点、线、面。同时对每个单元仍然可以通过`Transform`独立控制。如果你想绘制3D空间中的图形，使用`Path3DShape3D`，即可获得拥有y轴高程数据的图形绘制。

#### `Shape3D`是什么？
引擎内置了很多基础图形，这些基础图形决定了其在绘制时候有不同的行为。下面的表格列举出了大部分公开的属性。
| 名称 | 描述 |
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

#### `Shape3D`的分类： 

| 名称 | 描述 |
| --- | --- |
| CircleShape3D | 圆形、圆弧 |
| CurveShape3D | 拥有2个锚点控制的贝塞尔曲线 |
| EllipseShape3D | 椭圆 |
| LineShape3D | 折线 |
| Path2DShape3D | 在xz平面绘制线条路径 |
| Path3DShape3D | 在3D空间内绘制线条路径 |
| QuadraticCurveShape3D | 拥有1个锚点控制的贝塞尔曲线 |
| RoundRectShape3D | 矩形、圆角矩形 |


#### 使用`Shape3DMaker`快速创建`Shape3D`：
| 函数名称 | 获得Shape3D |
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

 >>得到的2D绘制类的图形，它将会被展开在XZ平面。参数里Y相关的数据会被映射至Z轴使用！

 `Shape3DRenderer`实则为一个持有`Shape3D`数据的渲染器。通过它可以做一些增删改的操作，下面的表格为API介绍：
| 函数名称 | 获得Shape3D |
| --- | --- |
| createShape | 指定Shape3D的类型，在渲染器中创建Shape3D实例 |
| removeShape | 删除一个Shape3D实例 |
| getShapeObject3D | 通过Shape3D的实例的shapeIndex属性，获得对应的Object3D。供后续修改Transform使用 |

### `Shape3DRenderer`使用示例：

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color,ColorUtil } from "@orillusion/core";
import { CircleShape3D, EllipseShape3D, Shape3DMaker, Shape3D } from "@orillusion/graphic";

// 加载贴图列表
let texts = [];
texts.push(await Engine3D.res.loadTexture("textures/digit/digit_0.png") as BitmapTexture2D);
texts.push(await Engine3D.res.loadTexture("textures/digit/digit_1.png") as BitmapTexture2D);
texts.push(await Engine3D.res.loadTexture("textures/digit/digit_2.png") as BitmapTexture2D);
texts.push(await Engine3D.res.loadTexture("textures/digit/digit_3.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(texts[0].width, texts[0].height, texts.length);

bitmapTexture2DArray.setTextures(texts);

// 使用Plane作为网格克隆数据源
let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);

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

//放在引擎的主update函数里，对circle的单独控制则可实现相应的动画效果。

```

<Demo src="/demos/graphics/graphic_3d_circle.ts"></Demo>

<<< @/public/demos/graphics/graphic_3d_circle.ts
