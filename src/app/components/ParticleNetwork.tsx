"use client";

import { useEffect, useRef, useState } from "react";

// ─── Config ───────────────────────────────────────────────────────────────────

const COUNT         = 72;
const CONNECT_DIST  = 120;
const MOUSE_DIST    = 150;
const MOUSE_FORCE   = 0.028;
const SPEED_CAP     = 1.2;
const BASE_SPEED    = 0.35;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  orange: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ParticleNetwork() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [faded, setFaded] = useState(false);

  // Trigger CSS fade-in shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setFaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── HiDPI-aware sizing ────────────────────────────────────────────────────
    let W = 0;
    let H = 0;
    let dpr = 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      W   = container.clientWidth;
      H   = container.clientHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      ctx.scale(dpr, dpr);
    };
    resize();

    // ── Init particles ────────────────────────────────────────────────────────
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = BASE_SPEED * (0.6 + Math.random() * 0.8);
      return {
        x:      rand(0, W),
        y:      rand(0, H),
        vx:     Math.cos(angle) * speed,
        vy:     Math.sin(angle) * speed,
        radius: rand(1.4, 3.4),
        orange: Math.random() < 0.32,
      };
    });

    // ── Mouse tracking ────────────────────────────────────────────────────────
    let mx = -9999;
    let my = -9999;

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // ── Animation loop ────────────────────────────────────────────────────────
    let raf: number;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      // Update
      for (const p of particles) {
        // Mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < MOUSE_DIST * MOUSE_DIST && dSq > 0.001) {
          const d  = Math.sqrt(dSq);
          const f  = MOUSE_FORCE * (1 - d / MOUSE_DIST);
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }

        // Speed cap (hard limit, keeps things organic)
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > SPEED_CAP) {
          const scale = SPEED_CAP / sp;
          p.vx *= scale;
          p.vy *= scale;
        }

        // Gentle speed floor: nudge drifting particles back into motion
        if (sp < BASE_SPEED * 0.3 && sp > 0.001) {
          const scale = (BASE_SPEED * 0.3) / sp;
          p.vx *= scale;
          p.vy *= scale;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Edge bounce
        if (p.x - p.radius < 0)  { p.x = p.radius;    p.vx =  Math.abs(p.vx); }
        if (p.x + p.radius > W)   { p.x = W - p.radius; p.vx = -Math.abs(p.vx); }
        if (p.y - p.radius < 0)  { p.y = p.radius;    p.vy =  Math.abs(p.vy); }
        if (p.y + p.radius > H)   { p.y = H - p.radius; p.vy = -Math.abs(p.vy); }
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 95, 0, ${alpha.toFixed(3)})`;
            ctx.lineWidth   = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.orange ? "#FF5F00" : "rgba(255, 255, 255, 0.75)";
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      // Reset scale before re-sizing to avoid compounding
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px]"
      style={{
        opacity:    faded ? 1 : 0,
        transition: "opacity 1.2s ease",
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
