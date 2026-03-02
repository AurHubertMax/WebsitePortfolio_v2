import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

import '../styles/layout.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  disableHover?: boolean;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',//'.:',
  className = '',
  style = {},
  disableHover = false,
  children
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const charsRef = useRef<HTMLElement[]>([]);
  const isIntroAnimating = useRef(true);

  useEffect(() => {
    if (!rootRef.current) return;

    const p = rootRef.current.querySelector('p');
    if (!p) return;

    const split = SplitText.create(p, {
      type: 'chars',
      charsClass: 'char'
    });
    charsRef.current = split.chars as HTMLElement[];

    charsRef.current.forEach(c => {
      gsap.set(c, {
        opacity: 0,
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });

    const tl = gsap.timeline({
        onComplete: () => {
            isIntroAnimating.current = false;
        }
    });

    charsRef.current.forEach(c => {
        tl.to(c, {
            duration,
            scrambleText: {
                text: c.dataset.content || '',
                chars: scrambleChars,
                speed
            },
            ease: 'none'
        }, 0);
    });

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (!entry.isIntersecting) return;

        charsRef.current.forEach((c, i) => {
            gsap.to(c, {
            delay: i * 0.05,
            opacity: 1,
            duration,
            scrambleText: {
                text: c.dataset.content || '',
                chars: scrambleChars,
                speed
            },
            ease: 'none'
            });
        });

        observer.disconnect();
        },
        { threshold: 0.3 }
    );
    observer.observe(rootRef.current);

    const handleMove = (e: PointerEvent) => {
        if (isIntroAnimating.current) return;
        charsRef.current.forEach(c => {
            const { left, top, width, height } = c.getBoundingClientRect();
            const dx = e.clientX - (left + width / 2);
            const dy = e.clientY - (top + height / 2);
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
                gsap.to(c, {
                    overwrite: true,
                    duration: duration * (1 - dist / radius),
                    scrambleText: {
                        text: (c as HTMLElement).dataset.content || '',
                        chars: scrambleChars,
                        speed
                    },
                    ease: 'none'
                });
            }
        });
    };

    const el = rootRef.current;
    if (!disableHover) {
      el.addEventListener('pointermove', handleMove);
    }
   

    return () => {
      if (!disableHover) {
        el.removeEventListener('pointermove', handleMove);
      }
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
