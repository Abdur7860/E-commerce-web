import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What sizes of diecast models do your frames accommodate?',
    answer: 'Our frames are specifically designed for 1:24 and 1:32 scale diecast models. We offer various sizes to ensure a perfect fit for your collection. Custom sizes are also available upon request.'
  },
  {
    question: 'How is shipping handled?',
    answer: 'We charge a flat rate of ₹150 for all-India shipping. Each frame is carefully packaged with premium materials to ensure damage-free delivery. Standard delivery typically takes 3-5 business days.'
  },
  {
    question: 'What materials are used in your frames?',
    answer: 'We use premium materials including aircraft-grade aluminum, high-quality hardwood, and UV-resistant glass. Our LED lighting systems are energy-efficient and designed for longevity.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 14-day return window for unused items in original packaging. Please refer to our Returns page for detailed instructions and conditions.'
  },
  {
    question: 'Do your frames protect against UV damage?',
    answer: 'Yes, all our frames feature UV-resistant glass that protects your valuable collectibles from harmful UV rays and prevents fading.'
  },
  {
    question: 'How do I clean and maintain my display frame?',
    answer: 'We recommend using a soft, dry microfiber cloth for regular dusting. For glass cleaning, use a non-ammonia based glass cleaner. Avoid direct sunlight exposure for optimal preservation.'
  },
  {
    question: 'Can I mount the frames on the wall?',
    answer: 'Yes, all our frames come with secure wall-mounting hardware and detailed installation instructions. They can also be displayed as standalone units on shelves or tables.'
  },
  {
    question: 'What warranty do you offer?',
    answer: 'Our frames come with a 1-year warranty against manufacturing defects. LED lighting systems are covered for 2 years. Extended warranty options are available.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Find answers to common questions about our products and services.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <span className="font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          Still have questions?{' '}
          <a href="/contact" className="text-black hover:underline">
            Contact our support team
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;