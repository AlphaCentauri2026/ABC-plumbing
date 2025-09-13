'use client'

import { useEffect, useState } from 'react'
import companyData from '../data/company.json'

const CTAStrip = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-slate-800 via-plumbing-primary to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce-subtle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce-subtle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Fix Your Plumbing Issues?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get professional service with guaranteed satisfaction. Book today and experience the difference quality makes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm md:text-base">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Satisfaction Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm md:text-base">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="#contact"
              className="group bg-white hover:bg-slate-50 text-slate-900 hover:text-slate-800 font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center space-x-3 border-2 border-slate-300 hover:border-slate-400"
            >
              <svg className="w-6 h-6 text-plumbing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m0 0l-2-2m2 2l2-2m4-6v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2z" />
              </svg>
              <span>Get Free Estimate</span>
            </a>

            <a
              href={`tel:${companyData.contact.phone}`}
              className="group bg-slate-100 hover:bg-white text-slate-900 hover:text-slate-800 font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center space-x-3 border-2 border-slate-400 hover:border-slate-500"
            >
              <svg className="w-6 h-6 text-plumbing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call {companyData.contact.phone}</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Bonded</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Insured Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
