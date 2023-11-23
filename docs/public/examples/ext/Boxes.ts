import { Engine3D, View3D, Scene3D, CameraUtil, AtmosphericComponent, webGPUContext, HoverCameraController, Object3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, Vector3, PostProcessingComponent, GlobalFog, Color, BoxGeometry, GTAOPost, BloomPost } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

class Sample_Boxes {
    view: View3D;
    post: PostProcessingComponent;

    async run() {
        Engine3D.setting.shadow.enable = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 500;
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.render.useLogDepth = true;

        await Engine3D.init();
        this.view = new View3D();
        this.view.scene = new Scene3D();
        this.view.scene.addComponent(AtmosphericComponent);
        this.view.scene.addComponent(Stats);

        this.view.camera = CameraUtil.createCamera3DObject(this.view.scene);
        this.view.camera.perspective(60, webGPUContext.aspect, 1, 5000.0);
        this.view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 1000);

        Engine3D.startRenderView(this.view);

        this.post = this.view.scene.addComponent(PostProcessingComponent);
        this.post.addPost(BloomPost);
        this.createScene(this.view.scene);
    }

    private async createScene(scene: Scene3D) {
        {
            let sunObj = new Object3D();
            let sunLight = sunObj.addComponent(DirectLight);
            sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553);
            sunLight.castShadow = true;
            sunLight.intensity = 45;
            sunObj.transform.rotationX = 50;
            sunObj.transform.rotationY = 50;
            scene.addChild(sunObj);
        }

        {
            let geometry = new BoxGeometry(5, 200, 5);
            let litMaterial = new LitMaterial();
            let w = 30;
            let h = 30;
            for (let i = 0; i < w; i++) {
                for (let j = 0; j < h; j++) {
                    let obj = new Object3D();
                    let mr = obj.addComponent(MeshRenderer);
                    mr.material = litMaterial;
                    mr.geometry = geometry;
                    obj.x = i * 10 - w * 0.5 * 10;
                    obj.y = Math.random() * 100;
                    obj.z = j * 10 - h * 0.5 * 10;
                    scene.addChild(obj);
                }
            }

            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.material = litMaterial;
            mr.geometry = geometry;
            obj.localScale = new Vector3(1000, 1, 1000);
            scene.addChild(obj);
        }
    }
}

new Sample_Boxes().run();
