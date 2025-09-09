'use client'

import { useState, useEffect } from 'react'
import projectsData from '../../data/projects.json'

// Define types for better TypeScript support
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
               style={{backgroundImage: "url('/images/commercial1.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Explore our portfolio of successful plumbing projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#gallery" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Gallery
              </a>
              <a href="/contact" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/repair3.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Project Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our recent work and see the quality of our plumbing services
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white/20 text-gray-700 hover:bg-white/30 border border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                data-index={index}
                className={`project-card group backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{project.category}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Click to view details
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                      View Project
                    </span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedImage.title}</h3>
              <button 
                onClick={closeLightbox}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Project Details</h4>
                  <p className="text-white/80 leading-relaxed">{selectedImage.description}</p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <h5 className="text-lg font-bold text-white mb-4">Project Category</h5>
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                
                <div className="flex gap-4">
                  <a href="/contact" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105">
                    Get Similar Quote
                  </a>
                  <a href="/services" className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300">
                    Our Services
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