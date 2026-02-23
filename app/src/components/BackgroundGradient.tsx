"use client"

import { GradFlow } from 'gradflow'
import "../../globals.css";
import { config } from 'process';

export default function BackgroundGradient() {
  return (
    <GradFlow config={{
        color1: { r: 9, g: 24, b: 51 },
        color2: { r: 19, g: 62, b: 124 },
        color3: { r: 113, g: 28, b: 145 },
        speed: 0,
        scale: 1.3,
        type: 'stripe',
        noise: 0
      }}/>
  )
}