import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';

import warehouseImg from '@assets/photo-1553413077-190dd305871c.jpg';
import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

const features = [
  {
    icon: Warehouse,
    title: 'Advanced Warehousing',
    description: 'Climate-controlled facilities with automated inventory systems and 24/7 security.',
    image: warehouseImg,
  },
  {
    icon: Truck,
    title: 'Fast Transportation',
    description: 'Multi-modal logistics network ensuring rapid delivery across all destinations.',
    image: truckImg,
  },
  {
    icon: Package,
    title: 'Quality Manufacturing',
    description: 'ISO-certified production with precision engineering and quality control.',
    image: packageImg,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Complete supply chain visibility with advanced tracking and reporting.',
    image: barChart3Img,
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Industry-leading security protocols protecting your valuable assets.',
    image: shieldImg,
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock to ensure seamless operations.',
    image: headphonesImg,
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
            {/* Image */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-200 opacity-90 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
