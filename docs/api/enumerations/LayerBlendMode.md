[**@orillusion/core**](../README.md)

***

# Enumeration: LayerBlendMode

Defined in: [src/components/anim/graph/AnimationLayer.ts:3](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L3)

## Enumeration Members

### Override

> **Override**: `0`

Defined in: [src/components/anim/graph/AnimationLayer.ts:8](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L8)

Replace the underlying pose with this layer's pose, blended by weight.
Out = lerp(base, layer, weight)

***

### Additive

> **Additive**: `1`

Defined in: [src/components/anim/graph/AnimationLayer.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L14)

Add this layer's delta-from-rest on top of the base pose.
Out = base + (layer - rest) * weight
Useful for facial expressions, breathing, aim offsets.
