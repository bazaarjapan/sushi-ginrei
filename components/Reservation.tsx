import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { ReservationData, CourseType, COURSES } from '../types';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '18:00',
    guests: 2,
    course: CourseType.PREMIUM,
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section id="reservation" className="py-24 bg-zinc-900 text-white flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 border border-ginrei-gold/30 bg-ginrei-black max-w-lg w-full mx-4 animate-fade-in">
          <CheckCircle className="w-16 h-16 text-ginrei-gold mx-auto mb-6" />
          <h3 className="text-2xl font-serif mb-4">ご予約を受け付けました</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            この度はご予約いただきありがとうございます。<br/>
            確認のため、店舗よりお電話またはメールにてご連絡差し上げます。<br/>
            連絡が取れ次第、ご予約確定となります。
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-sm tracking-widest border-b border-ginrei-gold text-ginrei-gold pb-1 hover:text-white hover:border-white transition-colors"
          >
            戻る
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle en="Reservation" ja="ご予約" light />
        
        <form onSubmit={handleSubmit} className="bg-ginrei-black p-8 md:p-12 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Date */}
            <div>
              <label className="block text-xs tracking-widest text-gray-400 mb-2 uppercase">ご希望日</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-ginrei-gold w-4 h-4" />
                <input 
                  type="date" 
                  name="date"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 pl-10 pr-4 focus:outline-none focus:border-ginrei-gold transition-colors"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs tracking-widest text-gray-400 mb-2 uppercase">お時間</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-ginrei-gold w-4 h-4" />
                <select 
                  name="time"
                  className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 pl-10 pr-4 focus:outline-none focus:border-ginrei-gold transition-colors appearance-none"
                  onChange={handleChange}
                  value={formData.time}
                >
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                </select>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs tracking-widest text-gray-400 mb-2 uppercase">人数</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-ginrei-gold w-4 h-4" />
                <select 
                  name="guests"
                  className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 pl-10 pr-4 focus:outline-none focus:border-ginrei-gold transition-colors appearance-none"
                  onChange={handleChange}
                  value={formData.guests}
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num}名様</option>
                  ))}
                  <option value={7}>7名様以上 (要電話)</option>
                </select>
              </div>
            </div>

            {/* Course */}
            <div>
              <label className="block text-xs tracking-widest text-gray-400 mb-2 uppercase">コース</label>
              <select 
                name="course"
                className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 px-4 focus:outline-none focus:border-ginrei-gold transition-colors appearance-none"
                onChange={handleChange}
                value={formData.course}
              >
                {Object.values(COURSES).map((c, i) => (
                   <option key={i} value={Object.keys(COURSES)[i]}>{c.label} - {c.price}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                placeholder="お名前"
                required
                className="bg-transparent border-b border-zinc-700 text-white py-2 focus:outline-none focus:border-ginrei-gold transition-colors w-full"
                onChange={handleChange}
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="お電話番号"
                required
                className="bg-transparent border-b border-zinc-700 text-white py-2 focus:outline-none focus:border-ginrei-gold transition-colors w-full"
                onChange={handleChange}
              />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="メールアドレス"
              required
              className="bg-transparent border-b border-zinc-700 text-white py-2 focus:outline-none focus:border-ginrei-gold transition-colors w-full"
              onChange={handleChange}
            />
            <textarea 
              name="requests"
              placeholder="アレルギーや苦手な食材、その他ご要望がございましたらご記入ください。"
              rows={3}
              className="bg-zinc-900 border border-zinc-700 text-white p-4 w-full focus:outline-none focus:border-ginrei-gold transition-colors text-sm"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-10 text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-ginrei-gold text-ginrei-black px-12 py-3 font-serif tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : '予約をリクエストする'}
            </button>
            <p className="text-xs text-gray-500 mt-4">
              ※ キャンセルポリシー：前日50%、当日100%のキャンセル料を申し受けます。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};