import {
    Engine3D, AtmosphericComponent, Vector3, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil, webGPUContext,
} from '@orillusion/core';

import {
    ParticleSystem, ParticleMaterial, ParticleStandardSimulator, ParticleEmitterModule, ShapeType, EmitLocation,
} from '@orillusion/particle';

export class Sample_ParticleSystem {
    async run() {
        await Engine3D.init();

        let scene = new Scene3D();
        scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, webGPUContext.aspect, 0.1, 5000.0);

        let ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(45, -15, 30);

        await this.initScene(scene);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        // 创建实体对象
        let obj = new Object3D();
        scene.addChild(obj);

        // 添加粒子系统组件
        let particleSystem = obj.addComponent(ParticleSystem);

        // 设置粒子材质
        let material = new ParticleMaterial();
        material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

        // 设置粒子形状
        particleSystem.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
        particleSystem.material = material;

        // 使用指定仿真器
        let simulator = particleSystem.useSimulator(ParticleStandardSimulator);

        // 添加发射器模块
        let emitter = simulator.addModule(ParticleEmitterModule);
        emitter.maxParticle = 1 * 10000;
        emitter.duration = 10;
        emitter.emissionRate = 1000;
        emitter.startLifecycle.setScalar(1);
        emitter.shapeType = ShapeType.Sphere;
        emitter.radius = 10;
        emitter.emitLocation = EmitLocation.Shell;

        // 开始播放
        particleSystem.play();
    }
}

new Sample_ParticleSystem().run();
