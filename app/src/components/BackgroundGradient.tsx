"use client"

import { GradFlow } from 'gradflow'
import "../../globals.css";
import { config } from 'process';

export default function BackgroundGradient() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <GradFlow config={{
          color1: { r: 9, g: 24, b: 51 },
          color2: { r: 19, g: 62, b: 124 },
          color3: { r: 10, g: 20, b: 39 },
          speed: 1,
          scale: 1.3,
          type: 'stripe',
          noise: 0
        }}/>
    </div>
  )
}