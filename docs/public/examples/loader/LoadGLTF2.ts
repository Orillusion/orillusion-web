import { Engine3D, Object3D, Object3DUtil, View3D, KelvinUtil, Scene3D ,DirectLight, AtmosphericComponent,CameraUtil,HoverCameraController  } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

//Samples to show models, they are using PBR material
class Sample_LoadGLTF2 {
    lightObj3D: Object3D;
    scene: Scene3D;
    async run() {
        //config settings
        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.shadow.shadowBound = 80;

        //init engine
        await Engine3D.init();
        // let exampleScene = createExampleScene();


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
        Engine3D.startRenderView(view);
        await this.initScene();
    }

    async initScene() {

        let floor = Object3DUtil.GetSingleCube(100, 4, 100, 0.5, 0.5, 0.5);
        floor.y = -10;
        this.scene.addChild(floor);

        let chair = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/SheenChair/SheenChair.gltf') as Object3D;
        chair.scaleX = chair.scaleY = chair.scaleZ = 60;
        chair.rotationZ = chair.rotationX = 45;
        this.scene.addChild(chair);
    }
}

new Sample_LoadGLTF2().run();