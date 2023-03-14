# 图片材质
该材质继承于 [UnLit](../graphics/materials.md#unlit-材质) 材质，同样不计算光照，仅通过图片像素颜色渲染的基础材质，不同的是，增加了空间裁剪 `(clip)` 的设置，可以更自由的进行图片的显示。

支持以下属性：
| 属性 | 描述 |
| :---: | :---: |
| baseColor | 基础颜色 |
| uv_offsetX | x方向位移 |
| uv_offsetY | y方向位移 |
| uv_scaleX | x方向缩放 |
| uv_scaleY | y方向缩放 |
| clip_left | 左方裁剪 |
| clip_top | 上方裁剪 |
| clip_right | 右方裁剪 |
| clip_bottom | 下方裁剪 |

## 用法
```ts
import {ImageMaterial} from '@orillusion/media-extention'

// 创建图片材质
let mat = new ImageMaterial();
// 加载2D纹理
let texture = await Engine3D.res.loadTexture('path/to/image');
mat.baseMap = texture;
```

<Demo :height="300" src="/demos/media/image.ts"></Demo>

<<< @/public/demos/media/image.ts