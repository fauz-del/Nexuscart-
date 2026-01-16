import { useNavigate } from "react-router-dom"; // Import hook
import headphones3 from "../../assets/headphones/headphones3.jpg";
import vrgoogles1 from "../../assets/vrgoogle/vrgoogles1.jpeg";
import smartwatch1 from "../../assets/watch/smartwatch1.jpeg";

export default function Collection() {
  const navigate = useNavigate(); // Initialize navigation

  const categories = [
    { 
      name: "VR GEAR", 
      dbName: "VR", // Maps to your database category string
      img: vrgoogles1, 
      size: "md:col-span-2 md:row-span-2", 
      tag: "Immersive" 
    },
    { 
      name: "SMART WATCH", 
      dbName: "Wearable", 
      img: smartwatch1, 
      size: "md:col-span-1 md:row-span-1", 
      tag: "Wearable" 
    },
    { 
      name: "AUDIO", 
      dbName: "Audio", 
      img: headphones3, 
      size: "md:col-span-1 md:row-span-2", 
      tag: "Hi-Fi" 
    },
    { 
      name: "GAMING", 
      dbName: "VR", // Placeholder for gaming
      img: vrgoogles1, 
      size: "md:col-span-1 md:row-span-1", 
      tag: "Pro" 
    },
  ];

  // Logic: Navigate to shop with pre-selected category
  const handleCategoryNavigate = (catName: string) => {
    navigate('/shop', { state: { selectedCategory: catName } });
  };

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-5xl font-black text-white tracking-tighter">
              CURATED <span className="text-cyan-500">COLLECTIONS</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium text-lg">Handpicked future-tech essentials.</p>
          </div>
          {/* Browse All -> Navigates to Shop with "All" */}
          <button 
            onClick={() => navigate('/shop')}
            className="text-white bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            Browse All Categories
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              // Click handler added here
              onClick={() => handleCategoryNavigate(cat.dbName)}
              className={`relative group overflow-hidden rounded-[2rem] border border-white/5 cursor-pointer ${cat.size}`}
            >
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={cat.name} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute top-6 right-6">
                <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                  {cat.name}
                </h3>
                
                <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">
                    Explore Series
                  </span>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-[2rem] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
