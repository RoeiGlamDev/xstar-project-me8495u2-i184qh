import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  photoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia L.',
    content: 'The luxury FashionTV cosmetics line transformed my makeup routine! The quality is unparalleled, and the shades are absolutely stunning.',
    rating: 5,
    photoUrl: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Isabella T.',
    content: 'I’ve never felt more glamorous! The lipsticks from luxury FashionTV cosmetics are my new obsession. They glide on beautifully and last all day.',
    rating: 5,
    photoUrl: '/images/testimonials/isabella.jpg',
  },
  {
    name: 'Chloe M.',
    content: 'Luxury FashionTV cosmetics is a game changer! The foundation leaves my skin looking flawless, and I’ve received endless compliments.',
    rating: 5,
    photoUrl: '/images/testimonials/chloe.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-pink-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 rounded-lg shadow-lg p-6 m-4 w-80 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={testimonial.photoUrl} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full mx-auto mb-4" 
              />
              <p className="text-gray-700 italic mb-2">"{testimonial.content}"</p>
              <p className="font-semibold text-pink-500">{testimonial.name}</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-pink-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.428 8.244 1.194-5.95 5.785 1.404 8.183L12 18.896l-7.366 3.87 1.404-8.183-5.95-5.785 8.244-1.194z"/></svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;