import dat from 'dat.gui';
import { Stats } from '@orillusion/stats';
import { AtmosphericComponent, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Object3D, Object3DUtil, Scene3D, Transform, View3D } from '@orillusion/core';

// A sample to show boundingbox
class Sample_BoundingBox {
    scene: Scene3D;
    view: View3D;
    box: Object3D;
    container: Object3D;
    private Ori: dat.GUI | undefined;

    async run() {
        // init engine
        await Engine3D.init({
            renderLoop: () => {
                this.loop();
            }
        });

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = this.scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 0.01, 1000);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 20);

        // init View3D
        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        this.view = view;

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
        light.intensity = 5;

        this.scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;

        // Engine3D.startRenderViews([this.view])
        Engine3D.startRenderView(this.view);

        Engine3D.getRenderJob(this.view);

        this.box = Object3DUtil.GetSingleCube(5, 3, 8, 1, 1, 1);
        this.box.transform.eventDispatcher.addEventListener(Transform.LOCAL_ONCHANGE, this.logChange, this);

        let parent = (this.container = new Object3D());
        parent.addChild(this.box);
        this.scene.addChild(parent);

        let button_remove = {
            Remove_Box: () => {
                this.box.transform.parent && this.box.removeFromParent();
            }
        };
        let button_add = {
            Add_Box: () => {
                !this.box.transform.parent && parent.addChild(this.box);
            }
        };
        let gui = new dat.GUI();
        let folder = gui.addFolder('Orillusion');
        folder.add(button_remove, 'Remove_Box');
        folder.add(button_add, 'Add_Box');

        let Container = gui.addFolder('Container');
        Container.add(parent.transform, 'x', -100.0, 100.0, 0.01);
        Container.add(parent.transform, 'y', -100.0, 100.0, 0.01);
        Container.add(parent.transform, 'z', -100.0, 100.0, 0.01);
        Container.add(parent.transform, 'rotationX', 0.0, 360.0, 0.01);
        Container.add(parent.transform, 'rotationY', 0.0, 360.0, 0.01);
        Container.add(parent.transform, 'rotationZ', 0.0, 360.0, 0.01);
        Container.add(parent.transform, 'scaleX', 0.0, 2.0, 0.01);
        Container.add(parent.transform, 'scaleY', 0.0, 2.0, 0.01);
        Container.add(parent.transform, 'scaleZ', 0.0, 2.0, 0.01);
        Container.open();

        let Box = gui.addFolder('Box');
        Box.add(this.box.transform, 'x', -100.0, 100.0, 0.01);
        Box.add(this.box.transform, 'y', -100.0, 100.0, 0.01);
        Box.add(this.box.transform, 'z', -100.0, 100.0, 0.01);
        Box.add(this.box.transform, 'rotationX', 0.0, 360.0, 0.01);
        Box.add(this.box.transform, 'rotationY', 0.0, 360.0, 0.01);
        Box.add(this.box.transform, 'rotationZ', 0.0, 360.0, 0.01);
        Box.add(this.box.transform, 'scaleX', 0.0, 2.0, 0.01);
        Box.add(this.box.transform, 'scaleY', 0.0, 2.0, 0.01);
        Box.add(this.box.transform, 'scaleZ', 0.0, 2.0, 0.01);
        Box.open();
    }

    logChange() {
        console.log('BoudingBox changed');
    }

    red = new Color(1, 0, 0, 1);
    green = new Color(0, 1, 0, 1);

    loop() {
        this.view.graphic3D.drawBoundingBox(this.box.instanceID, this.box.bound as any, this.green);
        this.view.graphic3D.drawBoundingBox(this.container.instanceID, this.container.bound as any, this.red);
    }
}

new Sample_BoundingBox().run();
