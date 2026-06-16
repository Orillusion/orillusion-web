# Video Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-material) material. It likewise does not calculate lighting and is a basic material that only renders through the pixel colors of the video. The difference is that it can automatically synchronize the frame content of the video being played. In addition, it adds a `rectClip` spatial clipping setting, allowing more flexible cropping.

The video material supports the following properties:
| Property | Type | Description |
| :---: | :---: | :---: |
| baseMap | VideoTexture | Video texture |
| baseColor | Color | Base color |
| rectClip | Vector4 | Top, bottom, left, and right clipping area |

## Usage
```ts
import {VideoMaterial, VideoTexture} from '@orillusion/media-extention'

// Create a video texture
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
// Create a video material
let mat = new VideoMaterial();
mat.baseMap = videoTexture;
// Set the base color
mat.baseColor = new Color(1, 1, 1, 1)
// Set the clipping area, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/video.ts"></Demo>

<<< @/public/demos/media/video.ts
