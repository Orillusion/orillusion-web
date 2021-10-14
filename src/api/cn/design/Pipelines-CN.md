# 管道对象

这是一个包含与管道对象相关的 API 部分的伪代码的文档。
API 的命名和 UX 只是一个例子，可能会发生变化，重要的部分是可用的和去哪里的。
例如，当 C++ API 可能想要使用构建器对象时，本文档使用 C 结构，而 Javascript API 可能使用字典。

## 创建管道对象

为了类型安全，计算管道和图形管道是非开的类型。
要创建管道，将包含所有相关信息的结构传递给`DeviceCreate<TYPE>Pipeline`.

## 计算管道的创建

要创建计算管道，唯一需要的是将一些着色器代码放到 `ShaderModule` 对象中和一个描述管道如何与绑定模型交互的 `PipelineLayout` 对象。
```cpp
struct ComputePipelineDescriptor {
    ShaderModule module;
    const char* entryPoint;
    PipelineLayout layout;
};

ComputePipeline CreateComputePipeline(Device device, const ComputePipelineDescriptor* descriptor);
```

对支持 API 的转换如下：
 - **D3D12**: 转换到 `ID3D12::CreateComputePipelineState`, `(module, entryPoint)` 配对中会创建一个 `D3D12_SHADER_BYTECODE` , `ID3D12RootSignature` 相当于是`PipelineLayout`.
 - **Metal**: 转换到 `MTLDevice::makeComputePipelineState`, `(module, entryPoint, layout)` 元组中会创建一个`MTLFunction`,  通过使生成的 MSL 适应在“layout”中完成的资源槽分配.
 - **Vulkan**: 转换到带有一个管道的 `vkCreateComputePipelines` . `vkShaderStageInfo` 对应到 `(module, entryPoint)` . `vkPipelineLayout` 对应到 `layout`.

问题：我们如何利用 D3D12 和 Vulkan 中存在的管道缓存？我们是将它公开给应用程序还是在 WebGPU 实现中神奇般地完成？
答案：推迟到 MVP 之后 ？？？？？？？？？？deferred to post-MVP.

## 渲染管线的创建

渲染管线需要`ShaderModule`和`PipelineLayout` ，这点跟计算管线一样，另外需要其他的信息关于:
 - 顶点输入的布局
 - 片元的输出布局
 - 所有固定函数的状态？？？？？？fixed-function

为简单起见，我们假设大多数固定函数状态是在单独的对象中创建的。
例如，将分配一个“DepthStencilState”对象，并将指向它的指针存储在“RenderPipelineDescriptor”中。这是 API UX 的一部分，可以替换为 Vulkan 等链式结构或 D3D12 等成员结构。

不同的点:
 - Metal 始终启用原始重启.
 - D3D12 需要在管道创建时知道原始重启索引是“0xFFFF”还是“0xFFFFFFFF”.
 - Metal 没有样品面具.
 - Vulkan 可以在管道上设置一些状态，如剪刀和视口，作为对某些 GPU 的优化.
 - Vulkan 允许批量创建管道，这不仅是用户体验的事情，而且允许重用一些结果以更快地创建.

```cpp
enum IndexFormat {
    IndexFormatUint16,
    IndexFormatUint32,
};

struct RenderPipelineDescriptor {
    // Same translation as for compute pipelines
    ShaderModule vsModule;
    const char* vsEntryPoint;
    ShaderModule fsModule;
    const char* fsEntryPoint;
    PipelineLayout layout;

    // Pipeline input / outputs
    InputState* inputState;
    IndexFormat indexFormat;
    RenderPass* renderPass;
    int subpassIndex;

    // Fixed function state
    DepthStencilState* depthStencil;
    BlendState* blend[kMaxColorAttachments];
    PrimitiveTopology topology;
    // TODO other state: rasterizer state, “multisample state”
};


RenderPipeline CreateRenderPipeline(Device device, const RenderPipelineDescriptor* descriptor);
```

对支持 API 的转换如下：
 - **D3D12**: 转换到 `ID3D12::CreateGraphicsPipelineState`. `IBStripCutValue` will always be set with its value being chosen depending on `indexFormat`.
 - **Metal**: 转换到 `MTLDevice::makeRenderPipelineState`
 - **Vulkan**: 转换到 `vkCreateGraphicsPipelines`. `VkPipelineInputAssemblyStateCreateInfo`的 `primitiveRestartEnable` 始终设定为True. 所有动态状态在所有管线中被设定.

问题: 索引的类型应该在`RenderPipelineDescriptor`中设置吗？如果不是，如何选择 D3D12 `IBStripCutValue`？
回答：虽然 `indexFormat` 在三个 API 中的任何一个中都不是必需的，但我们选择将其包含在管道状态中，因为必须始终启用原始重启，D3D12 （和 Metal） 需要选择正确的 `IBStripCutValue`。另一种方法是为每个 WebGPU 管道编译两个 D3D12 管道，或者延迟编译。
The translation of individual members of RenderPipelineDescriptor is described below.

