import { Engine3D, ComponentBase, Object3DUtil, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, Object3D, DirectLight, KelvinUtil } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

class TestComponent1 extends ComponentBase {
    i = 0;
    start(): void {
        console.log('TestComponent1 start');
    }
    onUpdate() {
        this.i += 1;
        console.log('TestComponent1 onUpdate');
    }
    onLateUpdate() {
        console.log('TestComponent1 onLateUpdate', this.i);
    }
}

class TestComponent2 extends ComponentBase {
    i = 0;
    start() {
        console.log('TestComponent2 start');
        this.transform.rotationY = 0.0;
        this.object3D.addComponent(TestComponent1);
    }
    onUpdate() {
        this.i += 1;
        this.transform.rotationY += 1.0;
        console.log('TestComponent2 onUpdate');
    }
    onLateUpdate() {
        console.log('TestComponent2 onLateUpdate', this.i);
    }
}

class Sample {
    async run() {
        Engine3D.setting.shadow.type = 'HARD';
        Engine3D.setting.shadow.shadowBound = 100;
        await Engine3D.init();

        let scene = new Scene3D();
        scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 100);

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

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 30;

        scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;
        // floor
        const floor = Object3DUtil.GetSingleCube(100, 1, 100, 0.5, 0.5, 0.5);
        floor.y = -5;
        scene.addChild(floor);
        // box
        const obj = Object3DUtil.GetSingleCube(10, 10, 10, 1, 1, 1);
        obj.addComponent(TestComponent2);
        scene.addChild(obj);
        Engine3D.startRenderView(view);
    }
}

new Sample().run();
