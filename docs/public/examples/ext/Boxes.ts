import dat from "dat.gui";
import {Stats} from "@orillusion/stats";
import { Engine3D, View3D, Scene3D, CameraUtil, AtmosphericComponent, webGPUContext, HoverCameraController, Object3D, DirectLight, KelvinUtil, PlaneGeometry, VertexAttributeName, LitMaterial, MeshRenderer, Vector4, Vector3, Matrix3, PostProcessingComponent, TAAPost, BitmapTexture2D, GlobalFog, Color, BoxGeometry, UnLitMaterial, PointLight, GTAOPost, HDRBloomPost } from "@orillusion/core";

// An sample of custom vertex attribute of geometry
class Sample_Boxes {
    view: View3D;
    post: PostProcessingComponent;
    private Ori: dat.GUI | undefined;
    
    async run() {
        Engine3D.setting.shadow.enable = true;
        Engine3D.setting.shadow.updateFrameRate = 1;
        Engine3D.setting.shadow.shadowBound = 500;
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.shadowSize = 1024;
        // Engine3D.setting.render.zPrePass = true;
            
        const gui = new dat.GUI();
        gui.domElement.style.zIndex = "10";
        gui.domElement.parentElement.style.zIndex = "10";
        
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        await Engine3D.init();
        this.view = new View3D();
        this.view.scene = new Scene3D();
        this.view.scene.addComponent(AtmosphericComponent);

        this.view.camera = CameraUtil.createCamera3DObject(this.view.scene);
        this.view.camera.enableCSM = true;
        this.view.camera.perspective(60, webGPUContext.aspect, 1, 50000.0);
        this.view.camera.object3D.z = -15;
        this.view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 1000);

        Engine3D.startRenderView(this.view);

        this.post = this.view.scene.addComponent(PostProcessingComponent);
        this.post.addPost(GTAOPost);
        this.post.addPost(HDRBloomPost);
        let fog = this.post.addPost(GlobalFog);
        fog.start = 91.0862;
        fog.end = 487.5528;
        fog.fogHeightScale = 0.0141;
        fog.density = 0.2343;
        fog.ins = 0.1041;
        fog.skyFactor = 0.5316;
        fog.overrideSkyFactor = 0.025;

        fog.fogColor = new Color(136 / 255, 215 / 255, 236 / 255, 1);
        fog.fogHeightScale = 0.1;
        fog.falloff = 2.5;
        fog.scatteringExponent = 7.196;
        fog.dirHeightLine = 6.5;

        let Fogdir = this.Ori.addFolder("GlobalFog");
        Fogdir.add(fog, 'start', -0.0, 1000.0, 0.0001);
        Fogdir.add(fog, 'end', -0.0, 1000.0, 0.0001);
        Fogdir.add(fog, 'fogHeightScale', 0.0001, 1.0, 0.0001);
        Fogdir.add(fog, 'density', 0.0, 1.0, 0.0001);
        Fogdir.add(fog, 'ins', 0.0, 5.0, 0.0001);
        Fogdir.add(fog, 'skyFactor', 0.0, 1.0, 0.0001);
        Fogdir.add(fog, 'skyRoughness', 0.0, 1.0, 0.0001);
        Fogdir.add(fog, 'overrideSkyFactor', 0.0, 1.0, 0.0001);
        Fogdir.add(fog, 'falloff', 0.0, 100.0, 0.01);
        Fogdir.add(fog, 'rayLength', 0.01, 2000.0, 0.01);
        Fogdir.add(fog, 'scatteringExponent', 1, 40.0, 0.001);
        Fogdir.add(fog, 'dirHeightLine', 0.0, 20.0, 0.01);
        Fogdir.addColor(fog, 'fogColor');
        Fogdir.open();

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
            
            let lightdir = this.Ori.addFolder("DirectLight");
            lightdir.add(sunLight, 'enable');
            lightdir.add(sunLight.transform, 'rotationX', 0.0, 360.0, 0.01);
            lightdir.add(sunLight.transform, 'rotationY', 0.0, 360.0, 0.01);
            lightdir.add(sunLight.transform, 'rotationZ', 0.0, 360.0, 0.01);
            lightdir.addColor(sunLight, 'lightColor');
            lightdir.add(sunLight, 'intensity', 0.0, 300.0, 0.01);
            lightdir.add(sunLight, 'indirect', 0.0, 1.0, 0.01);
            lightdir.add(sunLight, 'castShadow');
            lightdir.open();
            
            scene.addChild(sunObj);
        }

        {
            let geometry = new BoxGeometry(5, 200, 5);
            let litMaterial = new LitMaterial();
            // let litMaterial = new UnLitMaterial();
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

        {
            // for (let j = 0; j < 100; j++) {
            //     const lightObj = new Object3D();;
            //     let pointLight = lightObj.addComponent(PointLight);
            //     pointLight.castShadow = false;
            //     lightObj.transform.x = Math.random() * 100 * 10 - 100 * 10 * 0.5;
            //     lightObj.transform.y = 15;
            //     lightObj.transform.z = Math.random() * 100 * 10 - 100 * 10 * 0.5;
            //     pointLight.range = 100;
            //     pointLight.intensity = 60;
            //     scene.addChild(sunLightObj);
            // }
        }


        // let globalFog = this.post.getPost(GlobalFog);
        // GUIUtil.renderGlobalFog(globalFog);
    }

}

new Sample_Boxes().run();