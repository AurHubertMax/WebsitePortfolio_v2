"use client";

import ScrollScrambleText from "./wrappers/ScrollScrambleTextWrapper";
import ScrambledText from "./wrappers/ScrambleTextWrapper";
import { useState } from "react";

import "./styles/homeSection.css";

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
          scrambleChars=".:"
        >
          <span style={{ fontSize: "3rem" }}>A</span>bout
        </ScrambledText>
        <div className="pageParagraph-container">
          <ScrollScrambleText>
            Hello, I&apos;m a Full-Stack Software Developer based in Kansas. I have a strong passion for designing frontend interfaces, crafting backend systems, and everything in between. I enjoy learning new technologies and am always looking for ways to expand my skill set.
          </ScrollScrambleText>
          <ScrollScrambleText>
            Currently, I&apos;m working as a Software Engineer and QA Manager at PopBookings, where I get to work on developing and maintaining a SaaS platform for the event management industry. I&apos;m responsible for both frontend and backend development, as well as overseeing the QA process to ensure our software meets the highest standards of quality.
          </ScrollScrambleText>
          <ScrollScrambleText>
            Looking ahead, I&apos;m excited to keep growing as a developer and tackling new challenges that expand my skills. I&apos;m particularly interested in diving deeper into cloud computing and learning how it can be combined with modern software development to build scalable, impactful, and innovative solutions.
          </ScrollScrambleText>
           <ScrollScrambleText>
            Besides work, I like to work on personal projects, explore new technologies, play video games, or go weightlifting. I&apos;m always excited to connect with other developers, gamers, and weightlifting enthusiasts to share ideas and knowledge, so feel free to reach out if you&apos;d like to chat about software development or anything tech-related!
          </ScrollScrambleText>

        </div>

        <div className="skills">
          <ScrollScrambleText>
            Here are some skills I&apos;ve picked up along the way:
          </ScrollScrambleText>
          <ul>
            <li><ScrollScrambleText><span>Languages</span> C# • Python • JavaScript • TypeScript • SQL • HTML/CSS</ScrollScrambleText></li>
            <li><ScrollScrambleText><span>Frameworks</span> dotNET • React • Angular • Node.js</ScrollScrambleText></li>
            <li><ScrollScrambleText><span>Tools</span> Git • Azure • AWS • AG Grid • Docker • RabbitMQ • PyTorch</ScrollScrambleText></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Languages: C#, Python, JavaScript, TypeScript, SQL, HTML/CSS
// Frameworks: .NET, React, Angular, Node.js
// Tools: Git, Azure, AWS, AG Grid,  Docker, RabbitMQ, PyTorch