import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Team from '../components/Team';
import Footer from '../components/Footer';

const vp = { once: true, amount: 0.15 };

const stats = [
  { number: '100+', label: 'Projects Completed' },
  { number: '50+',  label: 'Agricultural Partners' },
  { number: '15+',  label: 'Years of Experience' },
  { number: '12+',  label: 'Countries Reached' },
];

const values = [
  {
    icon: CheckCircle2,
    title: 'Integrity',
    description: 'We operate with full transparency and ethical standards in every engagement, ensuring our clients always get honest, actionable guidance.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Our team delivers world-class consulting rooted in deep agricultural expertise, business acumen, and a relentless drive for results.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Every project we take on is measured by the lasting positive impact it creates for communities, ecosystems, and food systems across Africa.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We champion regenerative agricultural practices that protect natural resources while ensuring long-term commercial viability for all stakeholders.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        label="About AgroHelp"
        title={<>Our Story &amp; <span style={{ color: '#E07B39' }}>Mission</span></>}
        subtitle="Learn about the people, values, and vision driving agricultural transformation across Africa."
      />

      {/* ── Mission & Vision ──────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden w-full h-[480px]"
                style={{ borderRadius: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.16)' }}>
                <img
                  src="https://images.unsplash.com/photo-1500595046891-771f85f01f07?w=680&h=720&fit=crop&q=80"
                  alt="AgroHelp mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(27,67,50,.50) 0%, transparent 55%)' }} />
              </div>
              {/* Floating stat */}
              <div className="absolute -right-4 top-10 bg-white text-center px-6 py-5"
                style={{ borderRadius: '1.5rem', boxShadow: '0 12px 40px rgba(0,0,0,0.13)' }}>
                <span className="text-4xl font-black block" style={{ color: '#1B4332' }}>2009</span>
                <span className="text-xs text-gray-500 font-medium">Founded</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">Mission &amp; Vision</h2>

              <div className="space-y-5 mb-8">
                <div className="p-6 bg-white rounded-3xl"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <h3 className="font-bold mb-2.5" style={{ color: '#1B4332' }}>Our Mission</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To empower agricultural value chains across Africa by delivering world-class strategic consulting,
                    agritech solutions, and capacity-building programmes that unlock sustainable growth for every
                    stakeholder — from smallholder farmers to large agribusinesses and institutional investors.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-3xl"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <h3 className="font-bold mb-2.5" style={{ color: '#1B4332' }}>Our Vision</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    A prosperous Africa where agriculture drives inclusive economic development — where every farm,
                    cooperative, and agribusiness operates at its fullest potential, supported by bankable projects,
                    modern technology, and globally competitive value chains.
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="text-center p-3 bg-deep-green/5 rounded-2xl">
                    <div className="text-xl font-extrabold" style={{ color: '#1B4332' }}>{s.number}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              These four pillars define how we work and why clients trust AgroHelp
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="group p-6 bg-cream rounded-3xl hover:bg-white transition-all duration-300 text-center"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl mb-4 mx-auto"
                    style={{ background: 'rgba(224,123,57,0.12)' }}>
                    <Icon size={22} style={{ color: '#E07B39' }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1B4332' }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────── */}
      <Team />

      {/* ── CTA ───────────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="section-label">Let's Work Together</span>
            <h2 className="section-title">Ready to Transform<br />Your Agricultural Vision?</h2>
            <p className="section-subtitle">
              Partner with AgroHelp Group and gain access to 15+ years of African agricultural expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange">Get in Touch</Link>
              <Link to="/services" className="btn-primary">Explore Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
