import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import posts, { CATEGORY_COLORS } from '../data/blogPosts';

const vp = { once: true, amount: 0.1 };

/* ── Small category badge ───────────────────── */
function CategoryBadge({ name }) {
  const colors = CATEGORY_COLORS[name] || { bg: 'rgba(107,114,128,0.1)', text: '#374151' };
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
      style={{ background: colors.bg, color: colors.text }}
    >
      <Tag size={10} />
      {name}
    </span>
  );
}

/* ── Featured post card ─────────────────────── */
function FeaturedCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7 }}
      className="grid md:grid-cols-2 gap-0 bg-white overflow-hidden"
      style={{ borderRadius: '2rem', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64 md:h-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: '#E07B39' }}>
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-5">
          <CategoryBadge name={post.category} />
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Clock size={11} />{post.readTime}
          </span>
        </div>
        <h2 className="text-2xl font-extrabold mb-4 leading-tight" style={{ color: '#1B4332' }}>
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-7 line-clamp-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold" style={{ color: '#1B4332' }}>{post.author}</p>
            <p className="text-xs text-gray-400 mt-0.5">{post.date}</p>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 font-bold text-sm transition-all group"
            style={{ color: '#E07B39' }}
          >
            Read Article
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Regular post card ──────────────────────── */
function PostCard({ post, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ delay, duration: 0.6 }}
      className="group bg-white overflow-hidden flex flex-col"
      style={{ borderRadius: '1.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge name={post.category} />
        </div>
      </div>

      {/* Body — increased padding so text breathes away from card edges */}
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Clock size={10} />{post.readTime}
          </span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400">{post.date}</span>
        </div>

        <h3 className="font-bold text-base leading-snug mb-3" style={{ color: '#1B4332' }}>
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold" style={{ color: '#1B4332' }}>{post.author}</p>
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold group/btn"
            style={{ color: '#E07B39' }}
          >
            Read More
            <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Main page ──────────────────────────────── */
export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <>
      <PageBanner
        label="Insights & Analysis"
        title={<>AgroHelp <span style={{ color: '#E07B39' }}>Blog</span></>}
        subtitle="Expert perspectives on African agriculture, agritech, investment, and sustainable food systems."
      />

      <section className="py-28 bg-cream">
        <div className="container-custom">

          {/* Featured post */}
          {featured && (
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <span className="section-label">Latest Article</span>
              </motion.div>
              <FeaturedCard post={featured} />
            </div>
          )}

          {/* Grid of remaining posts */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="section-label">More Articles</span>
              <h2 className="section-title text-2xl md:text-3xl">Latest from the Blog</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {rest.map((post, i) => (
                <PostCard key={post.id} post={post} delay={i * 0.07} />
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="mt-20 mb-8 text-center p-12 md:p-16 rounded-4xl text-white"
            style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
          >
            <span className="section-label" style={{ color: '#E07B39' }}>Stay Informed</span>
            <h3 className="text-3xl font-extrabold text-white mb-3 mt-1">
              Get Articles Delivered to Your Inbox
            </h3>
            <p className="text-white/65 mb-7 max-w-md mx-auto text-sm">
              Join 2,000+ agricultural professionals receiving our weekly insights on African agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full text-sm text-gray-800 focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.95)' }}
              />
              <button className="btn-orange shrink-0 px-6">Subscribe Free</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
