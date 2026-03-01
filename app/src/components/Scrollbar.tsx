"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  sectionIds: string[];
}

export default function Scrollbar({ containerRef, sectionIds }: Props) {
  const [thumbTop, setThumbTop] = useState(0);
  const [nodePositions, setNodePositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculatePositions = () => {
      const { scrollHeight, clientHeight } = container;
      const trackHeight = trackRef.current?.clientHeight ?? 0;

      const positions = sectionIds.map((id) => {
        const section = document.getElementById(id);
        if (!section) return 0;
        const scrollPercent = section.offsetTop / (scrollHeight - clientHeight);
        return scrollPercent * trackHeight;
      });

      setNodePositions(positions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [containerRef, sectionIds]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const percent = scrollTop / (scrollHeight - clientHeight);
        const trackHeight = trackRef.current?.clientHeight ?? 0;
        setThumbTop(percent * (trackHeight - 16));

        const sections = sectionIds
          .map(id => document.getElementById(id))
          .filter((el): el is HTMLElement => el !== null);

        const scrollPosition = scrollTop + clientHeight * 0.3;

        let currentActive = sectionIds[0];
        sections.forEach((section) => {
          if (section.offsetTop <= scrollPosition) {
            currentActive = section.id;
          }
        });

        setActiveSection(currentActive);
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, sectionIds]);

  const scrollToSection = (id: string) => {
    const container = containerRef.current;
    const target = document.getElementById(id);
    if (!container || !target) return;
    container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="custom-scrollbar" ref={trackRef}>
      <div className="scrollbar-track" />

      <div
        className="scrollbar-thumb"
        style={{ transform: `translateX(-50%) translateY(${thumbTop}px)` }}
      />

      {sectionIds.map((id, i) => (
        <div
          key={id}
          className={`scrollbar-node ${activeSection === id ? 'active' : ''}`}
          style={{ top: `${nodePositions[i] ?? 0}px` }}
          onClick={() => scrollToSection(id)}
        />
      ))}
    </div>
  );
}