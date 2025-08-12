import React from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTAProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 px-4">
      <motion.div
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-xl text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        className="bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        onClick={onButtonClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default function