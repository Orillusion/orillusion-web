[**@orillusion/core**](../README.md)

***

# Enumeration: LODMode

Defined in: [src/components/renderer/LODGroup.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L14)

How `LODGroup` measures "how big this object is on screen".

## Enumeration Members

### ScreenSize

> **ScreenSize**: `0`

Defined in: [src/components/renderer/LODGroup.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L21)

Unity-style: the ratio of the group's bounding-sphere diameter to the
viewport height (0..1). Resolution- and FOV-aware, so a level switches
at the same *apparent* size regardless of camera lens or distance.
Level thresholds are that ratio (e.g. 0.5, 0.15, 0.03).

***

### Distance

> **Distance**: `1`

Defined in: [src/components/renderer/LODGroup.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L26)

three.js-style: plain world-space distance from the camera to the
group's bound center. Level thresholds are distances (e.g. 20, 60, 150).
