"use client";
import { useEffect, useState, useRef } from "react";
import ScrambledText from '../components/ScrambleText';

export default function ScrollScrambleText({ children }: { children: React.ReactNode }) {

    const getTextContent = (node: React.ReactNode): string => {
        if (node == null) return '';
        
        if (typeof node === 'string' || typeof node === 'number') {
            return String(node);
        }
        
        if (Array.isArray(node)) {
            return node.map(getTextContent).join('');
        }
        
        if (typeof node === 'object' && 'props' in node && node.props) {
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
                radius={20}
                duration={2}
                speed={10}
                scrambleChars=".:"
                randomHover={false}
                stagger={0.01}
            >
                {children}
            </ScrambledText>
        </>
    );
}