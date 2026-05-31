import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Platform', href: '/platform' },
  { label: 'Partners', href: '/partners' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: '#1B4332' }}
    >
      {/* ── Desktop ─────────────────────────────── */}
      <div className="container-custom hidden lg:flex items-center py-3 gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="AgroHelp" className="h-9 w-auto object-contain" />
        </Link>

        {/* Nav links — each in its own pill */}
        <div className="flex-1 flex items-center justify-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: isActive
                    ? 'rgba(255,255,255,0.18)'
                    : 'transparent',
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

        {/* CTA */}
        <Link
          to="/contact"
          className="shrink-0 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#E07B39', boxShadow: '0 4px 20px rgba(224,123,57,.40)' }}
        >
          Get Connected
        </Link>
      </div>

      {/* ── Mobile header ──────────────────────── */}
      <div className="container-custom lg:hidden flex justify-between items-center py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AgroHelp" className="h-9 w-auto object-contain" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl text-white transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ──────────────────────── */}
      {isOpen && (
        <div style={{ backgroundColor: '#143728', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container-custom flex flex-col gap-1 py-4 pb-6">
            {navLinks.map((link) => {
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
                Get Connected
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
