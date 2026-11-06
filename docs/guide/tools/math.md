# 数学
在一个渲染场景中，我们经常会对物体进行平移、旋转、缩放等操作（这些操作我们统一称为 变换 ），从而达到我们想要的互动效果。而这些变换的计算，我们一般都是通过向量、四元数、矩阵等来实现的，为此我们提供一个数学库来完成 向量 、四元数 、矩阵 等相关运算。除此之外，数学库还提供了更为丰富的类来帮助我们描述空间中的 点 线 面 几何体，以及判断它们在三维空间中的相交、位置关系等。

| 类型 |  解释|
| --- | --- |
| [Vector2](/api/classes/Vector2) | 二维向量，包含x、y分量 |
| [Vector3](/api/classes/Vector3) | 三维向量，包含x、y、z、w分量 |
| [Rect](/api/classes/Rect) | 矩形区域，包含x、y、w、h分量 |
| [Color](/api/classes/Color) | 颜色类，使用 RGBA 表示 |
| [Quaternion](/api/classes/Quaternion) | 四元数，包含x、y、z、w分量，负责旋转相关的运算|
| [Matrix3](/api/classes/Matrix3) | 3x3矩阵，提供矩阵基本运算，变换相关运算 |
| [Matrix4](/api/classes/Matrix4) | 4x4矩阵，提供矩阵基本运算，变换相关运算 |
| [MathUti](/api/classes/MathUtil) | 内置数学基本计算工厂函数 |
| [Plane](/api/classes/Plane) | 平面数学类 |
| [Ray](/api/classes/Ray) | 射线 |
| [Box2](/api/classes/Box2) | 二维轴对齐包围盒，用于屏幕矩形、UV 范围、框选等 |
| [Spherical](/api/classes/Spherical) | 球坐标（半径、极角、方位角） |
| [Cylindrical](/api/classes/Cylindrical) | 柱坐标（半径、方位角、高度） |
| [CatmullRomCurve3](/api/classes/CatmullRomCurve3) | 经过所有控制点的平滑三维样条曲线 |
| Rand | 普通随机 |
| Random | 各种类型的随机分布函数 |
| Bezier2D | 2D 贝塞尔曲线 |
| Bezier3D | 3D 贝塞尔曲线 |
| CubicBezierCurve | 三次贝塞尔曲线 |
| CubicBezierPath | 三次贝塞尔路径 |
| GradientNew | 颜色渐变 |
| ParticleMath |  粒子系统用到的数学库 |

## 重要变更（0.9.0）

::: warning 破坏性变更
从 `@orillusion/core` **0.9.0** 起，数学库统一了方法命名与调用约定。该变更**不向后兼容**，旧代码需要迁移。
:::

### 实例算术改为"原地修改"语义

这是最需要注意的行为变化。以前 `a.add(b)` 等实例算术方法会**返回一个新对象**、不改动 `a`；现在它们**直接修改 `a` 本身**并返回 `a`（链式 mutator 风格）：

```ts
// 0.8.x（旧）：a 不变，返回新向量
const c = a.add(b);   // a 保持不变

// 0.9.0（新）：a 被就地修改，c 与 a 是同一个对象
const c = a.add(b);   // 此时 a === c，且 a 的值已改变！
```

涉及 `add` / `sub` / `multiply` / `divide` / `cross` / `multiplyScalar` 等几乎所有实例算术方法。如需保留原对象不变，有两种方式：

```ts
// 方式一：先克隆再运算
const c = a.clone().add(b);   // a 不变

// 方式二：使用静态方法（免分配、可指定输出对象，推荐用于热路径）
const out = new Vector3();
Vector3.add(a, b, out);       // out = a + b，a、b 均不变
```

::: tip
静态形式 `Class.op(a, b, result?)` 是引擎内部首选的"免分配"原语，所有实例方法都委托给它实现。在每帧调用的热点代码里优先用静态形式并复用 `result` 对象，可避免频繁的 GC。
:::

