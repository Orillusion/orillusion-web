# Audio Components
Orillusion provides basic audio playback capabilities to users by encapsulating [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API):

- `AudioListener` - Virtual audio listener, used in conjunction PositionAudio or StaticAudio
- `StaticAudio` - non-positional audio，volume level does not vary depending on the position of the monitor
- `PositionAudio` - position based audio，volume varying based on the relative position of the monitor

## Static Audio
Non-positional audio source，e.g. background music, global sound effects etc.
```ts
import {AudioListener, StaticAudio} from '@orillusion/media-extention'

// A virtual listener, for static audios, can be any objects, take scene for example
let listener = scene.addComponent(AudioListener)

// create a static source audio object
let audioObj = new Object3D()
let staticAudio = audioObj.addComponent(StaticAudio)
// linked to the listener
staticAudio.setLisenter(listener)
// load source url
await staticAudio.load('https://cdn.orillusion.com/audio.ogg')
// play the sound/music, the volume does not vary depending on the position of the listener or source
staticAudio.play()
```

<Demo :height="500" src="/demos/media/static_audio.ts"></Demo>

<<< @/public/demos/media/static_audio.ts

## Position Audio
Playback of audio based on 3D spatial location via [PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode), where the direction and volume of the sound is relative to the position of the receiver and the source.


```ts
import {AudioListener, PositionAudio} from '@orillusion/media-extention'

let movingObj = new Object3D()
// add a virtual listener，usually to moving objects, e.g add to camera to simulate user position in 3D sapce
let listener = movingObj.addComponent(AudioListener)

// create a position audio object
let audioObj = new Object3D()
let positionAudio = audioObj.addComponent(PositionAudio)
// set audio physical parameters, ref to PannerNode API
positionAudio.refDistance = 10;
positionAudio.maxDistance = 100;
positionAudio.setDirectionalCone( 180, 230, 0.1 ); // coneInnerAngle, coneOuterAngle, coneOuterGain
...
// display a helper to view the ocation, direction, and behavior of an audio source
positionAudio.showHelper()

// linked to the listener
positionAudio.setLisenter(listener)
// load the source url
await positionAudio.load('https://cdn.orillusion.com/audio.ogg')

// play the audio, volume varying based on the relative position of the listener
positionAudio.play()
```

<Demo :height="500" src="/demos/media/dynamic_audio.ts"></Demo>

<<< @/public/demos/media/dynamic_audio.ts
