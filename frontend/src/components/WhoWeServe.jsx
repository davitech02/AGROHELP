import { motion } from 'framer-motion';

const clients = [
  {
    label: 'Entrepreneurs',
    description: 'Supporting agricultural startups and solo entrepreneurs in building viable, profitable businesses.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
  },
  {
    label: 'Cooperatives',
    description: 'Helping farmer cooperatives scale operations and access better regional and global markets.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop&q=80',
  },
  {
    label: 'Investors',
    description: 'Connecting investors to high-yield, bankable agricultural opportunities across Africa.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=500&fit=crop&q=80',
  },
  {
    label: 'Diaspora',
    description: 'Empowering African diaspora to invest meaningfully in home-continent agriculture.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=500&fit=crop&q=80',
  },
  {
    label: 'NGOs',
    description: 'Partnering with NGOs to build sustainable food systems and drive rural development.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop&q=80',
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

export default function WhoWeServe() {
  return (
    <section id="partners" className="py-28 bg-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Partners</span>
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Building meaningful partnerships across the entire agricultural ecosystem
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative rounded-4xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-500"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Image */}
              <img
                src={client.image}
                alt={client.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-white font-bold text-base mb-1">{client.label}</h3>
                <p className="text-white/0 group-hover:text-white/80 text-xs leading-relaxed transition-all duration-400 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
