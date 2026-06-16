# RenderGraph

`RenderGraph` is a brand-new rendering scheduling framework introduced by `Orillusion` in `0.9.0`. It breaks the entire rendering pipeline down into individual **Passes (render nodes)**. Each Pass only declares which resources it **reads** and **writes**, and RenderGraph **automatically derives the execution order** at compile time, **automatically manages temporary GPU resources**, and supports **dynamically adding, removing, replacing, enabling, and disabling** Passes at **runtime**.

Compared with hard-coding the rendering steps into a fixed pipeline as in the past, RenderGraph makes the rendering pipeline **composable, extensible, and debuggable**: you can insert a custom Pass into the default pipeline, carve out a minimal pipeline, or hot-swap a rendering step without restarting the engine.

::: tip Version Note
RenderGraph requires `@orillusion/core` **0.9.0 or above**. It is the default and only rendering pipeline in that version, and can be used without any toggle. The examples in this article are all adapted from the engine's official samples `Sample_CustomRendererJob` and `Sample_PassOrderControl`.
:::

## What is RenderGraph

RenderGraph is composed of several core roles. Understanding their responsibilities is the key to mastering RenderGraph:

| Concept | Description |
| --- | --- |
| `RenderGraph` | The RenderGraph body, which holds all Passes and the resource pool, and is responsible for compilation (topological sorting) and per-frame execution |
| `RenderGraphPass` | A single render node (abstract base class). Declare dependencies in `setup()` and submit GPU work in `execute()` |
| `RenderGraphBuilder` | The builder used during the `setup()` phase to declare resource reads/writes, dependencies, transient resources, render targets, etc. |
| `RenderGraphPassContext` | The runtime context during the `execute()` phase, used to resolve resources by name and open encoders |
| Resource pool (pool) | The registry of named resources (string name → resource). Passes publish and obtain resources by name |
| Transient resources (transient) | Temporary GPU textures/buffers that RenderGraph allocates on demand and automatically reuses (aliases), recycled once they are no longer needed |
| Topological sort (topo sort) | At compile time, the Pass execution order is automatically derived based on resource read/write relationships and explicit dependencies |

The RenderGraph workflow is: **declare → compile → execute**.
- **Declare**: each Pass declares the resources it consumes and produces in `setup()` via `b.read(...)` / `b.write(...)`;
- **Compile**: `compile()` collects all declarations, validates them (single creator, no cyclic dependencies, resolvable resources), and topologically sorts them to obtain the execution order;
- **Execute**: per frame, calls `execute()` of each enabled Pass in the compiled order.

## Obtaining the RenderGraph

After `engine.startRenderView(view)`, every `View3D` has a RenderGraph bound to it, accessed via `view.renderGraph`:

```ts
import { Engine3D, Scene3D, View3D, CameraUtil } from '@orillusion/core';

const engine = await Engine3D.init();
const scene = new Scene3D();
const camera = CameraUtil.createCamera3DObject(scene);
camera.perspective(60, engine.aspect, 0.1, 5000);

const view = new View3D();
view.scene = scene;
view.camera = camera;
engine.startRenderView(view);

// The RenderGraph only exists after rendering has started; it is null before then
const graph = view.renderGraph!;

// Inspect the current compiled Pass execution order
console.log(graph.passes.map(p => p.name).join(' → '));
// e.g.: ClusterLightingPass → ShadowPass → ... → ColorPass → PostPass → GUIPass

// Find a built-in Pass by name
const colorPass = graph.getPass('ColorPass');
```

| Member | Description |
| --- | --- |
| `view.renderGraph` | Returns the `RenderGraph` bound to the view; `null` when rendering has not started |
| `graph.passes` | A read-only array listing all Passes in the compiled execution order |
| `graph.getPass<T>(name)` | Finds a Pass by `name`; returns `null` if not found |
| `graph.pool` | The resource pool; query resources with `pool.has(name)` / `pool.get(name)` |

## Pass Lifecycle

The core of custom rendering logic is to extend `RenderGraphPass`. Each Pass has two key methods:

