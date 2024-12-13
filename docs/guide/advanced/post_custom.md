# Custom Post-Processing
Although the engine already includes some built-in post-processing effects, it does not cover all requirements. Therefore, you can create custom post-processing objects to achieve project-specific post-processing effects.
This chapter uses the Gaussian blur effect in a `ComputeShader` as an example to detail how to implement custom post-processing effects in your project.
The core of post-processing involves processing relevant data from the frame buffer after the scene content has been rendered, using either a `ComputeShader` or a `RenderShader`, and then rendering it to the screen to achieve a specific rendering effect.
For this purpose, we will focus on the following points:

1. How to create a custom post-processing object
2. How to read data from the frame buffer
3. How to render the processed data to the screen

## 1. Creating a Custom Post-Processing Object
To create a custom post-processing object, you need to create a class that inherits from `PostBase` and implement methods such as `onAttach`, `onDetach`, `render`, and `onResize`.
For example, the following code creates a post-processing class `GaussianBlurPost` that inherits from `PostBase`:

```ts
export class GaussianBlurPost extends PostBase {

    constructor() {
        super();
    }

    public onAttach(view: View3D) {
        // Called when the post-processing object is attached to the scene
    }

    public onDetach(view: View3D) {
        // Called when the post-processing object is removed from the scene
    }

    public render(view: View3D, command: GPUCommandEncoder) {
        // Called when the post-processing object is rendered
    }

    public onResize(): void {
        // Called when the window size changes
    }
}
```

## 2. Reading Frame Buffer Data
After creating the custom post-processing class, we need to create a `ComputeShader` object to process the relevant data in the frame buffer and output it to another texture.
Before creating the `ComputeShader` object, we can first create a temporary texture to store the processed data, for example:

```ts
let presentationSize = webGPUContext.presentationSize;
this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.COPY_SRC | GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
this.mBlurResultTexture.name = 'gaussianBlurResultTexture';
```

The above code retrieves the screen dimensions using `webGPUContext.presentationSize` and then creates a texture of the same size as the screen using `new VirtualTexture`. This texture is used to store the processed data, with the format being `GPUTextureFormat.rgba16float`, which is the format of the color texture attachment in the engine's internal frame buffer.
It also grants permissions such as `GPUTextureUsage.COPY_SRC`, `GPUTextureUsage.STORAGE_BINDING`, and `GPUTextureUsage.TEXTURE_BINDING`.

With the texture for storing the processed data created, we next need to create a `ComputeShader` object to handle the specific blur algorithm:

```ts
this.mGaussianBlurArgs = new UniformGPUBuffer(28);
this.mGaussianBlurArgs.setFloat('radius', 2);
this.mGaussianBlurArgs.apply();

this.mGaussianBlurShader = new ComputeShader(/* wgsl */ `
    struct GaussianBlurArgs {
        radius: f32,
        retain: vec3<f32>,
    };

    @group(0) @binding(0) var<uniform> args: GaussianBlurArgs;
    @group(0) @binding(1) var colorMap: texture_2d<f32>;
    @group(0) @binding(2) var resultTex: texture_storage_2d<rgba16float, write>;

    @compute @workgroup_size(8, 8)
    fn CsMain( @builtin(global_invocation_id) globalInvocation_id: vec3<u32>) {
        var pixelCoord = vec2<i32>(globalInvocation_id.xy);

        var value = vec4<f32>(0.0);
        var count = 0.0;
        let radius = i32(args.radius);
        for (var i = -radius; i < radius; i += 1) {
        for (var j = -radius; j < radius; j += 1) {
            var offset = vec2<i32>(i, j);
            value += textureLoad(colorMap, pixelCoord + offset, 0);
            count += 1.0;
        }
        }

        let result = value / count;
        textureStore(resultTex, pixelCoord, result);
    }
`);
this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs);
this.mGaussianBlurShader.setSamplerTexture('colorMap', this.getLastRenderTexture());
this.mGaussianBlurShader.setStorageTexture('resultTex', this.mBlurResultTexture);

this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8);
this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8);
this.mGaussianBlurShader.workerSizeZ = 1;
```

In the above code:
1. A `UniformGPUBuffer` is created using `new UniformGPUBuffer` to store the blur parameters.
2. A `ComputeShader` object is created using `new ComputeShader` and three `binding` groups are added:
   - `args` is a `GaussianBlurArgs` type `uniform` that stores global blur parameters.
   - `colorMap` is a `texture_2d<f32>` type texture used to read the color texture attachment from the frame buffer.
   - `resultTex` is a `texture_storage_2d<rgba16float, write>` type texture used to output the final blurred result.

3. After creating the `ComputeShader` object, it needs to be associated with the relevant data:
   - `this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs)` associates the `GaussianBlurArgs` type `UniformGPUBuffer` with `args`.
   - `this.mGaussianBlurShader.setSamplerTexture('colorMap', this.getLastRenderTexture())` associates the color texture attachment from the frame buffer with `colorMap`. `this.getLastRenderTexture()` is a method from the base class `PostBase` used to get the texture of the last color attachment.
   - Finally, `this.mGaussianBlurShader.setStorageTexture('resultTex', this.mBlurResultTexture)` associates the texture for storing the processed result with `resultTex`.

