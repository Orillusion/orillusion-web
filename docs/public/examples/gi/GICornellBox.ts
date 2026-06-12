import { Object3D, Scene3D, Engine3D, GlobalIlluminationComponent, Vector3, GTAOPost, PostProcessingComponent, BloomPost, DirectLight, KelvinUtil, HoverCameraController, AtmosphericComponent, CameraUtil, View3D } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';

class Sample_GICornellBox {
    engine: Engine3D;
    scene: Scene3D;
    private Ori: dat.GUI;
    private giComponent: GlobalIlluminationComponent;

    async run() {
        this.engine = await Engine3D.init({
            setting: {
                gi: {
                    enable: true,
                    debug: true,
                    probeYCount: 6,
                    probeXCount: 6,
                    probeZCount: 6,
                    offsetX: 0,
                    offsetY: 10,
                    offsetZ: 0,
                    indirectIntensity: 1,
                    lerpHysteresis: 0.004, //default value is 0.01
                    maxDistance: 16,
                    probeSpace: 6,
                    normalBias: 0,
                    probeSize: 32,
                    octRTSideSize: 16,
                    octRTMaxSize: 2048,
                    ddgiGamma: 2.2,
                    depthSharpness: 1,
                    autoRenderProbe: true
                },
                shadow: {
                    debug: true,
                    shadowBound: 50,
                    shadowSize: 2048,
                    shadowBias: 0.1,
                    autoUpdate: true,
                    updateFrameRate: 1
                }
            }
        });

        // init Scene3D
        this.scene = new Scene3D();
        this.scene.exposure = 1;
        this.scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = this.scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 1, 100);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(0, 0, 50, new Vector3(0, 10, 0));

        // init View3D
        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        // create direction light
        let lightObj3D = new Object3D();
        lightObj3D.x = 0;
        lightObj3D.y = 30;
        lightObj3D.z = -40;
        lightObj3D.rotationX = 20;
        lightObj3D.rotationY = 160;
        lightObj3D.rotationZ = 0;

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 4;

        this.scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;

        this.engine.startRenderView(view);

        this.addGIProbes();

        let postProcessing = this.scene.addComponent(PostProcessingComponent);
        postProcessing.addPost(GTAOPost);
        postProcessing.addPost(BloomPost);

        await this.initScene();
    }

    private addGIProbes() {
        let probeObj = new Object3D();
        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder('Orillusion');
        this.Ori.open();

        this.giComponent = probeObj.addComponent(GlobalIlluminationComponent, this.scene);
        this.scene.addChild(probeObj);
        this.renderGUI(this.giComponent);
    }
    private renderGUI(giComponent: GlobalIlluminationComponent) {
        if (!giComponent || !giComponent['_volume']) {
            return setTimeout(() => this.renderGUI(giComponent), 50);
        }
        let volume = giComponent['_volume'];
        let giSetting = volume.setting;
        let view: View3D = this.engine.views[0];
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
        gidir.open();

        let probdir = this.Ori.addFolder('probe volume');
        probdir.add(volume.setting, 'probeSpace', 0.1, volume.setting.probeSpace * 5, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetX', -100, 100, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetY', -100, 100, 0.001).onChange(onProbesChange);
        probdir.add(volume.setting, 'offsetZ', -100, 100, 0.001).onChange(onProbesChange);
        probdir.open();

        let button_operation = {
            show: () => {
                giComponent.object3D.transform.enable = true;
            },
            hide: () => {
                giComponent.object3D.transform.enable = false;
            }
        };
        probdir.add(button_operation, 'show');
        probdir.add(button_operation, 'hide');
    }

    async initScene() {
        let box = (await this.engine.res.loadGltf('https://cdn.orillusion.com/gltfs/cornellBox/cornellBox.gltf')) as Object3D;
        box.localScale = new Vector3(10, 10, 10);
        this.scene.addChild(box);
    }
}

new Sample_GICornellBox().run();