- **`setup(builder)`**: called at compile time (on every `compile()`), used to declare dependencies, allocate resources, and create render/compute pipelines. **Declare only, do not draw**.
- **`execute(ctx)`**: called once per frame, submits the actual GPU commands. **Draw only, do not declare**.

```ts
import { RenderGraphPass, RenderGraphBuilder, RenderGraphPassContext } from '@orillusion/core';

class MyPass extends RenderGraphPass {
    // Unique identifier, preferably PascalCase ending with Pass
    public readonly name = 'MyPass';

    public setup(b: RenderGraphBuilder): void {
        // Declare dependencies (compile time)
    }

    public execute(ctx: RenderGraphPassContext): void {
        // Submit GPU work (every frame)
    }
}
```

Common fields on `RenderGraphPass`:

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The Pass's unique identifier, used as the key of the graph node and also appearing in error messages |
| `enabled` | `boolean` | A runtime toggle. `graph.disablePass(name)` flips it; a disabled Pass is skipped |
| `layerMask` | `number` | Which scene layers (as a bitmask) this Pass consumes, defaults to `VisibleLayer.All`; see [Controlling Execution Order](#controlling-pass-execution-order) |
| `reads` | `readonly string[]` | Populated after compilation, the resource names this Pass declared it reads (empty array before compilation) |
| `writes` | `readonly string[]` | Populated after compilation, the resource names this Pass declared it writes |
| `dependencies` | `ReadonlySet<string>` | The set of Pass names for explicit ordering dependencies; can be assigned directly in `setup` or before compilation |

## RenderGraphBuilder API

In `setup(b)`, dependencies are declared via `RenderGraphBuilder`. The most commonly used are `read` / `write`:

```ts
public setup(b: RenderGraphBuilder): void {
    // Read a resource produced by another Pass
    b.read(COLOR_BUFFER);

    // Write resource — two semantics:
    // 1) Creator: pass a factory function; this Pass is responsible for creating and publishing the resource (only one creator per name)
    b.write('_MyResource', () => myTexture);
    // 2) Mutator: no factory; declares that this Pass modifies an already existing resource (multiple mutators allowed, in insertion order)
    b.write(COLOR_BUFFER);
}
```

| Method | Description |
| --- | --- |
| `read(name, access?)` | Declares reading a named resource; the resource must have a creator, otherwise compilation fails |
| `write(name, getter)` | **Creator**: creates the resource with a factory function and registers it in the resource pool; only one creator is allowed per name |
| `write(name, access?)` | **Mutator**: declares that this Pass modifies an existing resource; multiple mutators are ordered by insertion order |
| `readWrite(handle, access?)` | Reads and writes the same resource in place (equivalent to `read` + `write`), commonly used in compute Passes |
| `dependsOn(name)` | Declares an **explicit ordering dependency** on another Pass (not via a resource); the target Pass must already be registered |
| `dependsOnIfPresent(name)` | Same as above, but silently skips if the target Pass does not exist |
| `declareTexture(name, desc)` | Declares a [transient texture](#transient-resources) managed by RenderGraph, returning a `TextureHandle` |
| `declareBuffer(name, desc)` | Declares a transient buffer managed by RenderGraph, returning a `BufferHandle` |
| `importExternalTexture(name, tex)` | Publishes an externally managed `RenderTexture` to RenderGraph as a persistent resource |
| `createRenderTarget(name, desc)` | Allocates a new `RenderGraphRenderTarget` (color + optional depth) |
| `useRenderTarget(name)` / `borrowRenderTarget(name)` | Uses/borrows an existing render target |
| `createRenderPass(name, target, desc)` | Creates a private render Pass handle around a single render pipeline |
| `createComputePass(name, desc)` | Creates a private compute Pass handle |

> The `access` hint takes the values `'sample' | 'storage' | 'attachment' | 'copy'`. When a transient resource's `usage` is set to `'auto'`, RenderGraph derives the final `GPUTextureUsage` / `GPUBufferUsage` accordingly.

## RenderGraphPassContext API

In `execute(ctx)`, resources are resolved and the view is accessed via `RenderGraphPassContext`:

| Member | Description |
| --- | --- |
| `ctx.view` | The current `View3D`, providing access to `scene`, `camera`, `engine3D`, etc. |
| `ctx.frameIndex` | The current frame number, often used for throttling (execute once every N frames) |
| `ctx.get<T>(name)` | Resolves a resource from the resource pool by name (invokes the factory registered by the creator) |
| `ctx.getTexture(name)` | Resolves to a `RenderTexture` (with type checking) |
| `ctx.getBuffer(name)` | Resolves to a `GPUBufferBase` |
| `ctx.getRenderTarget(name)` | Resolves to a `RenderGraphRenderTarget` |

## Writing a Custom Pass

Below is a minimal working custom Pass: it declares in `setup` that it reads the main color buffer `_ColorBuffer` (the constant `COLOR_BUFFER`), and in `execute` it prints once every 60 frames whether that resource is ready.

```ts
import {
    COLOR_BUFFER, RenderGraphBuilder, RenderGraphPass, RenderGraphPassContext,
} from '@orillusion/core';

class FrameLogPass extends RenderGraphPass {
    public readonly name = 'FrameLogPass';
    private _lastLogged = -Infinity;

    public setup(b: RenderGraphBuilder): void {
        // Declare reading the main color buffer: the validator ensures it has a creator,
        // and topological sorting places this Pass after the latest writer of _ColorBuffer
        b.read(COLOR_BUFFER);
    }

    public execute(ctx: RenderGraphPassContext): void {
        if (ctx.frameIndex - this._lastLogged < 60) return;
        // Resolve the declared input by name
        const color = ctx.get<unknown>(COLOR_BUFFER);
        console.log(`[FrameLogPass] frame ${ctx.frameIndex} color=${color ? 'ok' : 'missing'}`);
        this._lastLogged = ctx.frameIndex;
    }
}
```

To attach it to the default pipeline, just call `graph.add(...)` after rendering has started:

```ts
engine.startRenderView(view);

const graph = view.renderGraph!;
graph.add(FrameLogPass);
// add() marks the graph as "dirty", and it automatically re-compiles() on the next frame
```

::: tip
`graph.add(Ctor, ...args)` forwards the constructor arguments as-is to the Pass's constructor, so you can design a custom Pass with a parameterized constructor (e.g., config items such as toggles, intensities, etc.).
:::

## Controlling Pass Execution Order

The RenderGraph execution order is automatically derived by `compile()`, but the application layer often needs to insert a custom Pass precisely at a certain position in the default pipeline. `Orillusion` provides four complementary mechanisms:

### 1. `layerMask` — routing by render layer

Every Pass has a `layerMask`, which is bitwise-ANDed with the camera's `cullingMask` and the node's `visibleLayer` to determine which objects this Pass draws:

```ts
(node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0
```

For example, to exclude a custom layer from the built-in `ColorPass` and `PreDepthPass` and have your own Pass draw it separately:

```ts
import { VisibleLayer, ColorPass, PreDepthPass } from '@orillusion/core';

const MY_LAYER = 1 << 1; // Bit 0 is occupied by the engine's VisibleLayer.Default; applications should start from bit 1

const graph = view.renderGraph!;
const excludeMine = VisibleLayer.remove(VisibleLayer.All, MY_LAYER);
graph.getPass<ColorPass>('ColorPass')!.layerMask = excludeMine;

const preDepthPass = graph.getPass<PreDepthPass>('PreDepthPass');
if (preDepthPass) preDepthPass.layerMask = excludeMine;

// Then set visibleLayer on the nodes marked as MY_LAYER
// meshRenderer.visibleLayer = MY_LAYER;
```

### 2. Automatic ordering by resource flow

As long as you declare `b.read(X)` / `b.write(X)` in `setup`, RenderGraph derives the ordering accordingly: **writers always come before readers**. The `FrameLogPass` in the previous section, because of `b.read(COLOR_BUFFER)`, is automatically placed after `ColorPass` which writes `_ColorBuffer`, with no manual specification needed.

### 3. `dependsOn` — explicit ordering edge

When the dependency does not go through a resource visible to RenderGraph (e.g., an indirect buffer passed via a global bind group), use `b.dependsOn(name)` in `setup` to declare the explicit order:

```ts
public setup(b: RenderGraphBuilder): void {
    b.read(COLOR_BUFFER);
    // Anchor to execute after a built-in Pass
    b.dependsOn('DecalShadowVolumePass');
}
```

### 4. Modifying the `dependencies` of an existing Pass — inserting an edge in reverse

If your custom Pass is added **after** `startRenderView`, its insertion order is higher than the built-in Passes. In this case, if you want a built-in Pass (such as `PostPass`) to come **after** your Pass, you can directly append your Pass name to its `dependencies` set, then manually `compile()`:

```ts
const graph = view.renderGraph!;
graph.add(MyOverlayPass);

const postPass = graph.getPass('PostPass')!;
postPass.dependencies = new Set([
    ...(postPass.dependencies ?? []),
    'MyOverlayPass',
]);

// Trigger a recompile; the new order takes effect immediately
graph.compile();
// The console will print: [RenderGraph] compiled pass order: …
```

## Transient Resources

Many Passes need temporary intermediate textures/buffers (such as a downsample pyramid or a blur intermediate). Instead of `new RenderTexture` yourself and managing the lifecycle, hand it over to RenderGraph by declaring **transient resources** — RenderGraph automatically allocates the physical resources, **reuses (aliases)** the same VRAM block when lifetimes do not overlap, and recycles it once done, thereby significantly reducing VRAM usage.

```ts
import { GPUTextureFormat, GPUTextureUsage } from '@orillusion/core';

public setup(b: RenderGraphBuilder): void {
    b.read(COLOR_BUFFER);

    // Declare a half-resolution temporary texture
    const handle = b.declareTexture('_MyBlurTex', {
        format: GPUTextureFormat.rgba16float,
        width: 'screen/2',   // SizeSpec: resolved at compile time to half the canvas size
        height: 'screen/2',
        usage: 'auto',        // derived from the access hint below
        aliasable: true,      // allow aliasing VRAM with other resources
    });

    // Declare the access mode (required, otherwise it is treated as an orphan declaration and skipped)
    b.write(handle, 'attachment');
}

public execute(ctx: RenderGraphPassContext): void {
    // Get the physical texture allocated by RenderGraph
    const tex = ctx.getTexture('_MyBlurTex');
    // tex.width === canvas width / 2
}
```

| Descriptor field | Description |
| --- | --- |
| `format` | `GPUTextureFormat`, the texture format |
| `width` / `height` | `SizeSpec`: can be a specific pixel count, or `'screen'`, `'screen/2'`, `'screen/4'`, `'screen/8'` |
| `usage` | `GPUTextureUsageFlags` or `'auto'` (derived from the access hint) |
| `aliasable` | Whether aliasing VRAM with other transient resources is allowed (default `true`) |
| `mipLevelCount` / `sampleCount` | Number of mip levels / MSAA sample count (optional) |

> Buffers are declared with `b.declareBuffer(name, { size, usage })`, with symmetric semantics; RenderGraph reuses buffers in power-of-two size buckets.

## Runtime Dynamic Management

RenderGraph supports hot-modifying the pipeline at runtime without restarting the engine. After modification, it automatically recompiles on the next frame.

```ts
const graph = view.renderGraph!;

// Add
const pass = graph.add(MyPass);

// Replace (keeping the original insertion position)
graph.replace('ShadowPass', MyShadowPass);

// Remove
graph.remove('FrameLogPass');

// Enable/disable (keeps the resources, just skips execution)
graph.disablePass('PostPass');
graph.enablePass('PostPass');
```

When you need to make multiple changes at once, wrap them with `beginUpdate()` / `endUpdate()` to avoid repeated compilations:

```ts
graph.beginUpdate();
graph.add(PassA);
graph.add(PassB);
graph.disablePass('PassC');
graph.endUpdate();   // the whole batch of changes compiles only once
```

| Method | Description |
| --- | --- |
| `add(Ctor, ...args)` | Adds a Pass, returns the instance |
| `replace(name, Ctor, ...args)` | Replaces a Pass with the same name with a new Pass, keeping the insertion position |
| `remove(name)` | Removes a Pass, returns whether it succeeded |
| `disablePass(name)` / `enablePass(name)` | Disables / enables a Pass (returns `this` for chaining) |
| `beginUpdate()` / `endUpdate()` | Batches modifications, deferring compilation until `endUpdate` to compile only once |
| `compile()` | Manually triggers compilation (usually triggered automatically by the modifications above) |

## Custom Rendering Pipeline (RendererJob)

The default pipeline is assembled by the built-in `ForwardRendererJob`. If you want to build a **streamlined pipeline** from scratch (for example, only lighting + shadows, removing transparency/GI/post-processing pyramids, etc.), you can extend `RendererJob`, call `this.graph.add(...)` as needed in the constructor, and pass this class to `startRenderView`:

```ts
import {
    RendererJob, View3D,
    ClusterLightingPass, ShadowPass, PointShadowPass, ReflectionPass,
    GBufferResourcePass, ColorPass, SkyPass, PostPass, GUIPass,
} from '@orillusion/core';

class MinimalRendererJob extends RendererJob {
    constructor(view: View3D) {
        super(view);

        this.graph.add(ClusterLightingPass);
        this.graph.add(ShadowPass);
        this.graph.add(PointShadowPass);
        this.graph.add(ReflectionPass);
        // GBufferResourcePass provides the shared g-buffer / render context consumed by ColorPass,
        // and must be added before ColorPass
        this.graph.add(GBufferResourcePass);
        this.graph.add(ColorPass, { giEnabled: false });
        this.graph.add(SkyPass);
        this.graph.add(PostPass);
        this.graph.add(GUIPass);

        // The order of add() is only the "registration order"; the actual execution order is derived by compile() based on dependencies
        console.log('passes:', this.graph.passes.map(p => p.name).join(' → '));
    }
}
```

When using it, pass the class as the second argument to `startRenderView`, and the engine will use it in place of the default `ForwardRendererJob`:

```ts
const engine = await Engine3D.init({
    setting: {
        shadow: { autoUpdate: true, updateFrameRate: 1 },
        // Important: the settings must stay consistent with the Pass set.
        // The default zPrePass=true makes ColorPass fetch _MainDepthTexture,
        // but this streamlined pipeline does not add PreDepthPass, so it must be turned off
        render: { zPrePass: false },
    },
});

// ……create scene / camera / view……

engine.startRenderView(view, MinimalRendererJob);
```

::: warning Keep settings consistent with the Pass set
When trimming the pipeline, adjust `engine.setting.render` accordingly. For example, removing `PreDepthPass` requires setting `zPrePass` to `false`; otherwise a Pass that depends on `_MainDepthTexture` will report `UnresolvedResourceError` at compile time (resource creator not found).
:::

## Debugging Tips

RenderGraph has several built-in troubleshooting tools:

```ts
const graph = view.renderGraph!;

// 1. Export Graphviz DOT, which you can paste into tools like https://dataviz.dev to visualize the dependency graph
console.log(graph.dumpDot());

// 2. Inspect transient resource VRAM statistics (current/peak bytes, number of active lifetimes)
console.log(graph.transientStats());

// 3. After each compile(), the engine prints the final execution order to the console:
//    [RenderGraph] compiled pass order: ClusterLightingPass → ... → GUIPass
```

Common compile-time errors:

| Error | Meaning |
| --- | --- |
| `UnresolvedResourceError` | A resource read by some Pass has no creator (often due to a disabled/unadded producing Pass, or inconsistent settings) |
| `DuplicateCreatorError` | The same resource name has two creators (violating the single-creator rule) |
| `CyclicDependencyError` | Resource reads/writes or explicit dependencies form a cycle |

## Related API

- [View3D](/api/classes/View3D) — obtain the RenderGraph via `view.renderGraph`
- [Engine3D](/api/classes/Engine3D) — `startRenderView(view, JobCtor?)` specifies a custom `RendererJob`
- [VisibleLayer](/api/classes/VisibleLayer) — render layer bitmask utility
