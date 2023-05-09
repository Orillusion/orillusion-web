import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, LitMaterial, BoxGeometry, MeshRenderer, DirectLight, HoverCameraController, RGBEParser, Color, Vector3, View3D } from '@orillusion/core'
import * as dat from 'dat.gui'

async function demo() {
    // 初始化引擎
    await Engine3D.init()

    // 新建场景根节点
    let scene3D: Scene3D = new Scene3D()
    // add an Atmospheric sky enviroment
    let sky = scene3D.addComponent(AtmosphericComponent)
    sky.sunY = 0.6
    // 新建摄像机实例
    let cameraObj: Object3D = new Object3D()
    let camera = cameraObj.addComponent(Camera3D)
    // 调整摄像机视角
    camera.perspective(60, Engine3D.aspect, 1, 5000.0)
    // 设置相机位置
    let controller = camera.object3D.addComponent(HoverCameraController)
    controller.setCamera(0, 0, 15)
    // 添加相机节点
    scene3D.addChild(cameraObj)
    // 新建光照
    let light: Object3D = new Object3D()
    // 添加直接光组件
    let component: DirectLight = light.addComponent(DirectLight)
    // 调整光照参数
    light.rotationX = 45
    light.rotationY = 30
    component.lightColor = new Color(1.0, 1.0, 1.0, 1.0)
    component.intensity = 1
    // 添加光照对象
    scene3D.addChild(light)
    // 新建对象
    const obj: Object3D = new Object3D()
    // 为对象添 MeshRenderer
    let mr: MeshRenderer = obj.addComponent(MeshRenderer)
    // 设置几何体
    mr.geometry = new BoxGeometry(5, 5, 5)
    // 设置材质
    mr.material = new LitMaterial()
    // 设置位置和旋转
    obj.localPosition = new Vector3(0, 0, 0)
    obj.localRotation = new Vector3(0, 45, 0)
    // 添加对象
    scene3D.addChild(obj)
    // create a view with target scene and camera
    let view = new View3D()
    view.scene = scene3D
    view.camera = camera
    // start render
    Engine3D.startRenderView(view)

    const GUIHelp = new dat.GUI()
    GUIHelp.addFolder('Box Transform')
    GUIHelp.add(obj.transform, 'x', -10.0, 10.0, 0.01)
    GUIHelp.add(obj.transform, 'y', -10.0, 10.0, 0.01)
    GUIHelp.add(obj.transform, 'z', -10.0, 10.0, 0.01)
    GUIHelp.add(obj.transform, 'rotationX', 0.0, 360.0, 0.01)
    GUIHelp.add(obj.transform, 'rotationY', 0.0, 360.0, 0.01)
    GUIHelp.add(obj.transform, 'rotationZ', 0.0, 360.0, 0.01)
    GUIHelp.add(obj.transform, 'scaleX', 0.0, 2.0, 0.01)
    GUIHelp.add(obj.transform, 'scaleY', 0.0, 2.0, 0.01)
    GUIHelp.add(obj.transform, 'scaleZ', 0.0, 2.0, 0.01)
}
demo()
