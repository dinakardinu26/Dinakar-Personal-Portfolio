"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function ParticleSphere() {
  const containerRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles setup
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    // Colors
    // Accent: var(--accent) which is #0076ff or similar, let's use a nice vibrant blue/cyan mix
    const colorPrimary = new THREE.Color(0x0076ff); // Deep Blue
    const colorSecondary = new THREE.Color(0x00f0ff); // Cyan

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create points forming a sphere
      const r = 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      // Add a bit of noise
      posArray[i] = x + (Math.random() - 0.5) * 0.2;
      posArray[i + 1] = y + (Math.random() - 0.5) * 0.2;
      posArray[i + 2] = z + (Math.random() - 0.5) * 0.2;

      // Mix colors based on position
      const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
      colorArray[i] = mixedColor.r;
      colorArray[i + 1] = mixedColor.g;
      colorArray[i + 2] = mixedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Interaction vars
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event) => {
      // Calculate mouse position bounded to -1 to 1 for generic interaction
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotate towards target
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.001;

      // Mouse interaction effect
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

      // Float effect
      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.1;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: "100%", 
        height: "100%", 
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} 
    />
  );
}
