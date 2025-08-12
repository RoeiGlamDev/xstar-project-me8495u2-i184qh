import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essence Collection',
    price: '$99',
    features: [
      'Exclusive color palettes',
      'Personalized shade consultation',
      '10% off first purchase',
    ],
  },
  {
    title: 'Deluxe Collection',
    price: '$199',
    features: [
      'Luxury packaging',
      'Custom fragrance selection',
      '20% off first purchase',
      'VIP access to FashionTV events',
    ],
  },
  {
    title: 'Signature Collection',
    price: '$299',
    features: [
      'Bespoke cosmetics creation',
      'One-on-one styling session',
      '30% off first purchase',
      'Lifetime membership benefits',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-pink-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans at luxury FashionTV cosmetics
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose your perfect luxury cosmetics experience with our exclusive
          pricing tiers.
        </p>
        <div className="flex justify-center space-x-8">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.title}
              className="bg-pink-100 rounded-lg p-6 shadow-lg w-72 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                {tier.title}
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-4">
                {tier.price}
              </p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;