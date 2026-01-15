import { useState } from 'react';
import { Reveal } from './components/layout/Reveal'; // Import the wrapper
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/home/Hero';
import Collection from './components/home/Collection';
import FeaturedCollection from './components/home/FeaturedCollection';
import Banner from './components/home/Banner';
import Heromaster from './components/home/Heromaster';
import Popular from './components/home/Popular';
import DealOfTheDay from './components/home/DealOfTheDay';
import TrustPillar from './components/home/TrustPillar';
import Footer from './components/home/Footer';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-cyan-500 selection:text-black">
      
      <Navbar onMenuClick={() => setSidebarOpen(true)} cartCount={2} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="relative">
        {/* The first Hero usually fades in immediately without scroll trigger */}
        <Reveal>
          <Hero />
        </Reveal>
  
        <div className="space-y-12 md:space-y-24">
          <Reveal><Collection /></Reveal>
          <Reveal><FeaturedCollection /></Reveal>
          <Reveal><Banner /></Reveal>
          <Reveal><Heromaster /></Reveal>
          <Reveal><Popular /></Reveal>
          <Reveal><DealOfTheDay /></Reveal>
          <Reveal><TrustPillar /></Reveal>
          <Reveal><Footer /></Reveal>
        </div>
      </main>
    </div>
  );
}
