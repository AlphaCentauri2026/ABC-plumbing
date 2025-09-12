'use client'

import { useState, useEffect } from 'react'
import servicesData from '../../data/services.json'
import companyData from '../../data/company.json'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Auto-rotate through services
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % servicesData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-plumbing-primary to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-plumbing-primary/5 to-aqua-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white font-semibold">Professional Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Plumbing</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover our comprehensive range of professional plumbing services designed to meet all your residential and commercial needs.
            </p>

            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['Residential', 'Commercial', 'Emergency', 'Maintenance'].map((category) => (
                <button
                  key={category}
                  className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 hover:border-slate-600 shadow-lg"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Service Details Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {servicesData[activeService].title}
                  </h2>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
                      <span className="text-cyan-300 font-semibold">{serviceDetails[servicesData[activeService].title]?.price}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
                      <span className="text-cyan-300 font-semibold">{serviceDetails[servicesData[activeService].title]?.duration}</span>
                    </div>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    {serviceDetails[servicesData[activeService].title]?.description}
                  </p>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4">What's Included:</h3>
                    {serviceDetails[servicesData[activeService].title]?.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Get Free Estimate</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {companyData.contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Image Showcase */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  {servicesData.map((service, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        activeService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  ))}

                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">{servicesData[activeService].title}</h3>
                      <p className="text-white/90 leading-relaxed">{servicesData[activeService].description}</p>
                    </div>
                  </div>
                </div>

                {/* Service Navigation Dots */}
                <div className="flex justify-center space-x-3 mt-6">
                  {servicesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeService === index
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`View ${servicesData[index].title} service`}
                    />
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce-subtle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Overview */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From emergency repairs to complete installations, we provide comprehensive plumbing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="mb-4">
                  {index === 0 && (
                    <svg className="w-12 h-12 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-12 h-12 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-12 h-12 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-12 h-12 mx-auto text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-12 h-12 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{serviceDetails[service.title]?.price}</span>
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-r from-plumbing-primary to-plumbing-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experience the difference that comes from a decade of excellence in plumbing services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Rapid Response', desc: 'Emergency calls answered within minutes' },
              { title: 'Fully Licensed', desc: 'Licensed, bonded, and insured technicians' },
              { title: 'Quality Guarantee', desc: '100% satisfaction guarantee on all work' },
              { title: 'Honest Pricing', desc: 'Transparent pricing with no hidden fees' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
                <div className="mb-3">
                  {index === 0 && (
                    <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-black font-bold py-5 px-10 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Emergency: {companyData.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
