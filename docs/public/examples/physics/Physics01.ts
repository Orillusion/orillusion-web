import { Physics, Rigidbody } from "@orillusion/physics";
import { Scene3D, DirectLight, View3D, KelvinUtil, CameraUtil, AtmosphericComponent, HoverCameraController, Object3D, LitMaterial, Engine3D, BoxGeometry, MeshRenderer, ColliderComponent, BoxColliderShape, Vector3, PlaneGeometry, Color } from "@orillusion/core";
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'

class SamplePhysics01 {
    private scene: Scene3D;
    private materials: LitMaterial[];
    private boxGeometry: BoxGeometry;
    private Ori: dat.GUI | undefined

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowSize = 2048;

        await Physics.init();
        await Engine3D.init({ renderLoop: () => this.loop() });

        let scene = new Scene3D()
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
        hoverCtrl.setCamera(-30, -15, 50)
    
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

        let gui = new dat.GUI()
        let DirLight = gui.addFolder('Light')
        DirLight.add(light, 'enable')
        DirLight.add(light.transform, 'rotationX', 0.0, 360.0, 0.01)
        DirLight.add(light.transform, 'rotationY', 0.0, 360.0, 0.01)
        DirLight.add(light.transform, 'rotationZ', 0.0, 360.0, 0.01)
        DirLight.add(light, 'intensity', 0.0, 160.0, 0.01)
        DirLight.add(light, 'indirect', 0.0, 10.0, 0.01)
        DirLight.add(light, 'castShadow')
        DirLight.open()

        this.scene = scene;
        await this.initScene(this.scene);

        Engine3D.startRenderView(view);
    }

    async initScene(scene: Scene3D) {
        this.initMaterials();
        this.createGround();

        let interval = setInterval(() => {
            this.addRandomBox();
            if (scene.entityChildren.length > 500) {
                clearInterval(interval);
            }
        }, 50);
    }

    private addRandomBox() {
        this.boxGeometry ||= new BoxGeometry(1, 1, 1);
        let newBox = new Object3D();

        let meshRenderer = newBox.addComponent(MeshRenderer);
        meshRenderer.geometry = this.boxGeometry;
        meshRenderer.material = this.randomMaterial;
        meshRenderer.castShadow = true;
        meshRenderer.receiveShadow = true;

        newBox.y = 20;
        newBox.x = Math.random() * 20 - 10;
        newBox.z = Math.random() * 20 - 10;
        newBox.addComponent(Rigidbody);

        let collider = newBox.addComponent(ColliderComponent);
        collider.shape = new BoxColliderShape();
        collider.shape.size = new Vector3(1, 1, 1);

        this.scene.addChild(newBox);
    }

    private initMaterials() {
        this.materials = [];
        for (let i = 0; i < 20; i++) {
            var mat = new LitMaterial();
            mat.baseColor = new Color(Math.random() * 1.0, Math.random() * 1.0, Math.random() * 1.0, 1.0);
            mat.metallic = Math.min(Math.random() * 0.1 + 0.2, 1.0);
            mat.roughness = Math.min(Math.random() * 0.5, 1.0);
            this.materials.push(mat);
        }
    }

    private get randomMaterial(): LitMaterial {
        let count = Math.floor(this.materials.length * Math.random());
        return this.materials[count];
    }

    private createGround() {
        let floorMat = new LitMaterial();
        floorMat.baseMap = Engine3D.res.grayTexture;
        floorMat.roughness = 0.85;
        floorMat.metallic = 0.01;

        let floor = new Object3D();
        let renderer = floor.addComponent(MeshRenderer);

        renderer.castShadow = true;
        renderer.receiveShadow = true;
        renderer.geometry = new PlaneGeometry(500, 500, 1, 1);
        renderer.material = floorMat;

        let rigidBody = floor.addComponent(Rigidbody);
        rigidBody.mass = 0;

        let collider = floor.addComponent(ColliderComponent);
        collider.shape = new BoxColliderShape();
        collider.shape.size = new Vector3(500, 0.05, 500);
        this.scene.addChild(floor);
    }

    private loop() {
        Physics.update();
    }
}

new SamplePhysics01().run();