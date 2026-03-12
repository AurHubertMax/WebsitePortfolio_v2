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
  onVisible?: () => void;
  disableHover?: boolean;
  randomHover?: boolean;
  InfiniteScramble?: boolean;
  stagger?: number;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',//'.:',
  className = '',
  style = {},
  onVisible,
  randomHover = false,
  disableHover = false,
  InfiniteScramble = false,
  stagger = 0.05,
  children
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const charsRef = useRef<HTMLElement[]>([]);
  const isIntroAnimating = useRef(true);
  const randomTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const infiniteTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const p = rootRef.current.querySelector('p');
    if (!p) return;

    const split = SplitText.create(p, {
      type: 'words,chars',
      charsClass: 'char',
      wordsClass: 'word'
    });
    charsRef.current = split.chars as HTMLElement[];

    charsRef.current.forEach(c => {
      gsap.set(c, {
        opacity: InfiniteScramble ? 1 : 0,
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });

    const startInfiniteScramble = () => {
      infiniteTimelineRef.current = gsap.timeline({
          repeat: -1,
          repeatDelay: -0.5
      });

      charsRef.current.forEach((c, i) => {
        infiniteTimelineRef.current!.to(c, {
            duration: duration,
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
        }, i * stagger);
      });
    };

    if (!InfiniteScramble) {
      const tl = gsap.timeline();
      // const tl = gsap.timeline({
      //     onComplete: () => {
      //         isIntroAnimating.current = false;
      //     }
      // });

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
              delay: i * stagger,
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
          const totalDuration = (charsRef.current.length - 1) * stagger + duration;
          gsap.delayedCall(totalDuration, () => {
              isIntroAnimating.current = false;
              if (randomHover) scheduleRandomScramble();
          });
          if (onVisible) onVisible();
          },
          { threshold: 0.3 }
      );
      observer.observe(rootRef.current);
    } else {
      isIntroAnimating.current = false;
      startInfiniteScramble();
    }


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

    const scheduleRandomScramble = () => {
      const delay = 3000 + Math.random() * 1000;
      randomTimeoutRef.current = setTimeout(() => {
        const count = Math.max(1, Math.floor(charsRef.current.length * 0.3));
        const shuffled = [...charsRef.current].sort(() => Math.random() - 0.5);
        shuffled.slice(0, count).forEach(c => {
          gsap.to(c, {
            overwrite: true,
            duration: duration * 0.6,
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        });
        scheduleRandomScramble();
      }, delay);
    };

    const el = rootRef.current;
    if (!disableHover && !randomHover) {
      el.addEventListener('pointermove', handleMove);
    }

    return () => {
      if (!disableHover && !randomHover) {
        el.removeEventListener('pointermove', handleMove);
      }
      if (randomTimeoutRef.current) {
        clearTimeout(randomTimeoutRef.current);
        randomTimeoutRef.current = null;
      }
      if (infiniteTimelineRef.current) {
        infiniteTimelineRef.current.kill();
      }
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars, InfiniteScramble, stagger, disableHover, randomHover, onVisible]);

  return (
    <div ref={rootRef} className={`${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
