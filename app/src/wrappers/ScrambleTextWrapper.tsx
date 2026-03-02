"use client";

import ScrambledText from '../components/ScrambleText';
  
export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default ScrambledText;