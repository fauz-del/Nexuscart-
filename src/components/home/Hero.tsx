import { useNavigate } from "react-router-dom";
import { Image } from "@unpic/react";
import hero1 from "../../assets/lp/hero1.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black transform-gpu">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={hero1}
          layout="fullWidth"
          alt="Nexus Hero Background"
          priority // Tells browser to load this first
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      <div className="absolute inset-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Global_Nexus_v2.6</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-8 transform-gpu">
            NEXUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500 italic">
              HARDWARE
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed border-l-4 border-cyan-500 pl-6 font-medium">
            Next-gen gadget commerce. Frictionless checkout. <br />
            Real-time tech tracking for the modern enthusiast.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => navigate('/shop')}
              className="relative group overflow-hidden bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest cursor-pointer active:scale-95 transition-transform"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button 
              onClick={() => navigate('/about')}
              className="relative group overflow-hidden border border-white/20 text-white px-10 py-4 font-bold text-sm uppercase tracking-widest cursor-pointer hover:border-cyan-500 transition-colors active:scale-95"
            >
              <span className="relative z-10">Learn About Us</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
