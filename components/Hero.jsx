import companyData from '../data/company.json';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: "url('/images/plumbing-hero.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {companyData.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {companyData.tagline}
        </p>
        <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
