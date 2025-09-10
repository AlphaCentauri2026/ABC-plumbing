'use client'

import { useState } from 'react'
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
      icon: '📞',
      title: 'Phone',
      value: companyData.contact.phone,
      description: 'Call us anytime',
      action: `tel:${companyData.contact.phone}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available Now',
      description: 'Instant response',
      action: '#chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📧',
      title: 'Email',
      value: companyData.contact.email,
      description: 'Send us details',
      action: `mailto:${companyData.contact.email}`,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: companyData.contact.address,
      description: 'Office location',
      action: '#location',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const serviceAreas = [
    'Long Island', 'Nassau County', 'Suffolk County', 'Queens', 'Brooklyn',
    'Manhattan', 'Bronx', 'Staten Island', 'Westchester', 'Connecticut'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-plumbing-light to-white">
      {/* Hero Section - Contact Hub Introduction */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl">📞</span>
              <span className="text-plumbing-primary font-semibold">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Get In <span className="text-plumbing-primary">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're here to help with all your plumbing needs. Choose your preferred way to connect with us,
              and we'll respond quickly with expert solutions.
            </p>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`bg-gradient-to-br ${method.color} p-6 rounded-2xl text-white text-center hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <div className="font-bold text-sm">{method.title}</div>
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
                  <span>{tab.icon}</span>
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
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours with expert advice and solutions.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 mb-3 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-700 mb-3 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-slate-700 mb-3 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-slate-700 mb-3 font-semibold">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-slate-700 mb-3 font-semibold">
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
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 mb-3 font-semibold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your plumbing needs in detail..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-plumbing-primary hover:bg-plumbing-secondary disabled:bg-slate-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>📤 Send Message</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="flex-1 border-2 border-plumbing-primary text-plumbing-primary hover:bg-plumbing-primary hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center space-x-2"
                    >
                      <span>📞 Call Now</span>
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
                    <div className="text-3xl mb-3">📍</div>
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
              <div className="text-6xl mb-6">🚨</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumbing Services
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Plumbing emergencies don't wait. We're available 24/7 to handle any urgent situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                  <p className="opacity-90">30-minute arrival for emergencies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                  <p className="opacity-90">Licensed professionals on duty</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl mb-3">🛡️</div>
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
                  className="inline-block bg-red-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  🚨 Call Emergency Line: {companyData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a problem to become an emergency. Contact us today for all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#form"
              onClick={() => setActiveSection('form')}
              className="bg-plumbing-primary hover:bg-plumbing-secondary text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Call {companyData.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
