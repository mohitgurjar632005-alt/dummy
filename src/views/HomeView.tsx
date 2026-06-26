import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Truck, Users, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import heroBg from '../assets/images/home_hero_banner_1782034414846.jpg';
import missionImg from '../assets/images/premium_farm_lifestyle_1782035018788.jpg';

export function HomeView() {
  const navigate = useNavigate();
  const headingTitle = useSEO({
    title: 'Home | SunriseCropFarm',
    description: 'Fresh from our fields to your family. Experience sustainable farming and high-quality organic produce with SunriseCropFarm.',
    h1: 'Welcome to SunriseCropFarm'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-16 pb-16"
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white pb-16 pt-12 md:pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold text-sm mb-6 shadow-sm border border-green-200"
              >
                <Leaf className="w-4 h-4" /> <span>Sustainable & Organic</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-gray-900 mb-6 tracking-tight leading-tight"
              >
                {headingTitle}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-green-700 font-medium mb-6"
              >
                Fresh From Our Fields to Your Family
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed font-medium max-w-xl"
              >
                At SunriseCropFarm, we are passionate about growing healthy, sustainable, and high-quality farming products. Our farm combines traditional agricultural values with modern farming techniques to provide fresh produce and natural products that support healthy living.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button 
                  onClick={() => navigate('/products')}
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30 w-full sm:w-auto"
                >
                  Explore Our Products <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-3 shadow-xl border border-gray-100/50 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 max-w-xl mx-auto"
              >
                <img src={heroBg} alt="SunriseCrop Farm Hero" className="w-full h-auto max-h-[650px] object-contain rounded-3xl bg-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Leaf, title: '100% Fresh Farm Products' },
            { icon: ShieldCheck, title: 'Sustainable Farming Practices' },
            { icon: CheckCircle2, title: 'Quality Tested Produce' },
            { icon: Truck, title: 'Direct From Farm to Customer' },
            { icon: Users, title: 'Trusted by Local Communities' },
          ].map((feature, i) => (
            <div key={i} className="w-[200px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-green-100 p-4 rounded-full mb-4 text-green-700">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-10">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center items-center shrink-0">
             <img src={missionImg} alt="Premium organic farming lifestyle" className="w-full max-h-[500px] rounded-2xl object-contain object-center shadow-md bg-white/5" loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-14 relative flex items-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-900 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-900 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative z-10 text-center md:text-left text-white">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Our Mission</h2>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed italic">
                "Our goal is to provide fresh, nutritious farm products through sustainable farming methods that protect natural resources and strengthen local farming communities."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Featured Products</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Organic Wheat', 'Fresh Corn', 'Natural Rice', 'Seasonal Vegetables', 'Farm-Fresh Fruits'].map((product, i) => (
              <span key={i} className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium shadow-sm border border-gray-200 flex items-center gap-2 hover:border-green-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                {product}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
             <button 
                onClick={() => navigate('/products')}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors shadow-sm"
              >
                View All Products <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl py-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Commitment to Organic Farming</h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
              Our dedication to <strong className="text-green-700">Organic Farming</strong> ensures that every crop we grow is free from synthetic chemicals. We focus heavily on maintaining excellent <strong className="text-green-700">Soil Health</strong> and using only natural <strong className="text-green-700">Fertilizers</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Leaf className="text-green-600" /> Soil Health</h3>
                <p className="text-gray-600 mb-4">
                  Healthy soil means healthy plants. We use cover crops and crop rotation to naturally enrich the soil biome. Our approach prevents erosion and builds a sustainable foundation for future harvests.
                </p>
                <button 
                  onClick={() => navigate('/practices')}
                  className="text-green-700 font-semibold hover:text-green-800 flex items-center gap-1 group"
                >
                  Learn about our practices <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Droplets className="text-blue-500" /> Natural Fertilizers</h3>
                <p className="text-gray-600 mb-4">
                  By strictly avoiding synthetic options, we protect our local water sources and enhance the nutritional profile of our produce. We rely on high-quality compost and organic matter.
                </p>
                 <button 
                  onClick={() => navigate('/practices')}
                  className="text-green-700 font-semibold hover:text-green-800 flex items-center gap-1 group"
                >
                  Explore eco-friendly agriculture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
