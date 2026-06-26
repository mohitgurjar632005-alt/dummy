import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import blogBanner from '../assets/images/blog_banner_1782034818828.jpg';

export function BlogView() {
  const headingTitle = useSEO({
    title: 'Blog | SunriseCropFarm',
    description: 'Read the latest insights and articles on sustainable farming, health, and modern agriculture from SunriseCropFarm.',
    h1: 'Latest Farming Insights'
  });

  const posts = [
    { title: 'Benefits of Sustainable Farming', date: 'March 15, 2026', desc: 'Sustainable farming helps protect natural resources, improves soil quality, and ensures long-term agricultural productivity. Learn how eco-friendly practices benefit both farmers and consumers.' },
    { title: 'How Fresh Produce Improves Health', date: 'April 10, 2026', desc: 'Fresh fruits and vegetables provide essential vitamins, minerals, and antioxidants that support overall health and wellness.' },
    { title: 'Modern Techniques in Agriculture', date: 'May 5, 2026', desc: 'Technology is transforming agriculture through smart irrigation, precision farming, and efficient crop management systems.' },
    { title: 'Importance of Soil Health', date: 'May 28, 2026', desc: 'Healthy soil is the foundation of productive farming. Discover practices that maintain and improve soil fertility.' },
    { title: 'Choosing Quality Farm Products', date: 'June 12, 2026', desc: 'Learn how to identify fresh, high-quality agricultural products and make better purchasing decisions.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="container mx-auto px-4 md:px-6 py-12 max-w-4xl"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{headingTitle}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with our newest articles on farming, health, and agriculture.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden mb-16 bg-white shadow-sm border border-gray-100 p-2 md:p-4">
         <img src={blogBanner} alt="Modern agriculture technology" className="w-full max-h-[500px] object-contain rounded-2xl mx-auto bg-gray-50" />
      </div>

      <div className="space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col md:flex-row gap-6">
            <div className="shrink-0 flex items-center md:items-start md:flex-col gap-2 md:w-32 pt-1 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block">
                {post.date}
              </span>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {i + 1}. {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {post.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
