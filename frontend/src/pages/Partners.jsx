import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, DollarSign, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';

const vp = { once: true, amount: 0.12 };

const segments = [
  {
    icon: Briefcase,
    label: 'Entrepreneurs',
    headline: 'Launch & Scale Your Agri-Business',
    description: 'Whether you are starting from scratch or ready to scale, AgroHelp provides the strategic framework, market access, and investor connections you need to build a viable, profitable agricultural enterprise across Africa.',
    benefits: ['Business model design', 'Market entry strategy', 'Investor pitch preparation', 'Regulatory navigation'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=580&h=420&fit=crop&q=80',
    accent: '#1B4332',
  },
  {
    icon: Users,
    label: 'Cooperatives',
    headline: 'Strengthen Your Cooperative',
    description: 'We help farmer cooperatives build institutional capacity, improve governance, access formal finance, and connect to regional and global markets — turning grassroots organisations into competitive agribusiness players.',
    benefits: ['Governance & bylaws review', 'Bulk procurement access', 'Formal finance linkages', 'Market negotiation support'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=580&h=420&fit=crop&q=80',
    accent: '#2D6A4F',
  },
  {
    icon: DollarSign,
    label: 'Investors',
    headline: 'Find Bankable Opportunities',
    description: 'Our pipeline of pre-screened, due-diligence-ready agricultural investment opportunities gives investors direct access to high-yield deals across the African continent, backed by rigorous financial and risk analysis.',
    benefits: ['Pre-screened deal pipeline', 'Due diligence support', 'Risk mitigation frameworks', 'Portfolio monitoring'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=580&h=420&fit=crop&q=80',
    accent: '#E07B39',
  },
  {
    icon: Globe,
    label: 'Diaspora',
    headline: 'Invest in Your Homeland',
    description: 'Our dedicated diaspora advisory desk helps African professionals abroad identify, evaluate, and execute high-impact agricultural investments at home — with full remote support and trusted on-ground execution partners.',
    benefits: ['Remote investment advisory', 'Vetted local partnerships', 'Legal & compliance guidance', 'Impact reporting'],
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=580&h=420&fit=crop&q=80',
    accent: '#1B4332',
  },
  {
    icon: Heart,
    label: 'NGOs & Development Orgs',
    headline: 'Maximise Development Impact',
    description: 'We partner with NGOs and development organisations to design, implement, and evaluate agricultural programmes that achieve lasting impact — from smallholder support schemes to national food-system transformation initiatives.',
    benefits: ['Programme design & M&E', 'Beneficiary targeting', 'Donor reporting frameworks', 'Sustainability planning'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=580&h=420&fit=crop&q=80',
    accent: '#2D6A4F',
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        label="Who We Serve"
        title={<>Our <span style={{ color: '#E07B39' }}>Partners</span></>}
        subtitle="We build meaningful partnerships across the entire agricultural ecosystem — from individual entrepreneurs to international development organisations."
      />

      {/* ── Partner segments ──────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom space-y-24">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
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
                {/* Image */}
                <div className="overflow-hidden w-full h-64 md:h-[340px]"
                  style={{ borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <img src={seg.image} alt={seg.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ background: seg.accent }}>
                    <Icon size={13} />
                    {seg.label}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#1B4332' }}>
                    {seg.headline}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{seg.description}</p>
                  <ul className="space-y-2 mb-7">
                    {seg.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E07B39' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 font-bold transition-all group"
                    style={{ color: '#E07B39' }}>
                    Become a Partner
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA banner ────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">Ready to Start<br />Your Journey?</h2>
            <p className="section-subtitle">
              Reach out today and let's explore how AgroHelp can add value to your agricultural ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange">Contact Us Now</Link>
              <Link to="/services" className="btn-primary">View Our Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
