import { Object3D, Scene3D, Engine3D, GlobalIlluminationComponent, Vector3, GTAOPost, PostProcessingComponent, BloomPost, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, webGPUContext, DirectLight, KelvinUtil } from '@orillusion/core'
import * as dat from 'dat.gui'

class Sample_GICornellBox {
    scene: Scene3D
    async run() {
        Engine3D.setting.gi.enable = true
        Engine3D.setting.gi.probeYCount = 6
        Engine3D.setting.gi.probeXCount = 6
        Engine3D.setting.gi.probeZCount = 6
        Engine3D.setting.gi.offsetX = 0
        Engine3D.setting.gi.offsetY = 10
        Engine3D.setting.gi.offsetZ = 0
        Engine3D.setting.gi.indirectIntensity = 1
        Engine3D.setting.gi.lerpHysteresis = 0.004 //default value is 0.01
        Engine3D.setting.gi.maxDistance = 16
        Engine3D.setting.gi.probeSpace = 5.8
        Engine3D.setting.gi.normalBias = 0
        Engine3D.setting.gi.probeSize = 32
        Engine3D.setting.gi.octRTSideSize = 16
        Engine3D.setting.gi.octRTMaxSize = 2048
        Engine3D.setting.gi.ddgiGamma = 2.2
        Engine3D.setting.gi.depthSharpness = 1
        Engine3D.setting.gi.autoRenderProbe = true

        Engine3D.setting.shadow.shadowBound = 50
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.updateFrameRate = 1

        await Engine3D.init({
            canvasConfig: {
                devicePixelRatio: 1
            }
        })
        this.scene = new Scene3D()
        this.scene.addComponent(AtmosphericComponent)

        let mainCamera = CameraUtil.createCamera3DObject(this.scene)
        mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        hoverCameraController.setCamera(0, 0, 40, new Vector3(0, 10, 0))

        await this.initScene()

        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        Engine3D.startRenderView(view)

        let postProcessing = this.scene.addComponent(PostProcessingComponent)
        postProcessing.addPost(BloomPost)
        // add GI
        this.addGIProbes()
    }

    private addGIProbes() {
        let probeObj = new Object3D()
        let GI = probeObj.addComponent(GlobalIlluminationComponent)
        this.scene.addChild(probeObj)
        // add a delay to render GUIHelp menu
        setTimeout(() => {
            this.renderGUI(GI)
        }, 1000)
    }

    private renderGUI(component: GlobalIlluminationComponent): void {
        let volume = component['_volume']
        let giSetting = volume.setting

        function onProbesChange(): void {
            component['changeProbesPosition']()
        }
        let gui = new dat.GUI()
        let f = gui.addFolder('GI')
        f.add(giSetting, `lerpHysteresis`, 0.001, 0.1, 0.0001).onChange(onProbesChange)
        f.add(giSetting, `depthSharpness`, 1.0, 100.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `normalBias`, -100.0, 100.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `irradianceChebyshevBias`, -100.0, 100.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `rayNumber`, 0, 512, 1).onChange(onProbesChange)
        f.add(giSetting, `irradianceDistanceBias`, 0.0, 200.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `indirectIntensity`, 0.0, 3.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `bounceIntensity`, 0.0, 1.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `probeRoughness`, 0.0, 1.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, `ddgiGamma`, 0.0, 4.0, 0.001).onChange(onProbesChange)
        f.add(giSetting, 'autoRenderProbe')
        f.close()

        let f2 = gui.addFolder('probe volume')
        f2.add(volume.setting, 'probeSpace', 0.1, volume.setting.probeSpace * 5, 0.001).onChange(() => {
            onProbesChange()
        })
        f2.add(volume.setting, 'offsetX', -100, 100, 0.001).onChange(onProbesChange)
        f2.add(volume.setting, 'offsetY', -100, 100, 0.001).onChange(onProbesChange)
        f2.add(volume.setting, 'offsetZ', -100, 100, 0.001).onChange(onProbesChange)
        f2.add(
            {
                show: () => {
                    component.object3D.transform.enable = true
                }
            },
            'show'
        )
        f2.add(
            {
                hide: () => {
                    component.object3D.transform.enable = false
                }
            },
            'hide'
        )
        f2.open()
    }

    async initScene() {
        let box = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/cornellBox/cornellBox.gltf')
        box.localScale = new Vector3(10, 10, 10)
        this.scene.addChild(box)

        let lightObj = new Object3D()
        lightObj.x = 0
        lightObj.y = 30
        lightObj.z = -40
        lightObj.rotationX = 30
        lightObj.rotationY = 160
        lightObj.rotationZ = 0
        this.scene.addChild(lightObj)

        let dirLight = lightObj.addComponent(DirectLight)
        dirLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        dirLight.castShadow = true
        dirLight.intensity = 30
    }
}

new Sample_GICornellBox().run()
