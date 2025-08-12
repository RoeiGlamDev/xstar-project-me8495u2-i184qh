import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  links: { label: string; url: string }[];
  companyInfo: { address: string; phone: string; email: string };
  socialMedia: { platform: string; url: string; icon: JSX.Element }[];
}

const Footer: React.FC<FooterProps> = ({ links, companyInfo, socialMedia }) => {
  return (
    <footer className="bg-white text-pink-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">luxury FashionTV cosmetics</h2>
          <nav>
            <ul className="flex space-x-4">
              {links.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  className="transition-transform duration-200"
                >
                  <a href={link.url} className="text-pink-600 hover:text-pink-800">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
        
        <div className="mb-6">
          <p className="text-sm">
            {companyInfo.address} | {companyInfo.phone} | {companyInfo.email}
          </p>
        </div>

        <div className="flex space-x-4">
          {socialMedia.map((media) => (
            <motion.div
              key={media.platform}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-pink-600 hover:text-pink-800 transition-transform duration-200"
            >
              {media.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;