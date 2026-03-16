"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll } from "../contexts/ScrollContext";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
}

export default function FadeInView({ children, className = "", rootMargin = "-100px 0px -100px 0px" }: FadeInViewProps) {
  const [visible, setVisible] = useState(false);
  const hasBeenVisible = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollContainer } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          hasBeenVisible.current = true;
        } else if (hasBeenVisible.current) {
          setVisible(false);
        }
      },
      { root: scrollContainer, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [scrollContainer, rootMargin]);

  return (
    <div ref={ref} className={`fade-in-view ${visible ? "fade-in-view--visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
