"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ParticleGlobe() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Only run on client and if canvas exists
    if (!canvasRef.current) return;
    
    // Disable on mobile to save performance/battery, just like the preview
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let w, h;

    const resize = () => {
      // The canvas fills its relative parent
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Orbital configuration
    const COLORS = ['#6c63ff', '#00d4ff', '#ffffff', '#b8b0ff'];
    const TRAIL = 12;
    const N = 90;

    let cx = w / 2;
    let cy = h / 2;
    let tx = w / 2;
    let ty = h / 2;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };
    
    // Attach mouse listener to window to catch movements anywhere
    window.addEventListener('mousemove', onMouseMove);

    const rings = [
      { rxF: 0.38, ryF: 0.22, a: 0, speed: 0.0005,  color: 'rgba(108,99,255,0.12)', lw: 1 },
      { rxF: 0.28, ryF: 0.30, a: 0, speed: -0.0003, color: 'rgba(0,212,255,0.07)',  lw: 0.6 },
      { rxF: 0.48, ryF: 0.14, a: 0, speed: -0.0007, color: 'rgba(255,255,255,0.04)',lw: 0.3 },
    ];

    const particles = Array.from({ length: N }, () => ({
      radius: 80 + Math.random() * 180,
      angle: Math.random() * Math.PI * 2,
      speed: (0.002 + Math.random() * 0.006) * (Math.random() < 0.5 ? 1 : -1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 1 + Math.random() * 1.8,
      trail: [],
    }));

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // LERP center toward mouse target
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;

      // Draw faint elliptical rings
      rings.forEach(r => {
        r.a += r.speed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(r.a);
        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.lw;
        ctx.beginPath();
        // Fallback for older browsers if ellipse is not supported, though modern ones do
        if (ctx.ellipse) {
          ctx.ellipse(0, 0, w * r.rxF, h * r.ryF, 0, 0, Math.PI * 2);
        }
        ctx.stroke();
        ctx.restore();
      });

      // Draw particles and trails
      particles.forEach(p => {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius * 0.52; // flattened y to match 3D perspective
        p.trail.push({ x, y });
        if (p.trail.length > TRAIL) p.trail.shift();

        // Draw trail dots
        p.trail.forEach((pt, i) => {
          const alpha = (i / TRAIL) * 0.55;
          const r = Math.max(0.3, p.size * (i / TRAIL) * 0.9);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.shadowBlur = 14;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Draw main head particle
        ctx.save();
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,  // Stays behind text
        pointerEvents: "none", // Let clicks pass through to text/buttons
        display: "block",
      }}
    />
  );
}
