import { AtmosphericComponent, BoundingBox, BoxGeometry, CameraUtil, ComponentBase, Engine3D, HoverCameraController, LitMaterial, MeshRenderer, Object3D, Object3DUtil, PointLight, Quaternion, Scene3D, SphereGeometry, Time, UUID, Vector3, View3D, } from "@orillusion/core";
import { Stats } from '@orillusion/stats'
import * as dat from 'dat.gui';

class Sample_PointLight {
    scene: Scene3D;
    hoverCameraController: HoverCameraController;
    lightObj: any;
    private Ori: dat.GUI | undefined
    constructor() { }

    async run() {

        await Engine3D.init({});

        this.scene = new Scene3D();
        this.scene.addComponent(Stats)
        let sky = this.scene.addComponent(AtmosphericComponent);
        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);
        //set camera data
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(0, -25, 500);

        await this.initScene(this.scene);
        sky.relativeTransform = this.lightObj.transform;

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);
    }

    initScene(scene: Scene3D) {
        let lightObj3D = this.lightObj = new Object3D();
        let render = lightObj3D.addComponent(MeshRenderer);
        render.geometry = new SphereGeometry(5, 30, 30);
        render.material = new LitMaterial();

        scene.addChild(lightObj3D);

        let pointlights = new Object3D();
        let script = pointlights.addComponent(PointLightsScript);
        script.beginAnim();
        scene.addChild(pointlights);

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

                box.transform.x = i * 40 - 300;
                box.transform.y = 5;
                box.transform.z = j * 40 - 200;
            }
        }

        //create floor
        let floor = Object3DUtil.GetSingleCube(2000, 1, 2000, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
    }
}

class PointLightItem {
    public dir: Vector3 = new Vector3();
    public speed: number = 300;
    public mass: number = 10;
}

class PointLightsScript extends ComponentBase {
    private _points: PointLight[];
    private _pointLightItems: PointLightItem[];
    private _startAnim: boolean = false;

    private static geo: SphereGeometry;
    private static mat: LitMaterial
    private static boundBox: BoundingBox;

    private _geo: SphereGeometry;
    private _mat: LitMaterial;
    private _boundBox: BoundingBox;

    constructor() {
        super();
        PointLightsScript.geo ||= new SphereGeometry(0.5, 6, 6);
        PointLightsScript.mat ||= new LitMaterial();
        PointLightsScript.boundBox ||= new BoundingBox(new Vector3(0, 10, 0), new Vector3(500, 50, 500));

        this._geo = PointLightsScript.geo;
        this._mat = PointLightsScript.mat;
        this._boundBox = PointLightsScript.boundBox;
        this._points = [];
        this._pointLightItems = [];

        this._startAnim = false;

        let gui = new dat.GUI()
        let f = gui.addFolder('random pointLight');
        f.add({'append light': () => {
            this.beginAnim();
        }}, 'append light');
        f.add({'remove light': () => {
            this.stopAnim();
        }}, 'remove light');
        f.open();
    }

    public beginAnim() {
        this._startAnim = true;
        this.transform.enable = true;

        const count = 100;
        for (let i = 0; i < count; i++) {
            this.createLight();
        }

    }

    public stopAnim() {
        this._startAnim = false;
        this.transform.enable = false;

        for (let i = 0; i < this._points.length; i++) {
            const element = this._points[i];
            this.object3D.removeChild(element.object3D);
            element.destroy();
        }
        this._points.length = 0;
    }

    private createLight() {
        let obj = new Object3D();
        let poi = obj.addComponent(PointLight);
        poi.name = UUID();
        poi.transform.x = this._boundBox.center.x + this._boundBox.extents.x * Math.random();
        poi.transform.y = 10;//this._boundBox.center.y + this._boundBox.extents.y * Math.random();
        poi.transform.z = this._boundBox.center.z + this._boundBox.extents.z * Math.random();
        poi.range = 30
        poi.r = Math.random() + 0.1;
        poi.g = Math.random() + 0.1;
        poi.b = Math.random() + 0.1;
        poi.intensity = Math.random() * 1.5 + 10;
        poi.range *= Math.random() * 0.5 + 0.5;


        this.object3D.addChild(obj);
        this._points.push(poi);

        let item = new PointLightItem();
        Quaternion.HELP_0.fromEulerAngles(Math.random() * 360, Math.random() * 360, Math.random() * 360);
        item.dir = Quaternion.HELP_0.transformVector(Vector3.FORWARD);
        item.speed = 50 + Math.random() * 150;
        item.mass = 5 + Math.random() * 5;
        this._pointLightItems.push(item);
        return poi;
    }

    onUpdate(): void {
        if (!this._startAnim)
            return;
        if (Time.delta > 30)
            return;
        for (let i = 0; i < this._points.length; i++) {
            const po = this._points[i];
            const pd = this._pointLightItems[i];

            if (po && pd) {
                pd.mass -= Time.delta * 0.001;
                if (pd.mass < 0) {
                    Quaternion.HELP_0.fromEulerAngles(Math.random() * 360, Math.random() * 360, Math.random() * 360);
                    pd.dir = Quaternion.HELP_0.transformVector(Vector3.FORWARD);
                    pd.speed = 50 + Math.random() * 150;
                    pd.mass = 5 + Math.random() * 5;
                }

                if (!this._boundBox.containsPoint(po.transform.localPosition)) {
                    pd.dir = pd.dir.negate();
                }

                Vector3.HELP_0.copyFrom(pd.dir);
                Vector3.HELP_0.scaleBy(Time.delta * 0.001 * pd.speed * 0.1);

                po.transform.x += Vector3.HELP_0.x;
                // po.transform.y += Vector3.HELP_0.y;
                po.transform.z += Vector3.HELP_0.z;
            }
        }
    }
}

new Sample_PointLight().run();