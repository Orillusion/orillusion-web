# Particle Animation
Particle animation is driven by the [ParticleSystem](/api/classes/ParticleSystem) component. Through `ParticleSimulator`, it uses `ComputeShader` to simulate the motion trajectory of particles, achieving particle animation effects.

## Base Modules
When using the `ParticleSystem` component, you need to specify a particle simulator. Currently only the `ParticleStandSimulator` simulator is available. This particle simulator has the following base modules:

| Name | Description |
| :---: | --- |
| ParticleEmitModule | Particle emitter module (required module) |
| ParticleOverLifeScaleModule | Module for size variation over the particle lifecycle |
| ParticleOverLifeSpeedModule | Module for speed variation over the particle lifecycle |
| ParticleOverLifeRotationModule | Module for rotation variation over the particle lifecycle |
| ParticleGravityModifierModule | Global gravity variation module for particles |
| ParticleRotationModule | Particle angular velocity rotation module |
| ParticleTextureSheetModule | Particle sheet animation module |

## Basic Usage
<Demo :height="500" src="/demos/particle/particleAnim.ts"></Demo>

<<< @/public/demos/particle/particleAnim.ts

Take the flame demo as an example. First, add the `ParticleSystem` component to the specified object in the scene, and specify the shape and material of the particles:
```ts
// Create a 3D object entity and add it to the scene
let obj = new Object3D();
scene.addChild(obj);

// Add the ParticleSystem component to the object
let particleSystem = obj.addComponent(ParticleSystem);

// Create the particle material and load the specified particle texture
let material = new ParticleMaterial();
material.baseMap = await engine.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

// Set the form of a single particle
particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
particleSystem.material = material;

```

Specify the simulator `ParticleStandSimulator` to be used for the `ParticleSystem` component:
```ts
// Use the specified simulator
let simulator = particleSystem.useSimulator(ParticleStandSimulator);

// Add the emitter module (required module, cannot be omitted)
let emitter = simulator.addModule(ParticleEmitModule);
// Set the maximum number of particles
emitter.maxParticle = 1 * 10000;
// Set the continuous emission duration
emitter.duration = 10;
// Set the emission rate (x particles/second)
emitter.emissionRate = 50;
// Set the particle lifecycle
emitter.startLifecycle.setScalar(1);
// Set the emission shape of the emitter
emitter.shapeType = ShapeType.Box;
// Set from which position of the emission shape the emitter emits (here it emits from the shell)
emitter.emitLocation = EmitLocation.Shell;
// Set the emitter size
emitter.boxSize = new Vector3(1, 0, 1);
```

Add particle modules to the simulator and configure the property parameters:
```ts
// Add the gravity modifier module (apply a slight upward gravity)
simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

// Add the over-life color module
simulator.addModule(ParticleOverLifeColorModule).colorSegments = [
    new Vector4(1, 0.3, 0, 1),
    new Vector4(0, 0.6, 1, 0)
];
```

Start playing the particles:
```ts
// Start playing
particleSystem.play();
```
