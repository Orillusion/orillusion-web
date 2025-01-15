# 自定义后处理
虽然引擎已经内置了部分后处理效果，但并不涵盖所有需求，因此可以自定义后处理对象，实现满足项目需要的后处理效果，
本章节以 `ComputeShader` 中高斯模糊效果的后处理为例，详细介绍如何在项目中实现自定义的后处理效果。
后处理的核心是在场景内容渲染完毕后，通过 `ComputeShader` 或 `RenderShader` 根据某种算法处理帧Buffer中的相关数据，然后再渲染到屏幕上，以实现某种渲染效果。
为此，我们重点将关注以下几点：

    1、如何创建自定义的后处理对象
    2、如何读取帧Buffer中的相关数据
    3、如何将处理后的数据渲染到屏幕上


## 1. 创建自定义的后处理对象
创建自定义的后处理对象需要创建一个继承自 `PostBase` 的类，并实现 `onAttach`、`onDetach`、`render`、`onResize` 等方法，
例如下列这段代码，创建了一个继承自 `PostBase` 的后处理类 `GaussianBlurPost`:
```ts
export class GaussianBlurPost extends PostBase {

    constructor() {
        super();
    }

    public onAttach(view: View3D) {
        // 后处理对象被附加到场景上时被调用
    }

    public onDetach(view: View3D) {
        // 后处理对象被从场景中移除时被调用
    }

    public render(view: View3D, command: GPUCommandEncoder) {
        // 后处理对象在渲染时被调用
    }

    public onResize(): void {
        // 后处理对象在窗口大小改变时被调用
    }
}
```

## 2. 读取帧 Buffer 数据
有了自定义的后处理类后，我们需要为这个后处理创建一个 `ComputeShader` 对象，用于处理帧 `Buffer` 中的相关数据，并计算输出到另一张纹理中，创建 `ComputeShader` 对象之前，可以先创建一张临时纹理，用于存储处理后的数据，例如：

```ts
let presentationSize = webGPUContext.presentationSize;
this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.COPY_SRC | GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
this.mBlurResultTexture.name = 'gaussianBlurResultTexture';
```

上述代码通过 `webGPUContext.presentationSize` 获取屏幕的尺寸，然后通过 `new VirtualTexture` 创建了一张屏幕尺寸相同大小的纹理，用于存储处理后的数据，纹理格式是 `GPUTextureFormat.rgba16float`，这是引擎内部帧Buffer中颜色纹理附件的格式，
并且给予了 `GPUTextureUsage.COPY_SRC`、`GPUTextureUsage.STORAGE_BINDING`、`GPUTextureUsage.TEXTURE_BINDING` 等权限。
有了用于存储处理后的数据纹理后，接下来需要创建一个 `ComputeShader` 对象，来处理具体的模糊算法：
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

上述代码中：
1. 通过 `new UniformGPUBuffer` 创建一个用于存储模糊参数的 `UniformGPUBuffer`
2. 通过 `new ComputeShader` 创建一个 `ComputeShader` 对象，并添加三个 `binding` 组：
    - `args` 是一个 `GaussianBlurArgs` 类型的 `uniform`，存储了全局的模糊参数
    - `colorMap` 是 `texture_2d<f32>` 类型的纹理，用来读取帧Buffer中颜色纹理附件
    - `resultTex` 是 `texture_storage_2d<rgba16float, write>` 类型的纹理，用来输出最终模糊后的结果

3. 创建完 `ComputeShader` 对象，紧接着就需要对其关联相关数据
    - 通过 `this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs)` 将 `GaussianBlurArgs` 类型的 `UniformGPUBuffer` 关联到 `args` 上
    - 通过 `this.mGaussianBlurShader.setSamplerTexture('colorMap', this.getLastRenderTexture())` 将帧 `Buffer` 中颜色纹理附件关联到 `colorMap` 上，`this.getLastRenderTexture()` 是基类 `PostBase` 上的方法，用于获取上一个颜色附件的纹理，
    - 最后通过 `this.mGaussianBlurShader.setStorageTexture('resultTex', this.mBlurResultTexture)` 将用于存储处理结果的纹理关联到 `resultTex` 上

至此 `ComputeShader` 的相关准备工作已经完成。

## 3. 渲染处理后的数据
创建完 `ComputeShader` 对象后，还需要将处理后的数据渲染到屏幕上，也就是最开始创建的 `VirtualTexture` 对象，为了关联处理后的数据渲染到屏幕上，
需要通过 `WebGPUDescriptorCreator.createRendererPassState` 创建一个 `RendererPassState`:

```ts
let descript = new RTDescriptor();
descript.clearValue = [0, 0, 0, 1];
descript.loadOp = `clear`;
this.mRTFrame = new RTFrame([this.mBlurResultTexture], [descript]);
// 创建一个渲染目标状态，并关联到 post 对象的 rendererPassState 上
this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.mRTFrame);
this.rendererPassState.label = 'GaussianBlur';
```

- `RTDescriptor` 是一个渲染目标描述符，用于描述当前RT的配置信息，例如加载操作、清除值等。
- `RTFrame` 则是渲染目标帧，用于描述当前帧的配置信息，例如纹理、纹理描述符等。

`rendererPassState` 是基类 `PostBase` 上的公共属性，通过关联创建的 `RendererPassState` 对象后，引擎内置的 `PostRenderer` 会自动将处理后的数据渲染到屏幕上。

完整代码如下：
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

首次进入 render 后，由于 this.mGaussianBlurShader 尚未初始化，将会进入 `createResource`、`createComputeShader` 函数创建相关资源对象，
在 `createResource` 中创建了一张屏幕尺寸的虚拟纹理，用于存储模糊后的像素数据，在 `createComputeShader` 中创建了 `ComputeShader` 对象并关联了相关参数，
最后通过 `GPUContext.computeCommand` 执行 `ComputeShader`。

由于屏幕窗口大小可能会被调整，所以当窗口大小发生变化时，需要重新计算模糊纹理的尺寸，并重新创建纹理对象，以适配新的窗口大小:
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

## 总结
本节以一个高斯模糊示例，介绍了引擎中如何创建一个自定义的后处理，在后处理器中如何读取帧 `Buffer` 中的相关数据，如何将处理后的数据关联到屏幕上：

<Demo :height="500" src="/demos/compute/gaussianBlur.ts"></Demo>

<<< @/public/demos/compute/gaussianBlur.ts
 