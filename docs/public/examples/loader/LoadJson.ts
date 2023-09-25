import { Scene3D, AtmosphericComponent, View3D, KelvinUtil, DirectLight, HoverCameraController, CameraUtil, Engine3D, BoxGeometry, LitMaterial, MeshRenderer, Object3D, PropertyAnimClip, PropertyAnimation, WrapMode } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

// Sample to load json file
class Sample_LoadJson {
    scene: Scene3D;
    private Ori: dat.GUI | undefined

    async run() {
        await Engine3D.init();
        // let param = createSceneParam();
        // param.camera.distance = 10;
        // let exampleScene = createExampleScene(param);
        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 0.01, 1000)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 20)

        // init View3D
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera
        this.view = view

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

        // Engine3D.startRenderViews([this.view])
        // Engine3D.startRenderView(this.view)

        // Engine3D.getRenderJob(this.view)

        // this.scene = scene;
        Engine3D.startRenderView(view);

        let json = await Engine3D.res.loadJSON('https://cdn.orillusion.com/json/anim_0.json', { onProgress: this.onLoadProgress, onComplete: this.onComplete });
        console.log('[loaded]', json);

        let box = new Object3D()
        let mr = box.addComponent(MeshRenderer);
        mr.geometry = new BoxGeometry()
        mr.material = new LitMaterial()
        this.scene.addChild(box)

        // play animation clip from json
        let animation = box.addComponent(PropertyAnimation)
        let animClip = new PropertyAnimClip();
        animClip.parse(json);
        animClip.wrapMode = WrapMode.Loop;
        animation.defaultClip = animClip.name;
        animation.autoPlay = true;
        animation.appendClip(animClip);
    }

    onLoadProgress(received, total, url) {
        console.log('[progress]', received, total, url);
    }

    onComplete(url) {
        console.log('[complete]', url);
    }

}
new Sample_LoadJson().run();