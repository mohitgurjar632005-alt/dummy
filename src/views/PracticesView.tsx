import { motion } from 'motion/react';
import { Leaf, Droplets, Sun, Wind, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useNavigate } from 'react-router-dom';
import practicesBanner from '../assets/images/farming_practices_banner_1782292050866.jpg';

export function PracticesView() {
  const navigate = useNavigate();
  const headingTitle = useSEO({
    title: 'Sustainable & Organic Farming Practices | SunriseCrop Farm',
    description: 'Learn about our sustainable and organic farming practices. Discover how we focus on soil health, natural fertilizers, and eco-friendly agriculture.',
    h1: 'Our Farming Practices'
  });

  const practices = [
    {
      title: 'Organic Soil Health Management',
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      desc: 'Healthy soil is the foundation of organic farming. We utilize crop rotation, cover crops, and reduced tillage to maintain a robust soil microbiome, preventing erosion and retaining vital nutrients.',
      benefits: ['Increased nutrient density', 'Better water retention', 'Carbon sequestration']
    },
    {
      title: 'Natural Fertilizers & Composting',
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      desc: 'We strictly avoid synthetic chemicals. Instead, we use nutrient-rich compost, manure, and green manure to enrich our soil, promoting long-term fertility and healthier crop yields.',
      benefits: ['Zero chemical runoff', 'Sustained nutrient release', 'Enhanced soil structure']
    },
    {
      title: 'Eco-Friendly Pest Control',
      icon: <Wind className="w-8 h-8 text-teal-500" />,
      desc: 'Our integrated pest management (IPM) system relies on natural predators, companion planting, and physical barriers rather than harmful pesticides, ensuring our produce is 100% safe.',
      benefits: ['Protects beneficial insects', 'No chemical residue on food', 'Supports biodiversity']
    },
    {
      title: 'Sustainable Water Conservation',
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      desc: 'Water is a precious resource. We use efficient drip irrigation systems and rainwater harvesting techniques to minimize water waste and ensure every drop counts.',
      benefits: ['Reduced water footprint', 'Prevents soil erosion', 'Drought resilience']
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {headingTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At SunriseCrop Farm, organic farming isn't just a label; it's our philosophy. We are committed to sustainable agriculture that nurtures the earth and produces the highest quality food.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white p-2">
            <img 
              src={practicesBanner} 
              alt="Farmer checking soil health in a lush green organic farm field" 
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections with H2 and H3 Hierarchy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Pillars of Sustainable Agriculture
            </h2>
            <p className="text-lg text-gray-600">
              Discover the core techniques we use to maintain a thriving, eco-friendly farm while delivering exceptional produce to your table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {practices.map((practice, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {practice.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{practice.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {practice.desc}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  {practice.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-900 text-white py-16 md:py-20 mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste the Organic Difference</h2>
          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
            Experience the superior flavor and nutritional benefits of produce grown with genuine care for the environment. Support sustainable farming today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/products')}
              className="bg-green-500 hover:bg-green-400 text-green-950 font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
            >
              Shop Organic Produce <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-green-500 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition-colors w-full sm:w-auto justify-center"
            >
              Contact Our Farmers
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
