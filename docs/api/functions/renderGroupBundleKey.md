[**@orillusion/core**](../README.md)

***

# Function: renderGroupBundleKey()

> **renderGroupBundleKey**(`group`, `passType`, `stateVersion`): `string`

Defined in: [src/gfx/renderJob/collect/RenderGroup.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderGroup.ts#L35)

Build the composite bundle-cache key. Centralized here so the four
 call sites in RendererBase / ShadowMapPassRenderer stay consistent.

## Parameters

### group

`RenderGroup`

### passType

`PassType`

### stateVersion

`number`

## Returns

`string`
