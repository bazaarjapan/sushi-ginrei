import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif tracking-widest text-white mb-2">鮨 銀嶺</h2>
          <p className="text-xs text-ginrei-gold uppercase tracking-[0.3em]">Ginrei Ginza</p>
        </div>

        {/* Address */}
        <div className="text-center">
          <p className="text-sm font-serif leading-loose text-gray-400">
            〒104-0061<br/>
            東京都中央区銀座 8-8-8<br/>
            銀座888ビル 9F
          </p>
          <div className="mt-4">
            <a href="tel:03-1234-5678" className="text-lg font-serif tracking-widest hover:text-ginrei-gold transition-colors">
              03-1234-5678
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="text-center md:text-right text-sm text-gray-400 font-serif leading-loose">
          <p>営業時間 17:30 - 23:00</p>
          <p>(ラストオーダー 21:00)</p>
          <p className="mt-2 text-xs">定休日：日曜・祝日</p>
        </div>

      </div>
      <div className="text-center mt-16 text-[10px] text-gray-700 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Sushi Ginrei. All Rights Reserved.
      </div>
    </footer>
  );
};