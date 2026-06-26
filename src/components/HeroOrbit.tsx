"use client";

import Antigravity from "./Antigravity";

export default function HeroOrbit() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Orange glow behind particles */}
      <div className="absolute inset-0 rounded-full bg-orange-100/20 blur-3xl scale-50" />

      <Antigravity
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#FF6B00"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />
    </div>
  );
}
