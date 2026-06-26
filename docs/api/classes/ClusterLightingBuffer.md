[**@orillusion/core**](../README.md)

***

# Class: ClusterLightingBuffer

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L13)

GPU buffers backing the clustered lighting pass: the per-cluster AABB
bounds, the flat light-index assignment list, the per-cluster
start/count table into that list, and the uniform block describing the
cluster grid. Shared by the compute pass that fills them and the
fragment shaders that read them.

## Constructors

### Constructor

> **new ClusterLightingBuffer**(`numClusters`, `maxNumLightsPerCluster`): `ClusterLightingBuffer`

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L23)

#### Parameters

##### numClusters

`number`

##### maxNumLightsPerCluster

`number`

#### Returns

`ClusterLightingBuffer`

## Properties

### clusterBuffer

> **clusterBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L15)

Per-cluster bounds (two vec4 per cluster).

***

### lightAssignBuffer

> **lightAssignBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L17)

Flat list of light indices assigned across all clusters.

***

### assignTableBuffer

> **assignTableBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L19)

Per-cluster (start, count) into [lightAssignBuffer](#lightassignbuffer).

***

### clustersUniformBuffer

> **clustersUniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L21)

Uniform block describing the cluster grid and screen/depth params.

## Methods

### update()

> **update**(`width`, `height`, `clusterPix`, `clusterTileX`, `clusterTileY`, `clusterTileZ`, `numLights`, `maxNumLightsPerCluster`, `near`, `far`): `void`

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts#L35)

Upload the current grid, screen size, light count and near/far into the uniform buffer.

#### Parameters

##### width

`number`

##### height

`number`

##### clusterPix

`number`

##### clusterTileX

`number`

##### clusterTileY

`number`

##### clusterTileZ

`number`

##### numLights

`number`

##### maxNumLightsPerCluster

`number`

##### near

`number`

##### far

`number`

#### Returns

`void`
