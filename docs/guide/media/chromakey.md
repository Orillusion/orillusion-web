# Color Key Material (Filter Background Color)
The ChromaKey material adds a background color filtering feature on top of the Video [Video](./video.md) material, supporting the following properties of the basic video material UV:

| Property | Description |
| :---: | :---: |
| baseColor | Base color |
| uv_offsetX | x-direction displacement |
| uv_offsetY | y-direction displacement |
| uv_scaleX | x-axis scaling |
| uv_scaleY | y-axis scaling |
| clip_left | left clipping |
| clip_top | top clipping |
| clip_right | right clipping |
| clip_bottom | bottom clipping |

In addition, `ChromaKeyMaterial` also provides background color filtering function:
| Property | Description |
| :---: | :---: |
| keyColor | background key color |
| colorCutoff | hollowing intensity |
| colorFeathering | color feathering coefficient |
| maskFeathering | edge feathering coefficient |
| sharpening | edge sharpening coefficient |
| despoil | environmental light attenuation coefficient |
| despoilLuminanceAdd | fill light intensity after weakening |

## Usage
```ts
import {ChromaKeyMaterial, VideoTexture} from '@orillusion/media-extention'

// create video texture
let videoTexture = new VideoTexture();
await videoTexture.load('path/to/video')
// create video material
let mat = new ChromaKeyMaterial();
mat.baseMap = videoTexture;
// set green filtering
mat.keyColor = new Color(0.0, 1.0, 0.0, 0.0)
mat.colorCutoff = 0.2
```

<Demo :height="300" src="/demos/media/chroma.ts"></Demo>

<<< @/public/demos/media/chroma.ts