# 视频材质
该材质继承于 [UnLit](../graphics/materials.md#unlit-材质) 材质，同样不计算光照，仅通过视频像素颜色渲染的基础材质，不同的是，可以自动同步视频播放的帧内容，另外，也增加了空间裁剪 `rectClip` 的设置，可以更自由的进行裁剪。

视频材质支持以下属性：
| 属性 | 类型 | 描述 |
| :---: | :---: | :---: |
| baseColor | Color | 基础颜色 |
| rectClip | Vector4 | 上下左右裁剪区域 |

## 用法
```ts
import {VideoMaterial, VideoTexture} from '@orillusion/media-extention'

// 创建视频纹理
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
// 创建视频材质
let mat = new VideoMaterial();
mat.baseMap = videoTexture;
// 设置基础颜色
mat.baseColor = new Color(1, 1, 1, 1)
// 设置裁剪区域, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/video.ts"></Demo>

<<< @/public/demos/media/video.ts
