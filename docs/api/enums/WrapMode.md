# Enumeration: WrapMode

### Enumeration Members

- [Default](WrapMode.md#default)
- [Clamp](WrapMode.md#clamp)
- [Once](WrapMode.md#once)
- [Loop](WrapMode.md#loop)
- [PingPong](WrapMode.md#pingpong)
- [ClampForever](WrapMode.md#clampforever)

## Enumeration Members

### Default

• **Default** = ``0``

Read loop mode from animation clips.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L16)

___

### Clamp

• **Clamp** = ``1``

When the time reaches the end of the animation clip, the clip will automatically stop playing and the time will be reset to the beginning of the clip.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L20)

___

### Once

• **Once** = ``1``

Stop the animation when the time reaches the end.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L24)

___

### Loop

• **Loop** = ``2``

When the time reaches the end, replay from the beginning.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L28)

___

### PingPong

• **PingPong** = ``4``

Play the animation. When it reaches the endpoint, it will continue to play the last frame and never stop playing.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L32)

___

### ClampForever

• **ClampForever** = ``8``

Play the animation. When playing to the end, the animation is always in the sampling state of the last frame.

#### Defined in

[src/components/anim/curveAnim/PropertyAnimClip.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimClip.ts#L36)
