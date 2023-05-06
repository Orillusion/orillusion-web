import { BoxColliderShape, BoxGeometry, Camera3D, ColliderComponent, Color, ComponentBase, DirectLight, Engine3D, AtmosphericComponent, View3D, LitMaterial, HoverCameraController, MeshRenderer, Object3D, PlaneGeometry, Scene3D, Vector2, Vector3 } from "@orillusion/core";
import { Physics, Rigidbody } from "@orillusion/physics";

export class Sample_colliders {
  constructor() {}

  addPlane (scene: Scene3D, size: Vector2, pos: Vector3, rot: Vector3) {
    // 新建对象
    const obj = new Object3D();
    // 为对象添 MeshRenderer
    let mr = obj.addComponent(MeshRenderer);
    // 设置几何体
    //mr.geometry = new CubeGeometry(10, 10, 10)
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

    return obj;
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
    mainCamera.lookAt(new Vector3(0, 0, 10), new Vector3(0, 0, 0));
    mainCamera.perspective(60, Engine3D.aspect, 1, 5000.0);
    let controller = mainCamera.object3D.addComponent(HoverCameraController);
    controller.setCamera(45, -15, 150, new Vector3(0, 30, 0));
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

    this.addPlane(scene3D, new Vector2(100, 100), new Vector3(0, 0, 0), new Vector3(0, 0, 0))
    scene3D.addComponent(BoxGenerator);

    let view = new View3D();
    view.scene = scene3D;
    view.camera = mainCamera;
    // start render
    Engine3D.startRenderView(view);
  }
}

class BoxGenerator extends ComponentBase {
  // 记录添加桌子的间隔时间
  private _lastTime: number = performance.now()

  // 脚本更新回调
  public onUpdate(): void {
    // 计算新的间隔时间
    let now: number = performance.now()
    // 每间隔300ms，添加一个桌子
    if (now - this._lastTime > 300) {
      // 添加桌子
      this._addBox();
      // 删除最早的物体，保持场景数量
      if(this.object3D.entityChildren.length > 500)
        this.object3D.removeChildByIndex(4)
      // 重置间隔时间
      this._lastTime = now;
    }
  }

  // 添加桌子的函数
  private _addBox(): void {
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
    obj.localPosition = new Vector3(Math.random() * 70 - 35, 50, Math.random() * 70 - 35)
    obj.localRotation = new Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360)
    // 添加刚体碰撞体
    let rigidbody = obj.addComponent(Rigidbody);
    rigidbody.mass = 10;
    let collider = obj.addComponent(ColliderComponent);
    collider.shape = new BoxColliderShape();
    collider.shape.size = new Vector3(5, 5, 5);

    this.object3D.addChild(obj);
  }
}

new Sample_colliders().run();