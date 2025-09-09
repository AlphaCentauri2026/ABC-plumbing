import Hero from '../components/Hero';
import About from '../components/About';
import ImageSlider from '../components/ImageSlider';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImageSlider />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
