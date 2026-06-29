"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const MARGIN = "-80px 0px" as const;

type Base = { children: ReactNode; className?: string; delay?: number };

function useScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: MARGIN });
  return { ref, inView };
}

// Mounts immediately (hero, above-fold)
export function HeroFade({
  children, className, delay = 0, y = 16,
}: Base & { y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered fade + rise
export function FadeUp({ children, className, delay = 0 }: Base) {
  const { ref, inView } = useScroll();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left
export function SlideFromLeft({ children, className, delay = 0 }: Base) {
  const { ref, inView } = useScroll();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -36 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from right
export function SlideFromRight({ children, className, delay = 0 }: Base) {
  const { ref, inView } = useScroll();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 36 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale + fade in (portraits, images)
export function ScaleIn({ children, className, delay = 0 }: Base) {
  const { ref, inView } = useScroll();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger parent — triggers children sequentially on scroll
export function StaggerContainer({
  children, className, delay = 0, stagger = 0.1,
}: Base & { stagger?: number }) {
  const { ref, inView } = useScroll();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child — must live inside StaggerContainer
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hover lift (card lift on pointer enter)
export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
