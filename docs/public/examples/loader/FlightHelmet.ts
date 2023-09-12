import { Object3D, Scene3D, HoverCameraController, Engine3D, CameraUtil, View3D, SSRPost, HDRBloomPost, AtmosphericComponent, DirectLight, KelvinUtil, Time } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

class Sample_FlightHelmet {
    lightObj3D: Object3D;
    scene: Scene3D;
    autoRotate: boolean = false;
    flightHelmetObj: Object3D;
    private Ori: dat.GUI | undefined

    async run() {
        await Engine3D.init({
            canvasConfig: {
                alpha: true,
                zIndex: 0,
                backgroundImage: 'https://cdn.orillusion.com/logo/bg.webp'
            },
            renderLoop: () => this.loop(),
        });

        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.shadowBound = 10;
        Engine3D.setting.render.postProcessing.ssao.radius = 0.018;
        Engine3D.setting.render.postProcessing.ssao.aoPower = 1;
        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            blurX: 4,
            blurY: 4,
            strength: 1.5,
            luminosityThreshold: 0.1,
            radius: 4,
            debug: false
        };


        this.scene = new Scene3D();
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(-45, -30, 15);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        Engine3D.startRenderView(view);

        await this.initScene();
    }

    async initScene() {
        /******** auto rotate *******/
        {
            const gui = new dat.GUI()
            gui.domElement.style.zIndex = '10'
            gui.domElement.parentElement.style.zIndex = '10'

            this.Ori = gui.addFolder('Orillusion')
            this.Ori.add(this, 'autoRotate')
            this.Ori.open()
        }

        /******** sky *******/
        {
            let atmospheric = this.scene.addComponent(AtmosphericComponent);
            atmospheric.sunY = 0.73;
            atmospheric.sunRadiance = 47;
            atmospheric.enable = false;
        }
        /******** light *******/
        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.rotationX = 53.2;
            this.lightObj3D.rotationY = 220;
            this.lightObj3D.rotationZ = 5.58;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 44;
            this.scene.addChild(this.lightObj3D);
            
            let DirLight = this.Ori.addFolder('DirectLight')
            DirLight.add(directLight, 'enable')
            DirLight.add(directLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(directLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(directLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(directLight, 'lightColor')
            DirLight.add(directLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(directLight, 'indirect', 0.0, 10.0, 0.01)
            DirLight.add(directLight, 'castShadow')
            DirLight.open()
        }

        /******** load model *******/
        {
            let model = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/FlightHelmet/FlightHelmet.gltf', {})) as Object3D;
            model.transform.scaleX = 10;
            model.transform.scaleY = 10;
            model.transform.scaleZ = 10;
            model.transform.y = -2;
            this.scene.addChild(model);
            this.flightHelmetObj = model;
        }
    }

    loop() {
        if (this.flightHelmetObj && this.autoRotate) {
            this.flightHelmetObj.rotationY += Time.delta * 0.05;
        }
    }
}

new Sample_FlightHelmet().run();