﻿import { Engine3D, Object3DUtil, Object3D, GUISpace, WorldPanel, ViewPanel, UIButton, UITextField, Color, TextAnchor, PointerEvent3D, UIImage, ImageType, ComponentBase, View3D, UIPanel, UIInteractiveStyle, UIButtonTransition, Scene3D, AtmosphericComponent, CameraUtil, HoverCameraController, DirectLight, KelvinUtil } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

class Sample_UIButton {
    scene: Scene3D;
    button: UIButton;
    scaler: ScalerComponent;

    async run() {
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
        light.intensity = 3;

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

        await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');
        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json');

        let space: GUISpace = GUISpace.World; // View
        let panel: UIPanel;
        if (space == GUISpace.World) {
            panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.2;
            panel = panelRoot.addComponent(WorldPanel);
        } else {
            panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 1;
            panel = panelRoot.addComponent(ViewPanel);
        }
        //add panel
        canvas.addChild(panel.object3D);

        {
            let quad = new Object3D();
            panelRoot.addChild(quad);
            let button: UIButton = quad.addComponent(UIButton);
            button.normalSprite = Engine3D.res.getGUISprite('button-up');
            button.downSprite = Engine3D.res.getGUISprite('button-down');
            button.overSprite = Engine3D.res.getGUISprite('button-over');
            button.disableSprite = Engine3D.res.getGUISprite('button-disable');

            button.uiTransform.resize(200, 60);
            button.uiTransform.y = -100;
            button.transition = UIButtonTransition.SPRITE;

            this.button = button;

            let buttonLabel = quad.addComponent(UITextField);
            buttonLabel.text = 'Click me';
            buttonLabel.fontSize = 24;
            buttonLabel.color = new Color(1, 0.8, 0.4);
            buttonLabel.alignment = TextAnchor.MiddleCenter;

            quad.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onUIClick, this);
            quad.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this);
            quad.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this);
            quad.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this);
        }

        {
            let quad = new Object3D();
            panelRoot.addChild(quad);
            let button: UIButton = quad.addComponent(UIButton);
            button.normalSprite = Engine3D.res.getGUISprite('button-up');

            button.uiTransform.resize(200, 60);
            button.uiTransform.y = 200;

            let buttonLabel = quad.addComponent(UITextField);
            buttonLabel.text = 'Color Button';
            buttonLabel.fontSize = 24;
            buttonLabel.color = new Color(1, 0.8, 0.4);
            buttonLabel.alignment = TextAnchor.MiddleCenter;

            button.setStyleColor(UIInteractiveStyle.NORMAL, new Color(1, 0.5, 0.5, 1));
            button.setStyleColor(UIInteractiveStyle.DOWN, new Color(0.5, 0.5, 1, 1));
            button.setStyleColor(UIInteractiveStyle.OVER, new Color(0.5, 1, 0.5, 1));
            button.setStyleColor(UIInteractiveStyle.DISABLE, new Color(0.5, 0.5, 0.5, 1));
            button.transition = UIButtonTransition.COLOR;
        }

        {
            let imageQuad = new Object3D();
            panelRoot.addChild(imageQuad);
            let img = imageQuad.addComponent(UIImage);
            img.imageType = ImageType.Sliced;
            img.sprite = Engine3D.res.getGUISprite('button-up');
            img.uiTransform.resize(400, 60);
            img.uiTransform.y = 32;
            this.scaler = imageQuad.addComponent(ScalerComponent);
            this.scaler.enable = false;
        }
    }

    private onOut() {
        console.log('onOut');
    }

    private onOver() {
        console.log('onOver');
    }

    private onDown() {
        console.log('onDown');
    }

    private onUIClick(e) {
        this.button.enable = false;
        this.scaler.enable = true;
        setTimeout(() => {
            this.button.enable = true;
            this.scaler.enable = false;
        }, 3000);
    }
}

class ScalerComponent extends ComponentBase {
    private _image: UIImage;
    private counter: number = 0;

    public init(param?: any): void {
        this._image = this.object3D.getComponent(UIImage);
    }

    public onUpdate(view?: View3D) {
        this.counter++;
        this._image.uiTransform.resize((3 + Math.sin(this.counter * 0.01)) * 150, this._image.uiTransform.height);
    }
}

new Sample_UIButton().run();
