import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Validate
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // If no errors, submit
    if (!Object.values(newErrors).some(error => error)) {
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have questions about our products? We're here to help. Fill out the form
            and we'll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@diecastframes.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-green-500" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h2>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-black hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-colors
                    ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-colors
                    ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none transition-colors
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;