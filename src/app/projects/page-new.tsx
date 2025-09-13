'use client'

import { useState, useEffect } from 'react'
import projectsData from '../../data/projects.json'
import companyData from '../../data/company.json'

interface Project {
  title: string
  description: string
  image: string
  category: string
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All')
  const [isVisible, setIsVisible] = useState(false)

  const projects: Project[] = projectsData as Project[]
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-semibold">Project Gallery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Work</span> Speaks
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Explore our portfolio of successful plumbing projects that showcase our expertise,
              quality craftsmanship, and commitment to customer satisfaction.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-cyan-300 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-cyan-300 font-medium">Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-cyan-300 font-medium">Service Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="sticky top-16 z-40 bg-slate-800/90 backdrop-blur-sm shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Each project represents our dedication to quality, precision, and customer satisfaction.
            </p>
          </div>

          {/* Simple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white font-semibold text-sm">{project.category}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-semibold">Professional Service</span>
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white max-w-4xl mx-auto border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Project?</h3>
              <p className="text-xl mb-8 text-slate-300">
                Let's discuss your plumbing needs and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Project
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Call for Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}