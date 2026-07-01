import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw, Zap } from 'lucide-react';
import Footer from '../../components/home/Footer';
import { useCart } from '../../context/CartContext';
import { ALL_PRODUCTS } from '../../data/products.ts';

// Specs per category
const CATEGORY_SPECS: Record<string, Record<string, string>> = {
  Audio: {
    "Driver Size": "40mm Dynamic",
    "Frequency Response": "20Hz - 20kHz",
    "Connectivity": "Bluetooth 5.3 + USB-C",
    "Battery": "Up to 80hrs",
    "Noise Cancellation": "Active (ANC)",
    "Weight": "250g"
  },
  Mobile: {
    "Display": "6.7\" Super AMOLED",
    "Processor": "Latest Gen SoC",
    "RAM": "8GB / 12GB",
    "Storage": "128GB / 256GB",
    "Camera": "Triple-lens array",
    "Battery": "4500mAh"
  },
  Laptop: {
    "Display": "15.6\" 4K OLED",
    "Processor": "Intel Core Ultra / Ryzen 9",
    "RAM": "16GB DDR5",
    "Storage": "1TB NVMe SSD",
    "GPU": "RTX 4060 / Arc",
    "Battery": "86Wh"
  },
  Tablet: {
    "Display": "11\" Liquid Retina",
    "Processor": "M-Series / Snapdragon",
    "RAM": "8GB",
    "Storage": "128GB / 256GB",
    "Connectivity": "WiFi 6E + 5G",
    "Battery": "28.65Wh"
  },
  Wearable: {
    "Display": "Always-on AMOLED",
    "Sensors": "Heart rate, SpO2, GPS",
    "Battery": "Up to 10 days",
    "Water Resistance": "5ATM",
    "Connectivity": "Bluetooth 5.2 + NFC",
    "Weight": "32g"
  },
  VR: {
    "Display": "Micro-OLED dual panel",
    "Resolution": "4K per eye",
    "Refresh Rate": "120Hz",
    "Field of View": "110°",
    "Tracking": "6DoF hand-gesture",
    "Weight": "380g"
  }
};

const TRUST_BADGES = [
  { icon: Truck, label: "Free Shipping", sub: "On orders over $100" },
  { icon: ShieldCheck, label: "2 Year Warranty", sub: "Full coverage" },
  { icon: RotateCcw, label: "30-Day Returns", sub: "No questions asked" },
  { icon: Zap, label: "Fast Dispatch", sub: "Ships within 24hrs" },
];

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
    window.scrollTo(0, 0);
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

  const specs = CATEGORY_SPECS[product.cat] || {};

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

  // Related products — same category, exclude current
  const related = ALL_PRODUCTS
    .filter(p => p.cat === product.cat && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-500 mb-12 transition-all cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_MATRIX
        </button>

        {/* Main product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Image */}
          <div className="relative aspect-square bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden rounded-[40px] sticky top-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
            <img
              src={product.img}
              className="w-full h-full object-contain p-12 hover:scale-105 transition-transform duration-700 relative z-10"
              alt={product.name}
            />
            {/* Status badge */}
            <div className="absolute top-6 left-6 bg-black/60 dark:bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{product.status}</span>
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Category + ID */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                {product.cat}
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                ID_{product.id.toUpperCase()}
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 leading-none">
              {product.name}
            </h1>

            <p className="text-slate-600 dark:text-neutral-400 mb-6 leading-relaxed text-base">
              {product.desc}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <p className="text-5xl font-black font-mono text-cyan-500">
                ${product.price.toLocaleString()}
              </p>
              <span className="text-sm text-slate-400 dark:text-neutral-600 font-mono">USD</span>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer text-lg"
                >
                  −
                </button>
                <span className="font-mono text-slate-900 dark:text-white w-10 text-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer text-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-2xl text-xs tracking-widest uppercase transition-all cursor-pointer"
              >
                {added ? "✓ UNIT SECURED" : "ADD TO CART"}
              </button>
            </div>

            {/* Total */}
            <p className="text-xs font-mono text-slate-400 dark:text-neutral-600 mb-10">
              TOTAL: ${(product.price * quantity).toLocaleString()} USD
            </p>

            {/* Specs table */}
            {Object.keys(specs).length > 0 && (
              <div className="mb-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-neutral-500 mb-4">
                  Technical Specifications
                </h3>
                <div className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                  {Object.entries(specs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between px-5 py-3 text-sm ${
                        i % 2 === 0
                          ? 'bg-slate-50 dark:bg-white/5'
                          : 'bg-white dark:bg-transparent'
                      }`}
                    >
                      <span className="font-mono text-slate-500 dark:text-neutral-500 text-xs uppercase tracking-wider">{key}</span>
                      <span className="font-bold text-slate-900 dark:text-white text-xs text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5"
                >
                  <badge.icon size={16} className="text-cyan-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{badge.label}</p>
                    <p className="text-[10px] text-slate-400 dark:text-neutral-600">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-8 bg-cyan-500" />
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-neutral-500">
                Related Units
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(item => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                  className="group cursor-pointer border border-slate-200 dark:border-white/10 rounded-2xl p-4 hover:border-cyan-500 transition-all"
                >
                  <div className="aspect-square mb-3 overflow-hidden rounded-xl bg-slate-50 dark:bg-white/5">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white truncate">{item.name}</p>
                  <p className="font-mono text-cyan-500 text-sm font-black">${item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
<Footer />
    </div>
  );
}