### 方法改名对照表

| 旧 API（0.8.x） | 新 API（0.9.0+） | 说明 |
| --- | --- | --- |
| `xxx.copyFrom(src)` | `xxx.copy(src)` | 所有类（Vector*/Matrix*/Quaternion/Color/Rect…） |
| `Vector3.subtract(v)` | `Vector3.sub(v)` | 向量相减 |
| `Vector3.crossProduct(v)` | `Vector3.cross(v)` | 叉乘 |
| `Vector*.scale(s)` / `scaleBy(s)` / `mul(s)` / `multiplyScaler(s)` | `multiplyScalar(s)` | 乘标量，统一命名 |
| `Vector3.scale(v: Vector3)` | `Vector3.multiply(v)` | 按分量乘向量 |
| `Quaternion.inverse()` | `Quaternion.invert()` | 求逆（实例 + 静态） |
| `Quaternion.fromAxisAngle()` | `Quaternion.setFromAxisAngle()` | 由轴角设置 |
| `Quaternion.fromEulerAngles()` | `Quaternion.setFromEuler()` | 由欧拉角设置 |
| `Quaternion.fromMatrix()` | `Quaternion.setFromRotationMatrix()` | 由旋转矩阵设置 |

### 新增的标准方法

0.9.0 还为 `Vector2/3/4`、`Quaternion`、`Matrix4` 补充了大量常用方法（均为链式 mutator，返回 `this`），例如：`addVectors` / `subVectors` / `multiplyVectors`、`dot`、`lengthSq`、`distanceTo`、`lerp` / `lerpVectors`、`applyMatrix4`、`projectOnVector`、`reflect`、`Matrix4.premultiply` 等。

### 行为修正

- 静态方法 `Vector2.lerp(from, to, t)` 的插值方向已修正：`t = 0` 返回 `from`，`t = 1` 返回 `to`（此前两端颠倒），与 `Vector3` 的 `lerp` / `lerpVectors` 一致；
- `Plane.intersectsRay()` 在射线与平面平行时返回 `false`，不再计算出无效的交点。

