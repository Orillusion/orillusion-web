import { Engine3D, Object3DUtil, Object3D, BitmapTexture2D, makeAloneSprite, WorldPanel, GPUCullMode, BillboardType, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UISingleImage {
    Ori: dat.GUI;
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        await Engine3D.init();

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

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1;

        let bitmapTexture2D = new BitmapTexture2D();
        bitmapTexture2D.flipY = true;

        // enable ui canvas 0
        let canvas = view.enableUICanvas();

        await bitmapTexture2D.load('https://cdn.orillusion.com/textures/KB3D_NTT_Ads_basecolor.png');

        let panel = panelRoot.addComponent(WorldPanel);
        panel.cullMode = GPUCullMode.none;

        // GUIUtil.renderUIPanel(panel, true);
        let guifolder = this.Ori.addFolder("GUI Panel")
        //cull mode
        let cullMode = {};
        cullMode[GPUCullMode.none] = GPUCullMode.none;
        cullMode[GPUCullMode.front] = GPUCullMode.front;
        cullMode[GPUCullMode.back] = GPUCullMode.back;

        // change cull mode by click dropdown box
        guifolder.add({cullMode: GPUCullMode.none}, 'cullMode', cullMode).onChange((v) => {
            panel.cullMode = v;
        });

        //billboard
        let billboard = {};
        billboard['None'] = BillboardType.None;
        billboard['Y'] = BillboardType.BillboardY;
        billboard['XYZ'] = BillboardType.BillboardXYZ;

        // change billboard by click dropdown box
        guifolder.add({billboard: panel.billboard}, 'billboard', billboard).onChange((v) => {
            panel.billboard = v;
        });

        let scissorData = {
            scissorCornerRadius: panel.scissorCornerRadius,
            scissorFadeOutSize: panel.scissorFadeOutSize,
            panelWidth: 400,
            panelHeight: 300,
            backGroundVisible: panel.visible,
            backGroundColor: panel.color,
            scissorEnable: panel.scissorEnable

        };
        let changeSissor = () => {
            panel.scissorCornerRadius = scissorData.scissorCornerRadius;
            panel.scissorEnable = scissorData.scissorEnable;
            panel.scissorFadeOutSize = scissorData.scissorFadeOutSize;
            panel.color = scissorData.backGroundColor;
            panel.visible = scissorData.backGroundVisible;
            panel.uiTransform.resize(scissorData.panelWidth, scissorData.panelHeight);
        }
        guifolder.add(scissorData, 'scissorCornerRadius', 0, 100, 0.1).onChange(() => {
            changeSissor();
        });
        guifolder.add(scissorData, 'scissorFadeOutSize', 0, 100, 0.1).onChange(() => {
            changeSissor();
        });
        guifolder.add(scissorData, 'panelWidth', 1, 400, 1).onChange(() => {
            changeSissor();
        });
        guifolder.add(scissorData, 'panelHeight', 1, 300, 1).onChange(() => {
            changeSissor();
        });
        guifolder.add(scissorData, 'backGroundVisible').onChange(() => {
            changeSissor();
        });

        guifolder.addColor(scissorData, 'backGroundColor').onChange(() => {
            changeSissor();
        });

        guifolder.add(scissorData, 'scissorEnable').onChange(() => {
            changeSissor();
        });

        //depth test
        if (panel['isWorldPanel']) {
            guifolder.add(panel, 'depthTest');
        }

        guifolder.open();

        canvas.addChild(panel.object3D);

        panel.sprite = makeAloneSprite('KB3D_NTT_Ads_basecolor', bitmapTexture2D);
        panel.uiTransform.resize(600, 400);
        panel.visible = true;
    }

}

new Sample_UISingleImage().run();