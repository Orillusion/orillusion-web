[**@orillusion/core**](../README.md)

***

# Class: TextureIdentityWatcher

Defined in: [src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts#L51)

Detects when a RenderTexture the caller depends on has been
replaced under their feet — typically because the transient pool
re-aliased the same logical name onto a different physical slot
across two compiles, or because the canvas resized and the wrapper
delay-destroyed + recreated its `GPUTexture`.

Pass authors that cache `GPUBindGroup`s built from pool-resolved
textures must rebuild those bind groups when the underlying
`GPUTexture` identity changes, otherwise WebGPU will submit views
of a destroyed texture and the validation layer reports
"Destroyed texture used in submit".

Usage pattern:

    class MyPass extends RenderGraphPass {
      private _watcher = new TextureIdentityWatcher();
      private _bindGroup: GPUBindGroup | null = null;

      execute(ctx) {
        const src = ctx.getTexture('Input');
        const dst = ctx.getTexture('Output');
        const dirty = this._watcher.update([
          { key: 'src', tex: src },
          { key: 'dst', tex: dst },
        ]);
        if (dirty || !this._bindGroup) {
          this._bindGroup = device.createBindGroup({ ... });
        }
        ...
      }
    }

The watcher is per-pass; reuse across passes loses meaning because
every pass has its own bind groups to invalidate.

## Constructors

### Constructor

> **new TextureIdentityWatcher**(): `TextureIdentityWatcher`

#### Returns

`TextureIdentityWatcher`

## Methods

### update()

> **update**(`entries`): `boolean`

Defined in: [src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts#L65)

Inspect the current `GPUTexture` identity of every entry and
report whether any changed since the last call. Always updates
the recorded identities to the current values so the next
`update()` compares against the new baseline.

Returns `true` on the very first call (every key transitions
from "never seen" to a concrete identity), so callers that
combine this with `!this._bindGroup` get the right "build on
first execute" behavior without extra plumbing.

#### Parameters

##### entries

readonly [`WatchedTexture`](../interfaces/WatchedTexture.md)[]

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

Defined in: [src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts:81](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TextureIdentityWatcher.ts#L81)

Forget every recorded identity. After this the next `update`
 call reports `true` for every entry, forcing a rebuild — useful
 on device-lost or graph rewire.

#### Returns

`void`
