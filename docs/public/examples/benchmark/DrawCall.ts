import { Engine3D, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, Object3D, BoxGeometry, DirectLight, KelvinUtil, View3D, LambertMaterial, OcclusionSystem, BoundingBox, Color, MeshRenderer, Vector3, Vector3Ex } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';

// simple base demo
export class Sample_drawCallShareGeometry {
    scene: Scene3D;
    public anim: boolean = false;
    private Ori: dat.GUI | undefined;

    async run() {
        Engine3D.setting.pick.enable = false;
        // init engine
        await Engine3D.init({ renderLoop: () => this.renderLoop() });

        OcclusionSystem.enable = false;
        // create new Scene
        this.scene = new Scene3D();

        // add performance stats
        this.scene.addComponent(Stats);

        // add an Atmospheric sky enviroment
        let sky = this.scene.addComponent(AtmosphericComponent);
        sky.sunY = 0.6;

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
        dirLight.intensity = 10;
        dirLight.indirect = 1;
        this.scene.addChild(lightObj);

        sky.relativeTransform = dirLight.transform;

        // create a view with target this.scene and camera
        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        // start render
        Engine3D.startRenderView(view);

        let gui = new dat.GUI();
        let f = gui.addFolder('Orillusion');
        f.add({ count: '50000' }, 'count');
        f.add(this, 'anim').onChange(() => this.anim != this.anim);
        f.open();

        this.initScene();
    }

    private _list: Object3D[] = [];
    private _rotList: number[] = [];
    initScene() {
        let shareGeometry = new BoxGeometry();
        const mat = new LambertMaterial();
        mat.baseColor = new Color(Math.random() / 2 + 0.5, Math.random() / 2 + 0.5, Math.random() / 2 + 0.5);

        let group = new Object3D();
        let count = 5 * 10000;
        let ii = 0;
        for (let i = 0; i < count; i++) {
            let pos = Vector3Ex.sphereXYZ(ii * 60 + 20, ii * 60 + 100, 100, i * 0.001 + 10, 100);
            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = shareGeometry;
            mr.material = mat;
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

            obj.transform.localDetailRot = new Vector3((Math.random() * 1 - 1 * 0.5) * 2.0 * Math.random() * 50 * 0.001 * 0.5, (Math.random() * 1 - 1 * 0.5) * 2.0 * Math.random() * 50 * 0.001 * 0.5, (Math.random() * 1 - 1 * 0.5) * 2.0 * Math.random() * 50 * 0.001 * 0.5);
            if (i % 10000 == 0) {
                ii++;
            }
        }
        group.transform.localDetailRot = new Vector3(0, 0.001, 0);
        this._rotList.push(1.0 * 0.35);

        group.bound = new BoundingBox(Vector3.SAFE_MIN, Vector3.SAFE_MAX);
        this._list.push(group);
        this.scene.addChild(group);
    }

    renderLoop() {
        if (this.anim) {
            let i = 0;
            for (let i = 0; i < this._list.length; i++) {
                const element = this._list[i];
                element.transform.localChange = true;
            }
        }
    }
}

new Sample_drawCallShareGeometry().run();
