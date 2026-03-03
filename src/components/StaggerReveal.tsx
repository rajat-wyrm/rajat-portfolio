"use client";

import {
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
} from "react";

type Props = {
  children: ReactNode;
  stagger?: number; // ms
  duration?: number; // ms
  distance?: number;
  className?: string;
};

export default function StaggerReveal({
  children,
  stagger = 120,
  duration = 700,
  distance = 30,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements =
      container.querySelectorAll<HTMLElement>(".stagger-item");

    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = `translate3d(0,${distance}px,0)`;
      el.style.transition = `
        opacity ${duration}ms cubic-bezier(.16,1,.3,1) ${index * stagger}ms,
        transform ${duration}ms cubic-bezier(.16,1,.3,1) ${index * stagger}ms
      `;
      el.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform =
              "translate3d(0,0,0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [stagger, duration, distance]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}