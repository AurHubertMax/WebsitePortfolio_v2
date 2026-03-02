"use client";

import React, { useRef, useState, useEffect } from "react";

import { useScroll } from "../contexts/ScrollContext";
import ScrambledText from "../wrappers/ScrambleTextWrapper";

import "../styles/layout.css";

export default function NavigationLinks() {
  const { activeSection } = useScroll();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [boxStyle, setBoxStyle] = useState({ top: 0, height: 0, width: 0, opacity: 0 });
  const navRefs= useRef<HTMLAnchorElement| null[]>([]);

  const navItems = [
    { href: "#home", label: "About", section: "home" },
    { href: "#resume", label: "Resume", section: "resume" },
    { href: "#projects", label: "Projects", section: "projects" },
    { href: "#contact", label: "Contact", section: "contact" }
  ];

  useEffect(() => {
    const targetIndex = hoveredIndex !== null 
      ? hoveredIndex 
      : navItems.findIndex(item => item.section === activeSection);

    if (targetIndex !== -1 && navRefs.current[targetIndex]) {
      const element = navRefs.current[targetIndex];
      if (element) {
        const rect = element.getBoundingClientRect();
        const parentRect = element.parentElement?.getBoundingClientRect();
        
        if (parentRect) {
          setBoxStyle({
            top: rect.top - parentRect.top - 4,
            height: rect.height + 8,
            width: rect.width + 16,
            opacity: 1
          });
        }
      }
    } else {
      setBoxStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeSection]);

  return (
    <div 
      className="header-nav"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div 
        className="nav-selection-box"
        style={{
          top: `${boxStyle.top}px`,
          height: `${boxStyle.height}px`,
          width: `${boxStyle.width}px`,
          opacity: boxStyle.opacity
        }}
      />
        {navItems.map((item, index) => (
          <a 
            key={item.section}
            href={item.href}
            ref={el => navRefs.current[index] = el}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <ScrambledText
              className={`navText kode-mono ${activeSection === item.section ? "active" : ""}`}
              radius={100}
              duration={2}
              speed={0.5}
              scrambleChars=".:"
              disableHover={true}
            >
              {item.label}
            </ScrambledText>
          </a>
        ))}
    </div>
  );
}