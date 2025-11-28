import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative order-2 md:order-1">
          <div className="relative z-10 border border-ginrei-gold/20 p-2">
             <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Master Chef" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-ginrei-gold z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-ginrei-gold z-0"></div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2">
          <SectionTitle en="Philosophy" ja="銀嶺の心" light />
          
          <div className="space-y-8 font-serif text-gray-300 leading-loose tracking-wide">
            <p>
              銀座の喧騒を離れ、静寂に包まれた空間で。<br/>
              私たちが提供するのは、単なる食事ではなく「体験」です。
            </p>
            <p>
              毎朝、豊洲市場にて店主自らが目利きした極上の魚介。<br/>
              赤酢と塩だけで仕上げた、香り高いシャリ。<br/>
              その二つが口の中でほどけ、一体となる瞬間。
            </p>
            <p>
              「不易流行」<br/>
              伝統を守りながらも、常に新しさを追求する。<br/>
              それが、鮨 銀嶺の流儀です。
            </p>

            <div className="mt-12 text-right">
              <p className="text-sm text-gray-500 mb-2">店主</p>
              <h3 className="text-2xl text-white tracking-widest">山田 健一</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};