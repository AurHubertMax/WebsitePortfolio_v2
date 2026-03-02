"use client";

import "./styles/homeSection.css";

export default function HomeSection() {
  return (
    <section id="home" style={{ minHeight: '100vh', color: 'white' }}>
      <div className="content-wrapper">
        <div className="paragraph">
          <p>
            I&apos;m a full-stack web developer currently working on a SaaS platform where I build and improve features using .NET, Angular, and SQL. My focus is on making the product more reliable and easier to use by creating new features, improving backend validation for booking and payment workflows, and building internal dashboards to surface unusual activity and data issues faster.
          </p>
          <p>
            Before this, I worked on a mix of engineering and volunteer projects that gave me experience across web development, cloud systems, and machine learning. I&apos;ve built React and Node.js features, automated data collection with web scrapers, trained neural networks for image classification, and worked with microservices and data pipelines in the cloud. I enjoy solving practical problems and building tools that are both useful and scalable.
          </p>
        </div>

        <div className="skills">
          <p>Here are some skills I&apos;ve picked up along the way:</p>
          <ul>
            <li><span>Languages</span> C# • Python • JavaScript • TypeScript • SQL • HTML/CSS</li>
            <li><span>Frameworks</span> dotNET • React • Angular • Node.js</li>
            <li><span>Tools</span> Git • Azure • AWS • AG Grid • Docker • RabbitMQ • PyTorch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Languages: C#, Python, JavaScript, TypeScript, SQL, HTML/CSS
// Frameworks: .NET, React, Angular, Node.js
// Tools: Git, Azure, AWS, AG Grid,  Docker, RabbitMQ, PyTorch