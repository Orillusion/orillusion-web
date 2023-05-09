import { Engine3D, Scene3D, Object3D, Camera3D, Vector3, OrbitController, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, View3D } from '@orillusion/core'

async function demo() {
    //初始化引擎
    await Engine3D.init()
    // 新建场景根节点
    let scene: Scene3D = new Scene3D()

    let cameraObj = new Object3D()
    let camera = cameraObj.addComponent(Camera3D)
    camera.perspective(60, Engine3D.aspect, 0.1, 5000.0)
    // 设置 cameraObj 位置即可调节视角
    cameraObj.localPosition.set(0, 10, 20)
    let orbit = cameraObj.addComponent(OrbitController)
    // 打开自动旋转
    orbit.autoRotateSpeed = 0.5
    orbit.autoRotate = true
    scene.addChild(cameraObj)

    const boxObj: Object3D = new Object3D()
    boxObj.localPosition = new Vector3(0, 0, 0)

    // 为对象添 MeshRenderer
    let mr: MeshRenderer = boxObj.addComponent(MeshRenderer)
    // 设置几何体
    mr.geometry = new BoxGeometry(5, 5, 5)
    // 设置材质
    mr.material = new LitMaterial()

    scene.addChild(boxObj)

    // add an Atmospheric sky enviroment
    scene.addComponent(AtmosphericComponent).sunY = 0.6
    // create a view with target scene and camera
    let view = new View3D()
    view.scene = scene
    view.camera = camera
    // start render
    Engine3D.startRenderView(view)
}

demo()
