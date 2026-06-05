import { Scene3D, HoverCameraController, Engine3D, AtmosphericComponent, Object3D, View3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, BoxGeometry, CameraUtil, Object3DUtil } from '@orillusion/core';
import * as dat from 'dat.gui';

// sample of csm
class Sample_CSM {
    scene: Scene3D;
    view: View3D;
    light: DirectLight;
    GUIHelp: dat.GUI;
    engine: Engine3D;
    async run() {
        this.engine = await Engine3D.init({
            setting: {
                shadow: {
                    autoUpdate: true,
                    shadowSize: 2048,
                    shadowBound: 512,
                    shadowBias: 0.01
                }
            }
        });
        this.GUIHelp = new dat.GUI();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        // init camera3D
        let mainCamera = CameraUtil.createCamera3D(undefined, this.scene);
        mainCamera.perspective(60, this.engine.aspect, 1, 5000.0);
        mainCamera.object3D.z = -15;
        mainCamera.object3D.addComponent(HoverCameraController).setCamera(-15, -35, 200);

        // main directional light + CSM
        sky.relativeTransform = this.initLight('mainLight', 3, 45, true);
        this.initLight('subLight', 2, 10, false);
        this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        this.view = view;

        // CSM is controlled by the directional light (0.9.0+)
        let f = this.GUIHelp.addFolder('CSM');
        f.add(this.light, 'enableCSM');
        f.add(this.light, 'cascadeNum', 1, 4, 1);
        f.add(this.engine.setting.shadow, 'csmScatteringExp', 0.5, 1.0, 0.01);
        f.add(this.engine.setting.shadow, 'csmMargin', 0.01, 0.5, 0.01);
        f.add(this.engine.setting.shadow, 'csmAreaScale', 0.1, 1, 0.01);
        f.open();

        this.engine.startRenderView(view);
    }

    // create direction light
    private initLight(name: string, intensity: number, rotY: number, csm: boolean) {
        let lightObj3D = new Object3D();
        lightObj3D.name = name;
        lightObj3D.rotationX = 46;
        lightObj3D.rotationY = 62 + rotY;
        lightObj3D.rotationZ = 0;
        let sunLight = lightObj3D.addComponent(DirectLight);
        sunLight.intensity = intensity;
        sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553);
        sunLight.castShadow = true;
        if (csm) {
            sunLight.enableCSM = true; // 在平行光上启用级联阴影
            this.light = sunLight;
        }
        this.scene.addChild(lightObj3D);
        return sunLight.transform;
    }

    initScene() {
        // 一根高柱，投出跨越多个级联的长阴影
        {
            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(20, 100, 20);
            mr.material = new LitMaterial();
            this.scene.addChild(obj);
        }

        // 地面
        {
            let mat = new LitMaterial();
            mat.baseMap = this.engine.res.grayTexture;
            let floor = new Object3D();
            let mr = floor.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(10000, 1, 10000);
            mr.material = mat;
            this.scene.addChild(floor);
        }

        // 向远处螺旋展开的柱体，用于观察不同距离上的级联阴影
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
}

new Sample_CSM().run();
