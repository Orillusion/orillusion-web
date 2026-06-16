# Joints

A joint is used to constrain the relative motion between two rigidbodies, and can be used for doors, pistons, chains, ragdolls, and other mechanical structures. Each joint is a component, added to the `Object3D` of one of the rigidbodies, with `connectedBody` pointing to the other rigidbody.

## Joint Types

| Joint | Degrees of freedom | Description |
| --- | --- | --- |
| `HingeJoint` | 1 rotation | Hinge / pivot (doors, wheels) |
| `SliderJoint` | 1 translation | Slide rail / piston |
| `FixedJoint` | 0 (fully locked) | Welds two rigidbodies together |
| `SphericalJoint` | 3 rotations | Ball-and-socket joint (replaces the old P2P + ConeTwist) |
| `GenericJoint` | 6 configurable DOF | Generic joint, customized via an axis mask, with a built-in spring |
| `RopeJoint` | Maximum distance constraint | Rope / chain |
| `SpringJoint` | Spring | Hooke's law spring |

## Common Usage

```ts
import { HingeJoint, SliderJoint, FixedJoint, SphericalJoint, RopeJoint, SpringJoint } from '@orillusion/physics-rapier';
import { Vector3 } from '@orillusion/core';
```

The joint component is added to the "self" rigidbody, with `connectedBody` pointing to the other connected rigidbody; `anchorSelf` / `anchorTarget` are the anchor points at each end in their respective local coordinates.

### Hinge (HingeJoint)
```ts
const hj = door.addComponent(HingeJoint);
hj.connectedBody = hingeAnchor.rb;        // The other rigidbody (Rigidbody)
hj.anchorSelf = new Vector3(0, 1.5, 0);   // Anchor point on self
hj.anchorTarget = new Vector3(0, 0, 0);   // Anchor point on target
hj.axis = new Vector3(0, 0, 1);           // Rotation axis
```

### Slider (SliderJoint)
```ts
const sj = piston.addComponent(SliderJoint);
sj.connectedBody = slideAnchor.rb;
sj.axis = new Vector3(1, 0, 0);           // Slide direction
```

### Fixed (FixedJoint)
```ts
const fj = boxA.addComponent(FixedJoint);
fj.connectedBody = boxB.rb;
fj.anchorSelf = new Vector3(0, 0.5, 0);
fj.anchorTarget = new Vector3(0, -0.5, 0);
```

### Spherical (SphericalJoint)
```ts
const sp = ball.addComponent(SphericalJoint);
sp.connectedBody = anchor.rb;
sp.anchorSelf = new Vector3(0, 0, 0);
sp.anchorTarget = new Vector3(0, -1, 0);
```

> `GenericJoint`, `RopeJoint`, and `SpringJoint` are used similarly: add the component, set `connectedBody` and the anchors, then configure according to their respective characteristics (such as the maximum distance for `RopeJoint`, or the stiffness/damping for `SpringJoint`). For a complete example, see `samples/physics-rapier/Sample_RapierJoints.ts` in the engine repository.
