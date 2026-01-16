import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // Import navigation hook
import headphones2 from "../../assets/headphones/headphones2.jpg"; 

export default function DealOfTheDay() {
  const navigate = useNavigate(); // Initialize navigate
  const [time, setTime] = useState({ h: 24, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({ h: 23 - now.getHours(), m: 59 - now.getMinutes(), s: 59 - now.getSeconds() });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-18 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto bg-neutral-950/95 backdrop-blur-xl border border-cyan-500/20 rounded-[48px] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
        
        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-cyan-500/10 blur-[150px] animate-pulse" />

        {/* Product Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img 
            src={headphones2} 
            alt="Deal of the day product" 
            className="w-64 md:w-80 object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-700" 
          />
          {/* Discount Badge */}
          <div className="absolute -top-4 -left-4 bg-red-600 text-white text-lg font-black px-4 py-2 rounded-lg rotate-[-15deg] shadow-xl">
            40% OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left relative z-10">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3 block">Flash Sale Protocol Initiated</span>
          
          <h2 className="text-5xl font-black text-white mt-4 mb-4 tracking-tighter leading-none">
            DEAL <span className="text-gray-500">OF THE DAY</span>
          </h2>
          
          <p className="text-gray-400 max-w-lg mb-8 text-base md:text-lg leading-relaxed">
            Quantum Audio Sonic-H2 Headphones. 80h Battery. Adaptive ANC. Spatial Audio. This offer expires in exactly 24 hours.
          </p>
          
          {/* Timer Display */}
          <div className="flex justify-center lg:justify-start gap-6 mb-10">
            {[time.h, time.m, time.s].map((v, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-black text-cyan-400 bg-black/50 border border-cyan-500/20 w-24 md:w-28 py-3 rounded-xl shadow-inner shadow-cyan-500/10">
                  {v.toString().padStart(2, '0')}
                </div>
                <div className="text-[11px] mt-2 text-gray-500 uppercase tracking-widest">{['Hours', 'Minutes', 'Seconds'][i]}</div>
              </div>
            ))}
          </div>

          {/* Action Button: Linked to the Sonic-H2 Product Page (a2) */}
          <button 
            onClick={() => navigate('/shop/product/a2')}
            className="w-full lg:w-auto group relative overflow-hidden bg-white text-black px-12 py-4 rounded-xl font-black text-base uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Secure Unit</span>
             <div className="absolute inset-0 bg-cyan-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
