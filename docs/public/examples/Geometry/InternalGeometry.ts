import { Engine3D, View3D, Scene3D, CameraUtil, AtmosphericComponent, webGPUContext, HoverCameraController, Object3D, DirectLight, KelvinUtil, PlaneGeometry, LitMaterial, MeshRenderer, BoxGeometry, SphereGeometry, CylinderGeometry, TorusGeometry, Color } from '@orillusion/core';
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

// An sample of display internal geometry
class Sample_InternalGeometry {
    lightObj: Object3D
    private Ori: dat.GUI | undefined
    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.shadowBound = 200
        // init dat.gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'
        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        await Engine3D.init()
        let view = new View3D()
        view.scene = new Scene3D()
        let sky = view.scene.addComponent(AtmosphericComponent)

        view.camera = CameraUtil.createCamera3DObject(view.scene)
        view.camera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        view.camera.object3D.z = -15
        view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 150)

        Engine3D.startRenderView(view)

        await this.createScene(view.scene)
        sky.relativeTransform = this.lightObj.transform
    }

    private async createScene(scene: Scene3D) {
        // add a direction light
        let lightObj3D = (this.lightObj = new Object3D())
        let sunLight = lightObj3D.addComponent(DirectLight)
        sunLight.intensity = 15
        sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553)
        sunLight.castShadow = true
        lightObj3D.rotationX = 53.2
        lightObj3D.rotationY = 220
        lightObj3D.rotationZ = 5.58

        // GUIUtil.renderDirLight(sunLight);
        let DirLight = this.Ori.addFolder('DirectLight')
        DirLight.add(sunLight, 'enable')
        DirLight.add(sunLight.transform, 'rotationX', 0.0, 360.0, 0.01)
        DirLight.add(sunLight.transform, 'rotationY', 0.0, 360.0, 0.01)
        DirLight.add(sunLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
        DirLight.addColor(sunLight, 'lightColor')
        DirLight.add(sunLight, 'intensity', 0.0, 160.0, 0.01)
        DirLight.add(sunLight, 'indirect', 0.0, 10.0, 0.01)
        DirLight.add(sunLight, 'castShadow')
        DirLight.open()
        scene.addChild(lightObj3D)
        scene.addComponent(Stats)

        let material = new LitMaterial()

        // add a plane
        {
            let plane = new Object3D()
            let meshRenderer = plane.addComponent(MeshRenderer)
            meshRenderer.geometry = new PlaneGeometry(200, 200, 80, 80)
            meshRenderer.material = material
            scene.addChild(plane)
        }

        // add a box
        {
            let box = new Object3D()
            let meshRenderer = box.addComponent(MeshRenderer)
            meshRenderer.geometry = new BoxGeometry(50, 10, 20)
            meshRenderer.material = material
            box.y = 10
            scene.addChild(box)
        }

        // add a box
        {
            let box = new Object3D()
            let meshRenderer = box.addComponent(MeshRenderer)
            meshRenderer.geometry = new SphereGeometry(10, 20, 20)
            meshRenderer.material = material
            box.y = 10
            box.x = -50
            scene.addChild(box)
        }

        // add a cylinder opened
        {
            let box = new Object3D()
            let meshRenderer = box.addComponent(MeshRenderer)
            meshRenderer.geometry = new CylinderGeometry(5, 10, 20, 50, 20, true)
            meshRenderer.material = material
            material.cullMode = 'none'
            box.y = 20
            box.x = 50
            scene.addChild(box)
        }

        // add a cylinder closed
        {
            let box = new Object3D()
            let meshRenderer = box.addComponent(MeshRenderer)
            meshRenderer.geometry = new CylinderGeometry(5, 10, 20, 50, 20)
            let topMaterial = new LitMaterial()
            topMaterial.baseColor = new Color(1, 0, 0, 1)
            meshRenderer.materials = [material, material, material]

            box.y = 20
            box.x = 50
            box.z = 50
            scene.addChild(box)
        }

        // add a torus
        {
            let box = new Object3D()
            let meshRenderer = box.addComponent(MeshRenderer)
            meshRenderer.geometry = new TorusGeometry(10, 4, 20, 50)
            meshRenderer.material = material
            box.y = 20
            box.x = 50
            box.z = -50
            scene.addChild(box)
        }
    }
}

new Sample_InternalGeometry().run()
