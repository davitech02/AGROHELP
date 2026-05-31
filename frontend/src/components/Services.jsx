import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const servicesMeta = [
  { image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=520&h=380&fit=crop&q=80', tagColor: 'bg-deep-green'    },
  { image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=520&h=380&fit=crop&q=80', tagColor: 'bg-forest-green'  },
  { image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=520&h=380&fit=crop&q=80', tagColor: 'bg-orange-accent' },
  { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=520&h=380&fit=crop&q=80', tagColor: 'bg-deep-green'    },
  { image: 'https://images.unsplash.com/photo-1592991538534-00972b585a85?w=520&h=380&fit=crop&q=80', tagColor: 'bg-forest-green'  },
  { image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=520&h=380&fit=crop&q=80', tagColor: 'bg-orange-accent' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const { language } = useLanguage();
  const tx = t[language].servicesHome;

  return (
    <section id="services" className="py-28 bg-white">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{tx.label}</span>
          <h2 className="section-title">{tx.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{tx.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {tx.items.map((svc, i) => (
            <motion.div key={i} variants={itemVariants} className="group card-base cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img src={servicesMeta[i].image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className={`absolute top-4 left-4 ${servicesMeta[i].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {svc.tag}
                </span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-deep-green mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                <div className="flex items-center justify-center text-orange-accent font-semibold text-sm group/link">
                  {tx.learnMore}
                  <ArrowRight size={15} className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
