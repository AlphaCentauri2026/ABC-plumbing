'use client'

import { useState, useEffect } from 'react'
import companyData from '../data/company.json'

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`bg-gradient-to-r from-plumbing-primary to-plumbing-secondary text-white py-3 px-4 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-plumbing-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-semibold text-sm sm:text-base">24/7 Emergency Service Available</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm opacity-90">Call Now:</span>
          <a
            href={`tel:${companyData.contact.phone}`}
            className="font-bold text-lg hover:text-aqua-200 transition-colors duration-300 flex items-center space-x-2 group"
            aria-label={`Call ${companyData.contact.phone} for emergency plumbing services`}
          >
            <svg className="w-5 h-5 group-hover:animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{companyData.contact.phone}</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-2 mt-2 sm:mt-0">
          <span className="text-xs opacity-75">✓ Licensed & Insured</span>
          <span className="text-xs opacity-75">•</span>
          <span className="text-xs opacity-75">✓ Same Day Service</span>
        </div>
      </div>
    </div>
  )
}

export default EmergencyBanner
