"use client";

import LandingSection from "./src/LandingSection";
import HomeSection from "./src/HomeSection";
import ResumeSection from "./src/ResumeSection";
import ProjectsSection from "./src/ProjectsSection";
import ContactSection from "./src/ContactSection";

export default function Home() {
  return (
    <main style={{}}>
      <LandingSection />

      <HomeSection />

      <ResumeSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
