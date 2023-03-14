# Type alias: LoaderFunctions

Ƭ **LoaderFunctions**: `Object`

加载资源回调类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `onProgress?` | `Function` | 加载中的回调函数 **`Param`** 已加载字节数 **`Param`** 资源总字节数 **`Param`** 资源路径 |
| `onComplete?` | `Function` | 加载完成的回调函数 **`Param`** 资源路径 |
| `onError?` | `Function` | 发生加载错误的回调函数 **`Param`** Error对象 |
| `onUrl?` | `Function` | URL修改回调，可以修改原始url并返回自定义路径 **`Param`** 原始资源路径 |
| `headers?` | {} | 自定义 headers，可以修改/添加 fetch 请求头信息 |

#### Defined in

[src/engine/loader/LoaderFunctions.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/LoaderFunctions.ts#L6)
