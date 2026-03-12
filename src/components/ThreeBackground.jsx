import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Float } from "@react-three/drei/core/Float.js";
import { MeshDistortMaterial } from "@react-three/drei/core/MeshDistortMaterial.js";
import { PointMaterial } from "@react-three/drei/core/PointMaterial.js";
import { Points } from "@react-three/drei/core/Points.js";
import { Icosahedron } from "@react-three/drei/core/shapes.js";

function Orb() {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 10]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ff7a18"
          emissive="#ff7a18"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.25}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.7}
        />
      </Icosahedron>
    </Float>
  );
}

function Dust() {
  const points = useMemo(() => {
    const particles = new Float32Array(400 * 3);
    for (let index = 0; index < 400; index += 1) {
      particles[index * 3] = (Math.random() - 0.5) * 10;
      particles[index * 3 + 1] = (Math.random() - 0.5) * 10;
      particles[index * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return particles;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial size={0.03} color="#ffd7bc" transparent opacity={0.55} depthWrite={false} />
    </Points>
  );
}

export function ThreeBackground({ className }) {
  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 3]} intensity={12} color="#ff7a18" />
        <pointLight position={[-2, -1, 2]} intensity={8} color="#56a4ff" />
        <Dust />
        <Orb />
      </Canvas>
    </div>
  );
}
