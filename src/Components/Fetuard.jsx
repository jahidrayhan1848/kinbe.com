import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Eye, ArrowRight, Filter } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Urban Explorer Backpack",
    category: "Accessories",
    price: 89.00,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
    tag: "New Arrival"
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Accessories",
    price: 155.00,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Cotton Knit Sweater",
    category: "Apparel",
    price: 65.00,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    price: 299.00,
    rating: 5.0,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    tag: "Staff Pick"
  },
  {
    id: 5,
    name: "Canvas High-Top Sneakers",
    category: "Apparel",
    price: 75.00,
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600",
    tag: ""
  },
  {
    id: 6,
    name: "Glass Water Bottle",
    category: "Home",
    price: 32.00,
    rating: 4.5,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1602143393494-19280c44931a?auto=format&fit=crop&q=80&w=600",
    tag: "Eco-Friendly"
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        {product.tag && (
          <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {product.tag}
          </div>
        )}

        {/* Action Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors">
            <Eye size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-yellow-400" size={12} />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all active:scale-95">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Fetuard() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Featured <span className="text-indigo-600">Collections</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our handpicked selection of premium essentials designed for modern life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === cat 
                  ? 'bg-black text-white shadow-lg shadow-black/20' 
                  : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 group">
            View All Products
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:translate-x-2">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}