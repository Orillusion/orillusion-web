import { Engine3D, Scene3D, Object3D, Camera3D, Vector3, PlaneGeometry, DirectLight, Color, KelvinUtil, FlyCameraController, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, View3D } from '@orillusion/core'

async function demo() {
    //初始化引擎
    await Engine3D.init()
    // 新建场景根节点
    let scene: Scene3D = new Scene3D()

    let cameraObj = new Object3D()
    cameraObj.y = 0
    let camera = cameraObj.addComponent(Camera3D)
    camera.perspective(60, Engine3D.aspect, 0.1, 5000.0)

    let flyController = cameraObj.addComponent(FlyCameraController)
    flyController.setCamera(new Vector3(0, 15, 15), new Vector3(0, 10, 0))
    flyController.moveSpeed = 10
    scene.addChild(cameraObj)

    // 创建立方体
    const boxObj: Object3D = new Object3D()
    boxObj.localPosition = new Vector3(0, 10, 0)
    // 为对象添 MeshRenderer
    let boxMr: MeshRenderer = boxObj.addComponent(MeshRenderer)
    // 设置几何体
    boxMr.geometry = new BoxGeometry(2, 2, 2)
    // 设置材质
    boxMr.material = new LitMaterial()
    boxMr.material.baseColor = new Color(1.0, 1.0, 1.0, 1.0)
    scene.addChild(boxObj)

    // 创建平面体
    let groundObj = new Object3D()
    groundObj.localPosition = new Vector3(0, 9, 0)

    let planeMr = groundObj.addComponent(MeshRenderer)
    planeMr.geometry = new PlaneGeometry(10, 10)

    planeMr.material = new LitMaterial()
    // planeMr.material.baseColor = Color.COLOR_BLUE.clone();
    scene.addChild(groundObj)

    {
        let lightObj = new Object3D()
        lightObj.x = 0
        lightObj.y = 0
        lightObj.z = 0
        lightObj.rotationX = 0
        lightObj.rotationY = 0
        lightObj.rotationZ = 0
        let lc = lightObj.addComponent(DirectLight)
        lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        lc.castShadow = true
        lc.intensity = 1.7
        scene.addChild(lightObj)
    }

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
