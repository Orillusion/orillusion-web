import { AnimatorComponent, AtmosphericComponent, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, HoverCameraController, KelvinUtil, MeshDeformer, MeshRenderer, Object3D, Object3DUtil, Raycaster, RaycastHit, Scene3D, SphereGeometry, UnLitMaterial, Vector3, View3D } from '@orillusion/core';
import dat from 'dat.gui';

/**
 * Picking skinned and morph-target meshes.
 *
 * Two animated soldiers (glTF skin) and a lion with blend shapes. Every frame a Raycaster is cast
 * through the mouse position: the GPU deforms these meshes in the vertex shader, so the raycaster
 * replays the deformation on the CPU and the red marker sticks to the surface as drawn, even while
 * it animates under a still mouse. The blue marker is the same ray against the bind pose
 * (deformation = 'bindPose'). The yellow dot points along the hit normal.
 */
class Sample_SkinnedMeshPick {
    private scene: Scene3D;
    private view: View3D;
    private characters: Object3D;
    private animators: AnimatorComponent[] = [];
    private lionAnimator: AnimatorComponent;
    private hitMarker: Object3D;
    private normalMarker: Object3D;
    private bindMarker: Object3D;
    private readonly raycaster = new Raycaster();
    private readonly bindRaycaster = new Raycaster();
    private readonly info = {
        animate: true,
        clip: 'Run',
        showBindPose: true,
        lastHit: '-',
        faceIndex: -1,
        distance: 0,
        bindPoseOffset: '-',
        deformedVertices: 0,
        pickMs: 0
    };
    private readonly morph: { [key: string]: number } = {};

    async run() {
        const engine = await Engine3D.init();

        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent);

