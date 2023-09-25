import { Scene3D, PropertyAnimation, Engine3D, Object3D, Object3DUtil, PropertyAnimClip, WrapMode, WorldPanel, BillboardType, TextAnchor, UIImage, UIShadow, UITextField, Vector3, Color, Time, HoverCameraController, AtmosphericComponent, CameraUtil, View3D, DirectLight, KelvinUtil, GPUCullMode } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class Sample_POI {
    scene: Scene3D;
    panel: WorldPanel;
    position: Vector3;
    Ori: dat.GUI;
    private modelContainer: Object3D;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 20;
        Engine3D.setting.shadow.csmScatteringExp = 1;

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
        camera.enableCSM = true;

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 16)

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

        // init dat.gui
        const gui = new dat.GUI();
        gui.domElement.style.zIndex = '10';
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        await this.initScene();
        this.initDuckPOI();
        this.initScenePOI();
    }


    async initScene() {
        // floor
        let floor: Object3D = Object3DUtil.GetSingleCube(16, 0.1, 16, 1, 1, 1);
        this.scene.addChild(floor);
        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');

        // load external model
        let model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf') as Object3D;
        model.rotationY = 180;
        this.modelContainer = new Object3D();
        this.modelContainer.addChild(model);
        this.scene.addChild(this.modelContainer);
        model.scaleX = model.scaleY = model.scaleZ = 0.01;
        await this.initPropertyAnim(this.modelContainer);

        let chair = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf') as Object3D;
        chair.scaleX = chair.scaleY = chair.scaleZ = 8;
        this.scene.addChild(chair);
    }

    private async initPropertyAnim(owner: Object3D) {
        // add PropertyAnimation
        let animation = owner.addComponent(PropertyAnimation);

        //load a animation clip
        let json: any = await Engine3D.res.loadJSON('https://cdn.orillusion.com/json/anim_0.json');
        let animClip = new PropertyAnimClip();
        animClip.parse(json);
        animClip.wrapMode = WrapMode.Loop;
        animation.defaultClip = animClip.name;
        animation.autoPlay = true;

        // register clip to animation
        animation.appendClip(animClip);
        animation.play(animation.defaultClip);
        return animation;
    }

    private initDuckPOI() {
        let canvas = this.scene.view.enableUICanvas();
        //panel
        this.panel = new Object3D().addComponent(WorldPanel);
        this.panel.billboard = BillboardType.BillboardXYZ;
        //add to canvas
        canvas.addChild(this.panel.object3D);
        this.panel.object3D.localScale = new Vector3(0.1, 0.1, 0.1);

        //poi
        let panelRoot = new Object3D();

        this.panel.object3D.addChild(panelRoot);

        let image = panelRoot.addComponent(UIImage);
        image.uiTransform.resize(32, 6);
        image.uiTransform.setXY(20, 20);

        image.color = new Color(1, 1, 1, 0.5);
        image.isShadowless = true;
        let text = panelRoot.addComponent(UITextField);

        text.text = 'Happy Duck';
        text.fontSize = 4;
        text.color = new Color(0, 0, 0, 1);
        text.alignment = TextAnchor.MiddleCenter;
        // GUIUtil.renderUIPanel(this.panel, true);
        let uifolder = this.Ori.addFolder("GUI Panel");
        //cull mode
        let cullMode = {};
        cullMode[GPUCullMode.none] = GPUCullMode.none;
        cullMode[GPUCullMode.front] = GPUCullMode.front;
        cullMode[GPUCullMode.back] = GPUCullMode.back;

        // change cull mode by click dropdown box
        uifolder.add({cullMode: GPUCullMode.none}, 'cullMode', cullMode).onChange((v) => {
            this.panel.cullMode = v;
        });

        //billboard
        let billboard = {};
        billboard['None'] = BillboardType.None;
        billboard['Y'] = BillboardType.BillboardY;
        billboard['XYZ'] = BillboardType.BillboardXYZ;

        // change billboard by click dropdown box
        uifolder.add({billboard: this.panel.billboard}, 'billboard', billboard).onChange((v) => {
            this.panel.billboard = v;
        });

        let scissorData = {
            scissorCornerRadius: this.panel.scissorCornerRadius,
            scissorFadeOutSize: this.panel.scissorFadeOutSize,
            panelWidth: 400,
            panelHeight: 300,
            backGroundVisible: this.panel.visible,
            backGroundColor: this.panel.color,
            scissorEnable: this.panel.scissorEnable

        };
        let changeSissor = () => {
            this.panel.scissorCornerRadius = scissorData.scissorCornerRadius;
            this.panel.scissorEnable = scissorData.scissorEnable;
            this.panel.scissorFadeOutSize = scissorData.scissorFadeOutSize;
            this.panel.color = scissorData.backGroundColor;
            this.panel.visible = scissorData.backGroundVisible;
            this.panel.uiTransform.resize(scissorData.panelWidth, scissorData.panelHeight);
        }
        uifolder.add(scissorData, 'scissorCornerRadius', 0, 100, 0.1).onChange(() => {
            changeSissor();
        });
        uifolder.add(scissorData, 'scissorFadeOutSize', 0, 100, 0.1).onChange(() => {
            changeSissor();
        });
        uifolder.add(scissorData, 'panelWidth', 1, 400, 1).onChange(() => {
            changeSissor();
        });
        uifolder.add(scissorData, 'panelHeight', 1, 300, 1).onChange(() => {
            changeSissor();
        });
        uifolder.add(scissorData, 'backGroundVisible').onChange(() => {
            changeSissor();
        });

        uifolder.addColor(scissorData, 'backGroundColor').onChange(() => {
            changeSissor();
        });

        uifolder.add(scissorData, 'scissorEnable').onChange(() => {
            changeSissor();
        });

        //depth test
        if (this.panel['isWorldPanel']) {
            uifolder.add(this.panel, 'depthTest');
        }

        uifolder.open();
    }

    private sceneText: UITextField;

    private initScenePOI() {
        let canvas = this.scene.view.enableUICanvas();
        //panel
        let panel = new Object3D().addComponent(WorldPanel);
        panel.cullMode = "none";
        //add to canvas
        canvas.addChild(panel.object3D);
        panel.object3D.localScale = new Vector3(0.1, 0.1, 0.1);

        //poi
        let panelRoot = new Object3D();
        panel.transform.rotationX = -30;
        panel.transform.y = 3.1;
        panel.transform.x = 1;

        panel.object3D.addChild(panelRoot);
        let text = panelRoot.addComponent(UITextField);
        text.uiTransform.resize(80, 16);
        text.text = this.title;
        text.fontSize = 10;
        text.color = new Color(0.5, 1.0, 0.5, 1.0);
        text.alignment = TextAnchor.MiddleLeft;

        panelRoot.addComponent(UIShadow).shadowOffset.multiplyScaler(0.2);
        this.sceneText = text;
    }

    private charCount = 0;
    private title: string = 'Hello, Orillusion';
    private lastTitle = this.title;

    private loop(): void {
        if (this.panel) {
            this.position ||= new Vector3();
            this.position.copyFrom(this.modelContainer.transform.worldPosition);
            this.panel.object3D.localPosition = this.position;
        }
        if (this.sceneText) {
            let count = 1 + Math.floor(Time.frame * 0.1) % 30;
            if (this.charCount != count) {
                this.charCount = count;
                let newTitle = this.title.slice(0, this.charCount);
                if (newTitle != this.lastTitle) {
                    this.sceneText.text = newTitle;
                    this.lastTitle = newTitle;
                }

            }

        }
    }

}

new Sample_POI().run();