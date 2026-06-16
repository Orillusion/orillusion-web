# Color Key Material (Filter Background Color)
The Color Key `(ChromaKey)` material adds a background color filtering feature on top of the [Video](./video.md) material, and supports the following properties of the basic video material UV:

| Property | Type | Description |
| :---: | :---: | :---: |
| baseMap | VideoTexture | Video texture |
| baseColor | Color | Base color |
| rectClip | Vector4 | Top, bottom, left, and right clipping area |

In addition, `ChromaKeyMaterial` also provides a background color filtering feature:
| Property | Description |
| :---: | :---: |
| keyColor | Background key color |
| colorCutoff | Hollowing intensity |
| colorFeathering | Color feathering coefficient |
| maskFeathering | Edge feathering coefficient |
| sharpening | Edge sharpening coefficient |
| despoil | Ambient light attenuation coefficient |
| despoilLuminanceAdd | Fill light intensity after attenuation |

## Usage
```ts
import {ChromaKeyMaterial, VideoTexture} from '@orillusion/media-extention'

// Create a video texture
let videoTexture = new VideoTexture();
await videoTexture.load('path/to/video')
// Create a video material
let mat = new ChromaKeyMaterial();
mat.baseMap = videoTexture;
// Set green as the filter color
mat.keyColor = new Color(0.0, 1.0, 0.0, 0.0)
mat.colorCutoff = 0.2
```

<Demo :height="300" src="/demos/media/chroma.ts"></Demo>

<<< @/public/demos/media/chroma.ts
