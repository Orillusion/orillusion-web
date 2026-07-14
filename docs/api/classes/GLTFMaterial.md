[**@orillusion/core**](../README.md)

***

# Class: GLTFMaterial

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L11)

Intermediate material description produced while parsing a glTF asset.
It holds the metallic-roughness PBR factors, the resolved texture
references and the per-channel UV offset/size transforms read from a
glTF material, before they are converted into an engine `LitMaterial`.

## Constructors

### Constructor

> **new GLTFMaterial**(): `GLTFMaterial`

#### Returns

`GLTFMaterial`

## Properties

### name

> **name**: `string`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:13](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L13)

Material name as declared in the glTF file.

***

### defines

> **defines**: `string`[]

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L15)

Shader define flags collected for this material (e.g. blend mode hints).

***

### doubleSided

> **doubleSided**: `boolean`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L17)

Whether the material is rendered double-sided.

***

### baseColorFactor

> **baseColorFactor**: \[`1`, `1`, `1`, `1`\]

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:19](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L19)

Base color (albedo) factor as an RGBA tuple.

***

### emissiveFactor

> **emissiveFactor**: `number`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:21](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L21)

Emissive color factor.

***

### metallicFactor

> **metallicFactor**: `number`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:23](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L23)

Metallic scalar factor in the [0, 1] range.

***

### roughnessFactor

> **roughnessFactor**: `number`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:25](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L25)

Roughness scalar factor in the [0, 1] range.

***

### alphaCutoff

> **alphaCutoff**: `number`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:27](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L27)

Alpha cutoff threshold used in alpha-mask mode.

***

### enableBlend

> **enableBlend**: `boolean`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:29](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L29)

Whether alpha blending is enabled for this material.

***

### baseColorTexture

> **baseColorTexture**: [`Texture`](Texture.md)

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:31](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L31)

Base color (albedo) texture.

***

### metallicRoughnessTexture

> **metallicRoughnessTexture**: [`Texture`](Texture.md)

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:33](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L33)

Combined metallic-roughness texture.

***

### normalTexture

> **normalTexture**: [`Texture`](Texture.md)

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:35](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L35)

Tangent-space normal map.

***

### occlusionTexture

> **occlusionTexture**: [`Texture`](Texture.md)

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:37](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L37)

Ambient occlusion texture.

***

### emissiveTexture

> **emissiveTexture**: [`Texture`](Texture.md)

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:39](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L39)

Emissive texture.

***

### extensions

> **extensions**: `any`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:41](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L41)

Raw glTF material extensions dictionary.

***

### baseMapOffsetSize

> **baseMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:43](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L43)

UV offset/size transform for the base color texture.

***

### normalMapOffsetSize

> **normalMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:45](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L45)

UV offset/size transform for the normal texture.

***

### emissiveMapOffsetSize

> **emissiveMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:47](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L47)

UV offset/size transform for the emissive texture.

***

### roughnessMapOffsetSize

> **roughnessMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:49](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L49)

UV offset/size transform for the roughness texture.

***

### metallicMapOffsetSize

> **metallicMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:51](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L51)

UV offset/size transform for the metallic texture.

***

### aoMapOffsetSize

> **aoMapOffsetSize**: `Vector4`

Defined in: [src/loader/parser/gltf/GLTFMaterial.ts:53](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFMaterial.ts#L53)

UV offset/size transform for the ambient occlusion texture.
