import Image from "next/image";

import HomeSection from "./src/HomeSection.tsx";
import ResumeSection from "./src/ResumeSection.tsx";
import ProjectsSection from "./src/ProjectsSection.tsx";
import ContactSection from "./src/ContactSection.tsx";

export default function Home() {
  return (
    <main>
      <HomeSection />

      <ResumeSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
