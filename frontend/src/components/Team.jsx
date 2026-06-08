import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import imgEric from '../assets/Landry.jpg';
import imgIbrahim from '../assets/Ibrahim.png';
import imgStephane from '../assets/stephane.jpg';
import imgSuzy from '../assets/suzy.jpg';

const memberImages = [imgEric, imgIbrahim, imgStephane, imgSuzy];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Team() {
  const { language } = useLanguage();
  const tx = t[language].team;

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
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
          <p className="section-subtitle max-w-3xl mx-auto">{tx.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {tx.members.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-cream rounded-4xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={memberImages[i]}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 to-transparent" />
              </div>
              <div className="p-8 flex flex-col gap-3 flex-1 items-center text-center">
                <div>
                  <h3 className="text-lg font-bold text-deep-green">{member.name}</h3>
                  <p className="text-orange-accent font-semibold text-sm mt-0.5">{member.role}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
