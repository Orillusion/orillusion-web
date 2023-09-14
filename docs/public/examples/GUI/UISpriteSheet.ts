import { AtmosphericComponent, BillboardType, CameraUtil, Color, ComponentBase, DirectLight, Engine3D, GUIQuad, GUISprite, HoverCameraController, ImageType, KelvinUtil, Object3D, Object3DUtil, Scene3D, UITransform, View3D, WorldPanel } from "@orillusion/core";
import {Stats} from "@orillusion/stats";
import dat from "dat.gui";

class UIComponentBase extends ComponentBase {
    protected _uiTransform: UITransform;
    protected _visible: boolean = true;

    public destroy() {
        this._uiTransform.setNeedUpdateUIPanel();
        super.destroy();
    }

    public get uiTransform() {
        return this._uiTransform;
    }

    public get visible(): boolean {
        return this._visible;
    }

    public set visible(value: boolean) {
        if (this._visible != value) {
            this._visible = value;
            this.onUIComponentVisible?.(this._visible);
        }
    }

    init(param?: any) {
        super.init?.(param);
        this._uiTransform = this.object3D.getOrAddComponent(UITransform);
        this._uiTransform.setNeedUpdateUIPanel();
    }

    protected onUITransformVisible?(visible: boolean): void;

    protected onUIComponentVisible?(visible: boolean): void;

    protected onTransformResize?(): void;

    public copyComponent(from: this): this {
        this.visible = from.visible;
        return this;
    }
}

class UIRenderAble extends UIComponentBase {
    protected _mainQuads: GUIQuad[];
    protected _shadowRender: UIRenderAble;
    protected _shadowSource: UIRenderAble;
    public isUIShadow?: boolean;
    public isShadowless?: boolean;//no shadow
    public needUpdateShadow: boolean;

    init(param?: any): void {
        super.init?.(param);
        this._mainQuads = [];
    }

    public destroy() {
        this.detachQuads();
        this._shadowRender?.setShadowSource(null);
        this._shadowSource?.setShadowRenderer(null);
        super.destroy();
        this._shadowRender = null;
        this._shadowSource = null;
    }

    public start(): void {
        super.start?.();
        if (this.isUIShadow) {
            this.autoBindShadow(null, this);
        } else if (!this.isShadowless) {
            this.autoBindShadow(this, null);
        }
        this.setShadowDirty();
    }

    protected setShadowDirty(): void {
        this._shadowRender && (this._shadowRender.needUpdateShadow = true);
    }

    public get mainQuads() {
        return this._mainQuads;
    }

    public setShadowRenderer(value: UIRenderAble) {
        this._shadowRender = value;
    }

    public setShadowSource(value: UIRenderAble) {
        this._shadowSource = value;
    }

    public getShadowRender(): UIRenderAble {
        return this._shadowRender;
    }

    protected autoBindShadow(source: UIRenderAble, shadow: UIRenderAble): boolean {
        let values = this.object3D.components.values();
        if (!source) {
            for (let i of values) {
                let item = i as any as UIRenderAble;
                if (item.isShadowless || item.isUIShadow) continue;
                if (item.mainQuads) {
                    source = item;
                    break;
                }
            }
        }

        if (!shadow) {
            for (let i of values) {
                let item = i as any as UIRenderAble;
                if (item.isUIShadow && item.mainQuads) {
                    shadow = item;
                    break;
                }
            }
        }

        if (source && shadow) {
            source.setShadowRenderer(shadow);
            shadow.setShadowSource(source);
            return true;
        }
        return false;
    }

    protected recycleQuad(quad?: GUIQuad): GUIQuad {
        if (quad && this._mainQuads) {
            let index = this._mainQuads.indexOf(quad);
            if (index >= 0) {
                this._mainQuads.splice(index, 1);
                GUIQuad.recycleQuad(quad);
            } else {
                quad = null;
            }
        }
        return quad;
    }

    protected attachQuad(quad: GUIQuad): this {
        this._mainQuads && this._mainQuads.push(quad);
        return this;
    }

    protected detachQuads(): this {
        if (this._mainQuads) {
            while (this._mainQuads.length > 0) {
                let quad = this._mainQuads.shift();
                this.recycleQuad(quad);
            }
        }

        return this;
    }

    public copyComponent(from: this): this {
        super.copyComponent(from);
        this.isUIShadow = from.isUIShadow;
        this.isShadowless = from.isShadowless;
        return this;
    }
}

class UIImage extends UIRenderAble {

    init(param?: any): void {
        super.init?.(param);
        this.attachQuad(GUIQuad.spawnQuad());
        this.sprite = Engine3D.res.defaultGUISprite;
    }

    public cloneTo(obj: Object3D) {
        let component = obj.getOrAddComponent(UIImage);
        component.copyComponent(this);
    }

    public copyComponent(from: this): this {
        super.copyComponent(from);
        this.sprite = from.sprite;
        this.color = from.color;
        this.imageType = from.imageType;
        return this;
    }

