import { Engine3D, Scene3D, Object3D, Camera3D, ViewPanel, UIButton, HoverCameraController, PointerEvent3D, View3D, AtmosphericComponent, UITextField, Color, TextAnchor, WorldPanel, UIPanel, GPUCullMode, PickGUIEvent3D } from '@orillusion/core';

class Sample_button {
    async run() {
        // initializa engine
        let engine = await Engine3D.init();
        // create new scene as root node
        let scene3D: Scene3D = new Scene3D();
        scene3D.addComponent(AtmosphericComponent);
        // create camera
        let cameraObj: Object3D = new Object3D();
        let camera = cameraObj.addComponent(Camera3D);
        // adjust camera view
        camera.perspective(60, engine.aspect, 1, 5000.0);
        // set camera controller
        let controller = cameraObj.addComponent(HoverCameraController);
        controller.setCamera(0, -20, 30);
        // add camera node
        scene3D.addChild(cameraObj);

        let view = new View3D();
        view.scene = scene3D;
        view.camera = camera;
        engine.startRenderView(view);

        // create panel root
        let panelRoot: Object3D = new Object3D();
        let panel: UIPanel = panelRoot.addComponent(WorldPanel);
        panel.cullMode = GPUCullMode.none;
        panelRoot.localScale.set(0.1, 0.1, 0.1);
        let canvas = view.enableUICanvas();
        canvas.addChild(panelRoot);

        // create button node
        let buttonQuad = new Object3D();
        panelRoot.addChild(buttonQuad);
        // create button component
        let button: UIButton = buttonQuad.addComponent(UIButton);
        // set button size
        button.uiTransform.resize(180, 60);

        // set button status
        // load sprite resource
        await engine.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json');
        button.normalSprite = engine.res.getGUISprite('button-up');
        button.downSprite = engine.res.getGUISprite('button-down');
        button.overSprite = engine.res.getGUISprite('button-over');
        button.disableSprite = engine.res.getGUISprite('button-disable');

        // add button text
        // load font resource
        await engine.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');
        let buttonLabel = buttonQuad.addComponent(UITextField);
        buttonLabel.text = 'Click me';
        buttonLabel.fontSize = 24;
        buttonLabel.color = new Color(1, 0.8, 0.4);
        buttonLabel.alignment = TextAnchor.MiddleCenter;

        // add listener
        buttonQuad.addEventListener(PickGUIEvent3D.PICK_CLICK_GUI, this.onClick, this);
        buttonQuad.addEventListener(PickGUIEvent3D.PICK_OUT_GUI, this.onOut, this);
        buttonQuad.addEventListener(PickGUIEvent3D.PICK_OVER_GUI, this.onOver, this);
        buttonQuad.addEventListener(PickGUIEvent3D.PICK_DOWN_GUI, this.onDown, this);
    }

    private onClick() {}

    private onOut() {}

    private onOver() {}

    private onDown() {
        alert('clicked me!');
    }
}
new Sample_button().run();
