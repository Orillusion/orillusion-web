# Class: CSMFrustum

csm value


### Constructors

- [constructor](CSMFrustum.md#constructor)

### Properties

- [cascadCount](CSMFrustum.md#cascadcount)
- [cascadSplit](CSMFrustum.md#cascadsplit)
- [nearCorners](CSMFrustum.md#nearcorners)
- [farCorners](CSMFrustum.md#farcorners)
- [near\_0](CSMFrustum.md#near_0)
- [near\_1](CSMFrustum.md#near_1)
- [near\_2](CSMFrustum.md#near_2)
- [near\_3](CSMFrustum.md#near_3)
- [far\_0](CSMFrustum.md#far_0)
- [far\_1](CSMFrustum.md#far_1)
- [far\_2](CSMFrustum.md#far_2)
- [far\_3](CSMFrustum.md#far_3)
- [nearPoint](CSMFrustum.md#nearpoint)

### Methods

- [update](CSMFrustum.md#update)

## Constructors

### constructor

• **new CSMFrustum**()

## Properties

### cascadCount

• **cascadCount**: `number` = `4`

设置多阴影采样的值

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L14)

___

### cascadSplit

• **cascadSplit**: `number`[]

这里是可配置的csm值

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L18)

___

### nearCorners

• **nearCorners**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L20)

___

### farCorners

• **farCorners**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L26)

___

### near\_0

• **near\_0**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L33)

___

### near\_1

• **near\_1**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L39)

___

### near\_2

• **near\_2**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L45)

___

### near\_3

• **near\_3**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L51)

___

### far\_0

• **far\_0**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L58)

___

### far\_1

• **far\_1**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L64)

___

### far\_2

• **far\_2**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L70)

___

### far\_3

• **far\_3**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L76)

___

### nearPoint

• **nearPoint**: `Object` = `{}`

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L83)

## Methods

### update

▸ **update**(`camera`, `lightDir`): [`Vector3`](Vector3.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |
| `lightDir` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/passRenderer/shadow/csm/CSMFrustum.ts#L163)
