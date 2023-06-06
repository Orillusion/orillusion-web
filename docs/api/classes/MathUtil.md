# Class: MathUtil

Built-in mathematical basic calculation factory function

### Constructors

- [constructor](MathUtil.md#constructor)

### Methods

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

## Constructors

### constructor

• **new MathUtil**()

## Methods

### clampf

▸ `Static` **clampf**(`value`, `min_inclusive`, `max_inclusive`): `number`

Limit the value to a certain range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Original value |
| `min_inclusive` | `number` | minimum value |
| `max_inclusive` | `number` | maximum value |

#### Returns

`number`

Return the calculation result

#### Defined in

[src/math/MathUtil.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L107)

___

### normalizeAngle

▸ `Static` **normalizeAngle**(`a`): `number`

Normalize the Angle so that it is limited to the range [-180, 180]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Angle of input |

#### Returns

`number`

Return the processing result

#### Defined in

[src/math/MathUtil.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L121)

___

### fract

▸ `Static` **fract**(`v`): `number`

Returns the fractional part of a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | input value |

#### Returns

`number`

Return the result

#### Defined in

[src/math/MathUtil.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L136)

___

### getRandDirXZ

▸ `Static` **getRandDirXZ**(`r`): `Object`

Generate a random pair of x and z coordinates that fall within the radius of the circle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | radius |

#### Returns

`Object`

The generated x, z results

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `z` | `number` |

#### Defined in

[src/math/MathUtil.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L145)

___

### getRandDirXYZ

▸ `Static` **getRandDirXYZ**(`r`): [`Vector3`](Vector3.md)

Generate a random pair of x, y, and z coordinates that fall within the radius of the sphere

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | radius |

#### Returns

[`Vector3`](Vector3.md)

The Vector3 vector formed by the generated x, y, and z coordinate values

#### Defined in

[src/math/MathUtil.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L158)

___

### getCycleXYZ

▸ `Static` **getCycleXYZ**(`r`): [`Vector3`](Vector3.md)

According to the radius, generate a random pair of x, y, z coordinates that fall within the sphere and the y value is between [-r/2, r/2]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | radius |

#### Returns

[`Vector3`](Vector3.md)

The Vector3 vector formed by the generated x, y, and z coordinate values

#### Defined in

[src/math/MathUtil.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L172)

___

### angle

▸ `Static` **angle**(`p1`, `p2`): `number`

Calculate the Angle between two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) | Vector 1 |
| `p2` | [`Vector3`](Vector3.md) | Vector 2 |

#### Returns

`number`

Return the calculation result

#### Defined in

[src/math/MathUtil.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L187)

___

### angle\_360

▸ `Static` **angle_360**(`from`, `to`): `number`

Calculate the Angle between two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `any` | Vector 1 |
| `to` | `any` | Vector 2 |

#### Returns

`number`

The Angle between two vectors

#### Defined in

[src/math/MathUtil.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L203)

___

### fromToRotation

▸ `Static` **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Quaternion`](Quaternion.md)

Calculate the quaternion from one direction to the other

**`Version`**

Orillusion3D  0.5.1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | `undefined` | Initial direction |
| `toDirection` | [`Vector3`](Vector3.md) | `undefined` | The transformed direction |
| `target` | [`Quaternion`](Quaternion.md) | `null` | The calculated quaternion is null by default and the result is returned |

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion The calculated quaternion returns a new instance created if target is null

#### Defined in

[src/math/MathUtil.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L232)

___

### getEularDir\_yUp

▸ `Static` **getEularDir_yUp**(`v`): [`Vector3`](Vector3.md)

Get the Eular direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | input value |

#### Returns

[`Vector3`](Vector3.md)

Return the calculation result

#### Defined in

[src/math/MathUtil.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L245)

___

### transformVector

▸ `Static` **transformVector**(`matrix`, `vector`, `result?`): [`Vector3`](Vector3.md)

Compute the vector transformation and assign the results to the input variables

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` | transformation matrix |
| `vector` | [`Vector3`](Vector3.md) | `undefined` | Original vector |
| `result` | [`Vector3`](Vector3.md) | `null` | output vector |

#### Returns

[`Vector3`](Vector3.md)

Returns the output vector

#### Defined in

[src/math/MathUtil.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L259)

___

### getRotationY

▸ **getRotationY**(`v`): `number`

The rotation Angle around the Y-axis is obtained from the input vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | input vector |

#### Returns

`number`

Return the calculation result

#### Defined in

[src/math/MathUtil.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/math/MathUtil.ts#L219)
