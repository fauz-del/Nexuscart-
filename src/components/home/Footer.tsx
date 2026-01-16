import { useNavigate } from "react-router-dom"; // Import navigation hook

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Properly set for 2026
  const navigate = useNavigate(); // Initialize navigate

  return (
    <footer className="relative bg-slate-50 dark:bg-black pt-24 pb-12 px-6 overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Left: Newsletter & Branding */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 uppercase">
              Stay in the <span className="text-cyan-500">Nexus.</span>
            </h2>
            <p className="text-slate-500 dark:text-neutral-400 mb-8 max-w-sm font-medium">
              Join 50k+ enthusiasts receiving early access to hardware drops and system updates.
            </p>
            
            <form className="flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="TERMINAL@USER.COM" 
                className="flex-grow bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors text-slate-900 dark:text-white"
              />
              <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-8 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white transition-all cursor-pointer">
                Join
              </button>
            </form>
          </div>

          {/* Right: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 tracking-[0.3em] uppercase mb-6">Directory</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-neutral-400">
                {/* NAVIGATE TO SHOP */}
                <li onClick={() => navigate('/shop')} className="hover:text-cyan-500 cursor-pointer transition-colors">Catalog</li>
                <li onClick={() => navigate('/shop')} className="hover:text-cyan-500 cursor-pointer transition-colors">Archive</li>
                <li className="hover:text-cyan-500 cursor-pointer transition-colors">Rewards</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 tracking-[0.3em] uppercase mb-6">Protocol</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-neutral-400">
                <li className="hover:text-cyan-500 cursor-pointer transition-colors">Shipping</li>
                <li className="hover:text-cyan-500 cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-cyan-500 cursor-pointer transition-colors">Terms</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 tracking-[0.3em] uppercase mb-6">Terminal</h4>
              <p className="text-xs font-mono text-slate-400 dark:text-neutral-600 leading-relaxed uppercase">
                NEXUS_HQ <br />
                Lagos Sector <br />
                V-0.2.6 // {currentYear}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-slate-400 dark:text-neutral-600 tracking-widest uppercase">
            © {currentYear} NexusCart Systems. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-400 dark:text-neutral-500 uppercase tracking-tighter">System Normal</span>
            </div>
            {/* Smooth Scroll to Top */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest border-b border-cyan-500 cursor-pointer hover:text-cyan-500 transition-colors"
            >
              Back to Top ↑
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
