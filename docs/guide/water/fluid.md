# Fluid Rendering - FluidRenderer

`FluidRenderer` renders a set of particles as a continuous liquid surface (screen-space fluid rendering). It pairs with particle fluid simulations such as SPH or FLIP, for pouring, sloshing and splashing liquids.

::: tip
`FluidRenderer` **only renders**; it does not simulate the fluid. You provide the particle positions: from a simulation on the CPU, or straight from a GPU buffer written by a compute shader.
:::

## Enabling Fluid Rendering

Turn on `setting.render.fluid` when initializing the engine so the render pipeline adds `FluidPass`:

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: { render: { fluid: true } }
});
```

For every enabled `FluidRenderer` in the scene, `FluidPass`:

1. draws the particles as sphere impostors into a linear depth map, and with additive blending into a thickness map;
2. smooths the depth map so neighboring spheres merge into one continuous surface, and blurs the thickness map;
3. reconstructs normals from the smoothed depth and shades the surface with refraction, absorption, environment reflection and a specular highlight.

The fluid is drawn after opaque geometry and before transparent geometry, so opaque objects clip it correctly and transparent objects draw over it.

::: tip
The fluid only writes color and depth, not the G-Buffer, so pixel picking cannot hit it. To interact with the liquid surface, intersect a ray with an approximate horizontal plane instead.
:::

## Basic Usage

Add a `FluidRenderer` to an `Object3D`, set the particle diameter and pass in the particle data:

```ts
import { Object3D, FluidRenderer } from '@orillusion/core';

const fluidObj = new Object3D();
const fluid = fluidObj.addComponent(FluidRenderer);
// Particle diameter in world units
fluid.particleSize = 0.16;
scene.addChild(fluidObj);

// 4 floats per particle: x, y, z and an unused component
const count = 6000;
const positions = new Float32Array(count * 4);
// ... write the particle positions
fluid.setDataBuffer(positions);
```

Particle positions are in the local space of the owning object (world space when it sits at the origin unscaled); `particleSize` is in world units.

## Particle Data

### CPU Data: setDataBuffer

```ts
fluid.setDataBuffer(data: Float32Array, count?: number, layout?: FluidDataLayout);
```

- `data` is uploaded to the GPU on the next frame. **After modifying the array in place, call `setDataBuffer()` again** to re-upload it, usually once at the end of each simulation step;
- `count` is the number of particles; by default as many as `data` holds.

```ts
class MySimulation extends ComponentBase {
    public fluid: FluidRenderer;
    private positions: Float32Array;

    public onUpdate(): void {
        this.step(1 / 60);                        // update this.positions
        this.fluid.setDataBuffer(this.positions); // re-upload
    }
}
```

### GPU Data: setDataBufferGPU

When the particles are simulated by a compute shader, hand the storage buffer it writes directly to `FluidRenderer`. The positions stay on the GPU the whole time, with no read-back:

```ts
fluid.setDataBufferGPU(buffer: GPUBufferBase, count: number, layout?: FluidDataLayout);
```

The buffer needs `STORAGE` usage (for example `StorageGPUBuffer` or `ComputeGPUBuffer`). `FluidRenderer` reads it every frame, so compute shader updates show up without further calls:

```ts
import { ComponentBase, ComputeShader, FluidRenderer, StorageGPUBuffer, View3D } from '@orillusion/core';

const simulationWGSL = /* wgsl */ `
    @group(0) @binding(0) var<storage, read_write> positions: array<vec4<f32>>;

    @compute @workgroup_size(64)
    fn CsMain(@builtin(global_invocation_id) id: vec3<u32>) {
        let i = id.x;
        if (i >= arrayLength(&positions)) { return; }
        // ... update positions[i].xyz
    }
`;

class GPUSimulation extends ComponentBase {
    private count = 100000;
    private positions: StorageGPUBuffer;
    private shader: ComputeShader;

    public start(): void {
        // Size in floats: one vec4 per particle
        this.positions = new StorageGPUBuffer(this.count * 4);
        this.shader = new ComputeShader(simulationWGSL);
        this.shader.setStorageBuffer('positions', this.positions);
        this.shader.workerSizeX = Math.ceil(this.count / 64);

        this.object3D.getComponent(FluidRenderer).setDataBufferGPU(this.positions, this.count);
    }

    public onCompute(view: View3D, command: GPUCommandEncoder): void {
        view.engine3D.context3D.gpuContext.computeCommand(command, [this.shader]);
    }
}
```

`particleCount` can be lowered at any time to draw only the first particles of the buffer.

### Data Layout

By default each particle takes 16 bytes (one `vec4f`) with the xyz position at the start. If the particle struct also holds velocity, density and so on, describe the layout with `FluidDataLayout` instead of copying the positions out:

```ts
// Particle struct: velocity (vec4f) + position (vec4f), 32 bytes
fluid.setDataBufferGPU(particleBuffer, count, {
    stride: 32,         // bytes between two consecutive particles
    positionOffset: 16  // byte offset of the position inside a particle
});
```

`stride` and `positionOffset` must both be multiples of 4, and the three xyz floats must fit inside `stride`; otherwise an error is thrown.

## Appearance

| Property | Default | Description |
| --- | --- | --- |
| `particleSize` | `0.1` | Particle diameter (world units) |
| `fluidColor` | `(0.085, 0.64, 0.77)` | Absorption color; light passing through the fluid is tinted toward it |
| `density` | `2` | Absorption strength; higher is more opaque |
| `refractionStrength` | `1` | Scale of the refraction offset: `1` follows the refracted ray to the scene behind, `0` disables refraction |
| `fresnelClamp` | `1` | Upper bound of the fresnel reflection weight, `0 ~ 1` |
| `specularPower` | `250` | Specular exponent; higher gives a smaller, sharper highlight |
| `edgeSoftness` | `0` | Fades the fluid into the background where it is thinner than this many particles, softening free edges; `0` disables it |
| `minimumThickness` | `0` | Pixels with less thickness show the background; with `useFixedThickness`, the thickness used everywhere |
| `useFixedThickness` | `false` | Skip the thickness pass and use `minimumThickness` as a constant thickness |
| `dirLight` | `null` | Light direction (world space) for the highlight; `null` uses the scene's first `DirectLight` |
| `environmentMap` | `undefined` | Cube map reflected by the fluid; `undefined` uses the scene's `envMap`, `null` disables reflection |

The fluid's highlight and reflection use the scene's directional light and environment map; no extra lighting setup is needed.

### Thickness

Absorption depends on the thickness of fluid along the view ray. `thicknessMode` decides how it is measured:

| Value | Description |
| --- | --- |
| `FluidThicknessMode.Accumulated` | Default. Sums the contribution of every particle along the view ray (`particleThicknessAlpha` at each particle's center, default `0.05`). Thickness follows the particle density, so uneven sampling shows as uneven patches |
| `FluidThicknessMode.Geometric` | Distance between the near and the far side of the fluid along the view ray (world units), even inside a still body of fluid; `density` is then absorption per world unit. Suits simulations with uneven particle spacing such as FLIP |

```ts
import { FluidThicknessMode } from '@orillusion/core';

