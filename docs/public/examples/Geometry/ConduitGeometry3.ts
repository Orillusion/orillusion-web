import { AtmosphericComponent, BitmapTexture2D, BlendMode, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, ExtrudeGeometry, HoverCameraController, KelvinUtil, LitMaterial, Material, MeshRenderer, Object3D, Object3DUtil, Scene3D, Time, Vector3, Vector4, View3D } from '@orillusion/core'
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

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
            let value = this._material.defaultPass.getUniform(`transformUV1`)
            value.x += Time.delta * this._speed.x * 0.001
            value.y += Time.delta * this._speed.y * 0.001
            value.z = this._speed.z
            value.w = this._speed.w
            this._material.defaultPass.setUniform(`transformUV1`, value)
        }
    }
}

// An sample to use ExtrudeGeometry and make uv move animation
class Sample_ConduitGeometry3 {
    scene: Scene3D
    material: LitMaterial
    totalTime: number
    private Ori: dat.GUI | undefined

    async run() {
        // init dat.gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'
        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()
        Engine3D.setting.shadow.shadowBound = 50
        await Engine3D.init()

        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 50)

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

        this.createConduit()
        this.createFloor()
    }

    createFloor() {
        let object3D = Object3DUtil.GetSingleCube(200, 1, 200, 1, 1, 1)
        this.scene.addChild(object3D)
    }

    async createMaterial() {
        this.material = new LitMaterial()
        this.material.cullMode = 'none'
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
        renderer.geometry = new ExtrudeGeometry().build(shape, false, curve, 0.2)

        let component = conduitObject3D.addComponent(UVMoveComponent)
        component.speed.set(0, -0.4, 4, 0.5)
        // GUIUtil.renderUVMove(component);
        let uvDir = this.Ori.addFolder('UV Move')
        uvDir.add(component.speed, 'x', -1, 1, 0.01)
        uvDir.add(component.speed, 'y', -1, 1, 0.01)
        uvDir.add(component.speed, 'z', 0.1, 10, 0.01)
        uvDir.add(component.speed, 'w', 0.1, 10, 0.01)
        uvDir.add(component, 'enable')

        uvDir.open()
    }

    private getShape(): Vector3[] {
        let vertexList: Vector3[] = [] //an area
        const vertexCount = 40
        for (let i = 0; i < vertexCount; i++) {
            let angle = (i * Math.PI * 2) / 23
            let angle2 = (i * Math.PI * 2) / 50
            let z2 = Math.sin(angle2) * 8 * (Math.random() * 0.1 + 0.9)
            let vertex = new Vector3(i + this.random(-0.2, 0.2) - vertexCount * 0.5, 0, Math.sin(angle) + this.random(-1, 1))

            vertex.z += z2

            vertexList.push(vertex)
        }

        return vertexList
    }

    private random(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }

    private getCurve(): Vector3[] {
        let vertexList: Vector3[] = []
        vertexList.push(new Vector3(0, 0, 0))
        vertexList.push(new Vector3(0, 20, 0))
        return vertexList
    }
}

new Sample_ConduitGeometry3().run()
