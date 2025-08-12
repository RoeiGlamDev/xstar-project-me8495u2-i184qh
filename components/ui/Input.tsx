import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required = false, validationMessage }) => {const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    if (required && !value) {
      setIsError(true);} else {
      setIsError(false);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className={text-lg font-semibold ${isError ? 'text-red-600' : 'text-pink-600'}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onFocus={() => setIsFocused(true)}
        className={mt-2 p-3 border-2 rounded-md transition duration-300 
                    ${isError ? 'border-red-600' : 'border-pink-300'} 
                    ${isFocused ? 'border-pink-500' : 'border-white'} 
                    focus:outline-none focus:ring-2 focus:ring-pink-300}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {isError && validationMessage && (
        <p className="text-red-600 text-sm mt-1">{validationMessage}</p>
      )}
    </div>
  );
};

export default Input;