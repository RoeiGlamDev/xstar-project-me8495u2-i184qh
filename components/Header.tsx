import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-pink-500 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="luxury FashionTV cosmetics" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <motion.div
            href="#home"
            className="text-gray-800 hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          <nav className="flex flex-col space-y-2 p-4">
            <motion.div
              href="#home"
              className="text-gray-800 hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.div
              href="#products"
              className="text-gray-800 hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#about"
              className="text-gray-800 hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-gray-800 hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;