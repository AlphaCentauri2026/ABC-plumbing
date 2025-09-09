'use client'

import { useEffect, useState } from 'react'
import servicesData from '../data/services.json'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const serviceImages = [
    '/images/repair.jpg',      // Leak Repairs
    '/images/sinkr.jpg',       // Drain Cleaning
    '/images/pipe.jpg',        // Pipe Installation
    '/images/boiler.jpg',      // Water Heater Services
    '/images/snake1.jpg'       // Emergency Plumbing
  ]

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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/pipe1.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Professional plumbing solutions for residential and commercial properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`service-card backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-cover bg-center overflow-hidden" style={{backgroundImage: `url(${serviceImages[index]})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-semibold">#{index + 1}</span>
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
  )
}

export default Services;