fluid.thicknessMode = FluidThicknessMode.Geometric;
fluid.density = 0.15;
```

## Surface Smoothing

Each particle is a sphere; the depth map has to be smoothed for them to merge into a smooth liquid surface. Too little smoothing shows the individual spheres; too much washes out detail and glues separate bodies of liquid together.

| Property | Default | Description |
| --- | --- | --- |
| `enableBlurDepth` | `true` | Whether to smooth the depth map |
| `depthFilter` | `Bilateral` | Filter used for smoothing, see below |
| `blurDepthFilterSize` | `7` | Smoothing radius, relative to the projected particle size |
| `blurDepthNumIterations` | `3` | Iterations (each is one horizontal and one vertical pass) |
| `blurDepthMaxFilterSize` | `100` | Upper bound of the smoothing radius in pixels |
| `blurDepthDepthScale` | `10` | Depth range, in particle radii, across which samples are still blended; larger merges more |
| `blurDepthSizeDivisor` | `1` | Smoothing runs at the depth map size divided by this |
| `enableBlurThickness` | `true` | Whether to blur the thickness map |
| `blurThicknessFilterSize` | `5` | Thickness blur radius (pixels) |
| `blurThicknessNumIterations` | `1` | Thickness blur iterations |
| `blurThicknessSizeDivisor` | `1` | Thickness blur runs at the thickness map size divided by this |
| `depthMapSize` / `thicknessMapSize` | `null` | Width of the depth / thickness map in pixels; the height follows the screen aspect; `null` is the screen size |

`depthFilter` options:

| Value | Description |
| --- | --- |
| `FluidDepthFilter.Bilateral` | Separable bilateral filter: a spatial gaussian weighted by depth similarity |
| `FluidDepthFilter.NarrowRange` | Narrow-range filter: averages only samples within a depth range that follows the surface, keeping silhouettes and separate layers sharper at larger radii |

As a rule of thumb, smooth over about one particle diameter, for example:

```ts
import { FluidDepthFilter } from '@orillusion/core';

fluid.depthFilter = FluidDepthFilter.NarrowRange;
fluid.blurDepthFilterSize = 15;
fluid.blurDepthNumIterations = 6;
```

### Anisotropy

With `useAnisotropy` on, each particle is stretched into an ellipsoid along the distribution of its neighbors: flat regions stay flat and thin sheets stay thin, giving a noticeably smoother surface. It adds a neighbor search on the GPU each frame.

| Property | Default | Description |
| --- | --- | --- |
| `useAnisotropy` | `false` | Whether to enable anisotropy |
| `anisotropyRadius` | `null` | Neighbor search radius (world units); `null` uses `1.5 × particleSize` |
| `anisotropyMaxRatio` | `4` | Largest ratio between the longest and the shortest ellipsoid axis |
| `anisotropyMinNeighbors` | `10` | Particles with fewer neighbors stay spheres (spray, droplets) |
| `anisotropySmoothing` | `0.5` | How far (`0 ~ 1`) each particle moves toward the weighted mean of its neighbors, smoothing the surface |

## Debugging

With `debug` on, the image shows the intermediate result selected by `debugFeature`, which helps tune smoothing and thickness:

| `FluidDebug` | Description |
| --- | --- |
| `DepthTexture` | Linear depth of the particle spheres |
| `DepthBlurredTexture` | Depth after smoothing |
| `ThicknessTexture` | Accumulated particle thickness |
| `ThicknessBlurredTexture` | Thickness after blurring |
| `Normals` | View-space normals reconstructed from the smoothed depth |

```ts
import { FluidDebug } from '@orillusion/core';

fluid.debug = true;
fluid.debugFeature = FluidDebug.Normals;
```

## Example

The example below runs a minimal particle motion on the CPU (gravity, damping, pool walls and repulsion between particles; not a physically correct fluid solver) and uploads it every frame with `setDataBuffer()`. A block of particles drops into a pool and sloshes around; the pillar in the pool shows that opaque geometry clips the fluid. Use the panel to hide the pool and look at the fluid's free edges, or turn on `debug` to inspect each intermediate result.

<Demo src="/examples/water/Fluid.ts"></Demo>

<<< @/public/examples/water/Fluid.ts

See the API documentation of [FluidRenderer](/api/classes/FluidRenderer) for more properties.
