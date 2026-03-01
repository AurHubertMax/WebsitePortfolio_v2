"use client";
import { useRef, useEffect } from "react";
import Scrollbar from "./components/Scrollbar";
import { useScroll } from "./contexts/ScrollContext";
import "../src/styles/rightSideWrapper.css";

export default function RightSideWrapper({ children }: { children: React.ReactNode }) {
  const rightSideRef = useRef<HTMLDivElement>(null);
  const { setActiveSection } = useScroll();

  useEffect(() => {
    const container = rightSideRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ["home", "resume", "projects", "contact"];
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const scrollPosition = scrollTop + viewportHeight * 0.3;

      let currentActive = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = sectionId;
        }
      });

      setActiveSection(currentActive);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize active section
    return () => container.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
        <Scrollbar
            containerRef={rightSideRef}
            sectionIds={["home", "resume", "projects", "contact"]}
        />
        <div className="right-side-container" ref={rightSideRef}>
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    </>
  );
}

// "use client";
// import { useRef } from "react";
// import Scrollbar from "./components/Scrollbar";
// import NavigationLinks from "./NavigationLinks";
// import "../src/styles/rightSideWrapper.css";


// export default function RightSideWrapper({ children }: { children: React.ReactNode }) {
//   const rightSideRef = useRef<HTMLDivElement>(null);

//   return (
//     <>
//         <Scrollbar
//             containerRef={rightSideRef}
//             sectionIds={["home", "resume", "projects", "contact"]}
//         />
//         <NavigationLinks 
//             containerRef={rightSideRef}
//             sectionIds={["home", "resume", "projects", "contact"]}
//         />
//         <div className="right-side-container" ref={rightSideRef}>
//             <div className="content-wrapper">
//                 {children}
//             </div>
//         </div>
//     </>
//   );
// }