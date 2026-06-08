import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import svc1 from '../assets/service1.jpeg';
import svc2 from '../assets/service2.jpeg';
import svc4 from '../assets/service4.jpeg';
import svc5 from '../assets/service5.jpg';
import svc6 from '../assets/service6.jpg';

const servicesMeta = [
  { image: svc1,                                                                                        tagColor: 'bg-deep-green'    },
  { image: svc2,                                                                                        tagColor: 'bg-forest-green'  },
  { image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=520&h=380&fit=crop&q=80', tagColor: 'bg-orange-accent' },
  { image: svc4,                                                                                        tagColor: 'bg-deep-green'    },
  { image: svc5,                                                                                        tagColor: 'bg-forest-green'  },
  { image: svc6,                                                                                        tagColor: 'bg-orange-accent' },
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
    <section id="services" className="py-16 md:py-24 bg-cream">
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
          <p className="section-subtitle">{tx.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {tx.items.map((svc, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link
                to="/services"
                className="group card-base cursor-pointer block hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={servicesMeta[i].image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className={`absolute top-4 left-4 ${servicesMeta[i].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                    {svc.tag}
                  </span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-base font-bold text-deep-green mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                  <div className="flex items-center justify-center text-orange-accent font-semibold text-sm">
                    {tx.learnMore}
                    <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
