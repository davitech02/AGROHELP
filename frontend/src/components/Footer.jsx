import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const FOOTER_BG = '#0f3d2e';
const ORANGE     = '#E07B39';

export default function Footer() {
  const { language } = useLanguage();
  const tx = t[language].footer;

  return (
    <footer style={{ backgroundColor: FOOTER_BG, marginTop: '4rem' }} className="text-white">
      <div className="container-custom pt-16 pb-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img src={logo} alt="AgroHelp" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{tx.brandDesc}</p>
            <div className="flex gap-2.5">
              {[0,1,2,3].map(i => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-300 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '0.75rem' }}
                  onMouseEnter={e => e.currentTarget.style.background = ORANGE}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
                >
                  <Mail size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{tx.servicesHeading}</h4>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              {tx.serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-orange-accent transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{tx.companyHeading}</h4>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              {tx.companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-orange-accent transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter column */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">{tx.contactHeading}</h4>
            <ul className="space-y-3 text-gray-300 text-sm mb-7">
              <li className="flex items-center gap-2.5">
                <Phone size={14} style={{ color: ORANGE, flexShrink: 0 }} />
                <a href="tel:+33746332937" className="hover:text-orange-accent transition-colors">+33 7 46 33 29 37</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a href="https://wa.me/33746332937" target="_blank" rel="noopener noreferrer" className="hover:text-orange-accent transition-colors">
                  {tx.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} style={{ color: ORANGE, flexShrink: 0 }} />
                <a href="mailto:info@agrohelp.com" className="hover:text-orange-accent transition-colors">info@agrohelp.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: ORANGE, marginTop: '2px', flexShrink: 0 }} />
                <span>Rue des, Dijon (21000), France</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">{tx.newsletterLabel}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={tx.emailPlaceholder}
                  className="flex-1 min-w-0 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '0.875rem' }}
                  onFocus={e => e.currentTarget.style.borderColor = ORANGE}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
                />
                <button
                  aria-label="Subscribe"
                  className="w-11 h-11 flex items-center justify-center shrink-0 transition-opacity hover:opacity-90"
                  style={{ background: ORANGE, borderRadius: '0.875rem' }}
                >
                  <Mail size={16} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-400">
          <p>{tx.copyright}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-orange-accent transition-colors">{tx.privacyPolicy}</a>
            <a href="#" className="hover:text-orange-accent transition-colors">{tx.termsOfService}</a>
            <Link to="/contact" className="hover:text-orange-accent transition-colors">{tx.contactUs}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
