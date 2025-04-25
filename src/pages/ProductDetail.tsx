import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === parseInt(id || '0'));
  const [mainImage, setMainImage] = useState(product?.images[0]);

  useEffect(() => {
    if (!product) {
      navigate('/catalog');
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 mb-8 text-gray-600 hover:text-black transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Catalog</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <motion.img
            key={mainImage}
            src={mainImage}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                  mainImage === image ? 'border-black' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold mb-6">₹{product.price.toFixed(2)}</p>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Specifications</h3>
            <div className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <p key={key} className="flex items-center">
                  <span className="w-24 font-medium capitalize">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                className="px-4 py-2 text-xl hover:bg-gray-100 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
              <button 
                className="px-4 py-2 text-xl hover:bg-gray-100 transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <motion.button 
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 px-6 flex items-center justify-center space-x-2 rounded-md hover:bg-gray-900 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </motion.button>
            <motion.button 
              className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;