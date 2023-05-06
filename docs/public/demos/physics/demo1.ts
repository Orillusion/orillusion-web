import { BoxColliderShape, BoxGeometry, Camera3D, AtmosphericComponent, ColliderComponent, Color, DirectLight, Engine3D, View3D, LitMaterial, HoverCameraController, MeshRenderer, Object3D, PlaneGeometry, Scene3D, Vector2, Vector3 } from "@orillusion/core";
import { Physics, Rigidbody } from "@orillusion/physics";

export class Sample_box {
  constructor() {}

  addPlane (scene: Scene3D, size: Vector2, pos: Vector3, rot: Vector3) {
    // 新建对象
    const obj = new Object3D();
    // 为对象添 MeshRenderer
    let mr = obj.addComponent(MeshRenderer);
    // 设置几何体
    mr.geometry = new PlaneGeometry(size.x, size.y);
    // 设置材质
    mr.material = new LitMaterial();
    mr.material.baseColor = new Color(0.04, 0.42, 0.45, 1);
    // 设置缩放
    obj.localPosition = pos;
    obj.localRotation = rot;
    // 添加刚体碰撞体
    let rigidbody = obj.addComponent(Rigidbody);
    rigidbody.mass = 0;
    let collider = obj.addComponent(ColliderComponent);
    collider.shape = new BoxColliderShape();
    collider.shape.size = new Vector3(size.x, 0.1, size.y);
    scene.addChild(obj);
  }

  loop() {
    if (Physics.isInited) {
      Physics.update();
    }
  }

  async run() {
    await Physics.init();
    // 初始化引擎环境;
    await Engine3D.init({
      renderLoop: () => this.loop()
    });
    let scene3D = new Scene3D();
    scene3D.addComponent(AtmosphericComponent);
    // 新建摄像机实例
    let cameraObj = new Object3D();
    let mainCamera = cameraObj.addComponent(Camera3D);
    // 调整摄像机视角
    mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
    let controller = mainCamera.object3D.addComponent(HoverCameraController);
    controller.setCamera(45, -15, 200, new Vector3(0, 50, 0));
    // 添加相机节点
    scene3D.addChild(cameraObj);

    // 新建光照
    let light: Object3D = new Object3D();
    // 添加直接光组件
    let component = light.addComponent(DirectLight);
    // 调整光照参数
    light.rotationX = 45;
    light.rotationY = 30;
    component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
    component.intensity = 20;
    // 添加光照对象
    scene3D.addChild(light);

    this.addPlane(scene3D, new Vector2(100, 100), new Vector3(0, 0, 0), new Vector3(0, 0, 0));

    // 新建对象
    const obj = new Object3D();
    // 为对象添 MeshRenderer
    let mr = obj.addComponent(MeshRenderer);
    // 设置几何体
    mr.geometry = new BoxGeometry(5, 5, 5);
    // 设置材质
    mr.material = new LitMaterial();
    mr.material.baseColor = new Color(Math.random(), Math.random(), Math.random(), 1.0);
    // 设置位置旋转
    obj.y = 100
    obj.rotationX = Math.random() * 360
    // 添加刚体碰撞体
    let rigidbody = obj.addComponent(Rigidbody);
    rigidbody.mass = 10;
    let collider = obj.addComponent(ColliderComponent);
    collider.shape = new BoxColliderShape();
    collider.shape.size = new Vector3(5, 5, 5);
    scene3D.addChild(obj);

    let view = new View3D();
    view.scene = scene3D;
    view.camera = mainCamera;
    // start render
    Engine3D.startRenderView(view);
  }
}

new Sample_box().run();