## 向量
向量最基本的定义就是一个方向。或者更正式的说，向量有一个方向（Direction）和大小（Magnitude，也叫做强度或长度）。你可以把向量想像成一个藏宝图上的指示：“向左走10步，向北走3步，然后向右走5步”；“左”就是方向，“10步”就是向量的长度。那么这个藏宝图的指示一共有3个向量。向量可以在任意维度（Dimension）上，但是我们通常只使用2至4维。如果一个向量有2个维度，它表示一个平面的方向（想象一下2D的图像），当它有3个维度的时候它可以表达一个3D世界的方向。
### 二维向量
```ts
import {Vector2} from "@orillusion/core";

// 创建默认二维向量， x,y 分量值均为0.0
let v1 = new Vector2();

// 创建二维向量，即 x,y 分量均为1.0
let v2 = new Vector2(1.0, 1.0);

// 设置指定值
v1.set(2.0, 2.0);

// 获取向量的分量值
let x = v1.x;
let y = v1.y;

// 计算两个向量距离
let result1 = v1.distance(v2);

// 计算两个向量的和（注意：会就地修改 v1）
v1.add(v2);

// 计算两个向量的差（就地修改 v1）
v1.sub(v2);

// 将两个分量同时乘以一个标量（就地修改 v1）
v1.multiplyScalar(2.0);

// 将两个分量同时除以一个标量（就地修改 v1）
v1.divide(2.0);

// 计算向量的长度
let result6 = v1.length();

// 计算当前向量与目标向量之间的角度
let result7 = v1.getAngle(v2);

// 计算当前向量与给定向量是否相等
let result9 = v1.equals(v2);

// 克隆当前向量
let result10 = v1.clone();

// 使用一个给定的向量给当前向量赋值
v1.copy(v2);

// 将向量转换为单位向量
v1.normalize();

```
### 三维向量
```ts
import {Vector3} from "@orillusion/core";

// 创建默认三维向量， x,y,z 分量值均为0.0
let v1 = new Vector3();

// 创建二维向量，即 x,y,z,w 分量均为1.0
let v2 = new Vector3(1.0, 1.0, 1.0, 1.0);

// 设置指定值
v1.set(2.0, 2.0, 2.0, 2.0);

// 获取向量的分量值
let x = v1.x;
let y = v1.y;
let z = v1.z;
let w = v1.w;

// 计算向量的长度
let result1 = v1.length();

// 计算两个向量的和（就地修改 v1）
v1.add(v2);

// 计算两个向量的差（就地修改 v1）
v1.sub(v2);

// 将各分量同时乘以一个向量（按分量相乘，就地修改 v1）
v1.multiply(v2);

// 将各分量同时除以一个向量（就地修改 v1）
v1.divide(v2);

// 不改变入参的静态写法：out = v1 + v2
let out = new Vector3();
Vector3.add(v1, v2, out);

// 静态函数计算向量的距离
let result6 = Vector3.distance(v1, v2);

// 计算当前向量与给定向量是否相等
let result9 = v1.equals(v2);

// 克隆当前向量
let result10 = v1.clone();

// 使用一个给定的向量给当前向量赋值
v1.copy(v2);

// 将向量转换为单位向量
v1.normalize();

```
## Rectangle
用来表示一个矩形的区域
```ts
import {Rectangle} from "@orillusion/core";

// 使用默认值构造一个矩形区域，默认值均是0
let r1 = new Rectangle();

// 使用指定值构造一个矩形区域
let r2 = new Rectangle(0, 0, 10, 10);

// 获取矩形宽度
let h = r1.width;

// 设置矩形宽度
r1.width = 100;

// 获取矩形高度
let h = r1.height;

// 设置矩形高度
r1.height = 100;

// 克隆一个新的矩形
let r3 = r1.clone();

// 使用新值覆盖矩形原有值
r3.copy(r2);

// 将该对象的值复制到给定的矩形对象
r2.copyTo(r3);

// 判断给定的点是否在区域内
let result1 = r1.inner(0, 0);

// 判断矩形区域是否相等
let result2 = r1.equal(r2)

// 判断矩形区域是否有重叠部分
let result3 = r1.equalInnerArea(r2);

// 获取两个矩形区域重叠的部分
let result4 = r1.innerArea(r2);

```

## Color
```ts
import { Color } from '@orillusion/core';

// 创建 Color 对象，默认值无为1.0
let c1 = new Color();

// 使用给定值创建 Color 对象
let c2 = new Color(1, 1, 1, 1);

// 获取红色分量
let r = c1.r;

// 获取绿色分量
let g = c1.g;

// 获取蓝色分量
let b = c1.b;

// 获取透明度
let a = c1.a;

// 设置颜色值
c1.setTo(0.5, 0.5, 0.5, 1);

// 获取随机颜色
let c3 = Color.random();

// 克隆颜色值
let c4 = c3.clone();

// 使用字符串设置颜色值
let c3.setHex('#AAA')

// 获取颜色值字符串
let result1 = c1.getHex();

```


## 四元数
四元数是简单的超复数，而在图形引擎中，四元数主要用于三维旋转(四元数于三维旋转的关系)，能够表示旋转的不止四元数，还有欧拉角、轴角、矩阵等形式，之所以选择四元数，主要有以下几个优势：

* 解决了万向节死锁的问题
* 只需要存储4个浮点数，相比矩阵来说更轻量
* 无论是求逆、串联等操作，相比矩阵更为高效

