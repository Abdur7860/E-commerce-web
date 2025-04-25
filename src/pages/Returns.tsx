import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

const Returns = () => {
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
        <h1 className="text-4xl font-bold mb-4">Return Policy</h1>
        <p className="text-gray-600">
          We want you to be completely satisfied with your purchase.
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-black text-white p-3 rounded-full">
              <RefreshCw size={24} />
            </div>
            <h2 className="text-xl font-bold">Return Window</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>• 14-day return window from the date of delivery</p>
            <p>• Item must be unused and in original packaging</p>
            <p>• All accessories and documentation must be included</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-black text-white p-3 rounded-full">
              <AlertCircle size={24} />
            </div>
            <h2 className="text-xl font-bold">Return Conditions</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>Returns are accepted for the following reasons:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Received damaged or defective item</li>
              <li>Received incorrect item</li>
              <li>Item doesn't match the description</li>
              <li>Change of mind (restocking fee may apply)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-black text-white p-3 rounded-full">
              <CheckCircle size={24} />
            </div>
            <h2 className="text-xl font-bold">Refund Process</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>1. Initiate return request through your account or contact support</p>
            <p>2. Receive return shipping label and instructions</p>
            <p>3. Pack item securely in original packaging</p>
            <p>4. Ship item back using provided label</p>
            <p>5. Refund processed within 5-7 business days after inspection</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-black text-white p-3 rounded-full">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-xl font-bold">Return Shipping</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>• Free return shipping for damaged or incorrect items</p>
            <p>• Return shipping fee of ₹150 for change of mind returns</p>
            <p>• Use only authorized shipping partners</p>
            <p>• Tracking information must be provided</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          Need help with a return?{' '}
          <a href="/contact" className="text-black hover:underline">
            Contact our support team
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Returns;