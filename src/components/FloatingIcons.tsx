"use client";

import { useEffect, useState } from "react";

// Pure CSS-animated floating icons — no framer-motion, GPU-only (transform + opacity)
// Reduced from 25 → 12 icons for better performance

const ICONS = ["☕", "🌸", "🍰", "✨", "💝", "🌺"];
const FLOAT_CLASSES = ["float-a", "float-b", "float-c"] as const;

interface FloatingIcon {
  id: number;
  emoji: string;
  x: number;   // vw %
  y: number;   // vh %
  size: number;
  floatClass: string;
  dur: number;
  delay: number;
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Generate deterministic-ish positions once on mount
    const list: FloatingIcon[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      emoji: ICONS[i % ICONS.length],
      x: 5 + (i * 8.3) % 90,
      y: 5 + (i * 13.7) % 85,
      size: 14 + (i % 4) * 4,
      floatClass: FLOAT_CLASSES[i % 3],
      dur: 16 + (i % 5) * 4,
      delay: (i % 7) * -2.3,
    }));
    setIcons(list);
  }, []);

  if (!icons.length) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {icons.map((item) => (
        <span
          key={item.id}
          className={item.floatClass}
          style={{
            position: "absolute",
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: 0.09,
            "--dur": `${item.dur}s`,
            "--delay": `${item.delay}s`,
            willChange: "transform",
          } as React.CSSProperties}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
