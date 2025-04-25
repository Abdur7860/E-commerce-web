import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, Shield } from 'lucide-react';

const Shipping = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
        <p className="text-gray-600">
          We ensure safe and timely delivery of your premium display frames.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Truck size={24} />
            </div>
            <h2 className="text-xl font-bold">Shipping Fee</h2>
          </div>
          <p className="text-gray-600">
            Flat rate of ₹150 for all-India shipping. Free shipping on orders above ₹5000.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Package size={24} />
            </div>
            <h2 className="text-xl font-bold">Secure Packaging</h2>
          </div>
          <p className="text-gray-600">
            Each frame is carefully packaged with premium materials to ensure maximum protection during transit.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Clock size={24} />
            </div>
            <h2 className="text-xl font-bold">Delivery Time</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Metro Cities: 3-5 business days</li>
            <li>• Other Cities: 5-7 business days</li>
            <li>• Remote Areas: 7-10 business days</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Shield size={24} />
            </div>
            <h2 className="text-xl font-bold">Damage-Free Guarantee</h2>
          </div>
          <p className="text-gray-600">
            We guarantee damage-free delivery or full replacement at no additional cost.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gray-50 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Shipping Process</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-2">Order Processing</h3>
              <p className="text-gray-600">Orders are processed within 24 hours of placement.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">Each frame undergoes thorough inspection before packaging.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-gray-600">Premium packaging materials ensure maximum protection.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
              4
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shipping & Tracking</h3>
              <p className="text-gray-600">Real-time tracking information provided via email and SMS.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Shipping;