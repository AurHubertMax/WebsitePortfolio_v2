"use client";
import { createContext, useContext, useState, useRef, ReactNode, RefObject } from "react";

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  scrollContainer: HTMLDivElement | null;
  setScrollContainer: (el: HTMLDivElement | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("landing");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, scrollContainerRef, scrollContainer, setScrollContainer }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}