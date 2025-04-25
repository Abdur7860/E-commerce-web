import React from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-gray-600 mb-8">
            Sign in to your account to manage your orders, track shipments, and enjoy a personalized shopping experience.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Benefits of having an account:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                <span>Track your orders in real-time</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                <span>Save your favorite products</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                <span>Faster checkout process</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                <span>Exclusive offers and discounts</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <LoginForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Login;