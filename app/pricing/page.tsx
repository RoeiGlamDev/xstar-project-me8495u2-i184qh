import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
  service: string;
  price: string;
  description: string;
}

const pricingData: PricingItem[] = [
  {
    service: 'Luxury Makeup Application',
    price: '$150',
    description: 'Experience a full luxury makeup application by our top artists, tailored to your unique style.'
  },
  {
    service: 'Skincare Consultation',
    price: '$100',
    description: 'Personalized skincare consultations to enhance your natural beauty with our premium products.'
  },
  {
    service: 'Fashion Styling Session',
    price: '$200',
    description: 'Work with our fashion experts to curate your perfect look for any occasion.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 min-h-screen p-8">
      <motion.div 
        className="text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Pricing for luxury FashionTV cosmetics
      </motion.h1>
      
      <motion.div 
        className="mb-12"
        initial={{ y: -20 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Our Services</h2>
        <table className="min-w-full border border-pink-300">
          <thead>
            <tr className="bg-pink-100">
              <th className="border-b-2 border-pink-300 p-4">Service</th>
              <th className="border-b-2 border-pink-300 p-4">Price</th>
              <th className="border-b-2 border-pink-300 p-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="hover:bg-pink-50 transition duration-300">
                <td className="border-b border-pink-200 p-4">{item.service}</td>
                <td className="border-b border-pink-200 p-4">{item.price}</td>
                <td className="border-b border-pink-200 p-4">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">What products do you use?</h3>
            <p>We exclusively use high-end, luxury cosmetics that are cruelty-free and provide the best results for our clients.</p>
          </div>
          <div>
            <h3 className="font-bold">How can I book an appointment?</h3>
            <p>You can book an appointment directly through our website or by contacting our customer service.</p>
          </div>
          <div>
            <h3 className="font-bold">Do you offer group services?</h3>
            <p>Yes, we offer tailored packages for group bookings, perfect for events or special occasions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;