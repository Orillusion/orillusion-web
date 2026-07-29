import { Object3D, Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, LitMaterial, MeshRenderer, SphereGeometry, Color, Vector3, DirectLight, KelvinUtil, Object3DUtil, AnimatorComponent, TwoBoneIK, PostProcessingComponent, FXAAPost } from "@orillusion/core";
import dat from 'dat.gui';

class Sample_SkeletonIK {
    engine!: Engine3D;
    lightObj3D!: Object3D;
    scene!: Scene3D;
    animator!: AnimatorComponent;
    gui!: dat.GUI;

    async run() {
        const storedType = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('shadowType') : null;
        const shadowType: 'HARD' | 'PCF' | 'SOFT' =
            storedType === 'PCF' || storedType === 'SOFT' ? storedType : 'HARD';

        const engine = this.engine = await Engine3D.init({
            setting: {
                shadow: {
                    type: shadowType,
                    autoUpdate: true,
                    updateFrameRate: 1,
                },
            },
        });

        this.gui = new dat.GUI();

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, engine.aspect, 0.01, 5000.0);

        let ctrl = camera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(-30, -45, 100);
        ctrl.maxDistance = 1000;

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        engine.startRenderView(view);

        let postCom = this.scene.addComponent(PostProcessingComponent);
        postCom.addPost(FXAAPost);

        await this.initScene(this.scene);
        sky.relativeTransform = this.lightObj3D.transform;
    }


    async initScene(scene: Scene3D) {
        {
            let man = await this.engine.res.loadGltf('https://cdn.orillusion.com/gltfs/CesiumMan/CesiumMan_compress.gltf');
            man.scaleX = 30;
            man.scaleY = 30;
            man.scaleZ = 30;
            scene.addChild(man);

            let animator = this.animator = man.getComponentsInChild(AnimatorComponent)[0];
            animator.playAnim(animator.clips[0].clipName);

            this.setupFootIK('R');
            this.setupFootIK('L');
        }

        this.scene.addChild(Object3DUtil.GetSingleCube(3000, 1, 3000, 0.5, 0.5, 0.5));

        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.y = 100;
            this.lightObj3D.rotationX = 144;
            this.lightObj3D.rotationY = 0;
            this.lightObj3D.rotationZ = 0;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 3;
            directLight.shadowBoundFar = 200;
            directLight.enableCSM = true;
            scene.addChild(this.lightObj3D);
        }

        return true;
    }

    private setupFootIK(side: 'R' | 'L') {
        const hipName = `leg_joint_${side}_1`;
        const kneeName = `leg_joint_${side}_2`;
        const ankleName = `leg_joint_${side}_3`;

        const hip = this.animator.getJointObject(hipName);
        const knee = this.animator.getJointObject(kneeName);
        const ankle = this.animator.getJointObject(ankleName);
        if (!hip || !knee || !ankle) {
            console.warn(`[FootIK] missing bone(s) for side ${side} — IK skipped`);
            return;
        }

        const hipP = this.clonePos(hip);
        const kneeP = this.clonePos(knee);
        const ankleP = this.clonePos(ankle);

        const mid = new Vector3((hipP.x + ankleP.x) * 0.5, (hipP.y + ankleP.y) * 0.5, (hipP.z + ankleP.z) * 0.5);
        const poleDir = new Vector3(kneeP.x - mid.x, kneeP.y - mid.y, kneeP.z - mid.z);
        const legLen = Vector3.distance(hipP, ankleP);
        if (poleDir.length < 1e-4) poleDir.set(0, 0, 1); else poleDir.normalize();
        const poleP = new Vector3(
            kneeP.x + poleDir.x * legLen,
            kneeP.y + poleDir.y * legLen,
            kneeP.z + poleDir.z * legLen,
        );

        const target = this.makeMarker(ankleP, new Color(1.0, 0.4, 0.1, 1), 2.0);
        const pole = this.makeMarker(poleP, new Color(0.1, 0.7, 1.0, 1), 1.4);

        this.scene.addChild(target);

        const solver = new TwoBoneIK({
            name: `foot_${side}`,
            chain: [hipName, kneeName, ankleName],
            target,
            pole,
            weight: 1.0,
        });
        this.animator.addIK(solver);

        let folder = this.gui.addFolder(`Foot IK (${side})`);
        folder.add(solver, 'weight', 0, 1, 0.01).name('weight');
        const range = legLen;
        folder.add(target, 'x', ankleP.x - range, ankleP.x + range, 0.1).name('target x');
        folder.add(target, 'y', ankleP.y - range, ankleP.y + range, 0.1).name('target y');
        folder.add(target, 'z', ankleP.z - range, ankleP.z + range, 0.1).name('target z');
        folder.open();
    }

    private clonePos(obj: Object3D): Vector3 {
        const wp = obj.transform.worldPosition;
        return new Vector3(wp.x, wp.y, wp.z);
    }

    private makeMarker(pos: Vector3, color: Color, radius: number): Object3D {
        const o = new Object3D();
        const mr = o.addComponent(MeshRenderer);
        mr.geometry = new SphereGeometry(radius, 16, 16);
        const mat = new LitMaterial();
        mat.baseColor = color;
        mat.emissiveColor = color;
        mat.emissiveIntensity = 1.5;
        mr.material = mat;
        o.x = pos.x;
        o.y = pos.y;
        o.z = pos.z;
        return o;
    }

}

new Sample_SkeletonIK().run();
