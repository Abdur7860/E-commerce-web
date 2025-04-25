import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              DiecastFrames
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-gray-300 transition-colors ${isActive('/') ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className={`hover:text-gray-300 transition-colors ${isActive('/catalog') ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-gray-300 transition-colors ${isActive('/about') ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className={`hover:text-gray-300 transition-colors ${isActive('/faq') ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-gray-300 transition-colors ${isActive('/contact') ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300 transition-colors">
              <Search size={24} />
            </button>
            <Link to="/login" className="hover:text-gray-300 transition-colors flex items-center space-x-1">
              <LogIn size={24} />
              <span>Login</span>
            </Link>
            <Link to="/cart" className="hover:text-gray-300 transition-colors">
              <ShoppingCart size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Home</Link>
            <Link to="/catalog" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Products</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-gray-900 transition-colors">About</Link>
            <Link to="/faq" className="block px-3 py-2 hover:bg-gray-900 transition-colors">FAQ</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Contact</Link>
            <Link to="/login" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Login</Link>
            <Link to="/shipping" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Shipping</Link>
            <Link to="/returns" className="block px-3 py-2 hover:bg-gray-900 transition-colors">Returns</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;