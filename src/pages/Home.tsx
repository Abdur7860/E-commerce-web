import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);

  const frameDetails = {
    'premium-led': {
      title: 'Premium LED Frame',
      details: [
        'Integrated LED lighting system with uniform illumination',
        'Energy-efficient operation with low power consumption',
        'Even light distribution for perfect model visibility',
        'Customizable brightness settings with remote control',
        'Premium wood construction with reinforced corners',
        'Professional finish with anti-glare coating',
      ],
    },
    classic: {
      title: 'Classic Display',
      details: [
        'Traditional craftsmanship with hand-finished details',
        'High-quality wood materials for lasting durability',
        'Timeless design elements that complement any space',
        'Protective UV-resistant glass features',
        'Versatile mounting options (wall/shelf/standalone)',
        'Multiple color and finish options available',
      ],
    },
    'metal-diecast': {
      title: 'Premium Metal Diecast',
      details: [
        'Durable aircraft-grade aluminum construction',
        'Premium brushed metal finish options',
        'Weather and dust-resistant sealed design',
        'Modern minimalist design elements',
        'Professional-grade mounting hardware included',
        'Flexible installation for any display setup',
      ],
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            alt="Luxury Display Frame"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Showcase Your Passion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Premium display frames for your precious 1:24 and 1:32 diecast
              cars. Each frame is crafted to perfection, bringing your
              collection to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/catalog"
                className="inline-flex items-center px-8 py-3 bg-white text-black text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Collection <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Frames
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium LED Frame */}
            <div className="bg-white p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                alt="Premium Frame"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Premium LED Frame</h3>
              <p className="text-gray-600 mb-4">
                Perfect for 1:24 scale models
              </p>
              <button
                onClick={() => setSelectedFrame('premium-led')}
                className="inline-flex items-center text-black hover:underline"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </button>
            </div>

            {/* Classic Frame */}
            <div className="bg-white p-6 shadow-lg">
              <img
                src="src/pages/WhatsApp Image 2025-02-05 at 11.43.48_d65b6385.jpg"
                alt="Classic Frame"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Classic Display</h3>
              <p className="text-gray-600 mb-4">
                Timeless elegance for your collection
              </p>
              <button
                onClick={() => setSelectedFrame('classic')}
                className="inline-flex items-center text-black hover:underline"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </button>
            </div>

            {/* Premium Metal Diecast */}
            <div className="bg-white p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
                alt="Premium Metal Diecast"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Premium Metal Diecast</h3>
              <p className="text-gray-600 mb-4">
                Professional-grade display solution
              </p>
              <button
                onClick={() => setSelectedFrame('metal-diecast')}
                className="inline-flex items-center text-black hover:underline"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Modal */}
      {selectedFrame && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full p-8 relative"
          >
            <button
              onClick={() => setSelectedFrame(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-6">
              {frameDetails[selectedFrame].title}
            </h3>
            <ul className="space-y-4">
              {frameDetails[selectedFrame].details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <Link
                to="/catalog"
                className="inline-flex items-center px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                View in Catalog <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Frames
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80"
                alt="Premium Materials"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-4">Premium Materials</h3>
              <p className="text-gray-300">
                Crafted from the finest materials for lasting quality
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
                alt="Custom Lighting"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-4">Custom Lighting</h3>
              <p className="text-gray-300">
                LED lighting system with multiple modes
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                alt="Perfect Fit"
                className="w-full h-48 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-4">Perfect Fit</h3>
              <p className="text-gray-300">
                Designed specifically for 1:24 and 1:32 scale models
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
