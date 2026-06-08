import Hero from '../components/Hero';
import Enjeux from '../components/Enjeux';
import MissionVisionADN from '../components/MissionVisionADN';
import Services from '../components/Services';
import Team from '../components/Team';
import BookingSimple from '../components/BookingSimple';
import Temoignages from '../components/Temoignages';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Enjeux />
      <MissionVisionADN />
      <Services />
      <Team />
      <BookingSimple />
      <Temoignages />
      <Footer />
    </main>
  );
}
