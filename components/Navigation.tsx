import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ご挨拶', href: '#about' },
    { name: 'お品書き', href: '#menu' },
    { name: '店舗情報', href: '#access' },
    { name: 'ご予約', href: '#reservation', primary: true },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-ginrei-black/90 backdrop-blur-md py-4 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group">
            <span className="text-2xl font-serif tracking-widest text-white group-hover:text-ginrei-gold transition-colors duration-300">鮨 銀嶺</span>
            <span className="text-[0.6rem] tracking-[0.4em] text-gray-400 uppercase mt-1 group-hover:text-white transition-colors duration-300">Ginrei Ginza</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest transition-all duration-300 ${
                link.primary 
                  ? 'px-6 py-2 border border-ginrei-gold text-ginrei-gold hover:bg-ginrei-gold hover:text-ginrei-black' 
                  : 'text-gray-300 hover:text-ginrei-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-ginrei-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-6 text-center animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm tracking-widest block py-2 ${
                link.primary ? 'text-ginrei-gold border border-ginrei-gold mx-10' : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};