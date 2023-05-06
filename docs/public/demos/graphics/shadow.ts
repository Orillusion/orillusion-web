import { Engine3D, Scene3D, Object3D, Camera3D, Vector3, AtmosphericComponent, View3D, LitMaterial, BoxGeometry, MeshRenderer, UnLitMaterial, SphereGeometry, DirectLight, PointLight, SpotLight, HoverCameraController, PlaneGeometry } from "@orillusion/core";

async function demo() {
    // 配置 shadow 参数
    Engine3D.setting.shadow.autoUpdate = true;
    Engine3D.setting.shadow.debug = true;
    Engine3D.setting.shadow.shadowBound = 100;
    Engine3D.setting.shadow.shadowBias = 0.0016;
    // Engine3D.setting.shadow.pointShadowBias = 0.075;

    await Engine3D.init();
    let scene3D: Scene3D = new Scene3D();
    let cameraObj: Object3D = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    camera.perspective(60, Engine3D.aspect, 1, 5000.0);
    let controller = cameraObj.addComponent(HoverCameraController);
    controller.setCamera(0, -45, 100, new Vector3(0, 0, 0));
    scene3D.addChild(cameraObj);

    //DirectLight 
    {
        let sp = new SphereGeometry(5, 30, 30);
        let obj = new Object3D();
        obj.name="";
        // 设置灯光角度，绕X轴旋转45度
        obj.rotationX = 45;
        obj.rotationY = 0;
        obj.rotationZ = 0;
        // 添加平行光组件，并设置阴影
        let light = obj.addComponent(DirectLight);
        light.name="";
        scene3D.addChild(obj);
        light.castShadow = true;
        light.intensity = 10;
        // let mr = obj.addComponent(MeshRenderer);
        // mr.geometry = sp;
        // mr.material = new LitMaterial();
        light.debug();
        // lc.debugDraw(true);
        scene3D.addChild(obj);
    }

    //PointLight 
    {
        // let sp = new SphereGeometry(5, 30, 30);

        let obj = new Object3D();
        // let mr = obj.addComponent(MeshRenderer);
        // mr.geometry = sp;
        // mr.material = new LitMaterial();

        let light = obj.addComponent(PointLight);
        light.name = ""
        scene3D.addChild(obj);
        obj.x = -15;
        obj.y = 30;
        obj.z = -20;
        obj.rotationX = 342;
        obj.rotationY = 360;
        obj.rotationZ = 199;
        light.intensity = 10;
        light.radius = 1;
        light.range = 170;
        // light.outerAngle = 96;
        // light.innerAngle = 0;
        light.castShadow = true;

        light.debug();
        // light.debugDraw(true);

    }

    //SpotLight 
    {
        let sp = new SphereGeometry(5, 30, 30);

        let obj = new Object3D();
        // let mr = obj.addComponent(MeshRenderer);
        // mr.geometry = sp;
        // mr.material = new LitMaterial();

        let light = obj.addComponent(SpotLight);
        light.name = ""
        scene3D.addChild(obj);
        obj.x = -15;
        obj.y = 30;
        obj.z = 20;
        obj.rotationX = 260;
        obj.rotationY = 360;
        obj.rotationZ = 199;
        light.intensity = 20;
        light.radius = 1;
        light.range = 170;
        light.outerAngle = 96;
        light.innerAngle = 0;
        light.castShadow = true;

        light.debug();
        // light.debugDraw(true);

    }

    //创建box，用于产生阴影
    {
        let castShadowObj = new Object3D();
        castShadowObj.y = 5
        let mr = castShadowObj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(10, 10, 10);
        mr.material = new LitMaterial();
        mr.castShadow = true;
        scene3D.addChild(castShadowObj);
    }
    //创建box，用于产生阴影
    {
        let castShadowObj = new Object3D();
        castShadowObj.y = 5
        let mr = castShadowObj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(10, 10, 10);
        mr.material = new LitMaterial();
        mr.castShadow = true;
        scene3D.addChild(castShadowObj);
    }

    //创建一个plane，用于接受阴影
    {
        let receiveShadowObj = new Object3D();
        let mr = receiveShadowObj.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry(2000, 1, 2000);
        mr.material = new LitMaterial();
        // mr2.material.debug();
        mr.receiveShadow = true;
        scene3D.addChild(receiveShadowObj);
    }
    // 创建渲染任务
    // add an Atmospheric sky enviroment
    scene3D.addComponent(AtmosphericComponent).sunY = 0.6;
    // create a view with target scene and camera
    let view = new View3D();
    view.scene = scene3D;
    view.camera = camera;
    // start render
    Engine3D.startRenderView(view);
}

demo();