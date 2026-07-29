import { Object3D, Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, LitMaterial, MeshRenderer, BoxGeometry, DirectLight, KelvinUtil, Object3DUtil, SkeletonAnimationComponent, AnimatorComponent } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

class Sample_Skeleton2 {
    engine: Engine3D;
    lightObj3D: Object3D;
    scene: Scene3D;

    async run() {
        this.engine = await Engine3D.init({
            setting: {
                shadow: {
                    autoUpdate: true,
                    updateFrameRate: 1,
                    shadowSize: 2048
                }
            }
        });

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);
        let sky = this.scene.addComponent(AtmosphericComponent);
        this.scene.exposure = 1;

        let mainCamera = CameraUtil.createCamera3DObject(this.scene);
        mainCamera.perspective(60, this.engine.aspect, 1, 3000.0);

        let hoverCameraController = mainCamera.object3D.addComponent(HoverCameraController);
        hoverCameraController.setCamera(45, -30, 300);
        hoverCameraController.maxDistance = 500.0;

        let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;

        this.engine.startRenderView(view);

        await this.initScene(this.scene);
        sky.relativeTransform = this.lightObj3D.transform;
    }

    async initScene(scene: Scene3D) {
        /******** floor *******/
        this.scene.addChild(Object3DUtil.GetSingleCube(3000, 1, 3000, 0.5, 0.5, 0.5));

        /******** light *******/
        {
            this.lightObj3D = new Object3D();
            this.lightObj3D.x = 0;
            this.lightObj3D.y = 150;
            this.lightObj3D.z = 100;
            this.lightObj3D.rotationX = 144;
            this.lightObj3D.rotationY = 0;
            this.lightObj3D.rotationZ = 0;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 3;
            directLight.enableCSM = true;
            scene.addChild(this.lightObj3D);
        }

        {
            // load model with skeletion animation
            let soldier = await this.engine.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/Soldier.glb');
            soldier.scaleX = soldier.scaleY = soldier.scaleZ = 20;
            soldier.rotationY = 180;

            // enum animation names
            var animName = ['Idle', 'Walk', 'Run', 'TPose'];
            let maxCount = 100;
            let maxCol = 10;
            let maxRow = Math.floor(maxCount / maxCol);
            // Clone 100 players to play different animations
            for (var i = 0; i < maxCount; i++) {
                let cloneObj = soldier.clone();

                let row = Math.floor(i / maxCol);
                let col = Math.floor(i % maxCol);

                cloneObj.x = (maxCol * -0.5 + col) * 30;
                cloneObj.z = (maxRow * -0.5 + row) * 30;
                // cloneObj.rotationX = -90;
                scene.addChild(cloneObj);

                let animation = cloneObj.getComponentsInChild(AnimatorComponent)[0];

                if (i < animName.length) {
                    animation.playAnim(animName[i]);
                } else {
                    let animIndex = Math.floor(Math.random() * 100) % animName.length;
                    animation.playAnim(animName[animIndex]);
                }
                await this.sleep(10);
            }
        }
        return true;
    }

    sleep(time: number) {
        return new Promise((res) => {
            setTimeout(res, time || 200);
        });
    }
}

new Sample_Skeleton2().run();
