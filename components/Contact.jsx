'use client';

import { useState } from 'react';
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
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-800 font-semibold">{companyData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-800 font-semibold">{companyData.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-800 font-semibold">{companyData.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
