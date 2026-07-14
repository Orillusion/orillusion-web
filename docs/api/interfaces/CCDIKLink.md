[**@orillusion/core**](../README.md)

***

# Interface: CCDIKLink

Defined in: [src/components/anim/ik/CCDIK.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L46)

One link in an IK chain — bone reference plus optional joint constraints.

The chain is `[root, ..., effector]` (root→tip). The last link is the
end-effector: its constraints are ignored because CCD never rotates the
tip (the tip is dragged by its parent).

Two constraint families, applied in order each iteration after the
bone's localQuat is updated:

  1. **Hinge** (`hingeAxis` + `minAngle`/`maxAngle`)
     Forces the joint to rotate ONLY around `hingeAxis` (in the bone's
     parent-local frame). Removes the swing component, keeps only twist
     around the axis, and clamps the twist angle to [minAngle, maxAngle].
     Use this for the elbow / knee — anatomically a 1-DOF hinge that
     bends in one direction. Without it, CCD will solve "reverse-bent
     elbow" or "self-rotating forearm" poses that violate human anatomy.

  2. **Per-axis Euler limit** (`rotationMin` / `rotationMax`)
     Clamps each Euler component of the bone's local rotation to a box.
     Use this for shoulders / hips — ball joints that have *some*
     freedom but can't bend backwards arbitrarily.

     Compatibility knobs:
       - `eulerOrder` (default `'XYZ'`, the common IK-rig convention) —
         picks which Euler decomposition is used. Different orders give
         different "valid" boxes for the same quaternion.
       - `radians` (default `false`) — values are degrees by default
         (Orillusion convention); set `true` to interpret as radians
         (the common IK-rig convention, so external IK configs can be
         pasted in unchanged).

Hinge takes precedence: when `hingeAxis` is set, the Euler box is
ignored (a 1-DOF hinge is already strictly less free than any 3-axis
box).

## Properties

### boneName

> **boneName**: `string`

Defined in: [src/components/anim/ik/CCDIK.ts:48](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L48)

Bone name (must match a joint in the AnimatorComponent's avatar).

***

### hingeAxis?

> `optional` **hingeAxis?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/CCDIK.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L50)

Bone-local hinge axis (unit vector) — forces 1-DOF rotation around this axis.

***

### minAngle?

> `optional` **minAngle?**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:52](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L52)

Min twist angle around `hingeAxis` (radians). Required if `hingeAxis` is set.

***

### maxAngle?

> `optional` **maxAngle?**: `number`

Defined in: [src/components/anim/ik/CCDIK.ts:54](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L54)

Max twist angle around `hingeAxis` (radians). Required if `hingeAxis` is set.

***

### rotationMin?

> `optional` **rotationMin?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/CCDIK.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L56)

Per-axis Euler lower bound applied to the bone's local rotation.

***

### rotationMax?

> `optional` **rotationMax?**: [`Vector3`](../classes/Vector3.md)

Defined in: [src/components/anim/ik/CCDIK.ts:58](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L58)

Per-axis Euler upper bound applied to the bone's local rotation.

***

### eulerOrder?

> `optional` **eulerOrder?**: [`CCDIKEulerOrder`](../type-aliases/CCDIKEulerOrder.md)

Defined in: [src/components/anim/ik/CCDIK.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L60)

Euler order for `rotationMin`/`rotationMax`. Default `'XYZ'` (common IK-rig convention).

***

### radians?

> `optional` **radians?**: `boolean`

Defined in: [src/components/anim/ik/CCDIK.ts:62](https://github.com/orillusion/orillusion/blob/main/src/components/anim/ik/CCDIK.ts#L62)

If true, `rotationMin`/`rotationMax` are radians (common IK-rig convention). Default false (degrees).
