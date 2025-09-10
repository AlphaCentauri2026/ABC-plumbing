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
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyData.contact.phone}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyData.contact.email}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyData.contact.address}
              </p>
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
                <a href={companyData.socials.facebook} className="text-gray-300 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {companyData.socials.instagram && (
                <a href={companyData.socials.instagram} className="text-gray-300 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {companyData.socials.linkedin && (
                <a href={companyData.socials.linkedin} className="text-gray-300 hover:text-cyan-400 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
