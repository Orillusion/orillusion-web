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