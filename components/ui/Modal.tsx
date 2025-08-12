import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            {title}
          </h2>
          <div className="text-gray-700 mb-4">
            {children}
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;