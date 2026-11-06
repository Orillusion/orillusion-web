import { AtmosphericComponent, BoxGeometry, CameraUtil, ColliderComponent, Color, DirectLight, Engine3D, GeometryBase, HoverCameraController, KelvinUtil, LitMaterial, MeshBVH, MeshColliderShape, MeshRenderer, Object3D, PointerEvent3D, Raycaster, Scene3D, SphereGeometry, TorusGeometry, UnLitMaterial, Vector3, View3D } from '@orillusion/core';
import dat from 'dat.gui';

/**
 * MeshBVH picking.
 *
 * A 320k-triangle sphere, a 40k-triangle torus and a few scaled boxes all carry a MeshColliderShape.
 * Moving the mouse picks the exact triangles every frame (bound-mode PickFire, accelerated by MeshBVH)
 * and drops a red marker at the hit point, with a yellow one along the interpolated normal.
 *
 * Clicking runs a Raycaster over the whole scene (no colliders needed) and lists every hit along the ray.
 * The benchmark fires random rays at the big sphere through the BVH and through a brute-force scan.
 */
class Sample_MeshBVH {
    private scene: Scene3D;
    private view: View3D;
    private marker: Object3D;
    private normalMarker: Object3D;
    private bigSphere: MeshRenderer;
    private readonly raycaster = new Raycaster();
    private readonly info = {
        triangles: 0,
        bvhNodes: 0,
        bvhDepth: 0,
        buildMs: 0,
        lastHit: '-',
        distance: 0,
        faceIndex: -1,
        uv: '-',
        collidersOnRay: 0,
        useBVH: 'auto',
        side: 'material',
        firstHitOnly: false,
        rayHits: '-',
        rayMs: 0,
        benchRays: 2000,
        bvhUsPerRay: 0,
        bruteUsPerRay: 0,
        speedup: 0
    };

