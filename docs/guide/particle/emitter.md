---
aside: false
---
# Particle Emitter Module
The particle emitter module is an essential component of a particle system that defines and controls the emission behavior of particles. It determines the initial position, velocity, direction, and other properties of particles, thus influencing the overall effect of the particle system.

## Usage
The emitter module is a required module for the particle simulator. The following code demonstrates how to add an emitter module to a particle simulator:
```ts
let emitter = simulator.addModule(ParticleEmitterModule);
// Set the maximum number of particles
emitter.maxParticle = 10000;
// Set the duration of emission
emitter.duration = 10;
// Set the emission rate (number of particles per second)
emitter.emissionRate = 1000;
// Set the particle's lifecycle size
emitter.startLifecycle.setScalar(1);
// Set the shape type of the emitter
emitter.shapeType = ShapeType.Box;
// Set the size of the emitter's shape
emitter.boxSize = new Vector3(10, 10, 10);
// Set the emission location on the shape
emitter.emitLocation = EmitLocation.Edge;
```

The particle emitter module, `ParticleEmitterModule`  includes several important emission parameters. Each parameter has the following significance:
| Name | Description |
| :---: | --- |
| maxParticle | Maximum number of particles |
| duration | Duration of particle emission (in seconds) |
| emissionRate | Emission rate (number of particles per second) |
| startLifecycle | Particle lifecycle (in seconds) |
| shapeType | Emitter shape (e.g., circle, rectangle, sphere, cone) |
| emitLocation | Emission location (based on entity, surface, edge) |
| angle | Angle (applicable when the emitter shape is a cone) |
| radius | Radius (applicable when the emitter shape is a circle, sphere, or cone) |
| boxSize | Size of the rectangle/box shape |

<Demo :height="500" src="/demos/particle/ParticleEmitter.ts"></Demo>

<<< @/public/demos/particle/ParticleEmitter.ts
