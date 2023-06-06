// import {
//     Engine3D, PostProcessingComponent, AtmosphericComponent, Vector3, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil, webGPUContext, HDRBloomPost, ParticleSystem, ParticleMaterial, ParticleStandSimulator, ParticleEmitModule, ShapeType, EmitLocation, ParticleGravityModifierModule, ParticleOverLifeColorModule, Vector4, BlendMode,
// } from '@orillusion/core';

// export class Sample_ParticleAnim {
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
//         postProcessing.addPost(HDRBloomPost);
//     }

//     async initScene(scene: Scene3D) {
//         // 创建实体对象
//         let obj = new Object3D();
//         obj.x = 0;
//         obj.y = 15;
//         obj.z = 51;
//         scene.addChild(obj);

//         // 添加粒子系统组件
//         let particleSystem = obj.addComponent(ParticleSystem);

//         // 设置粒子材质
//         let material = new ParticleMaterial();
//         material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

//         // 设置粒子形状
//         particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
//         particleSystem.material = material;

//         // 使用指定仿真器
//         let simulator = particleSystem.useSimulator(ParticleStandSimulator);

//         // 添加发射器模块
//         let emitter = simulator.addModule(ParticleEmitModule);
//         emitter.maxParticle = 1 * 10000;
//         emitter.duration = 10;
//         emitter.emissionRate = 50;
//         emitter.startLifecycle.setScalar(1);
//         emitter.shapeType = ShapeType.Box;
//         emitter.radius = 10;
//         emitter.emitLocation = EmitLocation.Shell;
//         emitter.boxSize = new Vector3(1, 0, 1);

//         // 添加重力修改模块
//         simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

//         // 添加生命周期色彩模块
//         simulator.addModule(ParticleOverLifeColorModule).colorSegments = [
//             new Vector4(1, 0.3, 0, 1),         new Vector4(0, 0.6, 1, 0)
//         ];

//         // 开始播放
//         particleSystem.play();
//     }
// }

// new Sample_ParticleAnim().run();
