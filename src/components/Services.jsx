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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-plumbing-primary/5 to-aqua-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Professional plumbing solutions for residential and commercial properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`service-card backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group transform ${
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Learn More
                  </span>
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
