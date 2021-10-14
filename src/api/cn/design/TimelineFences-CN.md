# 时间线栅栏 

让栅栏在内部存储一个数字并等待/发出信号，这就是我们所说的数字栅栏。
这是D3D12为`ID3D12Fence`选择的设计。 
D3D12 允许在发出信号之前在栅栏上等待，但 Vulkan 不允许在“VkSemaphore”上这样做，因为某些操作系统缺少等待信号的内核原语。
这意味着 WebGPU 必须验证栅栏上的任何等待都将被已入队的先前信号操作解除阻塞。
为了简化signal-before-wait的验证，我们可以强制signaled number严格递增。 

因此，每个围栏都有两个内部状态：
  - 信号值（signaled value），最新的值传递给栅栏的一个信号，这也是最大的感谢单调性
  - 完成值（completed value），该值对应于最近已执行的信号操作。
  
如果 WebGPU 有多个队列，栅栏将需要额外的限制和操作。
这些更改将被标记为 [multi-queue] 

# 创建栅栏

为了镜像原生 API，栅栏是直接在`WebGPUDevice` 上创建的。 

```webidl
dictionary WebGPUFenceDescriptor {
    u64 initialValue = 0;

    // [multi-queue]
    WebGPUQueue signalQueue = null;
};

partial interface WebGPUFence {};

partial interface WebGPUDevice {
    WebGPUFence createFence(WebGPUFenceDescriptor descriptor);
};
```

栅栏是在两个内部值都设置为 `initialValue` 的情况下创建的，并且 [multi-queue] 被限制为在 `signalQueue` 上发出信号。
如果`signalQueue` 设置为`null`，它会像设置为“默认队列”一样（等待多队列定义）。

# 发信号

通过这种方法发送围栏信号：

```webidl
partial interface WebGPUQueue {
    void signal(WebGPUFence fence, u64 signalValue);
};
```

如果出现以下情况，则会生成 Javascript 异常：
  - `value` 小于或等于栅栏的信号值。
  - [多队列] 栅栏必须在作为其描述符的`signalQueue` 传递的队列上发出信号。
    这个限制是为了确保信号操作是有序的，如果你可以在多个队列上发出信号，这会更复杂。
    
调用后，信号值更新为`signalValue`。

## 观察 CPU 上的栅栏

可以通过以下同步和非阻塞调用来观察 CPU 上的栅栏状态：

```webidl
partial interface WebGPUFence {
    u64 getCompletedValue();
};
```

或者，可以等待给定值完成：

```webidl
partial interface WebGPUFence {
    Promise<void> onCompletion(u64 value);
};
```

如果 `value` 大于栅栏的信号值（以确保承诺在有限时间内完成），则此调用会生成一个 Javascript 异常。
在这个提议中没有办法同步等待一个围栏（最好通过 requestMainLoop 提议来处理）。
一旦栅栏的完成值高于`value`，承诺就会完成。
例如，如果设备丢失，则可以拒绝承诺。

## 在 GPU 上等待围栏 [multi-queue]

如果有多个队列，则可以在不同队列的栅栏上等待：

```webidl
partial interface WebGPUQueue {
    void wait(WebGPUFence fence, u64 value);
};
```

如果 `value` 大于栅栏的信号值，则此调用会生成 Javascript 异常。
它使队列上的进一步执行等待，直到值在栅栏上传递。

## 思考

  - 我们是否应该将栅栏称为“时间线”，并像这样在队列中创建它们，例如`queue.createTimeline()`？
  - 我们如何在栅栏上同步等待？
    也许它可能类似于`Atomics.wait`？
