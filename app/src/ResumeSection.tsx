"use client";

import ScrambledText from "./wrappers/ScrambleTextWrapper";
import FadeInView from "./components/FadeInView";
import { useState } from "react";
import { BorderBeam } from "@stianlarsen/border-beam";
import "@stianlarsen/border-beam/css";

import "./styles/resumeSection.css";


const popbookings_svg = 
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="2rem" height="2rem">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" ></g>
      <g id="SVGRepo_iconCarrier" strokeWidth="0.5"> 
        <g> 
          <path d="M46.5,20h-41C4.7,20,4,20.7,4,21.5V46c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V21.5C48,20.7,47.3,20,46.5,20z M19,42c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V42z M19,32c0,0.6-0.4,1-1,1h-4 c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z M29,42c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4 c0.6,0,1,0.4,1,1V42z M29,32c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z M39,42 c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V42z M39,32c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z"></path> 
          <path d="M44,7h-4h-1V5c0-1.6-1.3-3-3-3l0,0c-1.6,0-3,1.3-3,3v2H19V5c0-1.6-1.3-3-3-3l0,0c-1.6,0-3,1.3-3,3v2h-1H8 c-2.2,0-4,1.8-4,4v2.5C4,14.3,4.7,15,5.5,15h41c0.8,0,1.5-0.7,1.5-1.5V11C48,8.8,46.2,7,44,7z"></path> 
        </g> 
      </g>
    </svg>


export default function ResumeSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [resumeHovered, setResumeHovered] = useState(false);

  return (
    <section id="resume" className="resume-wrapper">
      <div className="content-wrapper">
        <ScrambledText
          key="home-title"
          className={`pageTitle kode-mono${titleVisible ? ' selection-box-pageTitle' : ''}`}
          onVisible={() => setTitleVisible(true)}
          radius={100}
          duration={2}
          speed={0.5}
          randomHover={true}
          scrambleChars=".:"
        >
          <span style={{ fontSize: "3rem" }}>E</span>xperience
        </ScrambledText> 
        <div className="body-content-wrapper">
          <FadeInView rootMargin="-100px 0px -200px 0px">
            <div className="row-container">
            <div className="dates-container">
              2025 - Present
            </div>
            <div className="lines-container">
              <div className="line-container-1"></div>
              {/* <div className="line-container-2"></div> */}
            </div>
            <div className="resume-container"
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
            >
              {resumeHovered && (
                <BorderBeam 
                  colorFrom="rgba(var(--green-acc-medium), 0.4)"
                  colorTo="rgba(var(--green-acc-medium), 0.1)"
                  duration={2}
                  size={100}
                  anchor={90}
                  borderWidth={2}
                />
              
              )}
              {/* <span className="resume-border-left" />
              <span className="resume-border-right" /> */}
              <div className="resume-title-container">
                <div className="resume-item-title">
                  PopBookings
                </div>
                <div className="resume-item-title-subtitle">
                  Software Developer
                </div>
              </div>

              <div className="resume-summary-container">
                summary
              </div>
            </div>
          </div>
          </FadeInView>
          
        </div>
      </div>
    </section>
  );
}