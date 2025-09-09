import companyData from '../data/company.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{backgroundImage: "url('/images/Vehicle2.jpg')"}}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{companyData.name}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {companyData.tagline}
            </p>
            <div className="flex space-x-4">
              <img src="/images/logo.jpg" alt="ABC Plumbing Logo" className="w-12 h-12 rounded-full object-cover" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Team</h4>
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/Technician1.jpg" alt="Technician 1" className="w-full h-16 object-cover rounded" />
              <img src="/images/Technician2.jpg" alt="Technician 2" className="w-full h-16 object-cover rounded" />
              <img src="/images/guy1.jpg" alt="Team Member 1" className="w-full h-16 object-cover rounded" />
              <img src="/images/guy2.jpg" alt="Team Member 2" className="w-full h-16 object-cover rounded" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 {companyData.contact.phone}</p>
              <p>✉️ {companyData.contact.email}</p>
              <p>📍 {companyData.contact.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Fleet</h4>
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/Vehicle1.jpg" alt="Service Vehicle 1" className="w-full h-16 object-cover rounded" />
              <img src="/images/Vehicle3.jpg" alt="Service Vehicle 2" className="w-full h-16 object-cover rounded" />
            </div>
            <h4 className="text-lg font-semibold mb-4 mt-6">Follow Us</h4>
            <div className="flex space-x-4">
              {companyData.socials.facebook && (
                <a href={companyData.socials.facebook} className="text-gray-300 hover:text-white transition duration-300">
                  <span className="text-2xl">📘</span>
                </a>
              )}
              {companyData.socials.instagram && (
                <a href={companyData.socials.instagram} className="text-gray-300 hover:text-white transition duration-300">
                  <span className="text-2xl">📷</span>
                </a>
              )}
              {companyData.socials.linkedin && (
                <a href={companyData.socials.linkedin} className="text-gray-300 hover:text-white transition duration-300">
                  <span className="text-2xl">💼</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
