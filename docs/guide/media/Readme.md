# 媒体扩展

`Orillusion` 提供了 [@orillusion/media-extention](/media-extention/) 扩展包对多媒体进行支持，可以方便的加载展示图片、视频和音频，并提供相应的处理能力。请注意需要单独安装，安装之后使用方式与普通的贴图，材质或组件类似。

## 安装
跟引擎方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入物理插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/media-extention --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/media-extention"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { VideoMaterial } from "https://unpkg.com/@orillusion/media-extention/dist/media.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `VideoMaterial` 等模块：
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/media-extention/dist/media.umd.js"></script>
<script>
  const {Engine3D, VideoMaterial} = Orillusion
</script>
```

## 媒体材质

目前 [media-extention](/media-extention/) 支持以下几种类型的材质：

| 材质 | 描述 |
| --- | --- |
| [ImageMaterial](/media-extention/classes/ImageMaterial.md) | 不计算光照，仅通过Image像素颜色渲染的基础材质 |
| [VideoMaterial](/media-extention/classes/VideoMaterial.md) | 不计算光照，仅通过Video像素颜色渲染的基础材质 |
| [ChromaKeyMaterial](/media-extention/classes/ChromaKeyMaterial.md) | 不计算光照，仅通过Video像素颜色渲染的基础材质，并且过滤了背景色 |

## 音频组件

除了图片和视频， [media-extention](/media-extention/) 还添加了常用的音频组件：

| 组件 | 描述 |
| --- | --- |
| [AudioListener](/media-extention/classes/AudioListener.md) | 音频接收组件，需要与下面两个组件配合使用 |
| [StaticAudio](/media-extention/classes/StaticAudio.md) | 静态音频组件，声音大小与位置无关 |
| [PositionAudio](/media-extention/classes/PositionAudio.md) | 动态音频组件，声音大小随着音源位置变化 |