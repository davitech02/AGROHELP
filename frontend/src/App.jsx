import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Platform from './pages/Platform';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><Home /></PageTransition>}     />
        <Route path="/contact"  element={<PageTransition><Contact /></PageTransition>}  />
        <Route path="/about"    element={<PageTransition><About /></PageTransition>}    />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/platform" element={<PageTransition><Platform /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/blog"     element={<PageTransition><Blog /></PageTransition>}     />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
