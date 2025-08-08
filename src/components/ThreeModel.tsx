import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function RobotModel() {
  // For now, we'll use a simple geometric representation
  // In production, you'd load an actual 3D model file
  return (
    <group>
      {/* Robot Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2, 0.2, 1]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      
      {/* Robot Body */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Cleaning Brushes */}
      <mesh position={[0, -1.2, 0.6]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      
      {/* Solar Panel (being cleaned) */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[3, 0.05, 2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Control Unit */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
}

export default function ThreeModel() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden card-shadow">
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}