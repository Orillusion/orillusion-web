import {
    Engine3D,
    Object3DUtil,
    Object3D,
    UIImage,
    ImageType,
    Camera3D,
    Color,
    WorldPanel,
    DirectLight, KelvinUtil, View3D, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController
} from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIImageColor {
    scene: Scene3D;
    camera: Camera3D;
    img: UIImage;
    counter: number = 0;
    Ori: dat.GUI;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        await Engine3D.init({
            renderLoop: () => {
                this.renderUpdate();
            }
        });

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
        let floor = Object3DUtil.GetSingleCube(100, 2, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
        floor.y = -40;

        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1;

        this.camera = camera;

        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json');

        let panel = panelRoot.addComponent(WorldPanel);
        canvas.addChild(panel.object3D);

        // create image
        let imageQuad = new Object3D();
        panelRoot.addChild(imageQuad);
        this.img = imageQuad.addComponent(UIImage);
        this.img.sprite = Engine3D.res.getGUISprite('button-over');
        this.img.imageType = ImageType.Sliced;
        this.img.uiTransform.resize(400, 300);
        this.img.color = new Color(1.0, 0.5, 1.0, 0.6);
    }

    renderUpdate() {
        if (this.img) {
            this.counter += 0.01;
            let color = this.img.color;
            color.g = 0.5 * (Math.sin(this.counter) + 1);
            this.img.color = color;
        }

    }
}

new Sample_UIImageColor().run();