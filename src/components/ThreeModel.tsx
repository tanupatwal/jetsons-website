import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function RobotModel() {
  const { scene } = useGLTF('/models/panel_with_robot.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={[1, 1, 1]} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]} 
    />
  );
}

// Preload the GLB file
useGLTF.preload('/models/panel_with_robot.glb');

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