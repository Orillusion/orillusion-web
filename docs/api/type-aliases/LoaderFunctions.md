[**@orillusion/core**](../README.md)

***

# Type Alias: LoaderFunctions

> **LoaderFunctions** = `object`

Defined in: [src/loader/LoaderFunctions.ts:5](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L5)

Loader callback functions

## Properties

### onProgress?

> `optional` **onProgress?**: `Function`

Defined in: [src/loader/LoaderFunctions.ts:12](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L12)

The callback function in the load

#### Param

**receivedLength**

Number of bytes loaded

#### Param

**contentLength**

Total number of bytes of resources

#### Param

**url**

resources URL

***

### onComplete?

> `optional` **onComplete?**: `Function`

Defined in: [src/loader/LoaderFunctions.ts:18](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L18)

Load the completed callback function

#### Param

**url**

resources URL

***

### onError?

> `optional` **onError?**: `Function`

Defined in: [src/loader/LoaderFunctions.ts:24](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L24)

The callback function for which a load error occurred

#### Param

**error**

Error object

***

### onUrl?

> `optional` **onUrl?**: `Function`

Defined in: [src/loader/LoaderFunctions.ts:31](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L31)

The URL modification callback allows you to modify the original url and return a custom path

#### Param

**url**

Original resource URL

#### Returns

The new URL after modification

***

### headers?

> `optional` **headers?**: `object`

Defined in: [src/loader/LoaderFunctions.ts:36](https://github.com/orillusion/orillusion/blob/main/src/loader/LoaderFunctions.ts#L36)

Customize headers, you can modify/add fetch header information
