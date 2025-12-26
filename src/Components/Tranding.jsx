import React from 'react';
import { ArrowUpRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 1,
    title: "Men's Streetwear",
    items: "240+ Items",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 md:col-span-2 row-span-2",
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "Summer Accs",
    items: "80+ Items",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
    size: "col-span-1 row-span-1",
    tag: "New"
  },
  {
    id: 3,
    title: "Footwear",
    items: "150+ Items",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    size: "col-span-1 row-span-1",
    tag: "Sale"
  }
];

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

export default function Tranding() {
  return (
    <section className="py-20 bg-gray-50 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Why Choose Us / Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <FeatureItem 
            icon={Zap} 
            title="Fastest Delivery" 
            desc="Shara desh e matro 24 ghontay delivery." 
          />
          <FeatureItem 
            icon={ShieldCheck} 
            title="Secure Payment" 
            desc="100% nirapode payment korar nishchoyota." 
          />
          <FeatureItem 
            icon={Sparkles} 
            title="Premium Quality" 
            desc="Shorborno maner product er gaurunty." 
          />
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
              Trending <span className="text-indigo-600">Categories</span>
            </h2>
            <p className="text-gray-500 mt-2">Apnar pochonder collection gulo ekhon ek jaygay.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
            See All Categories <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[500px]">
          {COLLECTIONS.map((col) => (
            <div 
              key={col.id} 
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${col.size}`}
            >
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">
                  {col.tag}
                </span>
                <h3 className="text-2xl font-black text-white">{col.title}</h3>
                <p className="text-gray-300 text-sm">{col.items}</p>
                
                <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Shop Now <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}

          {/* Special Promo Card */}
          <div className="col-span-1 md:col-span-1 bg-indigo-600 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2">Up to 70% OFF</h3>
              <p className="text-indigo-100 text-sm">Season end er sobcheye boro sale ekhon cholche!</p>
            </div>
            <button className="relative z-10 w-full bg-white text-indigo-600 py-4 rounded-2xl font-black hover:bg-black hover:text-white transition-colors">
              Grab Deal
            </button>
            {/* Background Pattern */}
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-black/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}