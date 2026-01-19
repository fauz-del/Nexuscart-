import { useState } from 'react';

export default function Heromaster() {
  const [activeTab, setActiveTab] = useState(0);
  const base = import.meta.env.BASE_URL;

  const slides = [
    {
      id: "01",
      title: "SONIC",
      subtitle: "PRECISION",
      desc: "Pure acoustic architecture with G-7 neural tuning and spatial resonance.",
      img: `${base}assets/headphones/headphones2.jpg`,
      accent: "text-cyan-500",
      bgAccent: "bg-cyan-500",
      stats: ["48bit Audio", "Active ANC", "Neural-Sync"]
    },
    {
      id: "02",
      title: "VISION",
      subtitle: "SPATIAL",
      desc: "Retinal-grade optics for the next frontier of immersive computing.",
      img: `${base}assets/vrgoogle/vrgoogle2.jpg`,
      accent: "text-blue-500",
      bgAccent: "bg-blue-500",
      stats: ["16K Micro-OLED", "0.02ms Latency", "Eye-Track"]
    },
    {
      id: "03",
      title: "NEXUS",
      subtitle: "MOBILE",
      desc: "The titanium standard for future-ready connectivity and global power.",
      img: `${base}assets/phones/phone1.jpg`,
      accent: "text-purple-500",
      bgAccent: "bg-purple-500",
      stats: ["3nm Chipset", "Satellite-Link", "Mag-Safe v2"]
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* 1. LAYERED BACKGROUND TEXT (Moved up to fill space) */}
      <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[28vw] font-black tracking-tighter leading-none opacity-[0.04] uppercase italic transform -rotate-2">
          {slides[activeTab].title}
        </h1>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto min-h-screen flex items-center px-6">
        
        {/* 2. MAIN INTERLOCKING GRID */}
        <div className="grid lg:grid-cols-12 gap-0 w-full items-center">
          
          {/* LEFT CONTENT (Spans 5 cols) */}
          <div className="lg:col-span-5 z-30 pt-20 lg:pt-0">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${slides[activeTab].bgAccent}`} />
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">Hardware_ID // {slides[activeTab].id}</span>
            </div>

            <h1 className="text-8xl md:text-[140px] font-black tracking-tighter leading-[0.75] mb-10 uppercase italic">
              {slides[activeTab].title} <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-transparent ${slides[activeTab].accent}`}>
                {slides[activeTab].subtitle}
              </span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-sm mb-12 leading-tight font-light">
              {slides[activeTab].desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="relative group overflow-hidden bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-widest transition-transform active:scale-95">
                <span className="relative z-10">Initialize Pre-Order</span>
                <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${slides[activeTab].bgAccent}`} />
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL (Spans 7 cols, uses offset to fill space) */}
          <div className="lg:col-span-7 relative mt-12 lg:mt-0">
            <div className="relative group ml-auto max-w-[700px]">
              
              {/* CYBER SIDEBAR (Fills the vertical space next to image) */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-40">
                 {slides[activeTab].stats.map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl transform hover:translate-x-2 transition-transform cursor-default">
                      <div className={`w-1 h-8 ${slides[activeTab].bgAccent}`} />
                      <span className="font-mono text-[10px] tracking-tighter uppercase">{stat}</span>
                   </div>
                 ))}
              </div>

              {/* MAIN IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black">
                <img 
                  key={activeTab}
                  src={slides[activeTab].img} 
                  className="w-full h-full object-cover animate-main-fade grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  alt="Tech"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = `https://via.placeholder.com{slides[activeTab].title}+v2026`;
                  }}
                />
                
                {/* HUD Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 right-6 border-t-2 border-r-2 w-16 h-16 border-white/20" />
                <div className="absolute bottom-6 left-6 border-b-2 border-l-2 w-16 h-16 border-white/20" />
              </div>

              {/* BOTTOM FLOATING INFO */}
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-8 rounded-2xl hidden md:block">
                <p className="font-mono text-[10px] uppercase font-bold tracking-tighter mb-1">Stock_Status</p>
                <p className="text-2xl font-black">98.2% READY</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. VERTICAL NAVIGATION (Replaces standard bottom bar to save space) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-50">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveTab(index)}
              className="group flex items-center gap-6 text-left"
            >
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-mono tracking-widest uppercase transition-all ${activeTab === index ? slides[activeTab].accent : 'opacity-30'}`}>
                  Unit_0{slide.id}
                </span>
                <span className={`text-xs font-black transition-all ${activeTab === index ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}>
                  {slide.title}
                </span>
              </div>
              <div className={`w-1 transition-all duration-500 ${activeTab === index ? `h-12 ${slides[activeTab].bgAccent}` : 'h-4 bg-white/20 group-hover:h-8'}`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes main-fade {
          0% { opacity: 0; transform: scale(1.1) translateX(30px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateX(0); filter: blur(0); }
        }
        .animate-main-fade {
          animation: main-fade 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
