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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/pipe.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`about-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
                About {companyData.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </div>
            
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {companyData.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">10+</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">500+</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
              <img
                src="/images/Technician2.jpg"
                alt="Professional plumbing technician"
                className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4">
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
