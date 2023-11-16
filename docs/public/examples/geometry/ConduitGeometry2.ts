import { ComponentBase, DirectLight, Vector4, Time, Material, AtmosphericComponent, AttributeAnimCurve, BitmapTexture2D, BlendMode, CameraUtil, Color, Engine3D, ExtrudeGeometry, HoverCameraController, LitMaterial, MeshRenderer, Object3D, Object3DUtil, PropertyAnimClip, PropertyAnimation, Scene3D, Vector3, View3D, KelvinUtil, WrapMode, BloomPost } from '@orillusion/core';
import { Stats } from '@orillusion/stats'

// An sample to use ExtrudeGeometry and make uv move animation
class Sample_ConduitGeometry2 {
    scene: Scene3D
    material: LitMaterial
    animClip: PropertyAnimClip
    curveX: AttributeAnimCurve
    curveY: AttributeAnimCurve
    curveZ: AttributeAnimCurve
    totalTime: number

    async run() {
        Engine3D.setting.shadow.shadowBound = 50
        Engine3D.setting.shadow.shadowSize = 1024

        await Engine3D.init()
        // init Scene3D
        this.scene = new Scene3D()
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)
        camera.enableCSM = true

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 60)

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

        await this.createMaterial()
        await this.loadCurveData()

        this.bindCurveAnimation()
        this.createConduit()
        this.createFloor()
    }

    createFloor() {
        let object3D = Object3DUtil.GetSingleCube(200, 1, 200, 1, 1, 1)
        object3D.y = -2
        this.scene.addChild(object3D)
    }

    bindCurveAnimation(): void {
        let obj = Object3DUtil.GetSingleSphere(0.2, 0.8, 0.4, 0.2)
        obj.scaleX = 1.5
        let holder = new Object3D()
        this.scene.addChild(holder)
        holder.scaleX = holder.scaleY = holder.scaleZ = 5
        holder.addChild(obj)
        let animation = obj.addComponent(PropertyAnimation)
        animation.autoPlay = true
        animation.defaultClip = this.animClip.name
        animation.speed = 0.5
        animation.appendClip(this.animClip)
    }
    async loadCurveData() {
        // load external curve data
        let json: any = await Engine3D.res.loadJSON('https://cdn.orillusion.com/json/anim_0.json')
        this.animClip = new PropertyAnimClip()
        this.animClip.parse(json)
        this.animClip.wrapMode = WrapMode.Loop
        let curve = this.animClip['objAnimClip']['']['curve']
        this.curveX = curve['m_LocalPosition.x']
        this.curveY = curve['m_LocalPosition.y']
        this.curveZ = curve['m_LocalPosition.z']
        this.totalTime = this.animClip.totalTime
    }

    async createMaterial() {
        this.material = new LitMaterial()
        this.material.depthCompare = 'always'
        this.material.blendMode = BlendMode.ADD
        this.material.baseColor = new Color(0, 1, 0.5, 1.0)
        this.material.transparent = true

        let texture = new BitmapTexture2D()
        texture.addressModeU = 'repeat'
        texture.addressModeV = 'repeat'
        await texture.load('https://cdn.orillusion.com/textures/cell.webp')
        this.material.baseMap = texture
    }

    private createConduit() {
        let shape = this.getShape()
        let curve = this.getCurve()
        let conduitObject3D = new Object3D()
        this.scene.addChild(conduitObject3D)

        let renderer = conduitObject3D.addComponent(MeshRenderer)
        renderer.material = this.material
        renderer.geometry = new ExtrudeGeometry().build(shape, true, curve, 0.2)

        let component = conduitObject3D.addComponent(UVMoveComponent)
        component.speed.set(0, -0.8, 0.5, 0.5)
    }

    private getShape(): Vector3[] {
        let vertexList: Vector3[] = [] //circle
        let radius = 1.2
        const vertexCount = 8
        for (let i = 0; i < vertexCount; i++) {
            let angle = (Math.PI * 2 * i) / vertexCount
            let point = new Vector3(Math.sin(angle), 0, Math.cos(angle)).multiplyScalar(radius)
            vertexList.push(point)
        }
        return vertexList
    }

    private getCurve(): Vector3[] {
        let vertexList: Vector3[] = []
        for (let i = 0; i < this.totalTime; i += 0.05) {
            let point = new Vector3()
            point.x = this.curveX.getValue(i)
            point.y = this.curveY.getValue(i)
            point.z = -this.curveZ.getValue(i)
            point.multiplyScalar(5)
            vertexList.push(point)
        }
        return vertexList
    }
}


class UVMoveComponent extends ComponentBase {
    private _material: Material
    private readonly _speed: Vector4 = new Vector4(0.1, 0.1, 1, 1)

    public get speed(): Vector4 {
        return this._speed
    }

    public set speed(value: Vector4) {
        this._speed.copyFrom(value)
    }

    start(): void {
        let mr = this.object3D.getComponent(MeshRenderer)
        if (mr) {
            this._material = mr.material
        }
    }

    onUpdate(): void {
        if (this._material) {
            let value = this._material.getUniformV4(`transformUV1`)
            value.x += Time.delta * this._speed.x * 0.001
            value.y += Time.delta * this._speed.y * 0.001
            value.z = this._speed.z
            value.w = this._speed.w
            this._material.setUniformVector4(`transformUV1`, value)
        }
    }
}

new Sample_ConduitGeometry2().run()
