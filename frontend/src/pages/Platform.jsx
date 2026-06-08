import { motion } from 'framer-motion';
import { Users, Target, Globe, Search, BarChart2, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const vp = { once: true, amount: 0.12 };
const pillarIcons = [Users, Target, Globe];
const toolIcons   = [Search, BarChart2, Settings, Shield];

export default function PlatformPage() {
  const { language } = useLanguage();
  const tx = t[language].platformPage;

  return (
    <>
      <PageBanner
        label={tx.bannerLabel}
        title={<>{tx.bannerTitle} <span style={{ color: '#E07B39' }}>{tx.bannerHighlight}</span> {tx.bannerAfter}</>}
        subtitle={tx.bannerSubtitle}
      />

      {/* ── Core Pillars ─────────────────────────── */}
      <section className="py-14 md:py-28 bg-cream">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="section-label">{tx.pillarsLabel}</span>
            <h2 className="section-title">{tx.pillarsTitle}</h2>
            <p className="section-subtitle">{tx.pillarsSubtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tx.pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="bg-white p-8 rounded-4xl text-center" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto" style={{ background: 'rgba(27,67,50,0.08)' }}>
                    <Icon size={26} style={{ color: '#1B4332' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1B4332' }}>{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Steps ────────────────────────── */}
      <section className="py-14 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="section-label">{tx.processLabel}</span>
            <h2 className="section-title">{tx.processTitle}</h2>
            <p className="section-subtitle">{tx.processSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative p-8 bg-cream rounded-3xl text-center">
                <span className="text-5xl font-black mb-4 block" style={{ color: 'rgba(27,67,50,0.08)' }}>{step.step}</span>
                <h3 className="font-bold text-base mb-2" style={{ color: '#1B4332' }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < tx.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px" style={{ background: '#E07B39', opacity: 0.4 }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ───────────────────────────────── */}
      <section className="py-14 md:py-28 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.8 }}>
              <span className="section-label">{tx.toolsLabel}</span>
              <h2 className="section-title">{tx.toolsTitle}</h2>
              <p className="section-subtitle">{tx.toolsSubtitle}</p>
              <div className="space-y-4 mt-8">
                {tx.tools.map((tool, i) => {
                  const Icon = toolIcons[i];
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center text-center gap-3 p-8 bg-white rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(224,123,57,0.10)' }}>
                        <Icon size={18} style={{ color: '#E07B39' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: '#1B4332' }}>{tool.title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{tool.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
              <div className="overflow-hidden h-[500px]" style={{ borderRadius: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=560&h=700&fit=crop&q=80" alt="Platform capabilities" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-8 left-6 right-6 bg-white p-7 rounded-2xl text-center" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
                <p className="font-bold text-sm" style={{ color: '#1B4332' }}>{tx.trustedBadge}</p>
                <p className="text-xs text-gray-500 mt-0.5">{tx.trustedDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-14 md:py-28 bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }}>
            <span className="section-label">{tx.ctaLabel}</span>
            <h2 className="section-title">
              {tx.ctaTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i < tx.ctaTitle.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="section-subtitle">{tx.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange">{tx.ctaBtn1}</Link>
              <Link to="/services" className="btn-primary">{tx.ctaBtn2}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
