import { AtmosphericComponent, BillboardComponent, BillboardType, BitmapTexture2D, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Object3D, Scene3D, SpriteRenderer, Vector2, Vector3, Vector4, View3D } from "@orillusion/core";
import dat from "dat.gui";

class Sample_World {
    engine: Engine3D;
    scene: Scene3D;
    view: View3D;
    lightObj: Object3D;
    texture: BitmapTexture2D;

    private objects: Object3D[] = [];
    private shadowObjects: Object3D[] = [];

    private readonly state = {
        cols: 5,
        rows: 5,
        width: 1.5,
        height: 1.5,
        margin: 0.3,
        cornerRadius: 0,
        tint: new Color(1, 1, 1, 1),
        billboard: BillboardType.None,
        distanceInvariant: false,
        shadow: false,
        shadowOffsetX: 0.1,
        shadowOffsetY: -0.1,
        shadowAlpha: 0.5,
    };

    async run() {
        this.engine = await Engine3D.init({});

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -15, 20);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;

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

        {
            this.texture = new BitmapTexture2D();
            this.texture.flipY = true;
            await this.texture.load('https://cdn.orillusion.com/images/T_Fx_Object_229.webp');
        }

        this.rebuildGrid();
    }

    private rebuildGrid() {
        for (const o of this.objects) o.removeFromParent();
        for (const o of this.shadowObjects) o.removeFromParent();
        this.objects.length = 0;
        this.shadowObjects.length = 0;

        const s = this.state;
        const stepX = s.width + s.margin;
        const stepY = s.height + s.margin;
        const offsetX = -(s.cols - 1) * stepX / 2;
        const offsetY = -(s.rows - 1) * stepY / 2;

        for (let r = 0; r < s.rows; r++) {
            for (let c = 0; c < s.cols; c++) {
                const baseR = 0.4 + 0.6 * (c / Math.max(s.cols - 1, 1));
                const baseG = 0.4 + 0.6 * (r / Math.max(s.rows - 1, 1));
                const cellColor = new Color(baseR * s.tint.r, baseG * s.tint.g, 0.6 * s.tint.b, s.tint.a);

                const cellX = offsetX + c * stepX;
                const cellY = offsetY + r * stepY + 2;

                if (s.shadow) {
                    const shadowObj = new Object3D();
                    const shadowSprite = shadowObj.addComponent(SpriteRenderer);
                    shadowSprite.texture = this.texture;
                    shadowSprite.size = new Vector2(s.width, s.height);
                    shadowSprite.pivot = new Vector2(0.5, 0.5);
                    shadowSprite.color = new Color(0, 0, 0, s.shadowAlpha);
                    shadowSprite.cornerRadius = s.cornerRadius;
                    shadowSprite.uvRect = new Vector4(0, 0, 1, 1);
                    shadowSprite.distanceInvariantSize = s.distanceInvariant;
                    shadowSprite.renderOrder = 2999;
                    shadowObj.localPosition = new Vector3(
                        cellX + s.shadowOffsetX,
                        cellY + s.shadowOffsetY,
                        -0.01,
                    );
                    this.scene.addChild(shadowObj);
                    this.shadowObjects.push(shadowObj);
                }

                const obj = new Object3D();
                const sprite = obj.addComponent(SpriteRenderer);
                sprite.texture = this.texture;
                sprite.size = new Vector2(s.width, s.height);
                sprite.pivot = new Vector2(0.5, 0.5);
                sprite.color = cellColor;
                sprite.cornerRadius = s.cornerRadius;
                sprite.uvRect = new Vector4(0, 0, 1, 1);
                sprite.distanceInvariantSize = s.distanceInvariant;

                if (s.billboard !== BillboardType.None) {
                    obj.addComponent(BillboardComponent).type = s.billboard;
                }

                obj.localPosition = new Vector3(cellX, cellY, 0);
                this.scene.addChild(obj);
                this.objects.push(obj);
            }
        }
    }

    private initGUI() {
        let gui = new dat.GUI();
        let folder = gui.addFolder('World grid');
        folder.add(this.state, 'cols', 1, 10, 1).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'rows', 1, 10, 1).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'width', 0.2, 5, 0.05).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'height', 0.2, 5, 0.05).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'margin', 0, 2, 0.05).onFinishChange(() => this.rebuildGrid());
        gui.addColor({ color: Object.values(this.state.tint).map((v) => v * 255) }, 'color').onChange((v) => {
            this.state.tint = new Color().copyFromArray(v);
            this.rebuildGrid()
        });
        folder.open();

        folder = gui.addFolder('Sprite look');
        folder.add(this.state, 'cornerRadius', 0, 1, 0.01).onChange((v: number) => {
            for (const o of this.objects) {
                const sr = o.getComponent(SpriteRenderer) as SpriteRenderer | null;
                if (sr) sr.cornerRadius = v;
            }
            for (const o of this.shadowObjects) {
                const sr = o.getComponent(SpriteRenderer) as SpriteRenderer | null;
                if (sr) sr.cornerRadius = v;
            }
        });
        folder.add(this.state, 'billboard', {
            None: BillboardType.None,
            'Billboard Y': BillboardType.BillboardY,
            'Billboard XYZ': BillboardType.BillboardXYZ,
        }).onChange(() => this.rebuildGrid());
        folder.add(this.state, 'distanceInvariant').onChange((v: boolean) => {
            for (const o of this.objects) {
                const sr = o.getComponent(SpriteRenderer) as SpriteRenderer | null;
                if (sr) sr.distanceInvariantSize = v;
            }
            for (const o of this.shadowObjects) {
                const sr = o.getComponent(SpriteRenderer) as SpriteRenderer | null;
                if (sr) sr.distanceInvariantSize = v;
            }
        });
        folder.open();

        folder = gui.addFolder('Shadow');
        folder.add(this.state, 'shadow').onChange(() => this.rebuildGrid());
        folder.add(this.state, 'shadowOffsetX', -1, 1, 0.01).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'shadowOffsetY', -1, 1, 0.01).onFinishChange(() => this.rebuildGrid());
        folder.add(this.state, 'shadowAlpha', 0, 1, 0.01).onFinishChange(() => this.rebuildGrid());
        folder.open();

    }
}

new Sample_World().run();
