"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  radius: number;
  baseAngle: number;
  baseRadius: number;
  opacity: number;
  pulseOffset: number;
}

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: "capsule" | "circle";
  fieldStrength?: number;
}

export default function Antigravity({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = "#FF6B00",
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = "capsule",
  fieldStrength = 10,
}: AntigravityProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const rotationRef = useRef(0);

  const initParticles = useCallback(
    (w: number, h: number) => {
      const cx = w / 2;
      const cy = h / 2;
      const baseR = Math.min(w, h) * 0.35;
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const variance = (Math.random() - 0.5) * particleVariance * 3;
        const r = baseR * (ringRadius / 10) + variance * 20;
        const a = angle + variance * 0.5;

        particles.push({
          x: cx + Math.cos(a) * r,
          y: cy + Math.sin(a) * r,
          vx: 0,
          vy: 0,
          angle: a,
          radius: r,
          baseAngle: a,
          baseRadius: r,
          opacity: 0.3 + Math.random() * 0.5,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;
    },
    [count, ringRadius, particleVariance],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();
    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      timeRef.current += dt;
      rotationRef.current += rotationSpeed * dt;

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const magR = Math.min(w, h) * 0.35 * (magnetRadius / 10);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rot = rotationRef.current;

        // Target position on ring with wave
        const wave =
          Math.sin(
            timeRef.current * waveSpeed * p.pulseOffset + p.baseAngle * 2,
          ) *
          waveAmplitude *
          15;
        const targetR = p.baseRadius + wave;
        const targetAngle = p.baseAngle + rot * depthFactor;

        const tx = cx + Math.cos(targetAngle) * targetR;
        const ty = cy + Math.sin(targetAngle) * targetR;

        // Lerp towards target position
        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * lerpSpeed * 60 * dt;
        p.vy += dy * lerpSpeed * 60 * dt;

        // Magnetic field: particles near center get pulled
        const distFromCenter = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
        if (distFromCenter < magR) {
          const nx = (cx - p.x) / (distFromCenter + 1);
          const ny = (cy - p.y) / (distFromCenter + 1);
          const magForce = (1 - distFromCenter / magR) * fieldStrength * 0.02;
          p.vx += nx * magForce * 60 * dt;
          p.vy += ny * magForce * 60 * dt;
        }

        // Damping
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Pulse opacity
        const pulse =
          Math.sin(timeRef.current * pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
        const alpha = p.opacity * pulse;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;

        if (particleShape === "capsule") {
          const capsuleAngle = Math.atan2(p.vy || 0.01, p.vx || 0.01);
          const len = particleSize * 2.5;
          const r = particleSize;

          ctx.translate(p.x, p.y);
          ctx.rotate(capsuleAngle);
          ctx.beginPath();
          ctx.moveTo(-len / 2, -r);
          ctx.lineTo(len / 2, -r);
          ctx.arc(len / 2, 0, r, -Math.PI / 2, Math.PI / 2);
          ctx.lineTo(-len / 2, r);
          ctx.arc(-len / 2, 0, r, Math.PI / 2, -Math.PI / 2);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    if (autoAnimate) {
      animFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [
    autoAnimate,
    initParticles,
    lerpSpeed,
    waveSpeed,
    waveAmplitude,
    magnetRadius,
    fieldStrength,
    depthFactor,
    rotationSpeed,
    particleSize,
    particleShape,
    pulseSpeed,
    color,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
