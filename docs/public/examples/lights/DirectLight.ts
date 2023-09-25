import { Scene3D, HoverCameraController, Engine3D, AtmosphericComponent, Object3D, Camera3D, Vector3, View3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, BoxGeometry, CameraUtil, Transform } from "@orillusion/core";
import dat from 'dat.gui'

//sample of direction light
class Sample_DirectLight {
    scene: Scene3D;
    lightObj3D: any;
    private Ori: dat.GUI | undefined

    async run() {
        await Engine3D.init({});

        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);
        //set camera data
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(0, -25, 1000);

        sky.relativeTransform = this.initLight();
        this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);

    }

    // create direction light
    private initLight(): Transform {
        this.lightObj3D = new Object3D();
        this.lightObj3D.x = 0;
        this.lightObj3D.y = 30;
        this.lightObj3D.z = -40;
        this.lightObj3D.rotationX = 46;
        this.lightObj3D.rotationY = 62;
        this.lightObj3D.rotationZ = 0;
        let directLight = this.lightObj3D.addComponent(DirectLight);
        //Convert color temperature to color object
        directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        directLight.castShadow = false;
        directLight.intensity = 20;
        this.showLightGUI(directLight);
        this.scene.addChild(this.lightObj3D);
        return directLight.transform;
    }

    // show gui
    // control light direction/color/intensity/indirect
    private showLightGUI(light: DirectLight): void {
        this.Ori.addFolder('DirectLight');
        this.Ori.add(light.transform, 'rotationX', 0.0, 360.0, 0.01);
        this.Ori.add(light.transform, 'rotationY', 0.0, 360.0, 0.01);
        this.Ori.add(light.transform, 'rotationZ', 0.0, 360.0, 0.01);
        this.Ori.addColor(light, 'lightColor');
        this.Ori.add(light, 'intensity', 0.0, 160.0, 0.01);
        this.Ori.add(light, 'indirect', 0.0, 10.0, 0.01);
        this.Ori.add(light, 'castShadow');
        this.Ori.open();
    }

    initScene() {
        let mat = new LitMaterial();
        mat.baseMap = Engine3D.res.grayTexture;
        mat.roughness = 0.4;
        mat.metallic = 0.6;
        let floor = new Object3D();
        let render = floor.addComponent(MeshRenderer);
        render.geometry = new BoxGeometry(1000, 1, 1000);
        render.material = mat;
        this.scene.addChild(floor);
    }
}

new Sample_DirectLight().run();