import { Scene3D, HoverCameraController, Engine3D, AtmosphericComponent, Object3D, Camera3D, Vector3, View3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, BoxGeometry, CameraUtil, SphereGeometry, Color, Object3DUtil, BlendMode } from '@orillusion/core';
import * as dat from 'dat.gui';
import { Graphic3D } from '@orillusion/graphic';

//sample of csm
class Sample_CSM {
    scene: Scene3D;
    view: View3D;
    light: DirectLight;
    boxRenderer: MeshRenderer;
    viewCamera: Camera3D;
    GUIHelp: dat.GUI;
    graphic3D: Graphic3D;
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.shadowSize = 2048;
        Engine3D.setting.shadow.shadowBound = 512;
        Engine3D.setting.shadow.shadowBias = 0.01;

        await Engine3D.init({
            renderLoop: () => {
                this.loop();
            }
        });
        this.GUIHelp = new dat.GUI();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(undefined, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
        //set camera data
        mainCamera.object3D.z = -15;
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(-15, -35, 200);

        sky.relativeTransform = this.initLight('mainLight', 3, 45);
        this.initLight('subLight', 2, 10);
        this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        this.view = view;
        this.viewCamera = mainCamera;

        this.graphic3D = new Graphic3D();
        this.scene.addChild(this.graphic3D);

        mainCamera.enableCSM = true;

        let f = this.GUIHelp.addFolder('CSM');
        f.add(mainCamera, 'enableCSM');
        f.add(Engine3D.setting.shadow, 'csmScatteringExp', 0.5, 1.0, 0.01);
        f.add(Engine3D.setting.shadow, 'csmMargin', 0.01, 0.5, 0.01);
        f.add(Engine3D.setting.shadow, 'csmAreaScale', 0.1, 1, 0.01);
        f.open();
        Engine3D.startRenderView(view);
    }

    // create direction light
    private initLight(name: string, intensity: number, rotY: number) {
        let lightObj3D = new Object3D();
        lightObj3D.name = name;
        lightObj3D.rotationX = 46;
        lightObj3D.rotationY = 62 + rotY;
        lightObj3D.rotationZ = 0;
        let sunLight = lightObj3D.addComponent(DirectLight);
        sunLight.intensity = intensity;
        sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553);
        sunLight.castShadow = true;

        this.renderDirLight(sunLight, true, name);
        this.scene.addChild(lightObj3D);
        this.light = sunLight;
        return sunLight.transform;
    }

    public renderDirLight(light: DirectLight, open: boolean = true, name?: string) {
        name ||= 'DirectLight';
        let f = this.GUIHelp.addFolder(name);
        f.add(light, 'enable');
        f.open();
    }

    initScene() {
        {
            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(20, 100, 20);
            mr.material = new LitMaterial();
            this.scene.addChild(obj);
        }

        this.createBox();
        {
            let mat = new LitMaterial();
            mat.baseMap = Engine3D.res.grayTexture;
            let floor = new Object3D();
            let mr = floor.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(10000, 1, 10000);
            mr.material = mat;
            this.scene.addChild(floor);
        }

        for (let i = 0; i < 1000; i++) {
            let item = Object3DUtil.GetSingleSphere(4, 0.6, 0.4, 0.2);
            let angle = (Math.PI * 4 * i) / 50;
            item.x = Math.sin(angle) * (50 + i ** 1.4);
            item.z = Math.cos(angle) * (50 + i ** 1.4);
            item.y = 4;
            let scale = (i ** 1.4 * 5 + 1000) / 1000;
            item.scaleX = item.scaleZ = scale;
            item.scaleY = scale * 5;
            this.scene.addChild(item);
        }
    }

    createBox() {
        let box = new Object3D();
        let geom = new BoxGeometry(1, 1, 1);
        let material = new LitMaterial();
        material.blendMode = BlendMode.NORMAL;
        material.cullMode = 'front';
        material.baseColor = new Color(0.2, 0.2, 0, 0.1);
        let renderer = box.addComponent(MeshRenderer);
        renderer.material = material;
        renderer.geometry = geom;
        this.boxRenderer = renderer;
    }

    private _shadowPos: Vector3 = new Vector3();
    private _shadowCameraTarget: Vector3 = new Vector3();
    loop() {
        let viewCamera = this.viewCamera;
        let light = this.light;
        let view = this.view;
        if (!this.boxRenderer || !this.viewCamera.csm) return;

        let csmBound = this.viewCamera.csm.children[0].bound;
        //update box
        let size = this.viewCamera.getCSMShadowWorldExtents(0) * 2;
        this.boxRenderer.object3D.scaleX = size;
        this.boxRenderer.object3D.scaleY = size;
        this.boxRenderer.object3D.scaleZ = this.viewCamera.csm.children[0].shadowCamera.far;

        this.boxRenderer.object3D.localRotation = light.transform.localRotation;
        this.boxRenderer.object3D.localPosition = csmBound.center;

        // light direction
        this._shadowPos.copy(light.direction).normalize(viewCamera.far);
        csmBound.center.add(this._shadowPos, this._shadowCameraTarget);
        csmBound.center.subtract(this._shadowPos, this._shadowPos);
        this.graphic3D.drawLines('shadowLine', [this._shadowPos, this._shadowCameraTarget], new Color(1, 1, 0, 1));
    }
}

new Sample_CSM().run();
