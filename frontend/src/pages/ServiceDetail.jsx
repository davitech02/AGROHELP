import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import Footer from '../components/Footer';
import BookConsultation from '../components/BookConsultation';
import svc1 from '../assets/service1.jpeg';
import svc2 from '../assets/service2.jpeg';
import svc4 from '../assets/service4.jpeg';
import svc5 from '../assets/service5.jpg';
import svc6 from '../assets/service6.jpg';

const slugMap = {
  'conseil-strategique': 0,
  'filieres-agricoles':  1,
  'intrants-agricoles':  2,
  'innovation-agritech': 3,
  'formation-coaching':  4,
  'qhse':                5,
};

const images = [
  svc1,
  svc2,
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&h=600&fit=crop&q=80',
  svc4,
  svc5,
  svc6,
];

const tagColors = [
  'bg-deep-green',
  'bg-forest-green',
  'bg-orange-accent',
  'bg-deep-green',
  'bg-forest-green',
  'bg-orange-accent',
];

export default function ServiceDetail() {
  const { slug }     = useParams();
  const { language } = useLanguage();
  const tx           = t[language];

  const idx = slugMap[slug];

  if (idx === undefined) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream gap-4">
        <p className="text-deep-green text-xl font-bold">Service introuvable.</p>
        <Link to="/services" className="inline-flex items-center gap-2 text-orange-accent font-semibold">
          <ArrowLeft size={16} /> Retour aux services
        </Link>
      </div>
    );
  }

  const detail   = tx.servicesPage.services[idx];
  const card     = tx.servicesHome.items[idx];
  const image    = images[idx];
  const tagColor = tagColors[idx];

  return (
    <>
      {/* ── Hero image ──────────────────────────────────────── */}
      <div className="relative h-72 md:h-[420px] overflow-hidden">
        <img
          src={image}
          alt={card.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-10 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block ${tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
              {detail.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl">
              {card.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-3.5 flex items-center gap-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-deep-green transition-colors">Accueil</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-deep-green transition-colors">Nos Services</Link>
          <span>/</span>
          <span className="text-deep-green font-semibold truncate">{card.title}</span>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* Subtitle in italics */}
            <p className="text-lg italic text-gray-500 leading-relaxed mb-8 border-l-4 border-orange-accent pl-5">
              {card.description}
            </p>

            {/* Full description */}
            <p className="text-gray-600 leading-relaxed text-base mb-12">
              {detail.fullDesc}
            </p>

            {/* Nos prestations */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
              <h2 className="text-xl font-extrabold text-deep-green mb-6">Nos prestations</h2>
              <ul className="space-y-4">
                {detail.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-orange-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gray-500 font-semibold hover:text-deep-green transition-colors"
              >
                <ArrowLeft size={16} />
                Retour aux services
              </Link>
              <Link
                to="/contact"
                className="btn-orange inline-flex items-center gap-2"
              >
                Nous contacter
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BookConsultation />
      <Footer />
    </>
  );
}
