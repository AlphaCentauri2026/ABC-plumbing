'use client'

import { useEffect, useState } from 'react'
import companyData from '../data/company.json'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-plumbing-primary to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-plumbing-primary/5 to-aqua-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`about-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">{companyData.name}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full"></div>
            </div>
            
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                {companyData.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">10+</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">500+</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-slate-800 rounded-2xl p-4 shadow-2xl">
              <img
                src="/images/Technician2.jpg"
                alt="Professional plumbing technician"
                className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/50 border border-white/20 rounded-xl p-4">
                <p className="text-white font-semibold text-sm">Professional & Reliable</p>
                <p className="text-white/80 text-xs">Licensed & Insured Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
