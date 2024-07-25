import { Engine3D, AtmosphericComponent, KelvinUtil, DirectLight, View3D, CameraUtil, HoverCameraController, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, Scene3D } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

// Sample to load glb file
class Sample_LoadGLB2 {
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.shadowBound = 10;
        Engine3D.setting.shadow.shadowBias = 0.001;
        Engine3D.setting.shadow.autoUpdate = true;

        await Engine3D.init();
        let scene = new Scene3D();
        scene.exposure = 1;
        scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, Engine3D.aspect, 0.1, 5000);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 100);

        // init View3D
        let view = new View3D();
        view.scene = scene;
        view.camera = camera;

        // create direction light
        let lightObj3D = new Object3D();
        lightObj3D.x = 0;
        lightObj3D.y = 30;
        lightObj3D.z = -40;
        lightObj3D.rotationX = 20;
        lightObj3D.rotationY = 160;
        lightObj3D.rotationZ = 0;

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 30;
        scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;

        this.scene = scene;
        atmosphericSky.displaySun = false;
        atmosphericSky.sunRadiance = 1;
        hoverCtrl.setCamera(-45, -45, 10);
        light.intensity = 5;
        Engine3D.startRenderView(view);
        await this.initScene();
    }

    async initScene() {
        /******** load compressed glb by draco *******/
        let model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/BuildingWithCharacters/scene.glb', {
            onProgress: (e) => this.onLoadProgress(e),
            onComplete: (e) => this.onComplete(e)
        });
        this.scene.addChild(model);
        model.scaleX = model.scaleY = model.scaleZ = 0.01;
    }

    onLoadProgress(e) {
        console.log(e);
    }

    onComplete(e) {
        console.log(e);
    }
}
new Sample_LoadGLB2().run();
