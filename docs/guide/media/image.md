# 图片材质
该材质继承于 [UnLit](../graphics/materials.md#unlit-材质) 材质，同样不计算光照，仅通过图片像素颜色渲染的基础材质，不同的是，本材质增加了空间裁剪 `rectClip` 的设置，可以自由的进行图片的裁剪。

支持以下属性：
| 属性 | 类型 | 描述 |
| :---: | :---: | :---: |
| baseMap | Texture | 图片贴图 |
| baseColor | Color | 基础颜色 |
| rectClip | Vector4 | 上下左右裁剪区域 |

## 用法
```ts
import {ImageMaterial} from '@orillusion/media-extention'

// 创建图片材质
let mat = new ImageMaterial();
// 加载2D纹理
let texture = await Engine3D.res.loadTexture('path/to/image');
mat.baseMap = texture;
// 设置基础颜色
mat.baseColor = new Color(1, 1, 1, 1)
// 设置裁剪区域, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/image.ts"></Demo>

<<< @/public/demos/media/image.ts