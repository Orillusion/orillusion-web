# 视频材质
该材质继承于 [UnLit](../graphics/materials.md#unlit-材质) 材质，同样不计算光照，仅通过视频像素颜色渲染的基础材质，不同的是，可以自动同步视频播放的帧内容，另外，也增加了空间裁剪 `(clip)` 的设置，可以更自由的进行裁剪。

视频材质支持以下属性：
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
import {VideoMaterial, VideoTexture} from '@orillusion/media-extention'

// 创建视频纹理
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
// 创建视频材质
let mat = new VideoMaterial();
mat.baseMap = videoTexture;
```

<Demo :height="300" src="/demos/media/video.ts"></Demo>

<<< @/public/demos/media/video.ts
