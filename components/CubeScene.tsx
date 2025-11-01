"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState, useMemo } from "react";

// single small cube
function SmallCube({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial
        color={color}
        roughness={0.15}
        metalness={0.05}
        emissive={new THREE.Color(color).multiplyScalar(0.25)}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

function RubiksCubeGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * Math.PI;
    const y = (e.clientY / window.innerHeight - 0.5) * Math.PI;
    setMouse({ x, y });
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += (mouse.y - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (mouse.x - groupRef.current.rotation.y) * 0.05;
    }
  });

  const colors = ["#1d8bf5", "#f50f39", "#fc920f", "#f5e20f", "#45db04", "#faf9f7"];

  // ✅ useMemo → randomize colors only once
  const smallCubes = useMemo(() => {
    const cubes = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          cubes.push(<SmallCube key={`${x}-${y}-${z}`} position={[x, y, z]} color={color} />);
        }
      }
    }
    return cubes;
  }, []); // 👈 run only once when mounted

  return (
    <group ref={groupRef} onPointerMove={handlePointerMove}>
      {smallCubes}
    </group>
  );
}

export default function RubiksCube() {
  return (
    <div className="w-full h-screen bg-[#f5f5f5]">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} color={"#ffffff"} />
        <pointLight position={[-5, -5, 5]} intensity={1.5} color={"#b3d9ff"} />
        <RubiksCubeGroup />
      </Canvas>
    </div>
  );
}
