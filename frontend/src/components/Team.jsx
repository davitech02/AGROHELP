import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const teamMeta = [
  { id: 1, name: 'Dr. Emmanuel Okafor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=80' },
  { id: 2, name: 'Amara Mensah',        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&q=80' },
  { id: 3, name: 'Ahmed Hassan',        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&q=80' },
  { id: 4, name: 'Priya Patel',         image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&q=80' },
  { id: 5, name: 'Kwame Boateng',       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&q=80' },
  { id: 6, name: 'Zara Okonkwo',        image: 'https://images.unsplash.com/photo-1534528741775-53994a69be16?w=500&h=600&fit=crop&q=80' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Team() {
  const { language } = useLanguage();
  const tx = t[language].team;

  return (
    <section id="team" className="py-28 bg-cream">
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
          {teamMeta.map((member, i) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative bg-white rounded-4xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/40 transition-all duration-400 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <a href="#" className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-orange-accent hover:text-white transition-colors duration-200">
                    <ExternalLink size={18} className="text-deep-green group-hover:text-white transition-colors" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-orange-accent hover:text-white transition-colors duration-200">
                    <Mail size={18} className="text-deep-green group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-deep-green mb-1.5">{member.name}</h3>
                <p className="text-orange-accent font-semibold text-sm">{tx.roles[i]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
