# Enumeration: WrapTimeMode

Time Warp Mode

**`Ping Pong`**

value min -> max -> min

**`Repeat`**

value = value % repeatSpace

**`Clamp`**

value = max(min( value ,  1 ) , 0 )

### Enumeration Members

- [PingPong](WrapTimeMode.md#pingpong)
- [Repeat](WrapTimeMode.md#repeat)
- [Clamp](WrapTimeMode.md#clamp)

## Enumeration Members

### PingPong

• **PingPong** = ``0``

#### Defined in

[src/math/AnimationCurve.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L10)

___

### Repeat

• **Repeat** = ``1``

#### Defined in

[src/math/AnimationCurve.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L11)

___

### Clamp

• **Clamp** = ``2``

#### Defined in

[src/math/AnimationCurve.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L12)
