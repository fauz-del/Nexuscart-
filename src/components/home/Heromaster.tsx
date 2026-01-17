import { useState } from 'react';

export default function Heromaster() {
  const [activeTab, setActiveTab] = useState(0);

  // FIX: Get the dynamic base path (e.g., "/Nexuscart-/")
  const base = import.meta.env.BASE_URL;

  const slides = [
    {
      id: "01",
      title: "SONIC",
      subtitle: "PRECISION",
      desc: "Pure acoustic architecture with G-7 neural tuning.",
      // FIX: Prepend the base variable to the path
      img: `${base}assets/headphones/headphones2.jpg`,
      accent: "text-cyan-500",
      theme: "asymmetric"
    },
    {
      id: "02",
      title: "VISION",
      subtitle: "SPATIAL",
      desc: "Retinal-grade optics for the next spatial frontier.",
      img: `${base}assets/vrgoogle/vrgoogle2.jpeg`,
      accent: "text-blue-500",
      theme: "data-driven"
    },
    {
      id: "03",
      title: "NEXUS",
      subtitle: "MOBILE",
      desc: "The titanium standard for future-ready connectivity.",
      img: `${base}assets/phones/phone1.jpeg`,
      accent: "text-purple-500",
      theme: "minimalist"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden transition-colors duration-700">
      
      {/* 1. Global Background Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none select-none">
          {slides[activeTab].title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 relative z-10">
        
        {/* Layout Switcher */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: CONTENT BLOCK */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-slate-400">ID // {slides[activeTab].id}</span>
              <div className="h-[1px] w-12 bg-cyan-500"></div>
            </div>

            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] text-slate-900 dark:text-white mb-8">
              {slides[activeTab].title} <br />
              <span className={slides[activeTab].accent}>{slides[activeTab].subtitle}</span>
            </h1>

            <p className="text-slate-500 dark:text-neutral-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
              {slides[activeTab].desc}
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-12 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-500 transition-all cursor-pointer shadow-xl">
                Pre-Order
              </button>
              <button className="p-4 border border-slate-200 dark:border-neutral-800 rounded-2xl hover:border-cyan-500 transition-all cursor-pointer">
                <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: DYNAMIC VISUAL BLOCK */}
          <div className="order-1 lg:order-2 relative flex justify-center">
             <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[60px] overflow-hidden group border border-slate-200 dark:border-white/5">
                <img 
                  key={activeTab} 
                  src={slides[activeTab].img} 
                  className="w-full h-full object-cover animate-fade-in grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000"
                  alt="Product" 
                />
                
                {activeTab === 1 && (
                  <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between text-[10px] font-mono text-cyan-400 bg-black/40 backdrop-blur-md p-2 rounded">
                      <span>SCAN_STATUS: OK</span>
                      <span>LATENCY: 0.02MS</span>
                    </div>
                    <div className="w-20 h-20 border-b-2 border-r-2 border-cyan-500 self-end opacity-50"></div>
                  </div>
                )}
             </div>
             <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>
          </div>
        </div>

        {/* 3. NAVIGATION CONTROLS */}
        <div className="absolute bottom-12 right-6 lg:right-12 flex items-center gap-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveTab(index)}
              className="group flex flex-col items-start gap-2 cursor-pointer"
            >
              <span className={`text-[10px] font-black tracking-widest transition-colors ${activeTab === index ? 'text-cyan-500' : 'text-slate-400'}`}>
                {slide.id}
              </span>
              <div className={`h-[2px] transition-all duration-500 ${activeTab === index ? 'w-12 bg-cyan-500' : 'w-4 bg-slate-300 dark:bg-neutral-800 group-hover:w-8'}`}></div>
            </button>
          ))}
        </div>
      </div>

      <style jsx="true">
      {`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(1.05) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
