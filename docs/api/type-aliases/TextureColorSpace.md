[**@orillusion/core**](../README.md)

***

# Type Alias: TextureColorSpace

> **TextureColorSpace** = `"srgb"` \| `"linear"`

Defined in: [src/textures/BitmapTexture2D.ts:19](https://github.com/orillusion/orillusion/blob/main/src/textures/BitmapTexture2D.ts#L19)

Color-space hint for image-backed textures. `'srgb'` selects the
`rgba8unorm-srgb` GPU format so the sampler hardware-decodes the
stored sRGB-encoded bytes to linear at sample time (the standard
choice for color/albedo maps). `'linear'` keeps the plain
`rgba8unorm` format — appropriate for normal maps, masks,
height/displacement, metallic/roughness packs, and other
non-color data.
