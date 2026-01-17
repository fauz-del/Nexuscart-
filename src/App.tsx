import SuccessPage from './pages/shop/SuccessPage';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reveal } from './components/layout/Reveal';
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
import Login from './pages/auth/Login';
import SearchPage from './pages/shop/SearchPage';
import ProductPage from './pages/shop/ProductPage';
import CartPage from './pages/shop/CartPage'; 
import { CartProvider } from './context/CartContext'; 
import AboutUs from './pages/info/AboutUs';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthProvider>
    <CartProvider>
      <Router basename="/Nexuscart-/"> 
        <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-cyan-500 selection:text-black">
          
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

          <Routes>
            {/* LANDING PAGE ROUTE */}
            <Route path="/" element={
              <main className="relative">
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
            } />

            {/* SHOP ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<SearchPage />} />
            <Route path="/shop/product/:id" element={<ProductPage />} /> 
            <Route path="/cart" element={<CartPage />} /> {/* New Cart Route */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop/success" element={<SuccessPage />} /> />

          </Routes>
        </div>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}
