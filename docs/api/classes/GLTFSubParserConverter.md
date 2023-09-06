# Class: GLTFSubParserConverter

### Constructors

- [constructor](GLTFSubParserConverter.md#constructor)

### Methods

- [convertNodeToObject3D](GLTFSubParserConverter.md#convertnodetoobject3d)

## Constructors

### constructor

• **new GLTFSubParserConverter**(`subParser`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | `GLTFSubParser` |

#### Defined in

[src/loader/parser/gltf/GLTFSubParserConverter.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserConverter.ts#L31)

## Methods

### convertNodeToObject3D

▸ **convertNodeToObject3D**(`nodeInfo`, `parentNode`): `Promise`<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeInfo` | `GLTF_Node` |
| `parentNode` | `any` |

#### Returns

`Promise`<[`Object3D`](Object3D.md)\>

#### Defined in

[src/loader/parser/gltf/GLTFSubParserConverter.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/gltf/GLTFSubParserConverter.ts#L36)
