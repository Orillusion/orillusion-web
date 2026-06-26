[**@orillusion/core**](../README.md)

***

# Enumeration: WrapTimeMode

Defined in: [src/math/enum/WrapTimeMode.ts:8](https://github.com/orillusion/orillusion/blob/main/src/math/enum/WrapTimeMode.ts#L8)

Time wrap mode applied when sampling beyond the time range.
- PingPong: value oscillates min -> max -> min.
- Repeat: value = value % repeatSpace.
- Clamp: value = max(min(value, 1), 0).

## Enumeration Members

### PingPong

> **PingPong**: `0`

Defined in: [src/math/enum/WrapTimeMode.ts:9](https://github.com/orillusion/orillusion/blob/main/src/math/enum/WrapTimeMode.ts#L9)

***

### Repeat

> **Repeat**: `1`

Defined in: [src/math/enum/WrapTimeMode.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/enum/WrapTimeMode.ts#L10)

***

### Clamp

> **Clamp**: `2`

Defined in: [src/math/enum/WrapTimeMode.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/enum/WrapTimeMode.ts#L11)
