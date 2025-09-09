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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
               style={{backgroundImage: "url('/images/tools2.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Ready to solve your plumbing problems? Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Send Message
              </a>
              <a href={`tel:${companyData.contact.phone}`} className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pipe.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-gray-800">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Describe your plumbing needs in detail..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Business Information */}
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-bold text-lg">{companyData.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-bold text-lg">{companyData.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-bold text-lg">{companyData.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Emergency Service</h4>
                    <p className="text-red-200 text-sm">Available 24/7</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  For urgent plumbing emergencies, call us immediately. We respond within 30 minutes.
                </p>
                <a 
                  href={`tel:${companyData.contact.phone}`}
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}