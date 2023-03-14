import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  ForwardRenderJob,
  LitMaterial,
  BoxGeometry,
  MeshRenderer,
  DirectLight,
  HoverCameraController,
  Color,
  ComponentBase
} from "@orillusion/core";

class RotateScript extends ComponentBase {
  public update() {
    // update lifecycle codes
    this.object3D.rotationY += 1;
  }
}

async function demo() {
  // initializa engine
  await Engine3D.init({});
  // create new scene as root node
  let scene3D = new Scene3D();
    
  // create camera
  let cameraObj = new Object3D();
  let camera = cameraObj.addComponent(Camera3D);
  // adjust camera view
  camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
  // set camera controller
  cameraObj.addComponent(HoverCameraController);
  // add camera node
  scene3D.addChild(cameraObj);

  // create light
  let light: Object3D = new Object3D();
  // add direct light component
  let component = light.addComponent(DirectLight);
  // adjust lighting
  component.lightColor = new Color(1.0, 1.0, 1.0, 1.0);
  component.intensity = 1;
  // add light object
  scene3D.addChild(light);

  // create new object
  const obj= new Object3D();
  // add MeshRenderer
  let mr = obj.addComponent(MeshRenderer);
  // set geometry
  mr.geometry = new BoxGeometry(5, 5, 5);
  // set material
  mr.material = new LitMaterial();
  
  // add script
  obj.addComponent(RotateScript)

  // add object
  scene3D.addChild(obj);
  
  // create new forward rendering job
  let renderJob = new ForwardRenderJob(scene3D);
  // start rendering
  Engine3D.startRender(renderJob);
}

demo();
