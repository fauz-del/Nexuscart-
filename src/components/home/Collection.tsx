import { useNavigate } from "react-router-dom";

export default function Collection() {
  const navigate = useNavigate();

  /**
   * FIX: This reads '/Nexuscart-/' from your vite.config.mts.
   * This ensures images load on both local dev and GitHub Pages.
   */
  const base = import.meta.env.BASE_URL;

  const categories = [
    { 
      name: "VR GEAR", 
      dbName: "VR", 
      path: "vrgoogle/vrgoogles1.jpg", // Ensure extension matches your tree
      size: "md:col-span-2 md:row-span-2", 
      tag: "Immersive" 
    },
    { 
      name: "SMART WATCH", 
      dbName: "Wearable", 
      path: "watch/smartwatch1.jpg", 
      size: "md:col-span-1 md:row-span-1", 
      tag: "Wearable" 
    },
    { 
      name: "AUDIO", 
      dbName: "Audio", 
      path: "headphones/headphones3.jpg", 
      size: "md:col-span-1 md:row-span-2", 
      tag: "Hi-Fi" 
    },
    { 
      name: "MOBILE", 
      dbName: "Mobile", 
      path: "phones/iphone1.jpg", 
      size: "md:col-span-1 md:row-span-1", 
      tag: "Next-Gen" 
    },
  ];

  const handleCategoryNavigate = (catName: string) => {
    navigate('/shop', { state: { selectedCategory: catName } });
  };

  return (
    <section className="bg-black py-24 px-6 transform-gpu">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
              CURATED <span className="text-cyan-500">COLLECTIONS</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium text-lg">Handpicked future-tech essentials.</p>
          </div>
          <button 
            onClick={() => navigate('/shop')}
            className="text-white bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-xs font-bold uppercase tracking-widest"
          >
            Browse All Categories
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCategoryNavigate(cat.dbName)}
              className={`relative group overflow-hidden rounded-[2rem] border border-white/5 cursor-pointer transform-gpu will-change-transform ${cat.size}`}
            >
              <img 
                /* 
                   FIX: Combines the base path + assets folder + specific image path.
                   Example result: /Nexuscart-/assets/phones/iphone1.jpeg
                */
                src={`${base}assets/${cat.path}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={cat.name} 
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute top-6 right-6">
                <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 uppercase italic leading-none">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
