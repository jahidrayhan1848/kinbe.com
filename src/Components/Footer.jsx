import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-zinc-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </a>
  </li>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Solid Layout Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              {/* Solid Indigo Branding */}
              <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">Vortex</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Design-led essentials for the modern lifestyle. Precision engineered, quality focused, and sustainably made.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h4 className="text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Shop</h4>
              <ul className="space-y-3">
                <FooterLink href="#">All Products</FooterLink>
                <FooterLink href="#">New Drops</FooterLink>
                <FooterLink href="#">Archives</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Info</h4>
              <ul className="space-y-3">
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Shipping</FooterLink>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Connect</h4>
              <div className="flex gap-5">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Solid Accents */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Cookies</a>
          </div>
          
          <div className="flex items-center gap-3 text-zinc-500 text-xs font-bold">
            <span className="text-zinc-700">© {currentYear}</span>
            <span className="text-white tracking-widest uppercase text-[10px]">Vortex Studio</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
            <a href="#" className="flex items-center gap-1 hover:text-indigo-400 transition-colors text-zinc-400">
              UP <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}