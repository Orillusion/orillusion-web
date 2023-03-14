import {
  BoxGeometry,
  Camera3D,
  defaultTexture,
  Engine3D,
  ForwardRenderJob,
  GUIHelp,
  LitMaterial,
  HoverCameraController,
  MeshRenderer,
  Object3D,
  Scene3D,
  DirectLight,
  Vector3,
  webGPUContext
} from "@orillusion/core";

export class Sample_Light {
  scene: Scene3D;
  hoverCameraController: HoverCameraController;
  lightObj: any;
  constructor() {}

  async run() {
    await Engine3D.init();
    GUIHelp.init()
    this.scene = new Scene3D();
    let cameraObj = new Object3D();
    let mainCamera = cameraObj.addComponent(Camera3D);
    mainCamera.perspective(37, webGPUContext.aspect, 1, 10000.0);

    this.hoverCameraController = mainCamera.object3D.addComponent(
      HoverCameraController
    );
    this.scene.addChild(cameraObj);

    //set camera data
    this.hoverCameraController.setCamera(0, -45, 2000);
    await this.initScene(this.scene);

    let renderJob = new ForwardRenderJob(this.scene);
    Engine3D.startRender(renderJob);
  }

  initScene(scene: Scene3D) {
    {
      let dirLight = new Object3D();
      dirLight.rotationX = 30;
      dirLight.rotationZ = 30;
      let light = dirLight.addComponent(DirectLight);
      light.intensity = 20;
      light.lightColor.r = 255 / 255;
      light.lightColor.g = 157 / 255;
      light.lightColor.b = 5 / 255;
      light.debug()
      scene.addChild(dirLight);
    }

    let mat = new LitMaterial();
    mat.baseMap = defaultTexture.grayTexture;

    let floor = new Object3D();
    let mr = floor.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(2000, 1, 2000);
    mr.material = mat;
    this.scene.addChild(floor);

    let box = new BoxGeometry(1, 1, 1);

    let wall_w = new Object3D();
    wall_w.localScale = new Vector3(500, 100, 10);
    wall_w.localPosition = new Vector3(0, 50, 0);
    let mrw = wall_w.addComponent(MeshRenderer);
    mrw.geometry = box;
    mrw.material = mat;
    this.scene.addChild(wall_w);

    let wall_a = new Object3D();
    wall_a.localScale = new Vector3(10, 100, 500);
    wall_a.localPosition = new Vector3(250, 50, 0);
    let mra = wall_a.addComponent(MeshRenderer);
    mra.geometry = box;
    mra.material = mat;
    this.scene.addChild(wall_a);

    let wall_d = new Object3D();
    wall_d.localScale = new Vector3(10, 100, 500);
    wall_d.localPosition = new Vector3(-250, 50, 0);
    let mrd = wall_d.addComponent(MeshRenderer);
    mrd.geometry = box;
    mrd.material = mat;
    this.scene.addChild(wall_d);
  }
}

new Sample_Light().run();