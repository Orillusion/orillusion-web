import { Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, Object3D, DirectLight, KelvinUtil, MeshRenderer, UnLitMaterial, PlaneGeometry, LitMaterial, Color, BoxGeometry } from "@orillusion/core";
import dat from 'dat.gui'


class Sample_ChangeMaterial {
    scene: Scene3D;
    lightObj: Object3D;
    private Ori: dat.GUI | undefined
    async run() {
        await Engine3D.init();

        Engine3D.setting.material.materialChannelDebug = true;
        Engine3D.setting.shadow.shadowBound = 5;
        Engine3D.setting.render.postProcessing.bloom = {
            enable: true,
            blurX: 4,
            blurY: 4,
            luminosityThreshold: 0.8,
            strength: 0.86,
            radius: 4,
            debug: false
        };

        this.scene = new Scene3D();
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 0.01, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(25, -25, 200);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        Engine3D.startRenderView(view);

        await this.initScene();
        sky.relativeTransform = this.lightObj.transform;
    }

    async initScene() {
        /******** sky *******/
        {
            this.scene.exposure = 1;
            this.scene.roughness = 0.0;
        }
        /******** light *******/
        {
            let lightObj = this.lightObj = new Object3D();
            lightObj.rotationX = 57;
            lightObj.rotationY = 347;
            lightObj.rotationZ = 0;

            let directLight = lightObj.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = true;
            directLight.intensity = 6;
            this.scene.addChild(lightObj);
        }

        {
            // add floor
            let floor = new Object3D();
            let material = new LitMaterial();
            material.doubleSide = true;
            material.baseMap = await Engine3D.res.loadTexture("https://cdn.orillusion.com/textures/diffuse.jpg");

            let renderer = floor.addComponent(MeshRenderer);
            renderer.material = material;
            renderer.geometry = new PlaneGeometry(200, 200, 1, 1);

            floor.y = -10;
            this.scene.addChild(floor);
        }

        {
            let tex1 = await Engine3D.res.loadTexture("https://cdn.orillusion.com/textures/cell.png");
            let tex2 = await Engine3D.res.loadTexture("https://cdn.orillusion.com/textures/grid.jpg");
            let tex3 = await Engine3D.res.loadTexture("https://cdn.orillusion.com/textures/KB3D_NTT_Ads_basecolor.png");

            let mat1 = new LitMaterial();
            let mat2 = new LitMaterial();
            let mat3 = new LitMaterial();

            mat1.baseMap = tex1;
            mat2.baseMap = tex2;
            mat3.baseMap = tex3;

            let obj = new Object3D();
            let mr = obj.addComponent(MeshRenderer);
            mr.geometry = new BoxGeometry(100, 100, 100);
            mr.material = mat1;
            this.scene.addChild(obj);

            const gui = new dat.GUI()
            gui.domElement.style.zIndex = '10'
            gui.domElement.parentElement.style.zIndex = '10'

            this.Ori = gui.addFolder('Orillusion')
            this.Ori.open()
            
            var button_add1 = {
                change_mat1: () => {
                    mr.material = mat1;
                }
            }
            var button_add2 = {
                change_mat2: () => {
                    mr.material = mat2;
                }
            }
            var button_add3 = {
                change_mat3: () => {
                    mr.material = mat3;
                }
            }
            this.Ori.add(button_add1, 'change_mat1')
            this.Ori.add(button_add2, 'change_mat2')
            this.Ori.add(button_add3, 'change_mat3')

        }
    }

}

new Sample_ChangeMaterial().run();