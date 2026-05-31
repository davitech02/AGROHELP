import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

function LangToggle({ language, toggle, small }) {
  return (
    <div
      className="flex items-center p-0.5 shrink-0"
      style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '999px' }}
    >
      {['en', 'fr'].map((lang) => (
        <button
          key={lang}
          onClick={() => lang !== language && toggle()}
          className={`font-bold uppercase transition-all duration-200 ${small ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs'}`}
          style={{
            borderRadius: '999px',
            background: language === lang ? 'white' : 'transparent',
            color: language === lang ? '#1B4332' : 'rgba(255,255,255,0.65)',
          }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggle } = useLanguage();
  const tx = t[language].nav;

  return (
    <nav className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: '#1B4332' }}>

      {/* ── Desktop ──────────────────────────────────── */}
      <div className="container-custom hidden lg:flex items-center py-3 gap-4">

        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="AgroHelp" className="h-9 w-auto object-contain" />
        </Link>

        <div className="flex-1 flex items-center justify-center gap-1">
          {tx.links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.75)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Language toggle */}
        <LangToggle language={language} toggle={toggle} />

        {/* CTA */}
        <Link
          to="/contact"
          className="shrink-0 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#E07B39', boxShadow: '0 4px 20px rgba(224,123,57,.40)' }}
        >
          {tx.cta}
        </Link>
      </div>

      {/* ── Mobile header ────────────────────────────── */}
      <div className="container-custom lg:hidden flex justify-between items-center py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AgroHelp" className="h-9 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-2">
          <LangToggle language={language} toggle={toggle} small />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      {isOpen && (
        <div style={{ backgroundColor: '#143728', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container-custom flex flex-col gap-1 py-4 pb-6">
            {tx.links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium px-4 py-3 rounded-2xl transition-all text-sm"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.75)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 px-1">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-white text-center px-6 py-3.5 rounded-full font-bold text-sm"
                style={{ backgroundColor: '#E07B39', boxShadow: '0 4px 20px rgba(224,123,57,.35)' }}
              >
                {tx.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
