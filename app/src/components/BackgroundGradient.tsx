"use client"

import { GradFlow } from 'gradflow'
import {useEffect, useState} from 'react';

import "../../globals.css";

export default function BackgroundGradient() {
  const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scroll = window.scrollY;
            const progress = scrollHeight > 0 ? (scroll / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
            console.log("Scroll Progress:", scrollProgress);
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
          color1: { r: 117, g: 191, b: 254 },
          color2: { r: 244, g: 188, b: 179 },
          color3: { r: 255, g: 77, b: 0 },
          speed: 1,
          scale: scrollProgress / 100 * 2,
          type: 'linear',
          noise: 0
        }}/>
    </div>
  )
}