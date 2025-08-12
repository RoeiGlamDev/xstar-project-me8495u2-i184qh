import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Carter',
    position: 'Founder & CEO',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Creative Director',
    imageUrl: '/images/liam.jpg',
  },
  {
    name: 'Isabella Brown',
    position: 'Head of Marketing',
    imageUrl: '/images/isabella.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 min-h-screen flex flex-col">
      <header className="py-10 text-center">
        <motion.div 
          className="text-5xl font-bold"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          About luxury FashionTV cosmetics
        </motion.h1>
      </header>
      
      <section className="px-5 py-10">
        <motion.div 
          className="text-4xl font-semibold mb-5" 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="text-lg leading-relaxed">
          Established in 2020, luxury FashionTV cosmetics was born from a passion for elegance and sophistication in beauty. Our brand embodies the essence of high fashion, providing premium cosmetic products that enhance natural beauty while reflecting the latest trends in the fashion industry. We believe that beauty is an art form, and our mission is to empower individuals to express themselves through luxurious cosmetics.
        </p>
      </section>

      <section className="px-5 py-10 bg-pink-100">
        <motion.div 
          className="text-4xl font-semibold mb-5" 
          initial={{ x: -20 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <ul className="list-disc pl-5">
          <li className="text-lg leading-relaxed">Quality: We prioritize high-quality ingredients and formulations that deliver the best results.</li>
          <li className="text-lg leading-relaxed">Innovation: We constantly seek new trends and technologies to enhance our product offerings.</li>
          <li className="text-lg leading-relaxed">Sustainability: We are committed to eco-friendly practices and responsible sourcing.</li>
          <li className="text-lg leading-relaxed">Inclusivity: Our products are designed to celebrate and enhance beauty in all its forms.</li>
        </ul>
      </section>

      <section className="px-5 py-10">
        <motion.div 
          className="text-4xl font-semibold mb-5" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map(member => (
            <motion.div 
              key={member.name} 
              className="bg-white p-5 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-3" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-md text-gray-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-5 text-center bg-pink-200">
        <p className="text-lg">&copy; {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;