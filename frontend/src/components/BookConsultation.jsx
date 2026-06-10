import { motion } from 'framer-motion';
import { Calendar, Clock, Zap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const appointmentIcons = [Clock, Zap, Award, Calendar];

export default function BookConsultation() {
  const { language } = useLanguage();
  const tx = t[language].bookConsultation;

  return (
    <section id="booking" className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── Left: Content + Form ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">{tx.label}</span>
            <h2 className="section-title mt-1 mb-3">{tx.title}</h2>
            <p className="section-subtitle mb-10">{tx.subtitle}</p>

            {/* Appointment cards — 1 col mobile, 2 col sm+ */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {tx.appointments.map((apt, i) => {
                const Icon = appointmentIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-orange-accent transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-accent/12 transition-colors" style={{ background: 'rgba(27,67,50,0.08)' }}>
                      <Icon size={22} className="text-deep-green group-hover:text-orange-accent transition-colors" />
                    </div>
                    <h4 className="font-bold text-deep-green text-sm mb-2">{apt.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{apt.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Demande Rapide form */}
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-bold text-deep-green text-base mb-6 text-center">{tx.formTitle}</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={tx.namePlaceholder}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-deep-green text-sm bg-cream placeholder-gray-400 transition-all duration-200"
                  style={{ '--tw-ring-color': 'rgba(27,67,50,0.10)' }}
                />
                <input
                  type="email"
                  placeholder={tx.emailPlaceholder}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-deep-green text-sm bg-cream placeholder-gray-400 transition-all duration-200"
                />
                <button
                  onClick={() => window.open('https://calendly.com/dokolandry33/30min', '_blank')}
                  className="w-full btn-orange justify-center gap-2"
                >
                  <Calendar size={18} />
                  {tx.bookBtn}
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right: image ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden h-[260px] sm:h-[380px] lg:h-[680px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=650&h=850&fit=crop&q=80"
                alt="Consultation agricole professionnelle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/45 to-transparent" />
            </div>

            {/* Star rating badge — desktop only to avoid overflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:block absolute -left-8 top-12 bg-white rounded-xl p-5 shadow-card-hover min-w-[170px]"
            >
              <div className="flex items-center gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-orange-accent">★</span>)}
              </div>
              <p className="font-bold text-deep-green text-sm">{tx.ratingTitle}</p>
              <p className="text-gray-400 text-sm">{tx.ratingDesc}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
