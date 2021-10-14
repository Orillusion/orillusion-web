# 缓冲操作

这篇文章描述了GPUBuffer对象可以直接进行的操作。它们分别是`mapWriteAsync`, `mapReadAsyc`, 和`unmap`, 都是内存映射相关的操作。

## 准备工作：缓冲/非缓冲命令

假设这里有单个队列，WebGPU有两种类型的命令：

 - “缓冲命令”：任何`GPUCommandBuffer`、`GPUComputePassEncoder`或`GPURenderPassEncoder`的命令。
 - “非缓冲命令”：所有其他命令。

假设这里有单个队列，非缓冲命令有一个整体的顺序：它们都按照命令发起的顺序原子地执行。
`GPUQueue.submit` is special because it atomically executes all the commands stored in its `commands` argument.

## 缓冲映射

### `MAP_READ`和`MAP_WRITE`

`MAP_READ`和`MAP_WRITE`这两个缓冲创建使用的值需要被指定，以创建可映射至读写的缓冲。另外的一个校验限制就是`MAP_READ`和`MAP_WRITE`无法组合使用。

```webidl
partial interface GPUBufferUsage {
    const u32 MAP_READ = 1;
    const u32 MAP_WRITE = 2;
}
```

**TODO**: `MAP_WRUTE`是否仅在只读时被允许？
它允许只在创建时清理缓冲以及不在每次都清理。

### `GPUBuffer`状态机

缓冲拥有一个内部状态机，其中有三个不同的状态：

 - **未映射**: 此缓冲可以被用作队列提交。
 - **已映射**: 映射操作以及随后的unmap操作后，此时缓冲不可以被用作队列提交。
 - **被销毁**: 在发起GPUBuffer.destroy命令后，此时做任何缓冲操作都会报错。

以下缓冲状态是缓冲状态机的简略概要。
通过GPUDevice.createBuffer创建的缓冲初始时为未映射的状态。
通过GPUDevice.createBufferMapped创建的缓冲初始时为已映射的状态。

状态转换如下：

 - 未映射至被销毁：通过`GPUBuffer.destroy`。
 - 已映射至被销毁：通过`GPUBuffer.destroy`。
 - 未映射至已映射：通过成功执行的`mapRedAsync`或`mapWriteAsync`命令
 - 已映射至未映射：通过成功执行的`unmap`命令。

### 缓冲映射操作

缓冲映射操作如下：

```webidl
partial interface GPUBuffer {
    Promise<ArrayBuffer> mapReadAsync();
    Promise<ArrayBuffer> mapWriteAsync();
};
```

这些函数返回一个“映射”的promise——一个表示读（`mapReadAsync`）、写（`mapWriteAsync`）缓冲内容的`ArrayBuffer`。
这个Promise会在后续非缓冲命令结束之前被解决。执行成功之后缓冲则进入已映射状态。

应当满足下列条件，否则函数将执行失败，会返回一个拒绝的promise：

 - `buffer`已经被`mapReadAsync`的`MAP_READ`和`mapWriteAsync`的`MAP_WRITE`使用标记创建。
 - `buffer`必须在未映射的状态下。

一个缓冲可以被取消映射通过`unmap`：

```webidl
partial interface GPUBuffer {
    void unmap();
};
```

成功执行之后缓冲即处于未映射的状态。任何关联的`ArrayBuffer`都是中性的，所有等待的映射promise都会被拒绝。

应当满足下列条件，否则取消映射的方法将执行失败：

 - `buffer`应当已经通过`MAP_READ`或`MAP_WRITE`被创建。
 - `buffer`应当未处于被销毁的状态（这意味着可以对未映射缓冲使用`unmap`方法）。

对一个缓冲调用`GPUBuffer.destroy`方法，带有`MAP_READ`或`MAP_WRITE`使用标志，包含一个隐形的`GPUBuffer.unmap`方法。
注意映射没有在GPUBuffer垃圾回收时被撤销，这意味着映射保有一个缓冲的引用。

映射内容的结果取决于创建它使用的方法：
 - 使用`mapReadAsync`创建的映射表示在调用该方法之前所有的非缓冲操作之后，缓冲的内容。
   映射被分离时不会有事情发生。
 - 使用mapWriteAsync创建的映射被填入零。
   当它们被撤销时，就相当于调用`buffer.setSubData(0, mapping)`。

### 创建已映射的缓冲

