import { Engine3D, Object3DUtil, Object3D, Color, WorldPanel, GUICanvas, UIImage, makeAloneSprite, UITextField, UIShadow, Time, Scene3D, KelvinUtil, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, GPUCullMode, BillboardType } from "@orillusion/core";
import {VideoTexture} from "@orillusion/media-extention";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_UIPanelScissor {
    scene: Scene3D;
    Ori: dat.GUI;
    private textField: UITextField;


    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        await Engine3D.init({
            renderLoop: () => {
                this.loop();
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
        floor.y = -20;

        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();
        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1;
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');

        this.createPanel(panelRoot, canvas, new Color(1, 1, 1, 1));
    }

    private async createPanel(panelRoot: Object3D, canvas: GUICanvas, color: Color) {
        let panel = panelRoot.addComponent(WorldPanel);
        panel.cullMode = "none";
        canvas.addChild(panel.object3D);
        panel.scissorEnable = true;
        panel.scissorCornerRadius = 40;
        panel.scissorFadeOutSize = 10;
        panel.uiTransform.resize(400, 300);
        panel.visible = true;
        panel.color = color;

        let obj = new Object3D();
        panelRoot.addChild(obj);

        //image
        let image = obj.addComponent(UIImage);
        image.uiTransform.resize(300, 200);

        {
            //make sprite
            // let texture = new BitmapTexture2D();
            // texture.flipY = true;
            // await texture.load('textures/KB3D_NTT_Ads_basecolor.png');
            // image.sprite = makeAloneSprite('sprite', texture);
        }

        {
            // make video
            let videoTexture = new VideoTexture();
            await videoTexture.load('https://cdn.orillusion.com/videos/bunny.mp4');
            image.sprite = makeAloneSprite('dt.mp4', videoTexture);
            image.uiTransform.resize(350, 250);
        }

        {
            //textfield
            let child = new Object3D();
            obj.addChild(child);
            let textfield = this.textField = child.addComponent(UITextField);
            textfield.uiTransform.resize(200, 100);
            textfield.fontSize = 32;
            textfield.color = new Color(0, 0.5, 1, 1.0);
            textfield.text = 'Scissor Panel';
            //shadow
            child.addComponent(UIShadow);
        }

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
    }

    private loop(): void {
        if (this.textField) {
            let angle = Time.time * 0.001;
            this.textField.uiTransform.setXY(Math.sin(angle) * 100, Math.cos(angle) * 20);
        }
    }
}


new Sample_UIPanelScissor().run();