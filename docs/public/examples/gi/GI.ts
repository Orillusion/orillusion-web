import {
    Object3D,
    Scene3D,
    Engine3D,
    GlobalIlluminationComponent,
    Object3DUtil,
    GTAOPost,
    HDRBloomPost,
    PostProcessingComponent,
    TAAPost,
    DirectLight, KelvinUtil, View3D, HoverCameraController, CameraUtil, AtmosphericComponent
} from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_GI {
    scene: Scene3D;
    private giComponent: GlobalIlluminationComponent;
    private Ori: dat.GUI | undefined;

    async run() {

        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.material.materialDebug = false;

        Engine3D.setting.gi.enable = true;
        Engine3D.setting.gi.debug = true;

        Engine3D.setting.gi.probeYCount = 3;
        Engine3D.setting.gi.probeXCount = 6;
        Engine3D.setting.gi.probeZCount = 6;
        Engine3D.setting.gi.probeSpace = 60;
        Engine3D.setting.gi.offsetX = 0;
        Engine3D.setting.gi.offsetY = 60;
        Engine3D.setting.gi.offsetZ = 0;
        Engine3D.setting.gi.indirectIntensity = 1;
        Engine3D.setting.gi.probeSize = 64;
        Engine3D.setting.gi.octRTSideSize = 64;
        Engine3D.setting.gi.octRTMaxSize = 2048;
        Engine3D.setting.gi.ddgiGamma = 1;
        Engine3D.setting.gi.autoRenderProbe = true;

        Engine3D.setting.shadow.shadowBound = 200;
        Engine3D.setting.shadow.debug = true;

        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;

        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            debug: false,
            blurX: 4,
            blurY: 4,
            luminosityThreshold: 0.9,
            radius: 4,
            strength: 1.2
        };

        await Engine3D.init();
        const gui = new dat.GUI();
        // gui.domElement.style.zIndex = "10";
        // gui.domElement.parentElement.style.zIndex = "10";
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)
        atmosphericSky.exposure = 0.5

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)
        camera.enableCSM = true;

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 200)

        // init View3D
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera

        // create direction light
        let lightObj3D = new Object3D()
        lightObj3D.x = 0
        lightObj3D.y = 30
        lightObj3D.z = -40
        lightObj3D.rotationX = 20
        lightObj3D.rotationY = 160
        lightObj3D.rotationZ = 0

        let light = lightObj3D.addComponent(DirectLight)
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        light.castShadow = true
        light.intensity = 30

        this.scene.addChild(light.object3D)

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform

        Engine3D.startRenderView(view)

        let job = Engine3D.getRenderJob(view);

        await this.initScene();
        this.addGIProbes();

        let DirLight = this.Ori.addFolder("DirectLight");
        DirLight.add(light, "enable");
        DirLight.add(light.transform, "rotationX", 0.0, 360.0, 0.01);
        DirLight.add(light.transform, "rotationY", 0.0, 360.0, 0.01);
        DirLight.add(light.transform, "rotationZ", 0.0, 360.0, 0.01);
        DirLight.addColor(light, "lightColor");
        DirLight.add(light, "intensity", 0.0, 160.0, 0.01);
        DirLight.add(light, "indirect", 0.0, 10.0, 0.01);
        DirLight.add(light, "castShadow");
        DirLight.open();

        let postProcessing = this.scene.addComponent(PostProcessingComponent);
        postProcessing.addPost(TAAPost);
        postProcessing.addPost(GTAOPost);
        postProcessing.addPost(HDRBloomPost);

    }

    private addGIProbes() {
        let probeObj = new Object3D();
        let giComponent = probeObj.addComponent(GlobalIlluminationComponent);
        this.scene.addChild(probeObj);
        this.renderGUI(giComponent)
    }

    private renderGUI(giComponent:GlobalIlluminationComponent){
        if(!giComponent || !giComponent['_volume']){
            return setTimeout(()=>this.renderGUI(giComponent), 50)
        }
        let volume = giComponent['_volume'];
        let giSetting = volume.setting;
        let view: View3D = Engine3D.views[0];
        let renderJob = Engine3D.getRenderJob(view);

        function onProbesChange(): void {
            giComponent['changeProbesPosition']();
        }

        let gidir = this.Ori.addFolder('GI');
        gidir.add(giSetting, `lerpHysteresis`, 0.001, 10, 0.0001).onChange(onProbesChange);
        gidir.add(giSetting, `depthSharpness`, 1.0, 100.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `normalBias`, -100.0, 100.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `irradianceChebyshevBias`, -100.0, 100.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `rayNumber`, 0, 512, 1).onChange(onProbesChange);
        gidir.add(giSetting, `irradianceDistanceBias`, 0.0, 200.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `indirectIntensity`, 0.0, 100.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `bounceIntensity`, 0.0, 1.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `probeRoughness`, 0.0, 1.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, `ddgiGamma`, 0.0, 4.0, 0.001).onChange(onProbesChange);
        gidir.add(giSetting, 'autoRenderProbe');

        let probdir = this.Ori.addFolder('probe volume');
        probdir.add(volume.setting, 'probeSpace', 0.1, volume.setting.probeSpace * 5, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetX', -100, 100, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetY', -100, 100, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetZ', -100, 100, 0.001).onChange(onProbesChange);

        let button_operation={
            show:()=>{
                giComponent.object3D.transform.enable = true;
            },
            hide:()=>{
                giComponent.object3D.transform.enable = false;
            }
        }
        probdir.add(button_operation, 'show');
        probdir.add(button_operation, 'hide');
    }

    async initScene() {
        {
            let floorHeight = 20;
            let floor = Object3DUtil.GetSingleCube(1000, floorHeight, 1000, 0.6, 0.6, 0.6);
            floor.y = -floorHeight;
            this.scene.addChild(floor);
        }

        let obj3dList: Object3D[] = [];
        {
            let greenBall = Object3DUtil.GetSingleSphere(30, 0.1, 0.8, 0.2);
            greenBall.x = -70;
            greenBall.y = 40;
            obj3dList.push(greenBall);
        }

        {
            let chair = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf') as Object3D;
            chair.scaleX = chair.scaleY = chair.scaleZ = 100;
            chair.rotationZ = chair.rotationX = 130;
            chair.z = -120;
            obj3dList.push(chair);
        }

        {
            let Duck = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf') as Object3D;
            Duck.scaleX = Duck.scaleY = Duck.scaleZ = 0.3;
            Duck.transform.y = 0;
            Duck.transform.x = 0;
            Duck.transform.z = 80;
            obj3dList.push(Duck);
        }

        {
            let car = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/pbrCar/pbrCar.gltf');
            car.scaleX = car.scaleY = car.scaleZ = 1.5;
            car.x = 20;
            obj3dList.push(car);
        }

        for (let obj3D of obj3dList) {
            this.scene.addChild(obj3D);
        }
    }
}

new Sample_GI().run();