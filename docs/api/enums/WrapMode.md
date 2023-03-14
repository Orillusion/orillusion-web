# Enumeration: WrapMode

角色动画播放完成后四种接续模式
|名称|描述|
|:---:|:---:|
|Default| 从动画剪辑中读取循环模式。|
|Clamp| 当时间到达动画片段的末尾时，片段将自动停止播放，时间将重置为片段的开头。|
|Once| 当时间播放到末尾的时候停止动画的播放。|
|Loop| 当时间播放到末尾的时候重新播放从开始播放。|
|PingPong| 播放动画。当它到达终点时，它将继续播放最后一帧，并且从不停止播放。|
|ClampForever| 播放动画。当播放到结尾的时候，动画总是处于最后一帧的采样状态。|


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

从动画剪辑中读取循环模式。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L25)

___

### Clamp

• **Clamp** = ``1``

当时间到达动画片段的末尾时，片段将自动停止播放，时间将重置为片段的开头。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L29)

___

### Once

• **Once** = ``1``

当时间播放到末尾的时候停止动画的播放。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L33)

___

### Loop

• **Loop** = ``2``

当时间播放到末尾的时候重新播放从开始播放。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L37)

___

### PingPong

• **PingPong** = ``4``

播放动画。当它到达终点时，它将继续播放最后一帧，并且从不停止播放。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L41)

___

### ClampForever

• **ClampForever** = ``8``

播放动画。当播放到结尾的时候，动画总是处于最后一帧的采样状态。

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimClip.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimClip.ts#L45)
