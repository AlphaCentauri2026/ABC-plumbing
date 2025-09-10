'use client'

import { useEffect, useState } from 'react'
import testimonialsData from '../../data/testimonials.json'
import companyData from '../../data/company.json'

export default function TestimonialsPage() {
  const [visibleCards, setVisibleCards] = useState([])
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [filterRating, setFilterRating] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const customerImages = [
    '/images/happycustomer.jpg',
    '/images/Happy customer3.jpg',
    '/images/Happy customer4.jpg'
  ]

  const detailedTestimonials = [
    {
      ...testimonialsData[0],
      rating: 5,
      service: 'Emergency Leak Repair',
      date: '2024-01-15',
      location: 'Long Island, NY',
      story: 'I had a major water leak in my basement at 2 AM. ABC Plumbing responded within 20 minutes and had the leak fixed before it could cause serious damage. Their emergency service is truly outstanding!',
      verified: true,
      beforeAfter: {
        before: 'Leaking pipes causing water damage',
        after: 'Professional repair with warranty'
      }
    },
    {
      ...testimonialsData[1],
      rating: 5,
      service: 'Bathroom Renovation',
      date: '2024-02-03',
      location: 'Long Island, NY',
      story: 'We completely renovated our master bathroom and ABC Plumbing handled all the plumbing work. They were professional, clean, and finished on time. The quality of work exceeded our expectations.',
      verified: true,
      beforeAfter: {
        before: 'Outdated bathroom plumbing',
        after: 'Modern, efficient plumbing system'
      }
    },
    {
      ...testimonialsData[2],
      rating: 5,
      service: 'Water Heater Installation',
      date: '2024-01-28',
      location: 'Long Island, NY',
      story: 'Our old water heater finally gave out during a cold winter week. ABC Plumbing installed a new energy-efficient model the same day. The technician was knowledgeable and explained everything clearly.',
      verified: true,
      beforeAfter: {
        before: 'Old inefficient water heater',
        after: 'New energy-efficient system'
      }
    }
  ]

  const filteredTestimonials = detailedTestimonials.filter(testimonial => {
    if (filterRating === 'all') return true
    return testimonial.rating >= parseInt(filterRating)
  }).sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return b.rating - a.rating
  })

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

  const TestimonialCard = ({ testimonial, index }) => {
    const isVisible = visibleCards.includes(index)

    return (
      <div
        data-index={index}
        className={`testimonial-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden cursor-pointer ${
          isVisible ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setSelectedTestimonial(testimonial)}
      >
        {/* Customer Photo & Rating */}
        <div className="relative p-6 pb-0">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <img
                src={customerImages[index]}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-plumbing-primary/20 shadow-lg"
              />
              {testimonial.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-500">{testimonial.location}</p>
            </div>
          </div>
        </div>

        {/* Service Badge */}
        <div className="px-6 pb-4">
          <span className="inline-block bg-plumbing-primary/10 text-plumbing-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
            {testimonial.service}
          </span>
        </div>

        {/* Testimonial Text */}
        <div className="px-6 pb-6">
          <blockquote className="text-slate-600 leading-relaxed italic">
            "{testimonial.feedback}"
          </blockquote>
        </div>

        {/* Before/After Preview */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
          <div className="text-sm text-slate-600 mb-2">Transformation:</div>
          <div className="flex justify-between text-xs">
            <span className="text-red-500">❌ {testimonial.beforeAfter.before}</span>
            <span className="text-green-500">✅ {testimonial.beforeAfter.after}</span>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-plumbing-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-plumbing-primary">
            <div className="text-2xl mb-2">📖</div>
            <p className="font-semibold">Read Full Story</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-plumbing-light to-white">
      {/* Hero Section - Story-Based Introduction */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl">📖</span>
              <span className="text-plumbing-primary font-semibold">Customer Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Real <span className="text-plumbing-primary">Stories</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Every project tells a story. Read about real experiences from our satisfied customers
              who trusted us with their plumbing needs and got exceptional results.
            </p>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">4.9/5</div>
                <div className="text-slate-600 font-medium">Average Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">500+</div>
                <div className="text-slate-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">98%</div>
                <div className="text-slate-600 font-medium">Would Recommend</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">100%</div>
                <div className="text-slate-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Controls */}
      <section className="sticky top-16 z-40 bg-white shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 py-6">
            {/* Rating Filter */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-700">Rating:</span>
              {['all', '5', '4', '3'].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilterRating(rating)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    filterRating === rating
                      ? 'bg-plumbing-primary text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {rating === 'all' ? 'All' : `${rating} Stars`}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-700">Sort:</span>
              {[
                { value: 'recent', label: 'Most Recent' },
                { value: 'rating', label: 'Highest Rated' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    sortBy === option.value
                      ? 'bg-plumbing-primary text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Customer Experiences
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real stories from real customers who experienced our professional plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-plumbing-primary to-plumbing-secondary rounded-3xl p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h3>
              <p className="text-xl mb-8 opacity-90">
                Have you experienced our excellent service? We'd love to hear your story and share it with others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-plumbing-primary font-bold py-4 px-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Share Your Experience
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Call for Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Details Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedTestimonial(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-2">Customer Story</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-slate-500">{selectedTestimonial.location}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-500">{selectedTestimonial.date}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Customer Info */}
              <div className="lg:col-span-1">
                <div className="text-center">
                  <img
                    src={customerImages[detailedTestimonials.indexOf(selectedTestimonial)]}
                    alt={selectedTestimonial.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedTestimonial.name}</h3>
                  <div className="flex justify-center mb-3">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <div className="bg-plumbing-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {selectedTestimonial.service}
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Their Experience</h4>
                  <p className="text-slate-700 leading-relaxed text-lg italic">
                    "{selectedTestimonial.story}"
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Original Review</h4>
                  <p className="text-slate-700 leading-relaxed">
                    "{selectedTestimonial.feedback}"
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Transformation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">❌</div>
                      <h5 className="font-semibold text-slate-800 mb-1">Before</h5>
                      <p className="text-slate-600 text-sm">{selectedTestimonial.beforeAfter.before}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">✅</div>
                      <h5 className="font-semibold text-slate-800 mb-1">After</h5>
                      <p className="text-slate-600 text-sm">{selectedTestimonial.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="/contact" className="flex-1 bg-plumbing-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-plumbing-secondary transition-colors duration-300 text-center">
                    Get Similar Service
                  </a>
                  <a href="/services" className="flex-1 border-2 border-plumbing-primary text-plumbing-primary px-6 py-3 rounded-xl font-semibold hover:bg-plumbing-primary hover:text-white transition-all duration-300 text-center">
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
