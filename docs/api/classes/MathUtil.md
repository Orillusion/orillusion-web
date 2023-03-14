# Class: MathUtil

内置数学基本计算工厂函数


### Methods

- [computeGaussian](MathUtil.md#computegaussian)
- [gaussCoef](MathUtil.md#gausscoef)
- [clampf](MathUtil.md#clampf)
- [normalizeAngle](MathUtil.md#normalizeangle)
- [fract](MathUtil.md#fract)
- [getRandDirXZ](MathUtil.md#getranddirxz)
- [getRandDirXYZ](MathUtil.md#getranddirxyz)
- [getCycleXYZ](MathUtil.md#getcyclexyz)
- [angle](MathUtil.md#angle)
- [angle\_360](MathUtil.md#angle_360)
- [fromToRotation](MathUtil.md#fromtorotation)
- [getEularDir\_yUp](MathUtil.md#geteulardir_yup)
- [transformVector](MathUtil.md#transformvector)
- [getRotationY](MathUtil.md#getrotationy)

### Constructors

- [constructor](MathUtil.md#constructor)

## Methods

### computeGaussian

▸ `Static` **computeGaussian**(`n`, `theta`): `number`

计算高斯分布函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `any` | 函数变量值 |
| `theta` | `any` | 数据分布的离散程度 |

#### Returns

`number`

计算所得的高斯分布值结果

#### Defined in

[src/engine/math/MathUtil.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L65)

___

### gaussCoef

▸ `Static` **gaussCoef**(`sigma`): `Float32Array`

计算高斯系数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sigma` | `any` | sigma值 |

#### Returns

`Float32Array`

返回计算结果

#### Defined in

[src/engine/math/MathUtil.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L74)

___

### clampf

▸ `Static` **clampf**(`value`, `min_inclusive`, `max_inclusive`): `number`

将数值限制在某一范围内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 原数值 |
| `min_inclusive` | `number` | 最小值 |
| `max_inclusive` | `number` | 最大值 |

#### Returns

`number`

处理结果

#### Defined in

[src/engine/math/MathUtil.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L104)

___

### normalizeAngle

▸ `Static` **normalizeAngle**(`a`): `number`

规范化角度，使其限制在[-180, 180]范围内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 输入角度 |

#### Returns

`number`

返回处理结果

#### Defined in

[src/engine/math/MathUtil.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L118)

___

### fract

▸ `Static` **fract**(`v`): `number`

返回某数的小数部分

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 输入值 |

#### Returns

`number`

返回处理结果

#### Defined in

[src/engine/math/MathUtil.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L129)

___

### getRandDirXZ

▸ `Static` **getRandDirXZ**(`r`): `Object`

根据半径生成一对随机的落在该圆范围内的x, z坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | 输入半径 |

#### Returns

`Object`

生成的x, z结果

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `z` | `number` |

#### Defined in

[src/engine/math/MathUtil.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L138)

___

### getRandDirXYZ

▸ `Static` **getRandDirXYZ**(`r`): [`Vector3`](Vector3.md)

根据半径生成一对随机的落在该圆球范围内的x, y, z坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | 输入半径 |

#### Returns

[`Vector3`](Vector3.md)

由生成的x, y, z坐标值构成的Vector3向量

#### Defined in

[src/engine/math/MathUtil.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L152)

___

### getCycleXYZ

▸ `Static` **getCycleXYZ**(`r`): [`Vector3`](Vector3.md)

根据半径生成一对随机的落在该圆球范围内，且y值在[-r/2, r/2]之间的x, y, z坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | 输入半径 |

#### Returns

[`Vector3`](Vector3.md)

由生成的x, y, z坐标值构成的Vector3向量

#### Defined in

[src/engine/math/MathUtil.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L167)

___

### angle

▸ `Static` **angle**(`p1`, `p2`): `number`

计算两个向量之间的角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) | 向量1 |
| `p2` | [`Vector3`](Vector3.md) | 向量2 |

#### Returns

`number`

返回计算结果

#### Defined in

[src/engine/math/MathUtil.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L183)

___

### angle\_360

▸ `Static` **angle_360**(`from`, `to`): `number`

计算两个向量之间的角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `any` | 向量1 |
| `to` | `any` | 向量2 |

#### Returns

`number`

两向量的夹角 角度

#### Defined in

[src/engine/math/MathUtil.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L199)

___

### fromToRotation

▸ `Static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Quaternion`](Quaternion.md)

计算出一个方向变换到另一个方向的四元数

**`Version`**

UU3D 3.0

**`Platform`**

Web,Native

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | `undefined` | 初始方向 |
| `toDirection` | [`Vector3`](Vector3.md) | `undefined` | 变换后的方向 |
| `target` | [`Quaternion`](Quaternion.md) | `null` | 计算出的四元数 默认为null 结果会返回 |

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion 计算出的四元数 如果 target为null 就会创建新实例返回

#### Defined in

[src/engine/math/MathUtil.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L225)

___

### getEularDir\_yUp

▸ `Static` **getEularDir_yUp**(`v`): [`Vector3`](Vector3.md)

获取Eular方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 输入值 |

#### Returns

[`Vector3`](Vector3.md)

返回计算结果

#### Defined in

[src/engine/math/MathUtil.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L240)

___

### transformVector

▸ `Static` **transformVector**(`matrix`, `vector`, `result?`): [`Vector3`](Vector3.md)

计算向量变换，并将结果赋值到输入变量中

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` | 变换矩阵 |
| `vector` | [`Vector3`](Vector3.md) | `undefined` | 原始向量 |
| `result` | [`Vector3`](Vector3.md) | `null` | 输出向量 |

#### Returns

[`Vector3`](Vector3.md)

返回输出向量

#### Defined in

[src/engine/math/MathUtil.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L254)

___

### getRotationY

▸ **getRotationY**(`v`): `number`

根据输入向量获取绕Y轴旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | 输入向量 |

#### Returns

`number`

返回计算结果

#### Defined in

[src/engine/math/MathUtil.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/MathUtil.ts#L211)

## Constructors

### constructor

• **new MathUtil**()
