import {
    Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, ViewPanel, UIImage, DirectLight, HoverCameraController, Color, ImageType,
} from "@orillusion/core";
import {log} from "util";

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

        // create image node
        let imageQuad = new Object3D();
        panelRoot.addChild(imageQuad);
        // create image component
        let image: UIImage = imageQuad.addComponent(UIImage);
        // set image size
        image.uiTransform.resize(180, 60);
        let color = new Color(1.0, 0.5, 0.5, 0.8);

        image.texture = Engine3D.res.getSubTexture('button-disable');
        image.imageType = ImageType.Sliced;

        setInterval(() => {
            color.r += 0.01;
            if (color.r > 1) color.r = 0;
            color.g = color.r;
            image.color = color;

        }, 50)
    }

}

new Sample_button().run();
