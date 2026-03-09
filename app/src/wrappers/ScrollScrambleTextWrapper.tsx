"use client";
import { useEffect, useState, useRef } from "react";
import ScrambledText from '../components/ScrambleText';

export default function ScrollScrambleText({ children }: { children: React.ReactNode }) {

    const getTextContent = (node: React.ReactNode): string => {
        // Handle null/undefined
        if (node == null) return '';
        
        // Handle strings and numbers
        if (typeof node === 'string' || typeof node === 'number') {
            return String(node);
        }
        
        // Handle arrays
        if (Array.isArray(node)) {
            return node.map(getTextContent).join('');
        }
        
        // Handle React elements (objects with props)
        if (typeof node === 'object' && 'props' in node && node.props) {
            // If it has children prop, recursively extract from children
            if ('children' in node.props) {
                return getTextContent(node.props.children);
            }
        }
        
        return '';
    };

    const textContent = getTextContent(children);
    console.log('Extracted text content:', textContent);

    return (
        <>
            <ScrambledText
                className=""
                radius={100}
                duration={2}
                speed={0.5}
                scrambleChars=".:"
                disableHover={true}
                InfiniteScramble={false} // CHANGE TO TRUE TO TEST
                stagger={0}
            >
                {children}
            </ScrambledText>
        </>
    )
//   const [shouldScramble, setShouldScramble] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = elementRef.current;
//     if (!element) return;

//     const scrollContainer = element.closest('.right-side-container');
//     setShouldScramble(!!scrollContainer);
//   }, []);

//   return (
//     <div ref={elementRef}>
//       {shouldScramble ? (
//         <ScrambledText 
//             radius={100}
//             duration={Infinity}
//             speed={0.5}
//             scrambleChars=".:"
//             disableHover={true}
//         >
//           {children}
//         </ScrambledText>
//       ) : (
//         children
//       )}
//     </div>
//   );
}