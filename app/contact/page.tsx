import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-pink-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-pink-50 p-8 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-pink-600">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full p-2 border border-pink-300 rounded focus:border-pink-500 focus:ring focus:ring-pink-200"
          />
        </label>
        <label className="block mb-4">
          <span className="text-pink-600">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-pink-300 rounded focus:border-pink-500 focus:ring focus:ring-pink-200"
          />
        </label>
        <label className="block mb-4">
          <span className="text-pink-600">Message</span>
          <textarea
            name="message"
            required
            className="mt-1 block w-full p-2 border border-pink-300 rounded focus:border-pink-500 focus:ring focus:ring-pink-200"
          ></textarea>
        </label>
        <motion.div
          type="submit"
          className="w-full bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-center">
        <motion.div
          className="text-2xl font-semibold text-pink-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Location
        </motion.h2>
        <p className="text-gray-700 mt-2">Visit us at our flagship store:</p>
        <p className="text-pink-600 font-bold mt-1">123 Luxury Ave, Fashion City</p>
        <p className="text-gray-700">Business Hours: Monday - Friday, 10 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default Contact;