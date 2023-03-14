import { GUIHelp, Camera3D, OrbitController, DirectLight, Engine3D, ForwardRenderJob, KelvinUtil, Object3D, Scene3D, HDRBloomPost, GTAOPost, GlobalFog } from "@orillusion/core"

export class Sample_PBRMaterial {
    lightObj: Object3D;
    scene: Scene3D;
    camera: Object3D;
    obj: Object3D;
    
    async run() {
        await Engine3D.init({ 
            canvasConfig: { alpha: true, zIndex: 11 },
            renderLoop: this.loop.bind(this)
        });

        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 50;
        Engine3D.setting.shadow.shadowBios = 0.002;
        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            blurX: 4,
            blurY: 4,
            intensity: 2,
            brightness: 1
        };

        this.scene = new Scene3D();
        this.camera = new Object3D()
        this.camera.y = 5
        this.camera.z = 20
        this.scene.addChild(this.camera)
        let mainCamera = this.camera.addComponent(Camera3D)
        mainCamera.perspective(60, window.innerWidth / window.innerHeight, 0.01, 5000.0);

        let orbit = this.camera.addComponent(OrbitController)
        orbit.minDistance = 10
        orbit.maxDistance = 30
        orbit.panFactor = 0.1
        orbit.rotateFactor = 0.3


        await this.initScene();
        let renderJob = new ForwardRenderJob(this.scene);
        renderJob.addPost(new GTAOPost());
        renderJob.addPost(new HDRBloomPost());
        Engine3D.startRender(renderJob);
    }

    async initScene() {
        /******** sky *******/
        {
            this.scene.hideSky();
            this.scene.envMap.sunY = 0.65;
            this.scene.exposure = 1
        }
        /******** light *******/
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 124;
            this.lightObj.rotationY = 327;
            this.lightObj.rotationZ = 10;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 40;
            this.scene.addChild(this.lightObj);
        }

        {
            let obj = this.obj = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf');
            obj.transform.scaleX = 10;
            obj.transform.scaleY = 10;
            obj.transform.scaleZ = 10;
            obj.transform.y = -6;
            this.scene.addChild(obj);
        }
    }

    loop(){
        this.obj.transform.rotationY += 0.2
    }
}

new Sample_PBRMaterial().run()
