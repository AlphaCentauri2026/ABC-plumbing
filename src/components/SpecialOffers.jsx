'use client'

import { useEffect, useState } from 'react'

const SpecialOffers = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const offers = [
    {
      title: "Free Drain Inspection",
      description: "Complete drain inspection with camera at no cost",
      discount: "100% OFF",
      validUntil: "Limited Time",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Pipe Installation",
      description: "20% off new pipe installation and repairs",
      discount: "20% OFF",
      validUntil: "This Month",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Emergency Service",
      description: "Priority scheduling for emergency repairs",
      discount: "50% OFF",
      validUntil: "After Hours",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-plumbing-light to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Special Offers & Savings
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Take advantage of our current promotions and save on professional plumbing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-slate-100 hover:border-plumbing-primary/20 relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Ribbon */}
              <div className="absolute top-0 right-0 bg-plumbing-primary text-white px-4 py-1 text-sm font-semibold transform rotate-12 translate-x-2 -translate-y-1">
                {offer.validUntil}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-plumbing-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-plumbing-primary/20 transition-colors duration-300">
                <div className="text-plumbing-primary group-hover:text-plumbing-secondary transition-colors duration-300">
                  {offer.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="inline-block bg-plumbing-primary text-white font-bold text-xl px-4 py-2 rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {offer.discount}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-plumbing-primary transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-plumbing-primary/5 to-aqua-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to Save on Plumbing Services?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on these limited-time offers. Contact us today to schedule your service and take advantage of our current promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group bg-white hover:bg-slate-50 text-slate-900 hover:text-slate-800 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-slate-300 hover:border-slate-400"
              >
                Claim Your Offer
              </a>
              <a
                href="/services"
                className="group bg-slate-100 hover:bg-white text-slate-900 hover:text-slate-800 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-slate-400 hover:border-slate-500"
              >
                View All Services
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              *Offers valid for new customers only. Cannot be combined with other promotions. Terms apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
