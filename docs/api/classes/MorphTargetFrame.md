[**@orillusion/core**](../README.md)

***

# Class: MorphTargetFrame

Defined in: [src/components/anim/morphAnim/MorphTargetFrame.ts:66](https://github.com/orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetFrame.ts#L66)

A single frame of blend-shape capture data (e.g. from ARKit): the
per-target influence weights (`texture`) plus the head/eye transforms.

## Constructors

### Constructor

> **new MorphTargetFrame**(): `MorphTargetFrame`

#### Returns

`MorphTargetFrame`

## Properties

### texture

> **texture**: `texture`

Defined in: [src/components/anim/morphAnim/MorphTargetFrame.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetFrame.ts#L68)

Per-blend-shape influence weights keyed by ARKit blend-shape name.

***

### transform

> **transform**: `transform`

Defined in: [src/components/anim/morphAnim/MorphTargetFrame.ts:70](https://github.com/orillusion/orillusion/blob/main/src/components/anim/morphAnim/MorphTargetFrame.ts#L70)

Head and eye transforms captured for this frame.
