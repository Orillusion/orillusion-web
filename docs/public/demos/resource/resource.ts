import { Engine3D, Scene3D, Object3D, Camera3D, ForwardRenderJob, DirectLight, HoverCameraController, Color } from "@orillusion/core";

async function demo() {
	// initializa engine
	await Engine3D.init();
	// create new scene as root node
	let scene3D:Scene3D = new Scene3D();
	// create camera
	let cameraObj:Object3D = new Object3D();
	let camera = cameraObj.addComponent(Camera3D);
	// adjust camera view
	camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
	// set camera controller
	let controller = cameraObj.addComponent(HoverCameraController);
    controller.setCamera(0, -20, 15);
	// add camera node
	scene3D.addChild(cameraObj);
	// create light
	let light:Object3D = new Object3D();
	// add direct light component
	let component:DirectLight = light.addComponent(DirectLight);
	// adjust lighting
	light.rotationX = 45;
	light.rotationY = 30;
	component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
	component.intensity = 1;
	// add light object
	scene3D.addChild(light);

    let button = document.createElement('button')
    button.setAttribute('style', 'position:fixed;top:calc(50% - 20px);left:0;right:0;width:150px;padding:10px;font-size:16px;margin:auto;')
    button.innerHTML = 'Load Model'
    document.body.appendChild(button)

    button.onclick = async () => {
        button.onclick = null
        // load model
        let dragon = await Engine3D.res.loadGltf('https://cdn.orillusion.com/PBR/DragonAttenuation/DragonAttenuation.gltf', {
            onProgress: (receivedLength: number, contentLength: number, url: string) => {
                if (!url.match(/\.bin$/))
                    return
                button.innerHTML = 'Loading ' + (receivedLength / contentLength * 100).toFixed(0) + '%'
            },
            onComplete: (url: string) => {
                if (!url.match(/\.bin$/))
                    return
                button.innerHTML = 'Model Loaded!'
                setTimeout(() => {
                    button.remove()
                }, 1000)
            }
        });
        scene3D.addChild(dragon);
    }

	// create new forward rendering job
	let renderJob:ForwardRenderJob = new ForwardRenderJob(scene3D);
	// start rendering
	Engine3D.startRender(renderJob);
}

demo();