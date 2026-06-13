import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import { useScrolledNavbar } from '../utils/animations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolledNavbar();
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const tx = t[language].nav;

  function handleNavClick(link, e) {
    if (link.href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      } else {
        document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  }

  const linkClass = (active) =>
    `px-5 py-2 rounded-full text-base font-semibold transition-all duration-200 whitespace-nowrap`;
  const linkStyle = (active) => ({
    backgroundColor: active ? 'rgba(255,255,255,0.18)' : 'transparent',
    color: active ? '#ffffff' : 'rgba(255,255,255,0.80)',
  });

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: '#1B4332',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.22)' : 'none',
        transition: 'box-shadow 0.35s ease',
      }}
    >

      {/* ── Desktop ──────────────────────────────────── */}
      <div className="container-custom hidden lg:flex items-center py-3 gap-6">

        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="AgroHelp" className="h-14 w-auto object-contain" />
        </Link>

        <div className="flex-1 flex items-center justify-center gap-1">
          {tx.links.map((link) => {
            const isActive = !link.href.startsWith('#') && location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href.startsWith('#') ? '/' : link.href}
                onClick={(e) => handleNavClick(link, e)}
                className={linkClass(isActive)}
                style={linkStyle(isActive)}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.80)';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="shrink-0 text-white px-6 py-2.5 rounded-full font-bold text-base transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#E07B39', boxShadow: '0 4px 20px rgba(224,123,57,.40)' }}
        >
          {tx.cta}
        </Link>

        {/* Language switcher */}
        <div className="shrink-0 flex items-center rounded-full p-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
          {['FR', 'EN'].map((lang) => {
            const active = language === lang.toLowerCase();
            return (
              <button
                key={lang}
                onClick={() => setLanguage(lang.toLowerCase())}
                className="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  backgroundColor: active ? '#ffffff' : 'transparent',
                  color: active ? '#1B4332' : 'rgba(255,255,255,0.65)',
                }}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile header ────────────────────────────── */}
      <div className="container-custom lg:hidden flex justify-between items-center py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AgroHelp" className="h-12 w-auto object-contain" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl text-white transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      {isOpen && (
        <div style={{ backgroundColor: '#143728', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container-custom flex flex-col gap-1 py-4 pb-6">
            {tx.links.map((link) => {
              const isActive = !link.href.startsWith('#') && location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href.startsWith('#') ? '/' : link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className="font-semibold px-4 py-3 rounded-2xl transition-all text-base"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.80)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 px-1 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-white text-center px-6 py-3.5 rounded-full font-bold text-base"
                style={{ backgroundColor: '#E07B39', boxShadow: '0 4px 20px rgba(224,123,57,.35)' }}
              >
                {tx.cta}
              </Link>
              <div className="flex items-center justify-center rounded-full p-0.5 self-start" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                {['FR', 'EN'].map((lang) => {
                  const active = language === lang.toLowerCase();
                  return (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang.toLowerCase())}
                      className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200"
                      style={{
                        backgroundColor: active ? '#ffffff' : 'transparent',
                        color: active ? '#1B4332' : 'rgba(255,255,255,0.65)',
                      }}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
