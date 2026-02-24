import Image from "next/image";
import ResumeSection from "./src/ResumeSection.tsx";

export default function Home() {
  return (
    <main>
      <section id="home" style={{ minHeight: '100vh', padding: '10rem 2rem 2rem 2rem'}}>
        <h1>Home Section</h1>
        <p>Welcome content here...</p>
      </section>

      <ResumeSection />

      <section id="projects" style={{ minHeight: '100vh', padding: '10rem 2rem 2rem 2rem' }}>
        <h1>Projects Section</h1>
        <p>Projects content here...</p>
      </section>

      <section id="contact" style={{ minHeight: '100vh', padding: '10rem 2rem 2rem 2rem' }}>
        <h1>Contact Section</h1>
        <p>Contact content here...</p>
      </section>
    </main>
  );
}
