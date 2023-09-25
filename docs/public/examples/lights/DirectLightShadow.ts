import { Scene3D, HoverCameraController, Engine3D, AtmosphericComponent, Object3D, Camera3D, Vector3, View3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, BoxGeometry, CameraUtil, SphereGeometry, Color, Object3DUtil } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

//sample of direction light
class Sample_DirectLightShadow {
    scene: Scene3D;
    private Ori: dat.GUI | undefined
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.shadowBound = 400;

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
        mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
        //set camera data
        mainCamera.object3D.z = -15;
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(-15, -35, 200);

        sky.relativeTransform = this.initLight();
        this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        Engine3D.startRenderView(view);
    }

    // create direction light
    private initLight() {
        // add a direction light
        let lightObj3D = new Object3D();
        lightObj3D.rotationX = 46;
        lightObj3D.rotationY = 62;
        lightObj3D.rotationZ = 0;
        let sunLight = lightObj3D.addComponent(DirectLight);
        sunLight.intensity = 15;
        sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553);
        sunLight.castShadow = true;

        let DirLight = this.Ori.addFolder('SunLight')
            DirLight.add(sunLight, 'enable')
            DirLight.add(sunLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(sunLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(sunLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(sunLight, 'lightColor')
            DirLight.add(sunLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(sunLight, 'indirect', 0.0, 10.0, 0.01)
            DirLight.add(sunLight, 'castShadow')
            DirLight.open()
        this.scene.addChild(lightObj3D);
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
        {
            let mat = new LitMaterial();
            mat.baseMap = Engine3D.res.grayTexture;
            // mat.roughness = 0.4;
            // mat.metallic = 0.6;
            let floor = new Object3D();
            let mr = floor.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(10000, 1, 10000);
            mr.material = mat;
            this.scene.addChild(floor);
        }

        {
            for (let i = 0; i < 100; i++) {
                let item = Object3DUtil.GetSingleSphere(4, 0.6, 0.4, 0.2);
                let angle = Math.PI * 4 * i / 50;
                item.x = Math.sin(angle) * (50 + i);
                item.z = Math.cos(angle) * (50 + i);
                // item.y = 4;
                this.scene.addChild(item);
            }
        }
    }
}

new Sample_DirectLightShadow().run();
