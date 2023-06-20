# Particle Animation
Particle animation is driven by the [ParticleSystem](/api/classes/ParticleSystem) component, which uses the `ParticleSimulator` and `ComputeShader` to simulate particle motion trajectories and achieve particle animation effects.

## Basic Modules
When using the `ParticleSystem` component, you need to specify a particle simulator. Currently, only the `ParticleStandSimulator` simulator is available, which includes the following basic modules:

| Name | Description |
| :---: | --- |
| ParticleEmitModule | Particle emitter module (required module) |
| ParticleOverLifeScaleModule | Module for scaling particles over their lifetime |
| ParticleOverLifeSpeedModule | Module for changing particle speed over their lifetime |
| ParticleOverLifeRotationModule | Module for rotating particles over their lifetime |
| ParticleGravityModifierModule | Global module for modifying particle gravity |
| ParticleRotationModule | Module for rotating particles at a constant angular speed |
| ParticleTextureSheetModule | Module for animated particle texture sheets |

## Basic Usage
<Demo :height="500" src="/demos/particle/particleAnim.ts"></Demo>

<<< @/public/demos/particle/particleAnim.ts

As an example, let's consider a flame demo. First, add the `ParticleSystem` component to the desired object in the scene and specify the shape and material of the particles:
```ts
// Create a 3D object entity and add it to the scene
let obj = new Object3D();
scene.addChild(obj);

// Add the ParticleSystem component to the object
let particleSystem = obj.addComponent(ParticleSystem);

// Create a particle material and load the specified particle texture
let material = new ParticleMaterial();
material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

// Set the individual particle's shape
particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
particleSystem.material = material;

```

Specify the `ParticleStandSimulator` to be used by the `ParticleSystem` component:
```ts
// Use the specified simulator
let simulator = particleSystem.useSimulator(ParticleStandSimulator);

// Add the emitter module (required module, cannot be omitted)
let emitter = simulator.addModule(ParticleEmitModule);
// Set the maximum number of particles
emitter.maxParticle = 1 * 10000;
// Set the duration of emission
emitter.duration = 10;
// Set the emission rate (number of particles per second)
emitter.emissionRate = 50;
// Set the particle's lifecycle size
emitter.startLifecycle.setScalar(1);
// Set the shape type of the emitter
emitter.shapeType = ShapeType.Box;
// Set the emission location on the shape (emitting from the shell here)
emitter.emitLocation = EmitLocation.Shell;
// Set the size of the emitter
emitter.boxSize = new Vector3(1, 0, 1);
```

Add particle modules to the simulator and configure their attribute parameters:
```ts
// Add the gravity modifier module (providing a slight upward gravity)
simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

// Add the color over life module
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
