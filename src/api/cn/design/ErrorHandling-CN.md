# 错误处理

最简单的错误处理就是同步的，例如有js异常。但是，这会给多线程/多进程WebGPU实现带来许多往返同步点，使得它的速度过于慢以致无法使用。

这里有一些开发者或应用程序需要错误处理的例子：

 - *调试*: 开发时同步发现错误，中断进入调试。
 - *致命错误*: 处理设备/显卡适配器缺失，无论是修复WebGPU或用非WebGPU内容备用。
 - *不可靠分配*: 进行不可靠资源分配（检测内存溢出）。
 - *测试*: 检查WebGPU调用是否成功，一致性测试或应用程序单元测试。
 - *遥测*: 为bug报告和遥测在部署时收集错误日志。

这里还有一个例子和错误处理紧密相关：

 - *等待完成：等待脱离队列的GPU操作完成（比如对象生成）。

同时，错误处理不应该使得API过于笨重去使用。

## *调试：开发工具

实现需要提供一个能够同步校验的方法，比如通过一个开发工具中的“WebGPU错误中断”选项。其他开支需要尽量的少以保证应用程序在调试时依然可以运行。

## *致命错误s*: requestAdapter, requestDevice, and device.lost

<!-- calling this revision 6 -->

```webidl
interface GPU {
    Promise<GPUAdapter?> requestAdapter(optional GPURequestAdapterOptions options = {});
};
```

```webidl
interface GPUDeviceLostInfo {
    readonly attribute DOMString message;
};

partial interface GPUDevice {
    readonly attribute Promise<GPUDeviceLostInfo> lost;
};
```

`GPU.requestAdapter`从user agent请求显卡适配器，它返回一个在显卡适配器准备好时解决的Promise。这个Promise解决需要时间不会很久——比如，浏览器在后台标签移到前景时需要等待，当标签处于前台时，确认所选择的显卡适配器是正确的（以防万一系统状态，比如电池状态，发生变化）。如果它返回`null`，应用则知道请求无法被满足（至少，在目前系统状态下…）；它不需要用`GPURequestAdapterOptions`重新请求。如果`options`是无效的（目前不可能），`requestAdapter`会拒绝。

如果设备存在致命错误（比如，意外驱动错误，崩溃，或原生设备缺失）`GPUDevice`可能缺失。GPUDevice提供一个promise，device.lost，它在设备缺失时解决。它不会拒绝并且可能永远等待。

一旦`lost`解决，`GPUDevice`无法再使用。设备以及所有设备创建的对象会变无效。所有之后设备相关的操作和对象会报错。“validationerror”事件不会再被触发。（这意味着所有后续操作无法操作。）

一个应用不应该在`GPUDevice.lost`解决后放弃WebGPU访问。应用应该从`requestAdapter`开始重新尝试访问WebGPU。

当`requestAdapter`返回`null`或拒绝时，应用当放弃访问WebGPU。（在`requestDevice`拒绝时，同样应当放弃，因为这意味着出现一个应用程序错误——请求无效，比如，显卡适配器不兼容。）

### 示例代码

**NOTE:** 这些例子（也或许是原始API）仍旧需要重新编写!

