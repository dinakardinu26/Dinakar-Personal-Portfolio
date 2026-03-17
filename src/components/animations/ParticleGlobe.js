"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Individual color-group of particles
const ColoredParticles = ({ count, color, spread = 14, yRange = 6, speedMultiplier = 1 }) => {
  const points = useRef(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * spread;        // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * yRange;        // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;             // z

      vel[i * 3]     = (Math.random() - 0.5) * 0.004 * speedMultiplier;  // vx
      vel[i * 3 + 1] = (Math.random() * 0.005 + 0.001) * speedMultiplier; // vy upward drift
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003 * speedMultiplier;  // vz
    }

    return { positions: pos, velocities: vel };
  }, [count, spread, yRange, speedMultiplier]);

  useFrame(() => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3]     += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];

      // Wrap particles when they drift off screen
      if (pos[i * 3 + 1] > yRange / 2) {
        pos[i * 3 + 1] = -yRange / 2;
        pos[i * 3]     = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
      if (Math.abs(pos[i * 3]) > spread / 2) {
        pos[i * 3] = -Math.sign(pos[i * 3]) * (spread / 2 - 0.5);
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color={color}
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

// A slow, subtle camera drift to add depth
const CameraDrift = () => {
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame(({ camera, mouse }) => {
    targetX.current = mouse.x * 0.4;
    targetY.current = mouse.y * 0.2;
    camera.position.x += (targetX.current - camera.position.x) * 0.04;
    camera.position.y += (targetY.current - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function ParticleGlobe() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 70 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Multicolor particle groups — Antigravity-style */}
        <ColoredParticles count={500} color="#00cfff" spread={18} yRange={8} speedMultiplier={0.8} />  {/* Cyan     */}
        <ColoredParticles count={400} color="#a855f7" spread={18} yRange={8} speedMultiplier={1.0} />  {/* Purple   */}
        <ColoredParticles count={350} color="#fb923c" spread={18} yRange={8} speedMultiplier={1.2} />  {/* Orange   */}
        <ColoredParticles count={300} color="#f472b6" spread={18} yRange={8} speedMultiplier={0.9} />  {/* Pink     */}
        <ColoredParticles count={350} color="#4ade80" spread={18} yRange={8} speedMultiplier={1.1} />  {/* Green    */}
        <ColoredParticles count={400} color="#facc15" spread={18} yRange={8} speedMultiplier={0.7} />  {/* Yellow   */}
        <CameraDrift />
      </Canvas>
    </div>
  );
}
