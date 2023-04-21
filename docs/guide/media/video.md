# Video Material
Video Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-材质) material, which does not calculate lighting and only renders based on the color of the video pixels. The difference is that it can automatically synchronize the frame content of the video being played, and it also adds space clipping `(clip)` settings, which allows for more freedom in clipping.

The video material supports the following properties:
| Property | Description |
| :---: | :---: |
| baseColor | Base color |
| uv_offsetX | X-axis offset |
| uv_offsetY | Y-axis offset |
| uv_scaleX | X-axis scaling |
| uv_scaleY | Y-axis scaling |
| clip_left | Left clipping |
| clip_top | Top clipping |
| clip_right | Right clipping |
| clip_bottom | Bottom clipping |

## Usage
```ts
import {VideoMaterial, VideoTexture} from '@orillusion/media-extention'

// Create a video texture
let videoTexture = new VideoTexture();
await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4')
// Create a video material
let mat = new VideoMaterial();
mat.baseMap = videoTexture;
```

<Demo :height="300" src="/demos/media/video.ts"></Demo>

<<< @/public/demos/media/video.ts
