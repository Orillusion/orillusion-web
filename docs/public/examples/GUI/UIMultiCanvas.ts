import {
    Engine3D,
    Object3DUtil,
    Object3D,
    UIImage,
    ImageType,
    Color,
    UIPanel,
    ViewPanel,
    Scene3D,
    Vector2,
    UITextField,
    UIShadow,
    AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil
} from "@orillusion/core";
import { Stats } from "@orillusion/stats";
class Sample_UIMultiCanvas {
    scene: Scene3D;
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        await Engine3D.init();
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');

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

        let total: number = 4;
        for (let i = 0; i < total; i++) {
            let size: Vector2 = new Vector2();
            size.x = 500 - i * 100;
            size.y = 400 - i * 100;
            this.createPanel(this.scene, i, size);
        }

    }

    private createPanel(scene: Scene3D, index: number, size: Vector2): UIPanel {
        let panelRoot: Object3D = new Object3D();
        // enable ui canvas at index
        let canvas = scene.view.enableUICanvas(index);
        let panel = panelRoot.addComponent(ViewPanel);
        canvas.addChild(panel.object3D);
        // create image
        let obj3D = new Object3D();
        panelRoot.addChild(obj3D);
        let image = obj3D.addComponent(UIImage);
        image.isShadowless = true;
        image.imageType = ImageType.Sliced;
        image.uiTransform.resize(size.x, size.y);
        image.color = Color.random();

        //text
        let text = obj3D.addComponent(UITextField);
        text.text = 'Canvas index: ' + index;
        text.fontSize = 24;

        //shadow
        let shadow = obj3D.addComponent(UIShadow);
        shadow.shadowOffset.multiplyScaler(0.4);
        return panel;
    }

}

new Sample_UIMultiCanvas().run();
