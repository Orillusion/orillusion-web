[**@orillusion/core**](../README.md)

***

# Interface: CCDIKConfig

Defined in: [src/components/anim/ik/CCDIK.ts:65](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L65)

## Properties

### name

> **name**: `string`

Defined in: [src/components/anim/ik/CCDIK.ts:66](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L66)

***

### effector

> **effector**: `string`

Defined in: [src/components/anim/ik/CCDIK.ts:73](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L73)

End-effector bone name. CCD measures distance from THIS bone's
worldPosition to `target`, and never rotates this bone (its
position is dragged by its parent in the chain). Matches the
standard CCD solver `effector` field for config compatibility.

***

### links

> **links**: [`CCDIKLink`](CCDIKLink.md)[]

Defined in: [src/components/anim/ik/CCDIK.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L79)

Joints to rotate, in **tip→root** order (closest to effector first),
matching the standard CCD solver `links` ordering. Each link carries
its own `boneName` and per-bone constraints.

***

### target

> **target**: [`Object3D`](../classes/Object3D.md) \| [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/CCDIK.ts:85](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L85)

Target position. Typically an Object3D — the bone (or dummy bone
like `target_hand_l`) whose worldPosition the effector should
reach. Read every frame, so animating the target works naturally.

***

### iterations?

> `optional` **iterations?**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:87](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L87)

Number of CCD iterations per frame. Default 6.

***

### damping?

> `optional` **damping?**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L89)

Per-iteration step damping in [0,1]. Default 1.0 (no damping).

***

### threshold?

> `optional` **threshold?**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L91)

Stop early if the tip is within this world-space distance.

***

### weight

> **weight**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:93](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L93)

[0,1] blend between original pose and IK-solved pose.