```js
class MyRenderer {
  constructor() {
    this.adapter = null;
    this.device = null;
  }
  async begin() {
    const usingWebGPU = await this.initWebGPU();
    if (!usingWebGPU) {
      this.initFallback();
    }
  }
  initFallback() {
    // Try WebGL, 2D Canvas, or other fallback.
  }
  async initWebGPU() {
    // Stop rendering. (If there was already a device, WebGPU calls made before
    // the app notices the device is lost are okay - they are no-ops.)
    this.device = null;

    // Keep current adapter (but make a new one if there isn't a current one.)
    await tryEnsureDeviceOnCurrentAdapter();
    if (!this.adapter) return false;
    // If the device is null, the adapter was lost. Try a new adapter.
    // Continue doing this until one is found or an error is thrown.
    while (!this.device) {
      this.adapter = null;
      await tryEnsureDeviceOnCurrentAdapter();
      if (!this.adapter) return false;
    }

    // ... Upload resources, etc.
    return true;
  }
  // TODO: This example should not retry on the current adapter, it should get a new adapter.
  async tryEnsureDeviceOnCurrentAdapter() {
    // If no adapter, get one.
    // If we can't, rejects and the app falls back.
    if (!this.adapter) {
      // If no adapter, get one.
      this.adapter = await gpu.requestAdapter({ /* options */ });
      // If requestAdapter resolves to null, no matching adapter is available.
      // Exit to fallback.
      if (!this.adapter) return;
    }

    // Try to get a device.
    //   rejection => options were invalid (app programming error)
    this.device = await this.adapter.requestDevice({ /* options */ });

    // When the device is lost, just try to get a device again.
    device.lost.then((info) => {
      console.error("Device was lost.", info);
      this.initWebGPU();
    });
  }
}
```

### 案例学习

*应用需要什么样的信号，何时需要它们？*

一个页面上运行的两个独立应用程序意味着一个显卡适配器上的两个设备。标签是在后台的，一个设备需要大量资源。
 - 浏览器选择丢失业务更重的设备。
    - `device.lost`解决，消息=回收设备资源
    - （如果应用对同一个显卡适配器调用`requestDevice`或`requestAdapter`，它会直到标签移到前台时才解决）
 - 之后，浏览器同样会选择丢失较小的设备。
    - `device.lost` 解决，消息=回收设备资源
    - （如果应用对同一个显卡适配器调用`requestDevice`或`requestAdapter`，它会直到标签移到前台时才解决）
 - 系统配置更改（比如电脑电源插头被拔出）。
    - 由于显卡适配器已不再使用，UA会选择丢失它并且拒绝任何突出的`requestDevice` promise。（可能不会等到标签移到前台。）
    - （如果应用调用`requestAdapter`，它会直到标签移到前台时才解决）

一个标签页面开始被加载，但随即标签即移到后台。
 - 在加载时，页面试图创建一个显卡适配器。
    - 浏览器可能也可能不提供一个显卡适配器——如果未提供，当页面到前台，`requestAdapter` Promise将解决。（这将允许浏览器根据最新系统状态选择一个显卡适配器。）

一个设备的显卡适配器从物理层面上被从系统上拔出（但是集成GPU仍然有效）。
 - 同一个显卡适配器，或一个新显卡适配器，被插入以备用。
    - 稍后调用`requestAdapter`可以返回新显卡适配器。（在以后，可以触发“gpuadapterchanged”事件。）

一个应用运行在集成显卡上。
 - 一个新独立显卡被插入。
    - 稍后调用`requestAdapter`可以返回新显卡适配器。（在以后，可以触发“gpuadapterchanged”事件。）

一个应用运行在独立显卡上。
 - 显卡适配器从物理层面上被从系统上拔出，但是集成GPU仍然有效。`device.lost`解决，对同一个显卡适配器的`requestDevice`方法会拒绝，`requestAdapter`会返回新的显卡适配器。
 - 同一个显卡适配器，或一个新的显卡适配器，插入以备用。稍后调用`requestAdapter`可以返回新显卡适配器。（在以后，可以触发“gpuadapterchanged”事件。）


设备因为具体实施中的意外错误缺失。
 - `device.lost`解决，消息=意外错误原因。

一个TDR-like场景出现。
 - 显卡适配器缺失，则显卡适配器上的所有设备都缺失。`device.lost`对每个设备都解决，消息=显卡适配器重置。应用需要重新请求显卡适配器。
 - TODO：可选择地，显卡适配器可以被保留，但其上的所有设备都缺失。）

由于GPU访问被浏览器禁止（对当前页面或全部，比如，由于不期望的GPU进程崩溃），所有设备和显卡适配器都缺失（软件除外？）。
 - `device.lost`对所有设备都解决，message=对应信息。

WebGPU访问被当前页面禁止。
 - `requestAdapter`返回null（或一个软件显卡适配器）。

