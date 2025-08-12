import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      aria-label={title}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-pink-500 text-2xl font-bold mb-2">
          luxury FashionTV cosmetics: {title}
        </h2>
        <p className="text-white text-lg mb-4">
          {description}
        </p>
        <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-600 transition-colors">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;