import React from 'react';
import { SectionTitle } from './SectionTitle';
import { MapPin } from 'lucide-react';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle en="Access" ja="店舗情報" light />
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 min-h-[300px] bg-zinc-800 relative group overflow-hidden">
             {/* Abstract Map Placeholder */}
             <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                <MapPin className="text-ginrei-gold w-12 h-12" />
                <span className="absolute mt-16 text-xs text-gray-500 tracking-widest">GINZA 8-CHOME</span>
             </div>
             <img 
                src="https://picsum.photos/600/400?blur=5" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-10 transition-opacity duration-500"
             />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
             <div>
               <h4 className="text-ginrei-gold text-xs tracking-widest mb-2 uppercase">Address</h4>
               <p className="text-white font-serif">
                 東京都中央区銀座 8-8-8<br/>
                 銀座888ビル 9F
               </p>
             </div>
             
             <div>
               <h4 className="text-ginrei-gold text-xs tracking-widest mb-2 uppercase">Train</h4>
               <p className="text-gray-400 text-sm font-serif">
                 東京メトロ銀座線「銀座駅」A2出口より徒歩5分<br/>
                 JR「新橋駅」銀座口より徒歩3分
               </p>
             </div>

             <div>
               <h4 className="text-ginrei-gold text-xs tracking-widest mb-2 uppercase">Note</h4>
               <p className="text-gray-500 text-xs">
                 ※ エレベーターで9階までお上がりください。<br/>
                 ※ 完全禁煙となっております。
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};