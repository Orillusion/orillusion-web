# Type alias: LoaderFunctions

Ƭ **LoaderFunctions**: `Object`

Loader callback functions

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `onProgress?` | `Function` | The callback function in the load **`Param`** Number of bytes loaded **`Param`** Total number of bytes of resources **`Param`** resources URL |
| `onComplete?` | `Function` | Load the completed callback function **`Param`** resources URL |
| `onError?` | `Function` | The callback function for which a load error occurred **`Param`** Error object |
| `onUrl?` | `Function` | The URL modification callback allows you to modify the original url and return a custom path **`Param`** Original resource URL |
| `headers?` | {} | Customize headers, you can modify/add fetch header information |

#### Defined in

[src/loader/LoaderFunctions.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L5)
