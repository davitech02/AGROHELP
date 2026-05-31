import { motion } from 'framer-motion';
import { Calendar, Clock, Zap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const appointmentIcons = [Clock, Zap, Award, Calendar];

export default function BookConsultation() {
  const { language } = useLanguage();
  const tx = t[language].bookConsultation;

  return (
    <section id="booking" className="py-28 bg-cream">
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
            <p className="section-subtitle mb-8">{tx.subtitle}</p>

            {/* Appointment cards */}
            <div className="grid grid-cols-2 gap-5 mb-12">
              {tx.appointments.map((apt, i) => {
                const Icon = appointmentIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-3xl p-5 shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-orange-accent transition-all duration-300 cursor-pointer text-center"
                  >
                    <div className="w-10 h-10 bg-deep-green/8 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-accent/12 transition-colors mx-auto">
                      <Icon size={20} className="text-deep-green group-hover:text-orange-accent transition-colors" />
                    </div>
                    <h4 className="font-bold text-deep-green text-sm mb-1">{apt.title}</h4>
                    <p className="text-gray-400 text-xs mb-2 leading-snug">{apt.description}</p>
                    <p className="text-orange-accent font-extrabold text-base">{apt.price}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick inquiry form */}
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <h3 className="font-bold text-deep-green mb-4 text-base">{tx.formTitle}</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={tx.namePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-deep-green text-sm bg-cream placeholder-gray-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder={tx.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-deep-green text-sm bg-cream placeholder-gray-400 transition-colors"
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

          {/* ── Right: large image ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-5xl overflow-hidden h-[680px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=650&h=850&fit=crop&q=80"
                alt="Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/45 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -left-8 top-12 bg-white rounded-xl p-4 shadow-card-hover min-w-[170px]"
            >
              <div className="flex items-center gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-orange-accent">★</span>)}
              </div>
              <p className="font-bold text-deep-green text-sm">{tx.ratingTitle}</p>
              <p className="text-gray-400 text-sm">{tx.ratingDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="absolute -right-6 bottom-20 bg-deep-green rounded-3xl px-5 py-4 shadow-green-glow"
            >
              <p className="text-white font-bold text-sm">{tx.availTitle}</p>
              <p className="text-orange-accent text-lg font-extrabold">{tx.availDay}</p>
              <p className="text-white/50 text-xs">{tx.availTime}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
