"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroHeadline() {
  const ref    = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sweepClass = `sweep${active ? " active" : ""}`;

  return (
    <h1
      ref={ref}
      className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
    >
      Technik, die Prozesse{" "}
      <span
        className={sweepClass}
        style={{ "--sweep-delay": "0.3s" } as React.CSSProperties}
      >
        vereinfacht.
      </span>
      <br className="hidden md:block" />
      {" "}Lösungen, die{" "}
      <span
        className={sweepClass}
        style={{ "--sweep-delay": "0.8s" } as React.CSSProperties}
      >
        voranbringen.
      </span>
    </h1>
  );
}
