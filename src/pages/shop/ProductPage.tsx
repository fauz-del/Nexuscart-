import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, Plus, Minus, Check, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { supabase } from '../../lib/supabase';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedVar, setSelectedVar] = useState("");

  // 2026 Path Fixes
  const base = import.meta.env.BASE_URL; // Returns '/Nexuscart-/' from vite.config.mts
  const PROJECT_ID = "welgpcjogqzmidyrjhwj";
  const BUCKET_NAME = "product-images";
  const baseImgUrl = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;

        if (data) {
          setProduct(data);
          setSelectedVar(data.variations?.[0] || "");
        }
      } catch (error) {
        console.error("DATABASE_SYNC_ERROR:", error);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
        <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent animate-spin mb-8" />
        <p className="tracking-[0.5em] text-xs uppercase">ESTABLISHING_LINK...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white font-mono text-center px-6">
        <p className="tracking-[0.5em] text-xs text-red-500 uppercase mb-4">CRITICAL_ERROR: UNIT_NOT_FOUND</p>
        <button onClick={() => navigate('/shop')} className="text-cyan-500 underline text-[10px] uppercase cursor-pointer">
          REBOOT_TO_MATRIX
        </button>
      </div>
    );
  }

  // IMAGE HELPER LOGIC: Used for both Display and Cart
  const getProductImage = () => {
    if (!product.image_url) return "";
    return product.image_url.startsWith('http') 
      ? product.image_url 
      : `${baseImgUrl}${product.image_url}`;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      // Pass the cleaned image to cart
      img: getProductImage(), 
      variation: selectedVar 
    }, quantity);

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-500 mb-12 transition-all cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          RETURN_TO_MATRIX
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* PRODUCT VISUAL BLOCK */}
          <div className="relative aspect-square bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden rounded-[40px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-50" />
            <img 
              src={getProductImage()} 
              className="w-full h-full object-contain p-12 hover:scale-105 transition-transform duration-700 relative z-10" 
              alt={product.name} 
              onError={(e) => {
                const target = e.currentTarget;
                
                // 1. Clean the filename (removes dirty supabase domain strings)
                const raw = product.image_url || "";
                const fileName = raw.includes('supabase.co') 
                  ? raw.split('supabase.co').pop() 
                  : raw.split('/').pop();

                // 2. Map category to local subfolders
                const cat = product.category?.toLowerCase() || "";
                let folder = 'lp';
                if (cat.includes('audio') || cat.includes('head') || cat.includes('air')) folder = 'headphones';
                else if (cat.includes('mobile') || cat.includes('phone')) folder = 'phones';
                else if (cat.includes('watch') || cat.includes('wear')) folder = 'watch';
                else if (cat.includes('tablet')) folder = 'tablet';
                else if (cat.includes('vr')) folder = 'vrgoogle';

                // 3. Construct local path with GitHub Pages base
                const localPath = `${base}assets/${folder}/${fileName}`;
                
                if (target.src !== window.location.origin + localPath) {
                  console.warn(`Product: Switching to clean local path: ${localPath}`);
                  target.src = localPath;
                }
              }}
            />
            <div className="absolute top-8 right-8 text-[10px] font-mono text-cyan-500 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded">
              LIVE // {product.stock_count > 0 ? 'OPERATIONAL' : 'STOCK_LOW'}
            </div>
          </div>

          {/* PRODUCT INFO BLOCK */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={14} className="text-cyan-500 fill-cyan-500" />
              <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em]">
                {product.category} // UNIT_REF_{product.id?.toString().slice(0,8).toUpperCase()}
              </p>
            </div>
            
            <h1 className="text-7xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none mb-6">
              {product.name}
            </h1>
            
            <p className="text-lg text-slate-500 dark:text-neutral-400 mb-10 leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="text-6xl font-black text-cyan-500 font-mono mb-12 flex items-baseline gap-2">
              <span className="text-xl text-slate-400 font-normal tracking-tighter">$</span>
              {product.price?.toLocaleString()}
            </div>

            {/* VARIATIONS */}
            {product.variations && product.variations.length > 0 && (
              <div className="mb-10">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">SELECT_CONFIGURATION</p>
                <div className="flex flex-wrap gap-3">
                  {product.variations.map((v: string) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVar(v)}
                      className={`px-6 py-2 text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${
                        selectedVar === v 
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-500" 
                        : "border-slate-200 dark:border-white/10 text-slate-400 hover:border-slate-400"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY AND CART ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <div className="flex items-center border border-slate-200 dark:border-white/10 w-full sm:w-auto h-[60px]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 text-slate-500 hover:text-cyan-500 transition-colors h-full cursor-pointer"><Minus size={14} /></button>
                <span className="w-12 text-center font-mono font-bold dark:text-white text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-6 text-slate-500 hover:text-cyan-500 transition-colors h-full cursor-pointer"><Plus size={14} /></button>
              </div>

              <button 
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 h-[60px] font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  added ? "bg-green-600 text-white" : "bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white shadow-lg"
                }`}
              >
                {added ? <><Check size={18} /> SYNC_SUCCESSFUL</> : <><ShoppingCart size={18} /> INITIALIZE_TRANSFER</>}
              </button>
            </div>

            {/* LOGISTICS FOOTER */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-white/10 pt-8">
               <div className="space-y-2">
                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">
                   <ShieldCheck size={16} className="text-cyan-500" /> SECURE_PROTOCOL
                 </div>
                 <p className="text-[9px] text-slate-400 font-mono leading-tight uppercase">Encrypted_Warranty_2YR_Active</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">
                   <Truck size={16} className="text-cyan-500" /> GLOBAL_TRANSIT
                 </div>
                 <p className="text-[9px] text-slate-400 font-mono leading-tight uppercase">Instant_Deployment_Active</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
