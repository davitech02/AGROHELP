import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carousel1 from '../assets/carousel1.jpg';
import carousel5 from '../assets/carousel5.jpg';
import carousel6 from '../assets/carousel6.jpg';
import carousel7 from '../assets/carousel7.jpg';

const vp = { once: true, amount: 0.08 };

const paragraphs = [
  "Le secteur agricole en Afrique occupe une place centrale dans les dynamiques de développement économique, en contribuant significativement à l'emploi, au PIB et à la sécurité alimentaire. Toutefois, malgré ce potentiel structurel important, de nombreuses analyses mettent en évidence un déficit persistant de structuration des projets agricoles, limitant leur viabilité économique, leur bancabilité et leur capacité à générer une valeur ajoutée locale durable.",
  "Dans ce contexte, les porteurs de projets agricoles — entrepreneurs, coopératives, investisseurs locaux et membres de la diaspora — font face à des contraintes majeures. Celles-ci incluent notamment l'insuffisance d'études de faisabilité robustes, la fragilité des modèles économiques, ainsi que des difficultés d'accès aux financements et aux marchés. Pour la diaspora en particulier, l'investissement dans les projets agricoles en Afrique est souvent freiné par un manque de transparence, une faible structuration des projets, ainsi que des difficultés de suivi, de pilotage et de contrôle opérationnel à distance.",
  "Par ailleurs, les chaînes de valeur agricoles restent généralement fragmentées, peu intégrées et insuffisamment optimisées, ce qui limite la création de valeur locale et la compétitivité des filières. Cette situation est aggravée par des facteurs systémiques tels que les aléas climatiques, la pression démographique, la volatilité des marchés agricoles et les exigences croissantes en matière de durabilité environnementale, sociale et économique.",
  "En parallèle, l'émergence de solutions technologiques et agritech offre des perspectives majeures de transformation du secteur, notamment en matière de digitalisation, de traçabilité et de pilotage des exploitations. Toutefois, leur adoption reste encore limitée en raison d'un manque d'accompagnement stratégique, d'ingénierie de projet et d'intégration opérationnelle dans les modèles agricoles existants.",
  "C'est dans ce contexte qu'AgroHelp Group a été créé, afin de répondre à un besoin structurel de structuration, de sécurisation et de professionnalisation des projets agricoles. Le cabinet se positionne comme un acteur d'interface entre la stratégie, l'investissement et le terrain, en facilitant également l'implication de la diaspora grâce à des dispositifs d'accompagnement, de suivi et de pilotage des projets à distance. Ainsi, AgroHelp Group contribue à la transformation du secteur agricole en apportant une expertise intégrée combinant analyse stratégique, ingénierie de projet et accompagnement opérationnel, afin de convertir le potentiel agricole africain en opportunités économiques concrètes, durables et investissables.",
];

const slides = [
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&h=560&fit=crop&q=80', alt: 'Culture maraîchère en Afrique' },
  { src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=700&h=560&fit=crop&q=80', alt: 'Élevage bovin' },
  { src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=700&h=560&fit=crop&q=80', alt: 'Élevage de volailles' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=560&fit=crop&q=80', alt: 'Irrigation et production végétale' },
  { src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=700&h=560&fit=crop&q=80', alt: 'Aviculture et volailles' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&h=560&fit=crop&q=80', alt: 'Agriculteurs travaillant sur le terrain' },
];

const carouselImages = [
  { src: carousel1, alt: 'Agriculture — image 1' },
  { src: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=320&h=220&fit=crop&q=80', alt: 'Champ de blé & céréales' },
  { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=320&h=220&fit=crop&q=80', alt: 'Aviculture — coq de ferme' },
  { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=320&h=220&fit=crop&q=80', alt: 'Culture de maïs' },
  { src: carousel5, alt: 'Agriculture — image 5' },
  { src: carousel6, alt: 'Agriculture — image 6' },
  { src: carousel7, alt: 'Agriculture — image 7' },
];

const VISIBLE = 3;
const MAX_START = carouselImages.length - VISIBLE; // 4

export default function Enjeux() {
  const [current, setCurrent] = useState(0);
  const [carouselStart, setCarouselStart] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevCarousel = () => setCarouselStart(s => Math.max(0, s - 1));
  const nextCarousel = () => setCarouselStart(s => Math.min(MAX_START, s + 1));

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (dx > 40) nextCarousel();
    else if (dx < -40) prevCarousel();
    touchStartX.current = null;
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Notre Contexte</span>
          <h2 className="section-title">Les enjeux à l'origine d'AgroHelp Group</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── Left: text ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="text-gray-600 leading-relaxed text-base"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* ── Right: main slideshow + mini carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:sticky lg:top-28 flex flex-col gap-4"
          >
            {/* Main auto-play slideshow */}
            <div className="relative rounded-4xl overflow-hidden shadow-2xl h-[260px] sm:h-[340px] lg:h-[420px]">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Mini carousel — 3 images visible at a time */}
            <div className="relative px-6">
              {/* Left arrow */}
              <button
                onClick={prevCarousel}
                disabled={carouselStart === 0}
                aria-label="Précédent"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-25 transition-opacity hover:shadow-lg"
              >
                <ChevronLeft size={16} style={{ color: '#1B4332' }} />
              </button>

              {/* Sliding track */}
              <div
                className="overflow-hidden rounded-2xl"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${carouselStart * (100 / VISIBLE)}%)` }}
                >
                  {carouselImages.map((img, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 px-1"
                      style={{ width: `${100 / VISIBLE}%` }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-24 object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={nextCarousel}
                disabled={carouselStart === MAX_START}
                aria-label="Suivant"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-25 transition-opacity hover:shadow-lg"
              >
                <ChevronRight size={16} style={{ color: '#1B4332' }} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
