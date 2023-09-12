import { Object3D, Scene3D, Engine3D, CameraUtil, HoverCameraController, View3D, AtmosphericComponent, DirectLight, KelvinUtil, MeshRenderer, LitMaterial } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

class Sample_PBRMaterial {
    lightObj3D: Object3D;
    scene: Scene3D;
    private Ori: dat.GUI | undefined

    async run() {
        await Engine3D.init({ canvasConfig: { alpha: true, zIndex: 11, backgroundImage: 'https://cdn.orillusion.com/logo/bg.webp' } });

        //config settings
        Engine3D.setting.shadow.shadowBound = 50;
        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            blurX: 4,
            blurY: 4,
            luminosityThreshold: 0.8,
            strength: 0.86,
            radius: 4,
            debug: false
        };

        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '999'
        gui.domElement.parentElement.style.zIndex = '999'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        this.scene = new Scene3D();
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 0.01, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(-25, -5, 30);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        Engine3D.startRenderView(view);
        await this.initScene();
    }

    async initScene() {
        /******** sky *******/
        let sky: AtmosphericComponent;
        {
            sky = this.scene.addComponent(AtmosphericComponent);
            sky.enable = false;
        }
        /******** light *******/
        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.rotationX = 124;
            this.lightObj3D.rotationY = 327;
            this.lightObj3D.rotationZ = 10;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 72;
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
            this.scene.addChild(this.lightObj3D);

            sky.relativeTransform = this.lightObj3D.transform;
        }

        {
            let model = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf', {})) as Object3D;
            let renderList = model.getComponentsInChild(MeshRenderer);
            for (const item of renderList) {
                let material = item.material;
                if (material instanceof LitMaterial) {
                    material.metallic = 1;
                }
            }
            model.transform.scaleX = 10;
            model.transform.scaleY = 10;
            model.transform.scaleZ = 10;
            model.transform.y = -5;

            this.scene.addChild(model);
        }
    }
}

new Sample_PBRMaterial().run();