import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import contactBanner from '../assets/images/contact_us_banner_1782034915730.jpg';

export function ContactView() {
  const headingTitle = useSEO({
    title: 'Contact Us | SunriseCropFarm',
    description: 'Get in touch with SunriseCropFarm. We would love to hear from you regarding our products, farming practices, or partnerships.',
    h1: 'Contact Us'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="container mx-auto px-4 md:px-6 py-12 max-w-6xl"
    >
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{headingTitle}</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We would love to hear from you. Whether you have questions about our products, farming practices, or partnerships, feel free to contact us.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden mb-16 bg-white shadow-sm border border-gray-100 p-2 md:p-4">
         <img src={contactBanner} alt="Contact SunriseCrop Farm" className="w-full max-h-[500px] object-contain rounded-2xl mx-auto bg-gray-50" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 hover:-translate-y-0.5 transition-transform">
                <div className="bg-white p-3 rounded-xl shadow-sm text-green-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700 leading-relaxed">SunriseCropFarm<br/>125 Green Valley Road,<br/>Harvest County, Farming Region</p>
                </div>
              </div>
              <div className="flex items-start gap-4 hover:-translate-y-0.5 transition-transform">
                <div className="bg-white p-3 rounded-xl shadow-sm text-green-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4 hover:-translate-y-0.5 transition-transform">
                <div className="bg-white p-3 rounded-xl shadow-sm text-green-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@sunrisecropfarm.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 hover:-translate-y-0.5 transition-transform">
                <div className="bg-white p-3 rounded-xl shadow-sm text-green-600 shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                  <p className="text-gray-700">www.sunrisecropfarm.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-green-400" />
              Business Hours
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="font-semibold text-green-400 text-right">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="font-semibold text-green-400 text-right">9:00 AM – 4:00 PM</span>
              </li>
              <li className="flex items-center justify-between pt-4 mt-2 border-t border-gray-800">
                <span className="text-gray-300">Sunday</span>
                <span className="font-semibold text-red-400 text-right">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Get in Touch</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input type="text" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-colors mt-6 shadow-md shadow-gray-900/20 active:scale-[0.98]">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
