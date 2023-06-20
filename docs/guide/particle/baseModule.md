# Basic Modules
The particle system simulator can add various attribute modules, each of which includes a functionality implementation and associated parameters. Currently, the following built-in modules are available:
- `ParticleOverLifeScaleModule` - Module for size variation over the particle's lifetime.
- `ParticleOverLifeSpeedModule` - Module for speed variation over the particle's lifetime.
- `ParticleOverLifeRotationModule` - Module for rotation variation over the particle's lifetime.
- `ParticleOverLifeColorModule` - Module for color variation over the particle's lifetime.
- `ParticleGravityModifierModule` - Module for gravity modification.
- `ParticleTextureSheetModule` - Module for texture atlas.

## Size Variation Module
To make the size of individual particles change over their entire lifetimes, you can add the  `ParticleOverLifeScaleModule` module to the simulator:
```ts
// Add the module for size variation over the particle's lifetime
let overLifeScaleModule = simulator.addModule(ParticleOverLifeScaleModule);
// Set the size variation parameters from 1x at the start to 3x at the end
overLifeScaleModule.scaleSegments = [
    new Vector4(1, 1, 1),
    new Vector4(3, 3, 3),
];
```

<Demo :height="500" src="/demos/particle/OverLifeScaleModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeScaleModule.ts

## Rotation Variation Module
To make the rotation angle of individual particles change over their entire lifetimes, you can add the `ParticleOverLifeRotationModule` module to the simulator:
```ts
// Add the module for rotation variation over the particle's lifetime
let overLifeRotationModule = simulator.addModule(ParticleOverLifeRotationModule);
// Set the rotation variation parameters from 0° at the start to 270° at the end
overLifeRotationModule.rotationSegments = [
    new Vector4(0, 0, 0),
    new Vector4(0, 90 * DEGREES_TO_RADIANS, 0),
];
```


<Demo :height="500" src="/demos/particle/OverLifeRotationModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeRotationModule.ts

## Color Variation Module
To make the color of individual particles change over their entire lifetimes, you can add the `ParticleOverLifeColorModule` module to the simulator:
```ts
// Add the module for color variation over the particle's lifetime
let overLifeColorModule = simulator.addModule(ParticleOverLifeColorModule);
// Set the starting color
overLifeColorModule.startColor = new Color(1, 1, 0);
// Set the starting alpha
overLifeColorModule.startAlpha = 0.0;
// Set the ending color
overLifeColorModule.endColor = new Color(0.1, 0.6, 1);
// Set the ending alpha
overLifeColorModule.endAlpha = 1.0;
```


<Demo :height="500" src="/demos/particle/OverLifeColorModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeColorModule.ts

## Gravity Modifier Module
To modify the trajectory of particles based on gravity, you can add the `ParticleGravityModifierModule` module to the simulator:
```ts
// Add the gravity modifier module
let gravityModifier = simulator.addModule(ParticleGravityModifierModule);
gravityModifier.gravity = new Vector3(0, -0.98, 0);
```

<Demo :height="500" src="/demos/particle/GravityModifierModule.ts"></Demo>

<<< @/public/demos/particle/GravityModifierModule.ts

## Texture Atlas Module
To provide different textures for each particle or animate individual particles with textures, you can add the `ParticleTextureSheetModule`  module to the simulator:

```ts
// Add the texture atlas module
let sheetModule = simulator.addModule(ParticleTextureSheetModule);
// Set the number of sub-rectangles per column
sheetModule.clipCol = 4;
// Set the total number of sub-rectangles in the entire texture
sheetModule.totalClip = 4 * 4;
// Set the width of the entire texture
sheetModule.textureWidth = material.baseMap.width;
// Set the height of the entire texture
sheetModule.textureHeight = material.baseMap.height;
// Set the playback rate of the texture animation
sheetModule.playRate = 1.0;
```

<Demo :height="500" src="/demos/particle/TextureSheetModule.ts"></Demo>

<<< @/public/demos/particle/TextureSheetModule.ts
