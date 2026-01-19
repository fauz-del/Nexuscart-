import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function Popular() {
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2026 CONFIG: reads '/Nexuscart-/' from vite.config.mts
  const base = import.meta.env.BASE_URL;
  const PROJECT_ID = "welgpcjogqzmidyrjhwj";
  const BUCKET_NAME = "product-images";
  const baseImgUrl = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

  useEffect(() => {
    async function fetchPopular() {
      try {
        let { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_popular', true)
          .limit(2);

        if (error) throw error;

        if (!data || data.length === 0) {
          const { data: fallbackData } = await supabase
            .from('products')
            .select('*')
            .limit(2)
            .order('created_at', { ascending: false });
          data = fallbackData;
        }

        if (data) setItems(data);
      } catch (error) {
        console.error("Error fetching popular items:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPopular();
  }, []);

  if (loading) return null;

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
                // Logic: Handle full URLs vs partial paths
                src={item.image_url?.startsWith('http') ? item.image_url : `${baseImgUrl}${item.image_url}`} 
                alt={item.name} 
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  
                  // 1. CLEAN FILENAME EXTRACTION
                  const raw = item.image_url || "";
                  const fileName = raw.includes('supabase.co') 
                    ? raw.split('supabase.co').pop() // Strips domain
                    : raw.split('/').pop();          // Strips relative paths

                  // 2. FOLDER MAPPING (Matching your tree)
                  const cat = item.category?.toLowerCase() || "";
                  let folder = 'lp';
                  if (cat.includes('audio') || cat.includes('head') || cat.includes('air')) folder = 'headphones';
                  else if (cat.includes('mobile') || cat.includes('phone')) folder = 'phones';
                  else if (cat.includes('watch') || cat.includes('wear')) folder = 'watch';
                  else if (cat.includes('glass')) folder = 'glasses';
                  else if (cat.includes('vr')) folder = 'vrgoogle';

                  // Extra check for airpods if they live in the airpod folder
                  if (fileName?.includes('airpod')) folder = 'airpod';

                  // 3. FINAL LOCAL PATH
                  const localPath = `${base}assets/${folder}/${fileName}`;
                  
                  if (target.src !== window.location.origin + localPath) {
                    console.warn(`Popular Fallback: ${localPath}`);
                    target.src = localPath;
                  }
                }}
              />
              <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 px-4 py-1.5 rounded-full z-20">
                <p className="text-[10px] font-black text-slate-900 dark:text-white tracking-[0.2em] uppercase">{item.category}</p>
              </div>
            </div>

            <div className="relative p-10 md:p-12 flex flex-col justify-end z-10 bg-white/40 dark:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <span className="text-cyan-600 dark:text-cyan-500 font-black tracking-tighter text-sm mb-2 block uppercase">UNIT_RANK_0{index + 1}</span>
              
              <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                {item.name}
              </h3>
              
              <p className="text-slate-600 dark:text-neutral-400 mb-8 max-w-sm text-sm md:text-base leading-relaxed line-clamp-2">
                {item.description}
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
