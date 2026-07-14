import {AtmosphericComponent, BitmapTexture2D, BillboardComponent, BillboardType, BoxColliderShape, CameraUtil, Color, ColliderComponent, DirectLight, Engine3D, HoverCameraController, KelvinUtil, LitMaterial, MeshRenderer, Object3D, PlaneGeometry, PointerEvent3D, Scene3D, SpriteRenderer, Vector2, Vector3, View3D } from "@orillusion/core";
import * as dat from 'dat.gui';

class Sample_POI {
    engine!: Engine3D;
    scene!: Scene3D;
    view!: View3D;
    lightObj!: Object3D;
    iconTexture!: BitmapTexture2D;
    gui!: dat.GUI;

    private pois: Object3D[] = [];

    private readonly state = {
        distanceInvariant: true,
        count: 8,
    };

    async run() {
        this.engine = await Engine3D.init({
            setting: {
                pick: { enable: true, mode: 'bound' as any },
            },
        });

        this.gui = new dat.GUI();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(35, -30, 40);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;
        this.view.enablePick = true;

        this.engine.startRenderView(this.view);

        await this.initScene();
        sky.relativeTransform = this.lightObj.transform;

        this.initGUI();
    }

    async initScene() {
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 45;
            this.lightObj.rotationY = 110;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.intensity = 3;
            this.scene.addChild(this.lightObj);
        }

        this.iconTexture = new BitmapTexture2D();
        this.iconTexture.flipY = true;
        await this.iconTexture.load('https://cdn.orillusion.com/textures/KB3D_NTT_Ads_basecolor.png');

        {
            const ground = new Object3D();
            const mr = ground.addComponent(MeshRenderer);
            mr.geometry = new PlaneGeometry(40, 40, 1, 1);
            const mat = new LitMaterial();
            mat.baseColor = new Color(0.25, 0.28, 0.32, 1);
            mr.material = mat;
            this.scene.addChild(ground);
        }

        this._rebuildPOIs();
    }

    private _rebuildPOIs() {
        for (const p of this.pois) p.removeFromParent();
        this.pois.length = 0;

        const n = this.state.count;
        for (let i = 0; i < n; i++) {
            const angle = (i / n) * Math.PI * 2;
            const radius = 4 + (i % 3) * 3;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            const poi = new Object3D();
            const sprite = poi.addComponent(SpriteRenderer);
            sprite.texture = this.iconTexture;
            sprite.size = new Vector2(1.6, 1.6);
            sprite.pivot = new Vector2(0.5, 0);
            sprite.distanceInvariantSize = this.state.distanceInvariant;
            sprite.color = new Color(1, 0.85, 0.4, 1);

            poi.addComponent(BillboardComponent).type = BillboardType.BillboardY;

            const collider = poi.addComponent(ColliderComponent);
            collider.shape = new BoxColliderShape().setFromCenterAndSize(
                new Vector3(0, 0.8, 0),
                new Vector3(1.6, 1.6, 0.2),
            );

            const id = i;
            poi.addEventListener(PointerEvent3D.PICK_CLICK, () => {
                console.log(`POI ${id} clicked (radius=${radius.toFixed(1)})`);
            }, this);

            poi.localPosition = new Vector3(x, 0, z);
            this.scene.addChild(poi);
            this.pois.push(poi);
        }
    }

    private initGUI() {
        const folder = this.gui.addFolder('POIs');
        folder.add(this.state, 'distanceInvariant').onChange((v: boolean) => {
            for (const p of this.pois) {
                const sprite = p.getComponent(SpriteRenderer) as SpriteRenderer | null;
                if (sprite) sprite.distanceInvariantSize = v;
            }
        });
        folder.add(this.state, 'count', 1, 24, 1).onFinishChange(() => this._rebuildPOIs());
        folder.open();
    }
}

new Sample_POI().run();
