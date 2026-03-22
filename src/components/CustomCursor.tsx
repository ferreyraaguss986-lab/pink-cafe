"use client";

import { useEffect, useRef, useState } from "react";

/** Custom cursor: a crisp dot + a lagging ring. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth ring position via requestAnimationFrame lerp
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Dot moves instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      if (!visible) setVisible(true);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovered(true);
      }
    };
    const onLeaveLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovered(false);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnterLink);
    document.addEventListener("mouseout", onLeaveLink);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Lerp ring loop
    const speed = 0.12; // 0–1: lower = more lag
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * speed;
      ring.current.y += (mouse.current.y - ring.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnterLink);
      document.removeEventListener("mouseout", onLeaveLink);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  // Don't render on touch/SSR
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "48px" : "36px",
          height: hovered ? "48px" : "36px",
          marginLeft: hovered ? "-24px" : "-18px",
          marginTop: hovered ? "-24px" : "-18px",
          border: "1.5px solid #EC4899",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? (hovered ? 0.6 : 0.45) : 0,
          transition:
            "opacity 0.25s ease, width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.2s ease",
          background: hovered ? "rgba(236,72,153,0.08)" : "transparent",
          willChange: "transform",
        }}
      />
      {/* Instant dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicked ? "6px" : "8px",
          height: clicked ? "6px" : "8px",
          marginLeft: clicked ? "-3px" : "-4px",
          marginTop: clicked ? "-3px" : "-4px",
          background: "#EC4899",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease, width 0.15s ease, height 0.15s ease, margin 0.15s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
