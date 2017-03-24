## React Shake Effect

Shake is a React component that applies a linear or axial oscillation effect to any HTML target element. The effect can be applied to any axis (x, y, z) of a target for a set duration and has the ability to be dampened. The effect is easily configured and controlled with 5 parameters such as amplitude and frequency. The effect adjusts a target's transform property to achieve the desired result without disrupting the target's original transform state. This makes possible deploying the effect to an existing HTML element without having to refactor original HTML topography or CSS treatments. The end result is an easy way to add subtle visual effects to predesigned elements or elements in need of emphasis or attention. The component targets a single child and  applies the effect via the applyShake() method. Callback properties for Ready, Start, Change, and Complete are provided.

### Features
  * Full React/Flux pattern
  * Callbacks for onStart, onReady, onChange, onComplete
  * Supports x, y, and z axis linear and radial motion
  * Supports dampening and time clipping

### Learn more
See the demo at [http://www.uismithing.com/main/wares/shake](http://www.uismithing.com/main/wares/shake).

### Repository
[https://github.com/uismithing/react-shake-effect](https://github.com/uismithing/react-shake-effect)

### Install
`npm install react-shake-effect -s`

### Deploy
`import Shake from "react-shake-effect"`
```html
<Shake id="linear-yaxis-container" ref="linearyaxis" {...linearaxisProfile}>
	<div id="shake-cardtarget-linearyaxis-container" className="shake-cardtarget"></div>
</Shake>
```