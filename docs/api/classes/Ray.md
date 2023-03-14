# Class: Ray

射线


### Properties

- [origin](Ray.md#origin)
- [length](Ray.md#length)

### Constructors

- [constructor](Ray.md#constructor)

### Accessors

- [direction](Ray.md#direction)

### Methods

- [intersectsBox](Ray.md#intersectsbox)
- [intersectBox](Ray.md#intersectbox)
- [at](Ray.md#at)
- [copy](Ray.md#copy)
- [setApproxDirection](Ray.md#setapproxdirection)
- [setOrigin](Ray.md#setorigin)
- [getOrigin](Ray.md#getorigin)
- [getPoint](Ray.md#getpoint)
- [sqrDistToPoint](Ray.md#sqrdisttopoint)
- [applyMatrix](Ray.md#applymatrix)
- [pointInTriangle](Ray.md#pointintriangle)
- [intersectTriangle](Ray.md#intersecttriangle)
- [intersectSphere](Ray.md#intersectsphere)
- [intersectionSegment](Ray.md#intersectionsegment)

## Properties

### origin

• **origin**: [`Vector3`](Vector3.md)

射线起始点

#### Defined in

[src/engine/math/Ray.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L19)

___

### length

• **length**: `number` = `Number.MAX_VALUE`

长度

#### Defined in

[src/engine/math/Ray.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L27)

## Constructors

### constructor

• **new Ray**(`origin?`, `dir?`)

构建新的射线对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin?` | [`Vector3`](Vector3.md) | 射线起始点 |
| `dir?` | [`Vector3`](Vector3.md) | 射线方向 |

#### Defined in

[src/engine/math/Ray.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L34)

## Accessors

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

获取射线方向

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Ray.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L43)

• `set` **direction**(`dir`): `void`

设置射线方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) | 方向向量 |

#### Returns

`void`

#### Defined in

[src/engine/math/Ray.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L51)

## Methods

### intersectsBox

▸ **intersectsBox**(`box`): `boolean`

判断是否和某包围盒相交

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `box` | `IBound` | 包围盒 |

#### Returns

`boolean`

返回是否相交

#### Defined in

[src/engine/math/Ray.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L61)

___

### intersectBox

▸ **intersectBox**(`box`, `target`): [`Vector3`](Vector3.md)

判断是否和某包围盒相交，并计算交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `box` | `IBound` | 包围盒 |
| `target` | [`Vector3`](Vector3.md) | 输出交点 |

#### Returns

[`Vector3`](Vector3.md)

返回是否相交

#### Defined in

[src/engine/math/Ray.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L71)

___

### at

▸ **at**(`t`, `target`): [`Vector3`](Vector3.md)

计算射线上的某点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 长度标量 |
| `target` | [`Vector3`](Vector3.md) | 输出值 |

#### Returns

[`Vector3`](Vector3.md)

输出值

#### Defined in

[src/engine/math/Ray.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L132)

___

### copy

▸ **copy**(`src`): [`Ray`](Ray.md)

将射线设置为从原射线的拷贝

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Ray`](Ray.md) | 原射线 |

#### Returns

[`Ray`](Ray.md)

拷贝后的射线对象本身

#### Defined in

[src/engine/math/Ray.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L147)

___

### setApproxDirection

▸ **setApproxDirection**(`dir`): `void`

快速射至近似射线方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) | 输入方向 |

#### Returns

`void`

#### Defined in

[src/engine/math/Ray.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L159)

___

### setOrigin

▸ **setOrigin**(`origin`): `void`

设置射线起点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Vector3`](Vector3.md) | 输入起点 |

#### Returns

`void`

#### Defined in

[src/engine/math/Ray.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L167)

___

### getOrigin

▸ **getOrigin**(): [`Vector3`](Vector3.md)

获取射线起点

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/math/Ray.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L174)

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

获取射线上指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 长度位置 |

#### Returns

[`Vector3`](Vector3.md)

返回指定位置的点

#### Defined in

[src/engine/math/Ray.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L183)

___

### sqrDistToPoint

▸ **sqrDistToPoint**(`P`): `number`

计算距某点的距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Vector3`](Vector3.md) | 指定点 |

#### Returns

`number`

返回计算结果

#### Defined in

[src/engine/math/Ray.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L193)

___

### applyMatrix

▸ **applyMatrix**(`mat4`): `void`

应用矩阵变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) | 变换矩阵 |

#### Returns

`void`

#### Defined in

[src/engine/math/Ray.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L209)

___

### pointInTriangle

▸ **pointInTriangle**(`P`, `A`, `B`, `C`): `boolean`

计算指定点是否在某个三角形内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Vector3`](Vector3.md) | 输入点 |
| `A` | [`Vector3`](Vector3.md) | 三角形顶点1 |
| `B` | [`Vector3`](Vector3.md) | 三角形顶点2 |
| `C` | [`Vector3`](Vector3.md) | 三角形顶点3 |

#### Returns

`boolean`

返回是否在三角形内

#### Defined in

[src/engine/math/Ray.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L226)

___

### intersectTriangle

▸ **intersectTriangle**(`orig`, `dir`, `face`): [`Vector3`](Vector3.md)

判断某射线是否和某三角型相交

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orig` | [`Vector3`](Vector3.md) | 射线起始点 |
| `dir` | [`Vector3`](Vector3.md) | 射线方向 |
| `face` | `Triangle` | 三角形 |

#### Returns

[`Vector3`](Vector3.md)

交点

#### Defined in

[src/engine/math/Ray.ts:271](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L271)

___

### intersectSphere

▸ **intersectSphere**(`o`, `dir`, `center`, `radius`): [`Vector3`](Vector3.md)

判断某射线是否和球面相交

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | [`Vector3`](Vector3.md) | 射线起始点 |
| `dir` | [`Vector3`](Vector3.md) | 射线方向 |
| `center` | [`Vector3`](Vector3.md) | 球体中心 |
| `radius` | `number` | 球体半径 |

#### Returns

[`Vector3`](Vector3.md)

交点

#### Defined in

[src/engine/math/Ray.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L342)

___

### intersectionSegment

▸ **intersectionSegment**(`sega`, `segb`, `threshold`): `Object`

在给定容差（阈值）内，射线与给定线段之间的相交测试

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sega` | [`Vector3`](Vector3.md) | 用于测试交点的线段的第一个点 |
| `segb` | [`Vector3`](Vector3.md) | 用于测试交点的线段的第二个点 |
| `threshold` | `number` | 容差余量，如果光线不与线段相交但接近给定阈值，则相交成功 |

#### Returns

`Object`

如果有交点，则从射线原点到交点的距离，如果没有交点，则为 -1

| Name | Type |
| :------ | :------ |
| `out` | [`Vector3`](Vector3.md) |
| `length` | `number` |

#### Defined in

[src/engine/math/Ray.ts:373](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Ray.ts#L373)