```ts
import { Quaternion } from '@orillusion/core';

// 使用默认值创建四元数对象，x、y、z、w分量值均为0
let q1 = new Quaternion();

// 使用指定值创建四元数对象
let q2 = new Quaternion(0, 0, 0, 1);

// 设置四元数的值，依次设置x、y、z、w分量值
q2.set(0, 0, 0, 1);

// 进行单位旋转四元数
let result1 = q1.identity();

// 四元数除法
q1.divide(q2);

// 四元数相乘
result1.multiply(q1, q2);

// 从由轴和角度所给定的旋转来设置该四元数
q1.setFromAxisAngle(new Vector3(), 15);

// 把四元数转成角度返回
let result2 = q1.toAxisAngle(new Vector3());

// 用数值表示给定的欧拉旋转填充四元数对象
q1.setFromEuler(1, 1, 1);

// 把四元数转成欧拉角返回
let result3 = q1.toEulerAngles();

// 单位化四元数。将此四元数转换为单位系数
q1.normalize();

// 旋转一个3量坐标点
let result4 = q1.transformVector(new Vector3());

// 将数据从四元数复制到该实例
q1.copy(q2);


```

## 矩阵
在 3D 图形引擎中，计算可以在多个不同的笛卡尔坐标空间中执行，从一个坐标空间到另一个坐标空间需要使用变换矩阵，而我们数学库中的Matrix模块正是为提供这种能力而存在的。

### 三维矩阵
```ts
import { Matrix3 } from '@orillusion/core';

// 使用默认值创建3维矩阵
let m1 = new Matrix3();

// 使用指定值创建3维矩阵
let m2 = new Matrix3(10, 0, 0, 10, 0, 0);

// 克隆一个新对象
let m3 = m1.clone();

// 将当前矩阵与目标矩阵合并
m1.concat(m2);

// 将当前矩阵值由目标矩阵值覆盖
m1.copy(m2);

// 重置为单位矩阵
m1.identity();

// 倒置本矩阵
m.invert();

// 根据角度旋转
m1.rotate(10);

// 根据偏移量缩放
m1.scale(10,10);

// 判断矩阵是否相等
let result1 = m1.equal(m2);
```

### 四维矩阵
```ts
import { Matrix4, Vector3 } from '@orillusion/core';

// 使用默认值创建一个4维矩阵
let m1 = new Matrix4();

// 指定创建一个wasm 4维矩阵
let m2 = new Matrix4(false);

// 克隆一个新对象
let m3 = m1.clone();

// 相乘矩阵
m1.multiply(m2);

// 相加矩阵
m1.add(m2);

// 矩阵相减
m1.sub(m2);

// 获取逆矩阵
m.invert();

// 当前矩阵转置
m1.transpose();

// 设置矩阵位移
m1.position = new Vector3(10,10, 10);

// 返回矩阵位移
let position = m1.position;

// 设置矩阵缩放
m1.scale = new Vector3(10,10, 10);

// 返回矩阵缩放
let scale = m1.scale;

```

## 平面
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// 构造新的平面对象，使用平面位置和平面法线量作为构造函数
let p1 = new Plane(new Vector3(0,0,0), new Vector3(0,0,1));

// 复制平面
let p2 = p1.clone();

// 判断平面是否和某线段相交，并计算交点
let point1 = new Vector3();
let result1 = p1.intersectsLine(new Vector3(0,0,0), new Vector3(10,10,10), point1);

// 判断平面是否和某射线相交，并计算交点
let point2 = new Vector3();
let result2 = p1.intersectsRay(new Ray(), point2);

```

## 射线
```ts
import { Plane, Vector3, Ray } from '@orillusion/core';

// 构造新的射线，默认起点和方向都是0
let r1 = new Ray();

// 构造新的射线，使用指定的起点和方向
let r2 = new Ray(new Vector3(0,0,0), new Vector3(1,1,1));

// 克隆一个射线对象
let r3 = r1.copy();

// 获取射线方向
let direction = r1.direction;

