import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Carter',
    role: 'Founder & Creative Director',
    image: '/images/sophia-carter.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Lead Makeup Artist',
    image: '/images/liam-johnson.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Fashion Consultant',
    image: '/images/olivia-brown.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-pink-600">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury FashionTV cosmetics
        </motion.h2>
        <motion.div
          className="text-lg mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          At luxury FashionTV cosmetics, we believe that beauty is an art form, 
          crafted with the finest ingredients and designed for the modern, 
          sophisticated individual. Our journey began with a passion for fashion 
          and a commitment to creating high-end cosmetic products that celebrate 
          individuality and elegance.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          Our mission at luxury FashionTV cosmetics is to empower individuals 
          through the transformative power of cosmetics. We aim to provide 
          exquisite, high-quality products that embody luxury, sophistication, 
          and the essence of the fashion world, making every application a 
          celebration of beauty.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-lg font-bold text-center mt-2">{member.name}</h4>
              <p className="text-center text-pink-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-lg mt-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          At luxury FashionTV cosmetics, our values are rooted in quality, 
          innovation, and a passion for fashion. Join us on this luxurious 
          journey to redefine beauty.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;