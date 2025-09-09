'use client'

import { useEffect, useState } from 'react'
import companyData from '../data/company.json'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
             style={{backgroundImage: "url('/images/city2.jpg')"}}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {(() => {
          const [bubbles, setBubbles] = useState([]);
          useEffect(() => {
            setBubbles(
              Array.from({ length: 20 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }))
            );
          }, []);
          return bubbles.map((style, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={style}
            />
          ));
        })()}
      </div>

      {/* Glass morphism content card */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {companyData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
            {companyData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="group relative inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="/services" 
              className="group inline-block border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
