import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Link as LinkIcon, Package, Zap, BookOpen, CheckCircle, Beef } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import BookConsultation from '../components/BookConsultation';
import Footer from '../components/Footer';

const vp = { once: true, amount: 0.12 };

const services = [
  {
    icon: Lightbulb,
    tag: 'Strategy',
    title: 'Strategic Consulting',
    shortDesc: 'Tailored strategies for your agricultural enterprise — from market analysis to full-scale implementation.',
    fullDesc: 'Our strategic consulting service provides end-to-end guidance for agricultural enterprises at every stage. We conduct rigorous market analyses, competitive benchmarking, and feasibility studies to develop actionable roadmaps. Whether you are launching a new agribusiness, scaling an existing operation, or entering new markets, our consultants deliver evidence-based strategies that create measurable impact.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=640&h=420&fit=crop&q=80',
    highlights: ['Market Analysis & Feasibility', 'Business Model Design', 'Investment Readiness', 'Go-to-Market Strategy'],
    tagColor: '#1B4332',
  },
  {
    icon: LinkIcon,
    tag: 'Growth',
    title: 'Value Chain Development',
    shortDesc: 'Building efficient, profitable value chains that connect farmers directly to markets.',
    fullDesc: 'We design and strengthen agricultural value chains from farm inputs to end consumer markets. Our approach identifies bottlenecks, maps all actors and linkages, and implements interventions that improve efficiency, reduce post-harvest losses, and increase margins for every participant. We specialize in connecting smallholder farmers to formal markets and export opportunities.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=640&h=420&fit=crop&q=80',
    highlights: ['Value Chain Mapping', 'Linkage Facilitation', 'Post-Harvest Management', 'Market Access Programs'],
    tagColor: '#2D6A4F',
  },
  {
    icon: Package,
    tag: 'Supply',
    title: 'Input Supply',
    shortDesc: 'Reliable sourcing and distribution of quality agricultural inputs to smallholders and agribusinesses.',
    fullDesc: 'Our input supply service ensures that farmers and agribusinesses have reliable, affordable access to quality seeds, fertilizers, crop protection products, and equipment. We leverage our pan-African supplier network to source certified inputs, negotiate bulk pricing, and manage logistics to last-mile delivery — reducing input costs by up to 30%.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=640&h=420&fit=crop&q=80',
    highlights: ['Certified Seed Sourcing', 'Fertilizer Procurement', 'Equipment Leasing', 'Last-Mile Logistics'],
    tagColor: '#E07B39',
  },
  {
    icon: Zap,
    tag: 'Technology',
    title: 'Agritech Solutions',
    shortDesc: 'Leveraging technology to modernise agricultural operations and substantially improve yields.',
    fullDesc: 'We integrate cutting-edge agricultural technology into farming operations and agribusiness workflows. From remote sensing and precision agriculture to farm management software and IoT sensor networks, our agritech implementations deliver real-time data insights that help farmers make smarter decisions, reduce waste, and increase yields by an average of 25%.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&h=420&fit=crop&q=80',
    highlights: ['Precision Agriculture', 'Farm Management Software', 'Remote Sensing & Drones', 'IoT Sensor Networks'],
    tagColor: '#1B4332',
  },
  {
    icon: BookOpen,
    tag: 'Education',
    title: 'Training & Capacity Building',
    shortDesc: 'Comprehensive training programmes for farmers and every actor along the value chain.',
    fullDesc: 'Knowledge is the most sustainable agricultural input. Our training programmes cover Good Agricultural Practices (GAP), financial literacy, cooperative management, food safety, and post-harvest handling. We deliver training through field schools, online modules, and train-the-trainer programmes — equipping over 5,000 farmers and agribusiness professionals annually.',
    image: 'https://images.unsplash.com/photo-1592991538534-00972b585a85?w=640&h=420&fit=crop&q=80',
    highlights: ['Good Agricultural Practices', 'Financial Literacy', 'Cooperative Management', 'Train-the-Trainer'],
    tagColor: '#2D6A4F',
  },
  {
    icon: CheckCircle,
    tag: 'Standards',
    title: 'QHSE Compliance',
    shortDesc: 'Ensuring quality, health, safety, and environmental standards throughout your operations.',
    fullDesc: 'We help agricultural enterprises achieve and maintain compliance with international quality, health, safety, and environmental (QHSE) standards — including GlobalG.A.P., ISO 22000, HACCP, and export market requirements. Our compliance roadmaps streamline certification processes, reduce audit risks, and open doors to premium markets that demand verified standards.',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=640&h=420&fit=crop&q=80',
    highlights: ['GlobalG.A.P. Certification', 'ISO 22000 & HACCP', 'Environmental Compliance', 'Export Market Standards'],
    tagColor: '#E07B39',
  },
  {
    icon: Beef,
    tag: 'Livestock',
    title: 'Livestock Production',
    shortDesc: "Supporting sustainable animal rearing and production systems across Africa's agricultural value chains.",
    fullDesc: 'AgroHelp Group provides end-to-end advisory services for livestock production — covering cattle, poultry, small ruminants, and aquaculture operations. We help farmers and agribusinesses design profitable, sustainable livestock enterprises from the ground up: breed selection, feed formulation, veterinary health protocols, and direct market linkages. Our specialists understand the unique challenges of African livestock systems — seasonal feed shortages, disease pressure, and price volatility — and we craft data-driven interventions that improve herd productivity, reduce mortality rates, and ensure animal welfare compliance. Whether you are scaling a smallholder poultry unit or developing a commercial cattle ranch, AgroHelp brings the technical and business expertise to make your livestock enterprise bankable and resilient.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=640&h=420&fit=crop&q=80',
    highlights: ['Breed Selection & Herd Management', 'Feed Formulation & Nutrition Planning', 'Veterinary Health Protocols', 'Poultry & Aquaculture Systems'],
    tagColor: '#2D6A4F',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        label="What We Offer"
        title={<>Our <span style={{ color: '#E07B39' }}>Services</span></>}
        subtitle="Comprehensive agricultural consulting solutions designed to take your project from idea to bankable reality."
      />

      {/* ── Services list ─────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom space-y-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;
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
                <div className="overflow-hidden w-full h-72 md:h-[380px]"
                  style={{ borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.13)' }}>
                  <img src={svc.image} alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ background: svc.tagColor }}>
                    <Icon size={13} />
                    {svc.tag}
                  </div>

                  <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#1B4332' }}>{svc.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{svc.fullDesc}</p>

                  <ul className="space-y-2 mb-8">
                    {svc.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E07B39' }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact"
                    className="inline-flex items-center gap-2 font-bold transition-all group"
                    style={{ color: '#E07B39' }}>
                    Start This Service
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Consultation CTA ──────────────────── */}
      <BookConsultation />

      <Footer />
    </>
  );
}
