import { useRef } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  className?: string;
}

const AnimatedSphere = () => {
  const ref = React.useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FF69B4" />
    </mesh>
  );
};

const Scene: React.FC<SceneProps> = ({ className }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className`}}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <Html>
          <motion.div
            className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            luxury FashionTV cosmetics
          </motion.div>
        </Html>
      </Canvas>
    </div>
  );
};

export default Scene;