# Class: GLTFSubParserSkeleton

### Constructors

- [constructor](GLTFSubParserSkeleton.md#constructor)

### Methods

- [parse](GLTFSubParserSkeleton.md#parse)
- [parseSkeletonAnimation](GLTFSubParserSkeleton.md#parseskeletonanimation)
- [parseSkeletonAnimationOld](GLTFSubParserSkeleton.md#parseskeletonanimationold)

## Constructors

### constructor

• **new GLTFSubParserSkeleton**(`subParser`): [`GLTFSubParserSkeleton`](GLTFSubParserSkeleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | `GLTFSubParser` |

#### Returns

[`GLTFSubParserSkeleton`](GLTFSubParserSkeleton.md)

#### Defined in

[src/loader/parser/gltf/GLTFSubParserSkeleton.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L12)

## Methods

### parse

▸ **parse**(`skeletonID`): [`PrefabAvatarData`](PrefabAvatarData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skeletonID` | `number` |

#### Returns

[`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

[src/loader/parser/gltf/GLTFSubParserSkeleton.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L17)

___

### parseSkeletonAnimation

▸ **parseSkeletonAnimation**(`avatarData`, `animation`): [`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatarData` | [`PrefabAvatarData`](PrefabAvatarData.md) |
| `animation` | `any` |

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Defined in

[src/loader/parser/gltf/GLTFSubParserSkeleton.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L27)

___

### parseSkeletonAnimationOld

▸ **parseSkeletonAnimationOld**(`skeleton`, `animation`): `SkeletonAnimationClip`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skeleton` | `Skeleton` |
| `animation` | `any` |

#### Returns

`SkeletonAnimationClip`

#### Defined in

[src/loader/parser/gltf/GLTFSubParserSkeleton.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L168)
