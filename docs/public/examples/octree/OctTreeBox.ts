import { BoundingBox, Scene3D, AtmosphericComponent, KelvinUtil, DirectLight, HoverCameraController, CameraUtil, BoxGeometry, Color, Engine3D, LitMaterial, MeshRenderer, Object3D, Object3DUtil, PointerEvent3D, Time, Vector3, View3D, } from '@orillusion/core';
import { OctreeEntity } from './OctreeEntity';
import { Octree } from './Octree';
import dat from 'dat.gui'
import { Stats } from '@orillusion/stats'

// A sample to use octTree
class Sample_OctTreeBox {
    view: View3D;
    scene: Scene3D;
    entities: OctreeEntity[] = [];
    tree: Octree;
    red = new Color(1, 0, 0, 1);
    green = new Color(0, 1, 0, 1);
    yellow = new Color(1, 1, 0, 1)
    blue = new Color(0, 0, 1, 1)
    white = new Color(1, 1, 1, 1)

    movingBox: BoundingBox;
    private Ori: dat.GUI | undefined

    async run() {
        // init engine
        await Engine3D.init({ renderLoop: () => { this.loop() } });
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'

        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()
        // let param = createSceneParam();
        // param.camera.distance = 400;
        // param.camera.near = 0.1;
        // param.camera.far = 10000;
        // let exampleScene = createExampleScene(param);


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
        // await this.initScene(this.scene);


        Engine3D.startRenderViews([view]);
        Engine3D.getRenderJob(view);

        this.view =view;

        let box: BoundingBox = new BoundingBox();
        box.setFromMinMax(new Vector3(-100, -100, -100), new Vector3(100, 100, 100));
        this.tree = new Octree(box);

        this.entities = this.initBoxList();
        let center = new Vector3(3, -3, -100);
        let size = new Vector3(200, 137, 134);
        this.movingBox = new BoundingBox().setFromCenterAndSize(center, size);

        let updateBox = () => {
            this.movingBox.setFromCenterAndSize(this.movingBox.center, this.movingBox.size);
        }

        this.Ori.addFolder('Center');
        this.Ori.add(this.movingBox.center, 'x', -100, 100, 1).onChange(() => { updateBox(); });
        this.Ori.add(this.movingBox.center, 'y', -100, 100, 1).onChange(() => { updateBox(); });
        this.Ori.add(this.movingBox.center, 'z', -100, 100, 1).onChange(() => { updateBox(); });
        this.Ori.open();
        // GUIHelp.endFolder();
        this.Ori.addFolder('Size');
        this.Ori.add(this.movingBox.size, 'x', 1, 200, 1).onChange(() => { updateBox(); });
        this.Ori.add(this.movingBox.size, 'y', 1, 200, 1).onChange(() => { updateBox(); });
        this.Ori.add(this.movingBox.size, 'z', 1, 200, 1).onChange(() => { updateBox(); });
        // GUIHelp.endFolder();
    }

    _material: LitMaterial;

    private initBoxList(): OctreeEntity[] {
        this._material = new LitMaterial();

        let object3D: Object3D;
        let entities: OctreeEntity[] = [];
        let geometry = new BoxGeometry();
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                for (let k = 0; k < 4; k++) {
                    object3D = new Object3D();
                    let renderer = object3D.addComponent(MeshRenderer);
                    renderer.geometry = geometry;
                    renderer.material = this._material;
                    object3D.localPosition.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
                    object3D.localPosition.multiplyScalar(190);
                    object3D.localPosition = object3D.localPosition;
                    object3D.localScale = new Vector3(1 + Math.random(), 1 + Math.random(), 1 + Math.random());
                    object3D.name = 'name' + i;

                    let entity: OctreeEntity = new OctreeEntity(renderer);
                    entities.push(entity);
                    this.tree.tryInsertEntity(entity);
                    this.view.scene.addChild(object3D);
                }
            }
        }
        return entities;
    }

    private queryResult: OctreeEntity[] = [];
    private octreeTest() {
        this.queryResult.length = 0;

        let now: number = Date.now();
        this.tree.boxCasts(this.movingBox, this.queryResult);
        let time: number = Date.now() - now;
        console.log('time: ' + time + ' count: ' + this.queryResult.length);

        let retBoolean = {};
        for (let item of this.queryResult) {
            let enable = this.movingBox.containsBox(item.renderer.object3D.bound as BoundingBox);
            retBoolean[item.uuid] = enable;
        }
        for (let item of this.entities) {
            item.renderer.enable = retBoolean[item.uuid];
        }
        this.view.graphic3D.drawBoundingBox('pick', this.movingBox, this.green);
    }

    loop() {
        this.entities && this.octreeTest();
    }

}
new Sample_OctTreeBox().run();