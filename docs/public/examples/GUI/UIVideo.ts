import {VideoTexture} from "@orillusion/media-extention";
import {
    Engine3D,
    Object3DUtil,
    Object3D,
    ViewPanel,
    UIImage,
    ImageType,
    makeAloneSprite,
    Scene3D, KelvinUtil, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight
} from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIVideo {
    Ori: dat.GUI
    scene: Scene3D

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        await Engine3D.init();

        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 100)

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

        // create floor
        let floor = Object3DUtil.GetSingleCube(100, 10, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);

        let canvas = view.enableUICanvas();

        let videoTexture = new VideoTexture();
        await videoTexture.load('https://cdn.orillusion.com/video/dt.mp4');

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.addComponent(ViewPanel);
        canvas.addChild(panelRoot);
        {
            let imageQuad = new Object3D();
            panelRoot.addChild(imageQuad);
            let image = imageQuad.addComponent(UIImage);
            image.sprite = makeAloneSprite('dt.mp4', videoTexture);
            image.imageType = ImageType.Simple;
            image.uiTransform.resize(600, 400);
        }
    }
}

new Sample_UIVideo().run();