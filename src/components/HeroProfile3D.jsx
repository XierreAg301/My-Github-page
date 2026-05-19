import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function GlowTorus({ color, radius, tube, speed, direction }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * direction;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7 * direction;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
}

function DustParticles({ count }) {
  const ref = useRef();
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 1.3 + Math.random() * 0.4;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00ff41" size={0.02} sizeAttenuation transparent opacity={0.6} depthWrite={false} />
    </points>
  );
}

export default function HeroProfile3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[0.8, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 2], fov: 45, near: 0.1, far: 5 }}
        style={{ background: 'transparent' }}
      >
        <GlowTorus color="#00ff41" radius={1.28} tube={0.018} speed={0.6} direction={1} />
        <GlowTorus color="#00e5ff" radius={1.42} tube={0.012} speed={0.4} direction={-1} />
        <DustParticles count={60} />
      </Canvas>
    </div>
  );
}
