import { Reveal } from '../../components/layout/Reveal';
import { ShieldCheck, Globe, Cpu, Zap, Activity, Eye, Layers } from 'lucide-react';

export default function AboutUs() {
  const base = import.meta.env.BASE_URL;

  const stats = [
    { label: "Active_Nodes", value: "1,240+", icon: <Globe size={14}/> },
    { label: "Throughput", value: "48.2 PB", icon: <Activity size={14}/> },
    { label: "Uptime", value: "99.99%", icon: <Zap size={14}/> },
    { label: "Sectors", value: "124", icon: <Layers size={14}/> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-32 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: THE COLLAGE HEADER */}
        <div className="relative mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-20">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Nexus_Operational_v2.6</span>
                </div>
                <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter dark:text-white leading-[0.8] italic uppercase mb-8">
                  BEYOND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">LIMITS.</span>
                </h1>
                <p className="text-xl text-slate-500 dark:text-neutral-400 max-w-md leading-relaxed border-l-4 border-cyan-500 pl-6">
                  We don't just sell hardware. We deploy the infrastructure for the next generation of digital architects.
                </p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative group">
                  {/* MAIN IMAGE: Tablet */}
                  <div className="relative rounded-[4rem] overflow-hidden border border-white/10 aspect-[4/5] z-10 shadow-2xl">
                    <img src={`${base}assets/tablet/tablet2.jpg`} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" alt="Core Tech" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* FLOATING OFFSET IMAGE: Smartwatch */}
                  <div className="absolute -bottom-16 -left-20 w-64 aspect-square rounded-[2rem] overflow-hidden border-4 border-white dark:border-[#050505] shadow-2xl z-20 hidden xl:block animate-bounce-slow">
                    <img src={`${base}assets/watch/smartwatch3.jpeg`} className="w-full h-full object-cover" alt="Wearable Node" />
                  </div>

                  {/* TECH DATA OVERLAY */}
                  <div className="absolute -top-10 -right-10 p-6 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl z-20 hidden lg:block">
                     <Cpu className="text-cyan-500 mb-4" />
                     <div className="space-y-1">
                        <div className="h-1 w-12 bg-cyan-500" />
                        <div className="h-1 w-8 bg-cyan-500/30" />
                     </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SECTION 2: STATS DATA STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-64">
          {stats.map((stat, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] transition-all hover:border-cyan-500/50">
              <div className="flex items-center gap-3 mb-4 text-cyan-500">
                {stat.icon}
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">/{stat.label}</span>
              </div>
              <p className="text-5xl font-black dark:text-white tracking-tighter group-hover:translate-x-2 transition-transform">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* SECTION 3: WIDE FEATURE SPLIT (IMAGE COLLAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-64">
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
             <Reveal>
               <div className="space-y-4">
                  <div className="rounded-[2rem] overflow-hidden aspect-[3/4] border border-white/10">
                    <img src={`${base}assets/phones/iphone16.jpg`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Mobile v2.6" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden aspect-square border border-white/10">
                    <img src={`${base}assets/airpod/airpod1.jpg`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Audio Unit" />
                  </div>
               </div>
             </Reveal>
             <Reveal>
               <div className="space-y-4 pt-12">
                  <div className="rounded-[2rem] overflow-hidden aspect-square border border-white/10">
                    <img src={`${base}assets/watch/smartwatch1.jpg`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Wearable" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden aspect-[3/4] border border-white/10">
                    <img src={`${base}assets/glasses/smartglass2.jpg`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Vision Unit" />
                  </div>
               </div>
             </Reveal>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <Reveal>
              <h2 className="text-6xl font-black dark:text-white uppercase italic tracking-tighter leading-none">
                THE INTERFACE <br /> IS THE <span className="text-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MESSAGE.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-neutral-400 leading-relaxed font-light">
                NexusCart was engineered to bridge the gap between high-frequency software and the physical hardware required to run it. Every unit in our inventory undergoes a 48-hour diagnostic cycle.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <ShieldCheck className="text-cyan-500 mb-4" />
                <h4 className="font-black dark:text-white uppercase text-xs tracking-widest mb-2">Bit-Level Security</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Transactions are secured via localized hardware hashing, ensuring zero data leakage.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <Eye className="text-blue-500 mb-4" />
                <h4 className="font-black dark:text-white uppercase text-xs tracking-widest mb-2">Visual Fidelity</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Our Vision series provides retinal-grade optics for seamless spatial computing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: FULL BREAKOUT HERO */}
        <div className="relative group rounded-[4rem] overflow-hidden h-[600px] flex items-center justify-center">
          <img src={`${base}assets/lp/hero1.jpg`} className="absolute inset-0 w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-[2s]" alt="Nexus Core" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-1000" />
          
          <div className="relative z-10 text-center space-y-8 px-6">
            <Reveal>
              <h2 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter">
                JOIN THE <span className="text-cyan-500">NEXUS.</span>
              </h2>
              <button className="group relative overflow-hidden bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-[0.4em] rounded-full active:scale-95 transition-all">
                <span className="relative z-10">Sync_With_System</span>
                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Reveal>
          </div>

          {/* HUD CORNER BRACKETS */}
          <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-white/20" />
          <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-white/20" />
        </div>

      </div>

      <style jsx="true">{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
