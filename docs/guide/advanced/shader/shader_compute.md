# Shader示例

## GPU Buffer
开始使用 `compute shader` 前，我们需要先了解 `compute shader` 中都有哪些数据类型，为了方便使用，我们封装了以下数据 `Buffer` 对象：
| 类型 | 描述 |
| --- | --- |
| ComputeGPUBuffer | 常用的数据Buffer封装对象 |
| UniformGPUBuffer | `Uniform` 数据Buffer封装对象 |
| StorageGPUBuffer | `Storage` 数据Buffer封装对象 |
| StructStorageGPUBuffer | 基于结构体的`Storage`数据Buffer封装对象 |

### ComputeGPUBuffer的用法
`ComputeGPUBuffer` 是比较常用的数据 `Buffer` 对象，该对象接受两个参数，数据大小以及一个可选的数据源：
```ts
// 创建一个大小为 64 float32的 ComputeGPUBuffer 数据对象
var buffer = new ComputeGPUBuffer(64);

// 创建一个 ComputeGPUBuffer 数据对象，并给与初始数据
var data = new Float32Array(64);
data[0] = 1;
data[1] = 2;
data[2] = 3;
var buffer2 = new ComputeGPUBuffer(data.length, data);

// 创建一个大小为 64 float32的 ComputeGPUBuffer 数据对象
var buffer3 = new ComputeGPUBuffer(64);
// 设置该对象数据
buffer3.setFloat32Array("data", data);
// 应用更新(将同步到GPU)
buffer3.apply();
```

### UniformGPUBuffer的用法
`UniformGPUBuffer` 是 `Uniform` 类型数据Buffer的封装对象，该对象与上述`ComputeGPUBuffer` 用法一致，也是接受两个参数，数据大小以及一个可选的数据源：
```ts
// 创建一个大小为 32 float32的 UniformGPUBuffer 数据对象
var buffer = new UniformGPUBuffer(32);

// 创建一个 UniformGPUBuffer 数据对象，并给与初始数据
var data = new Float32Array(64);
data[0] = 1;
data[1] = 2;
data[2] = 3;
var buffer2 = new UniformGPUBuffer(data.length, data);

// 创建一个大小为 64 float32的 UniformGPUBuffer 数据对象
var buffer3 = new UniformGPUBuffer(64);
// 设置该对象数据
buffer3.setFloat32Array("data", data);
// 应用更新(将同步到GPU)
buffer3.apply();
```

### StorageGPUBuffer的用法
`StorageGPUBuffer` 是 `Storage` 类型数据Buffer的封装对象，用法与上述`ComputeGPUBuffer`、`UniformGPUBuffer`一致，这里不再展开介绍。

### StructStorageGPUBuffer的用法
`StructStorageGPUBuffer` 是基于结构体的 `Storage` 数据Buffer封装对象，该对象接受两个参数，结构类型和结构对象个数：
```ts
class MyStructA extends Struct {
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;
    public w: number = 0;
}

// 创建一个拥有 1 个MyStructA元素的 StructStorageGPUBuffer
var buffer1 = new StructStorageGPUBuffer(MyStructA, 1);

// 创建一个拥有 3 个MyStructA元素的 StructStorageGPUBuffer（相当于一维数组，数组长度为3）
var buffer2 = new StructStorageGPUBuffer(MyStructA, 3);

// 为下标为 2 的MyStructA设置值
var value = new MyStructA();
value.x = 100;
buffer2.setStruct(MyStructA, 2, value);
// 应用更新(将同步到GPU)
buffer2.apply();
```

## Compute Shader
为了方便使用，我们封装了 `ComputeShader` 对象，该对象接受一段WGSL代码作为初始化参数，例如：
```ts
this.mGaussianBlurShader = new ComputeShader(cs_shader);
```

`cs_shader` 内容如下:
```wgsl
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
```
这里对WGSL基本语法不做过多说明，详情查看 [WebGPU Shader Language](https://www.orillusion.com/zh/wgsl.html).

当 `ComputeShader` 对象被创建后，我们需要关联它所使用到的相关数据，也就是上述代码中使用到的各类 `GPU Buffer` 和 `Texture` (本例为 `args`，`colorMap`，`resultTex`)。

`args` 为 `uniform` 数据类型，此处用于存放配置信息，所以我们创建一个`UniformGPUBuffer` 对象用于管理该数据：
```ts
this.mGaussianBlurArgs = new UniformGPUBuffer(28);
this.mGaussianBlurArgs.setFloat('radius', 2);
this.mGaussianBlurArgs.apply();
```

`args` 所使用的数据有了以后，还需要将其关联到 `ComputeShader` 对象供`ComputeShader` 执行时访问：
```ts
this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs);
```

`colorMap` 是需要被高斯模糊的原始纹理，这里我们用引擎内部的全屏 `colorMap` 关联到`ComputeShader` 对象
```ts
this.autoSetColorTexture('colorMap', this.mGaussianBlurShader);
```

`resultTex` 是被模糊过的结果纹理，我们需要新建一张空纹理用于存储：
```ts
// 获取呈现大小(全屏大小)
let presentationSize = webGPUContext.presentationSize;

// 创建一张空的VirtualTexture
this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
this.mBlurResultTexture.name = 'gaussianBlurResultTexture';

// 设置 RTDescriptor 的相关参数(VirtualTexture的数据载入行为等)
let descript = new RTDescriptor();
descript.clearValue = [0, 0, 0, 1];
descript.loadOp = `clear`;
this.mRTFrame = new RTFrame([
    this.mBlurResultTexture
],[
    descript
]);

// 将该纹理关联到ComputeShader
this.mGaussianBlurShader.setStorageTexture(`resultTex`, this.mBlurResultTexture);
```

到这里，`ComputeShader`的初始化，相关 `GPU Buffer` 和 `Texture` 的创建与关联都已完成，接下来是执行 `ComputeShader`，在执行之前，我们还需要根据需求设置好派发调度时工作组数量，也就是参数 `workerSizeX`、
`workerSizeY`、`workerSizeZ`：
```ts
this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8);
this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8);
this.mGaussianBlurShader.workerSizeZ = 1; // 默认为1，这里可不写
```

`workerSizeX`、`workerSizeY`、`workerSizeZ` 参数为派发计算时工作组数量，如图：
![Working Group](/images/working_group.avif)

每个红色立方体代表一个工作组(Working Group)，由 `WGSL` 内置字段：`@workgroup_size(x,y,z)` 定义，`x,y,z`默认为 `1`，例如图中红色立方体的工作组，可通过 `@workgroup_size(4,4,4)` 表示。
在WGSL里，内置变量 `global_invocation_id` 为全局调度编号，`local_invocation_id` 为工作组局部调度编号，上图 a、b、c 三点的全局与局部编号如下：
| 位置点 | 局部编号 | 全局编号 |
| :---: | :---: | :---: |
| a | 0,0,0 | 0,0,0 |
| b | 0,0,0 | 4,0,0 |
| c | 1,1,0 | 5,5,0 |


最后录入`ComputeShader`执行调度命令：
```ts
GPUContext.computeCommand(command, [this.mGaussianBlurShader]);
```

## 总结
本节以一个高斯模糊示例，介绍了引擎中如何使用`Compute Shader`，如何创建`ComputeShader`所使用的各类`GPU Buffer`对象，`GPU Buffer`对象如何赋值，以及`ComputeShader`调度时参数设置，更多`ComputeShader`相关示例参见：

<Demo :height="500" src="/demos/compute/gaussianBlur.ts"></Demo>

<<< @/public/demos/compute/gaussianBlur.ts
 