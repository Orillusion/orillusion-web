import { AtmosphericComponent, BoxGeometry, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, LODGroup, LODMode, MeshRenderer, Object3D, PlaneGeometry, Scene3D, SphereGeometry, Vector3, View3D } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';

/**
 * LODGroup: a 24 x 24 field of objects, each with three levels of detail:
 *   L0  high-poly sphere (green)   48 x 48 segments, 4.6k triangles
 *   L1  low-poly sphere  (yellow)   8 x 8 segments,  128 triangles
 *   L2  box              (red)      12 triangles
 * and culled beyond the last threshold. Zoom and orbit the camera to watch the rings change;
 * the panel shows live counts per level and switches between the screen-size and distance metrics.
 */
class Sample_LOD {
    private scene: Scene3D;
    private groups: LODGroup[] = [];

    async run() {
        const engine = await Engine3D.init({ setting: { shadow: { enable: true, shadowBound: 200, shadowSize: 2048 } } });
        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent).sunY = 0.6;
        this.scene.addComponent(Stats);

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(45, engine.aspect, 0.1, 2000);
        const ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(-30, -35, 90);
        ctrl.maxDistance = 1500;

        const lightObj = new Object3D();
        lightObj.rotationX = 45;
        lightObj.rotationY = 160;
        const light = lightObj.addComponent(DirectLight);
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        light.intensity = 2;
        light.castShadow = true;
        light.enableCSM = true;
        this.scene.addChild(lightObj);

        this.buildFloor();
        this.buildField();

        const view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        engine.startRenderView(view);

        const counter = this.scene.addComponent(LevelCounter);
        counter.groups = this.groups;
        this.initGUI(counter);
    }

    private buildFloor() {
        const floor = new Object3D();
        const mr = floor.addComponent(MeshRenderer);
        mr.geometry = new PlaneGeometry(400, 400);
        const mat = new LitMaterial();
        mat.baseColor = new Color(0.55, 0.55, 0.6);
        mat.roughness = 0.9;
        mr.material = mat;
        mr.castShadow = false;
        this.scene.addChild(floor);
    }

    private buildField() {
        // LOD only toggles visibility, so the 576 groups share 3 geometries and 3 materials
        const geos: GeometryBase[] = [new SphereGeometry(1.5, 48, 48), new SphereGeometry(1.5, 8, 8), new BoxGeometry(2.4, 2.4, 2.4)];
        const colors = [new Color(0.25, 0.85, 0.35), new Color(0.95, 0.85, 0.2), new Color(0.9, 0.3, 0.25)];
        const mats = colors.map((c) => {
            const m = new LitMaterial();
            m.baseColor = c;
            m.roughness = 0.6;
            return m;
        });
        // ScreenSize thresholds: the group's diameter as a fraction of the viewport height
        const thresholds = [0.12, 0.05, 0.015];

        const n = 24;
        const spacing = 6;
        for (let ix = 0; ix < n; ix++) {
            for (let iz = 0; iz < n; iz++) {
                const root = new Object3D();
                root.localPosition = new Vector3((ix - n / 2 + 0.5) * spacing, 1.5, (iz - n / 2 + 0.5) * spacing);
                const lod = root.addComponent(LODGroup);
                for (let l = 0; l < 3; l++) {
                    const obj = new Object3D();
                    const mr = obj.addComponent(MeshRenderer);
                    mr.geometry = geos[l];
                    mr.material = mats[l];
                    mr.castShadow = true;
                    root.addChild(obj);
                    lod.addLevel(obj, thresholds[l]);
                }
                this.scene.addChild(root);
                this.groups.push(lod);
            }
        }
    }

    private initGUI(counter: LevelCounter) {
        const state = { mode: 'ScreenSize', bias: 1, hysteresis: 0.1, cullBeyondLast: true, forceLevel: 'auto' };
        // Thresholds are in the metric's unit: switching the mode needs a matching set
        const sizeThresholds = [0.12, 0.05, 0.015];
        const distThresholds = [25, 60, 200];

        const gui = new dat.GUI();
        const f = gui.addFolder('LOD');
        f.add(state, 'mode', ['ScreenSize', 'Distance']).onChange((v: string) => {
            const mode = v === 'Distance' ? LODMode.Distance : LODMode.ScreenSize;
            const th = mode === LODMode.Distance ? distThresholds : sizeThresholds;
            for (const g of this.groups) {
                g.mode = mode;
                g.setThresholds(th);
            }
        });
        f.add(state, 'bias', 0.25, 4, 0.05).onChange((v: number) => this.groups.forEach((g) => (g.bias = v)));
        f.add(state, 'hysteresis', 0, 0.5, 0.01).onChange((v: number) => this.groups.forEach((g) => (g.hysteresis = v)));
        f.add(state, 'cullBeyondLast').onChange((v: boolean) => this.groups.forEach((g) => (g.cullBeyondLast = v)));
        f.add(state, 'forceLevel', ['auto', '0', '1', '2', 'culled']).onChange((v: string) => {
            const level = v === 'auto' ? null : v === 'culled' ? LODGroup.CULLED : Number(v);
            for (const g of this.groups) g.forceLevel = level;
        });
        f.open();

        const c = gui.addFolder('Live counts');
        c.add(counter.counts, 'L0').listen();
        c.add(counter.counts, 'L1').listen();
        c.add(counter.counts, 'L2').listen();
        c.add(counter.counts, 'culled').listen();
        c.add(counter.counts, 'triangles').listen();
        c.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

/** Counts how many groups show each level, and the triangles drawn. */
class LevelCounter extends ComponentBase {
    public groups: LODGroup[] = [];
    public readonly counts = { L0: 0, L1: 0, L2: 0, culled: 0, triangles: 0 };
    private readonly trisPerLevel = [48 * 48 * 2, 8 * 8 * 2, 12];

    public onUpdate(): void {
        const c = this.counts;
        c.L0 = c.L1 = c.L2 = c.culled = c.triangles = 0;
        for (const g of this.groups) {
            const l = g.currentLevel;
            if (l === LODGroup.CULLED) {
                c.culled++;
                continue;
            }
            if (l === 0) c.L0++;
            else if (l === 1) c.L1++;
            else c.L2++;
            c.triangles += this.trisPerLevel[l];
        }
    }
}

new Sample_LOD().run();
