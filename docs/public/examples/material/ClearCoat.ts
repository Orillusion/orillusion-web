import { Object3D, Scene3D, Engine3D, CameraUtil, HoverCameraController, View3D, AtmosphericComponent, DirectLight, KelvinUtil, MeshRenderer, LitMaterial, SphereGeometry, Color, SkyRenderer } from '@orillusion/core';
import dat from 'dat.gui';

class Sample_ClearCoat {
    lightObj3D: Object3D;
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.shadowBound = 300;
        await Engine3D.init();

        this.scene = new Scene3D();
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(-25, -5, 300);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        Engine3D.startRenderView(view);
        await this.initScene();
    }

    async initScene() {
        /******** sky *******/
        {
            let sky = this.scene.getOrAddComponent(SkyRenderer);
            sky.map = await Engine3D.res.loadHDRTextureCube('https://cdn.orillusion.com//hdri/sunset.hdr');
            this.scene.envMap = sky.map;
        }
        /******** light *******/
        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.rotationX = 124;
            this.lightObj3D.rotationY = 327;
            this.lightObj3D.rotationZ = 265.38;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 43;

            let gui = new dat.GUI();
            let DirLight = gui.addFolder('DirectLight');
            DirLight.add(directLight, 'enable');
            DirLight.add(directLight.transform, 'rotationX', 0.0, 360.0, 0.01);
            DirLight.add(directLight.transform, 'rotationY', 0.0, 360.0, 0.01);
            DirLight.add(directLight.transform, 'rotationZ', 0.0, 360.0, 0.01);
            DirLight.addColor(
                {
                    lightColor: [directLight.lightColor.r, directLight.lightColor.g, directLight.lightColor.b, 1].map((v, i) => (i == 3 ? v : Math.floor(v * 255)))
                },
                'lightColor'
            ).onChange((v) => {
                directLight.lightColor = new Color(v[0] / 255, v[1] / 255, v[2] / 255, v[3]);
            });
            DirLight.add(directLight, 'intensity', 0.0, 160.0, 0.01);
            DirLight.add(directLight, 'indirect', 0.0, 10.0, 0.01);
            DirLight.add(directLight, 'castShadow');
            DirLight.open();
            this.scene.addChild(this.lightObj3D);
        }

        {
            let clearCoatRoughnessTex = await Engine3D.res.loadTexture('https://cdn.orillusion.com/PBR/ClearCoatTest/T_Imperfections_Wipe_Mask.PNG');
            let space = 50;
            let geo = new SphereGeometry(15, 35, 35);
            for (let i = 0; i < 10; i++) {
                var obj = new Object3D();
                let mr = obj.addComponent(MeshRenderer);
                mr.geometry = geo;
                let mat = new LitMaterial();
                mat.baseColor = new Color(1.0, 0.0, 0.0);
                mat.metallic = 0;
                mat.roughness = 1;
                mat.clearCoatRoughnessMap = clearCoatRoughnessTex;
                // mat.clearcoatFactor = i / 10;
                mat.clearcoatColor = new Color(0.0, 0.0, 0.0);
                mat.clearcoatWeight = 0.65;
                mat.clearcoatFactor = 1;
                mat.clearcoatRoughnessFactor = i / 10;
                mr.material = mat;
                this.scene.addChild(obj);

                obj.x = space * i - space * 10 * 0.5;
            }
        }
    }
}

new Sample_ClearCoat().run();
