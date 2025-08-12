import React from 'react';
import { motion } from 'framer-motion';

const heroAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const featureAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-pink-500">
      <header className="flex justify-between items-center p-6 bg-pink-500">
        <h1 className="text-4xl font-bold">luxury FashionTV cosmetics</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-white transition duration-200">Home</li>
            <li className="hover:text-white transition duration-200">Products</li>
            <li className="hover:text-white transition duration-200">About Us</li>
            <li className="hover:text-white transition duration-200">Contact</li>
          </ul>
        </nav>
      </header>

      <main className="p-8">
        <motion.section
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={heroAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Welcome to luxury FashionTV cosmetics</h2>
          <p className="text-lg">Where elegance meets beauty. Explore our exclusive luxury cosmetics line.</p>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={featureAnimation}
          transition={{ duration: 0.5 }}
        >
          <div className="border-2 border-pink-500 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Premium Ingredients</h3>
            <p className="mt-2">Our products are formulated with the finest ingredients, ensuring quality and luxury.</p>
          </div>
          <div className="border-2 border-pink-500 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Exclusive Collections</h3>
            <p className="mt-2">Discover our limited edition collections curated just for you.</p>
          </div>
          <div className="border-2 border-pink-500 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Sustainable Luxury</h3>
            <p className="mt-2">We believe in beauty that is both luxurious and sustainable.</p>
          </div>
        </motion.section>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold">Join the luxury FashionTV cosmetics Experience</h2>
          <p className="mt-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 p-2 border border-pink-500 rounded-lg"
            aria-label="Email for newsletter subscription"
          />
          <button className="ml-2 bg-pink-500 text-white p-2 rounded-lg hover:bg-white hover:text-pink-500 transition duration-300">
            Subscribe
          </button>
        </div>
      </main>

      <footer className="bg-pink-500 text-white text-center p-4 mt-12">
        <p>&copy; 2023 luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;