import { Engine3D, AtmosphericComponent, Vector3, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil, BoxGeometry, DEGREES_TO_RADIANS } from '@orillusion/core';

import { ParticleSystem, ParticleMaterial, ParticleStandardSimulator, ParticleEmitterModule, ShapeType, EmitLocation, ParticleGravityModifierModule } from '@orillusion/particle';

class Sample_OverLifeRotationModule {
    engine: Engine3D;
    async run() {
        this.engine = await Engine3D.init();

        let scene = new Scene3D();
        scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);

        let ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(45, -30, 80);

        await this.initScene(scene);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        this.engine.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        // Create entity object
        let obj = new Object3D();
        obj.y = 10;
        scene.addChild(obj);

        // Add particle system component
        let particleSystem = obj.addComponent(ParticleSystem);

        // Set particle material
        let material = new ParticleMaterial();
        material.baseMap = await this.engine.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_fragment_003.png');

        // Set particle shape
        particleSystem.geometry = new PlaneGeometry(1, 8, 1, 1, Vector3.Z_AXIS);
        particleSystem.material = material;

        // Use the specified simulator
        let simulator = particleSystem.useSimulator(ParticleStandardSimulator);

        // Add emitter module
        let emitter = simulator.addModule(ParticleEmitterModule);
        emitter.maxParticle = 10000;
        emitter.duration = 10;
        emitter.emissionRate = 1000;
        emitter.startLifecycle.setScalar(1);
        emitter.shapeType = ShapeType.Circle;
        emitter.radius = 60;
        emitter.emitLocation = EmitLocation.Shell;

        // Add gravity modifier module
        let gravityModifier = simulator.addModule(ParticleGravityModifierModule);
        gravityModifier.gravity = new Vector3(0, -9.8, 0);

        // Start playing
        particleSystem.play();
    }
}

new Sample_OverLifeRotationModule().run();
