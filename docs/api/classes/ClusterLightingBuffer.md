# Class: ClusterLightingBuffer

### Constructors

- [constructor](ClusterLightingBuffer.md#constructor)

### Properties

- [clusterBuffer](ClusterLightingBuffer.md#clusterbuffer)
- [lightAssignBuffer](ClusterLightingBuffer.md#lightassignbuffer)
- [assignTableBuffer](ClusterLightingBuffer.md#assigntablebuffer)
- [clustersUniformBuffer](ClusterLightingBuffer.md#clustersuniformbuffer)

### Methods

- [update](ClusterLightingBuffer.md#update)

## Constructors

### constructor

• **new ClusterLightingBuffer**(`numClusters`, `maxNumLightsPerCluster`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numClusters` | `number` |
| `maxNumLightsPerCluster` | `number` |

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L10)

## Properties

### clusterBuffer

• **clusterBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L5)

___

### lightAssignBuffer

• **lightAssignBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L6)

___

### assignTableBuffer

• **assignTableBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L7)

___

### clustersUniformBuffer

• **clustersUniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L8)

## Methods

### update

▸ **update**(`width`, `height`, `clusterPix`, `clusterTileX`, `clusterTileY`, `clusterTileZ`, `maxNumLights`, `maxNumLightsPerCluster`, `near`, `far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `clusterPix` | `number` |
| `clusterTileX` | `number` |
| `clusterTileY` | `number` |
| `clusterTileZ` | `number` |
| `maxNumLights` | `number` |
| `maxNumLightsPerCluster` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L21)
