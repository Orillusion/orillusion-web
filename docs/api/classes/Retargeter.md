[**@orillusion/core**](../README.md)

***

# Class: Retargeter

Defined in: [src/components/anim/retarget/Retargeter.ts:130](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L130)

Animation retargeting utility — copies per-bone rotations (and the
hip's translation, optionally) from a source AnimatorComponent to a
target AnimatorComponent each frame.

**Rotation channel — per-bone world offset + Character
pre-alignment.** Per retargeted bone we apply

  target_world[bone] = sourceCurrentWorld[bone] * offset[bone]
  target.localQ      = inv(targetParentCurrentWorld) * target_world

with `offset[bone] = inv(bindWorldS[srcBone]) * bindWorldT[tgtBone]`
cached at `buildMapping` from each rig's bind-pose world rotations
(FK over `bindLocal * Character`).

At TPose this collapses to `target_world == bindWorldT[bone]` —
target's bone sits at its own authored bind world, so the per-bone
skin matrix `target_world * inv(bindWorldT)` is identity, **no mesh
distortion at any joint**. During motion the skin matrix becomes
`sourceCurrentWorld * inv(bindWorldS)` — i.e. source's own
world-space delta from its bind — so target replays source's
anatomical motion regardless of how each rig's bind localQ is
authored.

Naive world copy without offsets (`target_world = sourceCurW`
directly) was tried and produced a ~180° skin-matrix rotation at
the foot joint when source's and target's foot bind worlds differ
by a half-turn (Michelle's foot bind world ≈ 180° around an
out-and-down axis; Soldier's ≈ +90°X) — the soles flipped upward.
The per-bone offset above is the only formula that handles
arbitrary bind orientation differences cleanly.

**Bind-facing pre-alignment (`alignTPoseFacing`, default on).**
Mixamo Michelle's Character holds `rotationX = +90°`, Soldier's
`-90°`, leaving their TPose hip worlds 180°Y apart. At
`buildMapping` we capture `Q_align = bindWorldS_root *
inv(bindWorldT_root)` and pre-multiply it onto target's Character
localQuaternion (in place). This rotates target's whole skeleton
uniformly in world so its bind hip world matches source's, then
the per-bone offsets are computed from the post-rotation
bindWorldT values. Set `alignTPoseFacing: false` for duet scenes
where you want target to face its own authored direction.

**Translation channel — hip position only, with optional height
scaling:

  delta_charLocal_S = sourceHip.localPosition - bindHipLocal_S
  delta_world       = rootRot_S * delta_charLocal_S
  delta_charLocal_T = inv(rootRot_T) * delta_world
  targetHip.localPosition = bindHipLocal_T + delta_charLocal_T * heightScale

Children bones never receive position updates — Mixamo characters
have different bone-segment lengths, and forcing source positions
onto target bones distorts the mesh shape. The hip is the one bone
where translation is meaningful: it carries root motion (jumps,
walks, crouches), and scaling its delta by the rig height ratio
keeps Soldier from "flying" or "sinking" relative to a taller
Michelle.

Bone resolution between the two rigs:
  1. explicit `nameMap` in the config (highest priority)
  2. exact (case-insensitive) name match, with the prefixes listed
     in `bonePrefixes` stripped (default `['mixamorig:', 'Armature|']`
     covers Mixamo + Blender exporters; override per-rig as needed)

## Constructors

### Constructor

> **new Retargeter**(`source`, `target`, `cfg`): `Retargeter`

Defined in: [src/components/anim/retarget/Retargeter.ts:179](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L179)

#### Parameters

##### source

[`AnimatorComponent`](AnimatorComponent.md)

##### target

[`AnimatorComponent`](AnimatorComponent.md)

##### cfg

[`RetargeterConfig`](../interfaces/RetargeterConfig.md)

#### Returns

`Retargeter`

## Accessors

### resolvedMapping

#### Get Signature

> **get** **resolvedMapping**(): readonly \[`string`, `string`\][]

Defined in: [src/components/anim/retarget/Retargeter.ts:343](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L343)

##### Returns

readonly \[`string`, `string`\][]

## Methods

### buildMapping()

> **buildMapping**(): `void`

Defined in: [src/components/anim/retarget/Retargeter.ts:204](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L204)

Build the source→target bone mapping + capture each rig's
Character (root) rotation, target's per-bone bind worldQ, and
the hip-pair bind translations. Called lazily on the first
`apply()`; can be re-called explicitly if either avatar
changes.

#### Returns

`void`

***

### apply()

> **apply**(): `void`

Defined in: [src/components/anim/retarget/Retargeter.ts:352](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L352)

Per-frame retarget. Call from your render loop AFTER the source
Animator's own update has run.

#### Returns

`void`
