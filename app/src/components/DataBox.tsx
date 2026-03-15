"use client"

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useGlitch } from 'react-powerglitch';
import { useScroll } from '../contexts/ScrollContext';

import "../styles/dataBox.css";

interface DataBoxProps {
  title?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  content: React.ReactNode;
  rootMargin?: string;
  titleSize?: string;
  subtitleSize?: string;
}

export default function DataBox({ title, icon, subtitle, content, rootMargin = "-250px 0px -250px 0px", titleSize, subtitleSize }: DataBoxProps) {
    const { ref: glitchRef, startGlitch } = useGlitch({
        playMode: 'manual',
        timing: { duration: 900, iterations: 1, easing: 'linear' },
        glitchTimeSpan: { start: 0, end: 0.75 },
        shake: { velocity: 15, amplitudeX: 0.05, amplitudeY: 0.02 },
        slice: { count: 6, velocity: 20, minHeight: 0.02, maxHeight: 0.15, hueRotate: true },
        pulse: false,
    });

    const [visible, setVisible] = useState(false);
    const hasBeenVisible = useRef(false);
    const boxRef = useRef<HTMLDivElement>(null);
    const { scrollContainerRef, scrollContainer } = useScroll();

    const combinedRef = useCallback((node: HTMLDivElement | null) => {
        boxRef.current = node;
        glitchRef(node);
    }, [glitchRef]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    hasBeenVisible.current = true;
                    startGlitch();
                } else if (hasBeenVisible.current) {
                    setVisible(false);
                    startGlitch();
                }
            },
            { threshold: 0.1, root: scrollContainer, rootMargin }
        );
        if (boxRef.current) {
            observer.observe(boxRef.current);
        }
        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, [startGlitch, scrollContainer, rootMargin]);

    return (
        <div className={`dataBox-container ${visible ? "entering" : hasBeenVisible.current ? "exiting" : ""}`} ref={combinedRef}>
            <div className="title-container">
                {icon && icon}
                <div className="title-text-container">
                        <span style={{ fontSize: titleSize }}>{title}</span>
                        <div className="subtitle" style={{ fontSize: subtitleSize }}>{subtitle}</div>
                    </div>
            </div>

            <div className="content-container">
                {content}
            </div>
        </div>
    );

}