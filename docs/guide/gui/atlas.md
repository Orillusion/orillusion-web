# Atlas

Atlas封装了一组精灵对象在打包成为一张图集纹理中的数据；通过Engine3D.res.loadFont加载位图文本图集。

> 引擎当前使用Unity工具导出atlas作为数据源

```ts
import { Engine3D } from '@orillusion/core';
// 加载atlas文件
await Engine3D.res.loadAtlas('atlas/UI_atlas.json');
// 使用atlas中的一个精灵
this.image.texture = Engine3D.res.getSubTexture('logo');
```

# Font
Font模块中使用工具Fontmin和bmfont，生成字符集json文件和图片素材，作为源素材被引擎解析成为Atlas数据供TextField使用。

> 文本组件依赖于字体图集，你需要先加载字体图集文件到引擎中，然后文本才能被正常显示出来。

```ts
import { Engine3D } from '@orillusion/core';
// 加载font文件
await Engine3D.res.loadFont('fnt/0.fnt');
// 使用指定的字体
this.text.font = 'Aria';
```