一个已被映射的缓冲同样可以被创建：

```webidl
partial interface GPUDevice {
    (GPUBuffer, ArrayBuffer) createBufferMapped(GPUBufferDescriptor descriptor);
};
```

`GPUDevice.createBufferMapped`返回一个已映射状态的缓冲以及一个表示全部缓冲范围的写入映射。

这些进入点不需要指定特定的`MAP_WRITE`使用标记。`MAP_WRITE`使用标记当缓冲被重新映射后被指定。

映射开始时被零填充。

## Examples

### `GPUBuffer.mapReadAsync`

```js
const readPixelsBuffer = device.createBuffer({
    size: 4,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// Commands copying a pixel from a texture into readPixelsBuffer are submitted

readPixelsBuffer.mapReadAsync().then((data) => {
    checkPixelValue(data);

    // Unmap if we want to reuse the buffer
    readPixelsBuffer.unmap();
});
```

### `GPUBuffer.mapWriteAsync`

```js
// model is some 3D framework resource.
const size = model.computeVertexBufferSize();

const stagingVertexBuffer = device.createBuffer({
    size: size,
    usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
});

stagingVertexBuffer.mapWriteAsync().then((stagingData) => {
    model.decompressVerticesIn(stagingData);

    stagingVertexBuffer.unmap();

    // Enqueue copy from the staging buffer to the real vertex buffer.
});
```

### 更新数据至已有缓冲（很像WebGL的`bufferSubData`）

```js
function bufferSubData(device, destBuffer, destOffset, srcArrayBuffer) {
    const byteCount = srcArrayBuffer.byteLength;
    const [srcBuffer, arrayBuffer] = device.createBufferMapped({
        size: byteCount,
        usage: GPUBufferUsage.COPY_SRC
    });
    new Uint8Array(arrayBuffer).set(new Uint8Array(srcArrayBuffer)); // memcpy
    srcBuffer.unmap();

    const encoder = device.createCommandEncoder();
    encoder.copyBufferToBuffer(srcBuffer, 0, destBuffer, destOffset, byteCount);
    const commandBuffer = encoder.finish();
    const queue = device.defaultQueue;
    queue.submit([commandBuffer]);

    srcBuffer.destroy();
}

```

像通常一样，通过更少的缓冲分批处理每一帧的上传减少负载。

应用程序可以任意使用自己的启发式方法去分批或反复利用上传缓冲:

```js
function AutoRingBuffer(device, chunkSize) {
    const queue = device.defaultQueue;
    let availChunks = [];

    function Chunk() {
        const size = chunkSize;
        const [buf, initialMap] = this.device.createBufferMapped({
            size: size,
            usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
        });

        let mapTyped;
        let pos;
        let enc;
        this.reset = function(mappedArrayBuffer) {
            mapTyped = new Uint8Array(mappedArrayBuffer);
            pos = 0;
            enc = device.createCommandEncoder({});
            if (size == chunkSize) {
                availChunks.push(this);
            }
        };
        this.reset(initialMap);

        this.push = function(destBuffer, destOffset, srcArrayBuffer) {
            const byteCount = srcArrayBuffer.byteLength;
            const end = pos + byteCount;
            if (end > size)
                return false;
            mapTyped.set(new Uint8Array(srcArrayBuffer), pos);
            enc.copyBufferToBuffer(buf, pos, destBuffer, destOffset, byteCount);
            pos = end;
            return true;
        };

        this.flush = async function() {
            const cb = enc.finish();
            queue.submit([cb]);
            const newMap = await buf.mapWriteAsync();
            this.reset(newMap);
        };

        this.destroy = function() {
            buf.destroy();
        };
    };

    this.push = function(destBuffer, destOffset, srcArrayBuffer) {
        if (availChunks.length) {
            const chunk = availChunks[0];
            if (chunk.push(destBuffer, destOffset, srcArrayBuffer))
                return;
            chunk.flush();
            this.destroy();

            while (true) {
                chunkSize *= 2;
                if (chunkSize >= srcArrayBuffer.byteLength)
                    break;
            }
        }

        new Chunk();
        availChunks[0].push(destBuffer, destOffset, srcArrayBuffer);
    };

    this.flush = function() {
        if (availChunks.length) {
            availChunks[0].flush();
            availChunks.shift();
        }
    };

    this.destroy = function() {
        availChunks.forEach(x => x.destroy());
        availChunks = [];
    };
};
```
