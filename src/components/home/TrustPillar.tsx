export default function TrustPillars() {
  const pillars = [
    { 
      id: "LOG-01", 
      title: "QUANTUM LOGISTICS", 
      desc: "Real-time hardware tracking with 24h global dispatch windows.",
      status: "ACTIVE"
    },
    { 
      id: "SEC-02", 
      title: "ENCRYPTED CHECKOUT", 
      desc: "Military-grade 256-bit protocol for every terminal transaction.",
      status: "SECURE"
    },
    { 
      id: "SUP-03", 
      title: "NEURAL SUPPORT", 
      desc: "Direct-line technical relay with our hardware engineering team.",
      status: "ONLINE"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {pillars.map((p, i) => (
          <div key={i} className="group relative">
            {/* Background Serial Number Decor */}
            <span className="absolute -top-6 -left-2 text-6xl font-black text-slate-50 dark:text-neutral-900/50 pointer-events-none group-hover:text-cyan-500/10 transition-colors duration-700">
              {p.id.split('-')[1]}
            </span>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-cyan-500 rounded-full" />
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em]">
                  {p.status} // {p.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase italic">
                {p.title}
              </h3>
              
              <p className="text-slate-500 dark:text-neutral-500 text-sm leading-relaxed max-w-[280px] font-medium">
                {p.desc}
              </p>

              {/* Unique Bottom Accent */}
              <div className="mt-8 h-[1px] w-full bg-slate-100 dark:bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
