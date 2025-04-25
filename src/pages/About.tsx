import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rahul Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    description: 'With 15 years of experience in premium collectibles, Rahul leads our vision for excellence.'
  },
  {
    name: 'Priya Patel',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    description: 'Priya brings her expertise in industrial design to create our stunning display solutions.'
  },
  {
    name: 'Amit Kumar',
    role: 'Production Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    description: 'Amit ensures the highest quality standards in every frame we produce.'
  },
  {
    name: 'Maya Singh',
    role: 'Customer Experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    description: 'Maya leads our customer support team, ensuring satisfaction with every purchase.'
  }
];

const specialties = [
  {
    icon: <Award size={32} />,
    title: 'Premium Wooden 3D Frames',
    description: 'Hand-crafted frames using premium hardwood, designed for optimal display and protection.'
  },
  {
    icon: <Shield size={32} />,
    title: 'High-Quality Metal Die-Cast',
    description: 'Aircraft-grade aluminum construction with precision engineering for durability.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Professional Lighting Solutions',
    description: 'State-of-the-art LED lighting systems with customizable settings for perfect illumination.'
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded in 2020, DiecastFrames has become India's premier provider of
              premium display solutions for collectors. Our passion for perfection
              drives everything we do.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to create
              the perfect display solutions for your precious collections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of experts brings together decades of experience
              in collectibles, design, and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center"
              >
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;