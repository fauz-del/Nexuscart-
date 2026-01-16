import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        <div className="border-l-4 border-cyan-500 pl-6 mb-12">
          <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em] mb-2">System_Buffer // v2.6</p>
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
            YOUR_STASH
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-300 dark:border-white/10">
            <ShoppingBag className="mx-auto text-slate-300 dark:text-white/10 mb-4" size={48} />
            <p className="font-mono text-slate-500 mb-8">BUFFER_EMPTY: NO_ITEMS_DETECTED</p>
            <button 
              onClick={() => navigate('/shop')}
              className="bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-cyan-500 transition-all cursor-pointer"
            >
              Return_to_Matrix
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <img src={item.img} className="w-24 h-24 object-contain bg-white dark:bg-black p-2" alt={item.name} />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-black dark:text-white uppercase italic">{item.name}</h3>
                  <p className="text-cyan-500 font-mono text-sm">${item.price}</p>
                </div>

                <div className="flex items-center border border-slate-200 dark:border-white/10">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-3 text-slate-500 hover:text-cyan-500"><Minus size={14}/></button>
                  <span className="w-8 text-center font-mono font-bold dark:text-white">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-3 text-slate-500 hover:text-cyan-500"><Plus size={14}/></button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-red-500 hover:bg-red-500/10 transition-all cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {/* Summary */}
            <div className="mt-12 p-8 bg-slate-900 dark:bg-white text-white dark:text-black">
              <div className="flex justify-between items-end mb-8">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Total_Allocation</p>
                <p className="text-4xl font-black tracking-tighter">${subtotal.toLocaleString()}</p>
              </div>
              <button className="w-full py-5 bg-cyan-500 text-white font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 cursor-pointer">
                Initialize_Checkout <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
