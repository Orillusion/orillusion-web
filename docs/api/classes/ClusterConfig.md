[**@orillusion/core**](../README.md)

***

# Class: ClusterConfig

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts:9](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts#L9)

Cluster grid dimensions for the Forward+ clustered lighting pass. The
view frustum is divided into clusterTileX × clusterTileY screen-space
tiles across clusterTileZ depth slices; each cluster holds the list of
lights affecting it.

## Constructors

### Constructor

> **new ClusterConfig**(): `ClusterConfig`

#### Returns

`ClusterConfig`

## Properties

### clusterTileX

> `static` **clusterTileX**: `number` = `16`

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts#L11)

Number of cluster tiles across the screen width.

***

### clusterTileY

> `static` **clusterTileY**: `number` = `16`

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts#L13)

Number of cluster tiles across the screen height.

***

### clusterTileZ

> `static` **clusterTileZ**: `number` = `32`

Defined in: [src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/cluster/ClusterConfig.ts#L15)

Number of depth slices along the view direction.
