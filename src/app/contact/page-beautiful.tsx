'use client'

import { useState, useEffect } from 'react'
import companyData from '../../data/company.json'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'normal',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSection, setActiveSection] = useState('form')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', urgency: 'normal', message: '' })
    setIsSubmitting(false)
  }

  const services = [
    'Emergency Repair',
    'Leak Detection',
    'Drain Cleaning',
    'Pipe Installation',
    'Water Heater Service',
    'Bathroom Remodeling',
    'Kitchen Plumbing',
    'Other'
  ]

  const contactMethods = [
    {
      title: 'Phone',
      value: companyData.contact.phone,
      description: 'Call us anytime',
      action: `tel:${companyData.contact.phone}`
    },
    {
      title: 'Live Chat',
      value: 'Available Now',
      description: 'Instant response',
      action: '#chat'
    },
    {
      title: 'Email',
      value: companyData.contact.email,
      description: 'Send us details',
      action: `mailto:${companyData.contact.email}`
    },
    {
      title: 'Visit Us',
      value: companyData.contact.address,
      description: 'Office location',
      action: '#location'
    }
  ]

  const serviceAreas = [
    'Long Island', 'Nassau County', 'Suffolk County', 'Queens', 'Brooklyn',
    'Manhattan', 'Bronx', 'Staten Island', 'Westchester', 'Connecticut'
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
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white font-semibold">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We're here to help with all your plumbing needs. Choose your preferred way to connect with us,
              and we'll respond quickly with expert solutions.
            </p>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-white text-center hover:bg-white/20 transition-all duration-500 shadow-2xl hover:scale-105 hover:shadow-white/10"
                >
                  <div className="mb-4 flex justify-center">
                    {method.title === 'Phone' && (
                      <svg className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {method.title === 'Live Chat' && (
                      <svg className="w-12 h-12 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    )}
                    {method.title === 'Email' && (
                      <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {method.title === 'Visit Us' && (
                      <svg className="w-12 h-12 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="font-bold text-lg mb-2">{method.title}</div>
                  <div className="text-sm opacity-90 leading-relaxed">{method.description}</div>
                  <div className="mt-4 text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300">Click to connect →</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-white shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-100 p-2 rounded-2xl flex space-x-2">
              {[
                { id: 'form', label: 'Contact Form', icon: '📝' },
                { id: 'info', label: 'Contact Info', icon: 'ℹ️' },
                { id: 'areas', label: 'Service Areas', icon: '🗺️' },
                { id: 'emergency', label: 'Emergency', icon: '🚨' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === tab.id
                      ? 'bg-plumbing-primary text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.id === 'form' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                  {tab.id === 'info' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {tab.id === 'areas' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
                  {tab.id === 'emergency' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {activeSection === 'form' && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours with expert advice and solutions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-3 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-3 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-3 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-white mb-3 font-semibold">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      >
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service} className="bg-slate-800">{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-white mb-3 font-semibold">
                      Urgency Level
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'low', label: 'Low Priority', color: 'bg-green-100 text-green-800' },
                        { value: 'normal', label: 'Normal', color: 'bg-blue-100 text-blue-800' },
                        { value: 'high', label: 'High Priority', color: 'bg-orange-100 text-orange-800' },
                        { value: 'emergency', label: 'Emergency', color: 'bg-red-100 text-red-800' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.urgency === option.value
                              ? `${option.color} ring-2 ring-offset-2 ring-slate-300`
                              : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
                          }`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-3 font-semibold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                      placeholder="Describe your plumbing needs in detail..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-plumbing-primary hover:bg-plumbing-secondary disabled:bg-slate-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-slate-700 hover:border-slate-600 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Info Section */}
      {activeSection === 'info' && (
        <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Multiple ways to reach us - choose what works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`bg-gradient-to-br ${method.color} p-8 rounded-3xl text-white hover:scale-105 transition-all duration-300 shadow-lg block`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">{method.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                      <p className="text-white/90 mb-1">{method.value}</p>
                      <p className="text-white/80 text-sm">{method.description}</p>
                      <div className="mt-4 text-sm font-semibold opacity-75">Click to contact →</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      {activeSection === 'areas' && (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-plumbing-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We proudly serve residential and commercial customers throughout the greater metropolitan area.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-slate-200"
                  >
                    <svg className="w-8 h-8 mx-auto mb-3 text-plumbing-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="font-bold text-slate-800">{area}</h3>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Don't See Your Area?</h3>
                <p className="text-slate-600 mb-6">
                  We may still be able to help! Contact us to discuss your specific location and requirements.
                </p>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="inline-block bg-plumbing-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-plumbing-secondary transition-colors duration-300"
                >
                  Call to Discuss
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Emergency Section */}
      {activeSection === 'emergency' && (
        <section className="py-24 bg-gradient-to-r from-red-500 to-red-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <svg className="w-16 h-16 mx-auto mb-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumbing Services
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Plumbing emergencies don't wait. We're available 24/7 to handle any urgent situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <svg className="w-8 h-8 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                  <p className="opacity-90">30-minute arrival for emergencies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <svg className="w-8 h-8 mx-auto mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                  <p className="opacity-90">Licensed professionals on duty</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <svg className="w-8 h-8 mx-auto mb-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Damage Prevention</h3>
                  <p className="opacity-90">Minimize water damage quickly</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Emergency Contact</h3>
                <p className="text-slate-600 mb-6">
                  For plumbing emergencies, call us immediately. We're here to help prevent further damage.
                </p>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center border-2 border-red-600"
                >
                  <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Call Emergency Line: {companyData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-plumbing-primary to-plumbing-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for a problem to become an emergency. Contact us today for all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#form"
              onClick={() => setActiveSection('form')}
              className="bg-white text-plumbing-primary font-bold py-5 px-10 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Emergency: {companyData.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
