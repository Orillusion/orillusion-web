[**@orillusion/core**](../README.md)

***

# Enumeration: WrapMode

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:12](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L12)

## Enumeration Members

### Default

> **Default**: `0`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L16)

Read loop mode from animation clips.

***

### Clamp

> **Clamp**: `1`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L20)

When the time reaches the end of the animation clip, the clip will automatically stop playing and the time will be reset to the beginning of the clip.

***

### Once

> **Once**: `1`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L24)

Stop the animation when the time reaches the end.

***

### Loop

> **Loop**: `2`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:28](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L28)

When the time reaches the end, replay from the beginning.

***

### PingPong

> **PingPong**: `4`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L32)

Play the animation. When it reaches the endpoint, it will continue to play the last frame and never stop playing.

***

### ClampForever

> **ClampForever**: `8`

Defined in: [src/components/anim/curveAnim/PropertyAnimClip.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L36)

Play the animation. When playing to the end, the animation is always in the sampling state of the last frame.
