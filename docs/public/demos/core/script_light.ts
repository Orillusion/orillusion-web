import {
  ComponentBase,
  Time,
  DirectLight,
  Color,
  LitMaterial,
  MeshRenderer,
  defaultTexture,
  Scene3D,
  BoxGeometry,
  Object3D,
  Engine3D,
  Camera3D,
  HoverCameraController,
  ForwardRenderJob,
} from '@orillusion/core';

class LightAnimation extends ComponentBase {
  private light: DirectLight;
  private color: Color;

  protected start() {
    this.light = this.object3D.getComponent(DirectLight);
    this.color = this.light.lightColor;
  }
  update() {
    this.color.r = Math.pow(Math.sin(Time.time * 0.001), 10);
    this.light.lightColor = this.color;
  }
}

class UserLogic {
  private scene: Scene3D;
  private cube: Object3D;
  private light: DirectLight;

  init(scene3D: Scene3D) {
    this.scene = scene3D;
    this.createCube();
    this.createLight();
    this.createComponents();
  }

  private createCube() {
    let mat = new LitMaterial();
    mat.roughness = 1.0;
    let obj: Object3D = new Object3D();
    let geometry = new BoxGeometry(3, 3, 3);
    let mr = obj.addComponent(MeshRenderer);
    mr.material = mat;
    mr.geometry = geometry;
    this.scene.addChild(obj);
  }

  private createLight() {
    let light: Object3D = new Object3D();
    let component = light.addComponent(DirectLight);
    light.rotationX = -45;
    light.rotationZ = -45;
    component.lightColor = new Color(1.0, 0, 0, 1);
    component.intensity = 10;
    this.scene.addChild(light);
    this.light = component;
  }

  private createComponents() {
    this.light.object3D.addComponent(LightAnimation);
  }

  async run() {
    await Engine3D.init();
    this.init(new Scene3D());
    let cameraObj = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    // 调整摄像机视角
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    let controller = camera.object3D.addComponent(HoverCameraController);
    controller.setCamera(-135, 0, 15);
    // 添加相机节点
    this.scene.addChild(cameraObj);
    let renderJob:ForwardRenderJob = new ForwardRenderJob(this.scene);
    // 开始渲染
    Engine3D.startRender(renderJob);
  }
}
new UserLogic().run();