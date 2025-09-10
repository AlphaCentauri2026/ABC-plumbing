'use client'

import { useState, useEffect } from 'react'
import servicesData from '../../data/services.json'
import companyData from '../../data/company.json'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [hoveredService, setHoveredService] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])

  const serviceImages = [
    '/images/repair.jpg',
    '/images/sinkr.jpg',
    '/images/pipe.jpg',
    '/images/boiler.jpg',
    '/images/snake1.jpg'
  ]

  const serviceDetails = {
    'Leak Repairs': {
      price: '$150 - $500',
      duration: '1-3 hours',
      includes: ['Leak detection', 'Pipe repair/replacement', 'Water damage assessment', 'Quality guarantee'],
      description: 'Professional leak detection and repair services for all types of plumbing leaks. We use advanced equipment to locate hidden leaks and provide lasting solutions.',
      features: ['Advanced leak detection', 'Same-day service', 'Warranty included', 'Emergency response']
    },
    'Drain Cleaning': {
      price: '$100 - $300',
      duration: '30 minutes - 2 hours',
      includes: ['Drain inspection', 'Professional cleaning', 'Clog removal', 'Preventive maintenance'],
      description: 'Complete drain cleaning services using high-pressure water jets and professional snake equipment to clear even the toughest clogs.',
      features: ['High-pressure cleaning', 'Video inspection', 'Preventive care', 'Eco-friendly methods']
    },
    'Pipe Installation': {
      price: '$200 - $2000',
      duration: '2-8 hours',
      includes: ['Pipe selection', 'Professional installation', 'Code compliance', 'Warranty coverage'],
      description: 'Expert pipe installation for residential and commercial properties. We work with all pipe materials and ensure proper code compliance.',
      features: ['All pipe types', 'Code compliant', 'Licensed installers', 'Extended warranty']
    },
    'Water Heater Services': {
      price: '$300 - $1500',
      duration: '2-6 hours',
      includes: ['Heater inspection', 'Repair or replacement', 'Safety checks', 'Energy efficiency optimization'],
      description: 'Complete water heater services including repair, maintenance, and replacement. We work with all brands and types of water heaters.',
      features: ['All brands serviced', 'Energy efficient', 'Safety certified', 'Maintenance plans']
    },
    'Emergency Plumbing': {
      price: '$200 - $800',
      duration: '30 minutes - 4 hours',
      includes: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'Damage prevention'],
      description: 'Round-the-clock emergency plumbing services. We respond within 30 minutes and provide immediate solutions to prevent further damage.',
      features: ['24/7 response', '30-minute arrival', 'Emergency repairs', 'Flood prevention']
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

  const ServiceCard = ({ service, index }) => (
    <div
      data-index={index}
      className={`service-card group relative cursor-pointer transition-all duration-500 ${
        visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredService(index)}
      onMouseLeave={() => setHoveredService(null)}
      onClick={() => setSelectedService(service.title)}
    >
      <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
        {/* 3D Card Effect */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          {/* Card Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={serviceImages[index]}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Service Badge */}
            <div className="absolute top-4 left-4 bg-plumbing-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {service.title}
            </div>

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-plumbing-primary/80 flex items-center justify-center transition-opacity duration-300 ${
              hoveredService === index ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🔧</div>
                <p className="font-semibold">Click to Learn More</p>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-plumbing-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Price & Duration */}
            <div className="flex justify-between items-center text-sm">
              <div className="text-plumbing-primary font-semibold">
                {serviceDetails[service.title]?.price}
              </div>
              <div className="text-slate-500">
                {serviceDetails[service.title]?.duration}
              </div>
            </div>

            {/* Features Preview */}
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceDetails[service.title]?.features.slice(0, 2).map((feature, i) => (
                <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Shadow Effect */}
        <div className="absolute inset-0 bg-slate-300 rounded-3xl transform translate-y-2 translate-x-2 -z-10 opacity-20 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-plumbing-light to-white">
      {/* Hero Section - Interactive Service Explorer */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-plumbing-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-aqua-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl">🔧</span>
              <span className="text-plumbing-primary font-semibold">Expert Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Professional <span className="text-plumbing-primary">Plumbing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of plumbing services designed to meet all your residential and commercial needs.
            </p>

            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Residential', 'Commercial', 'Emergency', 'Maintenance'].map((category) => (
                <div key={category} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200">
                  <span className="text-slate-700 font-semibold">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Service Offerings
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Click on any service card to explore detailed information, pricing, and what's included.
            </p>
          </div>

          {/* 3D Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Service Stats */}
          <div className="mt-24 bg-gradient-to-r from-plumbing-primary to-plumbing-secondary rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h3>
              <p className="text-white/90 text-lg">Experience the difference with our professional approach</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-2xl font-bold mb-2">Rapid Response</h4>
                <p className="text-white/90">Emergency calls answered within minutes</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-2xl font-bold mb-2">Fully Insured</h4>
                <p className="text-white/90">Licensed, bonded, and fully insured technicians</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h4 className="text-2xl font-bold mb-2">Quality Guarantee</h4>
                <p className="text-white/90">100% satisfaction guarantee on all services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-2">{selectedService}</h2>
                <div className="flex items-center space-x-4 text-lg">
                  <span className="text-plumbing-primary font-semibold">{serviceDetails[selectedService]?.price}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-600">{serviceDetails[selectedService]?.duration}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Service Description</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {serviceDetails[selectedService]?.description}
                </p>

                <h4 className="text-xl font-bold text-slate-800 mb-3">What's Included:</h4>
                <ul className="space-y-3">
                  {serviceDetails[selectedService]?.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {serviceDetails[selectedService]?.features.map((feature, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-plumbing-primary rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-slate-800 font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-plumbing-primary to-plumbing-secondary rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                  <p className="mb-4 opacity-90">Get your free estimate today!</p>
                  <div className="flex gap-3">
                    <a href="/contact" className="bg-white text-plumbing-primary px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-300">
                      Get Quote
                    </a>
                    <a href={`tel:${companyData.contact.phone}`} className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Service Not Listed?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We offer comprehensive plumbing solutions for any residential or commercial need.
            Contact us for custom service quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-plumbing-primary hover:bg-plumbing-secondary text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {companyData.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
