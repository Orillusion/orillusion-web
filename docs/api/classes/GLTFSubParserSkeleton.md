[**@orillusion/core**](../README.md)

***

# Class: GLTFSubParserSkeleton

Defined in: [src/loader/parser/gltf/GLTFSubParserSkeleton.ts:8](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L8)

## Constructors

### Constructor

> **new GLTFSubParserSkeleton**(`subParser`): `GLTFSubParserSkeleton`

Defined in: [src/loader/parser/gltf/GLTFSubParserSkeleton.ts:12](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L12)

#### Parameters

##### subParser

`GLTFSubParser`

#### Returns

`GLTFSubParserSkeleton`

## Methods

### parse()

> **parse**(`skeletonID`): [`PrefabAvatarData`](PrefabAvatarData.md)

Defined in: [src/loader/parser/gltf/GLTFSubParserSkeleton.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L17)

#### Parameters

##### skeletonID

`number`

#### Returns

[`PrefabAvatarData`](PrefabAvatarData.md)

***

### parseSkeletonAnimation()

> **parseSkeletonAnimation**(`avatarData`, `animation`): [`PropertyAnimationClip`](PropertyAnimationClip.md)

Defined in: [src/loader/parser/gltf/GLTFSubParserSkeleton.ts:27](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L27)

#### Parameters

##### avatarData

[`PrefabAvatarData`](PrefabAvatarData.md)

##### animation

`any`

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)

***

### parseSkeletonAnimationOld()

> **parseSkeletonAnimationOld**(`skeleton`, `animation`): `SkeletonAnimationClip`

Defined in: [src/loader/parser/gltf/GLTFSubParserSkeleton.ts:168](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserSkeleton.ts#L168)

#### Parameters

##### skeleton

`Skeleton`

##### animation

`any`

#### Returns

`SkeletonAnimationClip`
