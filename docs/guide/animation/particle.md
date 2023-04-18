# Particle Animation
Particle Animation is driven by the [ParticleSystem](/api/classes/ParticleSystem) component, which uses `ParticleSimulator` to simulate the trajectory of particle motion using `ComputeShader` to achieve particle animation effects.
## Basic Module
Using the `ParticleSystem` component, you need to specify a particle simulator. Currently only the `ParticleStandSimulator` simulator is available, and the particle simulator has the following basic modules:

| Name | Description |
| :---: | --- |
| ParticleEmitModule | Particle emitter module (essential module) |
| ParticleOverLifeScaleModule | Particle size change module during particle lifetime |
| ParticleOverLifeSpeedModule | Particle speed change module during particle lifetime |
| ParticleOverLifeRotationModule | Particle rotation change module during particle lifetime |
| ParticleGravityModifierModule | Particle global gravity change module |
| ParticleRotationModule | Particle angular velocity rotation module |
| ParticleTextureSheetModule | Particle atlas animation module |

## Basic Usage
<Demo :height="500" src="/demos/animation/particleAnim.ts"></Demo>

<<< @/public/demos/animation/particleAnim.ts

Using the fire Demo as an example, first add the `ParticleSystem` component to the object specified by the scene, and specify the shape and material of the particle:
```ts
// Create a 3D object entity and add it to the scene
let obj = new Object3D();
scene.addChild(obj);

// Add the ParticleSystem component to the object
let particleSystem = obj.addComponent(ParticleSystem);

// Create a particle material and load the specified particle texture
let material = new ParticleMaterial();
material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

// Set the shape of a single particle
particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
particleSystem.material = material;

```

Specify the simulator `ParticleStandSimulator` to be used by the `ParticleSystem` component:
```ts
// Use the specified simulator
let simulator = particleSystem.useSimulator(ParticleStandSimulator);

// Add emitter module (essential module, not missing)
let emitter = simulator.addModule(ParticleEmitModule);
// Set the maximum number of particles
emitter.maxParticle = 1 * 10000;
// Set the duration of continuous emission
emitter.duration = 10;
// Set the emission rate (x per second)
emitter.emissionRate = 50;
// Set the size of the particle lifetime
emitter.startLifecycle.setScalar(1);
// Set the shape of the emitter
emitter.shapeType = ShapeType.Box;
// Set where the emitter emits from the shape of the emitter (here from the shell)
emitter.emitLocation = EmitLocation.Shell;
// Set the size of the emitter
emitter.boxSize = new Vector3(1, 0, 1);
```

Add particle modules to the simulator and configure the property parameters:
```ts
// Add gravity modification module (give a microgravity upwards)
simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

// Add lifecycle color module
simulator.addModule(ParticleOverLifeColorModule).colorSegments = [
    new Vector4(1, 0.3, 0, 1),
    new Vector4(0, 0.6, 1, 0)
];
```

Start playing particles:
```ts
// Start playing
particleSystem.play();
```
