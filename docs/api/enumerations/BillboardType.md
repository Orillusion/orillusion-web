[**@orillusion/core**](../README.md)

***

# Enumeration: BillboardType

Defined in: [src/components/BillboardComponent.ts:10](https://github.com/orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L10)

Billboard orientation mode controlling which axes face the camera.

## Enumeration Members

### None

> **None**: `0`

Defined in: [src/components/BillboardComponent.ts:12](https://github.com/orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L12)

No billboard behavior — the object keeps its own transform rotation.

***

### BillboardY

> **BillboardY**: `9`

Defined in: [src/components/BillboardComponent.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L14)

Rotate only around the Y axis to face the camera (e.g. trees, characters).

***

### BillboardXYZ

> **BillboardXYZ**: `10`

Defined in: [src/components/BillboardComponent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L16)

Rotate freely on all axes to fully face the camera (e.g. particles, sprites).
