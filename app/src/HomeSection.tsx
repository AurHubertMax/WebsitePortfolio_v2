"use client";

import ScrollScrambleText from "./wrappers/ScrollScrambleTextWrapper";
import ScrambledText from "./wrappers/ScrambleTextWrapper";
import DataBox from "./components/DataBox";
import { useState } from "react";

import "./styles/homeSection.css";

const skills_svg = 
    <svg fill="currentColor" viewBox="0 0 100 100" width="3.5rem" height="3.5rem" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.4000000000000001"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M43.84,46.76a5.35,5.35,0,1,1,5.46-5.34A5.41,5.41,0,0,1,43.84,46.76Z" fillRule="evenodd"></path>
            <path d="M77.33,55.7,70.06,44.9V44A24,24,0,0,0,46.19,20a22,22,0,0,0-5.67.7A23.89,23.89,0,0,0,22.31,44a21.92,21.92,0,0,0,3.58,12.7c4.18,6,7,10.8,5.27,17.3a4.58,4.58,0,0,0,.9,4.2A4.43,4.43,0,0,0,35.74,80h19.6A4.72,4.72,0,0,0,60,76.2a5,5,0,0,0,.2-1.2,2.37,2.37,0,0,1,2.39-2H64a4.72,4.72,0,0,0,4.68-3.4A41.31,41.31,0,0,0,70.16,60h5.17a2.78,2.78,0,0,0,2.19-1.6A2.86,2.86,0,0,0,77.33,55.7ZM57.49,47.33l-1,1.57a2.22,2.22,0,0,1-1.76.94,2.38,2.38,0,0,1-.72-.16l-2.65-1a11.64,11.64,0,0,1-3.85,2.2l-.48,2.91a2,2,0,0,1-2,1.65h-2a2,2,0,0,1-2-1.65l-.48-2.91a10,10,0,0,1-3.69-2l-2.81,1a2.38,2.38,0,0,1-.72.16,2.1,2.1,0,0,1-1.76-1l-1-1.65a1.94,1.94,0,0,1,.48-2.51l2.33-1.89a10.11,10.11,0,0,1-.24-2.12,9.41,9.41,0,0,1,.24-2L31.1,36.88a1.92,1.92,0,0,1-.48-2.51l1-1.65a2,2,0,0,1,1.76-1,2.38,2.38,0,0,1,.72.16l2.81,1a11.52,11.52,0,0,1,3.69-2.12L41,28a1.91,1.91,0,0,1,2-1.57h2a1.92,1.92,0,0,1,2,1.49l.48,2.83a11.31,11.31,0,0,1,3.69,2l2.81-1a2.38,2.38,0,0,1,.72-.16,2.1,2.1,0,0,1,1.76,1l1,1.65A2,2,0,0,1,57,36.8l-2.33,1.89a9.56,9.56,0,0,1,.24,2.12,9.41,9.41,0,0,1-.24,2L57,44.74A2,2,0,0,1,57.49,47.33Z" fillRule="evenodd"></path>
        </g>
    </svg>

const subtitle_text = "Skills I've acquired over the years"

export default function HomeSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  
  return (
    <section id="home" className="home-wrapper">
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
          <span style={{ fontSize: "3rem" }}>A</span>bout
        </ScrambledText>
        <div className="body-content-wrapper">
          <div className="pageParagraph-container">
            <ScrollScrambleText>
              Hello! I&apos;m a <span>Full-Stack Software Developer</span> based in Kansas who enjoys building frontend interfaces, backend systems, and everything in between. I&apos;m always learning new technologies and looking for ways to grow my skill set.
            </ScrollScrambleText>
            <ScrollScrambleText>
              Currently, I work as a Software Engineer and QA Manager at <span>PopBookings</span>, where I help build and maintain a SaaS platform for the event management industry, handling both development and QA.
            </ScrollScrambleText>
            <ScrollScrambleText>
              Outside of work, I like working on personal projects, playing video games, and weightlifting. I&apos;m always happy to connect with others who are into tech or development!
            </ScrollScrambleText>

          </div>
          <div className="skills-container"> 
            <DataBox title="SKILLS" icon={skills_svg} subtitle={subtitle_text} rootMargin="-250px 0px -250px 0px" content={
              <div className="skills-list">
                <span className="skill-label">Languages</span>
                <div className="skill-container">
                  <div className="skill">C#</div>
                  <div className="skill">JavaScript</div>
                  <div className="skill">TypeScript</div>
                  <div className="skill">SQL</div>
                  <div className="skill">HTML/CSS</div>
                </div>
                <span className="skill-label">Frameworks</span>
                <div className="skill-container">
                  <div className="skill">.NET</div>
                  <div className="skill">React</div>
                  <div className="skill">Angular</div>
                  <div className="skill">Node.js</div>
                </div>
                <span className="skill-label">Tools</span>
                <div className="skill-container">
                  <div className="skill">Git</div>
                  <div className="skill">Azure</div>
                  <div className="skill">AWS</div>
                  <div className="skill">AG Grid</div>
                  <div className="skill">Docker</div>
                  <div className="skill">PyTorch</div>
                </div>
              </div>
            } />
          </div>
        </div>
      </div>
    </section>
  );
}

// Languages: C#, Python, JavaScript, TypeScript, SQL, HTML/CSS
// Frameworks: .NET, React, Angular, Node.js
// Tools: Git, Azure, AWS, AG Grid,  Docker, RabbitMQ, PyTorch