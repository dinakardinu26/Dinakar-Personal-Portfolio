"use client";

import { useRef, useEffect, useCallback } from "react";

const COLORS = [
  "#00e5ff", // bright cyan
  "#7c3aed", // vivid purple
  "#f97316", // vibrant orange
  "#ec4899", // hot pink
  "#22c55e", // bright green
  "#eab308", // golden yellow
  "#3b82f6", // electric blue
  "#f43f5e", // rose red
];

class Particle {
  constructor(canvasW, canvasH) {
    this.reset(canvasW, canvasH);
  }

  reset(canvasW, canvasH) {
    // Resting position – scattered across entire canvas with some depth zones
    this.originX = Math.random() * canvasW;
    this.originY = Math.random() * canvasH;
    this.x = this.originX;
    this.y = this.originY;

    this.vx = 0;
    this.vy = 0;

    // Each particle has a random base size
    this.baseSize = Math.random() * 3.5 + 1.5;
    this.size = this.baseSize;

    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.alpha = Math.random() * 0.5 + 0.4;

    // Spring & friction constants
    this.ease = 0.07 + Math.random() * 0.04;   // return speed
    this.friction = 0.88 + Math.random() * 0.06; // velocity damping
    this.density = Math.random() * 25 + 5;       // repulsion mass
  }

  update(mouse) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const repelRadius = mouse.radius;

    if (mouse.x !== null && dist < repelRadius) {
      // Push particle away from cursor with force proportional to proximity
      const force = (repelRadius - dist) / repelRadius;
      const angle = Math.atan2(dy, dx);
      const pushX = Math.cos(angle) * force * this.density * 0.6;
      const pushY = Math.sin(angle) * force * this.density * 0.6;

      this.vx -= pushX;
      this.vy -= pushY;

      // Slightly enlarge particles near cursor
      this.size = this.baseSize + force * 2;
    } else {
      this.size = this.baseSize;
    }

    // Spring force pulling particle back to origin
    this.vx += (this.originX - this.x) * this.ease;
    this.vy += (this.originY - this.y) * this.ease;

    // Apply friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    // Integrate position
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function ParticleGlobe() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 130 });

  const PARTICLE_COUNT = 350;

  const initParticles = useCallback((w, h) => {
    particlesRef.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push(new Particle(w, h));
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Soft fade trail effect instead of full clear for a glowing ghost trail
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw subtle connecting lines between nearby particles
    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 70) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 70) * 0.12;
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    for (const p of particles) {
      p.update(mouseRef.current);
      p.draw(ctx);
    }

    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    animate();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate, initParticles]);

  // Mouse move on parent (the hero section, not the canvas)
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.x = null;
    mouseRef.current.y = null;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "all",
        display: "block",
      }}
    />
  );
}
