import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, DollarSign, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const vp = { once: true, amount: 0.12 };

const segmentMeta = [
  { icon: Briefcase,  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=580&h=420&fit=crop&q=80', accent: '#1B4332' },
  { icon: Users,      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=580&h=420&fit=crop&q=80', accent: '#2D6A4F' },
  { icon: DollarSign, image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=580&h=420&fit=crop&q=80', accent: '#E07B39' },
  { icon: Globe,      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=580&h=420&fit=crop&q=80', accent: '#1B4332' },
  { icon: Heart,      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=580&h=420&fit=crop&q=80', accent: '#2D6A4F' },
];

export default function PartnersPage() {
  const { language } = useLanguage();
  const tx = t[language].partnersPage;

  return (
    <>
      <PageBanner
        label={tx.bannerLabel}
        title={<>{tx.bannerTitle} <span style={{ color: '#E07B39' }}>{tx.bannerHighlight}</span></>}
        subtitle={tx.bannerSubtitle}
      />

      {/* ── Partner segments ─────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom space-y-24">
          {tx.segments.map((seg, i) => {
            const { icon: Icon, image, accent } = segmentMeta[i];
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.75 }}
                className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}
              >
                <div className="overflow-hidden w-full h-64 md:h-[340px]" style={{ borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <img src={image} alt={seg.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4" style={{ background: accent }}>
                    <Icon size={13} />
                    {seg.label}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#1B4332' }}>{seg.headline}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{seg.description}</p>
                  <ul className="space-y-2 mb-7">
                    {seg.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E07B39' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold transition-all group" style={{ color: '#E07B39' }}>
                    {tx.becomePartner}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
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
