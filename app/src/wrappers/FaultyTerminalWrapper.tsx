"use client"

import FaultyTerminal from '../components/FaultyTerminal';

import "../../globals.css";

export default function FaultyTerminalBackground() {


  return (
    <div className="" style={{ 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden', 
      position: 'relative'
      }}
    >
    <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.3}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={0.9}
        chromaticAberration={0}
        dither={0}
        curvature={0.05}
        tint="#A7EF9E"
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.1}
    />
    </div>
  )
}