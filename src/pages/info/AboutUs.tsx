import { Reveal } from '../../components/layout/Reveal';
import { ShieldCheck, Zap, Globe, Cpu, Star, Quote } from 'lucide-react';
import laptop from "../../assets/lp/laptop.jpg";
import vrgoogle2 from "../../assets/vrgoogle/vrgoogle2.jpeg";
import phone1 from "../../assets/phones/phone1.jpeg";

export default function AboutUs() {
  const stats = [
    { label: "Active_Nodes", value: "1,240+" },
    { label: "Data_Throughput", value: "48.2 PB" },
    { label: "Uptime_Ratio", value: "99.99%" },
    { label: "Global_Sectors", value: "124" },
  ];

  const testimonials = [
    {
      user: "Arc_V01",
      role: "Neural Architect",
      text: "The hardware latency from Nexus is practically non-existent. My daily stack depends on their H-Series units.",
    },
    {
      user: "Cypher_K",
      role: "System Admin",
      text: "Deployment was instant. The build quality of the Vision-G2 exceeded every diagnostic test we ran.",
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-32 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: ASYMMETRICAL HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-40">
          <div className="lg:col-span-8">
            <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Origin_Story // System_Initialize</p>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter dark:text-white leading-[0.8] italic uppercase">
              WE BUILD THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">INTERFACE.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <div className="border-l-2 border-cyan-500 pl-6 space-y-4">
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                NexusCart isn't just a store. It's a high-frequency hardware distribution node for those living in version 2.6 of reality.
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1 w-4 bg-slate-200 dark:bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SYSTEM STATS (BADGES) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
          {stats.map((stat, i) => (
            <Reveal key={i}>
              <div className="p-8 border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-md">
                <p className="text-[10px] font-mono text-cyan-500 uppercase mb-2">/{stat.label}</p>
                <p className="text-4xl font-black dark:text-white tracking-tighter">{stat.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SECTION 3: CORE PROTOCOLS (ASYMMETRICAL GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
          <div className="lg:col-span-5 relative group">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative">
                <img src={laptop} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Hardware" />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-900 dark:bg-white p-10 hidden md:block">
                <Cpu className="text-cyan-500 mb-4" size={32} />
                <p className="text-white dark:text-black font-black text-xl italic uppercase">0 latency <br /> protocols</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-24 space-y-12">
            <Reveal>
              <h2 className="text-5xl font-black dark:text-white uppercase italic tracking-tighter">The Hardware Protocol</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                Founded in the digital shift of 2026, NexusCart was born from a need for hardware that keeps pace with software. We curate only the most stable, operational, and future-ready units.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <Globe className="text-cyan-500" />
                <h4 className="font-bold dark:text-white uppercase tracking-widest text-sm">Global Distribution</h4>
                <p className="text-xs text-slate-500 leading-loose">Nodes in Lagos, Tokyo, and Berlin ensure your hardware is deployed within 24 hours of synchronization.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="text-cyan-500" />
                <h4 className="font-bold dark:text-white uppercase tracking-widest text-sm">Bit-Level Security</h4>
                <p className="text-xs text-slate-500 leading-loose">Every transaction is hashed and encrypted. Your digital footprint remains localized to your terminal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: TESTIMONIAL MATRIX (UNIQUE ASYMMETRICAL) */}
        <div className="mb-40">
          <p className="text-center font-mono text-[10px] text-cyan-500 uppercase tracking-[0.5em] mb-16">// User_Feedback_Logs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-[#050505] p-12 space-y-6">
                <Quote className="text-cyan-500 opacity-50" size={32} />
                <p className="text-2xl font-medium dark:text-white leading-snug italic italic">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600" />
                  <div>
                    <p className="font-black dark:text-white uppercase text-xs tracking-widest">{t.user}</p>
                    <p className="text-[10px] font-mono text-cyan-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: FINAL BREAKOUT IMAGE */}
        <div className="relative group">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden border border-slate-200 dark:border-white/10">
              <img src={vrgoogle2} className="w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Vision" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                 <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">Join the <span className="italic text-cyan-500">Nexus.</span></h2>
                 <button className="bg-white text-black px-10 py-4 font-black uppercase text-xs tracking-[0.3em] hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                   Initialize_Access
                 </button>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
