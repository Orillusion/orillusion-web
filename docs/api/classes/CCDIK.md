[**@orillusion/core**](../README.md)

***

# Class: CCDIK

Defined in: [src/components/anim/ik/CCDIK.ts:110](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L110)

Cyclic Coordinate Descent IK (CCDIK).

Iteratively rotates each bone in the chain (end-effector toward root) so
the chain tip approaches the target. Unlike TwoBoneIK, CCDIK handles
arbitrary chain lengths — useful for spines, tails, hair tentacles, or any
"look-at" animation that needs to bend through multiple joints.

Textbook CCD: for each iteration, walk the chain from tip-1 toward root and
at each joint rotate to align the (joint→tip) vector with (joint→target).
Convergence is fast for short chains (≤8 bones).

## Constructors

### Constructor

> **new CCDIK**(`cfg`): `CCDIK`

Defined in: [src/components/anim/ik/CCDIK.ts:149](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L149)

#### Parameters

##### cfg

[`CCDIKConfig`](../interfaces/CCDIKConfig.md)

#### Returns

`CCDIK`

## Properties

### name

> **name**: `string`

Defined in: [src/components/anim/ik/CCDIK.ts:111](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L111)

***

### effector

> **effector**: `string`

Defined in: [src/components/anim/ik/CCDIK.ts:112](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L112)

***

### links

> **links**: [`CCDIKLink`](../interfaces/CCDIKLink.md)[]

Defined in: [src/components/anim/ik/CCDIK.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L113)

***

### target

> **target**: [`Object3D`](Object3D.md) \| [`Vector3`](Vector3.md)

Defined in: [src/components/anim/ik/CCDIK.ts:114](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L114)

***

### iterations

> **iterations**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:115](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L115)

***

### damping

> **damping**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:116](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L116)

***

### threshold

> **threshold**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:117](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L117)

***

### weight

> **weight**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:118](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L118)

## Accessors

### chain

#### Get Signature

> **get** **chain**(): `string`[]

Defined in: [src/components/anim/ik/CCDIK.ts:142](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L142)

Convenience accessor — full bone name list root→tip (links reversed + effector last).

##### Returns

`string`[]

## Methods

### solve()

> **solve**(`animator`): `void`

Defined in: [src/components/anim/ik/CCDIK.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L166)

#### Parameters

##### animator

[`AnimatorComponent`](AnimatorComponent.md)

#### Returns

`void`
