[**@orillusion/core**](../README.md)

***

# Class: SkeletonPose

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:12](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L12)

Skeleton animation consists of many skeleton pose, 
and each pose describes the transformation information of all bone

## Constructors

### Constructor

> **new SkeletonPose**(`skeleton`, `useGlobalMatrix?`): `SkeletonPose`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:21](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L21)

#### Parameters

##### skeleton

`Skeleton`

##### useGlobalMatrix?

`boolean` = `false`

#### Returns

`SkeletonPose`

## Properties

### time

> **time**: `number`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L16)

time of this pose in owner animation clip

## Accessors

### numJoint

#### Get Signature

> **get** **numJoint**(): `number`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:67](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L67)

Returns joints count of owner skeleton

##### Returns

`number`

***

### joints

#### Get Signature

> **get** **joints**(): `JointPose`[]

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:74](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L74)

Returns all joint pose

##### Returns

`JointPose`[]

***

### jointMatrixIndexTable

#### Get Signature

> **get** **jointMatrixIndexTable**(): `number`[]

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:81](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L81)

Returns list of matrix's index

##### Returns

`number`[]

## Methods

### buildSkeletonPose()

> **buildSkeletonPose**(`poseData`): `void`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L35)

build this pose from float32 array data

#### Parameters

##### poseData

`Float32Array`

#### Returns

`void`

***

### lerp()

> **lerp**(`a`, `b`, `weight`): `void`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L91)

Returns lerped skeletonPose from pose a to pose b

#### Parameters

##### a

`SkeletonPose`

selected pose No.1

##### b

`SkeletonPose`

selected pose No.2

##### weight

`number`

number

#### Returns

`void`

***

### copy()

> **copy**(`other`): `void`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:112](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L112)

Copy skeleton pose from other skeleton pose

#### Parameters

##### other

`SkeletonPose`

source skeleton pose

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [src/components/anim/skeletonAnim/SkeletonPose.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/anim/skeletonAnim/SkeletonPose.ts#L121)

Reset this skeleton pose

#### Returns

`void`
