import EmergencyBanner from '../components/EmergencyBanner';
import Hero from '../components/Hero';
import SpecialOffers from '../components/SpecialOffers';
import Testimonials from '../components/Testimonials';
import CTAStrip from '../components/CTAStrip';
import About from '../components/About';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Hero />
      <SpecialOffers />
      <Testimonials />
      <CTAStrip />
      <About />
      <Services />
    </div>
  );
}
