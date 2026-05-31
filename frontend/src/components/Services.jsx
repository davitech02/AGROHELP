import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Strategic Consulting',
    description:
      'Tailored strategies for your agricultural enterprise — from market analysis to full-scale implementation.',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=520&h=380&fit=crop&q=80',
    tag: 'Strategy',
    tagColor: 'bg-deep-green',
  },
  {
    title: 'Value Chain Development',
    description:
      'Building efficient, profitable value chains that connect farmers directly to markets.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=520&h=380&fit=crop&q=80',
    tag: 'Growth',
    tagColor: 'bg-forest-green',
  },
  {
    title: 'Input Supply',
    description:
      'Reliable sourcing and distribution of quality agricultural inputs to smallholders and agribusinesses.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=520&h=380&fit=crop&q=80',
    tag: 'Supply',
    tagColor: 'bg-orange-accent',
  },
  {
    title: 'Agritech Solutions',
    description:
      'Leveraging technology to modernise agricultural operations and substantially improve yields.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=520&h=380&fit=crop&q=80',
    tag: 'Technology',
    tagColor: 'bg-deep-green',
  },
  {
    title: 'Training & Capacity',
    description:
      'Comprehensive training programmes for farmers and every actor along the value chain.',
    image:
      'https://images.unsplash.com/photo-1592991538534-00972b585a85?w=520&h=380&fit=crop&q=80',
    tag: 'Education',
    tagColor: 'bg-forest-green',
  },
  {
    title: 'QHSE Compliance',
    description:
      'Ensuring quality, health, safety, and environmental standards throughout your operations.',
    image:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=520&h=380&fit=crop&q=80',
    tag: 'Standards',
    tagColor: 'bg-orange-accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive agricultural consulting solutions tailored to your specific needs
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group card-base cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span
                  className={`absolute top-4 left-4 ${svc.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-deep-green mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                <div className="flex items-center justify-center text-orange-accent font-semibold text-sm group/link">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
