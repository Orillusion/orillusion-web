import { Engine3D, Scene3D, Vector3, Object3D, Camera3D, ForwardRenderJob, LitMaterial, BoxGeometry, MeshRenderer } from "@orillusion/core";

export default class CameraType {
    cameraObj: Object3D;
    camera: Camera3D;
    scene: Scene3D;

    constructor() { }

    async run() {
        console.log('start demo');
        await Engine3D.init({});
        await this.initScene();
        await this.initCamera();
        await this.createBoxes();

        let renderJob = new ForwardRenderJob(this.scene);
        Engine3D.startRender(renderJob);

        this.addGui();
    }

    async initScene() {
        this.scene = new Scene3D();
    }

    async initCamera() {
        this.cameraObj = new Object3D();
        this.camera = this.cameraObj.addComponent(Camera3D)
        this.camera.lookAt(new Vector3(0, 0, -350), new Vector3(0, 0, 0));
        this.scene.addChild(this.cameraObj);
        this.perspective();
    }

    async orthoOffCenter() {
        this.camera.orthoOffCenter(-window.innerWidth / 4, window.innerWidth / 4, -window.innerHeight / 4, window.innerHeight / 4, 1, 5000.0);
    }

    async perspective() {
        this.camera.perspective(60, window.innerWidth / window.innerHeight, 1, 10000.0);
    }

    async createBox(name: string) {
        let obj: Object3D = new Object3D();
        obj.name = name;
        // 为对象添 MeshRenderer
        let mr: MeshRenderer = obj.addComponent(MeshRenderer);
        // 设置几何体
        mr.geometry = new BoxGeometry(50, 50, 50);
        // 设置材质
        mr.material = new LitMaterial();
        return obj;
    }

    async createBoxes() {
        for (let i = -1; i < 2; ++i) {
            let obj = await this.createBox("cube_" + i);

            obj.x = 0;
            obj.y = i * -60;
            obj.z = i * -60;

            this.scene.addChild(obj);
        }
    }

    async addGui() {
        let select = document.createElement('select')
        select.innerHTML = `
        <option value="perspective">Perspective</option>
        <option value="ortho">Orthographic</option>
        `
        select.setAttribute('style', 'position:fixed;right:5px;top:5px')
        document.body.appendChild(select)

        select.addEventListener('change', ()=>{
            if(select.value === 'perspective')
                this.perspective()
            else
                this.orthoOffCenter()
        })
    }

}
new CameraType().run();

