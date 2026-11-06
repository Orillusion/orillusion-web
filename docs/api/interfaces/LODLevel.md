[**@orillusion/core**](../README.md)

***

# Interface: LODLevel

Defined in: [src/components/renderer/LODGroup.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L34)

One level of detail: the objects to show and the threshold at which it
stops being used.

## Properties

### objects

> **objects**: [`Object3D`](../classes/Object3D.md)[]

Defined in: [src/components/renderer/LODGroup.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L40)

Objects that make up this level. They are toggled via `transform.enable`
(which also covers their children), so a level can be a whole glTF
sub-tree, not just a single MeshRenderer.

***

### threshold

> **threshold**: `number`

Defined in: [src/components/renderer/LODGroup.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L45)

`LODMode.ScreenSize`: the *minimum* screen-relative height this level
stays visible for. `LODMode.Distance`: the *maximum* distance.
