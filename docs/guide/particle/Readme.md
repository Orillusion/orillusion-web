# Introduction
A particle system is a technique for simulating the behavior and motion of a large number of particles. These particles can be virtual objects such as dust, flames, and water droplets, or abstract elements such as light spots, stars, and snowflakes. By simulating the motion, appearance, and interaction of each particle, the particle system generates various realistic dynamic effects.

## Installation
The particle system is provided as a standalone [@orillusion/particle](/particle/) extension. We can import the particle system plugin in two ways: via `NPM` and via `CDN` links:

### 1. Install via the `NPM` package
```bash
npm install @orillusion/core --save
npm install @orillusion/particle --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { ParticleSystem } from "@orillusion/particle"
```

### 2. Import via `CDN` links
We recommend using the `ESModule` build version
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { ParticleSystem } from "https://unpkg.com/@orillusion/particle/dist/particle.es.js" 
</script>
```

Or load the `UMD` build version via `<script>`, and get the `ParticleSystem` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/particle/dist/particle.umd.js"></script>
<script>
  const { Engine3D, Particle } = Orillusion
  const { ParticleSystem } = Particle
</script>
```

## Usage
### 1. Add the particle system component
First create an entity object and add the particle system component:
```ts
let obj = new Object3D();
let ps = obj.addComponent(ParticleSystem);
scene.addChild(obj);
```

### 2. Set the geometry shape of a single particle
Set the geometry shape of a single particle, for example using a `PlaneGeometry`:
```ts
ps.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
```

### 3. Set the particle material:
Set the particle material and load the texture map to be used:
```ts
let material = new ParticleMaterial();
material.baseMap = await engine.res.loadTexture('particle/fx_a_glow_003.png');
ps.material = material;
```

### 4. Choose a simulator:
Specify the simulator to be used for the `ParticleSystem` component. Currently only the `ParticleStandSimulator` simulator is available:
```ts
let simulator = ps.useSimulator(ParticleStandSimulator);
```

### 5. Add the emitter module
Add a required emitter module to `ParticleStandSimulator` and set the emission parameters:
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
emitter.shapeType = ShapeType.Sphere;
// Set the radius of the emitter's emission shape
emitter.radius = 10;
// Set from which position of the emission shape the emitter emits
emitter.emitLocation = EmitLocation.Shell;
```

### 6. Play
Start playing the particle animation
```ts
ps.play();
```

<Demo :height="500" src="/demos/particle/ParticleSystem.ts"></Demo>

<<< @/public/demos/particle/ParticleSystem.ts