设备当被requestDevice返回时缺失，或因为其他不确定/内部的原因无法被创建。
 - `device.lost`解决。

## 操作错误和内部为空性

WebGPU对象是不透明的处理。在创建时，由于处理在等待状态，直到备用对象被创建。异步地，一个处理可以指向一个被成功创建的对象（称作有效对象），或一个内部为空/创建不成功的对象（称作无效对象）。对象状态对JavaScript来说是不透明的，除了对象创建过程中可以被捕捉的错误（见下方）。

如果一个WebGPU对象处理A被传入WebGPU API调用需要有效对象的C，这个API调用不透明地接受对象忽略它的状态（等待，有效，或无效）。但是，内部地并且异步地，C在A的状态未解决之前不会变成有效也不会被执行。如果A解决并且无效，C会失败（异步地）。

操作或创建中的错误会在**当前范围内**产生一个错误。一个错误可以被周围错误范围捕获（描述见下方）。如果一个错误没有被捕获，它可能触发设备的“unhandlederror”事件（见下方）。

### WebGPU调用类型

#### 初始化

创建显卡适配器和设备。

  - `gpu.requestAdapter`
  - `GPUAdapter.requestDevice`

被上述描述的“致命错误”处理。

#### 对象返回

WebGPU对象创建和获取。

  - `GPUDevice.createTexture`
  - `GPUDevice.createBuffer`
  - `GPUDevice.createBufferMapped`
  - `GPUTexture.createView`
  - `GPUTexture.createDefaultView`
  - `GPUCommandEncoder.finish`
  - `GPUDevice.getQueue`
  - `GPUSwapChain.getCurrentTexture`

如果出现错误，其返回对象无效，一个错误会在当前范围内产生。

#### 编码

在`GPUCommandEncoder`中记录GPU命令。

  - `GPUCommandEncoder.*`
  - `GPURenderPassEncoder.*`
  - `GPUComputePassEncoder.*`

这些命令不会报错。出错时，`GPUCommandEncoder.finish`返回一个无效对象并且产生一个当前范围内的错误。

#### Promise返回

  - `GPUDevice.createBufferMappedAsync`
  - `GPUCanvasContext.getSwapChainPreferredFormat`
  - `GPUFence.onCompletion`
  - `GPUBuffer.mapReadAsync`
  - `GPUBuffer.mapWriteAsync`

如果出现错误，其返回的Promise拒绝。

#### Void返回

  - `GPUQueue.submit`
  - `GPUQueue.signal`
  - `GPUBuffer.unmap`
  - `GPUBuffer.destroy`
  - `GPUTexture.destroy`

如果出现错误，一个错误在当前范围内产生。

#### 绝对可靠的

  - `GPUFence.getCompletedValue`

该方法不会失败。

## 错误范围

每个设备保存一个持续存在的“错误范围”栈状态。最开始，设备错误范围栈为空。
`GPUDevice.pushErrorScope(filter)`创建一个错误范围并且将它压入栈。

`GPUDevice.popErrorScope()`从栈顶取出一个错误范围，并且返回一个`Promise<GPUError?>`，它在
范围内的操作完成时解决。它在没有错误被捕获时解决并返回null，其他情况则解决并返回第一个在范围
内出现的错误——`GPUOutOfMemoryError`或`GPUValidationError`对象保有校验失败的信息。

当一个错误过滤与当前错误范围匹配，错误范围捕获该错误：`pushErrorScope(‘out-of-memory’)`捕
获`GPUOutOfMemoryError，pushErrorScope(‘validation’)`捕获`GPUValidationError`。过滤机制阻止
开发者，比如，在易出错的分配时意外地沉默校验错误。

当错误范围捕获一个错误，错误并没有被传入错误范围。所有错误范围只存储第一个捕获到的错
误，并且当范围被从栈中取出时返回该错误。其他后续捕获到的错误被静默地忽略。

如果一个错误没有被错误范围捕获，则从错误范围内移出。

如果栈中没有错误范围，`popErrorScope`抛出一个操作异常。

如果设备缺失，`popErrorScope`总是拒绝并抛出一个操作异常。