    async run() {
        // PickFire in bound mode: picks ColliderComponents on the CPU
        const engine = await Engine3D.init({ setting: { pick: { enable: true, mode: 'bound' } } });

        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(45, engine.aspect, 0.1, 1000);
        camera.object3D.addComponent(HoverCameraController).setCamera(-30, -20, 60, new Vector3(0, 6, 0));

        const light = new Object3D();
        light.rotationX = 35;
        light.rotationY = 160;
        const dl = light.addComponent(DirectLight);
        dl.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        dl.intensity = 2;
        dl.castShadow = true;
        dl.enableCSM = true;
        this.scene.addChild(light);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;

        this.buildScene();
        engine.startRenderView(this.view);
        this.initGUI();

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, this.onPickMove, this);
        this.view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPickClick, this);
    }

    private addPickable(geometry: GeometryBase, color: Color, pos: Vector3, scale = 1, name = ''): MeshRenderer {
        const obj = new Object3D();
        obj.name = name;
        obj.localPosition = pos;
        obj.localScale = new Vector3(scale, scale, scale);
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = geometry;
        const mat = new LitMaterial();
        mat.baseColor = color;
        mat.roughness = 0.5;
        mr.material = mat;
        mr.castShadow = true;
        // Without shape.mesh, the collider picks the geometry of the MeshRenderer on the same object
        obj.addComponent(ColliderComponent).shape = new MeshColliderShape();
        this.scene.addChild(obj);
        return mr;
    }

    private buildScene() {
        // 400 x 400 segments: about 320k triangles
        const t0 = performance.now();
        const sphereGeo = new SphereGeometry(10, 400, 400);
        this.bigSphere = this.addPickable(sphereGeo, new Color(0.3, 0.6, 0.9), new Vector3(0, 10, 0), 1, 'sphere-320k');
        // Prebuild the tree so the first hover does not pay for it; Raycaster's 'auto' mode also uses it
        const bvh = MeshBVH.build(sphereGeo);
        this.info.buildMs = +(performance.now() - t0).toFixed(1);
        this.info.triangles = bvh.triCount;
        this.info.bvhNodes = bvh.nodeCount;
        this.info.bvhDepth = bvh.depth;

        const torus = this.addPickable(new TorusGeometry(6, 2, 128, 160), new Color(0.9, 0.6, 0.2), new Vector3(-24, 6, 0), 1, 'torus');
        torus.object3D.rotationX = 60;

        // Scaled boxes: hits are reported in world space under any transform
        const box = new BoxGeometry(1, 1, 1);
        for (let i = 0; i < 4; i++) {
            const mr = this.addPickable(box, new Color(0.5, 0.85, 0.4), new Vector3(20 + i * 7, 3, (i % 2) * 6 - 3), 6, 'box-' + i);
            mr.object3D.rotationY = i * 25;
        }

        const floor = this.addPickable(new BoxGeometry(200, 1, 200), new Color(0.6, 0.6, 0.62), new Vector3(0, -0.5, 0), 1, 'floor');
        floor.castShadow = false;

        this.marker = this.createDot(0.35, new Color(1, 0.1, 0.1));
        this.normalMarker = this.createDot(0.22, new Color(1, 1, 0.2));
    }

    private createDot(radius: number, color: Color): Object3D {
        const obj = new Object3D();
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(radius, 12, 12);
        const mat = new UnLitMaterial();
        mat.baseColor = color;
        mr.material = mat;
        mr.castShadow = false;
        obj.transform.enable = false;
        this.scene.addChild(obj);
        return obj;
    }

    private onPickMove(e: PointerEvent3D) {
        const d = e.data;
        if (!d || !e.target) return;
        this.marker.transform.enable = this.normalMarker.transform.enable = true;
        this.marker.localPosition = d.worldPos;
        const n: Vector3 = d.worldNormal;
        this.normalMarker.localPosition = new Vector3(d.worldPos.x + n.x * 1.5, d.worldPos.y + n.y * 1.5, d.worldPos.z + n.z * 1.5);
        this.info.lastHit = e.target.name;
        this.info.distance = +(d.distance ?? 0).toFixed(2);
        this.info.faceIndex = d.faceIndex ?? -1;
        this.info.uv = d.uv ? `${d.uv.x.toFixed(3)}, ${d.uv.y.toFixed(3)}` : '-';
        // Every collider along the ray, nearest first
        this.info.collidersOnRay = d.hits?.length ?? 0;
    }

    private onPickClick(e: PointerEvent3D) {
        // The same click through a Raycaster: every triangle hit along the ray, scene-wide
        const rc = this.raycaster;
        rc.useBVH = this.info.useBVH as any;
        rc.side = this.info.side as any;
        rc.firstHitOnly = this.info.firstHitOnly;
        // Skip the hit markers (sky spheres are skipped by default, see includeSky)
        rc.filter = (r) => r.object3D !== this.marker && r.object3D !== this.normalMarker;
        rc.setFromCamera(this.view.camera, e.mouseX, e.mouseY);
        const t0 = performance.now();
        const hits = rc.intersectObject(this.scene);
        this.info.rayMs = +(performance.now() - t0).toFixed(2);
        this.info.rayHits = hits.length ? hits.map((h) => `${h.object3D.name}#${h.faceIndex}@${h.distance.toFixed(1)}${h.frontFace ? '' : '(back)'}`).join('  ') : '-';
    }

    private benchmark() {
        const bvh = MeshBVH.get(this.bigSphere.geometry);
        const n = this.info.benchRays;
        // Random rays aimed at the sphere from a shell around it, in the geometry's local space
        const origins: Vector3[] = [],
            dirs: Vector3[] = [];
        for (let i = 0; i < n; i++) {
            const o = new Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(30);
            const d = new Vector3(-o.x + Math.random() * 6 - 3, -o.y + Math.random() * 6 - 3, -o.z + Math.random() * 6 - 3).normalize();
            origins.push(o);
            dirs.push(d);
        }
        let t0 = performance.now();
        for (let i = 0; i < n; i++) bvh.raycast(origins[i], dirs[i]);
        const bvhMs = performance.now() - t0;
        t0 = performance.now();
        for (let i = 0; i < n; i++) bvh.raycastBruteForce(origins[i], dirs[i]);
        const bruteMs = performance.now() - t0;
        this.info.bvhUsPerRay = +((bvhMs / n) * 1000).toFixed(1);
        this.info.bruteUsPerRay = +((bruteMs / n) * 1000).toFixed(1);
        this.info.speedup = +(bruteMs / Math.max(bvhMs, 1e-6)).toFixed(1);
    }

    private initGUI() {
        const gui = new dat.GUI();
        const f = gui.addFolder('MeshBVH (hover)');
        f.add(this.info, 'triangles').listen();
        f.add(this.info, 'bvhNodes').listen();
        f.add(this.info, 'bvhDepth').listen();
        f.add(this.info, 'buildMs').listen();
        f.add(this.info, 'lastHit').listen();
        f.add(this.info, 'distance').listen();
        f.add(this.info, 'faceIndex').listen();
        f.add(this.info, 'uv').listen();
        f.add(this.info, 'collidersOnRay').listen();
        f.open();
        const r = gui.addFolder('Raycaster (click)');
        r.add(this.info, 'useBVH', ['auto', 'always', 'never']);
        r.add(this.info, 'side', ['material', 'front', 'back', 'double']);
        r.add(this.info, 'firstHitOnly');
        r.add(this.info, 'rayHits').listen();
        r.add(this.info, 'rayMs').listen();
        const b = gui.addFolder('Benchmark');
        b.add(this.info, 'benchRays', 100, 20000, 100);
        b.add({ run: () => this.benchmark() }, 'run');
        b.add(this.info, 'bvhUsPerRay').listen();
        b.add(this.info, 'bruteUsPerRay').listen();
        b.add(this.info, 'speedup').listen();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

new Sample_MeshBVH().run();
