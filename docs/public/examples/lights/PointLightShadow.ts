import { Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, Vector3, View3D, SphereGeometry, Object3D, MeshRenderer, LitMaterial, PointLight, BoxGeometry, Object3DUtil } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

// sample of point light shadow
class Sample_PointLightShadow {
    scene: Scene3D;
    lightObj: Object3D;
    private Ori: dat.GUI | undefined
    async run() {

        Engine3D.setting.shadow.enable = true;
        Engine3D.setting.shadow.debug = true;
        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.material.materialDebug = true;

        await Engine3D.init({});

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);
        //set camera data
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(0, -45, 500);

        await this.initScene(this.scene);
        sky.relativeTransform = this.lightObj.transform;

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        let lightObj3D = this.lightObj = new Object3D();
        lightObj3D.y = 25;

        //make point light
        let pointLight = lightObj3D.addComponent(PointLight);
        pointLight.range = 100;
        pointLight.intensity = 5;
        pointLight.castShadow = true;
        scene.addChild(lightObj3D);

        //show gui
        const gui = new dat.GUI()
            gui.domElement.style.zIndex = '10'
            gui.domElement.parentElement.style.zIndex = '10'

            this.Ori = gui.addFolder('Orillusion')
            this.Ori.open()
            let DirLight = this.Ori.addFolder('PointLight')
            DirLight.add(pointLight, 'enable')
            DirLight.add(pointLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(pointLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(pointLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(pointLight, 'lightColor')
            DirLight.add(pointLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(pointLight, 'range', 0.0, 100.0, 0.01)
            DirLight.add(pointLight, 'castShadow')
            DirLight.open()

        let cubeGeometry = new BoxGeometry(10, 10, 10);
        let litMaterial = new LitMaterial();

        //make 20 box to receive light and cast shadow
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                let box = new Object3D();
                let renderer = box.addComponent(MeshRenderer);
                renderer.geometry = cubeGeometry;
                renderer.material = litMaterial;
                renderer.castShadow = true;
                scene.addChild(box);

                box.transform.x = i * 40 - 200;
                box.transform.y = 5;
                box.transform.z = j * 40 - 200;
            }
        }

        //create floor
        let floor = Object3DUtil.GetSingleCube(2000, 1, 2000, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
    }
}

new Sample_PointLightShadow().run();