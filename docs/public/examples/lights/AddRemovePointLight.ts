import { AtmosphericComponent, BoxGeometry, CameraUtil, Color, Engine3D, HoverCameraController, LitMaterial, MeshRenderer, Object3D, Object3DUtil, PointLight, Scene3D, SphereGeometry, View3D } from '@orillusion/core';
import dat from 'dat.gui';

class Sample_AddRemovePointLight {
    scene: Scene3D;
    hoverCameraController: HoverCameraController;
    lightObj: any;

    constructor() {}

    async run() {
        await Engine3D.init({});

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);
        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);
        //set camera data
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(0, -25, 500);

        await this.initScene(this.scene);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);
    }

    initScene(scene: Scene3D) {
        let lightObj3D = new Object3D();
        let render = lightObj3D.addComponent(MeshRenderer);
        render.geometry = new SphereGeometry(5, 30, 30);
        render.material = new LitMaterial();

        scene.addChild(lightObj3D);

        let cube = new BoxGeometry(10, 10, 10);
        let mat = new LitMaterial();

        // make 20 box
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                let box = new Object3D();
                let mr2 = box.addComponent(MeshRenderer);
                mr2.geometry = cube;
                mr2.material = mat;
                scene.addChild(box);

                box.transform.x = i * 40 - 200;
                box.transform.y = 5;
                box.transform.z = j * 40 - 200;
            }
        }

        //create floor
        let floor = Object3DUtil.GetSingleCube(2000, 1, 2000, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);

        let list: Object3D[] = [];

        var button_add = {
            addPointLight: () => {
                for (let i = 0; i < 5; i++) {
                    let pointLight = new Object3D();
                    let script = pointLight.addComponent(PointLight);
                    script.lightColor = Color.random();
                    script.intensity = 3 * Math.random() + 1;
                    script.range = 45 * Math.random() + 80;
                    script.castShadow = true;
                    pointLight.x = Math.random() * 200 - 100;
                    pointLight.y = 5;
                    pointLight.z = Math.random() * 200 - 100;
                    scene.addChild(pointLight);
                    list.push(pointLight);
                }
            }
        };

        var button_remove = {
            removePointLight: () => {
                for (let i = 0; i < Math.min(1, list.length); i++) {
                    let index = Math.floor(list.length * Math.random());
                    let obj = list[index];
                    if (obj) {
                        list.splice(index, 1);
                        scene.removeChild(obj);
                        obj.destroy();
                    }
                }
            }
        };
        let gui = new dat.GUI();
        let f = gui.addFolder('Orillusion');
        f.add(button_add, 'addPointLight');
        f.add(button_remove, 'removePointLight');
    }
}

new Sample_AddRemovePointLight().run();
