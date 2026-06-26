/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProductsView } from './views/ProductsView';
import { PracticesView } from './views/PracticesView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-gray-900 selection:bg-green-200">
      <Header />
      
      <main className="flex-1 overflow-x-hidden pt-4">
        <AnimatePresence mode="wait">
          {/* @ts-expect-error AnimatePresence requires a key to trigger unmount animations on route change */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/practices" element={<PracticesView />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
