# EngineSetting
通过 [EngineSetting](/api/types/EngineSetting) 可以设置引擎的一些常见配置，`EngineSetting` 主要由几个不同配置组成，包括拾取模式，渲染管线，阴影设置，后处理设置，天空盒设置等等。

## 基础使用
引擎的配置在**初始化时**通过 `Engine3D.init({ setting })` 传入，`setting` 是一个可选的深度局部对象，只需写出要覆盖的字段，其余使用默认值。

例如设置场景中可支持的最大灯光数量、开启对数深度：
```ts
const engine = await Engine3D.init({
  setting: {
    light: { maxLight: 1024 },   // 最大灯光数量
    render: { useLogDepth: true } // 启动对数深度
  }
});
```

初始化完成后，运行期可变的配置也可以通过实例的 `engine.setting` 继续读写：
```ts
engine.setting.render.postProcessing.bloom.intensity = 0.5;
```

::: tip 从旧版本迁移
早期版本通过全局静态的 `Engine3D.setting.xxx = ...` 在初始化前赋值。现在配置随实例，请改为在 `Engine3D.init({ setting })` 中传入，或在拿到实例后通过 `engine.setting.xxx` 设置。
:::

## 拾取模式
引擎支持两种拾取模式，一种是 `像素级拾取 (pixel)`，一种是 `包围盒拾取 (bound)`。

引擎默认配置是 `bound` 模式， 包围盒拾取通过计算模型的AABB包围盒来拾取，精度不如 `pixel` 模式，但是计算更快，性能更好。包围盒拾取的模式可以通过引擎配置中的 `pick` 属性来设置。

```ts
const engine = await Engine3D.init({
  setting: {
    pick: { enable: true, mode: 'bound' }
  }
});
```

像素级拾取模式同样可以通过 `pick` 属性来设置。

```ts
const engine = await Engine3D.init({
  setting: {
    pick: { enable: true, mode: 'pixel' }
  }
});
```

详细用法请参考 [拾取事件](/guide/interaction/pickfire)

## 后处理设置
引擎支持多种后处理，包括各种抗锯齿，bloom，环境光遮蔽等等，可以通过 `render` 配置中的 `postProcessing` 属性来设置。

例如设置 `bloom` 后处理效果：
```ts
const engine = await Engine3D.init({
  setting: {
    render: {
      postProcessing: {
        bloom: { enable: true, intensity: 0.5 }
      }
    }
  }
});
```
更多后处理相关设置，详见 [后处理](/guide/advanced/posteffect)

## 阴影设置
设置阴影的方法和属性，可以通过引擎配置中的 `shadow` 属性来设置。

```ts
const engine = await Engine3D.init({
  setting: {
    shadow: {
      enable: true,      // 开启阴影
      type: 'SOFT',      // 软阴影类型
      shadowSize: 2048,  // 阴影贴图大小
      shadowBound: 20,   // 阴影区域的世界尺寸
      shadowBias: 0.01   // 阴影偏移量
    }
  }
});
```
详见 [阴影](/guide/graphics/shadow)

## 全局光照设置
通过配置中的 `gi` 属性来设置全局光照。
```ts
const engine = await Engine3D.init({
  setting: {
    gi: {
      enable: true,
      probeYCount: 6,
      probeXCount: 6,
      probeZCount: 6,
      offsetX: 0,
      offsetY: 10,
      offsetZ: 0
      // ...
    }
  }
});
```
详见 [全局光照](/guide/advanced/gi)
