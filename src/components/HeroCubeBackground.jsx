import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei/core/Float.js";
import { Environment } from "@react-three/drei/core/Environment.js";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CubeCluster({ offset = { x: 0, y: 0 } }) {
  const groupRef = useRef(null);

  const accents = useMemo(
    () => [
      { position: [-2.8, 1.4, -1.2], scale: 0.45, color: "#ffd6b8" },
      { position: [2.6, -1.2, -1.5], scale: 0.35, color: "#ffb36f" },
      { position: [1.9, 1.8, -2.2], scale: 0.25, color: "#ffe4d0" },
      { position: [-2.1, -1.7, -1.8], scale: 0.3, color: "#ffc692" },
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.08;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.position.x += ((offset.x / 180) - groupRef.current.position.x) * 0.035;
    groupRef.current.position.y += ((offset.y / 220) - groupRef.current.position.y) * 0.035;
  });

  return (
    <group ref={groupRef} position={[0.9, 0.15, 0]}>
      <Float speed={1.15} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh position={[1.7, 0.2, -0.7]} rotation={[0.45, 0.6, 0.1]}>
          <boxGeometry args={[2.9, 2.9, 2.9]} />
          <meshPhysicalMaterial
            color="#fff3ea"
            metalness={0.08}
            roughness={0.04}
            transmission={1}
            thickness={1.4}
            ior={1.18}
            transparent
            opacity={0.24}
            reflectivity={0.75}
            envMapIntensity={1.1}
          />
        </mesh>

        <lineSegments position={[1.7, 0.2, -0.7]} rotation={[0.45, 0.6, 0.1]}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.92, 2.92, 2.92)]} />
          <lineBasicMaterial color="#ffd5b8" transparent opacity={0.45} />
        </lineSegments>
      </Float>

      <Float speed={1.35} rotationIntensity={0.45} floatIntensity={0.75}>
        <mesh position={[0.15, -0.25, -2.3]} rotation={[0.3, -0.55, 0.25]}>
          <boxGeometry args={[1.55, 1.55, 1.55]} />
          <meshPhysicalMaterial
            color="#ffbb86"
            metalness={0.1}
            roughness={0.06}
            transmission={1}
            thickness={1.1}
            ior={1.16}
            transparent
            opacity={0.18}
            reflectivity={0.68}
            envMapIntensity={0.95}
          />
        </mesh>
      </Float>

      {accents.map((accent) => (
        <Float
          key={accent.position.join("-")}
          speed={1.1}
          rotationIntensity={0.55}
          floatIntensity={0.95}
        >
          <mesh position={accent.position} scale={accent.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={accent.color}
              emissive={accent.color}
              emissiveIntensity={0.18}
              transparent
              opacity={0.72}
              roughness={0.24}
              metalness={0.16}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function HeroCubeBackground({ className, offset }) {
  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 8], fov: 34 }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#05070c", 8, 16]} />
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 4, 6]} intensity={1.8} color="#ffd8bf" />
        <pointLight position={[2, 1, 4]} intensity={18} color="#ff7a18" />
        <pointLight position={[-3, -2, 3]} intensity={10} color="#ffd8bf" />
        <CubeCluster offset={offset} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
