# Introduction
Particle systems are a technique for simulating the behavior and motion of a large number of particles. These particles can represent virtual objects such as dust, fire, water droplets, or abstract elements like sparkles, stars, snowflakes, etc. Particle systems simulate the movement, appearance, and interactions of each particle to generate various realistic dynamic effects.

## Installation
The particle system is provided as an independent plugin module. We can import the particle system plugin using two methods: `NPM` and `CDN` links.

### 1. Installation via `NPM` 
```bash
npm install @orillusion/core --save
npm install @orillusion/particle --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { ParticleSystem } from "@orillusion/particle"
```

### 2. Importing via `CDN`
We recommend using the `ESModule` build version.
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { ParticleSystem } from "https://unpkg.com/@orillusion/particle/dist/particle.es.js" 
</script>
```

Alternatively, you can load the `UMD` build version via `<script>` and access the `ParticleSystem` module through the global `Orillusion` module through the global
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/particle/dist/particle.umd.js"></script>
<script>
  const {Engine3D, ParticleSystem} = Orillusion
</script>
```

## Usage
### 1. Adding the Particle System Component
First, create an entity object and add the particle system component:
```ts
let obj = new Object3D();
let ps = obj.addComponent(ParticleSystem);
scene.addChild(obj);
```

### 2. Setting the Individual Particle's Geometry
Set the geometry shape of the individual particle, for example, using a `PlaneGeometry`:
```ts
ps.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
```

### 3. Setting the Particle Material
Set the particle material and load the required texture map:
```ts
let material = new ParticleMaterial();
material.baseMap = await Engine3D.res.loadTexture('particle/fx_a_glow_003.png');
ps.material = material;
```

### 4. Selecting the Simulator
Specify the simulator to be used by the `ParticleSystem` component. Currently, only the `ParticleStandSimulator` simulator is available:
```ts
let simulator = ps.useSimulator(ParticleStandSimulator);
```

### 5. Adding the Emitter Module
Add a required emitter module to the `ParticleStandSimulator` and set the emission parameters:
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
// Set the emitter's shape type
emitter.shapeType = ShapeType.Sphere;
// Set the radius of the emitter's shape
emitter.radius = 10;
// Set the emission location on the shape
emitter.emitLocation = EmitLocation.Shell;
```

### 6. Play
Start playing the particle animation:
```ts
ps.play();
```

<Demo :height="500" src="/demos/particle/ParticleSystem.ts"></Demo>

<<< @/public/demos/particle/ParticleSystem.ts
