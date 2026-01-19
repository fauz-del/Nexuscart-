import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Reveal } from '../../components/layout/Reveal';
import { supabase } from '../../lib/supabase';

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // 2026 Path Fixes
  const base = import.meta.env.BASE_URL; // Returns '/Nexuscart-/'
  const PROJECT_ID = "welgpcjogqzmidyrjhwj";
  const BUCKET_NAME = "product-images";
  const baseImgUrl = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        if (error) throw error;
        if (data) setProducts(data);
      } catch (err) {
        console.error("SEARCH_MATRIX_ERROR:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveCat(location.state.selectedCategory);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = activeCat === "All" || product.category === activeCat;
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCat, searchTerm, products]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Tech Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-l-4 border-cyan-500 pl-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">Global_Inventory_v2026</p>
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              PRODUCT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">MATRIX</span>
            </h1>
          </div>

          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500" />
            <input 
              type="text"
              placeholder="SEARCH_DATABASE..."
              className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 py-4 pl-12 pr-4 focus:outline-none focus:border-cyan-500 transition-all font-mono text-sm dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["All", "Mobile", "Laptop", "Audio", "Wearable", "Tablet", "VR"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer border ${
                activeCat === cat 
                ? "bg-cyan-500 text-white border-cyan-500" 
                : "bg-transparent border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-cyan-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-20 font-mono text-cyan-500 animate-pulse uppercase text-xs tracking-widest">
            SYNCHRONIZING_DATABASE...
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Reveal key={product.id}>
              <div 
                onClick={() => navigate(`/shop/product/${product.id}`)}
                className="group cursor-pointer bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 hover:border-cyan-500 transition-all duration-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-cyan-500/10"
              >
                <div className="aspect-square mb-6 overflow-hidden bg-white dark:bg-[#0a0a0a] flex items-center justify-center rounded-xl border border-transparent group-hover:border-cyan-500/20 transition-all">
                  <img 
                    src={product.image_url?.startsWith('http') ? product.image_url : `${baseImgUrl}${product.image_url}`}
                    alt={product.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    onError={(e) => {
                      const target = e.currentTarget;
                      
                      // 1. Clean the filename (strips malformed domain junk)
                      const raw = product.image_url || "";
                      const fileName = raw.includes('supabase.co') 
                        ? raw.split('supabase.co').pop() 
                        : raw.split('/').pop();

                      // 2. Precise Mapping to your 'public/assets/' folders
                      const cat = product.category?.toLowerCase() || "";
                      const name = product.name?.toLowerCase() || "";
                      
                      let folder = 'lp'; // Laptop / Default

                      if (name.includes('airpod') || cat.includes('airpod')) {
                        folder = 'airpod';
                      } else if (cat.includes('audio') || cat.includes('headphone')) {
                        folder = 'headphones';
                      } else if (cat.includes('mobile') || cat.includes('phone') || name.includes('iphone')) {
                        folder = 'phones';
                      } else if (cat.includes('watch') || cat.includes('wearable')) {
                        folder = 'watch';
                      } else if (cat.includes('tablet')) {
                        folder = 'tablet';
                      } else if (cat.includes('vr') || name.includes('vr')) {
                        folder = 'vrgoogle';
                      } else if (cat.includes('glass') || name.includes('glass')) {
                        folder = 'glasses';
                      }
                      
                      const localPath = `${base}assets/${folder}/${fileName}`;

                      if (target.src !== window.location.origin + localPath) {
                        console.warn(`SearchMatrix: Loading local unit from ${localPath}`);
                        target.src = localPath;
                      }
                    }}
                  />
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase tracking-tighter">
                      {product.category} // {product.stock_count > 0 ? 'STATUS_OK' : 'OUT_OF_STOCK'}
                    </p>
                    <h3 className="text-xl font-bold dark:text-white group-hover:text-cyan-500 transition-colors uppercase italic tracking-tighter">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-lg font-mono font-bold dark:text-white tracking-tighter text-cyan-500">
                    ${product.price?.toLocaleString()}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-dashed border-slate-300 dark:border-white/10 rounded-3xl">
            <p className="font-mono text-slate-500 text-xs tracking-[0.5em] uppercase animate-pulse">
              Zero_Matches_Found_In_Matrix
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
