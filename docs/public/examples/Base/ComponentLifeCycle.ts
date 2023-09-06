import {
    Engine3D,
    ComponentBase,
    Object3DUtil,
    Scene3D,
    AtmosphericComponent,
    CameraUtil,
    HoverCameraController, View3D, Object3D, DirectLight, KelvinUtil
} from "@orillusion/core";
import {Stats} from "@orillusion/stats";

class TestComponent1 extends ComponentBase {
    i = 0;

    start(): void {
        console.log('TestComponent1 start');
    }

    onUpdate() {
        this.i += 1;
        console.log("TestComponent1 onUpdate");
    }

    onLateUpdate() {
        console.log("TestComponent1 onLateUpdate");
        console.log("TestComponent1", this.i);
    }
}

class TestComponent2 extends ComponentBase {
    i = 0;

    start() {
        console.log("TestComponent2 onUpdate");
        this.transform.rotationY = 0.0;
        this.object3D.addComponent(TestComponent1);
    }

    onUpdate() {
        this.i += 1;
        this.transform.rotationY += 1.0;
        console.log("TestComponent2 onUpdate");
    }

    onLateUpdate() {
        console.log("TestComponent2 onLateUpdate");
        console.log("TestComponent2 ", this.i);
    }
}

Engine3D.init().then(() => {
    // init Scene3D
    let scene = new Scene3D();
    scene.addComponent(Stats);
    scene.exposure = 1;

    // init sky
    let atmosphericSky: AtmosphericComponent;
    if ({}) {
        atmosphericSky = scene.addComponent(AtmosphericComponent);
    }

    // init Camera3D
    let cameraData = {
        near: 1,
        far: 5000,
        distance: 100,
        fov: 60,
        pitch: -15,
        roll: -30,
    };
    let camera = CameraUtil.createCamera3DObject(scene);
    camera.perspective(cameraData.fov, Engine3D.aspect, cameraData.near, cameraData.far);

    // init Camera Controller
    let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
    hoverCtrl.setCamera(cameraData.roll, cameraData.pitch, cameraData.distance);

    // init View3D
    let view = new View3D();
    view.scene = scene;
    view.camera = camera;

    // create direction light
    let lightObj3D = new Object3D();
    lightObj3D.x = 0;
    lightObj3D.y = 30;
    lightObj3D.z = -40;
    lightObj3D.rotationX = 20;
    lightObj3D.rotationY = 160;
    lightObj3D.rotationZ = 0;

    let directLight = lightObj3D.addComponent(DirectLight);
    directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
    directLight.castShadow = true;
    directLight.intensity = 30;

    let light = directLight;
    scene.addChild(light.object3D);

    // relative light to sky
    if (atmosphericSky) {
        atmosphericSky.relativeTransform = light.transform;
    }

    //floor
    const floor = Object3DUtil.GetSingleCube(100, 1, 100, 0.5, 0.5, 0.5);
    floor.y = -5;
    scene.addChild(floor);
    // 新建对象
    const obj = Object3DUtil.GetSingleCube(10, 10, 10, 1, 1, 1)
    obj.addComponent(TestComponent2);
    scene.addChild(obj);
    // 开始渲染
    Engine3D.startRenderView(view);
});