'use client'

import { useEffect, useState } from 'react'
import companyData from '../data/company.json'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    // Auto-rotate through services
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Leak Detection",
      description: "Advanced leak detection technology to find hidden water damage",
      image: "/images/pipe.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain unclogging for sinks, showers, and sewer lines",
      image: "/images/sink1.jpg",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Pipe Repair",
      description: "Expert pipe repair and replacement services for all plumbing needs",
      image: "/images/repair.jpg",
      color: "from-teal-500 to-blue-600"
    },
    {
      title: "Water Heaters",
      description: "Complete water heater installation, repair, and maintenance",
      image: "/images/boiler.jpg",
      color: "from-blue-600 to-indigo-600"
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-plumbing-primary to-slate-800 overflow-hidden">
      {/* Background Images Layer */}
      <div className="absolute inset-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeService === index ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-plumbing-primary/60 to-slate-800/80"></div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-plumbing-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-aqua-400/20 rounded-full blur-lg animate-bounce-subtle"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400/20 rounded-full blur-xl animate-bounce-subtle"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Trusted by 500+ Homes
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Plumbing</span>
                  <br />
                  Solutions
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Professional plumbing services with 15+ years of experience.
                  Fast response, guaranteed work, and exceptional customer service.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Free Estimate</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="group border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Emergency: {companyData.contact.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Licensed & Bonded</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Free Estimates</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Service Showcase */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative">
                {/* Main Service Image */}
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        activeService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}></div>
                    </div>
                  ))}

                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">{services[activeService].title}</h3>
                      <p className="text-white/90 leading-relaxed">{services[activeService].description}</p>
                    </div>
                  </div>
                </div>

                {/* Service Navigation Dots */}
                <div className="flex justify-center space-x-3 mt-6">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeService === index
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`View ${services[index].title} service`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
