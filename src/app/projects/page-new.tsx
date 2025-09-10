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
  const [selectedImage, setSelectedImage] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = projectsData as Project[]
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  const openLightbox = (project: Project) => {
    setSelectedImage(project)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = parseInt(target.dataset.index || '0')
            setVisibleProjects(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const projects = document.querySelectorAll('.project-card')
    projects.forEach(project => observer.observe(project))

    return () => observer.disconnect()
  }, [filteredProjects])

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const isVisible = visibleProjects.includes(index)

    return (
      <div
        data-index={index}
        className={`project-card group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 transform ${
          isVisible
            ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
        onClick={() => openLightbox(project)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3] rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-slate-800 font-semibold text-sm">{project.category}</span>
          </div>

          {/* Hover Content */}
          <div className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 ${
            hoveredProject === index ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="text-center text-white bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{project.description}</p>
              <div className="mt-4 text-xs opacity-75">Click to view details</div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">{project.category}</span>
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>View Details</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Shadow Effect */}
        <div className="absolute inset-0 bg-slate-400 rounded-3xl transform translate-y-4 translate-x-4 -z-10 opacity-30 group-hover:translate-y-6 group-hover:translate-x-6 transition-transform duration-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-plumbing-light to-white">
      {/* Hero Section - Visual Gallery Introduction */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-plumbing-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="text-2xl">📸</span>
              <span className="text-plumbing-primary font-semibold">Project Gallery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Our <span className="text-plumbing-primary">Work</span> Speaks
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of successful plumbing projects that showcase our expertise,
              quality craftsmanship, and commitment to customer satisfaction.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">500+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">100%</div>
                <div className="text-slate-600 font-medium">Satisfaction Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-plumbing-primary mb-1">24/7</div>
                <div className="text-slate-600 font-medium">Service Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="sticky top-16 z-40 bg-white shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-plumbing-primary text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Each project represents our dedication to quality, precision, and customer satisfaction.
              Click on any image to explore the details.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-plumbing-primary to-plumbing-secondary rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Project?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your plumbing needs and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-plumbing-primary font-bold py-4 px-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* Project Details Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="bg-white rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-2">{selectedImage.title}</h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-plumbing-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                  <span className="text-slate-500">Professional Plumbing Service</span>
                </div>
              </div>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">What We Delivered</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'Professional assessment and planning',
                      'High-quality materials and workmanship',
                      'Code-compliant installation',
                      'Thorough testing and quality assurance',
                      'Complete cleanup and final inspection'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-plumbing-primary to-plumbing-secondary rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Need Similar Work Done?</h4>
                  <p className="mb-4 opacity-90">Get your free project consultation today!</p>
                  <div className="flex gap-3">
                    <a href="/contact" className="bg-white text-plumbing-primary px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-300">
                      Get Quote
                    </a>
                    <a href="/services" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
