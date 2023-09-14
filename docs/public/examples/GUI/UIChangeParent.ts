import { Engine3D, Object3DUtil, Object3D, ViewPanel, UIImage, UIPanel, makeAloneSprite, Color, Time, UITransform, BitmapTexture2D, KelvinUtil, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIChangeParent {
    scene: Scene3D;
    Ori: dat.GUI;
    private holder1: UITransform;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.domElement.style.zIndex = 1;
        this.Ori.domElement.parentElement.style.zIndex = 1;
        this.Ori.open();

        await Engine3D.init({
            renderLoop: () => {
                this.loop();
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

        let panel: UIPanel = panelRoot.addComponent(ViewPanel);

        //add panel
        canvas.addChild(panel.object3D);

        //create logo
        let logoObject = new Object3D();
        {
            panelRoot.addChild(logoObject);

            let image1: UIImage = logoObject.addComponent(UIImage);
            let bitmapTexture2D = new BitmapTexture2D();
            bitmapTexture2D.flipY = true;
            await bitmapTexture2D.load('https://cdn.orillusion.com/png/logo.png');
            image1.sprite = makeAloneSprite('logo', bitmapTexture2D);
            image1.uiTransform.resize(100, 100);
        }

        //create image0
        let holder0 = new Object3D();
        {
            panelRoot.addChild(holder0);

            let image1: UIImage = holder0.addComponent(UIImage);
            image1.color = new Color(0.8, 0.8, 0.8, 0.5);
            image1.uiTransform.resize(600, 400);
        }

        //create image1
        let holder1 = new Object3D();
        {
            panelRoot.addChild(holder1);

            let image1: UIImage = holder1.addComponent(UIImage);
            image1.color = new Color(0.2, 0.4, 0.2, 0.8);
            image1.uiTransform.resize(200, 160);
            image1.uiTransform.x = 160;
        }
        this.holder1 = holder1.getComponent(UITransform);

        //create image2
        let image2: UIImage;
        let holder2 = new Object3D();
        {
            panelRoot.addChild(holder2);

            image2 = holder2.addComponent(UIImage);
            image2.color = new Color(0.4, 0.2, 0.2, 0.8);
            image2.uiTransform.resize(200, 160);
            image2.uiTransform.x = -160;
        }

        setInterval(() => {
            let lastParent = logoObject?.parent?.object3D;
            if (lastParent == holder2) {
                holder1.addChild(logoObject);
            } else {
                holder2.addChild(logoObject);
            }
        }, 1000);

        let button_func = {
            remove: () => {
                holder0.removeComponent(UIImage);
            }
        }
        this.Ori.add(button_func, 'remove');
    }


    private loop(): void {
        if (this.holder1) {
            this.holder1.y = Math.sin(Time.time * 0.005) * 50;
        }
    }
}

new Sample_UIChangeParent().run();