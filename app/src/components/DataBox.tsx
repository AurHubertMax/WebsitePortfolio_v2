"use client"

import React, { useRef, useState, useEffect } from "react";
import { useGlitch } from 'react-powerglitch'

import "../styles/dataBox.css";

interface DataBoxProps {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  content: React.ReactNode;
}

export default function DataBox({ title, icon, subtitle, content }: DataBoxProps) {
    
    const [visible, setVisible] = useState(false);
    const hasBeenVisible = useRef(false);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    hasBeenVisible.current = true;
                } else if (hasBeenVisible.current) {
                    setVisible(false);
                }
            },
            { threshold: 0.1, rootMargin: "-100px 0px 100px 0px" }
        );
        if (boxRef.current) {
            observer.observe(boxRef.current);
        }
        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div className={`dataBox-container ${visible ? "entering" : hasBeenVisible.current ? "exiting" : ""}`} ref={boxRef}>
            <div className="title-container">
                {icon} 
                <div className="title-text-container">
                    {title}
                    <div className="subtitle">{subtitle}</div>
                </div>
            </div>

            <div className="content-container">
                {content}
            </div>
        </div>
    );

}