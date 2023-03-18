import {
    Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, ViewPanel, UIButton, DirectLight, HoverCameraController, Color, PointerEvent3D
} from "@orillusion/core";

export class Sample_button {
    async run() {
        // initializa engine
        await Engine3D.init();
        // create new scene as root node
        let scene3D: Scene3D = new Scene3D();
        // create camera
        let cameraObj: Object3D = new Object3D();
        let camera = cameraObj.addComponent(Camera3D);
        // adjust camera view
        camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
        // set camera controller
        let controller = cameraObj.addComponent(HoverCameraController);
        controller.setCamera(0, -20, 15);
        // add camera node
        scene3D.addChild(cameraObj);
        // create light
        let light: Object3D = new Object3D();
        // add direct light component
        let component: DirectLight = light.addComponent(DirectLight);
        // adjust lighting
        light.rotationX = 45;
        light.rotationY = 30;
        component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
        component.intensity = 1;
        // add light object
        scene3D.addChild(light);

        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json');

        // create new forward rendering job
        let renderJob: ForwardRenderJob = new ForwardRenderJob(scene3D);
        // start rendering
        Engine3D.startRender(renderJob);

        // create panel root
        let panelRoot: Object3D = new Object3D();
        panelRoot.addComponent(ViewPanel);

        renderJob.guiCanvas.addGUIChild(panelRoot);

        // create button node
        let buttonQuad = new Object3D();
        panelRoot.addChild(buttonQuad);
        // create button component
        let button: UIButton = buttonQuad.addComponent(UIButton);
        // set button size
        button.uiTransform.resize(180, 60);

        button.upTexture = Engine3D.res.getSubTexture('button-up');
        button.downTexture = Engine3D.res.getSubTexture('button-down');
        button.overTexture = Engine3D.res.getSubTexture('button-over');
        button.disableTexture = Engine3D.res.getSubTexture('button-disable');

        // add listener
        buttonQuad.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onClick, this);
        buttonQuad.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this);
        buttonQuad.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this);
        buttonQuad.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this);
    }

    private onClick() {

    }

    private onOut() {

    }

    private onOver() {

    }

    private onDown() {
        alert('clicked me!')
    }

}
new Sample_button().run();
