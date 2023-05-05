import {ComponentBase, Time, DirectLight, Color, AtmosphericComponent, LitMaterial, MeshRenderer, View3D, Vector3, CubicBezierPath, CubicBezierType, Scene3D, BoxGeometry, Object3D, Engine3D, Camera3D, HoverCameraController, ForwardRenderJob} from '@orillusion/core';

class LightAnimation extends ComponentBase {
  private light: DirectLight;

  constructor() {
    super();
    console.log(this.object3D, 'LightAnimation constructor');
  }

  public init() {
    //meshRender可能没被创建、或者MeshRender自身没有start
    console.log(this.object3D, 'LightAnimation init');
  }

  public start() {
    this.light = this.object3D.getComponent(DirectLight);
    this.color = this.light.lightColor;
  }

  private color: Color;
  public onUpdate() {
    this.color.r = (Math.sin(Time.time * 0.01) + 1) * 0.5;
    this.light.lightColor = this.color;
  }
}

class MaterialAnimation extends ComponentBase {
  private material: LitMaterial;

  constructor() {
    super();
    console.log(this.object3D, 'constructor');
  }

  public init() {
    //meshRender可能没被创建、或者MeshRender自身没有start
    console.log(this.object3D, 'init');
  }

  public start() {
    let mr = this.object3D.getComponent(MeshRenderer);
    this.material = mr.material as LitMaterial;
    this.material.emissiveMap = Engine3D.res.grayTexture;
  }

  private time: number = 0;
  public onUpdate() {
    let i = Math.sin(Time.time * 0.01) + 1; //0-2
    this.material.emissiveIntensity = i * 0.5 + 0.5; //0~2
    this.time += Time.delta; //
    if (this.time > 4000) {
      // this.stop();
    }
  }
}

class PathAnimation extends ComponentBase {
  private bezier: CubicBezierPath;

  public start() {
    let points: Vector3[] = [];
    for (let i = 0; i < 10; i++) {
      let point = new Vector3();
      point.y = Math.sin((i / 10) * 360) * 1;
      point.x = i * 1;
      points.push(point);
    }

    this.bezier = new CubicBezierPath(CubicBezierType.Closed);
    this.bezier.InterpolatePoints(points, CubicBezierType.Closed);
  }

  public onUpdate() {
    let t = ((Time.time * 0.001) % 4) / 4;
    let position = this.bezier.GetPoint(t);
    this.object3D.localPosition = position;
  }
}

class UserLogic {
  private scene: Scene3D;
  private cube: Object3D;
  private light: DirectLight;

  public init(scene3D: Scene3D) {
    this.scene = scene3D;
	// add an Atmospheric sky enviroment
	let sky = scene3D.addComponent(AtmosphericComponent);
	sky.sunY = 0.6;
    // this.createCube();
    // this.createLight();
    // this.createComponents();
  }

  private createCube() {
    let mat = new LitMaterial();
    mat.baseMap = Engine3D.res.whiteTexture;
    mat.normalMap = Engine3D.res.normalTexture;
    mat.aoMap = Engine3D.res.whiteTexture;
    mat.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 255.0, 0.0, 1);
    mat.emissiveMap = Engine3D.res.blackTexture;
    mat.roughness = 1.0;
    mat.metallic = 0.0;
    mat.emissiveIntensity = 0.5;

    let mat2 = new LitMaterial();
    mat2.baseMap = Engine3D.res.whiteTexture;
    mat2.normalMap = Engine3D.res.normalTexture;
    mat2.aoMap = Engine3D.res.whiteTexture;
    mat2.maskMap = Engine3D.res.createTexture(32, 32, 255.0, 255.0, 0.0, 1);
    mat2.emissiveMap = Engine3D.res.blackTexture;
    mat2.roughness = 1.0;
    mat2.metallic = 0.0;
    mat2.emissiveIntensity = 0.5;

    let size = 1;
    let geometry = new BoxGeometry(size, size, size);

    for (let i = 0; i < 10; i++) {
      let obj: Object3D = new Object3D();
      obj.scaleX = obj.scaleY = obj.scaleZ = 1;
      obj.x = i * 2 - 10;
      let mr = obj.addComponent(MeshRenderer);
      if (i == 0) {
        this.cube = obj;
        mr.material = mat;
      } else {
        mr.material = mat2;
      }

      if (i == 5) {
        obj.addComponent(PathAnimation);
      }

      mr.geometry = geometry;

      this.scene.addChild(obj);
    }
  }

  private createLight() {
    let light: Object3D = new Object3D();
    let component = light.addComponent(DirectLight);
    light.rotationX = 45;
    light.rotationY = 30;
    component.lightColor = new Color(1.0, 0, 0, 1);
    component.intensity = 2;
    this.scene.addChild(light);
    this.light = component;
  }

  private createComponents() {
    this.cube.addComponent(MaterialAnimation);
    this.light.object3D.addComponent(LightAnimation);
  }

  async run() {
    await Engine3D.init({});
    this.init(new Scene3D())
    let cameraObj = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    // 调整摄像机视角
    camera.perspective(60, Engine3D.aspect, 1, 5000.0);
    // 设置主相机
    let controller = camera.object3D.addComponent(HoverCameraController);
    controller.setCamera(0, 0, 15);
    // 添加相机节点
    this.scene.addChild(cameraObj);
    // create a view with target scene and camera
    let view = new View3D();
    view.scene = this.scene;
    view.camera = camera;
    // start render
    Engine3D.startRenderView(view);
  }
}
new UserLogic().run();