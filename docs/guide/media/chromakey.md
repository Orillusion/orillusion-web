# 色键材质(过滤背景色)
色键 `(ChromaKey)` 材质在 [Video](./video.md) 材质之上添加了过滤了背景色的功能，支持基本的视频材质UV以下属性：

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

另外，`ChromaKeyMaterial` 还提供背景色过滤功能:
| 属性 | 描述 |
| :---: | :---: |
| keyColor | 背景关键色 |
| colorCutoff | 镂空强度 |
| colorFeathering | 颜色羽化系数 |
| maskFeathering | 边缘羽化系数 |
| sharpening | 边缘锐化系数 |
| despoil | 环境光削弱系数 |
| despoilLuminanceAdd | 削弱后补光强度 |

## 用法
```ts
import {ChromaKeyMaterial, VideoTexture} from '@orillusion/media-extention'

// 创建视频纹理
let videoTexture = new VideoTexture();
await videoTexture.load('path/to/video')
// 创建视频材质
let mat = new ChromaKeyMaterial();
mat.baseMap = videoTexture;
// 设置过滤绿色
mat.keyColor = new Color(0.0, 1.0, 0.0, 0.0)
mat.colorCutoff = 0.2
```

<Demo :height="300" src="/demos/media/chroma.ts"></Demo>

<<< @/public/demos/media/chroma.ts