import { Object3D, Scene3D, Engine3D, AtmosphericComponent, CameraUtil, HoverCameraController, View3D, DirectLight, KelvinUtil, BitmapTexture2DArray, BitmapTexture2D, Matrix4, Color, LineJoin, Vector4, Object3DUtil, AxisObject } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import { Shape3DMaker, Shape3D, CircleArcType, CircleShape3D } from '@orillusion/graphic';
import * as dat from 'dat.gui';

/**
 * This example shows how to use Shape2D to draw various different paths on xz plane.
 *
 * @export
 * @class Sample_Shape3DPath2D
 */
class Sample_Shape3DPath2D {
    lightObj3D: Object3D;
    scene: Scene3D;
    view: View3D;

    async run() {
        Matrix4.maxCount = 10000;
        Matrix4.allocCount = 10000;

        await Engine3D.init({ beforeRender: () => this.update() });

        Engine3D.setting.render.debug = true;
        Engine3D.setting.shadow.shadowBound = 5;

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);
        let sky = this.scene.addComponent(AtmosphericComponent);
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000.0);

        camera.object3D.addComponent(HoverCameraController).setCamera(0, -60, 60);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = camera;

        Engine3D.startRenderView(this.view);

        await this.initScene();

        this.scene.addChild(new AxisObject(10, 0.1));

        sky.relativeTransform = this.lightObj3D.transform;
    }

    async initScene() {
        {
            /******** light *******/
            this.lightObj3D = new Object3D();
            this.lightObj3D.rotationX = 21;
            this.lightObj3D.rotationY = 108;
            this.lightObj3D.rotationZ = 10;
            let directLight = this.lightObj3D.addComponent(DirectLight);
            directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            directLight.castShadow = false;
            directLight.intensity = 20;
            this.scene.addChild(this.lightObj3D);
            await this.addNode();
        }
        {
            let floor = Object3DUtil.GetSingleCube(100, 0.1, 100, 0.2, 0.2, 0.2);
            floor.y = -0.2;
            this.scene.addChild(floor);
        }
    }

    private maker: Shape3DMaker;
    private async addNode() {
        let textureArray = [];
        textureArray.push((await Engine3D.res.loadTexture('https://cdn.orillusion.com/textures/128/vein_0013.png')) as BitmapTexture2D);
        textureArray.push((await Engine3D.res.loadTexture('https://cdn.orillusion.com/textures/128/vein_0014.png')) as BitmapTexture2D);

        let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);
        bitmapTexture2DArray.setTextures(textureArray);

        this.maker = Shape3DMaker.makeRenderer(`path`, bitmapTexture2DArray, this.scene);
        this.maker.renderer.material.doubleSide = true;

        this.createPath();
    }

    private createPath(): Shape3D {
        let circle = this.maker.arc(20, 0, 360, undefined);
        circle.lineWidth = 2;
        circle.segment = 40;
        circle.fill = true;
        circle.line = true;
        circle.isClosed = false;
        circle.lineUVRect.z = 0.5;
        circle.lineUVRect.w = 0.5;
        circle.fillUVRect.z = 0.1;
        circle.fillUVRect.w = 0.1;

        circle.fillTextureID = 0;
        circle.lineTextureID = 1;

        circle.lineColor = Color.random();
        circle.uvSpeed = new Vector4(0, 0, 0, Math.random() - 0.5).multiplyScalar(0.005);

        const GUIHelp = new dat.GUI();
        this.renderCircle(GUIHelp, circle, 5, false);
        return circle;
    }

    update() {}

    renderCircle(GUIHelp: dat.GUI, shape: CircleShape3D, maxSize: number, open: boolean = true, name?: string) {
        name ||= 'Circle3D_' + shape.shapeIndex;
        GUIHelp.addFolder(name);
        GUIHelp.add(shape, 'radius', 0, maxSize, 0.1);
        GUIHelp.add(shape, 'segment', 0, 100, 1);
        GUIHelp.add(shape, 'startAngle', 0, 360, 1);
        GUIHelp.add(shape, 'endAngle', 0, 360, 1);
        let arcType = {};
        arcType['sector'] = CircleArcType.Sector;
        arcType['moon'] = CircleArcType.Moon;
        GUIHelp.add({ arcType: shape.arcType }, 'arcType', arcType).onChange((v) => {
            shape.arcType = Number.parseInt(v);
        });

        this.renderCommonShape3D(GUIHelp, shape, maxSize);
    }

    renderCommonShape3D(GUIHelp: dat.GUI, shape: Shape3D, maxSize: number, uvMin: number = 0.01, uvMax: number = 1.0) {
        GUIHelp.add(shape, 'line');
        GUIHelp.add(shape, 'fill');
        GUIHelp.add(shape, 'isClosed');
        GUIHelp.add(shape, 'lineWidth', 0, maxSize, 0.01);
        GUIHelp.add(shape, 'fillRotation', -Math.PI, Math.PI, 0.01);

        this.renderVec4(GUIHelp, 'FillUVRect.', shape, 'fillUVRect', 0, 10, 0.01);
        this.renderVec4(GUIHelp, 'LineUVRect.', shape, 'lineUVRect', 0, 10, 0.01);
        this.renderVec4(GUIHelp, 'UVSpeed.', shape, 'uvSpeed', -0.01, 0.01, 0.0001);

        GUIHelp.add(shape, 'lineTextureID', 0, 9, 1);
        GUIHelp.add(shape, 'fillTextureID', 0, 9, 1);
    }

    renderVec4(GUIHelp: dat.GUI, label: string, target: Object, key: string, min: number, max: number, step: number = 0.01) {
        let components = ['x', 'y', 'z', 'w'];
        let data = {} as any;
        let vec4: Vector4 = target[key];
        for (let component of components) {
            data[label + component] = vec4[component];
            GUIHelp.add(data, label + component, min, max, step).onChange((v) => {
                vec4[component] = v;
                target[key] = vec4;
            });
        }
    }
}

new Sample_Shape3DPath2D().run();
