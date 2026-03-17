"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const Particles = ({ count = 4000, theme }) => {
  const points = useRef(null);
  
  // Choose particle color based on theme
  const particleColor = theme === "dark" ? "#00f0ff" : "#0076ff";

  // Generate particles in a spherical volume
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Uniform spherical distribution
        const r = 2.5 * Math.cbrt(Math.random()); 
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      // Base rotation
      points.current.rotation.y = state.clock.elapsedTime * 0.15;
      points.current.rotation.z = state.clock.elapsedTime * 0.05;
      
      // Interactive mouse follow with lerp for smoothness
      points.current.rotation.y += (state.mouse.x * 0.5 - points.current.rotation.y) * 0.05;
      points.current.rotation.x += (-state.mouse.y * 0.5 - points.current.rotation.x) * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={particleColor}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export default function ParticleGlobe() {
  const { theme, systemTheme } = useTheme();
  // Ensure we get the actual resolved theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "450px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
        <Particles count={3500} theme={currentTheme} />
      </Canvas>
    </div>
  );
}
