# Base Modules
The particle system simulator can have various property modules added to it. Each property module contains one feature implementation and its related parameters. The following are currently built in:
- `ParticleOverLifeScaleModule` - Module for size variation over the particle lifecycle
- `ParticleOverLifeSpeedModule` - Module for speed variation over the lifecycle
- `ParticleOverLifeRotationModule` - Module for spin variation over the lifecycle
- `ParticleOverLifeColorModule` - Module for color variation over the lifecycle
- `ParticleGravityModifierModule` - Gravity variation module
- `ParticleTextureSheetModule` - Texture sheet module

## Size Transformation Module
If you want the size of a single particle to change over time throughout its own entire lifecycle, you can add the `ParticleOverLifeScaleModule` module to the simulator:
```ts
// Add the over-life size transformation module
let overLifeScaleModule = simulator.addModule(ParticleOverLifeScaleModule);
// Set the size transformation parameters, from 1x size at start to 3x size at end
overLifeScaleModule.scaleSegments = [
    new Vector4(1, 1, 1),
    new Vector4(3, 3, 3),
];
```

<Demo :height="500" src="/demos/particle/OverLifeScaleModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeScaleModule.ts

## Rotation Transformation Module
If you want the rotation angle of a single particle to change over time throughout its own entire lifecycle, you can add the `ParticleOverLifeRotationModule` module to the simulator:
```ts
// Add the over-life rotation transformation module
let overLifeRotationModule = simulator.addModule(ParticleOverLifeRotationModule);
// Set the spin transformation parameters, from 0° at start to 270° at end
overLifeRotationModule.rotationSegments = [
    new Vector4(0, 0, 0),
    new Vector4(0, 90 * DEGREES_TO_RADIANS, 0),
];
```


<Demo :height="500" src="/demos/particle/OverLifeRotationModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeRotationModule.ts

## Color Transformation Module
If you want the color of a single particle to change over time throughout its own entire lifecycle, you can add the `ParticleOverLifeColorModule` module to the simulator:
```ts
// Add the over-life color transformation module
let overLifeColorModule = simulator.addModule(ParticleOverLifeColorModule);
// Set the start color
overLifeColorModule.startColor = new Color(1, 1, 0);
// Set the start alpha
overLifeColorModule.startAlpha = 0.0;
// Set the end color
overLifeColorModule.endColor = new Color(0.1, 0.6, 1);
// Set the end alpha
overLifeColorModule.endAlpha = 1.0;
```


<Demo :height="500" src="/demos/particle/OverLifeColorModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeColorModule.ts

## Gravity Modifier Module
When simulating the motion trajectory of particles, you can add a gravity modifier module `ParticleGravityModifierModule` to the simulator so that particles can move according to the direction of gravity:
```ts
// Add the gravity modifier module
let gravityModifier = simulator.addModule(ParticleGravityModifierModule);
gravityModifier.gravity = new Vector3(0, -0.98, 0);
```

<Demo :height="500" src="/demos/particle/GravityModifierModule.ts"></Demo>

<<< @/public/demos/particle/GravityModifierModule.ts

## Texture Sheet Module
When you need to provide a different texture for each particle or to give a single particle a texture animation, you can add a texture sheet module `ParticleTextureSheetModule` to the simulator:

```ts
// Add the texture sheet module
let sheetModule = simulator.addModule(ParticleTextureSheetModule);
// Set how many sub-tiles each column contains
sheetModule.clipCol = 4;
// Set how many sub-tiles the entire texture contains in total
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
