# Shader Example

## GPU Buffer
Before using the `compute shader` , we need to understand the data types in the `compute shader` . For convenience, we encapsulate the following data `Buffer` objects:
| Type | Description |
| --- | --- |
| ComputeGPUBuffer | Commonly used data buffer encapsulation object |
| UniformGPUBuffer | Encapsulation object of `Uniform` data buffer |
| StorageGPUBuffer | Encapsulation object of `Storage` data buffer |
| StructStorageGPUBuffer | Encapsulation object of `Storage`data buffer based on structure |

### Usage of ComputeGPUBuffer
`ComputeGPUBuffer` is a commonly used data `Buffer` object. This object accepts two parameters, the data size and an optional data source:
```ts
// Create a ComputeGPUBuffer data object with a size of 64 float32
var buffer = new ComputeGPUBuffer(64);

// Create a ComputeGPUBuffer data object and give it initial data
var data = new Float32Array(64);
data[0] = 1;
data[1] = 2;
data[2] = 3;
var buffer2 = new ComputeGPUBuffer(data.length, data);

// Create a ComputeGPUBuffer data object with a size of 64 float32
var buffer3 = new ComputeGPUBuffer(64);
// Set the data of this object
buffer3.setFloat32Array("data", data);
// Apply the update (will be synchronized to GPU)
buffer3.apply();
```

### Usage of UniformGPUBuffer
`UniformGPUBuffer` is an encapsulation object of `Uniform` type data buffer. This object has the same usage as `ComputeGPUBuffer` described above. It also accepts two parameters, the data size and an optional data source:
```ts
// Create a UniformGPUBuffer data object with a size of 32 float32
var buffer = new UniformGPUBuffer(32);

// Create a UniformGPUBuffer data object and give it initial data
var data = new Float32Array(64);
data[0] = 1;
data[1] = 2;
data[2] = 3;
var buffer2 = new UniformGPUBuffer(data.length, data);

// Create a UniformGPUBuffer data object with a size of 64 float32
var buffer3 = new UniformGPUBuffer(64);
// Set the data of this object
buffer3.setFloat32Array("data", data);
// Apply the update (will be synchronized to GPU)
buffer3.apply();
```

### Usage of StorageGPUBuffer
`StorageGPUBuffer` is an encapsulation object of `Storage` type data buffer. Its usage is the same as that of `ComputeGPUBuffer` and `UniformGPUBuffer`, and is not described here.

### Usage of StructStorageGPUBuffer
`StructStorageGPUBuffer` is an encapsulation object of `Storage` data buffer based on structure. This object accepts two parameters, the structure type and the number of structure objects:
```ts
class MyStructA extends Struct {
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;
    public w: number = 0;
}

// Create a StructStorageGPUBuffer with 1 MyStructA element
var buffer1 = new StructStorageGPUBuffer(MyStructA, 1);

// Create a StructStorageGPUBuffer with 3 MyStructA elements (equivalent to a one-dimensional array with a length of 3)
var buffer2 = new StructStorageGPUBuffer(MyStructA, 3);

// Set the value of MyStructA with an index of 2
var value = new MyStructA();
value.x = 100;
buffer2.setStruct(MyStructA, 2, value);
// Apply the update (will be synchronized to GPU)
buffer2.apply();
```

## Compute Shader
To make it convenient to use, we have encapsulated a `ComputeShader` object that accepts a piece of WGSL code as an initialization parameter, for example:
```ts
this.mGaussianBlurShader = new ComputeShader(cs_shader);
```

Here's what `cs_shader` looks like:
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
We will not go into too much detail about the basic syntax of WGSL here. For more information, please refer to [WebGPU Shader Language](https://www.orillusion.com/zh/wgsl.html).

After the `ComputeShader` object is created, we need to associate it with the relevant data it uses, which are various `GPU Buffer` and `Texture` used in the code above(`args`，`colorMap`，`resultTex`)。

`args` is of the `uniform` data type and is used to store configuration information, so we create a `UniformGPUBuffer` object to manage the data:
```ts
this.mGaussianBlurArgs = new UniformGPUBuffer(28);
this.mGaussianBlurArgs.setFloat('radius', 2);
this.mGaussianBlurArgs.apply();
```

After `args` data is prepared, we also need to associate it with the `ComputeShader` object for access during`ComputeShader` execution:
```ts
this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs);
```

`colorMap` is the original texture to be blurred. Here we associate the engine's full-screen `colorMap` with the `ComputeShader` object:
```ts
this.autoSetColorTexture('colorMap', this.mGaussianBlurShader);
```

`resultTex` is the blurred result texture. We need to create a new empty texture to store it:
```ts
// Get presentation size (full screen size)
let presentationSize = webGPUContext.presentationSize;

// Create an empty VirtualTexture
this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
this.mBlurResultTexture.name = 'gaussianBlurResultTexture';

// Set RTDescriptor's relevant parameters (data loading behavior of VirtualTexture, etc.)
let descript = new RTDescriptor();
descript.clearValue = [0, 0, 0, 1];
descript.loadOp = `clear`;
this.mRTFrame = new RTFrame([
    this.mBlurResultTexture
],[
    descript
]);

// Associate the texture with the ComputeShader
this.mGaussianBlurShader.setStorageTexture(`resultTex`, this.mBlurResultTexture);
```

At this point, the initialization of the `ComputeShader`, and the creation and the association of relevant `GPU Buffer` and `Texture` have been completed. Next, we need to execute the `ComputeShader`. Before executing, we need to set the number of workgroups according to the requirements, which are the parameters `workerSizeX`,
`workerSizeY`,and `workerSizeZ`:
```ts
this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8);
this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8);
this.mGaussianBlurShader.workerSizeZ = 1; // default is 1, can be omitted here
```

The parameters `workerSizeX`,`workerSizeY`, and`workerSizeZ` represent the number of workgroups dispatched for computation, as shown in the figure:
![Working Group](/images/working_group.avif)

Each red cube represents a workgroup, which is defined by the built-in field `@workgroup_size(x,y,z)`  in WGSL. The default values of `x,y,z` are `1`. For example, the workgroup of the red cube in the figure can be represented by `@workgroup_size(4,4,4)`.
In WGSL, the built-in variable `global_invocation_id` represents the global dispatch number, and `local_invocation_id` represents the local dispatch number of the workgroup. The global and local numbers of points a, b, and c in the figure are as follows:
| Position | Local ID | Global ID |
| :---: | :---: | :---: |
| a | 0,0,0 | 0,0,0 |
| b | 0,0,0 | 4,0,0 |
| c | 1,1,0 | 5,5,0 |


Finally, execute the `ComputeShader` by entering the dispatch command:
```ts
GPUContext.computeCommand(command, [this.mGaussianBlurShader]);
```

## Summary
In this section, we introduced how to use `Compute Shader` in the engine using an example of Gaussian blur. We explained how to create various `GPU Buffer` objects used by `ComputeShader`, how to assign values to `GPU Buffer`objects, and how to set parameters for `ComputeShader` dispatch. For more `ComputeShader` related examples, please refer to:

<Demo :height="500" src="/demos/compute/gaussianBlur.ts"></Demo>

<<< @/public/demos/compute/gaussianBlur.ts
 