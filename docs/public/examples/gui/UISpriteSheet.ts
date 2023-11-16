import { AtmosphericComponent, BillboardType, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, GUIQuad, GUISprite, HoverCameraController, ImageType, KelvinUtil, Object3D, Object3DUtil, Scene3D, UIImage, UITransform, View3D, WorldPanel } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UISpriteSheet {

    img: UIImage;
    scene: Scene3D;
    Ori: dat.GUI;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
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

        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/Sheet_atlas.json');
        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.4;
        //create panel
        let panel = panelRoot.addComponent(WorldPanel);
        panel.billboard = BillboardType.BillboardY;
        canvas.addChild(panel.object3D);

        //
        let quad = new Object3D();
        panelRoot.addChild(quad);

        this.img = quad.addComponent(UIImage);
        this.img.sprite = Engine3D.res.getGUISprite('00065');
        this.img.uiTransform.resize(256, 256);

        // create floor
        let floor = Object3DUtil.GetSingleCube(50, 5, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
        floor.y = -20;

        let box = Object3DUtil.GetSingleCube(2, 80, 2, 0.5, 0.5, 0.5);
        this.scene.addChild(box);
    }

    private frame: number = 10;

    renderUpdate() {
        if (this.img) {
            this.frame++;
            this.loopTextureSheet();
        }
    }

    private lastIndex: number = -1;
    private frameStart = 65;//65~77
    private frameCount = 13;

    loopTextureSheet(): void {
        let newIndex = Math.floor(this.frame * 0.2) % this.frameCount;
        if (newIndex != this.lastIndex) {
            this.lastIndex = newIndex;
            let frameKey = (this.lastIndex + this.frameStart).toString().padStart(5, '0');
            this.img.sprite = Engine3D.res.getGUISprite(frameKey);
        }
    }
}

new Sample_UISpriteSheet().run();