// 设置射线方向
r1.direction = new Vector3( 1, 1, 1);

// 计算射线上的某一点
let result1 = r1.at(1);

// 设置射线起点
r1.setOrigin(new Vector3(1,1,1));

// 获取射线的起点
let result2 = r1.getOrigin();

```

## Box2
二维轴对齐包围盒，由 `min`、`max` 两个角点描述，常用于屏幕矩形、UV 范围、二维裁剪与框选：
```ts
import { Box2, Vector2 } from '@orillusion/core';

// 默认构造一个空盒（min 为 +∞，max 为 -∞），第一次 expandByPoint 时确定范围
let b1 = new Box2();
b1.expandByPoint(new Vector2(1, 2));
b1.expandByPoint(new Vector2(5, 4));

// 使用角点、点集或中心与尺寸构造
let b2 = new Box2(new Vector2(0, 0), new Vector2(10, 10));
let b3 = new Box2().setFromPoints([new Vector2(1, 1), new Vector2(3, 6), new Vector2(-2, 4)]);
let b4 = new Box2().setFromCenterAndSize(new Vector2(5, 5), new Vector2(4, 2));

// 是否为空、中心、尺寸
let empty = new Box2().isEmpty(); // true
let center = b2.getCenter();
let size = b2.getSize();

// 包含与相交判断（边界接触也算相交）
let r1 = b2.containsPoint(new Vector2(3, 3));
let r2 = b2.containsBox(b4);
let r3 = b2.intersectsBox(b3);

// 点在盒内的归一化位置（每个轴 0 ~ 1），例如屏幕坐标转 UV
let uv = b2.getParameter(new Vector2(2.5, 7.5)); // (0.25, 0.75)

// 把点限制在盒内，以及点到盒的距离（在盒内为 0）
let p = b2.clampPoint(new Vector2(15, -3)); // (10, 0)
let d = b2.distanceToPoint(new Vector2(13, 14)); // 5

// 扩展、平移；intersect 求交集（不相交时变为空盒），union 求并集
b1.expandByScalar(1);
b1.translate(new Vector2(2, 0));
let overlap = b2.clone().intersect(b3);
let merged = b2.clone().union(b3);
```

## 球坐标与柱坐标
`Spherical` 与 `Cylindrical` 用来在极坐标形式与直角坐标之间转换，适合环绕、轨道、螺旋等运动，坐标约定与 three.js 相同。

`Spherical` 由半径 `radius`、极角 `phi`（与 +Y 轴的夹角，`0 ~ π`）和方位角 `theta`（绕 +Y 轴、从 +Z 转向 +X）描述，角度均为弧度。`OrbitController` 内部即使用它环绕目标：
```ts
import { Spherical, Vector3 } from '@orillusion/core';

// 半径 10，极角 60°，方位角 0
let s = new Spherical(10, Math.PI / 3, 0);

// 转换为直角坐标（写入新对象或指定的输出对象）
let pos = s.toVector3();

// 由直角坐标设置
s.setFromVector3(new Vector3(3, 4, 0));
s.setFromCartesianCoords(3, 4, 0);

// 让相机绕原点水平旋转
s.theta += 0.01;
// 把 phi 限制在 (0, π) 内，避免在正上方 / 正下方时朝向退化
s.makeSafe();
camera.object3D.localPosition = s.toVector3();
```

`Cylindrical` 由到 Y 轴的距离 `radius`、方位角 `theta` 和高度 `y` 描述：
```ts
import { Cylindrical, Vector3 } from '@orillusion/core';

// 半径 6，方位角 0，高度 0
let c = new Cylindrical(6, 0, 0);

// 沿螺旋线上升
c.theta += 0.05;
c.y += 0.02;
obj.localPosition = c.toVector3();

