import {
  Camera3D,
  DirectLight,
  Engine3D,
  View3D,
  LitMaterial,
  HoverCameraController,
  KelvinUtil,
  MeshRenderer,
  Object3D,
  Scene3D,
  SphereGeometry,
  CameraUtil,
  webGPUContext,
  GlobalIlluminationComponent,
  PointLight,
  BoxGeometry,
  Color,
} from "@orillusion/core";

export class Sample_GI {
  lightObj: Object3D;
  cameraObj: Camera3D;
  scene: Scene3D;
  hover: HoverCameraController;

  constructor() {}

  async run() {
    await Engine3D.init({});

    Engine3D.setting.material.materialChannelDebug = true;
    Engine3D.setting.material.materialDebug = false;

    Engine3D.setting.gi.enable = true;
    Engine3D.setting.gi.debug = true;

    Engine3D.setting.gi.probeYCount = 3;
    Engine3D.setting.gi.probeXCount = 6;
    Engine3D.setting.gi.probeZCount = 6;
    Engine3D.setting.gi.probeSpace = 60;
    Engine3D.setting.gi.offsetX = 0;
    Engine3D.setting.gi.offsetY = 60;
    Engine3D.setting.gi.offsetZ = 0;
    Engine3D.setting.gi.indirectIntensity = 1;
    Engine3D.setting.gi.probeSize = 64;
    Engine3D.setting.gi.octRTSideSize = 64;
    Engine3D.setting.gi.octRTMaxSize = 2048;
    Engine3D.setting.gi.ddgiGamma = 1;
    Engine3D.setting.gi.autoRenderProbe = true;

    Engine3D.setting.shadow.shadowBound = 200;
    Engine3D.setting.shadow.shadowBias = 0.002;
    Engine3D.setting.shadow.debug = true;

    Engine3D.setting.shadow.autoUpdate = true;
    Engine3D.setting.shadow.updateFrameRate = 1;

    Engine3D.setting.render.postProcessing.bloom = {
      enable: true,
      debug: false,
      blurX: 4,
      blurY: 4,
      intensity: 0.5,
      brightness: 1.25,
    };

    this.scene = new Scene3D();
    let mainCamera = CameraUtil.createCamera3DObject(this.scene);
    mainCamera.perspective(60, webGPUContext.aspect, 1, 5000.0);
    let ctrl = mainCamera.object3D.addComponent(HoverCameraController);
    ctrl.setCamera(-60, -25, 150);

    this.addGIProbes();

    let view = new View3D();
    view.scene = this.scene;
    view.camera = mainCamera;
    Engine3D.startRenderView(view);

    await this.initScene();
  }

  private addGIProbes() {
    let probeObj = new Object3D();
    let component = probeObj.addComponent(GlobalIlluminationComponent);
    this.scene.addChild(probeObj);
  }

  async initScene() {
    /******** light *******/
    {
      this.lightObj = new Object3D();
      this.lightObj.rotationX = 15;
      this.lightObj.rotationY = 110;
      this.lightObj.rotationZ = 0;
      let lc = this.lightObj.addComponent(DirectLight);
      lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
      lc.castShadow = true;
      lc.intensity = 18;
      lc.debug();
      this.scene.addChild(this.lightObj);
    }

    {
      let po4 = new Object3D();
      let pl4 = po4.addComponent(PointLight);
      pl4.intensity = 2.5;
      pl4.range = 1000;
      pl4.castShadow = true;
      po4.x = 86;
      po4.y = 23.61;
      po4.z = -23.61;
      this.scene.addChild(po4);
      pl4.debug();
      pl4.debugDraw(true);
    }

    {
      let floorHeight = 20;
      let floor = this.GetSingleCube(1000, floorHeight, 1000, 0.6, 0.6, 0.6);
      floor.y = -floorHeight;
      this.scene.addChild(floor);
    }

    {
      let greenBall = this.GetSingleSphere(30, 0.1, 0.8, 0.2);
      this.scene.addChild(greenBall);
      greenBall.x = -70;
      greenBall.y = 40;
    }

    {
      let chair = (await Engine3D.res.loadGltf(
        "https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf",
        {
          onProgress: (e) => this.onLoadProgress(e),
          onComplete: (e) => this.onComplete(e),
        }
      )) as Object3D;
      chair.scaleX = chair.scaleY = chair.scaleZ = 100;
      chair.rotationZ = chair.rotationX = 130;
      chair.z = -120;
      this.scene.addChild(chair);
    }

    {
      let Duck = (await Engine3D.res.loadGltf(
        "https://cdn.orillusion.com/PBR/Duck/Duck.gltf",
        {
          onProgress: (e) => this.onLoadProgress(e),
          onComplete: (e) => this.onComplete(e),
        }
      )) as Object3D;
      Duck.scaleX = Duck.scaleY = Duck.scaleZ = 0.3;
      Duck.transform.y = 0;
      Duck.transform.x = 0;
      Duck.transform.z = 80;
      this.scene.addChild(Duck);
      GUIHelp.addFolder("Move Duck");
      GUIHelp.add(Duck.transform, "x", -80, 80, 1);
      GUIHelp.add(Duck.transform, "z", -80, 80, 1);
      GUIHelp.endFolder();
    }

    {
      //   let car = await Engine3D.res.loadGltf(
      //     "https://cdn.orillusion.com/gltfs/pbrCar/pbrCar.gltf"
      //   );
      //   car.scaleX = car.scaleY = car.scaleZ = 1.5;
      //   this.scene.addChild(car);
      //   car.x = 20;
    }

    GUIHelp.addButton("Start GI", () => {
      Engine3D.renderJob.probeRenderer.startRenderGI();
    });
  }

  onLoadProgress(e) {
    console.log(e);
  }

  onComplete(e) {
    console.log(e);
  }

  renderUpdate() {}

  public GetSingleCube(
    sizeX: number,
    sizeY: number,
    sizeZ: number,
    r: number,
    g: number,
    b: number
  ) {
    let mat = new LitMaterial();
    mat.baseColor = new Color(r, g, b, 1);

    let obj = new Object3D();
    let mr = obj.addComponent(MeshRenderer);
    mr.castGI = true;
    mr.geometry = new BoxGeometry(sizeX, sizeY, sizeZ);
    mr.material = mat;
    return obj;
  }

  public GetSingleSphere(radius: number, r: number, g: number, b: number) {
    let mat = new LitMaterial();
    mat.baseColor = new Color(r, g, b, 1);

    let obj = new Object3D();
    let mr = obj.addComponent(MeshRenderer);
    mr.castGI = true;
    mr.geometry = new SphereGeometry(radius, 20, 20);
    mr.material = mat;
    return obj;
  }
}

new Sample_GI().run();
