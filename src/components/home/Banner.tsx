export default function Banner() {
  return (
    <section className="px-6 py-10 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative group">
        {/* Animated Glow Background behind the banner */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative h-auto md:h-48 bg-slate-900 dark:bg-neutral-900 rounded-[38px] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-0 gap-8 overflow-hidden">
          
          {/* Unique Tech Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #06b6d4 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
          </div>

          {/* Animated Scanning Line */}
          <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-0 animate-scan pointer-events-none"></div>

          {/* Left Content */}
          <div className="relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping"></span>
              <span className="text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">Status: Phase II Active</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
              JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEXUS REWARDS</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium mt-1 uppercase tracking-widest opacity-80">Unlock hardware drops & priority tracking</p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10">
            <button className="group/btn relative px-10 py-4 bg-white dark:bg-cyan-500 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer">
              {/* Button Hover Slide Effect */}
              <div className="absolute inset-0 w-0 bg-slate-900 group-hover/btn:w-full transition-all duration-300"></div>
              
              <span className="relative z-10 text-black group-hover/btn:text-white font-black text-sm tracking-widest uppercase flex items-center gap-2">
                Sign Up Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(200px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
