[**@orillusion/core**](../README.md)

***

# Type Alias: EngineSettingInit

> **EngineSettingInit** = `DeepPartial`\<[`EngineSetting`](EngineSetting.md)\>

Defined in: [src/Engine3D.ts:32](https://github.com/orillusion/orillusion/blob/main/src/Engine3D.ts#L32)

Recursive partial — allows passing any subset of EngineSetting to
 `Engine3D.init({ setting: ... })`. Functions and class instances
 (Color, HDRTextureCube, ...) are passed through as-is.
