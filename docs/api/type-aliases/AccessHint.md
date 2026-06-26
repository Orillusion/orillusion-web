[**@orillusion/core**](../README.md)

***

# Type Alias: AccessHint

> **AccessHint** = `"sample"` \| `"storage"` \| `"attachment"` \| `"copy"`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L43)

Per-edge access hint attached to a `b.read` / `b.write` /
`b.readWrite` call. The compiler unions these into the resource's
final `GPUTextureUsage` mask when the descriptor's `usage === 'auto'`.

- `'sample'`     → `TEXTURE_BINDING`
- `'storage'`    → `STORAGE_BINDING`
- `'attachment'` → `RENDER_ATTACHMENT`
- `'copy'`       → `COPY_SRC` (on read) or `COPY_DST` (on write)

Every hint additionally contributes `COPY_SRC | COPY_DST` to the
unioned usage, giving dev-time friction-free debug copies without
forcing every pass to remember the bit.
