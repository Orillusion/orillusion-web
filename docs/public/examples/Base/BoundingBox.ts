import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'
import { AtmosphericComponent, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Object3D, Object3DUtil, Scene3D, Transform, View3D } from '@orillusion/core'

// A sample to show boundingbox
class Sample_BoundingBox {
    view: View3D
    box: Object3D
    container: Object3D
    private Ori: dat.GUI | undefined

    async run() {
        // init engine
        await Engine3D.init({
            renderLoop: () => {
                this.loop()
            }
        })

        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        let param = {
            camera: {
                near: 0.01,
                far: 100,
                distance: 2,
                fov: 60,
                pitch: -15,
                roll: -30
            },

            scene: {
                exposure: 1,
                atmosphericSky: {}
            },

            light: {
                position: {
                    x: 0,
                    y: 30,
                    z: -40
                },
                euler: {
                    x: 20,
                    y: 160,
                    z: 0
                },

                kelvin: 5355,
                intensity: 30,
                castShadow: true
            }
        }

        // init Scene3D
        let scene = new Scene3D()
        scene.exposure = param.scene.exposure
        scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        if (param.scene.atmosphericSky) {
            atmosphericSky = scene.addComponent(AtmosphericComponent)
        }

        // init Camera3D
        let cameraData = param.camera
        let camera = CameraUtil.createCamera3DObject(scene)
        camera.perspective(cameraData.fov, Engine3D.aspect, cameraData.near, cameraData.far)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(cameraData.roll, cameraData.pitch, cameraData.distance)

        // init View3D
        this.view = new View3D()
        this.view.scene = scene
        this.view.camera = camera

        // create direction light

        let lightObj3D = new Object3D()
        lightObj3D.x = param.light.position.x
        lightObj3D.y = param.light.position.y
        lightObj3D.z = param.light.position.z
        lightObj3D.rotationX = param.light.euler.x
        lightObj3D.rotationY = param.light.euler.y
        lightObj3D.rotationZ = param.light.euler.z

        let light = lightObj3D.addComponent(DirectLight)
        light.lightColor = KelvinUtil.color_temperature_to_rgb(param.light.kelvin)
        light.castShadow = param.light.castShadow
        light.intensity = param.light.intensity
        scene.addChild(light.object3D)

        // relative light to sky
        if (atmosphericSky) {
            atmosphericSky.relativeTransform = light.transform
        }

        Engine3D.startRenderViews([this.view])
        Engine3D.getRenderJob(this.view)

        this.box = Object3DUtil.GetSingleCube(0.5, 0.3, 0.8, 1, 1, 1)
        this.box.transform.eventDispatcher.addEventListener(Transform.LOCAL_ONCHANGE, this.logChange, this)

        let parent = (this.container = new Object3D())
        parent.addChild(this.box)
        scene.addChild(parent)

        let button_remove = {
            Remove_Box: () => {
                this.box.transform.parent && this.box.removeFromParent()
            }
        }
        let button_add = {
            Add_Box: () => {
                !this.box.transform.parent && parent.addChild(this.box)
            }
        }
        this.Ori.add(button_remove, 'Remove_Box')
        this.Ori.add(button_add, 'Add_Box')

        let Container = this.Ori.addFolder('Container')
        Container.add(parent.transform, 'x', -100.0, 100.0, 0.01)
        Container.add(parent.transform, 'y', -100.0, 100.0, 0.01)
        Container.add(parent.transform, 'z', -100.0, 100.0, 0.01)
        Container.add(parent.transform, 'rotationX', 0.0, 360.0, 0.01)
        Container.add(parent.transform, 'rotationY', 0.0, 360.0, 0.01)
        Container.add(parent.transform, 'rotationZ', 0.0, 360.0, 0.01)
        Container.add(parent.transform, 'scaleX', 0.0, 2.0, 0.01)
        Container.add(parent.transform, 'scaleY', 0.0, 2.0, 0.01)
        Container.add(parent.transform, 'scaleZ', 0.0, 2.0, 0.01)
        Container.open()

        let Box = this.Ori.addFolder('Box')
        Box.add(this.box.transform, 'x', -100.0, 100.0, 0.01)
        Box.add(this.box.transform, 'y', -100.0, 100.0, 0.01)
        Box.add(this.box.transform, 'z', -100.0, 100.0, 0.01)
        Box.add(this.box.transform, 'rotationX', 0.0, 360.0, 0.01)
        Box.add(this.box.transform, 'rotationY', 0.0, 360.0, 0.01)
        Box.add(this.box.transform, 'rotationZ', 0.0, 360.0, 0.01)
        Box.add(this.box.transform, 'scaleX', 0.0, 2.0, 0.01)
        Box.add(this.box.transform, 'scaleY', 0.0, 2.0, 0.01)
        Box.add(this.box.transform, 'scaleZ', 0.0, 2.0, 0.01)
        Box.open()
    }

    logChange() {
        console.log('BoudingBox changed')
    }

    red = new Color(1, 0, 0, 1)
    gree = new Color(0, 1, 0, 1)

    loop() {
        this.view.graphic3D.drawBoundingBox(this.box.instanceID, this.box.bound as any, this.gree)
        this.view.graphic3D.drawBoundingBox(this.container.instanceID, this.container.bound as any, this.red)
    }
}

new Sample_BoundingBox().run()
