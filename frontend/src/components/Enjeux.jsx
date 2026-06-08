import { motion } from 'framer-motion';

const vp = { once: true, amount: 0.08 };

const paragraphs = [
  "Le secteur agricole en Afrique occupe une place centrale dans les dynamiques de développement économique, en contribuant significativement à l'emploi, au PIB et à la sécurité alimentaire. Toutefois, malgré ce potentiel structurel important, de nombreuses analyses mettent en évidence un déficit persistant de structuration des projets agricoles, limitant leur viabilité économique, leur bancabilité et leur capacité à générer une valeur ajoutée locale durable.",
  "Dans ce contexte, les porteurs de projets agricoles — entrepreneurs, coopératives, investisseurs locaux et membres de la diaspora — font face à des contraintes majeures. Celles-ci incluent notamment l'insuffisance d'études de faisabilité robustes, la fragilité des modèles économiques, ainsi que des difficultés d'accès aux financements et aux marchés. Pour la diaspora en particulier, l'investissement dans les projets agricoles en Afrique est souvent freiné par un manque de transparence, une faible structuration des projets, ainsi que des difficultés de suivi, de pilotage et de contrôle opérationnel à distance.",
  "Par ailleurs, les chaînes de valeur agricoles restent généralement fragmentées, peu intégrées et insuffisamment optimisées, ce qui limite la création de valeur locale et la compétitivité des filières. Cette situation est aggravée par des facteurs systémiques tels que les aléas climatiques, la pression démographique, la volatilité des marchés agricoles et les exigences croissantes en matière de durabilité environnementale, sociale et économique.",
  "En parallèle, l'émergence de solutions technologiques et agritech offre des perspectives majeures de transformation du secteur, notamment en matière de digitalisation, de traçabilité et de pilotage des exploitations. Toutefois, leur adoption reste encore limitée en raison d'un manque d'accompagnement stratégique, d'ingénierie de projet et d'intégration opérationnelle dans les modèles agricoles existants.",
  "C'est dans ce contexte qu'AgroHelp Group a été créé, afin de répondre à un besoin structurel de structuration, de sécurisation et de professionnalisation des projets agricoles. Le cabinet se positionne comme un acteur d'interface entre la stratégie, l'investissement et le terrain, en facilitant également l'implication de la diaspora grâce à des dispositifs d'accompagnement, de suivi et de pilotage des projets à distance. Ainsi, AgroHelp Group contribue à la transformation du secteur agricole en apportant une expertise intégrée combinant analyse stratégique, ingénierie de projet et accompagnement opérationnel, afin de convertir le potentiel agricole africain en opportunités économiques concrètes, durables et investissables.",
];

export default function Enjeux() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Notre Contexte</span>
          <h2 className="section-title">Les enjeux à l'origine d'AgroHelp Group</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── Left: text ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="text-gray-600 leading-relaxed text-base"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* ── Right: image ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&h=560&fit=crop&q=80"
                alt="Innovation agricole et production"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg leading-snug">Innovation · Production végétale · Élevage</p>
                <p className="text-white/70 text-sm mt-1">Modernisation de l'agriculture africaine</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="absolute -right-5 top-8 bg-white rounded-3xl p-7 shadow-card-hover text-center"
            >
              <p className="text-xs text-gray-400 font-medium mb-0.5">Secteur clé</p>
              <p className="font-extrabold text-deep-green text-xl">Agriculture</p>
              <p className="text-xs text-orange-accent font-semibold mt-0.5">Afrique subsaharienne</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
