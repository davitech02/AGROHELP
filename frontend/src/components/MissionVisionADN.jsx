import { motion } from 'framer-motion';
import { Target, Eye, Dna } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

const vp = { once: true, amount: 0.1 };
const icons = [Target, Eye, Dna];
const accents = ['#1B4332', '#2D6A4F', '#E07B39'];

export default function MissionVisionADN() {
  const { language } = useLanguage();
  const tx = translations[language].missionVisionADN;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{tx.sectionLabel}</span>
          <h2 className="section-title">{tx.sectionTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {tx.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-cream rounded-4xl p-8 flex flex-col items-center text-center gap-5"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accents[i]}18` }}
                >
                  <Icon size={24} style={{ color: accents[i] }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1B4332' }}>{card.label}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="rounded-4xl p-10 md:p-14 flex flex-col items-center text-center"
          style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#E07B39' }}>
            {tx.positionLabel}
          </span>
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-center">
            {tx.positionText}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
