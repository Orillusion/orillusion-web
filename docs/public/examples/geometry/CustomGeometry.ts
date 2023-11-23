import { Engine3D, View3D, Scene3D, CameraUtil, AtmosphericComponent, webGPUContext, HoverCameraController, Object3D, DirectLight, KelvinUtil, PlaneGeometry, VertexAttributeName, LitMaterial, MeshRenderer } from '@orillusion/core';
import { Stats } from '@orillusion/stats';

// An sample of custom vertex attribute of geometry
class Sample_CustomGeometry {
    dirLight: DirectLight;
    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        await Engine3D.init();
        let view = new View3D();
        view.scene = new Scene3D();
        let sky = view.scene.addComponent(AtmosphericComponent);

        view.camera = CameraUtil.createCamera3DObject(view.scene);
        view.camera.perspective(60, webGPUContext.aspect, 1, 5000.0);
        view.camera.object3D.z = -15;
        view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 150);

        Engine3D.startRenderView(view);

        await this.createScene(view.scene);
        sky.relativeTransform = this.dirLight.transform;
    }

    private async createScene(scene: Scene3D) {
        let sunObj = new Object3D();
        let sunLight = (this.dirLight = sunObj.addComponent(DirectLight));
        sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(65533);
        sunLight.castShadow = true;
        sunObj.transform.rotationX = 50;
        sunObj.transform.rotationY = 50;
        scene.addChild(sunObj);

        // define a plane geometry
        let geometry = new PlaneGeometry(100, 100, 80, 80);
        let attribute = geometry.getAttribute(VertexAttributeName.position);

        // add a plane into scene
        let plane = new Object3D();
        let meshRenderer = plane.addComponent(MeshRenderer);
        meshRenderer.geometry = geometry;
        meshRenderer.material = new LitMaterial();

        // set y-axis to a random number
        let count = attribute.data.length / 3;
        for (let i = 0; i < count; i++) {
            attribute.data[i * 3 + 0];
            attribute.data[i * 3 + 1] = Math.random() * 20 - 10;
            attribute.data[i * 3 + 2];
        }

        geometry.vertexBuffer.upload(VertexAttributeName.position, attribute);
        geometry.computeNormals();
        scene.addChild(plane);
        scene.addComponent(Stats);
    }
}

new Sample_CustomGeometry().run();
