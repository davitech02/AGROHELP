import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');
  const toggle = () => setLanguage(l => (l === 'en' ? 'fr' : 'en'));
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