// 由直角坐标设置
c.setFromVector3(new Vector3(0, 2, 6));
```

## Catmull-Rom 曲线
`CatmullRomCurve3` 是一条**经过所有控制点**的平滑三维样条曲线（与贝塞尔曲线不同，后者的中间控制点不在曲线上），适合相机路径、巡逻路线、管线走向等场景，接口与 three.js 一致：
```ts
import { CatmullRomCurve3, Vector3 } from '@orillusion/core';

let curve = new CatmullRomCurve3(
    [new Vector3(-10, 0, 0), new Vector3(0, 5, 5), new Vector3(10, 0, 0), new Vector3(0, -5, -5)],
    true,          // closed：是否首尾相连
    'centripetal', // curveType：曲线类型
    0.5            // tension：仅 'catmullrom' 类型使用
);

// 按曲线参数 t（0 ~ 1）取点：控制点间距不均匀时，相同的 t 步长对应的距离不同
let p1 = curve.getPoint(0.5);

// 按弧长比例 u（0 ~ 1）取点：匀速运动、相机路径通常使用这一组
let p2 = curve.getPointAt(0.5);
let tangent = curve.getTangentAt(0.5); // 单位切线，即运动方向

// 曲线总长度
let length = curve.getLength();

// 采样：getPoints 按参数等分，getSpacedPoints 按弧长等分，均返回 divisions + 1 个点
let points = curve.getPoints(100);
let spaced = curve.getSpacedPoints(100);
```

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `points` | `[]` | 控制点数组 |
| `closed` | `false` | 是否闭合 |
| `curveType` | `'centripetal'` | 曲线类型，见下表 |
| `tension` | `0.5` | 仅 `'catmullrom'` 类型使用：`0` 为折线段，`0.5` 为经典 Catmull-Rom，越大曲线越松弛 |
| `arcLengthDivisions` | `200` | 计算弧长时的采样段数，越大 `getPointAt` 越精确 |

| `curveType` | 说明 |
| --- | --- |
| `'centripetal'` | 默认。向心参数化，每段内不会出现尖角或自相交 |
| `'chordal'` | 弦长参数化，曲线比向心参数化更松弛 |
| `'catmullrom'` | 经典的均匀 Catmull-Rom，由 `tension` 控制松紧 |

::: tip
`getPointAt`、`getLength` 等依赖的弧长表会被缓存。缓存以控制点坐标和 `closed`、`curveType`、`tension` 等参数为键，修改控制点（包括直接改某个点的坐标）或参数后会在下次调用时自动重新计算；也可以调用 `curve.updateArcLengths()` 强制重建。
:::

下面的示例中，红色小球是控制点，白线是经过它们的曲线；黄色点为 `getSpacedPoints` 按弧长等分的结果，青色点为 `getPoints` 按参数等分的结果，可以看到青色点在控制点密集处挤在一起。橙色方块用 `getPointAt` 沿曲线匀速运动，并朝向 `getTangentAt` 的方向；绿色小球用 `Spherical` 绕球面运动，紫色小球用 `Cylindrical` 沿螺旋线运动。

<Demo src="/demos/tools/catmullRom.ts"></Demo>

<<< @/public/demos/tools/catmullRom.ts

## MathUtil

```ts
import { MathUtil, Vector3, Matrix4 } from '@orillusion/core';

// 将数值限制在某一范围内
let result1 = MathUtil.clampf(1, 0, 2);

// 规范化角度，使其限制在[-180, 180]范围内
let result2 = MathUtil.normalizeAngle(100);

// 返回某数的小数部分
let result3 = MathUtil.fract(1.1);

// 计算两个向量之间的角度
let result4 = MathUtil.angle_360(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// 计算出一个方向变换到另一个方向的四元数
let result5 = MathUtil.fromToRotation(new Vector3(10, 10, 10), new Vector3(20, 20, 20));

// 计算向量变换，并将结果赋值到输入变量中
let result6 = MathUtil.transformVector(new Matrix4(), new Vector3(20, 20, 20))
```