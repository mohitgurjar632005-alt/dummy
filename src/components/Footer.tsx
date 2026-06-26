import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight, Sprout, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/sunrisecrop_farm_logo_1782034167817.jpg';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-green-50 pt-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <Sprout className="h-6 w-6 text-green-400" />
              Join Our Newsletter
            </h3>
            <p className="text-green-200">Subscribe for farming tips, seasonal updates, and exclusive offers.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 max-w-md flex-1 relative z-10">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3.5 rounded-full bg-white/5 border border-green-700 text-white placeholder:text-green-400/70 focus:outline-none focus:ring-2 focus:ring-green-400 w-full backdrop-blur-sm"
            />
            <button className="px-8 py-3.5 bg-green-500 hover:bg-green-400 text-green-950 font-bold rounded-full transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. About Us & 5. Follow Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 text-white bg-green-950/50 p-2 pr-5 rounded-full border border-green-800/50">
              <img src={logo} alt="SunriseCrop Farm Logo" className="h-12 w-12 object-contain rounded-md shadow-lg bg-white/10" />
              <span className="font-sans font-bold text-xl tracking-tight">SunriseCrop</span>
            </div>
            <p className="text-green-200/90 leading-relaxed mb-8">
              Cultivating the finest organic produce with sustainable farming practices. We bring nature's best from our fields directly to your table, harvesting trust every day.
            </p>
            <div className="w-full">
              <h4 className="text-sm font-semibold text-green-400 mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" aria-label="Facebook" className="p-2.5 bg-green-800/50 rounded-full hover:bg-green-500 hover:text-green-950 transition-all text-green-300 hover:scale-110"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="p-2.5 bg-green-800/50 rounded-full hover:bg-green-500 hover:text-green-950 transition-all text-green-300 hover:scale-110"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 bg-green-800/50 rounded-full hover:bg-green-500 hover:text-green-950 transition-all text-green-300 hover:scale-110"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="p-2.5 bg-green-800/50 rounded-full hover:bg-green-500 hover:text-green-950 transition-all text-green-300 hover:scale-110"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-center md:items-start lg:ml-8">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 w-8 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3.5 text-center md:text-left w-full">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Practices', path: '/practices' },
                { name: 'Our Products', path: '/products' },
                { name: 'Blog & News', path: '/blog' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-green-200/90 hover:text-green-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2 group inline-flex">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-green-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Products/Crops */}
          <div className="flex flex-col items-center md:items-start lg:ml-4">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 w-8 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3.5 text-center md:text-left w-full">
              {['Fresh Vegetables', 'Organic Fruits', 'Premium Grains', 'Dairy & Eggs', 'Farm Bundles'].map((product) => (
                <li key={product}>
                  <Link to="/products" className="text-green-200/90 hover:text-green-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2 group inline-flex">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-green-500" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 w-8 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-5 text-center md:text-left">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="p-2 bg-green-800/40 rounded-full shrink-0"><MapPin className="h-5 w-5 text-green-400" /></div>
                <span className="text-green-200/90 mt-1">125 Green Valley Road,<br />Harvest County, FR 98765</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="p-2 bg-green-800/40 rounded-full shrink-0"><Phone className="h-5 w-5 text-green-400" /></div>
                <span className="text-green-200/90 mt-1">+1 (555) 123-4567</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-green-800/40 rounded-full shrink-0 group-hover:bg-green-500 transition-colors"><Mail className="h-5 w-5 text-green-400 group-hover:text-green-950 transition-colors" /></div>
                <a href="mailto:info@sunrisecropfarm.com" className="text-green-200/90 group-hover:text-white transition-colors mt-1">info@sunrisecropfarm.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 7. Copyright & Privacy Policy */}
      <div className="bg-[#0b2110] border-t border-green-900/50">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-400/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} SunriseCrop Farm. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-green-400/60">
            <a href="#" className="hover:text-green-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
