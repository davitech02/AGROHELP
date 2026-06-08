import { motion } from 'framer-motion';
import { Target, Eye, Dna } from 'lucide-react';

const vp = { once: true, amount: 0.1 };

const cards = [
  {
    icon: Target,
    label: 'Notre Mission',
    text: "AgroHelp Group a pour mission d'accompagner les acteurs de l'agriculture dans la conception, la structuration et le développement de projets agricoles performants, viables et à fort impact. Nous intervenons pour sécuriser les décisions stratégiques, réduire les risques, faciliter l'accès au financement et accélérer la mise en œuvre des projets.",
    accent: '#1B4332',
  },
  {
    icon: Eye,
    label: 'Notre Vision',
    text: "Nous ambitionnons de contribuer à une agriculture africaine moderne, compétitive et résiliente, capable de créer de la valeur durable tout en répondant aux enjeux alimentaires, économiques et climatiques.",
    accent: '#2D6A4F',
  },
  {
    icon: Dna,
    label: 'Notre ADN',
    text: "AgroHelp Group repose sur une approche hybride qui combine expertise terrain, vision stratégique et innovation. Nous comprenons les réalités agricoles concrètes tout en structurant des projets solides et bancables. Notre démarche est orientée performance, impact durable et intégration des solutions innovantes pour répondre aux défis du secteur agricole.",
    accent: '#E07B39',
  },
];

export default function MissionVisionADN() {
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
          <span className="section-label">Qui Nous Sommes</span>
          <h2 className="section-title">Notre Raison d'Être</h2>
        </motion.div>

        {/* Mission / Vision / ADN cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {cards.map((card, i) => {
            const Icon = card.icon;
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
                  style={{ backgroundColor: `${card.accent}18` }}
                >
                  <Icon size={24} style={{ color: card.accent }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1B4332' }}>{card.label}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Positionnement global */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="rounded-4xl p-10 md:p-14 text-center"
          style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-accent mb-4">Positionnement global</span>
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
            AgroHelp Group est un cabinet de conseil stratégique dédié à la transformation de l'agriculture africaine. Nous faisons le lien entre la stratégie et le terrain pour accompagner des projets agricoles performants, durables et générateurs de valeur à chaque étape de leur développement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
