# Video Material
Video Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-material) material, which does not calculate lighting and only renders based on the color of the video pixels. The difference is that it can automatically synchronize the frame content of the video being played, and it also features a `rectClip` setting for spatial clipping, allowing for flexible image cropping.

The video material supports the following properties:
| Property | Type | Description |
| :---: | :---: | :---: |
| baseMap | VideoTexture | Video texture |
| baseColor | Color | Base color |
| rectClip | Vector4 | clipping area |

## Usage
```ts
import {VideoMaterial, VideoTexture} from '@orillusion/media-extention'

// Create a video texture
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
// Create a video material
let mat = new VideoMaterial();
mat.baseMap = videoTexture;
// set base color
mat.baseColor = new Color(1, 1, 1, 1)
// set clipping area offset, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/video.ts"></Demo>

<<< @/public/demos/media/video.ts
