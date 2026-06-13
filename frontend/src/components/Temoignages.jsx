import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

const vp = { once: true, amount: 0.06 };

export default function Temoignages() {
  const { language } = useLanguage();
  const tx = translations[language].temoignages;

  return (
    <section id="temoignages" className="py-16 md:py-24 bg-cream">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{tx.label}</span>
          <h2 className="section-title">{tx.title}</h2>
          <p className="section-subtitle">{tx.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center text-center gap-5"
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-black shrink-0"
                style={{ backgroundColor: '#1B433215', color: '#1B4332' }}
              >
                "
              </div>

              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {item.texte}
              </p>

              <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100 w-full">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? '#1B4332' : '#E07B39' }}
                >
                  {item.auteur.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-deep-green text-sm">{item.auteur}</p>
                  <p className="text-orange-accent text-xs font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
