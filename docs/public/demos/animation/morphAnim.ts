import { Camera3D, Engine3D, DirectLight, AtmosphericComponent, View3D, HoverCameraController, MeshRenderer, Object3D, RendererMask, Scene3D, webGPUContext, Color, MorphTargetBlender } from '@orillusion/core'
import * as dat from 'dat.gui'

class Sample_morph {
    scene: Scene3D
    hoverCameraController: HoverCameraController

    async run() {
        await Engine3D.init()

        this.scene = new Scene3D()
        let cameraObj = new Object3D()
        cameraObj.name = `cameraObj`
        let mainCamera = cameraObj.addComponent(Camera3D)
        this.scene.addChild(cameraObj)

        mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        this.hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController)
        this.hoverCameraController.setCamera(0, 0, 110)

        await this.initScene(this.scene)
        // set skybox
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6

        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = mainCamera
        // start render
        Engine3D.startRenderView(view)
    }

    private influenceData: { [key: string]: number } = {}
    private targetRenderers: { [key: string]: MeshRenderer } = {}

    async initScene(scene: Scene3D) {
        {
            let data = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/lion.glb')
            data.addComponent(MorphTargetBlender)
            data.y = -80.0
            data.x = -30.0
            scene.addChild(data)

            const GUIHelp = new dat.GUI()
            GUIHelp.addFolder('morph controller')

            let meshRenders: MeshRenderer[] = this.fetchMorphRenderers(data)
            for (const renderer of meshRenders) {
                renderer.setMorphInfluenceIndex(0, 0)
                for (const key in renderer.geometry.morphTargetDictionary) {
                    this.influenceData[key] = 0
                    this.targetRenderers[key] = renderer
                    GUIHelp.add(this.influenceData, key, 0, 1, 0.01).onChange((v) => {
                        this.influenceData[key] = v
                        this.track(this.influenceData, this.targetRenderers)
                    })
                }
            }
            GUIHelp.add(
                {
                    random: () => {
                        for (let i in this.influenceData) {
                            this.influenceData[i] = Math.random()
                        }
                        GUIHelp.updateDisplay()
                        this.track(this.influenceData, this.targetRenderers)
                    }
                },
                'random'
            )
        }
        {
            let ligthObj = new Object3D()
            ligthObj.rotationY = 135
            ligthObj.rotationX = 45
            let dl = ligthObj.addComponent(DirectLight)
            dl.lightColor = new Color(1.0, 0.95, 0.84, 1.0)
            scene.addChild(ligthObj)
            dl.intensity = 15
        }
        return true
    }

    /**
     * update morph data to mesh
     * @param data {leftEye:0, rightEye:0.5, ...}
     * @param targets {leftEye: MeshRenderer, rightEye: MeshRenderer, ...}
     * @returns
     */
    private track(data: { [key: string]: number }, targets: { [key: string]: MeshRenderer }): void {
        for (let key in targets) {
            let renderer = targets[key]
            let value = data[key]
            renderer.setMorphInfluence(key, value)
        }
    }

    private fetchMorphRenderers(obj: Object3D): MeshRenderer[] {
        let rendererList: MeshRenderer[] = []
        obj.forChild((child) => {
            let mr = child.getComponent(MeshRenderer)
            if (mr && mr.hasMask(RendererMask.MorphTarget)) rendererList.push(mr)
        })
        return rendererList
    }
}
new Sample_morph().run()
