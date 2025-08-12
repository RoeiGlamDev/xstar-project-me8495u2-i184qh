import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com'], // Replace with your actual image source domain
  },
  optimization: {
    minimize: true,
    minimizer: [
      // Add custom minimizer if needed
    ]
},
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
  // Additional configurations can be added as needed
}

export default nextConfig;