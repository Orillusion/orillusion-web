import { Camera3D, OrbitController, DirectLight, Engine3D, View3D, PostProcessingComponent, HDRBloomPost, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, Scene3D, SSAOPost, SSRPost, GTAOPost, GlobalFog, webGPUContext } from '@orillusion/core';

export class Sample_FlightHelmet {
    lightObj: Object3D;
    cameraObj: Camera3D;
    scene: Scene3D;
    obj: Object3D;

    constructor() {}

    async run() {
        await Engine3D.init({ 
            canvasConfig: { alpha: true, zIndex: 0 },
            renderLoop: this.loop.bind(this)
        });
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 50;
        Engine3D.setting.shadow.shadowBias = 0.001;
        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            blurX: 4,
            blurY: 4,
            intensity: 2,
            brightness: 1.25,
        };

        this.scene = new Scene3D();
        let camera = new Object3D();
        camera.y = 5
        camera.z = 20
        this.scene.addChild(camera)
        let mainCamera = camera.addComponent(Camera3D);
        mainCamera.perspective(60, webGPUContext.aspect, 0.01, 5000.0);
        let orbit = camera.addComponent(OrbitController)
        orbit.minDistance = 10
        orbit.maxDistance = 30
        orbit.panFactor = 0.1
        orbit.rotateFactor = 0.3

        await this.initScene();


        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        Engine3D.startRenderView(view);

		let postProcessing = this.scene.addComponent(PostProcessingComponent);
		postProcessing.addPost(GTAOPost);
        postProcessing.addPost(HDRBloomPost);
    }

    async initScene() {
        /******** sky *******/
        {
            this.scene.hideSky();
            this.scene.exposure = 1.5
        }
        /******** light *******/
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 38;
            this.lightObj.rotationY = 220;
            this.lightObj.rotationZ = 5.58;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 40 ;
            this.scene.addChild(this.lightObj);
        }

        {
            let obj = this.obj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/FlightHelmet/FlightHelmet.gltf');
            obj.transform.scaleX = 20;
            obj.transform.scaleY = 20;
            obj.transform.scaleZ = 20;
            obj.transform.y = -6;
            this.scene.addChild(obj);
        }
    }

    loop(){
        this.obj.transform.rotationY -= 0.2
    }
}

new Sample_FlightHelmet().run()
