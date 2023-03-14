import {
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    ForwardRenderJob,
    UnLitMaterial,
    MeshRenderer,
    PlaneGeometry,
    BitmapTexture2D,
    Vector4,
    OrbitController,
    DirectLight,
    Color
} from "@orillusion/core";

async function demo() {
    await Engine3D.init();
    let scene = new Scene3D();
    let camera = new Object3D();
    camera.y = 10;
    camera.z = 30;
    scene.addChild(camera)
    let mainCamera = camera.addComponent(Camera3D);
    mainCamera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 10000.0);
    let oribit = camera.addComponent(OrbitController);
    oribit.autoRotate = true;

    // 添加光照
    let lightObj = new Object3D();
    lightObj.rotationX = -45;
    let light = lightObj.addComponent(DirectLight);
    light.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
    light.intensity = 1;
    scene.addChild(lightObj);

    let renderJob = new ForwardRenderJob(scene);
    Engine3D.startRender(renderJob);
    

    const imageCanvas = document.createElement( 'canvas' );
    const context = imageCanvas.getContext( '2d' ) as CanvasRenderingContext2D
    {
        imageCanvas.width = imageCanvas.height = 128;
        context.fillStyle = '#444';
        context.fillRect( 0, 0, 128, 128 );
        context.fillStyle = '#fff';
        context.fillRect( 0, 0, 64, 64 );
        context.fillRect( 64, 64, 64, 64 );
    }
    const image = imageCanvas.toDataURL('image/png');
    let texture = new BitmapTexture2D();
    texture.useMipmap = true
    await texture.load(image);
    let mat = new UnLitMaterial();
    mat.baseMap = texture;
    mat.roughness = 1;
    mat.uvTransform_1 = new Vector4(0,0, 100, 100)

    let plane = new PlaneGeometry(1000, 1000, 10, 10)
    let planeObj = new Object3D();
    let mr = planeObj.addComponent(MeshRenderer);
    mr.geometry = plane;
    mr.material = mat;
    scene.addChild(planeObj);

    let select = document.createElement('select')
    select.innerHTML = `
    <option value="true">Use MipMap</option>
    <option value="false">No MipMap</option>
    `
    select.setAttribute('style', 'position:fixed;right:5px;top:5px')
    document.body.appendChild(select)

    select.addEventListener('change', ()=>{
        texture.useMipmap = select.value === 'true'
    })
}

demo();



