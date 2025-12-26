import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    subtitle: "New Season Arrival",
    title: "Minimalist Living Essentials",
    description: "Discover our curated collection of sustainably sourced home goods and lifestyle accessories.",
    cta: "Shop Collection",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920",
    color: "text-indigo-600"
  },
  {
    id: 2,
    subtitle: "Exclusive Collaboration",
    title: "The Urban Tech Series",
    description: "Precision engineered gear designed for the modern commuter. Water-resistant, durable, and stylish.",
    cta: "Explore Tech",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1920",
    color: "text-emerald-600"
  },
  {
    id: 3,
    subtitle: "Spring/Summer 2024",
    title: "Linen & Light Layers",
    description: "Breathable fabrics meet timeless silhouettes. Perfectly crafted for the warmer days ahead.",
    cta: "Browse Apparel",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920",
    color: "text-amber-600"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${
                index === current ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
            <div className={`transition-all duration-700 delay-300 transform ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className={`inline-block font-bold uppercase tracking-[0.3em] text-sm mb-4 ${slide.color}`}>
                {slide.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] max-w-2xl">
                {slide.title}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                  {slide.cta}
                  <ArrowRight size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
                  <Play size={18} fill="currentColor" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group py-4"
          >
            <div className={`h-1 transition-all duration-500 rounded-full ${
              index === current ? 'w-12 bg-white' : 'w-4 bg-white/30 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
        <span className="ml-4 text-white font-mono text-sm tracking-widest">
          0{current + 1} / 0{SLIDES.length}
        </span>
      </div>
    </div>
  );
}