# Class: ClusterLightingBuffer


### Properties

- [clusterBuffer](ClusterLightingBuffer.md#clusterbuffer)
- [lightAssignBuffer](ClusterLightingBuffer.md#lightassignbuffer)
- [assignTableBuffer](ClusterLightingBuffer.md#assigntablebuffer)
- [clustersUniformBuffer](ClusterLightingBuffer.md#clustersuniformbuffer)

### Constructors

- [constructor](ClusterLightingBuffer.md#constructor)

### Methods

- [update](ClusterLightingBuffer.md#update)

## Properties

### clusterBuffer

• **clusterBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L6)

___

### lightAssignBuffer

• **lightAssignBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L7)

___

### assignTableBuffer

• **assignTableBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L8)

___

### clustersUniformBuffer

• **clustersUniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L9)

## Constructors

### constructor

• **new ClusterLightingBuffer**(`numClusters`, `maxNumLightsPerCluster`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numClusters` | `number` |
| `maxNumLightsPerCluster` | `number` |

#### Defined in

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L11)

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

[src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L22)