### 输入状态

这描述了如何逐步遍历顶点缓冲区（步幅、实例与顶点、实例除数），以及如何从缓冲区中提取属性（缓冲区索引、格式、偏移量）。

不同的是:
- D3D12 与`ID3D12GraphicsCommandList::IASetVertexBuffers` 中的顶点缓冲区一起使用，而 Vulkan 和 Metal 在管道编译时使用它。
- Vulkan 不支持其步进速率的除数。

```cpp
enum StepRate {
    StepRateVertex,
    StepRateInstance,
};

Enum VertexFormat {
    // TODO make a list of portable vertex formats
};

struct InputStateDescriptor {
    struct {
        bool enabled;
        VertexFormat format;
        int offsetInBuffer;
        int bufferIndex;
    } attributes[MAX_ATTRIBUTES];

    struct {
        StepRate rate;
        int stride;
    } buffers[MAX_VERTEX_BUFFERS];
};

InputState* CreateInputState(Device* device, InputStateDescriptor* descriptor);
```

对支持 API 的转换如下：
 - **D3D12**: 翻译成 `D3D12_INPUT_DESC`.
   每个启用的属性对应一个“D3D12_INPUT_ELEMENT_DESC”，其中“InputSlot”是属性的索引。`D3D12_INPUT_ELEMENT_DESC` 的其他成员被简单地翻译。
   在调用“ID3D12GraphicsCommandList::IASetVertexBuffers”之前，在管道状态中查找步幅。
   `IASetVertexBuffers` 可能会推迟到绘制之前，并且顶点缓冲区可能会因管道更改而失效。
 - **Metal**: 翻译成`MTLVertexDescriptor`, 其中属性对应 `MTLVertexDescriptor::attributes`, 缓存对应`MTLVertexDescriptor::layouts`.
   其他属性翻译为 `MTLVertexAttributeDescriptor` 结构，缓存对应 `MTLVertexBufferLayoutDescriptor`结构.
   需要特别注意将零步幅转换为恒定步幅。
 - **Vulkan**: 翻译成`VkPipelineVertexInputStateCreateInfo`.
   缓存简单的翻译为 `VkVertexInputBindingDescription`，属性对应到 `VkVertexInputAttributeDescription`.

问题：顶点属性是否应该以某种方式包含在 PipelineLayout 中，以便将顶点缓冲区视为其他资源并与它们一起批量更改？

答案：我们决定不在这方面进行创新。

### 渲染通道/渲染目标格式

`RenderPass` 将包含每个子通道的颜色附件和深度模板附件的附件格式列表。
`RenderPass` 中的信息用于填充以下内容：
 - **D3D12**: `D3D12_GRAPHICS_PIPELINE_STATE_DESC`中的`RTVFormats`, `DSVFormats` 和 `NumRenderTargets`.
 - **Metal**: `MTLRenderPipelineDescriptor`中的`colorAttachments[N].pixelFormat`, `depthAttachmentPixelFormat` 和 `stencilAttachmentPixelFormat` in .
 - **Vulkan**: `VkGraphicsPipelineCreateInfo`中的 `renderPass` 和 `subpass`.

问题：管道状态的样本数是否也来自RenderPass？

答案：推迟后 MVP。

### 原始拓扑

不同的是：
 - Metal 和 D3D12 在管道编译时,只要求 “点 vs. 线 vs. 三角形”, 精确的拓扑结构在 `ID3D12GraphicsCommandList::IASetPrimitiveTopology` 中设定, 或传到 `MTLRenderCommandEncoder::draw*`.
   Vulkan 在管道编译时，要求精确的拓扑结构.
 - Vulkan 支持三角扇, 但是 Metal和D3D12不支持.

```cpp
enum PrimitiveTopology {
    PrimitiveTopologyPoints,
    PrimitiveTopologyLineList,
    PrimitiveTopologyLineStrip,
    PrimitiveTopologyTriangleList,
    PrimitiveTopologyTriangleStrip,
};
```

对支持 API 的转换如下:
 - **D3D12 and Metal**: 原始拓扑的类型在`D3D12_GRAPHICS_PIPELINE_STATE_DESC` 和 `MTLRenderPipelineDescriptor`中被设定.
   在绘图阶段, 精确的拓扑结构会从管道中被获取.
 - **Vulkan**: 原始拓扑的类型在 `VkGraphicsPipelineCreateInfo`中被设定.

### 混合状态

