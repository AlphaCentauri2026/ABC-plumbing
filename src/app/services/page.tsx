'use client'

import { useEffect, useState } from 'react'
import servicesData from '../../data/services.json'
import companyData from '../../data/company.json'

export default function ServicesPage() {
  const [visibleCards, setVisibleCards] = useState([])
  const [selectedService, setSelectedService] = useState(null)

  const serviceImages = [
    '/images/repair.jpg',      // Leak Repairs
    '/images/sinkr.jpg',       // Drain Cleaning
    '/images/pipe.jpg',        // Pipe Installation
    '/images/boiler.jpg',      // Water Heater Services
    '/images/snake1.jpg'       // Emergency Plumbing
  ]

  const serviceDetails = {
    'Leak Repairs': {
      price: '$150 - $500',
      duration: '1-3 hours',
      includes: ['Leak detection', 'Pipe repair/replacement', 'Water damage assessment', 'Quality guarantee'],
      description: 'Professional leak detection and repair services for all types of plumbing leaks. We use advanced equipment to locate hidden leaks and provide lasting solutions.'
    },
    'Drain Cleaning': {
      price: '$100 - $300',
      duration: '30 minutes - 2 hours',
      includes: ['Drain inspection', 'Professional cleaning', 'Clog removal', 'Preventive maintenance'],
      description: 'Complete drain cleaning services using high-pressure water jets and professional snake equipment to clear even the toughest clogs.'
    },
    'Pipe Installation': {
      price: '$200 - $2000',
      duration: '2-8 hours',
      includes: ['Pipe selection', 'Professional installation', 'Code compliance', 'Warranty coverage'],
      description: 'Expert pipe installation for residential and commercial properties. We work with all pipe materials and ensure proper code compliance.'
    },
    'Water Heater Services': {
      price: '$300 - $1500',
      duration: '2-6 hours',
      includes: ['Heater inspection', 'Repair or replacement', 'Safety checks', 'Energy efficiency optimization'],
      description: 'Complete water heater services including repair, maintenance, and replacement. We work with all brands and types of water heaters.'
    },
    'Emergency Plumbing': {
      price: '$200 - $800',
      duration: '30 minutes - 4 hours',
      includes: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'Damage prevention'],
      description: 'Round-the-clock emergency plumbing services. We respond within 30 minutes and provide immediate solutions to prevent further damage.'
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.service-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
               style={{backgroundImage: "url('/images/Technician1.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Professional plumbing solutions tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Services
              </a>
              <a href="/contact" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pipe1.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Professional Plumbing Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From emergency repairs to complete installations, we provide comprehensive plumbing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                data-index={index}
                className={`service-card backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group transform cursor-pointer ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service.title)}
              >
                <div className="relative h-48 bg-cover bg-center overflow-hidden" style={{backgroundImage: `url(${serviceImages[index]})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">#{index + 1}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                      <p className="text-white/80 text-sm">{serviceDetails[service.title]?.price}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Learn More
                    </span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
          <div className="backdrop-blur-md bg-white/90 border border-white/30 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">{selectedService}</h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {serviceDetails[selectedService]?.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Price Range</h4>
                  <p className="text-blue-600 font-semibold text-xl">{serviceDetails[selectedService]?.price}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Duration</h4>
                  <p className="text-green-600 font-semibold text-xl">{serviceDetails[selectedService]?.duration}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2">
                  {serviceDetails[selectedService]?.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <a href="/contact" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </a>
                <a href={`tel:${companyData.contact.phone}`} className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}