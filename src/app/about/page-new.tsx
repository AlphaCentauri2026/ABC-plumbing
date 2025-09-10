'use client'

import { useEffect, useState } from 'react'
import companyData from '../../data/company.json'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      title: 'Our Story',
      subtitle: 'From Humble Beginnings to Industry Leaders',
      content: 'Founded in 2014 with a simple mission: provide honest, reliable plumbing services to Long Island homeowners and businesses. What started as a one-man operation has grown into Long Island\'s most trusted plumbing company.',
      stats: [
        { number: '10+', label: 'Years of Service' },
        { number: '500+', label: 'Happy Customers' },
        { number: '24/7', label: 'Emergency Support' }
      ],
      image: '/images/Technician1.jpg',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Our Values',
      subtitle: 'What Sets Us Apart',
      content: 'Quality craftsmanship, honest pricing, and rapid response aren\'t just promises - they\'re our daily commitment. Every technician is licensed, insured, and trained to deliver exceptional results.',
      values: [
        { icon: '⭐', title: 'Quality First', desc: 'Premium materials and expert craftsmanship' },
        { icon: '💰', title: 'Honest Pricing', desc: 'No hidden fees, transparent quotes' },
        { icon: '⚡', title: 'Rapid Response', desc: 'Emergency service within 30 minutes' },
        { icon: '🛡️', title: 'Fully Insured', desc: 'Licensed, bonded, and insured' }
      ],
      image: '/images/Technician2.jpg',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Our Team',
      subtitle: 'Meet the Experts Behind the Work',
      content: 'Our certified technicians bring decades of combined experience to every job. From emergency repairs to complex installations, our team delivers results you can trust.',
      team: [
        {
          name: 'Mike Johnson',
          role: 'Master Plumber & Owner',
          experience: '15+ years',
          specialties: 'Emergency Repairs, Pipe Installation'
        },
        {
          name: 'Sarah Davis',
          role: 'Senior Technician',
          experience: '12+ years',
          specialties: 'Water Heaters, Drain Cleaning'
        },
        {
          name: 'Tom Wilson',
          role: 'Commercial Specialist',
          experience: '10+ years',
          specialties: 'Commercial Plumbing, Renovations'
        }
      ],
      image: '/images/Technician3.jpg',
      gradient: 'from-teal-500 to-blue-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-plumbing-primary to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-plumbing-primary/5 to-aqua-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-white font-semibold">Trusted Since 2014</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Story</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              From humble beginnings to Long Island's most trusted plumbing service.
              Every project tells a story of quality, integrity, and exceptional service.
            </p>

            {/* Section Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === index
                      ? 'bg-white text-plumbing-primary shadow-2xl'
                      : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Current Section Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {sections[activeSection].title}
                  </h2>
                  <h3 className="text-xl text-cyan-300 mb-6 font-semibold">
                    {sections[activeSection].subtitle}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {sections[activeSection].content}
                  </p>
                </div>

                {/* Dynamic Content Based on Section */}
                {activeSection === 0 && sections[0].stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {sections[0].stats.map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                        <div className="text-cyan-300 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 1 && sections[1].values && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections[1].values.map((value, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="text-3xl mb-3">{value.icon}</div>
                        <h4 className="text-white font-bold mb-2">{value.title}</h4>
                        <p className="text-slate-300 text-sm">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 2 && sections[2].team && (
                  <div className="space-y-6">
                    {sections[2].team.map((member, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-white font-bold">{member.name}</h4>
                            <p className="text-cyan-300 text-sm">{member.role}</p>
                            <p className="text-slate-400 text-xs">{member.experience} • {member.specialties}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Get Free Estimate</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call {companyData.contact.phone}</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={sections[activeSection].image}
                    alt={sections[activeSection].title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sections[activeSection].gradient} opacity-40`}></div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    <span className="text-white font-semibold">Professional Service</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {sections[activeSection].title}
                    </h3>
                    <p className="text-white/90">
                      {sections[activeSection].subtitle}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce-subtle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose ABC Plumbing?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the difference that comes from a decade of excellence in plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Award Winning',
                desc: 'Recognized as Long Island\'s Best Plumbing Service'
              },
              {
                title: 'Fully Licensed',
                desc: 'Licensed, bonded, and insured for your protection'
              },
              {
                title: '5-Star Rated',
                desc: 'Consistently rated 4.9/5 by satisfied customers'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {index === 0 && (
                    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-12 h-12 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-plumbing-primary to-plumbing-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Long Island homeowners who trust ABC Plumbing with their most important systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-plumbing-primary font-bold py-5 px-10 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Emergency: {companyData.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}