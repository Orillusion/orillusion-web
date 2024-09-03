import { Object3D, Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, UnLitTexArrayMaterial, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import { Graphic3DMesh, Graphic3DMeshRenderer } from '@orillusion/graphic';

class Sample_GraphicMesh {
    private scene: Scene3D;
    private parts: Object3D[];
    private width: number;
    private height: number;
    private cafe: number = 47;
    private view: View3D;

    graphicMeshRenderer: Graphic3DMeshRenderer;

    constructor() {}

    async run() {
        Matrix4.maxCount = 500000;
        Matrix4.allocCount = 500000;

        await Engine3D.init({beforeRender: ()=> this.update()});

        Engine3D.setting.render.debug = true;
        Engine3D.setting.shadow.shadowBound = 5;

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);
        let sky = this.scene.addComponent(AtmosphericComponent);
        sky.enable = false;
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(30, 0, 120);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;

        Engine3D.startRenderView(this.view);
        await this.initScene();
    }

    async initScene() {
        let texts:any[] = [];
        texts.push((await Engine3D.res.loadTexture('https://cdn.orillusion.com/textures/128/star_0008.png')) as BitmapTexture2D);

        let bitmapTexture2DArray = new BitmapTexture2DArray(texts[0].width, texts[0].height, texts.length);
        bitmapTexture2DArray.setTextures(texts);

        let mat = new UnLitTexArrayMaterial();
        mat.baseMap = bitmapTexture2DArray;
        mat.name = 'LitMaterial';
        
        {
            this.width = 15;
            this.height = 15;
            let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
            this.graphicMeshRenderer = Graphic3DMesh.draw(this.scene, geometry, bitmapTexture2DArray, this.width * this.height);
            this.parts = this.graphicMeshRenderer.object3Ds;

            this.graphicMeshRenderer.material.blendMode = BlendMode.ADD;
            this.graphicMeshRenderer.material.transparent = true;
            this.graphicMeshRenderer.material.depthWriteEnabled = false;
            this.graphicMeshRenderer.material.useBillboard = true;

            for (let i = 0; i < this.width * this.height; i++) {
                const element = this.parts[i];
                this.graphicMeshRenderer.setTextureID(i, 0);
                element.transform.scaleX = 5.5;
                element.transform.scaleY = 5.5;
                element.transform.scaleZ = 5.5;
            }
        }
    }

    update(){
        if (this.parts) {
            let len = this.parts.length;
            for (let i = 0; i < len; i++) {
                const element = this.parts[i];
                let tmp = this.sphericalFibonacci(i, len);
                tmp.scaleBy(Math.sin(i + Time.frame * 0.01) * this.cafe);
                element.transform.localPosition = tmp;
            }
        }
    }

    public madfrac(A: number, B: number): number {
        return A * B - Math.floor(A * B);
    }

    public sphericalFibonacci(i: number, n: number): Vector3 {
        const PHI = Math.sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * Math.PI * this.madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = Math.sqrt(Math.max(Math.min(1.0 - cosTheta * cosTheta, 1.0), 0.0));

        return new Vector3(Math.cos(phi) * sinTheta, Math.sin(phi) * sinTheta, cosTheta);
    }
}

new Sample_GraphicMesh().run();
