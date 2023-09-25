import { AtmosphericComponent, HoverCameraController, KelvinUtil, DirectLight, View3D, CameraUtil, Engine3D, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, Scene3D } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'
// Sample to load glb file
class Sample_LoadGLB3 {
    scene: Scene3D;
    private Ori: dat.GUI | undefined

    async run() {
        await Engine3D.init();
        Engine3D.setting.shadow.autoUpdate = true;
        // let exampleScene = createExampleScene();
        // this.scene = exampleScene.scene;

        // exampleScene.hoverCtrl.setCamera(-45, -45, 10);
        // exampleScene.light.intensity = 10;
        // Engine3D.startRenderView(exampleScene.view);
        // await this.initScene();
        let scene = new Scene3D()
        scene.exposure = 1
        scene.addComponent(Stats)
    
        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = scene.addComponent(AtmosphericComponent)
    
        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)
    
        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 100)
    
        // init View3D
        let view = new View3D()
        view.scene = scene
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
    
        scene.addChild(light.object3D)
    
        // relative light to sky
        atmosphericSky.relativeTransform = light.transform


        this.scene = scene;
        hoverCtrl.setCamera(-45, -45, 10);
        light.intensity = 10;
        Engine3D.startRenderView(view);
        await this.initScene();
    }

    async initScene() {
        /******** floor *******/
        // {
        //     let mat = new LitMaterial();
        //     mat.baseMap = Engine3D.res.whiteTexture;
        //     mat.roughness = 0.85;
        //     mat.metallic = 0.1;
        //     let floor = new Object3D();
        //     let mr = floor.addComponent(MeshRenderer);
        //     mr.geometry = new PlaneGeometry(200, 200);
        //     mr.material = mat;
        //     this.scene.addChild(floor);
        // }

        /******** load glb file *******/
        let model = (await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/modelNew/scene.gltf', { onProgress: (e) => this.onLoadProgress(e), onComplete: (e) => this.onComplete(e) })) as Object3D;
        this.scene.addChild(model);
        model.scaleX = model.scaleY = model.scaleZ = 0.001;
    }

    onLoadProgress(e) {
        console.log(e);
    }

    onComplete(e) {
        console.log(e);
    }

}
new Sample_LoadGLB3().run();