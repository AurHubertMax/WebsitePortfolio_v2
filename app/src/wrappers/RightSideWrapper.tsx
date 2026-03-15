"use client";
import { useRef, useEffect, useState } from "react";
import Scrollbar from "../components/Scrollbar";
import { useScroll } from "../contexts/ScrollContext";

import "../../src/styles/wrappers.css";


export default function RightSideWrapper({ children }: { children: React.ReactNode }) {
  const rightSideRef = useRef<HTMLDivElement>(null);
  const { activeSection, setActiveSection, scrollContainerRef, setScrollContainer } = useScroll();

  useEffect(() => {
    scrollContainerRef.current = rightSideRef.current;
    setScrollContainer(rightSideRef.current);
  }, []);

  useEffect(() => {
    const container = rightSideRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ["landing", "home", "resume", "projects", "contact"];
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const scrollPosition = scrollTop + viewportHeight * 0.3;

      let currentActive = "landing";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = sectionId;
        }
      });

      setActiveSection(currentActive);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      <Scrollbar
          containerRef={rightSideRef}
          sectionIds={["landing", "home", "resume", "projects", "contact"]}
      />
      <div 
        // className="right-side-container kode-mono" 
        className={`right-side-container kode-mono ${activeSection !== "landing" ? "visible" : ""}`}
        ref={rightSideRef}
      >
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  );
}