import { Stats } from '@orillusion/stats';
import { Engine3D, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, Object3D, MeshRenderer, BoxGeometry, LitMaterial, DirectLight, KelvinUtil, View3D, Vector3, Vector3Ex, UnLitMaterial, InstanceDrawComponent, LambertMaterial, Time, BoundingBox, Color } from '@orillusion/core';
import * as dat from 'dat.gui';

// simple base demo
class Sample_SphereDraw {
    scene: Scene3D;
    public anim: boolean = false;
    async run() {
        // init engine
        Engine3D.setting.pick.enable = false;
        await Engine3D.init({ renderLoop: () => this.renderLoop() });
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
        hoverCameraController.setCamera(15, -15, 100);

        // add a basic direct light
        let lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 60;
        lightObj.rotationZ = 150;
        let dirLight = lightObj.addComponent(DirectLight);
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(53355);
        dirLight.intensity = 10;
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
        f.add({ count: '100000' }, 'count').name('object count');
        f.add({ count: '1000' }, 'count').name('material count');
        f.add(this, 'anim').onChange(() => this.anim != this.anim);
        f.open();

        this.initScene();
    }

    private _list: Object3D[] = [];
    initScene() {
        let shareGeometry = new BoxGeometry();
        let materials:UnLitMaterial[] = [];
        for (let i = 0; i < 1000; i++) {
            let mat = new UnLitMaterial()
            mat.baseColor = Color.random();
            materials.push(mat)
        }

        let group = new Object3D();
        this.scene.addChild(group);
        let count = 100000;
        for (let i = 0; i < count; i++) {
            let pos = Vector3Ex.sphere(100);
            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = shareGeometry;
            mr.material = materials[Math.floor(Math.random() * materials.length)];
            obj.localPosition = pos;
            group.addChild(obj);
            this._list.push(obj);

            let d = obj.transform.worldPosition.subtract(group.transform.worldPosition);
            d.normalize();

            let sc = Math.random() * 0.5 + 0.1;
            obj.transform.scaleX = sc;
            obj.transform.scaleY = sc;
            obj.transform.scaleZ = Math.random() * 5 + 1;

            obj.transform.forward = d;
        }
        group.addComponent(InstanceDrawComponent);
        // use localDetailRot to update rotation by time
        group.transform.localDetailRot = new Vector3(0, 0.01, 0);
        group.bound = new BoundingBox(Vector3.SAFE_MIN, Vector3.SAFE_MAX);
        this._list.push(group);
    }

    renderLoop() {
        if (this.anim) {
            for (let i = 0; i < this._list.length; i++) {
                let element = this._list[i];
                element.transform.localChange = true;
            }
        }
    }
}

new Sample_SphereDraw().run();
