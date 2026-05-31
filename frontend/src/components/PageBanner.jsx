import { motion } from 'framer-motion';

/**
 * Reusable dark-green hero banner for all inner pages.
 * Props: label, title (string or JSX), subtitle, bg (optional image url)
 */
export default function PageBanner({ label, title, subtitle, bg }) {
  return (
    <>
      <section
        className="relative overflow-hidden pt-36 pb-60"
        style={{ backgroundColor: '#1B4332' }}
      >
        {/* Decorative glow blobs */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 520, height: 520,
            borderRadius: '50%',
            background: 'rgba(45,106,79,0.35)',
            filter: 'blur(80px)',
            transform: 'translate(35%, -40%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 340, height: 340,
            borderRadius: '50%',
            background: 'rgba(45,106,79,0.2)',
            filter: 'blur(60px)',
            transform: 'translate(-35%, 40%)',
          }}
        />

        {/* Optional background image overlay */}
        {bg && (
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${bg})`, opacity: 0.12 }}
          />
        )}

        <div className="relative container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-white/20"
              style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E07B39' }} />
              <span className="text-sm font-medium text-white/85 tracking-wide">{label}</span>
            </div>

            <h1 className="font-black leading-tight tracking-tight mb-0"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Wave transition to cream */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full block" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0 60L1440 60L1440 28C1200 60 960 0 720 28C480 56 240 0 0 28L0 60Z"
              fill="#F7F3ED" />
          </svg>
        </div>
      </section>

      {/* Subtitle rendered below the wave on cream background */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-cream text-center px-4 pt-10 pb-2"
        >
          <p className="text-gray-500 text-lg leading-relaxed mx-auto max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      )}
    </>
  );
}
