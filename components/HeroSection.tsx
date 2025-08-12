import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  headline: string;
  subheading: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subheading }) => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-white h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          luxury FashionTV cosmetics
        </h1>
        <p className="text-xl text-white mb-8">
          {subheading}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Shop Now
        </motion.button>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ml-4"
        >
          Explore Our Collection
        </motion.button>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-sm">
          Trusted by top fashion influencers and beauty experts.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;