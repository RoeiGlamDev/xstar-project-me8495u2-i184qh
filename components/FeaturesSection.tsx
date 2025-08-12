import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Exclusive Collections',
    description: 'Discover our exclusive and limited-edition cosmetic collections that embody the essence of luxury.',
    icon: <i className="fas fa-gem text-pink-500"></i>,
  },
  {
    id: 2,
    title: 'Premium Quality',
    description: 'Each product is crafted with the finest ingredients, ensuring a luxurious experience for your skin.',
    icon: <i className="fas fa-star text-pink-500"></i>,
  },
  {
    id: 3,
    title: 'Personalized Consultation',
    description: 'Enjoy tailored beauty consultations to find the perfect products for your unique style and needs.',
    icon: <i className="fas fa-user-circle text-pink-500"></i>,
  },
  {
    id: 4,
    title: 'Sustainable Luxury',
    description: 'Embrace beauty with a conscience through our eco-friendly and sustainable product lines.',
    icon: <i className="fas fa-leaf text-pink-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-pink-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Luxury with luxury FashionTV cosmetics
        </motion.h2>
        <motion.div
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Elevate your beauty routine with our exquisite selection of cosmetics tailored for the modern fashionista.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <motion.div
              key={feature.id}
              className="bg-pink-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-pink-500">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;