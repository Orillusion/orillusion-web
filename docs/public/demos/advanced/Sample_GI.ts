import { Object3D, Scene3D, Engine3D, GlobalIlluminationComponent, Vector3, GTAOPost, PostProcessingComponent, BloomPost, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, webGPUContext, DirectLight, KelvinUtil } from '@orillusion/core';
import * as dat from 'dat.gui';

class Sample_GICornellBox {
    scene: Scene3D;
    engine: Engine3D;
    async run() {
        this.engine = await Engine3D.init({
            canvasConfig: {
                devicePixelRatio: 1
            },
            setting: {
                gi: {
                    enable: true,
                    probeYCount: 6,
                    probeXCount: 6,
                    probeZCount: 6,
                    offsetX: 0,
                    offsetY: 10,
                    offsetZ: 0,
                    indirectIntensity: 1,
                    lerpHysteresis: 0.004, //default value is 0.01
                    maxDistance: 16,
                    probeSpace: 5.8,
                    normalBias: 0,
                    probeSize: 32,
                    octRTSideSize: 16,
                    octRTMaxSize: 2048,
                    ddgiGamma: 2.2,
                    depthSharpness: 1,
                    autoRenderProbe: true
                },
                shadow: {
                    shadowBound: 50,
                    shadowSize: 2048,
                    shadowBias: 0.002,
                    autoUpdate: true,
                    updateFrameRate: 1
                }
            }
        });
        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent);

        let mainCamera = CameraUtil.createCamera3DObject(this.scene);
        mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0);
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController);
        hoverCameraController.setCamera(0, 0, 40, new Vector3(0, 10, 0));

        await this.initScene();

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        this.engine.startRenderView(view);

        let postProcessing = this.scene.addComponent(PostProcessingComponent);
        postProcessing.addPost(BloomPost);
        // add GI
        this.addGIProbes();
    }

    private addGIProbes() {
        let probeObj = new Object3D();
        let GI = probeObj.addComponent(GlobalIlluminationComponent);
        this.scene.addChild(probeObj);
        // add a delay to render GUIHelp menu
        setTimeout(() => {
            this.renderGUI(GI);
        }, 1000);
    }

    private renderGUI(component: GlobalIlluminationComponent): void {
        let volume = component['_volume'];
        let giSetting = volume.setting;

        function onProbesChange(): void {
            component['changeProbesPosition']();
        }
        let gui = new dat.GUI();
        let f = gui.addFolder('GI');
        f.add(giSetting, `lerpHysteresis`, 0.001, 0.1, 0.0001).onChange(onProbesChange);
        f.add(giSetting, `depthSharpness`, 1.0, 100.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `normalBias`, -100.0, 100.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `irradianceChebyshevBias`, -100.0, 100.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `rayNumber`, 0, 512, 1).onChange(onProbesChange);
        f.add(giSetting, `irradianceDistanceBias`, 0.0, 200.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `indirectIntensity`, 0.0, 3.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `bounceIntensity`, 0.0, 1.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `probeRoughness`, 0.0, 1.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, `ddgiGamma`, 0.0, 4.0, 0.001).onChange(onProbesChange);
        f.add(giSetting, 'autoRenderProbe');
        f.close();

        let f2 = gui.addFolder('probe volume');
        f2.add(volume.setting, 'probeSpace', 0.1, volume.setting.probeSpace * 5, 0.001).onChange(() => {
            onProbesChange();
        });
        f2.add(volume.setting, 'offsetX', -100, 100, 0.001).onChange(onProbesChange);
        f2.add(volume.setting, 'offsetY', -100, 100, 0.001).onChange(onProbesChange);
        f2.add(volume.setting, 'offsetZ', -100, 100, 0.001).onChange(onProbesChange);
        f2.add(
            {
                show: () => {
                    component.object3D.transform.enable = true;
                }
            },
            'show'
        );
        f2.add(
            {
                hide: () => {
                    component.object3D.transform.enable = false;
                }
            },
            'hide'
        );
        f2.open();
    }

    async initScene() {
        let box = await this.engine.res.loadGltf('https://cdn.orillusion.com/gltfs/cornellBox/cornellBox.gltf');
        box.localScale = new Vector3(10, 10, 10);
        this.scene.addChild(box);

        let lightObj = new Object3D();
        lightObj.x = 0;
        lightObj.y = 30;
        lightObj.z = -40;
        lightObj.rotationX = 30;
        lightObj.rotationY = 160;
        lightObj.rotationZ = 0;
        this.scene.addChild(lightObj);

        let dirLight = lightObj.addComponent(DirectLight);
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        dirLight.castShadow = true;
        dirLight.intensity = 2;
    }
}

new Sample_GICornellBox().run();
