import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown } from 'lucide-react';

export default function EcommerceNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  const categories = [
    { name: 'New Arrivals', hasDropdown: true },
    { name: 'Men', hasDropdown: true },
    { name: 'Women', hasDropdown: true },
    { name: 'Accessories', hasDropdown: true },
    { name: 'Sale', hasDropdown: false }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-center py-2 text-sm font-medium">
        <p>🎉 Summer Sale - Up to 50% OFF on Selected Items! Free Shipping on Orders $50+</p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer">
                Kinbe?
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {categories.map((category) => (
                <div key={category.name} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                    <span>{category.name}</span>
                    {category.hasDropdown && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </button>
                  {category.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                          Trending Now
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                          Best Sellers
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                          Collections
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div className="relative hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-64 px-4 py-2 pr-10 border-2 border-purple-500 rounded-full focus:outline-none focus:border-pink-500 transition-all duration-300"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-3 text-gray-500 hover:text-purple-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Wishlist */}
              <button className="relative text-gray-700 hover:text-pink-600 transition-colors group">
                <Heart className="w-6 h-6 group-hover:fill-pink-600 transition-all" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button className="relative text-gray-700 hover:text-purple-600 transition-colors group">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Account */}
              <button className="text-gray-700 hover:text-purple-600 transition-colors">
                <User className="w-6 h-6" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pr-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>

              {/* Mobile Categories */}
              {categories.map((category) => (
                <a
                  key={category.name}
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}