[**@orillusion/core**](../README.md)

***

# Type Alias: RenderSetting

> **RenderSetting** = `object`

Defined in: [src/setting/RenderSetting.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L16)

## Properties

### debug

> **debug**: `boolean`

Defined in: [src/setting/RenderSetting.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L17)

***

### renderPassState

> **renderPassState**: `number`

Defined in: [src/setting/RenderSetting.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L18)

***

### renderState\_left

> **renderState\_left**: `number`

Defined in: [src/setting/RenderSetting.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L19)

***

### renderState\_right

> **renderState\_right**: `number`

Defined in: [src/setting/RenderSetting.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L20)

***

### renderState\_split

> **renderState\_split**: `number`

Defined in: [src/setting/RenderSetting.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L21)

***

### quadScale

> **quadScale**: `number`

Defined in: [src/setting/RenderSetting.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L22)

***

### hdrExposure

> **hdrExposure**: `number`

Defined in: [src/setting/RenderSetting.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L23)

***

### drawOpMin

> **drawOpMin**: `number`

Defined in: [src/setting/RenderSetting.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L24)

***

### drawOpMax

> **drawOpMax**: `number`

Defined in: [src/setting/RenderSetting.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L25)

***

### drawTrMin

> **drawTrMin**: `number`

Defined in: [src/setting/RenderSetting.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L26)

***

### drawTrMax

> **drawTrMax**: `number`

Defined in: [src/setting/RenderSetting.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L27)

***

### zPrePass

> **zPrePass**: `boolean`

Defined in: [src/setting/RenderSetting.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L28)

***

### useLogDepth

> **useLogDepth**: `boolean`

Defined in: [src/setting/RenderSetting.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L29)

***

### useCompressGBuffer

> **useCompressGBuffer**: `boolean`

Defined in: [src/setting/RenderSetting.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L30)

***

### gpuCull?

> `optional` **gpuCull?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L40)

GPU-driven culling — when true, frustum + (when paired with
 Hi-Z) occlusion tests run on the GPU per mesh instance and
 produce a `drawIndexedIndirect` arg buffer. The compute pass
 is fully implemented in `GPUCullPass` / `GPUFrustumCull_cs`;
 what's still skeleton is the `drawNodes` consumer
 (`_transparentDraw.ts`, driven by `ColorPass`) that actually
 issues the indirect call (the existing per-node iteration
 coexists). Flip this on AND open the integration in `drawNodes`
 to get the 5-20× perf win.

***

### objectMotionVectors?

> `optional` **objectMotionVectors?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L47)

Per-object motion vectors. When true, the engine keeps a copy of the
 previous frame's model matrices and MotionVectorPass draws every
 opaque mesh's own screen-space velocity (camera + object motion) into
 `_MotionVector`; MotionBlurPost then blurs moving objects too, not
 only the camera's motion. Skinned meshes use the previous model
 matrix with the current pose (rigid motion only). Default false.

***

### msaa

> **msaa**: `0` \| `2` \| `4` \| `8`

Defined in: [src/setting/RenderSetting.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L52)

Per-instance MSAA sample count for the main color pass.
 0 disables MSAA (default). Valid non-zero values: 2 | 4 | 8
 depending on device support. Enabling MSAA unlocks
 alpha-to-coverage (set LitMaterial.alphaMode = 'MASK').

***

### useOIT

> **useOIT**: `boolean`

Defined in: [src/setting/RenderSetting.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L57)

Opt-in order-independent transparency (Weighted Blended OIT).
 When true, materials with `oitMode === 'weighted'` are routed
 through the OIT accum/resolve features instead of the sorted
 transparent path. Default false — matches legacy behavior.

***

### decals?

> `optional` **decals?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L63)

Opt-in projected decals. When true, ForwardRendererJob inserts
 `DecalShadowVolumePass` between the opaque/transmission half and
 the sorted transparent half — every active `DecalComponent`
 projects its texture onto the opaque scene via stencil shadow
 volumes. Default false.

***

### water?

> `optional` **water?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L71)

