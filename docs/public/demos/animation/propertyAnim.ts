import { DirectLight, Engine3D, AtmosphericComponent, View3D, HoverCameraController, KelvinUtil, Object3D, Scene3D, CameraUtil, webGPUContext, PropertyAnimation, PropertyAnimClip, WrapMode } from '@orillusion/core'
import * as dat from 'dat.gui'

export class Sample_PropertyAnim {
    lightObj: Object3D
    scene: Scene3D
    private animation: PropertyAnimation

    constructor() {}

    async run() {
        await Engine3D.init()

        this.scene = new Scene3D()
        let camera = CameraUtil.createCamera3DObject(this.scene, 'camera')
        camera.perspective(60, webGPUContext.aspect, 1, 2000.0)
        let ctrl = camera.object3D.addComponent(HoverCameraController)
        ctrl.setCamera(180, -20, 15)

        await this.initScene(this.scene)

        this.scene.addComponent(AtmosphericComponent).sunY = 0.6

        // create a view with target scene and camera
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera
        // start render
        Engine3D.startRenderView(view)

        let guiData = {
            click: () => this.animation.play('anim_0', true),
            Seek: 0,
            Speed: 1
        }
        const GUIHelp = new dat.GUI()
        GUIHelp.add(guiData, 'click').name('Restart')
        GUIHelp.add(guiData, 'Seek', 0, 1, 0.01).onChange((v) => {
            this.animation.stop()
            this.animation.seek(v)
        })
        GUIHelp.add(guiData, 'Speed', 0, 1, 0.01).onChange((v) => {
            this.animation.speed = v
        })
        this.animation.onLateUpdate = () => {
            guiData.Seek = this.animation.time
            GUIHelp.updateDisplay()
        }
    }

    private async makePropertyAnim(node: Object3D) {
        // add PropertyAnimation
        let animation = node.addComponent(PropertyAnimation)
        // load clip source
        let res = await fetch('https://cdn.orillusion.com/json/anim_0.json')
        let json = await res.json()
        // init clip
        let animClip = new PropertyAnimClip()
        // parse clip
        animClip.parse(json)
        animClip.wrapMode = WrapMode.Loop
        animation.defaultClip = animClip.name
        animation.autoPlay = true
        // add clip to animation
        animation.appendClip(animClip)
        return animation
    }

    async initScene(scene: Scene3D) {
        /******** light *******/
        {
            this.lightObj = new Object3D()
            this.lightObj.x = 0
            this.lightObj.y = 30
            this.lightObj.z = -40
            this.lightObj.rotationX = 45
            this.lightObj.rotationY = 0
            this.lightObj.rotationZ = 45
            let lc = this.lightObj.addComponent(DirectLight)
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
            lc.intensity = 20
            scene.addChild(this.lightObj)
        }

        let duck = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf')
        this.scene.addChild(duck)
        duck.scaleX = duck.scaleY = duck.scaleZ = 0.02

        this.animation = await this.makePropertyAnim(duck)
        this.animation.play(this.animation.defaultClip)

        return true
    }
}

new Sample_PropertyAnim().run()
