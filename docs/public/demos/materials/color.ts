import { Camera3D, DirectLight, Engine3D, ForwardRenderJob, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, Scene3D, SphereGeometry, UnLitMaterial, Color, GUIHelp } from '@orillusion/core';

export class Sample_Materials {
    scene: Scene3D;
    lightObj: Object3D;

    constructor() {}

    async run() {
        await Engine3D.init();
        GUIHelp.init();
        this.scene = new Scene3D();
        let cameraObj = new Object3D();
        cameraObj.name = `cameraObj`;
        let mainCamera = cameraObj.addComponent(Camera3D);
        this.scene.addChild(cameraObj);
        mainCamera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
        cameraObj.addComponent(HoverCameraController);

        await this.initScene();

        let renderJob = new ForwardRenderJob(this.scene);
        Engine3D.startRender(renderJob);
    }

    async initScene() {
        {
            this.lightObj = new Object3D();
            this.lightObj.x = 0;
            this.lightObj.y = 0;
            this.lightObj.z = 0;
            this.lightObj.rotationX = 0;
            this.lightObj.rotationY = 0;
            this.lightObj.rotationZ = 0;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.intensity = 1.7;
            this.scene.addChild(this.lightObj);
        }

        {
            // Lambert
            let sphere = new Object3D();
            let mr = sphere.addComponent(MeshRenderer);
            mr.geometry = new SphereGeometry(2.5, 30, 30);
            let mat = new UnLitMaterial();
            mat.baseColor = new Color(1, 1, 1, 1);
            mr.material = mat;
            this.scene.addChild(sphere);
            sphere.localPosition.set(0, 0, 0);
            GUIHelp.add(mat.baseColor, 'r', 0,1,0.1).onChange(v=>{
                let old = mat.baseColor
                old.r = v
                mat.baseColor = old.clone()
            })
            GUIHelp.add(mat.baseColor, 'g', 0,1,0.1).onChange(v=>{
                let old = mat.baseColor
                old.g = v
                mat.baseColor = old.clone()
            })
            GUIHelp.add(mat.baseColor, 'b', 0,1,0.1).onChange(v=>{
                let old = mat.baseColor
                old.b = v
                mat.baseColor = old.clone()
            })
        }

    }
}

new Sample_Materials().run();