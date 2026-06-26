import { motion } from 'motion/react';
import { Target, Heart, Sprout, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import aboutImage from '../assets/images/about_us_farmers_1782034597291.jpg';

export function AboutView() {
  const headingTitle = useSEO({
    title: 'About Us | SunriseCropFarm',
    description: 'Learn about SunriseCropFarm, our story, values, vision, and dedication to sustainable agricultural farming practices.',
    h1: 'About SunriseCropFarm'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="container mx-auto px-4 md:px-6 py-12 max-w-5xl"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{headingTitle}</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          SunriseCropFarm is dedicated to producing fresh, high-quality agricultural products through sustainable farming methods. Our focus on soil health, environmental responsibility, and customer satisfaction has helped us become a trusted name in modern agriculture.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            What started as a small family farm has grown into a trusted agricultural business dedicated to producing healthy crops while protecting the environment. 
          </p>
          <p className="text-gray-800 leading-relaxed text-lg font-bold">
            We believe that good farming creates healthy communities.
          </p>
        </div>
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 p-2 md:p-4">
          <img src={aboutImage} alt="Farm fields" className="w-full max-h-[500px] object-contain rounded-xl mx-auto bg-gray-50" />
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: Sprout, title: 'Sustainability', desc: 'We use eco-friendly farming methods to preserve soil health and natural resources.' },
            { icon: Heart, title: 'Quality', desc: 'Every product is carefully cultivated, harvested, and inspected.' },
            { icon: Target, title: 'Integrity', desc: 'We maintain transparency and honesty in all our farming operations.' },
            { icon: Users, title: 'Community', desc: 'We support local farmers and contribute to rural development.' }
          ].map((value, i) => (
            <div key={i} className="flex gap-5 p-6 bg-green-50 border border-green-100 rounded-2xl">
              <div className="bg-white p-3 rounded-xl h-fit text-green-700 shadow-sm shrink-0">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-gray-900 text-white p-12 md:p-16 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Our Vision</h2>
          <p className="text-xl md:text-2xl text-gray-100 italic max-w-3xl mx-auto leading-relaxed">
            "To become a leading provider of sustainable agricultural products while promoting responsible farming practices worldwide."
          </p>
        </div>
      </div>
    </motion.div>
  );
}
