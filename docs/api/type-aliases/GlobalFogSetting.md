[**@orillusion/core**](../README.md)

***

# Type Alias: GlobalFogSetting

> **GlobalFogSetting** = `object`

Defined in: [src/setting/post/GlobalFogSetting.ts:7](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L7)

Global fog effect setting

## Properties

### debug

> **debug**: `any`

Defined in: [src/setting/post/GlobalFogSetting.ts:8](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L8)

***

### enable

> **enable**: `boolean`

Defined in: [src/setting/post/GlobalFogSetting.ts:12](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L12)

enable

***

### fogType

> **fogType**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:17](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L17)

type of fog:
0: linear exponent 2: squar exponent

***

### fogHeightScale

> **fogHeightScale**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:21](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L21)

Setting the Influence of Height on Fog

***

### start

> **start**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:25](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L25)

If the distance between the object and the camera is set as distance, the fog concentration will be linear interpolation between start and end

***

### end

> **end**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:29](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L29)

If the distance between the object and the camera is set as distance, the fog concentration will be linear interpolation between start and end

***

### density

> **density**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:33](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L33)

When the type is exponential square fog, the fog concentration coefficient is added

***

### ins

> **ins**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:37](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L37)

The effect of setting height on fog (working together with height)

***

### skyFactor

> **skyFactor**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:41](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L41)

mix fog color with sky color

***

### skyRoughness

> **skyRoughness**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:45](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L45)

use mipmap level

***

### overrideSkyFactor

> **overrideSkyFactor**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:49](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L49)

factor effect the sky

***

### fogColor

> **fogColor**: [`Color`](../classes/Color.md)

Defined in: [src/setting/post/GlobalFogSetting.ts:53](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L53)

fog color

***

### falloff

> **falloff**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:55](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L55)

***

### rayLength

> **rayLength**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:56](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L56)

***

### scatteringExponent

> **scatteringExponent**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:57](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L57)

***

### dirHeightLine

> **dirHeightLine**: `number`

Defined in: [src/setting/post/GlobalFogSetting.ts:58](https://github.com/orillusion/orillusion/blob/main/src/setting/post/GlobalFogSetting.ts#L58)
