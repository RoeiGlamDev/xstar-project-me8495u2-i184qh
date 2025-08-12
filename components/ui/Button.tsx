import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const buttonVariants = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600',
    secondary: 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
    return (
        <motion.div
            className={`font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out ${buttonVariants[variant]`} ${className}}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={luxury FashionTV cosmetics ${variant} button}
        >
            {children}
        </motion.button>
    );
};

export default Button;