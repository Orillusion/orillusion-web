import { Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, ViewPanel, TextAnchor, UITextField, DirectLight, HoverCameraController, Color } from "@orillusion/core";

async function demo() {
    // initializa engine
    await Engine3D.init();
    // create new scene as root node
    let scene3D:Scene3D = new Scene3D();
    // create camera
    let cameraObj:Object3D = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    // adjust camera view
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    // set camera controller
    let controller = cameraObj.addComponent(HoverCameraController);
    controller.setCamera(0, -20, 15);
    // add camera node
    scene3D.addChild(cameraObj);
    // create light
    let light:Object3D = new Object3D();
    // add direct light component
    let component:DirectLight = light.addComponent(DirectLight);
    // adjust lighting
    light.rotationX = 45;
    light.rotationY = 30;
    component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
    component.intensity = 1;
    // add light object
    scene3D.addChild(light);

    await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt');
    
    // create new forward rendering job
    let renderJob:ForwardRenderJob = new ForwardRenderJob(scene3D);
    // start rendering
    Engine3D.startRender(renderJob);
    
    // create panel root
    let panelRoot: Object3D = new Object3D();
    panelRoot.addComponent(ViewPanel);

    renderJob.guiCanvas.addGUIChild(panelRoot);
    
    // create text node
    let textQuad = new Object3D();
    panelRoot.addChild(textQuad);
    // create textfield component
    let text: UITextField = textQuad.addComponent(UITextField);
    // set textfield size
    text.uiTransform.resize(400, 60);
    // set text value
    text.text = 'Hello，Orillusion！';
    text.fontSize = 32;
    text.alignment = TextAnchor.MiddleCenter;
}

demo();