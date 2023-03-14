import { BoxGeometry, Camera3D, defaultTexture, Engine3D, ForwardRenderJob, GUIHelp, LitMaterial, HoverCameraController,BitmapTexture2D, MeshRenderer, Object3D, Scene3D, SphereGeometry, PointLight, Vector3, webGPUContext , IESProfiles} from '@orillusion/core';

export class Sample_LightIES {
  scene: Scene3D;
  hoverCameraController: HoverCameraController;
  lightObj: any;
  constructor() { }

  async run() {
    Engine3D.setting.shadow.pointShadowBias = 0.6;
    Engine3D.setting.shadow.type = `HARD`;
    
    await Engine3D.init();
    GUIHelp.init();

    this.scene = new Scene3D();
    let cameraObj = new Object3D();
    let mainCamera = cameraObj.addComponent(Camera3D);
    mainCamera.perspective(37, webGPUContext.aspect, 1, 5000.0);

    this.hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController);
    this.scene.addChild(cameraObj);

    //set camera data
    this.hoverCameraController.setCamera(0, -45, 1200);
    await this.initScene(this.scene);

    let renderJob = new ForwardRenderJob(this.scene);
    Engine3D.startRender(renderJob);
  }

  async initScene(scene: Scene3D) {

    let iesTexture = await Engine3D.res.loadTexture("https://cdn.orillusion.com/ies/ies_2.png") as BitmapTexture2D;
    var iesPofiles = new IESProfiles();
    iesPofiles.IESTexture = iesTexture;

    {
        let po = new Object3D();
        let pl = po.addComponent(PointLight);
        pl.intensity = 10;
        pl.range = 100;
        pl.castShadow = true;
        pl.realTimeShadow = true;
        pl.iesPofile = iesPofiles;
        po.x = 26;
        po.y = 22;
        po.z = -174.91 ;
        this.scene.addChild(po);
        pl.debug();
        pl.debugDraw(true);
    }
    
    let ball: Object3D;
    {
        let mat = new LitMaterial();
        mat.baseMap = defaultTexture.whiteTexture;
        mat.normalMap = defaultTexture.normalTexture;
        mat.aoMap = defaultTexture.whiteTexture;
        mat.maskMap = defaultTexture.createTexture(32, 32, 255.0, 255.0, 0.0, 1);
        mat.emissiveMap = defaultTexture.blackTexture;
        mat.roughness = 0.5;
        mat.metallic = 0.2;

        let floor = new Object3D();
        let floorMr = floor.addComponent(MeshRenderer);
        floorMr.geometry = new BoxGeometry(50000, 5, 50000);
        floorMr.material = mat;
        this.scene.addChild(floor);

        ball = new Object3D();
        let mr = ball.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(6, 20, 20);
        mr.material = mat;
        this.scene.addChild(ball);
        ball.transform.x = -17;
        ball.transform.y = 34;
        ball.transform.z = 23;

        //wall
        let back_wall =  new Object3D();
        let mr2 = back_wall.addComponent(MeshRenderer);
        mr2.geometry = new BoxGeometry(500,500,10);
        mr2.material = mat;
        back_wall.z = - 200 ;
        this.scene.addChild(back_wall);

        let front_wall =  new Object3D();
        let mr3 = front_wall.addComponent(MeshRenderer);
        mr3.geometry = new BoxGeometry(500,500,10);
        mr3.material = mat;
        front_wall.z = 200 ;
        this.scene.addChild(front_wall);

        let left_wall =  new Object3D();
        let mr4 = left_wall.addComponent(MeshRenderer);
        mr4.geometry = new BoxGeometry(10,500,500);
        mr4.material = mat;
        left_wall.x = - 200 ;
        this.scene.addChild(left_wall);

        let right_wall =  new Object3D();
        let mr5 = right_wall.addComponent(MeshRenderer);
        mr5.geometry = new BoxGeometry(10,500,500);
        mr5.material = mat;
        right_wall.x = 200 ;
        this.scene.addChild(right_wall);
    }
  }
}

new Sample_LightIES().run()