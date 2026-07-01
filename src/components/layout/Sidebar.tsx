import { useNavigate } from 'react-router-dom';
import { X, Cpu, Smartphone, Headphones, Glasses, Laptop, Watch, Tablet, Gamepad2 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: 'All', icon: Cpu, label: 'All Products' },
  { name: 'Mobile', icon: Smartphone, label: 'Mobile' },
  { name: 'Audio', icon: Headphones, label: 'Audio' },
  { name: 'Laptop', icon: Laptop, label: 'Laptops' },
  { name: 'Wearable', icon: Watch, label: 'Wearables' },
  { name: 'Tablet', icon: Tablet, label: 'Tablets' },
  { name: 'VR', icon: Gamepad2, label: 'VR / Glasses' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate('/shop', { state: { selectedCategory: categoryName } });
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <aside className={`fixed left-0 top-0 h-full w-72 z-50 border-r transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        bg-white border-gray-200 text-slate-900
        dark:bg-neutral-950 dark:border-white/10 dark:text-white`}>

        <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-white/10">
          <h2 className="font-bold text-xl tracking-tighter text-cyan-600 dark:text-cyan-500 uppercase">Nexus Categories</h2>
          <button onClick={onClose} className="p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-white/5">
            <X size={20}/>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all group hover:bg-cyan-50 hover:text-cyan-600 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
            >
              <cat.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm uppercase tracking-wide">{cat.label}</span>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 dark:border-white/10">
          <p className="text-[10px] font-mono text-slate-400 dark:text-neutral-600 uppercase tracking-widest text-center">
            Nexus Cart // v2.6
          </p>
        </div>
      </aside>
    </>
  );
}
