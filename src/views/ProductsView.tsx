import { motion } from 'motion/react';
import { Tag, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import productsBanner from '../assets/images/products_showcase_banner_1782034699493.jpg';

export function ProductsView() {
  const headingTitle = useSEO({
    title: 'Products | SunriseCropFarm',
    description: 'Discover our fresh agricultural products, including organic wheat, golden corn, and naturally-grown fruits and vegetables.',
    h1: 'Our Products'
  });

  const products = [
    { name: 'Organic Wheat', desc: 'Premium quality wheat grown using sustainable farming methods.', price: '₹2000 per bag', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop' },
    { name: 'Golden Corn', desc: 'Fresh and naturally grown corn harvested at peak maturity.', price: '₹1500 per bag', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop' },
    { name: 'Natural Rice', desc: 'High-quality rice cultivated without harmful chemicals.', price: '₹2500 per bag', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop' },
    { name: 'Fresh Tomatoes', desc: 'Juicy and nutritious tomatoes picked fresh from our fields.', price: '₹400 per kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop' },
    { name: 'Seasonal Fruits', desc: 'A variety of farm-fresh fruits available throughout the year.', price: 'Varies by season', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop' },
  ];

  const benefits = [
    'Rich in nutrients',
    'Chemical-free cultivation',
    'Freshly harvested',
    'Environmentally friendly production'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="container mx-auto px-4 md:px-6 py-12 max-w-6xl"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{headingTitle}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our range of fresh, naturally grown agricultural products cultivated with care and sustainability in mind.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden mb-16 bg-white shadow-sm border border-gray-100 p-2 md:p-4">
         <img src={productsBanner} alt="Premium farm products showcase" className="w-full max-h-[500px] object-contain rounded-2xl mx-auto bg-gray-50" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full group">
              <div className="bg-gray-50 rounded-2xl overflow-hidden mb-6 flex justify-center items-center">
                <img src={p.image} referrerPolicy="no-referrer" alt={p.name} className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{p.name}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex items-center gap-2 text-gray-900 font-bold bg-gray-100 w-full justify-center px-4 py-3 rounded-xl">
                <Tag className="w-4 h-4 text-green-600" />
                {p.price}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-900 text-white p-8 rounded-3xl sticky top-24 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              Product Benefits
            </h2>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                  <span className="text-gray-100 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
