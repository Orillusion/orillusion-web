import { BitmapTexture2D, Engine3D, Object3D, Scene3D, Texture, UIImageGroup, UIShadow, ViewPanel, makeAloneSprite, DirectLight, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, KelvinUtil, Color } from "@orillusion/core";
import { Stats } from "@orillusion/stats";
import dat from "dat.gui";

export class Sample_UIImageGroup {
    scene: Scene3D;
    imageGroup: UIImageGroup;

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
        await this.createImageGroup();
    }

    async createImageGroup() {
        // enable ui canvas
        let canvas = this.scene.view.enableUICanvas();
        //create UI root
        let panelRoot: Object3D = new Object3D();
        //create panel
        let panel = panelRoot.addComponent(ViewPanel);
        canvas.addChild(panel.object3D);

        let bitmapTexture2D = new BitmapTexture2D();
        bitmapTexture2D.flipY = true;
        await bitmapTexture2D.load('https://cdn.orillusion.com/png/logo.png');

        let uiNode = new Object3D();
        panelRoot.addChild(uiNode);
        //create sprite sheet list
        this.imageGroup = this.createSpriteSheets(uiNode, bitmapTexture2D);
        let gui = new dat.GUI()
        let positionfolder = gui.addFolder("Position");
        let xy = this.imageGroup.getXY(1);
        let pos = {x: 0, y: xy.y};
        let action = () => this.imageGroup.setXY(1, pos.x, pos.y);
        positionfolder.add(pos, 'x', -Engine3D.width * 0.5, Engine3D.width * 0.5, 1).onChange(action);
        positionfolder.add(pos, 'y', -Engine3D.height * 0.5, Engine3D.height * 0.5, 1).onChange(action);
        positionfolder.open();
    }

    private halfSize = 0;
    private createSpriteSheets(root: Object3D, texture: Texture): UIImageGroup {
        let sprite = makeAloneSprite('KB3D_NTT_Ads_basecolor', texture);
        let imgGroup = root.addComponent(UIImageGroup, {count: 2});
        let size = 256;
        this.halfSize = size * 0.5;
        for (let i = 0; i < 2; i++) {
            imgGroup.setSprite(i, sprite);
            imgGroup.setSize(i, size, size);
            if (i == 1) {
                imgGroup.setXY(1, -this.halfSize, 128 - this.halfSize)
            } else {
                imgGroup.setXY(0, -this.halfSize, -this.halfSize)
            }
        }
        return imgGroup;
    }
}

new Sample_UIImageGroup().run();