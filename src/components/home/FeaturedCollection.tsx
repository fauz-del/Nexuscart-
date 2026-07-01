import { useNavigate } from "react-router-dom";
import { ALL_PRODUCTS } from "../../data/products.ts";

export default function FeaturedCollection() {
  const navigate = useNavigate();
  const products = ALL_PRODUCTS.slice(0, 4);

  return (
    <section className="py-19 px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500 transform-gpu">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-cyan-500" />
            <p className="text-xs font-black tracking-[0.3em] text-cyan-600 dark:text-cyan-400 uppercase">System Inventory</p>
          </div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            FEATURED <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-neutral-500">TECH</span>
          </h2>
        </div>
        <button
          onClick={() => navigate('/shop')}
          className="group flex items-center gap-4 text-slate-900 dark:text-white font-bold text-sm tracking-widest uppercase cursor-pointer"
        >
          <span className="border-b-2 border-slate-900/10 dark:border-white/10 group-hover:border-cyan-500 transition-all">Explore All Units</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer"
            onClick={() => navigate(`/shop/product/${item.id}`)}
          >
            <div className="relative overflow-hidden bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-white/5 rounded-[40px] p-5 transition-all duration-500 hover:border-cyan-500/50">
              <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-[30px] bg-white dark:bg-black">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white truncate">{item.name}</h3>
                <p className="text-xl font-black text-cyan-600 dark:text-cyan-400 font-mono">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
