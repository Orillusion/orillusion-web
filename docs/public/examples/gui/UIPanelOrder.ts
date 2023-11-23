import { Engine3D, Object3DUtil, Object3D, Color, WorldPanel, UIPanel, GUICanvas, BillboardType, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';

class Sample_UIPanelOrder {
    scene: Scene3D;
    Ori: dat.GUI;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        await Engine3D.init();

        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder('Orillusion');
        this.Ori.open();

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
        let floor = Object3DUtil.GetSingleCube(100, 2, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
        floor.y = -40;

        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();
        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.1;

        let panelRoot2: Object3D = new Object3D();
        panelRoot2.z = 20;
        panelRoot2.x = -20;
        panelRoot2.scaleX = panelRoot2.scaleY = panelRoot2.scaleZ = 0.1;

        let panel1 = this.createPanel(panelRoot, canvas, new Color(1.0, 0, 0.0, 0.8));
        let panel2 = this.createPanel(panelRoot2, canvas, new Color(0, 0, 1, 0.8));
        panel1.needSortOnCameraZ = true;
        panel2.needSortOnCameraZ = true;

        let label = { red: 'Red Panel', blue: 'Blue Panel' };
        this.Ori.add(label, 'red');
        this.Ori.add(panel1, 'panelOrder', 0, 10, 1);
        this.Ori.add(panel1, 'needSortOnCameraZ');
        this.Ori.add(label, 'blue');
        this.Ori.add(panel2, 'panelOrder', 0, 10, 1);
        this.Ori.add(panel2, 'needSortOnCameraZ');
    }

    private createPanel(panelRoot: Object3D, canvas: GUICanvas, color: Color): UIPanel {
        let panel = panelRoot.addComponent(WorldPanel);
        panel.billboard = BillboardType.BillboardXYZ;
        canvas.addChild(panel.object3D);
        panel.uiTransform.resize(400, 300);
        panel.visible = true;
        panel.color = color;

        return panel;
    }
}

new Sample_UIPanelOrder().run();
