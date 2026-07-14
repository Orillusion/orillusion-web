// import {
//     Engine3D, PostProcessingComponent, AtmosphericComponent, Vector3, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil, webGPUContext, ParticleSystem, ParticleMaterial, ParticleStandSimulator, ParticleEmitModule, ShapeType, EmitLocation, ParticleGravityModifierModule, ParticleOverLifeColorModule, Vector4, BlendMode,
// } from '@orillusion/core';

// class Sample_ParticleAnim {
//     async run() {
//         await Engine3D.init();

//         let scene = new Scene3D();
//         scene.addComponent(AtmosphericComponent).sunY = 0.6;

//         let mainCamera = CameraUtil.createCamera3DObject(scene);
//         mainCamera.perspective(60, webGPUContext.aspect, 0.1, 5000.0);

//         let ctrl = mainCamera.object3D.addComponent(HoverCameraController);
//         ctrl.setCamera(45, -20, 30, new Vector3(0, 15, 51));

//         await this.initScene(scene);

//         let view = new View3D();
//         view.scene = scene;
//         view.camera = mainCamera;
//         Engine3D.startRenderView(view);

//         let postProcessing = scene.addComponent(PostProcessingComponent);
//     }

//     async initScene(scene: Scene3D) {
//         // create entity object
//         let obj = new Object3D();
//         obj.x = 0;
//         obj.y = 15;
//         obj.z = 51;
//         scene.addChild(obj);

//         // add particle system component
//         let particleSystem = obj.addComponent(ParticleSystem);

//         // set particle material
//         let material = new ParticleMaterial();
//         material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

//         // set particle geometry
//         particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
//         particleSystem.material = material;

//         // use the specified simulator
//         let simulator = particleSystem.useSimulator(ParticleStandSimulator);

//         // add the emitter module
//         let emitter = simulator.addModule(ParticleEmitModule);
//         emitter.maxParticle = 1 * 10000;
//         emitter.duration = 10;
//         emitter.emissionRate = 50;
//         emitter.startLifecycle.setScalar(1);
//         emitter.shapeType = ShapeType.Box;
//         emitter.radius = 10;
//         emitter.emitLocation = EmitLocation.Shell;
//         emitter.boxSize = new Vector3(1, 0, 1);

//         // add the gravity modifier module
//         simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

//         // add the over-life color module
//         simulator.addModule(ParticleOverLifeColorModule).colorSegments = [
//             new Vector4(1, 0.3, 0, 1),         new Vector4(0, 0.6, 1, 0)
//         ];

//         // start playing
//         particleSystem.play();
//     }
// }

// new Sample_ParticleAnim().run();
