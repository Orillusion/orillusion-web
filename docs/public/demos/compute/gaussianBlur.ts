import {
    WebGPUDescriptorCreator,
    PostProcessingComponent,
    BoxGeometry,
    CameraUtil,
    ComputeShader,
    Engine3D,
    GPUContext,
    GPUTextureFormat,
    LitMaterial,
    HoverCameraController,
    MeshRenderer,
    Object3D,
    PostBase,
    RendererPassState,
    Scene3D,
    UniformGPUBuffer,
    Vector3,
    VirtualTexture,
    webGPUContext,
    RTFrame,
    RTDescriptor,
    AtmosphericComponent,
    View3D
} from '@orillusion/core'
import * as dat from 'dat.gui'

export class Demo_GaussianBlur {
    async run() {
        await Engine3D.init({
            canvasConfig: {
                devicePixelRatio: 1
            }
        })

        let scene = new Scene3D()
        await this.initScene(scene)

        let mainCamera = CameraUtil.createCamera3DObject(scene)
        mainCamera.perspective(60, Engine3D.aspect, 0.01, 10000.0)

        let ctl = mainCamera.object3D.addComponent(HoverCameraController)
        ctl.setCamera(45, -30, 5)

        scene.addComponent(AtmosphericComponent).sunY = 0.6

        let view = new View3D()
        view.scene = scene
        view.camera = mainCamera
        Engine3D.startRenderView(view)

        let postProcessing = scene.addComponent(PostProcessingComponent)
        postProcessing.addPost(GaussianBlurPost)
    }

    async initScene(scene: Scene3D) {
        var obj = new Object3D()
        let mr = obj.addComponent(MeshRenderer)
        mr.material = new LitMaterial()
        mr.geometry = new BoxGeometry()
        scene.addChild(obj)
    }
}

export class GaussianBlurPost extends PostBase {
    private mGaussianBlurShader: ComputeShader
    private mGaussianBlurArgs: UniformGPUBuffer
    private mRendererPassState: RendererPassState
    private mBlurResultTexture: VirtualTexture
    private mRTFrame: RTFrame

    constructor() {
        super()
    }

    private createResource() {
        let presentationSize = webGPUContext.presentationSize

        this.mBlurResultTexture = new VirtualTexture(presentationSize[0], presentationSize[1], GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING)
        this.mBlurResultTexture.name = 'gaussianBlurResultTexture'

        let descript = new RTDescriptor()
        descript.clearValue = [0, 0, 0, 1]
        descript.loadOp = `clear`
        this.mRTFrame = new RTFrame([this.mBlurResultTexture], [descript])

        this.mRendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.mRTFrame)
        this.mRendererPassState.label = 'GaussianBlur'
    }

    private createComputeShader() {
        this.mGaussianBlurArgs = new UniformGPUBuffer(28)
        this.mGaussianBlurArgs.setFloat('radius', 2)
        this.mGaussianBlurArgs.apply()

        this.mGaussianBlurShader = new ComputeShader(/* wgsl */ `
            struct GaussianBlurArgs {
                radius: f32,
                retain: vec3<f32>,
            };

            @group(0) @binding(0) var<uniform> args: GaussianBlurArgs;
            @group(0) @binding(1) var colorMap: texture_2d<f32>;
            @group(0) @binding(2) var resultTex: texture_storage_2d<rgba16float, write>;

            @compute @workgroup_size(8, 8)
            fn CsMain( @builtin(global_invocation_id) globalInvocation_id: vec3<u32>) {
                var pixelCoord = vec2<i32>(globalInvocation_id.xy);

                var value = vec4<f32>(0.0);
                var count = 0.0;
                let radius = i32(args.radius);
                for (var i = -radius; i < radius; i += 1) {
                for (var j = -radius; j < radius; j += 1) {
                    var offset = vec2<i32>(i, j);
                    value += textureLoad(colorMap, pixelCoord + offset, 0);
                    count += 1.0;
                }
                }

                let result = value / count;
                textureStore(resultTex, pixelCoord, result);
            }
        `)
        this.mGaussianBlurShader.setUniformBuffer('args', this.mGaussianBlurArgs)
        this.autoSetColorTexture('colorMap', this.mGaussianBlurShader)
        this.mGaussianBlurShader.setStorageTexture(`resultTex`, this.mBlurResultTexture)

        this.mGaussianBlurShader.workerSizeX = Math.ceil(this.mBlurResultTexture.width / 8)
        this.mGaussianBlurShader.workerSizeY = Math.ceil(this.mBlurResultTexture.height / 8)
        this.mGaussianBlurShader.workerSizeZ = 1

        this.debug()
    }

    public debug() {
        const GUIHelp = new dat.GUI()
        GUIHelp.addFolder('GaussianBlur')
        GUIHelp.add(this.mGaussianBlurArgs.memoryNodes.get(`radius`), `x`, 1, 10, 1)
            .name('Blur Radius')
            .onChange(() => {
                this.mGaussianBlurArgs.apply()
            })
    }

    render(view: View3D, command: GPUCommandEncoder) {
        if (!this.mGaussianBlurShader) {
            this.createResource()
            this.createComputeShader()
        }

        this.autoSetColorTexture('colorMap', this.mGaussianBlurShader)
        GPUContext.computeCommand(command, [this.mGaussianBlurShader])
        GPUContext.lastRenderPassState = this.mRendererPassState
    }
}

new Demo_GaussianBlur().run()
