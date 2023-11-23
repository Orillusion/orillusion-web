# Image Material
This material inherits from the [UnLit](../graphics/materials.md#unlit-material) material, which also does not calculate lighting and is a basic material that only renders based on the pixel color of the image. The difference is that it features a `rectClip` setting for spatial clipping, allowing for flexible image cropping.

The following properties are supported:
| Property | Type | Description |
| :---: | :---: | :---: |
| baseMap | Texture | Image texture |
| baseColor | Color | Base color |
| rectClip | Vector4 | clipping area |

## Usage
```ts
import {ImageMaterial} from '@orillusion/media-extention'

// Create image material
let mat = new ImageMaterial();
// Load 2D texture
let texture = await Engine3D.res.loadTexture('path/to/image');
mat.baseMap = texture;
// set base color
mat.baseColor = new Color(1, 1, 1, 1)
// set clipping area offset, left/top/right/bottom
mat.rectClip = new Vector4(0, 0, 0, 0);
```

<Demo :height="300" src="/demos/media/image.ts"></Demo>

<<< @/public/demos/media/image.ts