"use client";
import { useScroll } from "./contexts/ScrollContext";

import "../src/styles/layout.css";

export default function NavigationLinks() {
  const { activeSection } = useScroll();

  return (
    <div className="header-nav">
      <a href="#home">
        <div className={`navText kode-mono underline-hover ${activeSection === "home" ? "active" : ""}`}>
          About
        </div>
      </a>
      <a href="#resume">
        <div className={`navText kode-mono underline-hover ${activeSection === "resume" ? "active" : ""}`}>
          Resume
        </div>
      </a>
      <a href="#projects">
        <div className={`navText kode-mono underline-hover ${activeSection === "projects" ? "active" : ""}`}>
          Projects
        </div>
      </a>
      <a href="#contact">
        <div className={`navText kode-mono underline-hover ${activeSection === "contact" ? "active" : ""}`}>
          Contact
        </div>
      </a>
    </div>
  );
}