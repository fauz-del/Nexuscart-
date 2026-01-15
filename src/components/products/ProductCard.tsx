import { ShoppingCart, Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-3xl p-4 transition-all hover:border-cyan-500/50 hover:bg-white/[0.07] backdrop-blur-sm">
      <div className="relative h-48 w-full bg-neutral-900 rounded-2xl mb-4 overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.is_popular && (
          <span className="absolute top-3 left-3 bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded-full">
            POPULAR
          </span>
        )}
      </div>
      
      <div className="px-2">
        <h3 className="font-bold text-lg text-white truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-mono font-bold text-cyan-400">
            ${product.price}
          </span>
          <button className="bg-white/10 hover:bg-cyan-500 hover:text-black p-2 rounded-xl transition-all cursor-pointer">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
