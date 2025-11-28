import React from 'react';
import { SectionTitle } from './SectionTitle';
import { COURSES, CourseType } from '../types';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-ginrei-black relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle en="Omakase Courses" ja="お品書き" light />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {Object.entries(COURSES).map(([key, course], index) => (
            <div 
              key={key} 
              className={`
                group relative border border-white/10 p-8 hover:border-ginrei-gold/50 transition-all duration-500 bg-white/5 backdrop-blur-sm
                flex flex-col items-center text-center
                ${index === 1 ? 'md:-mt-8 md:mb-8 bg-white/10 shadow-2xl shadow-ginrei-gold/10' : ''}
              `}
            >
              <h3 className="text-2xl font-serif text-white mb-2">{course.label}</h3>
              <p className="text-ginrei-gold font-serif text-xl mb-6">{course.price}</p>
              <div className="w-8 h-[1px] bg-gray-600 mb-6 group-hover:bg-ginrei-gold transition-colors"></div>
              <p className="text-gray-400 text-sm leading-loose font-serif">
                {course.description}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs text-ginrei-gold tracking-widest uppercase border border-ginrei-gold px-4 py-2">View Details</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs mt-12 tracking-wide">
          ※ 別途サービス料10%を頂戴いたします。<br/>
          ※ 仕入れ状況により内容が変更となる場合がございます。
        </p>
      </div>
    </section>
  );
};