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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-plumbing-primary to-slate-800 relative overflow-hidden">
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
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Customers</span> Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Join thousands of satisfied customers who trust us with their plumbing needs
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">4.9/5.0</div>
              <div className="text-sm text-slate-300">Average Rating</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-cyan-400">500+</div>
              <div className="text-sm text-slate-300">Happy Customers</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`testimonial-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${
                visibleCards.includes(index)
                  ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Customer Info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={customerImages[index]}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-cyan-400/20 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-bold text-lg">{testimonial.name}</p>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-cyan-400 text-sm font-semibold">Verified Customer</span>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  "{testimonial.feedback}"
                </p>

                {/* Service Type & Date */}
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <span>Residential Plumbing</span>
                  <span>2 weeks ago</span>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">Repeat Customer</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-cyan-400 text-sm font-semibold">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Satisfied Customers?
            </h3>
            <p className="text-slate-300 mb-6">
              Experience the ABC Plumbing difference today with our professional service and satisfaction guarantee.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
