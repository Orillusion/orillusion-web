# Class: SkeletonPose

Skeleton animation consists of many skeleton pose, 
and each pose describes the transformation information of all bone

### Constructors

- [constructor](SkeletonPose.md#constructor)

### Properties

- [time](SkeletonPose.md#time)

### Accessors

- [numJoint](SkeletonPose.md#numjoint)
- [joints](SkeletonPose.md#joints)
- [jointMatrixIndexTable](SkeletonPose.md#jointmatrixindextable)

### Methods

- [buildSkeletonPose](SkeletonPose.md#buildskeletonpose)
- [lerp](SkeletonPose.md#lerp)
- [copyFrom](SkeletonPose.md#copyfrom)
- [reset](SkeletonPose.md#reset)

## Constructors

### constructor

• **new SkeletonPose**(`skeleton`, `useGlobalMatrix?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skeleton` | `Skeleton` | `undefined` |
| `useGlobalMatrix` | `boolean` | `false` |

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L21)

## Properties

### time

• **time**: `number`

time of this pose in owner animation clip

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L16)

## Accessors

### numJoint

• `get` **numJoint**(): `number`

Returns joints count of owner skeleton

#### Returns

`number`

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L67)

___

### joints

• `get` **joints**(): [`JointPose`](JointPose.md)[]

Returns all joint pose

#### Returns

[`JointPose`](JointPose.md)[]

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L74)

___

### jointMatrixIndexTable

• `get` **jointMatrixIndexTable**(): `number`[]

Returns list of matrix's index

#### Returns

`number`[]

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L81)

## Methods

### buildSkeletonPose

▸ **buildSkeletonPose**(`poseData`): `void`

build this pose from float32 array data

#### Parameters

| Name | Type |
| :------ | :------ |
| `poseData` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L35)

___

### lerp

▸ **lerp**(`a`, `b`, `weight`): `void`

Returns lerped skeletonPose from pose a to pose b

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`SkeletonPose`](SkeletonPose.md) | selected pose No.1 |
| `b` | [`SkeletonPose`](SkeletonPose.md) | selected pose No.2 |
| `weight` | `number` | number |

#### Returns

`void`

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L91)

___

### copyFrom

▸ **copyFrom**(`other`): `void`

Copy skeleton pose from other skeleton pose

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`SkeletonPose`](SkeletonPose.md) | source skeleton pose |

#### Returns

`void`

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L104)

___

### reset

▸ **reset**(): `void`

Reset this skeleton pose

#### Returns

`void`

#### Defined in

[src/components/anim/skeletonAnim/SkeletonPose.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L113)
