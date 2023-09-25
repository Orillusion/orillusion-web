import { Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, SphereGeometry, Object3D, MeshRenderer, LitMaterial, SpotLight, BoxGeometry, Vector3 } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

// sample of SpotLight
class Sample_SpotLight {
    scene: Scene3D;
    private Ori: dat.GUI | undefined

    async run() {
        Engine3D.setting.occlusionQuery.enable = false;
        Engine3D.setting.shadow.enable = true;
        Engine3D.setting.shadow.pointShadowBias = 0.0001;
        await Engine3D.init({});

        const gui = new dat.GUI()
            gui.domElement.style.zIndex = '10'
            gui.domElement.parentElement.style.zIndex = '10'

            this.Ori = gui.addFolder('Orillusion')
            this.Ori.open()

        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(null, this.scene);
        mainCamera.perspective(60, Engine3D.aspect, 1, 2000.0);
        //set camera data
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(0, -25, 1000);

        await this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);
    }

    initScene() {
        this.makeLight();
        this.buildScene();
    }

    private makeLight(): void {
        let lightObj3D = new Object3D();

        let renderer = lightObj3D.addComponent(MeshRenderer);
        renderer.geometry = new SphereGeometry(5, 30, 30);
        renderer.material = new LitMaterial();
        this.scene.addChild(lightObj3D);

        let spotLight = lightObj3D.addComponent(SpotLight);
        lightObj3D.x = -86;
        lightObj3D.y = 200;
        lightObj3D.z = -300;
        lightObj3D.transform.rotationX = 342;
        lightObj3D.transform.rotationY = 360;
        lightObj3D.transform.rotationZ = 199;
        spotLight.lightColor.r = 255 / 255;
        spotLight.lightColor.g = 157 / 255;
        spotLight.lightColor.b = 5 / 255;
        spotLight.intensity = 80;
        spotLight.radius = 1;
        spotLight.range = 787;
        spotLight.outerAngle = 96;
        spotLight.innerAngle = 0;
        spotLight.castShadow = true;

        let DirLight = this.Ori.addFolder('SpotLight')
            DirLight.add(spotLight, 'enable')
            DirLight.add(spotLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(spotLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(spotLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(spotLight, 'lightColor')
            DirLight.add(spotLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(spotLight, 'radius', 0.0, 10.0, 0.01)
            DirLight.add(spotLight, 'castShadow')
            DirLight.open()
    }

    // Build a slightly complex scene
    private buildScene(): void {
        let mat = new LitMaterial();
        mat.baseMap = Engine3D.res.grayTexture;

        let floor = new Object3D();
        let mr = floor.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(2000, 1, 2000);
        mr.material = mat;
        this.scene.addChild(floor);

        let box = new BoxGeometry(1, 1, 1);
        let wall_w = new Object3D();
        wall_w.localScale = new Vector3(500, 100, 10);
        wall_w.localPosition = new Vector3(0, 50, 0);
        let mrw = wall_w.addComponent(MeshRenderer);
        mrw.geometry = box;
        mrw.material = mat;
        this.scene.addChild(wall_w);

        let wall_a = new Object3D();
        wall_a.localScale = new Vector3(10, 100, 500);
        wall_a.localPosition = new Vector3(250, 50, 0);
        let mra = wall_a.addComponent(MeshRenderer);
        mra.geometry = box;
        mra.material = mat;
        this.scene.addChild(wall_a);

        let wall_d = new Object3D();
        wall_d.localScale = new Vector3(10, 100, 500);
        wall_d.localPosition = new Vector3(-250, 50, 0);
        let mrd = wall_d.addComponent(MeshRenderer);
        mrd.geometry = box;
        mrd.material = mat;
        this.scene.addChild(wall_d);
    }
}

new Sample_SpotLight().run();