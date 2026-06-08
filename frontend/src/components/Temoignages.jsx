import { motion } from 'framer-motion';

const vp = { once: true, amount: 0.06 };

const temoignages = [
  {
    texte: "Quand j'ai lancé mon projet agricole, je ne savais pas vraiment par où commencer. L'équipe d'AgrOhelp m'a accompagné à chaque étape, de l'idée jusqu'à la mise en œuvre. Aujourd'hui, mon exploitation est opérationnelle et rentable.",
    auteur: 'Jean-Marc',
    role: 'Agriculteur',
  },
  {
    texte: "Les conseils d'AgrOhelp nous ont permis d'améliorer nos méthodes de production et d'obtenir de meilleurs résultats. Leur équipe est à l'écoute, disponible et connaît parfaitement les réalités du terrain.",
    auteur: 'Marie',
    role: 'Productrice maraîchère',
  },
  {
    texte: "J'ai particulièrement apprécié le professionnalisme et la réactivité d'AgrOhelp. Grâce à leur accompagnement, nous avons pu sécuriser notre investissement et développer notre activité avec plus de sérénité.",
    auteur: 'Aminata',
    role: 'Entrepreneure agricole',
  },
  {
    texte: "Travailler avec AgrOhelp a été une excellente expérience. On sent une vraie volonté d'aider les agriculteurs à réussir. Leur expertise et leur suivi nous ont permis de franchir un cap important dans le développement de notre exploitation.",
    auteur: 'Jacques',
    role: 'Président de coopérative',
  },
  {
    texte: "Avec AgrOhelp, nous n'avons pas eu l'impression de travailler avec un simple cabinet de conseil, mais avec un véritable partenaire. Leur accompagnement nous a donné confiance et nous a aidés à atteindre nos objectifs plus rapidement.",
    auteur: 'Sophie',
    role: 'Porteuse de projet agricole',
  },
  {
    texte: "En tant que Camerounais de la diaspora, je souhaitais investir dans le secteur agricole sans connaître les démarches nécessaires. AgroHelp m'a accompagné dans la mise en relation avec des producteurs locaux et dans le suivi de mon investissement. Aujourd'hui, je participe activement à la création d'emplois dans ma région d'origine.",
    auteur: 'Entrepreneur de la diaspora',
    role: 'Camerounais — Diaspora',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Temoignages() {
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
          <span className="section-label">Témoignages</span>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">Ils nous ont fait confiance pour structurer et développer leurs projets agricoles.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {temoignages.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center text-center gap-5"
            >
              {/* Quote mark */}
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-black shrink-0"
                style={{ backgroundColor: '#1B433215', color: '#1B4332' }}
              >
                "
              </div>

              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {t.texte}
              </p>

              <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100 w-full">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? '#1B4332' : '#E07B39' }}
                >
                  {t.auteur.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-deep-green text-sm">{t.auteur}</p>
                  <p className="text-orange-accent text-xs font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
