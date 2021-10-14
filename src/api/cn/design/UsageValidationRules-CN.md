## “正在使用的资源”的定义

WebGPU 中的资源可以以不同的方式使用，这些方式在资源创建时声明并与各种验证规则交互。

缓冲区具有以下用途（以及诱导该用途的命令）：
 - 在调用 `WebGPUCommandEncoder.setVertexBuffers` 中 `buffer` 的 `VERTEX`
 - 在调用 `WebGPUCommandEncoder.setIndexBuffer` 中 `buffer` 的 `INDEX` 
 - 在调用 `WebGPUCommandEncode.{draw|drawIndexed|dispatch}Indirect` 中 `indirectBuffer` 的 `INDIRECT`
 - `UBO` 和 `STORAGE` 用于传递给 `setBindGroup` 的绑定组引用的缓冲区，其用法对应于绑定的类型。
 - `COPY_SRC` 用于缓冲区，用作各种命令的复制源。
 - `COPY_DST` 用于缓冲区，用作各种命令的复制目标。
 - （还有`STORAGE_TEXEL` 和`UNIFORM_TEXEL`？）

纹理有以下用途：
  -`WebGPURenderPassDescriptor` 引用的子资源的`RENDER_ATTACHMENT`
  - `SAMPLED` 和 `STORAGE` 用于与传递给 `setBindGroup` 的绑定组引用的图像视图相对应的子资源，其用法对应于绑定的类型。
  - `COPY_SRC` 用于用作各种命令的复制源的纹理。
  - `COPY_DST` 用于用作各种命令的复制目标的纹理。
  
只读用法的是 `VERTEX`, `INDEX`, `INDIRECT`, `UBO`, `COPY_SRC` 和 `SAMPLED`.

## 渲染通道

在渲染通道中，唯一可写的资源是用作“RENDER_ATTACHMENT”的纹理和用作“STORAGE”的资源。

为了避免数据危险，最简单的验证规则是检查它用作的每个子资源：
  -`RENDER_ATTACHMENT`
  - 只读用法的组合
  -`STORAGE`

如果没有使用`STORAGE`，那么就没有数据竞争，因为一切都是只读的，除了有序的`RENDER_ATTACHMENT`。
对于“STORAGE”资源，对同一内存位置的读写顺序是不确定的，由应用程序来确保数据竞争自由。

## 计算通道

它们类似于渲染通道，每个子资源（或者每个资源）都必须使用：
  - 只读用法的组合
  -`STORAGE`

在单个 `dispatch` 命令中，读取和写入 `STORAGE` 资源的同一内存位置的顺序是不确定的。
由应用程序来确保数据竞争自由。

## 其他操作

假设我们没有“复制传递”并且其他操作是顶级的，那么命令缓冲区看起来像一个序列：
  - 计算通道
  - 渲染通道
  - 副本和其他

对操作的使用没有特别的限制（除了使用正确的使用标志创建的资源）。
实现确保在任何这些操作之间没有数据竞争。
例如，有一些验证规则可以检查缓冲区副本的源和目标区域是否有重叠。

## 讨论

在本篇中，数据竞争的唯一来源来自`STORAGE` 用法：
  - 在单个 drawcall 内和 drawcall 之间的渲染过程中，用于访问写入为“STORAGE”的内存。
  - 在单个调度中的任何计算传递中，用于访问写入为“STORAGE”的内存
  
在某些情况下，资源使用跟踪可能会变得昂贵，例如，如果具有奇数索引的纹理的子资源使用“STORAGE”而偶数使用“SAMPLED”。
也就是说，在实际应用中不太可能发生这种情况。

在计算通道内和命令缓冲区顶层添加内存屏障所需的状态跟踪成本似乎是可以管理的。

没有可以与其他只读用法结合使用的只读存储，因为某些 API 不支持它。
例如，D3D12 假设 UAV 始终是可写的，并且不允许转换为 UAV 和只读用法的组合。

## 开放问题

### 更受约束的纹理使用验证

纹理的每一层和 mip 级别都可以有独立的使用，这意味着实现可能需要跟踪资源每层每个 mip 级别的使用情况。
如果这被认为成本太高，我们只能在纹理中跟踪两个子资源：部分为“RENDER_ATTACHMENT”，其余部分。
例如，这意味着纹理不能同时用作“存储”和渲染通道中的只读用途。
以应用程序的灵活性为代价，实现中所需的状态跟踪将变得非常简单。
当对纹理使用更受约束的使用验证版本时，验证的成本是 O(commands)。

### 后 MVP：选择加入交叉调度数据竞争

在调度之间强制执行无数据竞争可能会导致大量 ALU 时间浪费在大型 GPU 上。
我们可以允许应用程序选择加入交叉调度数据竞赛，通过手动放置“无人机屏障”来恢复一些性能。
可以添加“WebGPUComputePassDescriptor.manualStorageBarriers”选项以及“WebGPUCommandEncoder.storageBarrier(...)”命令。
