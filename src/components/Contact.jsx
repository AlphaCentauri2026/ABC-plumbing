"use client";

import { useState, useEffect } from "react";
import companyData from '../data/company.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit handler - in a real app, this would send data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{backgroundImage: "url('/images/tools2.jpg')"}}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {(() => {
          const [bubbles, setBubbles] = useState([]);
          useEffect(() => {
            setBubbles(
              Array.from({ length: 15 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }))
            );
          }, []);
          return bubbles.map((style, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={style}
            />
          ));
        })()}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to solve your plumbing problems? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
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
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Tell us about your plumbing needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-bold text-lg">{companyData.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-bold text-lg">{companyData.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
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
            
            {/* Emergency Contact Card */}
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
              <p className="text-white/90 text-sm">
                For urgent plumbing emergencies, call us immediately. We respond within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
