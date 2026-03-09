"use client";

import ScrollScrambleText from "./wrappers/ScrollScrambleTextWrapper";

import "./styles/homeSection.css";
import ScrambledText from "./wrappers/ScrambleTextWrapper";

export default function HomeSection() {
  return (
    <section id="home" className="home-wrapper">
      <div className="content-wrapper">
        <ScrambledText
          key="home-title"
          className="pageTitle kode-mono selection-box-pageTitle"
          radius={100}
          duration={2}
          speed={0.5}
          scrambleChars=".:"
        >
          <span style={{ fontSize: "3rem" }}>A</span>bout
        </ScrambledText>
        <div className="pageParagraph">
          <ScrollScrambleText>
            I&apos;m a full-stack web developer currently working on a SaaS platform where I build and improve features using .NET, Angular, and SQL. My focus is on making the product more reliable and easier to use by creating new features, improving backend validation for booking and payment workflows, and building internal dashboards to surface unusual activity and data issues faster.
          </ScrollScrambleText>
          <ScrollScrambleText>
            Before this, I worked on a mix of engineering and volunteer projects that gave me experience across web development, cloud systems, and machine learning. I&apos;ve built React and Node.js features, automated data collection with web scrapers, trained neural networks for image classification, and worked with microservices and data pipelines in the cloud. I enjoy solving practical problems and building tools that are both useful and scalable.
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