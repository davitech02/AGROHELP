import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyAgroHelp from '../components/WhyAgroHelp';
import WhoWeServe from '../components/WhoWeServe';
import BookConsultation from '../components/BookConsultation';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyAgroHelp />
      <WhoWeServe />
      <BookConsultation />
      <Team />
      <Footer />
    </main>
  );
}
