# EngineSetting
通过 [EngineSetting](/api/types/EngineSetting) 可以设置引擎的一些常见配置，`EngineSetting` 主要由几个不同配置组成，包括拾取模式，渲染管线，阴影设置，后处理设置，天空盒设置等等。

## 基础使用
在引擎初始化前，需要先设置引擎的配置，可以通过 `Engine3D` 的 `setting` 的属性来设置。

例如设置场景中可支持的最大灯光数量：
```ts
// 最大灯光数量
Engine3D.setting.light.maxLight = 1024;
// 先配置，后初始化
await Engine3D.init();
```

## 拾取模式
引擎支持两种拾取模式，一种是 `像素级拾取 (pixel)`，一种是 `包围盒拾取 (bound)`。

引擎默认配置是 `bound` 模式， 包围盒拾取通过计算模型的AABB包围盒来拾取，精度不如 `pixel` 模式，但是计算更快，性能更好。包围盒拾取的模式可以通过引擎配置中的 `pick` 属性来设置。

```ts
Engine3D.setting.pick.enable = true;
Engine3D.setting.pick.mode = `bound`;
await Engine3D.init();
```

像素级拾取模式同样可以通过 `pick` 属性来设置。

```ts
Engine3D.setting.pick.enable = true;
Engine3D.setting.pick.mode = `pixel`;
await Engine3D.init();
```

详细用法请参考 [拾取事件](/guide/interaction/pickfire)

## 后处理设置
引擎支持多种后处理，包括各种抗锯齿，bloom，环境光遮蔽等等，可以通过 `render` 配置中的 `postProcessing` 属性来设置。

例如设置 `bloom` 后处理效果：
```ts
// 开启 bloom 
Engine3D.setting.render.postProcessing.bloom.enable = true;
// 设置强度
Engine3D.setting.render.postProcessing.bloom.intensity = 0.5;
```
更多后处理相关设置，详见 [后处理](/guide/advanced/posteffect)

## 阴影设置
设置阴影的方法和属性，可以通过引擎配置中的 `shadow` 属性来设置。

```ts
Engine3D.setting.shadow.enable = true; // 开启阴影
Engine3D.setting.shadow.type = `SOFT`; // 软阴影类型
Engine3D.setting.shadow.shadowSize = 2048; // 阴影贴图大小
```
详见 [阴影](/guide/graphics/shadow)

<!-- ## 全局光照设置
通过配置中的 `gi` 属性来设置全局光照。
```ts
Engine3D.setting.gi.enable = true;
```
详见 [全局光照](/guide/advanced/gi) -->