        const camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(45, engine.aspect, 0.1, 1000);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, -12, 150, new Vector3(20, 18, 0));

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

        this.scene.addChild(Object3DUtil.GetSingleCube(400, 1, 400, 0.45, 0.45, 0.48));
        this.characters = new Object3D();
        this.scene.addChild(this.characters);
        await this.loadSoldiers(engine);
        await this.loadLion(engine);
        this.hitMarker = this.createDot(1.1, new Color(1, 0.15, 0.1));
        this.normalMarker = this.createDot(0.6, new Color(1, 0.95, 0.2));
        this.bindMarker = this.createDot(0.9, new Color(0.2, 0.5, 1));
        // The comparison ray ignores the animation and hits the undeformed mesh
        this.bindRaycaster.deformation = 'bindPose';

        engine.startRenderView(this.view);
        this.initGUI();
        // Pick every frame: the characters move under a still mouse
        this.scene.addComponent(PickEveryFrame).sample = this;
    }

    private async loadSoldiers(engine: Engine3D) {
        const soldier = await engine.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/Soldier.glb');
        soldier.scaleX = soldier.scaleY = soldier.scaleZ = 20;
        soldier.rotationY = 200;
        soldier.x = -20;
        this.characters.addChild(soldier);
        const walker = soldier.clone();
        walker.x = 15;
        walker.rotationY = 160;
        this.characters.addChild(walker);
        this.animators = [soldier, walker].map((s) => s.getComponentsInChild(AnimatorComponent)[0]);
        this.animators[0].playAnim('Run');
        this.animators[1].playAnim('Walk');
    }

    private async loadLion(engine: Engine3D) {
        const lion = await engine.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/lion.glb');
        lion.scaleX = lion.scaleY = lion.scaleZ = 0.4;
        this.characters.addChild(lion);
        // Stand it on the ground at x = 55 using its bounds
        let minY = Infinity,
            cx = 0,
            n = 0;
        for (const r of lion.getComponentsInChild(MeshRenderer)) {
            const b = r.geometry.bounds,
                m = r.transform.worldMatrix;
            for (const p of [b.min, b.max]) {
                const w = m.transformPoint(p.clone());
                minY = Math.min(minY, w.y);
                cx += w.x;
                n++;
            }
        }
        lion.y -= minY;
        lion.x += 55 - cx / n;
        this.lionAnimator = lion.addComponent(AnimatorComponent);
        for (const key in this.lionAnimator.cloneMorphRenderers()) this.morph[key] = 0;
    }

    private createDot(radius: number, color: Color): Object3D {
        const obj = new Object3D();
        const mr = obj.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(radius, 16, 16);
        const mat = new UnLitMaterial();
        mat.baseColor = color;
        mr.material = mat;
        mr.castShadow = false;
        obj.transform.enable = false;
        this.scene.addChild(obj);
        return obj;
    }

    /** Called every frame by PickEveryFrame. */
    public pick() {
        const input = this.view.engine3D.inputSystem;
        const camera = this.view.camera;
        this.raycaster.setFromCamera(camera, input.mouseX, input.mouseY);
        const t0 = performance.now();
        const hit = this.raycaster.intersectFirst(this.characters);
        this.info.pickMs = +(performance.now() - t0).toFixed(2);
        this.place(hit);

        let bind: RaycastHit | null = null;
        if (this.info.showBindPose) {
            this.bindRaycaster.setFromCamera(camera, input.mouseX, input.mouseY);
            bind = this.bindRaycaster.intersectFirst(this.characters);
        }
        this.bindMarker.transform.enable = !!bind;
        if (bind) this.bindMarker.localPosition = bind.point;
        this.info.bindPoseOffset = hit && bind ? Vector3.distance(hit.point, bind.point).toFixed(2) : '-';
    }

    private place(hit: RaycastHit | null) {
        this.hitMarker.transform.enable = this.normalMarker.transform.enable = !!hit;
        if (!hit) {
            this.info.lastHit = '-';
            return;
        }
        this.hitMarker.localPosition = hit.point;
        const n = hit.normal;
        this.normalMarker.localPosition = new Vector3(hit.point.x + n.x * 3, hit.point.y + n.y * 3, hit.point.z + n.z * 3);
        this.info.lastHit = hit.object3D.name || '(unnamed)';
        this.info.faceIndex = hit.faceIndex;
        this.info.distance = +hit.distance.toFixed(2);
        // The CPU-deformed copy the raycaster tested (cached per renderer)
        const deformed = MeshDeformer.deform(hit.renderer);
        this.info.deformedVertices = deformed ? deformed.geometry.getAttribute('position').data.length / 3 : 0;
    }

    private initGUI() {
        const gui = new dat.GUI();
        const a = gui.addFolder('Animation');
        a.add(this.info, 'animate').onChange((v: boolean) => this.animators.forEach((an) => (an.timeScale = v ? 1 : 0)));
        a.add(this.info, 'clip', ['Idle', 'Walk', 'Run', 'TPose']).onChange((v: string) => this.animators[0].playAnim(v));
        const m = gui.addFolder('Lion blend shapes');
        for (const key in this.morph) {
            m.add(this.morph, key, 0, 1, 0.01).onChange((v: number) => {
                this.lionAnimator.updateBlendShape(['blendShape', 'blendShape', key], 'blendShape.blendShape.' + key, v);
            });
        }
        const p = gui.addFolder('Pick (mouse)');
        p.add(this.raycaster, 'deformation', ['cpu', 'bindPose', 'skip']);
        p.add(this.info, 'showBindPose');
        p.add(this.info, 'lastHit').listen();
        p.add(this.info, 'faceIndex').listen();
        p.add(this.info, 'distance').listen();
        p.add(this.info, 'bindPoseOffset').listen();
        p.add(this.info, 'deformedVertices').listen();
        p.add(this.info, 'pickMs').listen();
        p.open();
        // Start collapsed so the panel does not cover the scene
        gui.close();
    }
}

class PickEveryFrame extends ComponentBase {
    public sample: Sample_SkinnedMeshPick;
    onUpdate() {
        this.sample?.pick();
    }
}

new Sample_SkinnedMeshPick().run();
