import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const subtotal = items.reduce((acc, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return acc + (isNaN(itemTotal) ? 0 : itemTotal);
  }, 0);
  
  const shipping = items.length > 0 ? 150.00 : 0;
  const total = subtotal + shipping;

  const handleDelete = (id: number) => {
    setItemToDelete(id);
  };

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      removeItem(itemToDelete);
      setItemToDelete(null);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">Your cart is empty</p>
          <Link 
            to="/catalog"
            className="inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Continue Shopping <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex space-x-6 border-b border-gray-200 py-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300">
                      {item.quantity || 1}
                    </span>
                    <button 
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 px-6 mt-6 flex items-center justify-center space-x-2 rounded-md hover:bg-gray-900 transition-colors">
            <span>Proceed to Checkout</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {itemToDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center space-x-2 text-red-500 mb-4">
              <AlertTriangle size={24} />
              <h3 className="text-lg font-bold">Confirm Deletion</h3>
            </div>
            <p className="text-gray-600 mb-6">Are you sure you want to remove this item from your cart?</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setItemToDelete(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;