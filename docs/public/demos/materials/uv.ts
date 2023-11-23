import { Camera3D, CameraUtil, DirectLight, Engine3D, AtmosphericComponent, View3D, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PlaneGeometry, Scene3D, UnLitMaterial, webGPUContext, Vector4 } from '@orillusion/core';
import * as dat from 'dat.gui';

export class Sample_UV {
    lightObj: Object3D;
    cameraObj: Camera3D;
    scene: Scene3D;
    hover: HoverCameraController;

    constructor() {}

    async run() {
        await Engine3D.init({ canvasConfig: { alpha: false, zIndex: 0 } });
        Engine3D.setting.shadow.debug = false;
        Engine3D.setting.shadow.shadowBound = 5;

        this.scene = new Scene3D();
        // add an Atmospheric sky enviroment
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6;

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, webGPUContext.aspect, 0.01, 5000.0);

        this.hover = camera.object3D.addComponent(HoverCameraController);
        this.hover.setCamera(0, 0, 100);

        // create a view with target scene and camera
        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        // start render
        Engine3D.startRenderView(view);

        await this.initScene();
    }

    async initScene() {
        /******** sky *******/
        {
            this.scene.exposure = 1;
            this.scene.roughness = 0.56;
        }
        /******** light *******/
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 57;
            this.lightObj.rotationY = 347;
            this.lightObj.rotationZ = 10;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 6;
            this.scene.addChild(this.lightObj);
        }

        {
            let tex = await Engine3D.res.loadTexture('https://cdn.orillusion.com/images/T_Fx_Object_229.webp');
            let mat = new UnLitMaterial();
            mat.baseMap = tex;

            let uv = new Vector4(0, 0, 1, 1);
            const GUIHelp = new dat.GUI();
            GUIHelp.add(uv, 'x', -1, 1, 0.001).onChange(() => {
                mat.setUniformVector4(`transformUV1`, uv);
            });
            GUIHelp.add(uv, 'y', -1, 1, 0.001).onChange(() => {
                mat.setUniformVector4(`transformUV1`, uv);
            });
            GUIHelp.add(uv, 'z', -5, 5, 0.01).onChange(() => {
                mat.setUniformVector4(`transformUV1`, uv);
            });
            GUIHelp.add(uv, 'w', -5, 5, 0.01).onChange(() => {
                mat.setUniformVector4(`transformUV1`, uv);
            });

            let plane = new Object3D();
            plane.rotationX = 90;
            let mr = plane.addComponent(MeshRenderer);
            mr.material = mat;
            mr.geometry = new PlaneGeometry(100, 100, 1, 1);
            this.scene.addChild(plane);
        }
    }
}

new Sample_UV().run();
