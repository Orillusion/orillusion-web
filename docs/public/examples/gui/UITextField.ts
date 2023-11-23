import { Object3D, Engine3D, GUISpace, WorldPanel, ViewPanel, UITextField, TextAnchor, Object3DUtil, UIPanel, UIImage, UIShadow, BillboardType, Scene3D, Color, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';

class Sample_UITextField {
    private text: UITextField;
    scene: Scene3D;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        await Engine3D.init();

        // init Scene3D
        this.scene = new Scene3D();
        this.scene.exposure = 1;
        this.scene.addComponent(Stats);

        // init sky
        let atmosphericSky: AtmosphericComponent;
        atmosphericSky = this.scene.addComponent(AtmosphericComponent);

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000);

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController);
        hoverCtrl.setCamera(-30, -15, 100);

        // init View3D
        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        // create direction light
        let lightObj3D = new Object3D();
        lightObj3D.x = 0;
        lightObj3D.y = 30;
        lightObj3D.z = -40;
        lightObj3D.rotationX = 20;
        lightObj3D.rotationY = 160;
        lightObj3D.rotationZ = 0;

        let light = lightObj3D.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.castShadow = true;
        light.intensity = 30;

        this.scene.addChild(light.object3D);

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform;

        Engine3D.startRenderView(view);

        // create floor
        let floor = Object3DUtil.GetSingleCube(100, 20, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);

        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();

        //create UI root
        let panelRoot: Object3D = new Object3D();

        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');

        let space: GUISpace = GUISpace.World; // View
        let panel: UIPanel;

        if (space == GUISpace.World) {
            panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.2;
            panel = panelRoot.addComponent(WorldPanel);
            panel.billboard = BillboardType.BillboardY;
        } else {
            panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 1;
            panel = panelRoot.addComponent(ViewPanel);
        }
        canvas.addChild(panel.object3D);

        {
            let textQuad = new Object3D();
            panelRoot.addChild(textQuad);
            let backGround = textQuad.addComponent(UIImage);
            backGround.color.a = 0.2;
            backGround.isShadowless = true;
            this.text = textQuad.addComponent(UITextField);
            this.text.uiTransform.resize(400, 60);
            this.text.uiTransform.y = 100;

            this.text.text = 'Hello，Orillusion！';
            this.text.fontSize = 32;
            this.text.alignment = TextAnchor.MiddleCenter;
            let size = { width: this.text.uiTransform.width, height: this.text.uiTransform.height };
            let changeSize = () => {
                this.text.uiTransform.resize(size.width, size.height);
            };
            let shadow = textQuad.addComponent(UIShadow);

            let gui = new dat.GUI();
            let dir = gui.addFolder('UITextField');
            dir.add(shadow, 'shadowQuality', 0, 4, 1);
            dir.add(shadow, 'shadowRadius', 0.0, 10, 0.01);
            //shadow color
            shadow.shadowColor = new Color(0.1, 0.1, 0.1, 0.6);
            dir.addColor({ shadowColor: [0.1, 0.1, 0.1, 0.6].map((c, i) => (i === 3 ? c : c * 255)) }, 'shadowColor').onChange((v) => {
                shadow.shadowColor = new Color(v[0] / 255, v[1] / 255, v[2] / 255, v[3]);
            });

            let changeOffset = () => {
                shadow.shadowOffset = shadow.shadowOffset;
            };
            dir.add(shadow.shadowOffset, 'x', -100, 100, 0.01).onChange((v) => changeOffset());
            dir.add(shadow.shadowOffset, 'y', -100, 100, 0.01).onChange((v) => changeOffset());
            let button = {
                del: () => {
                    shadow.object3D.removeComponent(UIShadow);
                }
            };
            dir.add(button, 'del');
            dir.open();
            dir.add(size, 'width', 100, 400, 1).onChange(() => {
                changeSize();
            });
        }
    }
}

new Sample_UITextField().run();
