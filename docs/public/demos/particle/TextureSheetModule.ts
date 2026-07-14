import { Engine3D, AtmosphericComponent, Vector3, View3D, HoverCameraController, Object3D, PlaneGeometry, Scene3D, CameraUtil } from '@orillusion/core';

import { ParticleSystem, ParticleMaterial, ParticleStandardSimulator, ParticleEmitterModule, ShapeType, EmitLocation, ParticleTextureSheetModule } from '@orillusion/particle';

class Sample_OverLifeRotationModule {
    engine: Engine3D;
    async run() {
        this.engine = await Engine3D.init();

        let scene = new Scene3D();
        scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);

        let ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(45, -15, 5);

        await this.initScene(scene);

        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        this.engine.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        // create entity object
        let obj = new Object3D();
        scene.addChild(obj);

        // add particle system component
        let particleSystem = obj.addComponent(ParticleSystem);

        // set particle material
        let material = new ParticleMaterial();
        material.baseMap = await this.engine.res.loadTexture('https://cdn.orillusion.com/particle/crystal_debug.png');

        // set particle geometry
        particleSystem.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
        particleSystem.material = material;

        // use the specified simulator
        let simulator = particleSystem.useSimulator(ParticleStandardSimulator);

        // add the emitter module
        let emitter = simulator.addModule(ParticleEmitterModule);
        emitter.maxParticle = 1000;
        emitter.duration = 10;
        emitter.emissionRate = 10;
        emitter.startLifecycle.setScalar(1);
        emitter.shapeType = ShapeType.Circle;
        emitter.radius = 2.0;
        emitter.emitLocation = EmitLocation.Shell;

        // add the texture sheet module
        let sheetModule = simulator.addModule(ParticleTextureSheetModule);
        // set how many sub-tiles each column contains
        sheetModule.clipCol = 4;
        // set the total number of sub-tiles in the whole texture
        sheetModule.totalClip = 4 * 4;
        // set the width of the whole texture
        sheetModule.textureWidth = material.baseMap.width;
        // set the height of the whole texture
        sheetModule.textureHeight = material.baseMap.height;
        // set the texture animation play rate
        sheetModule.playRate = 10.0;

        // start playing
        particleSystem.play();
    }
}

new Sample_OverLifeRotationModule().run();
