import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function FeaturedCollection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        // 1. Fetch items specifically marked as featured in Supabase
        let { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_featured', true)
          .limit(4);

        if (error) throw error;

        // 2. Fallback: If no featured items, get the 4 most recent products
        if (!data || data.length === 0) {
          const { data: fallback } = await supabase
            .from('products')
            .select('*')
            .limit(4)
            .order('created_at', { ascending: false });
          data = fallback;
        }

        if (data) setProducts(data);
      } catch (err) {
        console.error("FEATURED_SYNC_ERROR:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  if (loading) return null;

  return (
    <section className="py-19 px-6 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500 transform-gpu">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-cyan-500" />
            <p className="text-xs font-black tracking-[0.3em] text-cyan-600 dark:text-cyan-400 uppercase">System Inventory</p>
          </div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            FEATURED <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-neutral-500">TECH</span>
          </h2>
        </div>
        
        <button 
          onClick={() => navigate('/shop')}
          className="group flex items-center gap-4 text-slate-900 dark:text-white font-bold text-sm tracking-widest uppercase cursor-pointer"
        >
          <span className="border-b-2 border-slate-900/10 dark:border-white/10 group-hover:border-cyan-500 transition-all">Explore All Units</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, i) => (
          <div 
            key={item.id} 
            className="group relative cursor-pointer transform-gpu will-change-transform"
            onClick={() => navigate(`/shop/product/${item.id}`)}
          >
            <div className="relative overflow-hidden bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-white/5 rounded-[40px] p-5 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]">
              
              <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-[30px] bg-white dark:bg-black border border-slate-100 dark:border-white/5">
                <img 
                  // OPTIMIZATION: Use Supabase CDN to resize images to 400px width
                  src={`${item.image_url}?width=400&quality=80`} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-slate-900 dark:bg-cyan-500 text-white text-[9px] font-black px-2.5 py-1 rounded-md tracking-tighter uppercase">
                    {item.category}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-400 dark:text-neutral-500 bg-white/80 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded">
                  UNIT_{item.id.slice(0, 5).toUpperCase()}
                </div>
              </div>

              <div className="px-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white transition-colors truncate">
                  {item.name}
                </h3>
                
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-neutral-500 uppercase font-black tracking-widest mb-1">Price / USD</p>
                    <p className="text-xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300 shadow-xl shadow-transparent group-hover:shadow-cyan-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-3 opacity-20">
                <div className="w-4 h-4 border-t-2 border-r-2 border-slate-400 dark:border-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
