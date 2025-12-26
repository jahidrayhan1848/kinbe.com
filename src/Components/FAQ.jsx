import React, { useState } from 'react';
import { ShieldCheck, Truck, RefreshCw, ChevronDown, Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Delivery korte koydin somoy lage?",
    answer: "Dhaka-r bhetore amra 24-48 ghontay delivery kori. Dhaka-r baire 3-5 din somoy lagte pare."
  },
  {
    question: "Product return korar niyam ki?",
    answer: "Product pawar 7 diner bhetore apni return ba exchange korte parben jodi kono defect thake."
  },
  {
    question: "Apnader ki kono physical shop ache?",
    answer: "Amra ekhon shudhu online-e business korchi, tobe khub shiggroi amader outlet ashche!"
  }
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all mb-6">
      <Icon size={32} />
    </div>
    <h4 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-tight">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Why Vortex Section */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Promises</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase">Keno <span className="text-indigo-600">Vortex</span> e-kinben?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <FeatureCard 
            icon={ShieldCheck} 
            title="Premium Quality" 
            desc="Amader protiti product high-quality fabric ebong material diye toiri."
          />
          <FeatureCard 
            icon={Truck} 
            title="Fast Shipping" 
            desc="Shoro desh-e druto ebong nirapod delivery nishchito kori amra."
          />
          <FeatureCard 
            icon={RefreshCw} 
            title="Easy Returns" 
            desc="Kono jhamela chharai product return ba exchange korar sujog."
          />
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-zinc-900 mb-6 uppercase leading-tight">
              Shadharon <br /> <span className="text-indigo-600">Jigga-sha</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-8">
              Apnar mone thaka proshno gulor uttor ekhane paben. Aro kichu janar thakle amader message korun.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all">
              Contact Support
            </button>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
              <div 
                key={index}
                className="border-b border-zinc-100 last:border-0"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-indigo-600' : 'text-zinc-900'}`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={20} className="text-indigo-600" /> : <Plus size={20} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}