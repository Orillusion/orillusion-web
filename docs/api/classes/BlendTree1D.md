[**@orillusion/core**](../README.md)

***

# Class: BlendTree1D

Defined in: [src/components/anim/graph/BlendTree.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/BlendTree.ts#L20)

BlendTree1D — linear blend across N motion thresholds based on one parameter.

Drives the AnimatorComponent's per-clip weights so that, e.g., as `speed`
goes from 0 to 1, the active mix shifts from idle → walk → run smoothly.
No new render path is needed; we reuse the existing weighted-clip mix in
AnimatorComponent.updateSkeletonAnimMix.

## Constructors

### Constructor

> **new BlendTree1D**(`points`): `BlendTree1D`

Defined in: [src/components/anim/graph/BlendTree.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/BlendTree.ts#L24)

#### Parameters

##### points

[`MotionPoint`](../interfaces/MotionPoint.md)[]

#### Returns

`BlendTree1D`

## Methods

### setValue()

> **setValue**(`v`): `void`

Defined in: [src/components/anim/graph/BlendTree.ts:33](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/BlendTree.ts#L33)

Set the parameter value. Out-of-range values clamp to the endpoints.

#### Parameters

##### v

`number`

#### Returns

`void`

***

### getValue()

> **getValue**(): `number`

Defined in: [src/components/anim/graph/BlendTree.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/BlendTree.ts#L34)

#### Returns

`number`

***

### apply()

> **apply**(`animator`): `void`

Defined in: [src/components/anim/graph/BlendTree.ts:40](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/BlendTree.ts#L40)

Apply the blend: zero out every clip's weight, then write the two-point
lerp weights for the segment containing `value`.

#### Parameters

##### animator

[`AnimatorComponent`](AnimatorComponent.md)

#### Returns

`void`
