[**@orillusion/core**](../README.md)

***

# Class: TwoBoneIK

Defined in: [src/components/anim/ik/TwoBoneIK.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L39)

Analytic Two-Bone IK solver.

Given a 3-joint chain [hip, knee, ankle] and a world-space target, computes
the hip and knee local rotations so the ankle reaches the target. Uses the
law of cosines on the bone-length triangle, then an extra hip rotation
to align the chain with the target direction. A "pole" reference point
fixes the bend plane (knee direction) — without one the solver picks an
arbitrary plane that may flip when the chain crosses its axis.

Runs CPU-side after layer mix in AnimatorComponent.onUpdate. IK chains are
tiny (≤4 bones) so the cost is negligible.

Limits:
 - Doesn't handle hierarchies where chain[0]'s parent has non-identity
   rotation that we don't iterate through. For human rigs (root → hip)
   this is usually fine.
 - Assumes uniform unit scale on the chain.

## Constructors

### Constructor

> **new TwoBoneIK**(`cfg`): `TwoBoneIK`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:66](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L66)

#### Parameters

##### cfg

[`TwoBoneIKConfig`](../interfaces/TwoBoneIKConfig.md)

#### Returns

`TwoBoneIK`

## Properties

### name

> **name**: `string`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:40](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L40)

***

### chain

> **chain**: \[`string`, `string`, `string`\]

Defined in: [src/components/anim/ik/TwoBoneIK.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L41)

***

### target

> **target**: [`Object3D`](Object3D.md) \| [`Vector3`](Vector3.md)

Defined in: [src/components/anim/ik/TwoBoneIK.ts:42](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L42)

***

### pole?

> `optional` **pole?**: [`Object3D`](Object3D.md) \| [`Vector3`](Vector3.md)

Defined in: [src/components/anim/ik/TwoBoneIK.ts:43](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L43)

***

### weight

> **weight**: `number`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:44](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L44)

## Methods

### solve()

> **solve**(`animator`): `void`

Defined in: [src/components/anim/ik/TwoBoneIK.ts:74](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/TwoBoneIK.ts#L74)

#### Parameters

##### animator

[`AnimatorComponent`](AnimatorComponent.md)

#### Returns

`void`
