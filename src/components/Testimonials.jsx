'use client'

import { useEffect, useState } from 'react'
import testimonialsData from '../data/testimonials.json'

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const customerImages = [
    '/images/happycustomer.jpg',
    '/images/Happy customer3.jpg',
    '/images/Happy customer4.jpg'
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

    const cards = document.querySelectorAll('.testimonial-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/repair2.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`testimonial-card backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={customerImages[index]}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-bold text-lg">{testimonial.name}</p>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-green-600 text-sm font-semibold">Verified Customer</span>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed text-lg mb-6">
                  "{testimonial.feedback}"
                </p>
                
                {/* Bottom decoration */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    ))}
                  </div>
                  <div className="text-blue-600 text-sm font-semibold">
                    ⭐ 5.0 Rating
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

export default Testimonials;
