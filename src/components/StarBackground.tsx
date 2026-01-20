"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useStarCanvas } from "./StarCanvasContext";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const { isVisible } = useStarCanvas();

  const [sphere] = useState(() => {
    // Generate sphere positions with proper validation
    const count = 5000;
    const radius = 1.2;
    const positions = new Float32Array(count * 3);
    
    try {
      // Try using maath random.inSphere
      const maathPositions = random.inSphere(new Float32Array(count * 3), { radius });
      
      // Validate and copy positions, replacing any invalid values
      let invalidCount = 0;
      for (let i = 0; i < maathPositions.length; i++) {
        const value = maathPositions[i];
        if (isFinite(value) && !isNaN(value)) {
          positions[i] = value;
        } else {
          invalidCount++;
          positions[i] = 0; // Temporary placeholder
        }
      }
      
      // If we found invalid values, regenerate those positions
      if (invalidCount > 0) {
        for (let i = 0; i < positions.length; i += 3) {
          // Check if this point has any invalid values
          if (!isFinite(positions[i]) || !isFinite(positions[i + 1]) || !isFinite(positions[i + 2])) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius;
            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);
          }
        }
      }
    } catch (error) {
      // Fallback: generate sphere positions manually
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
    }
    
    // Final validation pass to ensure no NaN or infinite values
    for (let i = 0; i < positions.length; i++) {
      if (!isFinite(positions[i]) || isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!isVisible) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="pointer-events-none fixed inset-0 z-[-1] h-auto w-full">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
