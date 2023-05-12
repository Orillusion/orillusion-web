import { Engine3D, Scene3D, Vector3, AtmosphericComponent, Object3D, Camera3D, View3D, LitMaterial, MeshRenderer, BoxGeometry, MouseCode, PointerEvent3D } from '@orillusion/core'

let scene: Scene3D
let cameraObj: Object3D
let camera: Camera3D
let boxObj: Object3D
async function init() {
    await Engine3D.init()

    // 创建场景实例
    scene = new Scene3D()
    scene.addComponent(AtmosphericComponent)

    // 创建相机实例
    cameraObj = new Object3D()
    camera = cameraObj.addComponent(Camera3D)
    // 设置正交相机
    camera.perspective(60, Engine3D.aspect, 1, 5000.0)
    camera.lookAt(new Vector3(0, 5, 15), new Vector3(0, 0, 0))

    // 设置主相机
    scene.addChild(cameraObj)

    // 添加物体
    boxObj = new Object3D()
    let mr: MeshRenderer = boxObj.addComponent(MeshRenderer)
    mr.geometry = new BoxGeometry(3, 3, 3)
    // 设置材质
    mr.material = new LitMaterial()
    // 设置位置
    boxObj.localPosition = new Vector3(0, 0, 0)
    // 添加对象至场景
    scene.addChild(boxObj)

    let view = new View3D()
    view.scene = scene
    view.camera = camera
    // start render
    Engine3D.startRenderView(view)
}

async function demo() {
    await init()

    Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_DOWN,
        (e: PointerEvent3D) => {
            if (e.mouseCode == MouseCode.MOUSE_LEFT) {
                boxObj.rotationY -= 20
            } else if (e.mouseCode == MouseCode.MOUSE_RIGHT) {
                boxObj.rotationY += 20
            }
        },
        this
    )

    Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_WHEEL,
        (e: PointerEvent3D) => {
            boxObj.z += Engine3D.inputSystem.wheelDelta / 120
        },
        this
    )
}

demo()
