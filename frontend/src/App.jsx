import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Platform from './pages/Platform';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"        element={<Home />}     />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/about"   element={<About />}    />
          <Route path="/services"element={<Services />} />
          <Route path="/platform"element={<Platform />} />
          <Route path="/partners"element={<Partners />} />
          <Route path="/blog"    element={<Blog />}     />
          <Route path="/blog/:id"element={<BlogPost />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
