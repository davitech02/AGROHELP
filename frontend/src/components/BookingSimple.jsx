import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquare, Users, Calendar } from 'lucide-react';

const vp = { once: true, amount: 0.1 };

const steps = [
  { icon: CalendarCheck, num: '01', label: 'Choisissez un créneau',    desc: 'Sélectionnez le moment qui vous convient le mieux dans notre calendrier en ligne.' },
  { icon: MessageSquare,  num: '02', label: 'Présentez votre besoin',   desc: 'Décrivez brièvement votre projet ou la problématique sur laquelle vous souhaitez être accompagné.' },
  { icon: Users,          num: '03', label: 'Échangez avec nos experts', desc: 'Un expert AgroHelp vous contacte pour un échange personnalisé et des conseils adaptés à votre situation.' },
  { icon: Calendar,       num: '04', label: 'Calendly',                  desc: 'Réservez directement votre consultation via notre plateforme Calendly, simple et sécurisée.' },
];

export default function BookingSimple() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Consultation</span>
          <h2 className="section-title">Réservez votre consultation</h2>
          <p className="section-subtitle">Un processus simple en quatre étapes pour démarrer votre accompagnement.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative bg-cream rounded-4xl p-8 flex flex-col items-center text-center gap-4"
              >
                <span
                  className="absolute top-4 right-4 text-xs font-black"
                  style={{ color: 'rgba(27,67,50,0.15)', fontSize: '2rem', lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#1B433218' }}>
                  <Icon size={26} style={{ color: '#1B4332' }} />
                </div>
                <h3 className="font-bold text-deep-green text-base">{step.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={() => window.open('https://calendly.com/dokolandry33/30min', '_blank')}
            className="btn-orange inline-flex items-center gap-3 text-lg px-10 py-4"
          >
            <Calendar size={22} />
            Réserver sur Calendly
          </button>
        </motion.div>
      </div>
    </section>
  );
}
