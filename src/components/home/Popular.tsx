import { useNavigate } from "react-router-dom"; // Import the hook
import vrgoogle2 from "../../assets/vrgoogle/vrgoogle2.jpeg";
import airpod3 from "../../assets/airpod/airpod3.jpeg";

export default function Popular() {
  const navigate = useNavigate(); // Initialize navigation

  const items = [
    {
      id: "v2", // Real DB ID for Vision G2
      name: "Nexus Vision",
      model: "Gen-X Optics",
      desc: "The industry benchmark for spatial computing and neural processing.",
      img: vrgoogle2,
      tag: "SPATIAL",
      accent: "from-cyan-500/20"
    },
    {
      id: "ap3", // Real DB ID for Air-P3
      name: "Sonic Pods",
      model: "Aura Series",
      desc: "Revolutionary bio-acoustic tuning with zero-latency hardware sync.",
      img: airpod3,
      tag: "AUDIO",
      accent: "from-blue-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
        <div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">ON NEXUS</span>
          </h2>
          <p className="text-slate-500 dark:text-neutral-500 mt-4 font-mono text-sm tracking-widest">RANKED BY USER ENGAGEMENT // 2026</p>
        </div>
        <div className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10 mx-8 hidden lg:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className="group relative h-[600px] flex flex-col justify-between overflow-hidden rounded-[48px] bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-white/5 transition-all duration-700 hover:shadow-2xl dark:hover:shadow-cyan-500/10">
            
            {/* Background Layer */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Image Section */}
            <div className="relative h-1/2 w-full overflow-hidden">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 px-4 py-1.5 rounded-full z-20">
                <p className="text-[10px] font-black text-slate-900 dark:text-white tracking-[0.2em] uppercase">{item.tag}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative p-10 md:p-12 flex flex-col justify-end z-10 bg-white/40 dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <span className="text-cyan-600 dark:text-cyan-500 font-black tracking-tighter text-sm mb-2 block">TOP RANKED // 0{index + 1}</span>
              
              <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                {item.name} <br/>
                <span className="text-slate-400 dark:text-neutral-600 italic font-medium">{item.model}</span>
              </h3>
              
              <p className="text-slate-600 dark:text-neutral-400 mb-8 max-w-sm text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
              
              <div className="flex items-center gap-6">
                {/* CONFIGURE BUTTON: Redirects to Product Page */}
                <button 
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                  className="group/btn relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-all active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10">Configure</span>
                  <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
                
                <div className="flex flex-col gap-1">
                  <div className="h-[2px] w-8 bg-slate-300 dark:bg-white/20 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
                  <div className="h-[2px] w-12 bg-slate-300 dark:bg-white/20 group-hover:w-8 group-hover:bg-cyan-500 transition-all duration-500" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-slate-900 dark:text-white">
                 <path d="M0 39H39V0" stroke="currentColor" strokeWidth="2"/>
               </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
