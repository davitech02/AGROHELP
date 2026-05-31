import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';
import Footer from '../components/Footer';

/* ── Circular social icon button ─────────────────────────────── */
function SocialBtn({ href, label, bg, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-85"
      style={{ backgroundColor: bg }}
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: 13, height: 13 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </a>
  );
}

/* ── Contact info rows ────────────────────────────────────────── */
const contactRows = [
  {
    Icon: MapPin,
    label: 'Head Office',
    lines: ['Rue des, Dijon (21000), France'],
    iconBg: 'rgba(27,67,50,0.10)',
    iconColor: '#1B4332',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    lines: ['info@agrohelp.com', 'consulting@agrohelp.com'],
    hrefs: ['mailto:info@agrohelp.com', 'mailto:consulting@agrohelp.com'],
    iconBg: 'rgba(224,123,57,0.12)',
    iconColor: '#E07B39',
  },
  {
    Icon: Phone,
    label: 'Call Us',
    lines: ['+33 7 46 33 29 37'],
    hrefs: ['tel:+33746332937'],
    iconBg: 'rgba(27,67,50,0.10)',
    iconColor: '#1B4332',
  },
];

/* ── Main page ────────────────────────────────────────────────── */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/contact`, formData);
      setSubmitted(true);
      setFormData({ name: '', company: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none text-sm placeholder-gray-400 transition-all duration-200'
    + ' bg-white'
    + ' focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10';

  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '320px' }}>
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=640&fit=crop&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark green tint overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.70) 100%)' }}
        />
        {/* Centered text */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight"
          >
            Contact us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/75 text-base max-w-md leading-relaxed"
          >
            AgroHelp is ready to provide the right agricultural solution according to your needs.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 2: Contact card ──────────────────────────────── */}
      <section style={{ backgroundColor: '#F7F3ED' }} className="pb-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl relative z-10 p-10"
            style={{
              marginTop: '-80px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
            }}
          >
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

              {/* ── LEFT: Get in touch ───────────────────── */}
              <div className="p-8">
                <h2 className="text-2xl font-extrabold mb-4" style={{ color: '#1B4332' }}>
                  Get in touch
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Our team is ready to assist you with any questions about agricultural
                  consulting, partnerships, and investment opportunities.
                </p>

                {/* Contact info rows */}
                <div className="space-y-6">
                  {contactRows.map(({ Icon, label, lines, hrefs, iconBg, iconColor }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: iconBg }}
                      >
                        <Icon size={18} style={{ color: iconColor }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: '#1B4332' }}>
                          {label}
                        </p>
                        {lines.map((line, j) =>
                          hrefs && hrefs[j] ? (
                            <a key={j} href={hrefs[j]} className="block text-gray-500 text-sm hover:text-[#E07B39] transition-colors">
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-gray-500 text-sm">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/33746332937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Message us on WhatsApp
                </a>

                {/* Divider */}
                <hr className="my-8 border-gray-100" />

                {/* Social media */}
                <p className="text-sm font-semibold text-gray-600 mb-4 mt-2">Follow our social media</p>
                <div className="flex gap-2.5">
                  {/* Facebook */}
                  <SocialBtn href="#" label="Facebook" bg="#1877F2">
                    <path
                      fill="white"
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                  </SocialBtn>

                  {/* Instagram */}
                  <SocialBtn href="#" label="Instagram" bg="#E1306C">
                    <g fill="none" stroke="white" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                    </g>
                    <circle fill="white" cx="17.5" cy="6.5" r="1.3" />
                  </SocialBtn>

                  {/* Twitter / X */}
                  <SocialBtn href="#" label="Twitter" bg="#1DA1F2">
                    <path
                      fill="white"
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    />
                  </SocialBtn>

                  {/* YouTube */}
                  <SocialBtn href="#" label="YouTube" bg="#FF0000">
                    <path
                      fill="white"
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
                    />
                    <polygon fill="#FF0000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </SocialBtn>
                </div>
              </div>

              {/* ── RIGHT: Send us a message form ───────────── */}
              <div className="p-8">
                <h2 className="text-2xl font-extrabold mb-4" style={{ color: '#1B4332' }}>
                  Send us a message
                </h2>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-5 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm font-medium"
                  >
                    ✓ Thank you! Your message has been sent. We'll respond shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                        Full Name <span style={{ color: '#E07B39' }}>*</span>
                      </label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required
                        className={inputCls} placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                        Company
                      </label>
                      <input
                        type="text" name="company" value={formData.company}
                        onChange={handleChange}
                        className={inputCls} placeholder="Organisation name"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                        Phone
                      </label>
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange}
                        className={inputCls} placeholder="+33 7 46 33 29 37"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                        Email <span style={{ color: '#E07B39' }}>*</span>
                      </label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required
                        className={inputCls} placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                      Subject <span style={{ color: '#E07B39' }}>*</span>
                    </label>
                    <input
                      type="text" name="subject" value={formData.subject}
                      onChange={handleChange} required
                      className={inputCls} placeholder="What is your inquiry about?"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#1B4332' }}>
                      Message <span style={{ color: '#E07B39' }}>*</span>
                    </label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} required rows="5"
                      className={`${inputCls} resize-none`}
                      placeholder="Tell us about your project, question, or how we can help…"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    style={{ backgroundColor: '#1B4332', letterSpacing: '0.04em' }}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: Google Maps ───────────────────────────────── */}
      <section>
        <iframe
          title="AgroHelp Location — Dijon, France"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85490.03!2d4.9411268!3d47.3228373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29da9e0a6bfb1%3A0xf85c32dd6a17b80!2sDijon%2C%20France!5e0!3m2!1sen!2sfr!4v1711500000000!5m2!1sen!2sfr"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
