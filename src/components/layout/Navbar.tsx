import { ShoppingCart, Search, User, Menu, Sun, Moon } from 'lucide-react';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom"; 
import { ThemeContext } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext'; // Import useCart hook

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { cart } = useCart(); // Access global cart state
  const navigate = useNavigate();

  // Calculate total items in the cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-4 flex items-center justify-between border-b transition-all duration-500
      bg-white/70 border-slate-200 text-slate-900 
      dark:bg-slate-900/60 dark:border-white/10 dark:text-white backdrop-blur-xl">
      
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick} 
          className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors p-1"
        >
          <Menu size={24} />
        </button>
        <h1 
          onClick={() => navigate('/')}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent italic select-none cursor-pointer"
        >
          NEXUSCART
        </h1>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={toggleDarkMode}
          className="p-2.5 rounded-full transition-all duration-300 cursor-pointer group
            bg-slate-100 hover:bg-slate-200 text-slate-600
            dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun size={20} className="group-hover:text-yellow-400 group-hover:rotate-45 transition-all" />
          ) : (
            <Moon size={20} className="group-hover:text-blue-500 group-hover:-rotate-12 transition-all" />
          )}
        </button>
        
        <Search 
          onClick={() => navigate('/shop')} 
          size={22} 
          className="hidden md:block hover:text-cyan-500 cursor-pointer transition-colors" 
        />

        <div 
          onClick={() => navigate('/login')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border transition-all cursor-pointer
          bg-slate-50 border-slate-200 hover:bg-slate-100
          dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 group"
        >
          <User size={18} className="group-hover:text-cyan-500 transition-colors" />
          <span className="text-sm font-medium group-hover:text-cyan-500 transition-colors">Login</span>
        </div>

        {/* CART ICON: Added navigate to /cart */}
        <div 
          onClick={() => navigate('/cart')}
          className="relative p-2 rounded-full transition-all cursor-pointer group hover:bg-cyan-500/10"
        >
          <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-cyan-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-lg shadow-cyan-500/20">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
