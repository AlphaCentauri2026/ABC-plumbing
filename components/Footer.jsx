import companyData from '../data/company.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{companyData.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {companyData.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>{companyData.contact.phone}</p>
              <p>{companyData.contact.email}</p>
              <p>{companyData.contact.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
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
