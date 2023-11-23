import { AtmosphericComponent, BoxGeometry, CameraUtil, CylinderGeometry, DirectLight, Engine3D, GlobalFog, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PostProcessingComponent, Scene3D, View3D, Color } from '@orillusion/core';
import * as dat from 'dat.gui';

class Sample_Fog {
    constructor() {}
    lightObj: Object3D;
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.shadowSize = 2048;
        Engine3D.setting.shadow.shadowBound = 1000;

        await Engine3D.init();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);
        sky.sunY = 0.6;
        let mainCamera = CameraUtil.createCamera3DObject(this.scene, 'camera');
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
        let ctrl = mainCamera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(0, -10, 400);

        await this.initScene();
        sky.relativeTransform = this.lightObj.transform;
        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        Engine3D.startRenderView(view);

        let postProcessing = this.scene.addComponent(PostProcessingComponent);
        let fog = postProcessing.addPost(GlobalFog);

        let gui = new dat.GUI();
        let f = gui.addFolder('GlobalFog');
        f.add(fog, 'fogType', {
            Liner: 0,
            Exp: 1,
            Exp2: 2
        });
        f.add(fog, 'start', -0.0, 1000.0, 0.0001);
        f.add(fog, 'end', -0.0, 1000.0, 0.0001);
        f.add(fog, 'fogHeightScale', 0.0001, 1.0, 0.0001);
        f.add(fog, 'density', 0.0, 1.0, 0.0001);
        f.add(fog, 'ins', 0.0, 5.0, 0.0001);
        f.add(fog, 'skyFactor', 0.0, 1.0, 0.0001);
        f.add(fog, 'skyRoughness', 0.0, 1.0, 0.0001);
        f.add(fog, 'overrideSkyFactor', 0.0, 1.0, 0.0001);
        f.addColor({ color: Object.values(fog.fogColor).map((v) => v * 255) }, 'color').onChange((v) => {
            fog.fogColor = new Color().copyFromArray(v);
        });
        f.open();
    }

    initScene() {
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 45;
            this.lightObj.rotationY = 110;
            this.lightObj.rotationZ = 0;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 30;
            this.scene.addChild(this.lightObj);
        }

        {
            let mat = new LitMaterial();
            mat.roughness = 0.5;
            mat.metallic = 0.5;

            let floor = new Object3D();
            let mr = floor.addComponent(MeshRenderer);
            mr.geometry = new CylinderGeometry(10000, 10000, 1, 20, 20, false);
            mr.materials = [mat, mat, mat];
            this.scene.addChild(floor);
        }

        this.createPlane(this.scene);
    }

    private createPlane(scene: Scene3D) {
        let mat = new LitMaterial();
        mat.roughness = 1.0;
        mat.metallic = 0.0;

        const length = 10;
        let cubeGeometry = new BoxGeometry(1, 1, 1);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let building: Object3D = new Object3D();
                let mr = building.addComponent(MeshRenderer);
                mr.material = mat;
                mr.geometry = cubeGeometry;
                building.localScale = building.localScale;
                building.x = (i - 5) * (Math.random() * 0.5 + 0.5) * 100;
                building.z = (j - 5) * (Math.random() * 0.5 + 0.5) * 100;
                building.scaleX = 10 * (Math.random() * 0.5 + 0.5) * 2;
                building.scaleZ = 10 * (Math.random() * 0.5 + 0.5) * 2;
                building.scaleY = 200 * (Math.random() * 0.5 + 0.5);
                scene.addChild(building);
            }
        }
    }
}

new Sample_Fog().run();
