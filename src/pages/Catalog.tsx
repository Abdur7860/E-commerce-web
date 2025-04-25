import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sliders, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface FilterState {
  size: string;
  material: string;
  priceRange: string;
}

const Catalog = () => {
  const [filters, setFilters] = useState<FilterState>({
    size: '',
    material: '',
    priceRange: ''
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Display Frames</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white">
          <Sliders size={20} />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-6 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="relative overflow-hidden group">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.shortDescription}</p>
              <p className="text-gray-600 mb-2">Size: {product.specs.size}</p>
              <p className="text-gray-600 mb-4">Material: {product.specs.material}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">₹{product.price.toFixed(2)}</span>
                <Link 
                  to={`/product/${product.id}`}
                  className="inline-flex items-center text-black hover:underline"
                >
                  View Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;