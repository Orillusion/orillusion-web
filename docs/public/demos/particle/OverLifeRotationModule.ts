import { Engine3D, AtmosphericComponent, Vector3, Vector4, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil, BoxGeometry, DEGREES_TO_RADIANS } from '@orillusion/core';

import { ParticleSystem, ParticleMaterial, ParticleStandardSimulator, ParticleEmitterModule, ShapeType, EmitLocation, ParticleOverLifeRotationModule } from '@orillusion/particle';

class Sample_OverLifeRotationModule {
    async run() {
        let engine = await Engine3D.init();

        let scene = new Scene3D();
        scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, engine.aspect, 0.1, 5000.0);

        let ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(45, -15, 30);

        await this.initScene(scene);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        engine.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        // create entity object
        let obj = new Object3D();
        scene.addChild(obj);

        // add particle system component
        let particleSystem = obj.addComponent(ParticleSystem);

        // set particle material
        let material = new ParticleMaterial();

        // set particle geometry
        particleSystem.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
        particleSystem.material = material;

        // use the specified simulator
        let simulator = particleSystem.useSimulator(ParticleStandardSimulator);

        // add the emitter module
        let emitter = simulator.addModule(ParticleEmitterModule);
        emitter.maxParticle = 1000;
        emitter.duration = 10;
        emitter.emissionRate = 100;
        emitter.startLifecycle.setScalar(1);
        emitter.shapeType = ShapeType.Circle;
        emitter.radius = 10;
        emitter.emitLocation = EmitLocation.Shell;

        // add the over-life rotation module
        let overLifeRotationModule = simulator.addModule(ParticleOverLifeRotationModule);
        overLifeRotationModule.rotationSegments = [new Vector4(0, 0, 0), new Vector4(0, 0, 360 * DEGREES_TO_RADIANS)];

        // start playing
        particleSystem.play();
    }
}

new Sample_OverLifeRotationModule().run();
