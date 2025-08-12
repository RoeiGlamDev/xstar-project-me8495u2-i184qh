import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.reason) newErrors.reason = 'Please select a reason for contact.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., API call)
      console.log('Form submitted', formData);
    }
  };

  return (
    <section className="bg-white py-12 px-6">
      <motion.div
        className="text-4xl font-bold text-pink-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h2>
      <motion.div
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-pink-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-pink-600 font-medium mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border rounded-lg w-full p-3 ${errors.name ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-pink-600 font-medium mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border rounded-lg w-full p-3 ${errors.email ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-pink-600 font-medium mb-2" htmlFor="reason">
            Reason for Contact
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={border rounded-lg w-full p-3 ${errors.reason ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
          >
            <option value="">Select a reason...</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Feedback">Feedback</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-pink-600 font-medium mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={border rounded-lg w-full p-3 ${errors.message ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-10 text-center">
        <h3 className="text-pink-600 font-bold text-lg">Business Information</h3>
        <p className="text-gray-600">luxury FashionTV cosmetics</p>
        <p className="text-gray-600">123 Fashion Ave, Style City, CA 90210</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9am - 6pm</p>
      </div>
    </section>
  );
};

export default ContactSection;