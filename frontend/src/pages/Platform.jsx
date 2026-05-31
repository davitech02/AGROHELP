import { motion } from 'framer-motion';
import { Users, Target, Globe, Search, BarChart2, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';

const vp = { once: true, amount: 0.12 };

const pillars = [
  {
    icon: Users,
    title: 'Integrated Expertise',
    description: 'Our multidisciplinary team combines agricultural science, business strategy, financial modelling, and deep market knowledge to deliver truly holistic solutions that stand up to investor and lender scrutiny.',
  },
  {
    icon: Target,
    title: 'Bankable Projects',
    description: 'We develop projects structured to meet World Bank, African Development Bank, and commercial lender standards — with robust financial models, environmental assessments, and risk mitigation frameworks.',
  },
  {
    icon: Globe,
    title: 'Diaspora Remote Support',
    description: 'Our dedicated diaspora desk connects African professionals abroad with high-impact agricultural investment opportunities at home, providing remote advisory, deal structuring, and on-ground execution support.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    desc: 'We conduct a thorough diagnostic of your project, market context, existing assets, and stakeholder landscape to establish a clear baseline.',
  },
  {
    step: '02',
    title: 'Strategy Design',
    desc: 'Our team co-designs a tailored strategy with you — covering market positioning, financial modelling, risk mapping, and implementation phasing.',
  },
  {
    step: '03',
    title: 'Implementation Support',
    desc: 'We stay engaged through execution — managing supplier relationships, training field teams, and monitoring key performance indicators in real time.',
  },
  {
    step: '04',
    title: 'Impact Measurement',
    desc: 'Every engagement concludes with a rigorous impact assessment, reporting on financial returns, employment created, and environmental outcomes.',
  },
];

const tools = [
  { icon: Search,    title: 'Market Intelligence',   desc: 'Real-time data on commodity prices, market demand, and competitor activity across African markets.' },
  { icon: BarChart2, title: 'Financial Modelling',    desc: 'Bankable feasibility studies and financial models aligned with international lender requirements.' },
  { icon: Settings,  title: 'Project Management',     desc: 'Structured project management frameworks that keep implementations on time and within budget.' },
  { icon: Shield,    title: 'Compliance Monitoring',  desc: 'Continuous QHSE compliance tracking with automated alerts and audit-ready documentation.' },
];

export default function PlatformPage() {
  return (
    <>
      <PageBanner
        label="Why AgroHelp"
        title={<>Our <span style={{ color: '#E07B39' }}>Platform</span> &amp; Approach</>}
        subtitle="Discover what makes AgroHelp the most trusted agricultural consulting partner across Africa."
      />

      {/* ── Core Pillars ──────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Three Pillars of Excellence</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our differentiated approach is built on three core pillars that consistently deliver results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="bg-white p-7 rounded-4xl text-center"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                    style={{ background: 'rgba(27,67,50,0.08)' }}>
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

      {/* ── Process Steps ─────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Engagement Process</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              A structured four-step approach that moves every project from concept to bankable reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative p-6 bg-cream rounded-3xl text-center"
              >
                <span className="text-5xl font-black mb-4 block" style={{ color: 'rgba(27,67,50,0.08)' }}>
                  {step.step}
                </span>
                <h3 className="font-bold text-base mb-2" style={{ color: '#1B4332' }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px" style={{ background: '#E07B39', opacity: 0.4 }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ─────────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Our Toolkit</span>
              <h2 className="section-title">Capabilities &amp;<br />Tools We Use</h2>
              <p className="section-subtitle">
                Purpose-built tools and proven methodologies that power every AgroHelp engagement
              </p>
              <div className="space-y-4 mt-8">
                {tools.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={vp}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex gap-5 p-5 bg-white rounded-2xl"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(224,123,57,0.10)' }}>
                        <Icon size={18} style={{ color: '#E07B39' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: '#1B4332' }}>{t.title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{t.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden h-[500px]"
                style={{ borderRadius: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=560&h=700&fit=crop&q=80"
                  alt="Platform capabilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-6 right-6 bg-white p-4 rounded-2xl"
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
                <p className="font-bold text-sm" style={{ color: '#1B4332' }}>Trusted Across Africa</p>
                <p className="text-xs text-gray-500 mt-0.5">50+ partners · 12+ countries · 100+ projects delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Experience the AgroHelp<br />Difference</h2>
            <p className="section-subtitle">
              Schedule a free 30-minute discovery call and see how our platform can accelerate your agricultural project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange">Book a Free Call</Link>
              <Link to="/services" className="btn-primary">View All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
