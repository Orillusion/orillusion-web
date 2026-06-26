[**@orillusion/core**](../README.md)

***

# Interface: RetargeterConfig

Defined in: [src/components/anim/retarget/Retargeter.ts:6](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L6)

## Properties

### nameMap?

> `optional` **nameMap?**: `Map`\<`string`, `string`\> \| \{\[`src`: `string`\]: `string`; \}

Defined in: [src/components/anim/retarget/Retargeter.ts:8](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L8)

Optional explicit source-bone-name → target-bone-name mapping.

***

### excludeSourceBones?

> `optional` **excludeSourceBones?**: `Set`\<`string`\>

Defined in: [src/components/anim/retarget/Retargeter.ts:10](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L10)

Bone names on the source that should be ignored.

***

### useRestOffset?

> `optional` **useRestOffset?**: `boolean`

Defined in: [src/components/anim/retarget/Retargeter.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L20)

When true (default), run the bind-frame-delta retarget
(`desired = bindWorld_T * inv(bindWorld_S) * currentWorld_S`)
with bind worlds FK'd over each rig's Character + boneData
chain. When false, just copy each source bone's
`localQuaternion` straight onto the target — only correct for
same-rig retargeting where target's bind matches source's
exactly AND no Character-level rotation differences exist.

***

### preserveHipPosition?

> `optional` **preserveHipPosition?**: `boolean`

Defined in: [src/components/anim/retarget/Retargeter.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L27)

If true, the hip (root joint) position is locked to the target's
bind pose — root motion (jumps, walks, crouches) is dropped.
Default false: the source hip's position delta is replayed on
the target, scaled by `heightScale`.

***

### heightScale?

> `optional` **heightScale?**: `number`

Defined in: [src/components/anim/retarget/Retargeter.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L35)

Multiplier applied to the hip translation delta before writing
it onto the target. Use the height ratio (target rig height /
source rig height) when the two rigs are different sizes —
otherwise a 0.5m source jump on a 1.8m rig produces an over- or
under-jump on a 1.6m target. Default 1.0 (no scaling).

***

### alignTPoseFacing?

> `optional` **alignTPoseFacing?**: `boolean`

Defined in: [src/components/anim/retarget/Retargeter.ts:43](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L43)

When true (default), auto-rotate target's Character node at
`buildMapping` so its bind hip world matches source's — target
ends up facing source's world direction in TPose. Set false
for duet scenes where you want target to face its own authored
direction.

***

### bonePrefixes?

> `optional` **bonePrefixes?**: `string`[]

Defined in: [src/components/anim/retarget/Retargeter.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/anim/retarget/Retargeter.ts#L55)

Bone-name prefixes to strip during fuzzy name matching, in
priority order. Defaults to `['mixamorig:', 'Armature|']` which
covers the standard Mixamo and Blender exporter conventions.
Set to `[]` to require exact (case-insensitive) name match —
useful when bones are already canonicalized or when prefix
stripping would create ambiguous matches between rigs that
legitimately share a prefix as part of the name. Comparisons
are case-insensitive and the first matching prefix wins; only
one prefix is removed per bone name.