Opt-in water support. When true, ForwardRendererJob adds
 `SceneLinearDepthPass` after the scene color pyramid, so
 `WaterRenderer` surfaces use the real distance to the bottom for
 absorption and refraction, `CausticsPass` before the pyramid for
 sunlight caustics under the surface, and `UnderwaterPass` before
 post-processing for the view with the camera in the water.
 Default false.

***

### fluid?

> `optional` **fluid?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L76)

Opt-in screen-space fluid rendering. When true, ForwardRendererJob
 inserts `FluidPass` between the opaque/transmission half and the
 sorted transparent half, drawing every active `FluidRenderer`.
 Default false.

***

### useStencil?

> `optional` **useStencil?**: `boolean`

Defined in: [src/setting/RenderSetting.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L89)

Opt-in 8-bit stencil buffer on the main color pass.
 When true, `GBufferFrame` allocates its depth attachment as
 `depth24plus-stencil8` instead of the default `depth32float`,
 so material-level stencil state (`Material.stencilFront/Back/
 ReadMask/WriteMask/Ref`) is actually validated and bound at
 pipeline build time. Off by default — adding stencil makes the
 depth attachment incompatible with depth-only sampling paths
 (SSR/SSGI/Outline read `_MainDepthTexture` as `sampleType: depth`),
 so opt in only when the project actually needs stencil and the
 z-prepass is disabled (`zPrePass: false`) — the prepass path
 routes the color pass through a separate `depth32float`
 `zPreTexture` and the stencil attachment is silently dropped.

***

### tonemap

> **tonemap**: [`TonemapSetting`](TonemapSetting.md)

Defined in: [src/setting/RenderSetting.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L97)

Final HDR→LDR tonemap. Runs after every other post (Bloom,
FXAA, GodRay, etc.) so the ACES curve sees the composited HDR
signal. Setting `enable=false` reverts to a passthrough pass —
lighting and bloom shaders no longer apply inline ACES, so the
frame will be raw HDR clamped at swapchain encode time.

***

### postProcessing

> **postProcessing**: `object`

Defined in: [src/setting/RenderSetting.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/setting/RenderSetting.ts#L101)

post effect

#### enable?

> `optional` **enable?**: `boolean`

#### bloom?

> `optional` **bloom?**: [`BloomSetting`](BloomSetting.md)

#### ssao?

> `optional` **ssao?**: `object`

##### ssao.debug

> **debug**: `any`

##### ssao.enable

> **enable**: `boolean`

##### ssao.radius

> **radius**: `number`

##### ssao.bias

> **bias**: `number`

##### ssao.aoPower

> **aoPower**: `number`

#### ssr?

> `optional` **ssr?**: [`SSRSetting`](SSRSetting.md)

#### taa?

> `optional` **taa?**: [`TAASetting`](TAASetting.md)

#### gtao?

> `optional` **gtao?**: [`GTAOSetting`](GTAOSetting.md)

#### ssgi?

> `optional` **ssgi?**: [`GTAOSetting`](GTAOSetting.md)

#### outline?

> `optional` **outline?**: [`OutlineSetting`](OutlineSetting.md)

#### globalFog?

> `optional` **globalFog?**: [`GlobalFogSetting`](GlobalFogSetting.md)

#### skyline?

> `optional` **skyline?**: [`SkylineSetting`](SkylineSetting.md)

#### lens?

> `optional` **lens?**: [`LensSetting`](LensSetting.md)

#### motionBlur?

> `optional` **motionBlur?**: [`MotionBlurSetting`](MotionBlurSetting.md)

#### colorGrading?

> `optional` **colorGrading?**: [`ColorGradingSetting`](ColorGradingSetting.md)

#### godRay?

> `optional` **godRay?**: [`GodRaySetting`](GodRaySetting.md)

#### fxaa?

> `optional` **fxaa?**: `object`

##### fxaa.enable

> **enable**: `boolean`

#### depthOfView?

> `optional` **depthOfView?**: [`DepthOfViewSetting`](DepthOfViewSetting.md)

#### volumetricFog?

> `optional` **volumetricFog?**: [`VolumetricFogSetting`](VolumetricFogSetting.md)
