import companyData from '../data/company.json';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {companyData.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyData.description}
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/plumbing-about.jpg"
              alt="Professional plumbing services"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
