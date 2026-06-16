# Audio Components
The engine provides users with basic capabilities to load and play audio by encapsulating the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API):

- `AudioListener` - Virtual audio listener component, needs to be used in conjunction with the audio sources below
- `StaticAudio` - A position-independent audio source whose playback effect is unrelated to the Listener
- `PositionAudio` - A position-based audio source whose playback effect changes with the relative position of the Listener

## Static Audio
Plays audio independent of spatial position, such as global background music, sound effects, etc.
```ts
import {AudioListener, StaticAudio} from '@orillusion/media-extention'

// Audio listener component. Static audio can be added to any object; here scene is used as an example
let listener = scene.addComponent(AudioListener)

// Create a static audio source
let audioObj = new Object3D()
let staticAudio = audioObj.addComponent(StaticAudio)
// Set the listener
staticAudio.setLisenter(listener)
// Load the audio
await staticAudio.load('https://cdn.orillusion.com/audio.ogg')
// Play the audio; the sound effect is independent of spatial position
staticAudio.play()
```

<Demo :height="500" src="/demos/media/static_audio.ts"></Demo>

<<< @/public/demos/media/static_audio.ts

## 3D Spatial Audio
Audio playback based on 3D spatial position via [PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode). The direction and volume of the sound are related to the relative position of the listener and the audio source.
```ts
import {AudioListener, PositionAudio} from '@orillusion/media-extention'

let movingObj = new Object3D()
// Add an audio listener component, usually to a dynamically moving object, e.g. add it to the camera to simulate the user's spatial position
let listener = movingObj.addComponent(AudioListener)

// Create a spatial audio source
let audioObj = new Object3D()
let positionAudio = audioObj.addComponent(PositionAudio)
// Set the spatial parameters of the audio source; see the PannerNode API for details
positionAudio.refDistance = 10;
positionAudio.maxDistance = 100;
positionAudio.setDirectionalCone( 180, 230, 0.1 ); // coneInnerAngle, coneOuterAngle, coneOuterGain
...
// Display the spatial range of the audio
positionAudio.showHelper()

// Set the listener
positionAudio.setLisenter(listener)
// Load the audio
await positionAudio.load('https://cdn.orillusion.com/audio.ogg')

// Play the audio; the direction and volume of the sound change with the relative position of movingObj and audioObj
positionAudio.play()
```

<Demo :height="500" src="/demos/media/dynamic_audio.ts"></Demo>

<<< @/public/demos/media/dynamic_audio.ts
