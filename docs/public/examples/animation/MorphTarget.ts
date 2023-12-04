import { SkinnedMeshRenderer2, AtmosphericComponent, CameraUtil, DirectLight, Engine3D, HoverCameraController, KelvinUtil, Matrix4, MeshRenderer, MorphTargetBlender, Object3D, PlaneGeometry, Quaternion, Scene3D, Vector3, View3D, webGPUContext } from '@orillusion/core';
import { Stats } from '@orillusion/stats';
import dat from 'dat.gui';
// @ts-ignore, import es from url
import { FaceLandmarker, FilesetResolver } from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0';

// Sample of control morph target animation
class Sample_MorphTarget {
    lightObj3D: Object3D;
    scene: Scene3D;
    influenceData: { [key: string]: number } = {};
    htmlVideo: HTMLVideoElement;
    blendShapeComponent: MorphTargetBlender;
    targetRenderers: { [p: string]: SkinnedMeshRenderer2[] };
    faceLandmarker: FaceLandmarker;
    filesetResolver: FilesetResolver;
    gui: dat.GUI;
    model: Object3D;
    // temp values
    _mat4: Matrix4;
    _quat: Quaternion;
    _quat2: Quaternion;
    async run() {
        Engine3D.setting.shadow.shadowBound = 100;
        Engine3D.setting.shadow.autoUpdate = true;
        Engine3D.setting.shadow.updateFrameRate = 1;

        await Engine3D.init({
            renderLoop: () => this.detectFace()
        });

        this.scene = new Scene3D();
        this.scene.addComponent(Stats);
        let sky = this.scene.addComponent(AtmosphericComponent);

        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, webGPUContext.aspect, 1, 5000.0);
        camera.object3D.addComponent(HoverCameraController).setCamera(0, 0, 150);

        this.initDirectLight();
        sky.relativeTransform = this.lightObj3D.transform;

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;

        await this.initMorphModel();
        Engine3D.startRenderView(view);
    }

    /******** light *******/
    initDirectLight() {
        this.lightObj3D = new Object3D();
        this.lightObj3D.rotationX = 21;
        this.lightObj3D.rotationY = 108;
        this.lightObj3D.rotationZ = 10;

        let directLight = this.lightObj3D.addComponent(DirectLight);
        directLight.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
        directLight.castShadow = true;
        directLight.intensity = 25;
        this.scene.addChild(this.lightObj3D);
    }

    private async initMorphModel() {
        const gui = new dat.GUI();

        // load lion model
        let model = (this.model = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/glb/lion.glb'));
        model.y = -80.0;
        model.x = -30.0;
        this.scene.addChild(model);

        let folder = (this.gui = gui.addFolder('morph controller'));
        // register MorphTargetBlender component
        this.blendShapeComponent = model.addComponent(MorphTargetBlender);
        this.targetRenderers = this.blendShapeComponent.cloneMorphRenderers();

        // bind influenceData to gui

        for (let key in this.targetRenderers) {
            this.influenceData[key] = 0.0;
            folder.add(this.influenceData, key, 0, 1, 0.01).onChange((v) => {
                this.influenceData[key] = v;
                let list = this.blendShapeComponent.getMorphRenderersByKey(key);
                for (let renderer of list) {
                    renderer.setMorphInfluence(key, v);
                }
                console.log(this.targetRenderers);
            });
        }
        // add capture camera button
        this.gui
            .add(
                {
                    capture: async () => {
                        await this.setupCapture();
                        await this.setupPredict();
                        await this.detectFace();
                    }
                },
                'capture'
            )
            .name('Capture from Camera');
        folder.open();
    }
    // create a video stream from camera
    async setupCapture() {
        try {
            this.htmlVideo = document.createElement('video');
            this.htmlVideo.height = 200;
            this.htmlVideo.setAttribute('style', 'position:fixed;left:0;bottom:0;z-index:10');
            document.body.appendChild(this.htmlVideo);

            let stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.htmlVideo.srcObject = stream;
            this.htmlVideo.play();
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    }
    // load mediapipe model
    async setupPredict() {
        this.filesetResolver = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm');
        this.faceLandmarker = await FaceLandmarker.createFromOptions(this.filesetResolver, {
            baseOptions: {
                modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
                delegate: 'GPU'
            },
            outputFaceBlendshapes: true,
            outputFacialTransformationMatrixes: true,
            runningMode: 'VIDEO',
            numFaces: 1
        });

        // temp vals
        this._mat4 = new Matrix4();
        this._quat = new Quaternion();
        this._quat2 = new Quaternion();
    }
    // detect face
    async detectFace() {
        if (!this.faceLandmarker) return;
        const results = await this.faceLandmarker.detectForVideo(this.htmlVideo, Date.now());
        this.face2Transform(results.facialTransformationMatrixes);
        this.face2Morph(results.faceBlendshapes);
    }
    // morph target
    async face2Morph(faceBlendshapes: any[]) {
        if (faceBlendshapes.length > 0) {
            faceBlendshapes = faceBlendshapes[0].categories;
            let Lefteye = faceBlendshapes[9].score; // eyeBlinkLeft
            let Righteye = faceBlendshapes[10].score; // eyeBlinkRight
            let Mouth = faceBlendshapes[25].score; // jawOpen

            // multiply scale to make it more visible
            this.influenceData['mouth'] = Mouth * 2;
            this.influenceData['leftEye'] = Lefteye * 2;
            this.influenceData['rightEye'] = Righteye * 2;
            this.influenceData['tongue'] = Mouth * 2;
            // set morph
            for (let key in this.targetRenderers) {
                let list = this.blendShapeComponent.getMorphRenderersByKey(key);
                list[0].setMorphInfluence(key, this.influenceData[key]);
            }
            // update gui
            this.gui.updateDisplay();
        }
    }
    // apply transform
    async face2Transform(facialTransformationMatrixes: [{ data: Float32Array }]) {
        if (facialTransformationMatrixes[0]) {
            this._mat4.rawData.set(facialTransformationMatrixes[0].data);
            this._quat.fromMatrix(this._mat4);
            // Interpolate between quat1 and quat2, make movment smoother
            this._quat2.lerp(this._quat2, this._quat, 0.45);
            // then update model quaternion
            this.model.localQuaternion = this._quat2;
        }
    }
}

new Sample_MorphTarget().run();
