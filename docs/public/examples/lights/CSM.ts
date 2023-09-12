import { Scene3D, HoverCameraController, Engine3D, AtmosphericComponent, Object3D, Camera3D, Vector3, View3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, BoxGeometry, CameraUtil, SphereGeometry, Color, Object3DUtil, BlendMode } from "@orillusion/core";
import dat from 'dat.gui'

//sample of csm
class Sample_CSM {
    scene: Scene3D;
    view: View3D;
    light: DirectLight;
    boxRenderer: MeshRenderer;
    viewCamera: Camera3D;
    private Ori: dat.GUI | undefined
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.shadowSize = 1024;
        await Engine3D.init({ renderLoop: () => { this.loop(); } });

        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
        //set camera data
        mainCamera.object3D.z = -15;
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(-15, -35, 200);

        sky.relativeTransform = this.initLight('mainLight', 30, 45);
        this.initLight('subLight', 10, 10);
        this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        this.view = view;
        this.viewCamera = mainCamera;

        mainCamera.enableCSM = true;
        this.Ori.addFolder('CSM')
        this.Ori.add(mainCamera, 'enableCSM');
        // this.Ori.add(Engine3D.setting.shadow, 'csmScatteringExp', 0.5, 1.0, 0.01);
        // this.Ori.add(Engine3D.setting.shadow, 'csmMargin', 0.01, 0.5, 0.01);
        this.Ori.open();
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

        // GUIUtil.renderDirLight(sunLight);
        // let DirLight = this.Ori.addFolder('sunLight')
        //     DirLight.add(sunLight, 'enable')
        //     DirLight.add(sunLight.transform, 'rotationX', 0.0, 360.0, 0.01)
        //     DirLight.add(sunLight.transform, 'rotationY', 0.0, 360.0, 0.01)
        //     DirLight.add(sunLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
        //     DirLight.addColor(sunLight, 'lightColor')
        //     DirLight.add(sunLight, 'intensity', 0.0, 160.0, 0.01)
        //     DirLight.add(sunLight, 'indirect', 0.0, 10.0, 0.01)
        //     DirLight.add(sunLight, 'castShadow')
        //     DirLight.open()
        this.scene.addChild(lightObj3D);
        this.light = sunLight;
        return sunLight.transform;
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
            let angle = Math.PI * 4 * i / 50;
            item.x = Math.sin(angle) * (50 + i ** 1.4);
            item.z = Math.cos(angle) * (50 + i ** 1.4);
            item.y = 4;
            let scale = ((i ** 1.4) * 5 + 1000) / 1000;
            item.scaleX = item.scaleZ = scale;
            item.scaleY = scale * 5;
            this.scene.addChild(item);
        }
    }

    createBox() {
        let box = new Object3D();
        let geom = new BoxGeometry(1, 1, 1);
        let material = new LitMaterial();
        material.transparent = true;
        material.shaderState.depthWriteEnabled = false
        material.blendMode = BlendMode.NORMAL;
        material.cullMode = "front";
        material.baseColor = new Color(0.2, 0.2, 0, 0.1);
        let renderer = box.addComponent(MeshRenderer);
        renderer.material = material;
        renderer.geometry = geom;
        // this.scene.addChild(box);
        this.boxRenderer = renderer;
    }

    private _shadowPos: Vector3 = new Vector3();
    private _shadowCameraTarget: Vector3 = new Vector3();
    loop() {
        let viewCamera = this.viewCamera;
        let light = this.light;
        let view = this.view;
        if (!this.boxRenderer || !this.viewCamera.csm)
            return;


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
        view.graphic3D.drawLines('shadowLine', [this._shadowPos, this._shadowCameraTarget], new Color(1, 1, 0, 1));
    }

}


new Sample_CSM().run();
