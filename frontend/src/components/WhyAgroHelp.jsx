import { motion } from 'framer-motion';
import { Users, Target, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const featureIcons = [Users, Target, Globe];

export default function WhyAgroHelp() {
  const { language } = useLanguage();
  const tx = t[language].whyAgroHelp;

  return (
    <section id="platform" className="py-28 bg-cream">
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
          <p className="section-subtitle max-w-xl mx-auto">{tx.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left stacked images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-4xl overflow-hidden h-56 shadow-card">
              <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=440&h=360&fit=crop&q=80" alt="Farming Practice" className="w-full h-full object-cover hover-scale" />
            </div>
            <div className="rounded-4xl overflow-hidden h-44 shadow-card">
              <img src="https://images.unsplash.com/photo-1592991538534-00972b585a85?w=440&h=280&fit=crop&q=80" alt="Agricultural Training" className="w-full h-full object-cover hover-scale" />
            </div>
          </motion.div>

          {/* Centre feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="space-y-4"
          >
            {tx.features.map((feat, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                  className="flex gap-5 p-5 bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-orange-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-green text-sm mb-2">{feat.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right large image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden h-[420px] shadow-xl">
              <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=520&h=620&fit=crop&q=80" alt="Agricultural Excellence" className="w-full h-full object-cover hover-scale" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/30 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.55 }}
              className="absolute bottom-6 left-6 right-6 bg-white/92 backdrop-blur-sm rounded-2xl p-4 shadow-card"
            >
              <p className="font-bold text-deep-green text-sm">{tx.badgeTitle}</p>
              <p className="text-xs text-gray-500 mt-0.5">{tx.badgeText}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
