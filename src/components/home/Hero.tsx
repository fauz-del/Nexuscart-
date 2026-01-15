import hero1 from "../../assets/lp/hero1.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      
  
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat -z-0"
        style={{ backgroundImage: `url(${hero1})` }}
      />
      
      {/* 2. THE FIX: Dual Gradient Overlays */}
      {/* Fade Top: Blends the image into your Navbar background */}
      <div className="absolute inset-0 w-full h-32 bg-gradient-to-b from-black to-transparent -z-10" />
      
      {/* Fade Right: Creates the dark space for the left-aligned text */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent -z-10" />

      {/* 3. Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="max-w-2xl">
          {/* Subtle Tech Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">New Arrival 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-8">
            NEXUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              HARDWARE
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed border-l-4 border-cyan-500 pl-6">
            Next-gen gadget commerce. Frictionless checkout. <br />
            Real-time tech tracking for the modern enthusiast.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="relative group overflow-hidden bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest cursor-pointer">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest group cursor-pointer">
              <span className="w-12 h-[1px] bg-cyan-500 group-hover:w-20 transition-all duration-300" />
              View Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative element to ground the section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default Hero;
