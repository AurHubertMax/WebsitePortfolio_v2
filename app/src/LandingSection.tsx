"use client";

import "../src/styles/wrappers.css";
import "../src/styles/layout.css";
import "../src/styles/landingSection.css";
import ScrambledText from "./wrappers/ScrambleTextWrapper";

export default function LandingSection() {
  return (
    <section id="landing" style={{ minHeight: '100vh', color: 'white'}}>
      <ScrambledText
        key="landing-title"
        className="pageTitle kode-mono selection-box-pageTitle"
        radius={100}
        duration={2}
        speed={0.5}
        scrambleChars=".:"
      >
        <span style={{ fontSize: "3rem" }}>W</span>elcome
      </ScrambledText>
    </section>
  );
}