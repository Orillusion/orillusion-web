import { AtmosphericComponent, BitmapTexture2D, CameraUtil, Color, DirectLight, Engine3D, HoverCameraController, Object3D, Scene3D, SpriteBatch, SpriteBatchEntry, Vector2, Vector3, Vector4, View3D } from "@orillusion/core";
import dat from "dat.gui";

class Sample_Batch {
    engine!: Engine3D;
    scene!: Scene3D;
    view!: View3D;

    private batch!: SpriteBatch;
    private entries: SpriteBatchEntry[] = [];
    private animate = true;
    private phases: Float32Array = new Float32Array(0);
    private basePositions: Float32Array = new Float32Array(0);

    private readonly state = {
        count: 10_000,
        tint: new Color(1, 1, 1, 1),
        animate: true,
        size: 0.15,
        spread: 30,
    };

    async run() {
        this.engine = await Engine3D.init({
            renderLoop: () => this._tick(),
        });

        this.scene = new Scene3D();
        const sky = this.scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, this.engine.aspect, 0.1, 5000);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -15, 80);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;
        this.engine.startRenderView(this.view);

        const lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 110;
        lightObj.addComponent(DirectLight).intensity = 3;
        this.scene.addChild(lightObj);
        sky.relativeTransform = lightObj.transform;

        const tex = new BitmapTexture2D();
        tex.flipY = true;
        await tex.load('https://cdn.orillusion.com/images/T_Fx_Object_229.webp');

        const batchObj = new Object3D();
        this.batch = batchObj.addComponent(SpriteBatch);
        this.batch.texture = tex;
        this.batch.color = this.state.tint;
        this.scene.addChild(batchObj);

        this._rebuildEntries();
        this.initGUI();
    }

    private _rebuildEntries() {
        this.batch.clear();
        this.entries.length = 0;

        const n = this.state.count;
        const spread = this.state.spread;
        const size = this.state.size;
        this.basePositions = new Float32Array(n * 3);
        this.phases = new Float32Array(n);

        for (let i = 0; i < n; i++) {
            const x = (Math.random() - 0.5) * spread;
            const y = (Math.random() - 0.5) * spread * 0.6;
            const z = (Math.random() - 0.5) * spread;
            this.basePositions[i * 3 + 0] = x;
            this.basePositions[i * 3 + 1] = y;
            this.basePositions[i * 3 + 2] = z;
            this.phases[i] = Math.random() * Math.PI * 2;

            const entry = this.batch.add({
                position: new Vector3(x, y, z),
                size: new Vector2(size, size),
                pivot: new Vector2(0.5, 0.5),
                uvRect: new Vector4(0, 0, 1, 1),
            });
            this.entries.push(entry);
        }
    }

    private _tmpPos = new Vector3(0, 0, 0);

    private _tick() {
        if (!this.state.animate || this.entries.length === 0) return;
        const t = performance.now() * 0.001;
        const base = this.basePositions;
        for (let i = 0; i < this.entries.length; i++) {
            const phase = this.phases[i];
            const y = base[i * 3 + 1] + Math.sin(t + phase) * 0.5;
            this._tmpPos.set(base[i * 3 + 0], y, base[i * 3 + 2]);
            this.batch.update(this.entries[i], { position: this._tmpPos });
        }
    }

    private initGUI() {
        let gui = new dat.GUI();
        gui.add(this.state, 'count', 100, 100_000, 100).onFinishChange(() => this._rebuildEntries());
        gui.add(this.state, 'size', 0.05, 2, 0.05).onFinishChange(() => this._rebuildEntries());
        gui.add(this.state, 'spread', 5, 100, 1).onFinishChange(() => this._rebuildEntries());
        gui.addColor(this.state, 'tint').onChange(c => this.batch.color = c);
        gui.addColor({ color: Object.values(this.state.tint).map((v) => v * 255) }, 'color').onChange((v) => {
            this.state.tint = new Color().copyFromArray(v);
        });
        gui.add(this.state, 'animate');
        gui.open();
    }
}

new Sample_Batch().run();