错误范围是每设备，每执行上下文的。也就是说，当一个`GPUDevice`第一次被传入Worker时，新的
`GPUDevice`拷贝的错误范围栈是空的。（如果一个`GPUDevice`被拷贝至一个已经存在的执行上下文
以备用，它会和这个执行上下文的其他备份共享它的错误范围状态。）

```webidl
enum GPUErrorFilter {
    "out-of-memory",
    "validation"
};

interface GPUOutOfMemoryError {};

interface GPUValidationError {
    readonly attribute DOMString message;
};

typedef (GPUOutOfMemoryError or GPUValidationError) GPUError;

partial interface GPUDevice {
    void pushErrorScope(GPUErrorFilter filter);
    Promise<GPUError?> popErrorScope();
};
```

### *易出错分配*

一个`out-of-memory`错误范围可以被用作分配失败检测。

#### Example: tryCreateBuffer

```js
async function tryCreateBuffer(device, desc) {
  device.pushErrorScope('out-of-memory');
  const buffer = device.createBuffer(desc);
  if (await device.popErrorScope() !== null) {
    return null;
  }
  return buffer;
}
```

### *等待完成*

使用`validation`错误范围可以告诉应用程序何时校验完成，但不同的是它并不意味着信号的完成。

（队列中的操作完成可以用`GPUFence`检测。）

使用`createReadyComputePipeline`和`createReadyRenderPipeline`创建管线。

#### Example: createReadyRenderPipeline

`createReadyRenderPipeline`是异步的。注意`requestAnimationFrame`的回调函数不被当作是异步
的——只有第一个任务被保证在帧被展示前发生。

```js
class Renderer {
  init() {
    const fastPipeline = createRenderPipeline(...);
    this.pipeline = fastPipeline;
  }

  prepareSlowPipeline() {
    createReadyRenderPipeline(...).then((slowPipeline) => {
      this.pipeline = slowPipeline;
    });
  }

  draw() {
    if (wantSlowPipeline) {
      prepareSlowPipeline();
    }
    // draw object with this.pipeline.
    // It switches to the "slowPipeline" when it becomes available.
  }
}

renderer.init();
const frame = () => {
  requestAnimationFrame(frame);
  renderer.draw();
};
requestAnimationFrame(frame);
```

### *测试*

测试需要有能力监测可预期的和不可预期的错误。

### 示例

```js
device.pushErrorScope('out-of-memory');
device.pushErrorScope('validation');

{
  // Do stuff that shouldn't produce errors.
  {
    device.pushErrorScope('validation');
    device.doOperationThatErrors();
    device.popErrorScope().then(error => { assert(error !== null); });
  }
  // More stuff that shouldn't produce errors
}

// Detect unexpected errors.
device.popErrorScope().then(error => { assert(error === null); });
device.popErrorScope().then(error => { assert(error === null); });
```

## *遥测*

如果一个错误不能被一个具体的错误范围所捕获，它冒泡至设备，并且可能触发`uncapturederror`事
件。

这个机制有点像一个可编程的方式去访问开发工具中出现的警告。校验错误事件中的错误报告同样
应该出现在开发工具的控制台上，以警告的方式（像WebGL中一样）。但是，一些开发工具中的警
告可能不需要触发事件，消息语句可能不一样（例如：一个细节因为安全原因被省略）。

WebGPU实现可能不会去对一个给定错误触发`uncapturederror`事件，比如它已经被触发太多次了，
多次在一行中，或多个同类错误。这和控制台警告工作方式很像，现今WebGL就是以这种方式工
作。（在结构不好的应用中，这个机制可以制止事件对系统造成重大影响。）

和错误范围不一样，`uncapturederror`事件只能在主线程（Window）事件循环中触发。

```webidl
[
    Constructor(DOMString type, GPUUncapturedErrorEventInit gpuUncapturedErrorEventInitDict),
    Exposed=Window
]
interface GPUUncapturedErrorEvent : Event {
    readonly attribute GPUError error;
};

dictionary GPUUncapturedErrorEventInit : EventInit {
    required DOMString message;
};

// TODO: is it possible to expose the EventTarget only on the main thread?
partial interface GPUDevice : EventTarget {
    [Exposed=Window]
    attribute EventHandler onuncapturederror;
};
```

