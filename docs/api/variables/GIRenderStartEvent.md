[**@orillusion/core**](../README.md)

***

# Variable: GIRenderStartEvent

> `const` **GIRenderStartEvent**: [`CEvent`](../classes/CEvent.md)

Defined in: [src/gfx/renderJob/graph/passes/GIPass.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/GIPass.ts#L47)

Event fired (on the GIPass instance, via CEventDispatcher) when the
full probe array has finished rendering. Consumed by the optional
GPU buffer reader for cloud-GI pipelines.
