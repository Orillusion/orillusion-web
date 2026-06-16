# Image Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-material) material. It likewise does not calculate lighting and is a basic material that only renders through the pixel colors of the image. The difference is that this material adds a `rectClip` spatial clipping setting, allowing free cropping of the image.

The following properties are supported:
| Property | Type | Description |
| :---: | :---: | :---: |
| baseMap | Texture | Image texture |
| baseColor | Color | Base color |
| rectClip | Vector4 | Top, bottom, left, and right clipping area |

## Usage
```ts
import {ImageMaterial} from '@orillusion/media-extention'

// Create an image material
let mat = new ImageMaterial();
// Load a 2D texture
let texture = await engine.res.loadTexture('path/to/image');
mat.baseMap = texture;
// Set the base color
mat.baseColor = new Color(1, 1, 1, 1)
// Set the clipping area, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/image.ts"></Demo>

<<< @/public/demos/media/image.ts
