import { Scene3D, AtmosphericComponent, KelvinUtil, CameraUtil,DirectLight,  View3D, HoverCameraController, PropertyAnimation, Engine3D, Object3D, Object3DUtil, PropertyAnimClip, WrapMode } from "@orillusion/core";
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

class Sample_PropertyAnimation {
    scene: Scene3D;
    animation: PropertyAnimation;
    private Ori: dat.GUI | undefined

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 20;
        Engine3D.setting.shadow.shadowSize = 2048;

        await Engine3D.init();
        let scene = this.scene = new Scene3D()
        scene.addComponent(Stats)
    
        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = scene.addComponent(AtmosphericComponent)
    
        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)
        camera.enableCSM = true
        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 20)
    
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

        await this.initScene(this.scene);
        Engine3D.startRenderView(view);

        this.displayGUI();
    }

    async initScene(scene: Scene3D) {
        // floor
        let floor: Object3D = Object3DUtil.GetSingleCube(16, 0.1, 16, 1, 1, 1);
        scene.addChild(floor);

        // load external model
        let model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/Duck/Duck.gltf') as Object3D;
        let container = new Object3D();
        container.addChild(model);
        model.rotationY = 180;
        this.scene.addChild(container);
        model.scaleX = model.scaleY = model.scaleZ = 0.01;

        this.animation = await this.initPropertyAnim(container);
        this.animation.play(this.animation.defaultClip);

        return true;
    }

    private async initPropertyAnim(owner: Object3D) {
        // add PropertyAnimation
        let animation = owner.addComponent(PropertyAnimation);

        //load a animation clip
        let json: any = await Engine3D.res.loadJSON('https://cdn.orillusion.com/json/anim_0.json');
        let animClip = new PropertyAnimClip();
        animClip.parse(json);
        animClip.wrapMode = WrapMode.Loop;
        animation.defaultClip = animClip.name;
        animation.autoPlay = true;

        // register clip to animation
        animation.appendClip(animClip);
        return animation;
    }

    private displayGUI() {
        // restart the animation clip
        let gui = new dat.GUI()
        var button_add = {
            Restart: () => {
                this.animation.play(this.animation.defaultClip, true);
            }
        }

        gui.add(button_add, 'Restart')
        let data = { Seek: 0, Speed: 1 };

        // seek the animation to the specified time
        let totalTime = this.animation.getClip(this.animation.defaultClip).totalTime;
        gui.add(data, 'Seek', 0, totalTime, 0.01).onChange((v) => {
            this.animation.stop();
            this.animation.seek(v);
        });

        // change animation speed
        gui.add(data, 'Speed', 0, 1, 0.01).onChange((v) => {
            this.animation.speed = v;
        });
    }
}

new Sample_PropertyAnimation().run();