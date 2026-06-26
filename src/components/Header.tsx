import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/sunrisecrop_farm_logo_1782034167817.jpg';

const TABS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Practices', path: '/practices' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-900 cursor-pointer">
          <img src={logo} alt="SunriseCrop Farm Logo" className="h-12 w-12 object-contain rounded-md shadow-sm border border-gray-100" />
          <span className="font-sans font-bold text-xl tracking-tight">SunriseCropFarm</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {TABS.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-gray-900 ${
                  isActive ? 'text-green-600' : 'text-gray-600'
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-600 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-green-100 bg-white">
          <div className="flex flex-col py-2 px-4 space-y-3">
            {TABS.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-left text-sm font-medium transition-colors py-2 ${
                    isActive ? 'text-green-600' : 'text-gray-600'
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
