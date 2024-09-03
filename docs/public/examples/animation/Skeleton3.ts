import { Object3D, Scene3D, Engine3D, AtmosphericComponent, CameraUtil, webGPUContext, HoverCameraController, View3D, SkeletonAnimationComponent, LitMaterial, MeshRenderer, BoxGeometry, DirectLight, KelvinUtil, Time, Object3DUtil, BoundingBox, SkinnedMeshRenderer, AnimatorComponent } from '@orillusion/core';
import dat from 'dat.gui';
import { Stats } from '@orillusion/stats';

// Sample to use SkeletonAnimationComponent
class Sample_Skeleton3 {
    lightObj3D: Object3D;
    scene: Scene3D;
    character: Object3D;
    view: View3D;
    private Ori: dat.GUI | undefined;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 100;
        await Engine3D.init({
            renderLoop: () => this.onRenderLoop()
        });

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);
        let sky = this.scene.addComponent(AtmosphericComponent);

        let mainCamera = CameraUtil.createCamera3DObject(this.scene);
        mainCamera.perspective(60, webGPUContext.aspect, 1, 3000.0);

        let ctrl = mainCamera.object3D.addComponent(HoverCameraController);
        ctrl.setCamera(45, -30, 150);
        ctrl.maxDistance = 500.0;

        await this.initScene(this.scene);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = mainCamera;

        Engine3D.startRenderView(this.view);
    }

    async initScene(scene: Scene3D) {
        {
            let rootNode = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/Soldier_draco.glb');
            this.character = rootNode.getObjectByName('Character') as Object3D;
            this.character.scaleX = 0.3;
            this.character.scaleY = 0.3;
            this.character.scaleZ = 0.3;
            this.character.rotationY = 180;
            scene.addChild(this.character);

            let animation = this.character.getComponentsInChild(AnimatorComponent)[0];
            animation.playAnim(animation.clips[1].clipName);

            // gui
            let gui = new dat.GUI();
            // change speed
            let folder = gui.addFolder('Animation-speed');
            folder.open();
            folder.add(animation, 'timeScale', -6, 6, 0.01);

            // change animation weight
            folder = gui.addFolder('Animation-weight');
            folder.open();
            animation.clipsState.forEach((clipState, _) => {
                folder.add(clipState, 'weight', 0, 1.0, 0.01).name(clipState.clip.clipName);
            });

            // toggle play/stop
            folder = gui.addFolder('Animation-play');
            folder.open();
            animation.clipsState.forEach((clipState, _) => {
                folder.add({ [clipState.clip.clipName]: () => animation.playAnim(clipState.clip.clipName) }, clipState.clip.clipName);
            });

            // cross fade animation
            folder = gui.addFolder('Animation-crossFade');
            folder.open();
            animation.clipsState.forEach((clipState, _) => {
                folder.add({ [clipState.clip.clipName]: () => animation.crossFade(clipState.clip.clipName, 0.3) }, clipState.clip.clipName);
            });
        }

        /******** floor *******/
        this.scene.addChild(Object3DUtil.GetSingleCube(3000, 1, 3000, 0.5, 0.5, 0.5));

        /******** light *******/
        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.x = 0;
            this.lightObj3D.y = 30;
            this.lightObj3D.z = -40;
            this.lightObj3D.rotationX = 45;
            this.lightObj3D.rotationY = 0;
            this.lightObj3D.rotationZ = 0;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 3;
            scene.addChild(this.lightObj3D);
        }

        return true;
    }

    public onRenderLoop() {
        if (this.lightObj3D) {
            this.lightObj3D.rotationY += Time.delta * 0.01 * 2;
        }
    }
}

new Sample_Skeleton3().run();
