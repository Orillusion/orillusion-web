import { Engine3D, View3D, Scene3D, CameraUtil, AtmosphericComponent, webGPUContext, HoverCameraController, Object3D, DirectLight, KelvinUtil, LitMaterial, MeshRenderer, PostProcessingComponent, BitmapTexture2D, GlobalFog, Color } from '@orillusion/core';
import { TerrainGeometry } from '@orillusion/effect'
import { Stats } from '@orillusion/stats'
import dat from 'dat.gui'


// An sample of custom vertex attribute of geometry
class Sample_Terrain {
    view: View3D
    post: PostProcessingComponent
    private Ori: dat.GUI | undefined
    async run() {
        Engine3D.setting.shadow.autoUpdate = true
        Engine3D.setting.shadow.updateFrameRate = 1
        Engine3D.setting.shadow.shadowBound = 500
        Engine3D.setting.shadow.shadowSize = 2048
        // Engine3D.setting.render.zPrePass = true;

        // init dat.gui
        const gui = new dat.GUI()
        gui.domElement.style.zIndex = '10'
        gui.domElement.parentElement.style.zIndex = '10'
        this.Ori = gui.addFolder('Orillusion')
        this.Ori.open()

        await Engine3D.init()
        this.view = new View3D()
        this.view.scene = new Scene3D()
        this.view.scene.addComponent(AtmosphericComponent)
        this.view.scene.addComponent(Stats)

        this.view.camera = CameraUtil.createCamera3DObject(this.view.scene)
        this.view.camera.perspective(60, webGPUContext.aspect, 1, 50000.0)
        this.view.camera.object3D.z = -15
        this.view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 10000)

        Engine3D.startRenderView(this.view)

        this.post = this.view.scene.addComponent(PostProcessingComponent)
        let fog = this.post.addPost(GlobalFog)
        fog.start = 2000
        fog.end = 0
        fog.fogHeightScale = 0.116
        fog.density = 0.094
        fog.ins = 0.1041
        fog.skyFactor = 0.35
        fog.overrideSkyFactor = 0.7

        fog.fogColor = new Color(136 / 255, 215 / 255, 236 / 255, 1)
        fog.fogHeightScale = 0.1
        fog.falloff = 0.626
        fog.scatteringExponent = 8
        fog.dirHeightLine = 6.5
        // post.addPost(TAAPost);

        this.createScene(this.view.scene)
    }

    private async createScene(scene: Scene3D) {
        {
            let sunObj = new Object3D()
            let sunLight = sunObj.addComponent(DirectLight)
            sunLight.lightColor = KelvinUtil.color_temperature_to_rgb(6553)
            sunLight.castShadow = true
            sunLight.intensity = 49
            sunObj.transform.rotationX = 50
            sunObj.transform.rotationY = 50
            // GUIUtil.renderDirLight(sunLight)
            let DirLight = this.Ori.addFolder('DirectLight')
            DirLight.add(sunLight, 'enable')
            DirLight.add(sunLight.transform, 'rotationX', 0.0, 360.0, 0.01)
            DirLight.add(sunLight.transform, 'rotationY', 0.0, 360.0, 0.01)
            DirLight.add(sunLight.transform, 'rotationZ', 0.0, 360.0, 0.01)
            DirLight.addColor(sunLight, 'lightColor')
            DirLight.add(sunLight, 'intensity', 0.0, 160.0, 0.01)
            DirLight.add(sunLight, 'indirect', 0.0, 10.0, 0.01)
            DirLight.add(sunLight, 'castShadow')
            DirLight.open()

            scene.addChild(sunObj)
        }

        //bitmap
        let bitmapTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/test01/bitmap.webp')
        let heightTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/test01/height.webp')
        // let heightTexture = await Engine3D.res.loadTexture('terrain/test01/china.png');

        // let heightTexture = await Engine3D.res.loadTexture('terrain/grass/GustNoise.png');
        let grassTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/grass/GrassThick.png')
        let gustNoiseTexture = await Engine3D.res.loadTexture('https://cdn.orillusion.com/terrain/grass/displ_noise_curl_1.png')
        let terrainSizeW = 20488
        let terrainSizeH = 20488
        let terrainGeometry: TerrainGeometry
        {
            let mat = new LitMaterial()
            terrainGeometry = new TerrainGeometry(terrainSizeW, terrainSizeH, 2000, 2000)
            terrainGeometry.setHeight(heightTexture as BitmapTexture2D, 5000)
            let floor = new Object3D()
            let mr = floor.addComponent(MeshRenderer)
            mr.geometry = terrainGeometry
            mat.baseMap = bitmapTexture
            mr.material = mat
            scene.addChild(floor)
        }

        let shadowdir = this.Ori.addFolder('shadow')
        shadowdir.add(Engine3D.setting.shadow, 'shadowBound', 0.0, 3000, 0.0001)

        let globalFog = this.post.getPost(GlobalFog)
        // GUIUtil.renderGlobalFog(globalFog)
        let fogdir = this.Ori.addFolder('GlobalFog')

        fogdir.add(GlobalFog, 'fogType', {
            Liner: 0,
            Exp: 1,
            Exp2: 2
        })
        fogdir.add(GlobalFog, 'start', -0.0, 1000.0, 0.0001)
        fogdir.add(GlobalFog, 'end', -0.0, 1000.0, 0.0001)
        fogdir.add(GlobalFog, 'fogHeightScale', 0.0001, 1.0, 0.0001)
        fogdir.add(GlobalFog, 'density', 0.0, 1.0, 0.0001)
        fogdir.add(GlobalFog, 'ins', 0.0, 5.0, 0.0001)
        fogdir.add(GlobalFog, 'skyFactor', 0.0, 1.0, 0.0001)
        fogdir.add(GlobalFog, 'skyRoughness', 0.0, 1.0, 0.0001)
        fogdir.add(GlobalFog, 'overrideSkyFactor', 0.0, 1.0, 0.0001)
        fogdir.add(GlobalFog, 'falloff', 0.0, 100.0, 0.01)
        fogdir.add(GlobalFog, 'rayLength', 0.01, 2000.0, 0.01)
        fogdir.add(GlobalFog, 'scatteringExponent', 1, 40.0, 0.001)
        fogdir.add(GlobalFog, 'dirHeightLine', 0.0, 20.0, 0.01)
        fogdir.addColor(GlobalFog, 'fogColor')
        fogdir.open()
    }
}

new Sample_Terrain().run()
