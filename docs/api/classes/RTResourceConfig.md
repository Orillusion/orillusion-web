[**@orillusion/core**](../README.md)

***

# Class: RTResourceConfig

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L9)

Canonical string keys for the engine's well-known render-target
textures (G-buffer attachments, z-buffers, the post output target).
Used as lookup names in RTResourceMap so passes and materials
refer to the same RT by a stable identifier.

## Constructors

### Constructor

> **new RTResourceConfig**(): `RTResourceConfig`

#### Returns

`RTResourceConfig`

## Properties

### compressGBufferTex\_NAME

> `static` **compressGBufferTex\_NAME**: `string` = `'compressGBufferTex_NAME'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L11)

Key for the packed/compressed G-buffer texture.

***

### colorBufferTex\_NAME

> `static` **colorBufferTex\_NAME**: `string` = `'colorBufferTex'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L13)

Key for the scene color attachment.

***

### positionBufferTex\_NAME

> `static` **positionBufferTex\_NAME**: `string` = `'positionBufferTex'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L15)

Key for the world-position G-buffer attachment.

***

### normalBufferTex\_NAME

> `static` **normalBufferTex\_NAME**: `string` = `'normalBufferTex'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L17)

Key for the world-normal G-buffer attachment.

***

### materialBufferTex\_NAME

> `static` **materialBufferTex\_NAME**: `string` = `'materialBufferTex'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L19)

Key for the material-parameter G-buffer attachment.

***

### zBufferTexture\_NAME

> `static` **zBufferTexture\_NAME**: `string` = `'zBufferTexture'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L21)

Key for the main depth (z) buffer texture.

***

### zPreDepthTexture\_NAME

> `static` **zPreDepthTexture\_NAME**: `string` = `'zPreDepthTexture'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L23)

Key for the z-prepass depth texture.

***

### outTex\_NAME

> `static` **outTex\_NAME**: `string` = `'outTex'`

Defined in: [src/gfx/renderJob/config/RTResourceConfig.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/RTResourceConfig.ts#L25)

Key for the post-processing output texture.
