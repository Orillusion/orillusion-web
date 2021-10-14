# 被拒绝的致命错误处理修订

[ErrorHandling.md](ErrorHandling.md)的附录文件.

本文档的修订在发布前被作者 (@kainino0x) 拒绝。
它们被保留给后来的开发者，作为以前想法的例子。

## 修订版

`GPUAdapter` 和 `GPUDevice` 是接收有关适配器和设备状态事件的事件目标。

```webidl
partial interface GPUAdapter : EventTarget {
    readonly attribute boolean isReady;
};

interface GPUAdapterLostEvent : Event {
    readonly attribute DOMString reason;
};

interface GPUAdapterReadyEvent : Event {};
```

```webidl
partial interface GPUDevice : EventTarget {};

interface GPUDeviceLostEvent : Event {
    readonly attribute boolean recoverable;
    readonly attribute DOMString reason;
};
```

如果`GPUAdapter` 的`isReady` 属性为false，`createDevice` 将失败。
当“gpu-device-lost”事件触发时，“isReady”可能会被设置为“false”。
当 `"gpu-adapter-ready"` 事件触发时，它将始终设置为 `true`。

 - `GPUAdapter` `"gpu-adapter-lost" -> GPUAdapterLostEvent`:
   不能再使用 `GPUAdapter` 的信号。
   将适配器的状态设置为“无效”。
   任何进一步的 `createDevice` 调用都将返回无效对象。

 - `GPUAdapter` `"gpu-adapter-ready" -> GPUAdapterReadyEvent`:
   可以在此适配器上创建新设备时发出信号。
   只有在以下情况下才可能触发：
      - 适配器仍然有效，
      - 适配器的 `isReady` 属性为 `true`，并且
      - 适配器的 `isReady` 属性为 `false`。

 - `GPUDevice` `"gpu-device-lost" -> GPUDeviceLostEvent`:
   不能再使用 `GPUDevice` 的信号。
   将设备及其对象的状态设置为“无效”。
   （在设备丢失后，`"gpulogentry"` 事件不会触发，因此这使得设备上的所有进一步操作都有效地无操作。）
   如果设备出现致命错误（例如意外的内存不足、崩溃或本机设备丢失），则可能会发生这种情况。
   处理此事件时，适配器的“isReady”属性可能为“false”，这表示应用程序无法创建新设备。
   此事件**可能**导致适配器的`isReady` 属性变为`false`。

### 被拒绝

此方案要求应用程序执行意大利式的咒语 ？？？spaghettical incantation，以便知道该做什么以及何时执行。 
它涉及监听所有这些事件，认真检查事件处理程序中的标志，并理解奇怪的竞争（例如适配器准备就绪然后立即丢失，或者适配器准备就绪然后出售立即丢失的设备）。