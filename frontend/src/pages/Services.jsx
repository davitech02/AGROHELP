import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Link as LinkIcon, Package, Zap, BookOpen, CheckCircle, Beef } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import BookConsultation from '../components/BookConsultation';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import svc1 from '../assets/service1.jpeg';
import svc2 from '../assets/service2.jpeg';
import svc4 from '../assets/service4.jpeg';
import svc5 from '../assets/service5.jpg';
import svc6 from '../assets/service6.jpg';
import livestock from '../assets/livestocks.jpeg';

const vp = { once: true, amount: 0.12 };

const servicesMeta = [
  { icon: Lightbulb,   image: svc1,                                                                                       tagColor: '#1B4332' },
  { icon: LinkIcon,    image: svc2,                                                                                       tagColor: '#2D6A4F' },
  { icon: Package,     image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=640&h=420&fit=crop&q=80', tagColor: '#E07B39' },
  { icon: Zap,         image: svc4,                                                                                       tagColor: '#1B4332' },
  { icon: BookOpen,    image: svc5,                                                                                       tagColor: '#2D6A4F' },
  { icon: CheckCircle, image: svc6,                                                                                       tagColor: '#E07B39' },
  { icon: Beef,        image: livestock,                                                                                   tagColor: '#2D6A4F' },
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const tx = t[language].servicesPage;

  return (
    <>
      <PageBanner
        label={tx.bannerLabel}
        title={<>{tx.bannerTitle} <span style={{ color: '#E07B39' }}>{tx.bannerHighlight}</span></>}
        subtitle={tx.bannerSubtitle}
      />

      <section className="py-14 md:py-28 bg-cream">
        <div className="container-custom space-y-24">
          {tx.services.map((svc, i) => {
            const { icon: Icon, image, tagColor } = servicesMeta[i];
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
                <div className="overflow-hidden w-full h-72 md:h-[380px]" style={{ borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.13)' }}>
                  <img src={image} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4" style={{ background: tagColor }}>
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
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold transition-all group" style={{ color: '#E07B39' }}>
                    {tx.startService}
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <BookConsultation />
      <Footer />
    </>
  );
}
