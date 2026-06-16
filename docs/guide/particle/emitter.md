---
aside: false
---
# Emitter Module
The emitter module is an important part of the particle system, used to define and control the emission behavior of particles. It determines the initial position, speed, direction, and other properties of particles in space, thereby affecting the effect of the entire particle system.

## Usage
The emitter module is a required module of the particle simulator. The following code shows how to add an emitter module to the particle simulator:
```ts
let emitter = simulator.addModule(ParticleEmitterModule);
// Set the maximum number of particles
emitter.maxParticle = 10000;
// Set the continuous emission duration
emitter.duration = 10;
// Set the emission rate (x particles/second)
emitter.emissionRate = 1000;
// Set the particle lifecycle
emitter.startLifecycle.setScalar(1);
// Set the emission shape of the emitter
emitter.shapeType = ShapeType.Box;
// Set the size of the emitter's emission shape
emitter.boxSize = new Vector3(10, 10, 10);
// Set from which position of the emission shape the emitter emits
emitter.emitLocation = EmitLocation.Edge;
```

The particle emitter module `ParticleEmitterModule` contains some important emission parameters. The function of each parameter is as follows:
| Name | Description |
| :---: | --- |
| maxParticle | Maximum number of particles |
| duration | Particle emission duration (unit: seconds) |
| emissionRate | Emission rate (how many particles are emitted per second) |
| startLifecycle | Particle lifecycle (unit: seconds) |
| shapeType | Emitter shape (circle, rectangle, sphere, cone) |
| emitLocation | Emission location (based on entity, surface, edge) |
| angle | Angle (valid when the emitter shape is a cone) |
| radius | Radius (valid when the emitter shape is a circle, sphere, or cone) |
| boxSize | Rectangle/box size |

<Demo :height="500" src="/demos/particle/ParticleEmitter.ts"></Demo>

<<< @/public/demos/particle/ParticleEmitter.ts
