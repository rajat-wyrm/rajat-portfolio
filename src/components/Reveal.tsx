"use client";

import {
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number; // in ms
  duration?: number; // in ms
  distance?: number; // px
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 800,
  distance = 40,
  direction = "up",
  once = true,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translate3d(0,0,0)";

          if (once) observer.unobserve(element);
        } else if (!once) {
          element.style.opacity = "0";
          element.style.transform = getInitialTransform(
            direction,
            distance
          );
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [direction, distance, once]);

  const getInitialTransform = (
    dir: string,
    dist: number
  ) => {
    switch (dir) {
      case "down":
        return `translate3d(0,-${dist}px,0)`;
      case "left":
        return `translate3d(${dist}px,0,0)`;
      case "right":
        return `translate3d(-${dist}px,0,0)`;
      default:
        return `translate3d(0,${dist}px,0)`;
    }
  };

  const style: CSSProperties = {
    opacity: 0,
    transform: getInitialTransform(direction, distance),
    transition: `
      opacity ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms,
      transform ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms
    `,
    willChange: "opacity, transform",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}