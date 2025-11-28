import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, light = false }) => {
  return (
    <div className="text-center mb-16 relative">
      <div className={`text-xs md:text-sm tracking-[0.3em] uppercase mb-2 ${light ? 'text-ginrei-gold-light' : 'text-ginrei-gold'}`}>
        {en}
      </div>
      <h2 className={`text-3xl md:text-4xl font-serif tracking-widest ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {ja}
      </h2>
      <div className="w-12 h-0.5 bg-ginrei-gold mx-auto mt-6"></div>
    </div>
  );
};