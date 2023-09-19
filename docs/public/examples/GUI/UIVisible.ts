import { Engine3D, Object3DUtil, Object3D, UIImage, ImageType, WorldPanel, UITransform, KelvinUtil, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIVisible {
    imageComponentList: UIImage[];
    uiTransform: UITransform;
    counter: number = 0;
    spriteCount = 10;
    scene: Scene3D
    Ori: dat.GUI

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        await Engine3D.init({
            renderLoop: () => {
                this.renderUpdate();
            }
        });

        // init dat.gui
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
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.2;

        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/Sheet_atlas.json');

        let panel = panelRoot.addComponent(WorldPanel);
        canvas.addChild(panel.object3D);


        this.imageComponentList = [];
        let frameStart = 65;
        // create sprite list

        for (let i = 0; i < this.spriteCount; i++) {
            let imageQuad = new Object3D();
            panelRoot.addChild(imageQuad);
            let img = imageQuad.addComponent(UIImage);
            let frameKey = (i + frameStart).toString().padStart(5, '0');
            img.sprite = Engine3D.res.getGUISprite(frameKey);
            img.imageType = ImageType.Sliced;
            img.uiTransform.resize(200, 200);
            img.uiTransform.x = (i - (this.spriteCount - 1) * 0.5) * 50;
            this.imageComponentList.push(img);
        }

        //create panel
        let quadGroup: Object3D = new Object3D();
        panelRoot.addChild(quadGroup);
        this.uiTransform = quadGroup.addComponent(UITransform);
        let pi_2 = Math.PI * 2;
        let rectCount = 50;
        for (let i = 0; i < rectCount; i++) {
            let rect = new Object3D();
            quadGroup.addChild(rect);
            let img = rect.addComponent(UIImage);
            img.uiTransform.resize(10, 10);
            let angle = i / rectCount * pi_2;
            img.uiTransform.x = Math.sin(angle) * 160;
            img.uiTransform.y = Math.cos(angle) * 160;
        }
    }

    renderUpdate() {
        if (this.imageComponentList) {
            this.counter += 0.02;
            let mathSin = (Math.sin(this.counter) + 1) * 0.5;
            let index = Math.floor(mathSin * this.imageComponentList.length);

            //component visible
            for (let i = 0; i < this.imageComponentList.length; i++) {
                this.imageComponentList[i].visible = i != index;
            }

            // transform visible
            this.uiTransform.visible = index % 2 == 0;
        }
    }
}

new Sample_UIVisible().run();