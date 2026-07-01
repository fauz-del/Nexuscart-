import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ALL_PRODUCTS } from '../../data/products.ts';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const found = ALL_PRODUCTS.find(p => p.id === id);
    setProduct(found || null);
    setLoading(false);
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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
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
          <div className="relative aspect-square bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden rounded-[40px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-50" />
            <img
              src={product.img}
              className="w-full h-full object-contain p-12 hover:scale-105 transition-transform duration-700 relative z-10"
              alt={product.name}
            />
          </div>

          <div>
            <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em] mb-3">
              {product.cat} // {product.status}
            </p>
            <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 leading-none">
              {product.name}
            </h1>
            <p className="text-slate-600 dark:text-neutral-400 mb-8 leading-relaxed">
              {product.desc}
            </p>
            <p className="text-4xl font-black font-mono text-cyan-500 mb-10">
              ${product.price.toLocaleString()}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white hover:border-cyan-500 transition-all cursor-pointer rounded-lg"
              >
                −
              </button>
              <span className="font-mono text-slate-900 dark:text-white w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white hover:border-cyan-500 transition-all cursor-pointer rounded-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-2xl text-sm tracking-widest uppercase transition-all cursor-pointer"
            >
              {added ? "✓ ADDED TO CART" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
