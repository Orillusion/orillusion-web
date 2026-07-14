[**@orillusion/core**](../README.md)

***

# Interface: TwoBoneIKConfig

Defined in: [src/components/anim/ik/TwoBoneIK.ts:6](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L6)

## Properties

### name

> **name**: `string`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:7](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L7)

***

### chain

> **chain**: \[`string`, `string`, `string`\]

Defined in: [src/components/anim/ik/TwoBoneIK.ts:9](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L9)

Bone names: [root (hip), middle (knee), end (ankle)].

***

### target

> **target**: [`Object3D`](../classes/Object3D.md) \| [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/TwoBoneIK.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L11)

IK target (Vector3 or Object3D whose worldPosition is read each frame).

***

### pole?

> `optional` **pole?**: [`Object3D`](../classes/Object3D.md) \| [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/TwoBoneIK.ts:13](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L13)

Optional pole hint to fix the bend plane.

***

### weight

> **weight**: `number`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:15](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L15)

[0,1] blend between the original pose and the IK-solved pose.
