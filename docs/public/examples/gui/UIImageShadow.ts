import { Engine3D, Object3DUtil, Object3D, BitmapTexture2D, UIImage, makeAloneSprite, WorldPanel, UIShadow, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil, Color } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIImageShadow {
    private img: UIImage;
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
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
        let floor = Object3DUtil.GetSingleCube(100, 2, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1;

        // enable ui canvas
        let canvas = view.enableUICanvas();

        let panel = panelRoot.addComponent(WorldPanel);
        canvas.addChild(panel.object3D);

        let imageQuad = new Object3D();
        panelRoot.addChild(imageQuad);
        this.img = imageQuad.addComponent(UIImage);
        let bitmapTexture2D = new BitmapTexture2D();
        bitmapTexture2D.flipY = true;
        await bitmapTexture2D.load('https://cdn.orillusion.com/png/logo.png');

        this.img.sprite = makeAloneSprite('KB3D_NTT_Ads_basecolor', bitmapTexture2D);
        this.img.uiTransform.resize(600, 600);
        this.img.uiTransform.y = 200;

        let shadow = imageQuad.addComponent(UIShadow);
        shadow.shadowQuality = 4;
        shadow.shadowRadius = 4;
        shadow.shadowOffset = shadow.shadowOffset.set(6, -6);

        let gui = new dat.GUI()
        let shadowfolder = gui.addFolder("Image Shadow");
        shadowfolder.add(shadow, 'shadowQuality', 0, 4, 1);
        shadowfolder.add(shadow, 'shadowRadius', 0.00, 10, 0.01);
        //shadow color
        shadow.shadowColor = new Color(0.1, 0.1, 0.1, 0.6);
        shadowfolder.addColor({shadowColor: [0.1,0.1,0.1,0.6].map((c,i)=> i===3?c:c*255)}, 'shadowColor').onChange(v=>{
            shadow.shadowColor = new Color(v[0]/255, v[1]/255, v[2]/255, v[3]);
        })

        let changeOffset = () => {
            shadow.shadowOffset = shadow.shadowOffset;
        }
        shadowfolder.add(shadow.shadowOffset, 'x', -100, 100, 0.01).onChange(v => changeOffset());
        shadowfolder.add(shadow.shadowOffset, 'y', -100, 100, 0.01).onChange(v => changeOffset());

        let button_func = {
            'Destroy': () => {
                shadow.object3D.removeComponent(UIShadow);
            }
        }
        shadowfolder.add(button_func, "Destroy")
        shadowfolder.open();
    }

}

new Sample_UIImageShadow().run();