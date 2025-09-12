'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import companyData from '../data/company.json'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg border-b border-slate-200'
        : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
        <div className="flex justify-between items-center h-16 min-h-[4rem] py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group -ml-2">
            {/* Logo Image Container */}
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white border-2 border-plumbing-primary/20 shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <img
                src="/images/logo.jpg"
                alt="Plumbing Template Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Text Logo */}
              <div className="absolute inset-0 bg-plumbing-primary rounded-lg flex items-center justify-center text-white font-bold text-lg hidden">
                <span className="text-xl font-bold">P</span>
              </div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-xl group-hover:text-plumbing-primary transition-colors duration-300 leading-tight">
                Plumbing Template
              </span>
              <span className="text-slate-500 text-xs font-medium">
                Professional Plumbing Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-plumbing-primary px-3 py-2 rounded-lg hover:bg-plumbing-primary/5 transition-all duration-300 font-medium text-lg relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-plumbing-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${companyData.contact.phone}`}
              className="text-slate-900 hover:text-slate-700 font-semibold transition-colors duration-300 bg-white/80 px-3 py-2 rounded-lg shadow-sm hover:shadow-md"
            >
              {companyData.contact.phone}
            </a>
            <a
              href="#contact"
              className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-plumbing-primary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-slate-700 hover:text-plumbing-primary px-3 py-2 rounded-lg hover:bg-plumbing-primary/5 transition-all duration-300 font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="block text-slate-900 font-semibold px-3 py-2 bg-white/80 rounded-lg shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {companyData.contact.phone}
              </a>
              <a
                href="#contact"
                className="block bg-slate-800 hover:bg-slate-900 text-white px-3 py-2 rounded-lg font-semibold mt-2 text-center transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
