import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with luxury FashionTV cosmetics",
  description = "Join our exclusive community and be the first to know about new arrivals, special offers, and luxury beauty tips.",
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    // Handle email submission logic
    console.log('Email submitted:', email);
    setEmail('');
    setError('');
  };

  return (
    <div className="bg-white p-8 md:p-12 lg:p-16">
      <motion.div
        className="text-3xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-pink-600 rounded-lg p-2 flex-1 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
          required
        />
        <motion.div
          type="submit"
          className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterSection;