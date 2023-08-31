import { Stats } from '@orillusion/stats'
import { AtmosphericComponent, BoundingBox, BoxGeometry, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, InstanceDrawComponent, KelvinUtil, LambertMaterial, MeshRenderer, Object3D, OcclusionSystem, Scene3D, Time, Vector3, Vector3Ex, View3D } from '@orillusion/core';
import * as dat from "dat.gui";

// simple base demo
class DrawCall {
    scene: Scene3D;
    public anim: boolean = false;
    private Ori: dat.GUI | undefined

    async run() {

        Engine3D.setting.pick.enable = false;
        // init engine
        await Engine3D.init({renderLoop: () => this.renderLoop()});

        OcclusionSystem.enable = false;
        // create new Scene
        this.scene = new Scene3D();

        // add performance stats
        this.scene.addComponent(Stats);

        // add an Atmospheric sky enviroment
        let sky = this.scene.addComponent(AtmosphericComponent);
        sky.sunY = 0.6

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);

        // add a basic camera controller
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController);
        hoverCameraController.setCamera(15, -15, 300);

        // add a basic direct light
        let lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 60;
        lightObj.rotationZ = 150;
        let dirLight = lightObj.addComponent(DirectLight);
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(5500);
        dirLight.intensity = 100;
        dirLight.indirect = 1;
        this.scene.addChild(lightObj);

        sky.relativeTransform = dirLight.transform;

        // create a view with target this.scene and camera
        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        // start render
        Engine3D.startRenderView(view);


        const gui = new dat.GUI();
        gui.domElement.style.zIndex = '10';
        gui.domElement.parentElement.style.zIndex = '10';

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        const controller = this.Ori.add(this, 'anim');
        controller.onChange(() => {
            // 当控制器值改变时执行的操作
            this.anim != this.anim;
        });

        this.initScene();
    }


    private _list: Object3D[] = [];
    private _rotList: number[] = [];

    initScene() {
        let shareGeometry = new BoxGeometry();
        let material = new LambertMaterial();
        material.baseColor = new Color(
            Math.random(),
            Math.random(),
            Math.random(),
        )

        let group = new Object3D();
        let count = 50000;

        const infoFolder = this.Ori.addFolder('info')
        infoFolder.open(); // 打开文件夹
        infoFolder.add({count}, 'count').name('count')


        let ii = 0;
        // let count = 70000;
        for (let i = 0; i < count; i++) {
            let pos = Vector3Ex.sphereXYZ(ii * 60 + 20, ii * 60 + 100, 100, i * 0.001 + 10, 100);
            // let pos = Vector3Ex.getRandomXYZ(-2, 2);
            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = shareGeometry;
            mr.material = material;
            obj.localPosition = pos;
            group.addChild(obj);
            this._list.push(obj);

            obj.transform.scaleX = Math.random() * 2 + 0.2;
            obj.transform.scaleY = Math.random() * 2 + 0.2;
            obj.transform.scaleZ = Math.random() * 2 + 0.2;

            obj.transform.rotationX = Math.random() * 360;
            obj.transform.rotationY = Math.random() * 360;
            obj.transform.rotationZ = Math.random() * 360;

            this._rotList.push((Math.random() * 1 - 1 * 0.5) * 2.0 * Math.random() * 100);

            if (i % 10000 == 0) {
                ii++;
            }
        }

        group.addComponent(InstanceDrawComponent);
        this._rotList.push(1.0);

        group.bound = new BoundingBox(Vector3.SAFE_MIN, Vector3.SAFE_MAX);
        this._list.push(group);
        this.scene.addChild(group);
    }

    renderLoop() {
        if (this.anim) {
            for (let i = 0; i < this._list.length; i++) {
                const element = this._list[i];
                // element.transform.rotationY += Time.delta * 0.01 * this._rotList[i];
                element.transform._localRot.y += Time.delta * 0.01 * this._rotList[i];
                element.transform._localChange = true;
            }
        }
    }
}

new DrawCall().run()