With the `ComputeShader` setup complete, we move on to the next step.

## 3. Rendering the Processed Data
After creating the `ComputeShader` object, we need to render the processed data to the screen, which is the `VirtualTexture` object created initially.
To associate the processed data with the screen, we use `WebGPUDescriptorCreator.createRendererPassState` to create a `RendererPassState`:

```ts
let descript = new RTDescriptor();
descript.clearValue = [0, 0, 0, 1];
descript.loadOp = `clear`;
this.mRTFrame = new RTFrame([this.mBlurResultTexture], [descript]);
// Create a render target state and associate it with the post object's rendererPassState
this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.mRTFrame);
this.rendererPassState.label = 'GaussianBlur';
```

- `RTDescriptor` is a render target descriptor used to describe the configuration of the current RT, such as load operations and clear values.
- `RTFrame` is a render target frame used to describe the configuration of the current frame, such as textures and texture descriptors.

`rendererPassState` is a public property of the base class `PostBase`. By associating the created `RendererPassState` object, the engine's built-in `PostRenderer` will automatically render the processed data to the screen.

The complete code is as follows:

```ts
class GaussianBlurPost extends PostBase {
    private mGaussianBlurShader: ComputeShader;
    private mGaussianBlurArgs: UniformGPUBuffer;
    private mBlurResultTexture: VirtualTexture;
    private mRTFrame: RTFrame;

    constructor() {
        super();
    }

    private createResource() {
        let presentationSize = webGPUContext.presentationSize;

        this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.COPY_SRC | GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
        this.mBlurResultTexture.name = 'gaussianBlurResultTexture';

        let descript = new RTDescriptor();
        descript.clearValue = [0, 0, 0, 1];
        descript.loadOp = `clear`;
        this.mRTFrame = new RTFrame([this.mBlurResultTexture], [descript]);

        this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.mRTFrame);
        this.rendererPassState.label = 'GaussianBlur';
    }

    private createComputeShader() {
        this.mGaussianBlurArgs = new UniformGPUBuffer(28);
        this.mGaussianBlurArgs.setFloat('radius', 2);
        this.mGaussianBlurArgs.apply();

        this.mGaussianBlurShader = new ComputeShader(/* wgsl */ `
            struct GaussianBlurArgs {
                radius: f32,
                retain: vec3<f32>,
            };

            @group(0) @binding(0) var<uniform> args: GaussianBlurArgs;
            @group(0) @binding(1) var colorMap: texture_2d<f32>;
            @group(0) @binding(2) var resultTex: texture_storage_2d<rgba16float, write>;

            @compute @workgroup_size(8, 8)
            fn CsMain( @builtin(global_invocation_id) globalInvocation_id: vec3<u32>) {
                var pixelCoord = vec2<i32>(globalInvocation_id.xy);

                var value = vec4<f32>(0.0);
                var count = 0.0;
                let radius = i32(args.radius);
                for (var i = -radius; i < radius; i += 1) {
                for (var j = -radius; j < radius; j += 1) {
                    var offset = vec2<i32>(i, j);
                    value += textureLoad(colorMap, pixelCoord + offset, 0);
                    count += 1.0;
                }
                }

                let result = value / count;
                textureStore(resultTex, pixelCoord, result);
            }
        `);
        this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs);
        this.mGaussianBlurShader.setSamplerTexture('colorMap', this.getLastRenderTexture());
        this.mGaussianBlurShader.setStorageTexture('resultTex', this.mBlurResultTexture);

        this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8);
        this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8);
        this.mGaussianBlurShader.workerSizeZ = 1;
    }

    public render(view: View3D, command: GPUCommandEncoder) {
        if (!this.mGaussianBlurShader) {
            this.createResource();
            this.createComputeShader();
        }

        GPUContext.computeCommand(command, [this.mGaussianBlurShader]);
    }
}
```

On the first entry into `render`, since `this.mGaussianBlurShader` is not yet initialized, it will enter the `createResource` and `createComputeShader` functions to create the necessary resource objects.
In `createResource`, a virtual texture of the screen size is created to store the blurred pixel data. In `createComputeShader`, a `ComputeShader` object is created and associated with the relevant parameters.
Finally, `GPUContext.computeCommand` is used to execute the `ComputeShader`.

Since the screen window size may change, when the window size changes, the size of the blur texture needs to be recalculated, and the texture object needs to be recreated to adapt to the new window size:

```ts
class GaussianBlurPost extends PostBase {
    // ...

    public onResize(): void {
        let presentationSize = webGPUContext.presentationSize;
        let w = presentationSize[0];
        let h = presentationSize[1];

        this.mBlurResultTexture.resize(w, h);

        this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8);
        this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8);
        this.mGaussianBlurShader.workerSizeZ = 1;
    }
}
```

## Summary
This section uses a Gaussian blur example to introduce how to create a custom post-processing effect in the engine, how to read relevant data from the frame buffer in the post-processor, and how to render the processed data to the screen.

<Demo :height="500" src="/demos/compute/gaussianBlur.ts"></Demo>

<<< @/public/demos/compute/gaussianBlur.ts