    public set sprite(value: GUISprite) {
        value ||= Engine3D.res.defaultGUISprite;
        for (let quad of this._mainQuads) {
            quad.sprite = value;
            quad.setSize(this._uiTransform.width, this._uiTransform.height);
        }
        this.setShadowDirty();
    }

    protected onTransformResize(): void {
        this.applyTransformSize();
    }

    private applyTransformSize(): void {
        for (let quad of this._mainQuads) {
            quad.setSize(this._uiTransform.width, this._uiTransform.height);
        }
        this.setShadowDirty();
    }

    public get sprite(): GUISprite {
        return this._mainQuads[0].sprite;
    }

    protected onUIComponentVisible(visible: boolean): void {
        this.applyComponentVisible();
    }

    protected onUITransformVisible(visible: boolean): void {
        this.applyComponentVisible();
    }

    private applyComponentVisible(): void {
        let isHidden = !this._visible || !this._uiTransform.globalVisible;
        for (let item of this._mainQuads) {
            item.visible = !isHidden;
        }
        this.setShadowDirty();
    }

    public get color() {
        return this._mainQuads[0].color;
    }

    public set color(value: Color) {
        for (let item of this._mainQuads) {
            item.color = value;
        }
        this.setShadowDirty();
    }

    public get imageType() {
        return this._mainQuads[0].imageType;
    }

    public set imageType(value: ImageType) {
        for (let item of this._mainQuads) {
            item.imageType = value;
        }
        this.setShadowDirty();
    }
}


class Sample_UISpriteSheet {

    img: UIImage;
    scene: Scene3D;
    Ori: dat.GUI;

    async run() {
        Engine3D.setting.shadow.autoUpdate = true;

        // init dat.gui
        const gui = new dat.GUI();
        this.Ori = gui.addFolder("Orillusion");
        this.Ori.open();

        await Engine3D.init({
            renderLoop: () => {
                this.renderUpdate();
            }
        });
        // init Scene3D
        this.scene = new Scene3D()
        this.scene.exposure = 1
        this.scene.addComponent(Stats)

        // init sky
        let atmosphericSky: AtmosphericComponent
        atmosphericSky = this.scene.addComponent(AtmosphericComponent)

        // init Camera3D
        let camera = CameraUtil.createCamera3DObject(this.scene)
        camera.perspective(60, Engine3D.aspect, 1, 5000)

        // init Camera Controller
        let hoverCtrl = camera.object3D.addComponent(HoverCameraController)
        hoverCtrl.setCamera(-30, -15, 100)

        // init View3D
        let view = new View3D()
        view.scene = this.scene
        view.camera = camera

        // create direction light
        let lightObj3D = new Object3D()
        lightObj3D.x = 0
        lightObj3D.y = 30
        lightObj3D.z = -40
        lightObj3D.rotationX = 20
        lightObj3D.rotationY = 160
        lightObj3D.rotationZ = 0

        let light = lightObj3D.addComponent(DirectLight)
        light.lightColor = KelvinUtil.color_temperature_to_rgb(5355)
        light.castShadow = true
        light.intensity = 30

        this.scene.addChild(light.object3D)

        // relative light to sky
        atmosphericSky.relativeTransform = light.transform

        Engine3D.startRenderView(view)


        await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/Sheet_atlas.json');

        // enable ui canvas at index 0
        let canvas = view.enableUICanvas();

        //create UI root
        let panelRoot: Object3D = new Object3D();
        panelRoot.scaleX = panelRoot.scaleY = panelRoot.scaleZ = 0.4;
        //create panel
        let panel = panelRoot.addComponent(WorldPanel);
        panel.billboard = BillboardType.BillboardY;
        canvas.addChild(panel.object3D);

        //
        let quad = new Object3D();
        panelRoot.addChild(quad);

        this.img = quad.addComponent(UIImage);
        this.img.sprite = Engine3D.res.getGUISprite('00065');
        this.img.uiTransform.resize(256, 256);

        // create floor
        let floor = Object3DUtil.GetSingleCube(50, 5, 50, 0.5, 0.5, 0.5);
        this.scene.addChild(floor);
        floor.y = -20;

        let box = Object3DUtil.GetSingleCube(2, 80, 2, 0.5, 0.5, 0.5);
        this.scene.addChild(box);
    }

    private frame: number = 10;

    renderUpdate() {
        if (this.img) {
            this.frame++;
            this.loopTextureSheet();
        }
    }

    private lastIndex: number = -1;
    private frameStart = 65;//65~77
    private frameCount = 13;

    loopTextureSheet(): void {
        let newIndex = Math.floor(this.frame * 0.2) % this.frameCount;
        if (newIndex != this.lastIndex) {
            this.lastIndex = newIndex;
            let frameKey = (this.lastIndex + this.frameStart).toString().padStart(5, '0');
            this.img.sprite = Engine3D.res.getGUISprite(frameKey);
        }
    }
}

new Sample_UISpriteSheet().run();