#### 示例

```js
const device = await adapter.requestDevice({});
device.addEventListener('uncapturederror', (event) => {
  appendToTelemetryReport(event.message);
});
```

## 开放式问题和考量

 - 开发时是否需要同步的可编程的错误捕获？（比如，一个抛出异常或错误的选项取代异步地显露错误。异步错误处理API并不足够去弥补它。）这可能在打印式调式时需要；一个“WebGPU中断错误”可能在开发工具调试中被使用。

 - 一个同步的程序（比如，WASM移植）如何处理全部这些异步的错误？一个同步版本的`popErrorState`以及其他入口点需要暴露给Workers。（更通用一点的解决方案，同步地使用异步API同样可以解决这个问题。）

 - 需要有最大错误范围深度吗？

 - 或通过改变API强制错误范围平衡，比如：`device.withErrorScope('validation', () => { device.stuff(); /*...*/ })`?

 - 错误范围过滤器是否当为一个bitfield？

 - 错误范围过滤器是否应当有默认值？

 - 第一个错误之后的错误应当被忽略，冒泡至父错误范围，或直接给`uncapturederror`事件？
    - （当前被忽略。）

 - 不同的错误类型是否需要代码，或稍微提升测试精确性？（比如，`invalid-object`，`invalid-value`，`invalid-state`）

 - 开发者是否可以自己强制内存限制（为了模拟低内存设备）？实现是否需要自动地强制更低的内存限制（提升可靠性和可移植性）？

 - 为了帮助开发者，`GPUUncapturedErrorEvent.message`是否应包含一些利用对象调试标签的“栈追踪”？
   例如：
   ```
   <myQueue>.submit failed:
   - commands[0] (<mainColorPass>) was invalid:
   - in setIndexBuffer, indexBuffer (<mesh3.indices>) was invalid:
   - in createBuffer, desc.usage was invalid (0x89)
   ```

 - 应用程序如何处理这个例子：已分配大量可选内存，但是需要分配另外一个必须的分配（这个分配可能会因为内存溢出而失败）？它们怎样知道何时先去释放可选的内存？
    - 目前，应用程序处理这种例子必须要通过易出错的分配。
    - （我们似乎可以通过`GPUResourceHeap`提升它，一旦我们得知它的内容。）

 -是否应当尝试在`out-of-memory`状态尝试使用缓冲或纹理？（a）会导致直接设备缺失，（b）会导致设备级别操作时设备缺失（提交，映射，等等），或（c）仅仅产生一个校验错误？
    - 目前没有描述，隐含（c）。

## 已解决问题

 - 在一个有持续“使用”对象的世界：如果一个有效的命令缓冲被提交，并且它过渡至no-ops，使用状态不会更新。这样会不会由于使用校验错误导致日后的命令缓冲提交变无效？
    - 暂时解决：WebGPU不会要求明确的使用过渡。

 - 一个对象创建错误直接写入错误日志？还是仅当它传播至设备级别的操作时才写入日志？
    - 暂时解决：错误直接被写入日志。

 - 应用程序是否可以有意地创建潜在无效对象的图表，稍后再将其恢复？比如，创建一个较大的缓冲，并创建一个它的捆绑组，创建命令缓冲，然后根据缓冲是否成功被分配选择是否提交。
    - 对于未内存溢出状态，暂时解决：可以，在一个错误范围中。任何之后的错误会被压制。不知道是否有用。
    - 对于内存溢出的状态，详见内存溢出相关的其他问题。

 - 是否需要一个API暴露对象状态？
    - 已解决：不需要，但是错误在对象创建时可以被检测到。

 - 是否需要一个捕获内存溢出错误的方法，该方法不用捕获校验错误？（反之亦然？）
    - 已解决：是的，所以应用程序不要偶然地关掉校验错误。
