import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function FeaturedCollection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const base = import.meta.env.BASE_URL; // '/Nexuscart-/'
  const PROJECT_ID = "welgpcjogqzmidyrjhwj";
  const BUCKET_NAME = "product-images";
  const baseImgUrl = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

  useEffect(() => {
    async function fetchFeatured() {
      try {
        let { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_featured', true)
          .limit(4);

        if (error) throw error;
        if (!data || data.length === 0) {
          const { data: fallback } = await supabase.from('products').select('*').limit(4);
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

  if (loading) return (
    <div className="py-24 text-center font-mono text-cyan-500 animate-pulse uppercase tracking-widest">
      Syncing_Hardware_Data...
    </div>
  );

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
                  // 1. Try Supabase first
                  src={item.image_url?.startsWith('http') ? item.image_url : `${baseImgUrl}${item.image_url}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    
                    // 2. CLEAN FILENAME: This fixes the "welgpcjog...headphones2.jpg" issue
                    const raw = item.image_url || "";
                    const fileName = raw.includes('supabase.co') 
                      ? raw.split('supabase.co').pop() // Strips the domain
                      : raw.split('/').pop();          // Strips paths

                    // 3. FOLDER MAPPING
                    const cat = item.category?.toLowerCase() || "";
                    let folder = 'lp';
                    if (cat.includes('audio') || cat.includes('head') || cat.includes('air')) folder = 'headphones';
                    else if (cat.includes('mobile') || cat.includes('phone')) folder = 'phones';
                    else if (cat.includes('watch') || cat.includes('wear')) folder = 'watch';
                    else if (cat.includes('glass')) folder = 'glasses';
                    else if (cat.includes('vr')) folder = 'vrgoogle';

                    // Special case for airpods if they are in their own folder
                    if (fileName.includes('airpod')) folder = 'airpod';

                    // 4. FINAL LOCAL PATH
                    const localPath = `${base}assets/${folder}/${fileName}`;
                    
                    if (target.src !== window.location.origin + localPath) {
                      console.log("Cleaned Fallback:", localPath);
                      target.src = localPath;
                    }
                  }}
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