不同的是:
 - 在 Vulkan 中，按附件混合和双源混合作为可选功能公开。
   几乎所有地方都支持`independentBlend`，但Adreno 4XX 除外，而Mali GPU 也不支持`dualSrcBlend`。
 - Metal 没有逻辑操作.

```cpp
enum BlendOperation {
    BlendOperationAdd,
    BlendOperationSubtract,
    BlendOperationReverseSubtract,
    BlendOperationMin,
    BlendOperationMax,
};

enum BlendFactor {
    BlendFactorOne,
    BlendFactorSrcColor,
    BlendFactorOneMinusSrcColor,
    BlendFactorSrcAlpha,
    BlendFactorOneMinusSrcAlpha,
    BlendFactorDstColor,
    BlendFactorOneMinusDstColor,
    BlendFactorDstAlpha,
    BlendFactorOneMinusDstAlphe,
    BlendFactorSrcAlphaSaturated,
    BlendFactorBlendColor,
    BlendFactorOneMinusBlendColor,
};

struct BlendStateDescriptor {
    bool enabled;
    BlendFactor srcColorFactor;
    BlendFactor dstColorFactor;
    BlendFactor srcAlphaFactor;
    BlendFactor dstAlphaFactor;
    BlendOperation colorOperation;
    BlendOperation alphaOperation;
    int writeMask;
};

BlendState* CreateBlendState(Device* device, BlendStateDescriptor* descriptor);
```

对支持 API 的转换如下:
 - **D3D12**: 当填充`D3D12_GRAPHICS_PIPELINE_DESC`时, `BlendState` 会被从 `BlendStates` 中获取的数据填充，其中引用了 `RenderPipelineDescriptor`.
   把`BlendState` 翻译到 `D3D12_RENDER_TARGET_BLEND_DESC` 不在此赘述.
 - **Metal**: `BlendStates` 将用于填充 `MTLRenderPipelineColorAttachmentDescriptor` 的所有数据，但用于填充 `pixelFormat`。
   个别成员的翻译不在此赘述。
 - **Vulkan**: `BlendStates` 将被转换为 `VkPipelineColorBlendStateCreateInfo` 中的 `pAttachments` 元素。
   个别成员的翻译不在此赘述。

开放性问题：独立附件混合状态的启用是否应该像 D3D12 一样显式？

开放性问题：覆盖范围的 alpha 应该是多样本状态还是混合状态的一部分？

### 深度模板状态

不同的是:
 - D3D12 没有每面模板读取和写入掩码.
 - 在 Metal 中，深度模板状态与管道状态分开构建和绑定.

```cpp
enum CompareFunction {
    CompareFunctionNever,
    CompareFunctionLess,
    CompareFunctionLessEqual,
    CompareFunctionGreater,
    CompareFunctionGreaterEqual,
    CompareFunctionEqual,
    CompareFunctionNotEqual,
    CompareFunctionAlways,
};

enum StencilOperation {
    StencilOperationKeep,
    StencilOperationZero,
    StencilOperationReplace,
    StencilOperationInvert,
    StencilOperationIncrementClamp,
    StencilOperationDecrementClamp,
    StencilOperationIncrementWrap,
    StencilOperationDecrementWrap,
};

struct StencilFaceDescriptor {
    CompareFunction stencilCompare;
    StencilOperation stencilPass;
    StencilOperation stencilFail;
    StencilOperation depthFail;
};

struct DepthStencilStateDescriptor {
    CompareFunction depthCompare;
    StencilFaceDescriptor front;
    StencilFaceDescriptor back;
    int stencilReadMask;
    Int stencilWriteMask;
};

DepthStencilState* CreateDepthStencilState(Device* device, DepthStencilDescriptor* descriptor);
```

对支持 API 的转换如下:
 - **D3D12**: `DepthStencilState` 简单的翻译成 `D3D12_DEPTH_STENCIL_DESC`.
   `DepthEnable` 会被设定为 `depthCompare != Always`.
 - **Metal**: `DepthStencilState` 简单的翻译成 `MTLDepthStencilDescriptor` 除了正面和背面模板蒙版必须设置为来自 WebGPU 的单个模板蒙版值。
   当管道被绑定时，相应的深度模板状态也会同时被绑定。
 - **Vulkan**: `DepthStencilState`简单的翻译成 `VkPipelineDepthStencilStateCreateInfoxcept` 除了正面和背面模板蒙版必须设置为来自 WebGPU 的单个模板蒙版值.
   `depthTestEnable`会被设定为 `depthCompare != Always`.

问题: Vulkan的 `VkPipelineDepthStencilStateCreateInfo::depthBoundTestEnable` 和 D3D12中的 `D3D12_DEPTH_STENCIL_DESC1::DepthBoundsTestEnable`是做什么的?

答案: deferred post-MVP.

开放性问题：“深度测试启用”应该是隐式的还是显式的？