import { useNavigate } from "react-router-dom";
import { ALL_PRODUCTS } from "../../data/products.ts";

export default function Popular() {
  const navigate = useNavigate();
  const items = ALL_PRODUCTS.slice(0, 2);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500 transform-gpu">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
        <div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">ON NEXUS</span>
          </h2>
          <p className="text-slate-500 dark:text-neutral-500 mt-4 font-mono text-sm tracking-widest uppercase">RANK_V2026 // SYSTEM_ACTIVE</p>
        </div>
        <div className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10 mx-8 hidden lg:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className="group relative h-[600px] flex flex-col justify-between overflow-hidden rounded-[48px] bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-white/5 transition-all duration-700 hover:shadow-2xl transform-gpu">

            <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-cyan-500/20' : 'from-blue-500/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative h-1/2 w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 px-4 py-1.5 rounded-full z-20">
                <p className="text-[10px] font-black text-slate-900 dark:text-white tracking-[0.2em] uppercase">{item.cat}</p>
              </div>
            </div>

            <div className="relative p-10 md:p-12 flex flex-col justify-end z-10 bg-white/40 dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <span className="text-cyan-600 dark:text-cyan-500 font-black tracking-tighter text-sm mb-2 block uppercase">UNIT_RANK_0{index + 1}</span>
              <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                {item.name}
              </h3>
              <p className="text-slate-600 dark:text-neutral-400 mb-8 max-w-sm text-sm md:text-base leading-relaxed line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                  className="group/btn relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase cursor-pointer"
                >
                  <span className="relative z-10">Configure Unit</span>
                  <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
