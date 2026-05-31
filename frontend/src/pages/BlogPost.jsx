import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar, User } from 'lucide-react';
import posts, { CATEGORY_COLORS } from '../data/blogPosts';
import Footer from '../components/Footer';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  /* 404 state */
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream gap-4">
        <h1 className="text-3xl font-extrabold" style={{ color: '#1B4332' }}>Post not found</h1>
        <Link to="/blog" className="text-sm font-semibold" style={{ color: '#E07B39' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const catColors = CATEGORY_COLORS[post.category] || { bg: 'rgba(107,114,128,0.1)', text: '#374151' };
  const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* ── Hero image ──────────────────────────────────── */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(27,67,50,0.90) 0%, rgba(27,67,50,0.45) 60%, transparent 100%)' }}
        />
        <div className="relative h-full flex flex-col justify-end pb-12 pt-28 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: catColors.bg, color: catColors.text, backdropFilter: 'blur(8px)' }}
              >
                <Tag size={10} />
                {post.category}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1.5">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mb-5 tracking-tight">
              {post.title}
            </h1>

            {/* Author + date row */}
            <div className="flex items-center gap-5 flex-wrap">
              <span className="text-white/80 text-sm flex items-center gap-2">
                <User size={13} className="opacity-70" />
                {post.author}
              </span>
              <span className="text-white/80 text-sm flex items-center gap-2">
                <Calendar size={13} className="opacity-70" />
                {post.date}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────── */}
      <section style={{ backgroundColor: '#F7F3ED' }} className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#E07B39' }}
              >
                <ArrowLeft size={15} />
                Back to Blog
              </Link>
            </motion.div>

            {/* Lead / excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg leading-relaxed font-medium mb-10 pb-10 border-b border-gray-200"
              style={{ color: '#374151' }}
            >
              {post.excerpt}
            </motion.p>

            {/* Article paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-7"
            >
              {post.content.map((para, i) => (
                <p key={i} className="text-gray-600 leading-[1.85] text-base">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 flex items-center gap-5 p-6 bg-white rounded-3xl"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                style={{ backgroundColor: '#1B4332' }}
              >
                {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="font-bold text-base" style={{ color: '#1B4332' }}>{post.author}</p>
                <p className="text-gray-500 text-sm mt-0.5">Agricultural Consultant & Author — AgroHelp Group</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Related posts ───────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-extrabold mb-8" style={{ color: '#1B4332' }}>
                More in {post.category}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {related.map(rp => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.id}`}
                    className="group bg-white overflow-hidden rounded-2xl hover:shadow-lg transition-shadow"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={rp.image.replace('w=1200&h=600', 'w=400&h=240')}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-bold text-sm leading-snug mb-1" style={{ color: '#1B4332' }}>
                        {rp.title}
                      </p>
                      <p className="text-xs text-gray-400">{rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F7F3ED' }} className="py-16">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#1B4332' }}>
            Want expert guidance for your agricultural project?
          </h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Our team of consultants is ready to turn your vision into a bankable reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-orange">Get in Touch</Link>
            <Link to="/blog" className="btn-primary">Read More Articles</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
