import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Reveal } from '../../components/layout/Reveal';
import { supabase } from '../../lib/supabase'; // Import live DB

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]); // State for DB products
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Fetch products from Supabase on mount
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

  // 2. Logic: Handle category state passed from Collection.tsx
  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveCat(location.state.selectedCategory);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // 3. Filtering logic (Client-side for speed)
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
              <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">Global_Inventory_v2.6</p>
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

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20 font-mono text-cyan-500 animate-pulse uppercase text-xs tracking-widest">
            SYNCHRONIZING_DATABASE...
          </div>
        )}

        {/* Product Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Reveal key={product.id}>
              <div 
                onClick={() => navigate(`/shop/product/${product.id}`)}
                className="group cursor-pointer bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 hover:border-cyan-500 transition-all duration-500"
              >
                <div className="aspect-square mb-6 overflow-hidden bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
                  <img 
                    src={product.image_url} // Changed to DB field
                    alt={product.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-mono text-cyan-500 mb-1">{product.category} // {product.stock_count > 0 ? 'LIVE' : 'OUT_OF_STOCK'}</p>
                    <h3 className="text-xl font-bold dark:text-white group-hover:text-cyan-500 transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-lg font-mono font-bold dark:text-white tracking-tighter">${product.price}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* No Matches */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-dashed border-slate-300 dark:border-white/10">
            <p className="font-mono text-slate-500 text-xs tracking-widest">ZERO_MATCHES_RETURNED_BY_SYSTEM</p>
          </div>
        )}
      </div>
    </div>
  );
}
