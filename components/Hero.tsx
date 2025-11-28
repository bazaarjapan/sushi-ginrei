import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Counter texture" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ginrei-black/70 via-ginrei-black/20 to-ginrei-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-6 animate-fade-in-up">
           <p className="text-ginrei-gold tracking-[0.5em] text-sm md:text-base mb-4 uppercase">Ginza, Tokyo</p>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest mb-8 leading-tight animate-fade-in-up delay-100">
          一期一会の<br/>
          <span className="text-4xl md:text-6xl lg:text-7xl">極みへ</span>
        </h1>
        <p className="text-gray-300 font-serif tracking-widest text-sm md:text-lg animate-fade-in-up delay-200">
          伝統と革新が織りなす、<br className="md:hidden"/>至高の江戸前鮨。
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <span className="block w-[1px] h-16 bg-gradient-to-b from-transparent via-ginrei-gold to-transparent mx-auto"></span>
        <span className="text-[10px] tracking-widest uppercase mt-2 block">Scroll</span>
      </div>
    </section>
  );
};