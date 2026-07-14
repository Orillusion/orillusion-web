[**@orillusion/core**](../README.md)

***

# Variable: CLUSTER\_LIGHTING\_BUFFER

> `const` **CLUSTER\_LIGHTING\_BUFFER**: `"_ClusterLightingBuffer"` = `'_ClusterLightingBuffer'`

Defined in: [src/gfx/renderJob/graph/passes/ClusterLightingPass.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ClusterLightingPass.ts#L19)

Published handle name for the cluster lighting buffer. Consumers
(ColorPass, post volumetric passes) read this name from the graph
pool instead of reaching into a renderer field.
