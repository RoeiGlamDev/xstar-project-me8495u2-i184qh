import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Animation logic can be added here
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls />
        <FloatingSphere />
        <FloatingCube />
      </Canvas>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-pink-500">Welcome to luxury FashionTV cosmetics</h1>
        <p className="mt-4 text-lg text-gray-700">
          Elevate your beauty with our exquisite line of luxury cosmetics. Discover elegance and sophistication in every product.
        </p>
      </motion.div>
    </div>
  );
};

const FloatingSphere: React.FC = () => {
  return (
    <mesh position={[0, 1, 0]} scale={[0.5, 0.5, 0.5]} >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ff69b4" />
    </mesh>
  );
};

const FloatingCube: React.FC = () => {
  return (
    <mesh position={[2, 0, 0]} scale={[0.5, 0.5, 0.5]} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

export default FloatingElements;