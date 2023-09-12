import { Object3D, Scene3D, Engine3D, Vector3, Color, AnimationCurve, Keyframe, View3D, AtmosphericComponent, CameraUtil, HoverCameraController, DirectLight, KelvinUtil } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class GraphicLine {
    scene: Scene3D;
    view: View3D;
    private Ori: dat.GUI | undefined;

    async run() {

        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.material.materialDebug = false;

        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            debug: false,
            blurX: 4,
            blurY: 4,
            luminosityThreshold: 0.9,
            radius: 4,
            strength: 1.2
        };

        await Engine3D.init({});
        const gui = new dat.GUI();
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)
        atmosphericSky.exposure = 1.0

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 200)

        // init View3D
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera

        // create direction light
        let lightObj3D = new Object3D()
        lightObj3D.x = 0
        lightObj3D.y = 30
        lightObj3D.z = -40
        lightObj3D.rotationX = 20
        lightObj3D.rotationY = 160
        lightObj3D.rotationZ = 0

        let light = lightObj3D.addComponent(DirectLight)
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        light.castShadow = true
        light.intensity = 30

        this.scene.addChild(light.object3D)

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform

        Engine3D.startRenderView(view)

        this.view = view;

        Engine3D.startRenderView(view);
        let job = Engine3D.getRenderJob(view);

        await this.initScene();
        // GUIUtil.renderAtomosphericSky(exampleScene.atmosphericSky);
        // GUIUtil.renderDirLight(exampleScene.light);
        let DirLight = this.Ori.addFolder("DirectLight");
        DirLight.add(light, "enable");
        DirLight.add(light.transform, "rotationX", 0.0, 360.0, 0.01);
        DirLight.add(light.transform, "rotationY", 0.0, 360.0, 0.01);
        DirLight.add(light.transform, "rotationZ", 0.0, 360.0, 0.01);
        DirLight.addColor(light, "lightColor");
        DirLight.add(light, "intensity", 0.0, 160.0, 0.01);
        DirLight.add(light, "indirect", 0.0, 10.0, 0.01);
        DirLight.add(light, "castShadow");
        DirLight.open();
    }

    async initScene() {
        this.view.graphic3D.drawLines('line1', [Vector3.ZERO, new Vector3(0, 10, 0)], new Color().hexToRGB(Color.RED));

        let animCurve = new AnimationCurve();
        animCurve.addKeyFrame(new Keyframe(0, 0.5));
        animCurve.addKeyFrame(new Keyframe(0.15, -0.2));
        animCurve.addKeyFrame(new Keyframe(0.22, 0.4));
        animCurve.addKeyFrame(new Keyframe(0.34, 0.2));
        animCurve.addKeyFrame(new Keyframe(0.65, -0.2));
        animCurve.addKeyFrame(new Keyframe(1, 0.9));
        let lines = [];
        for (let i = 0; i < 100; i++) {
            let y = animCurve.getValue(i / (100 - 1)) * 10;
            lines.push(
                new Vector3(
                    i,
                    y,
                    0
                )
            );
        }
        this.view.graphic3D.drawLines('line2', lines, new Color().hexToRGB(Color.RED));

        this.view.graphic3D.drawBox('box1', new Vector3(-5, -5, -5), new Vector3(5, 5, 5), new Color().hexToRGB(Color.GREEN));

        this.view.graphic3D.drawCircle('Circle1', new Vector3(-15, -5, -5), 5, 15, Vector3.X_AXIS, new Color().hexToRGB(Color.GREEN));
        this.view.graphic3D.drawCircle('Circle2', new Vector3(-15, -5, -5), 5, 15, Vector3.Y_AXIS, new Color().hexToRGB(Color.GREEN));
        this.view.graphic3D.drawCircle('Circle3', new Vector3(-15, -5, -5), 5, 15, Vector3.Z_AXIS, new Color().hexToRGB(Color.GREEN));
    }
}

new GraphicLine().run();