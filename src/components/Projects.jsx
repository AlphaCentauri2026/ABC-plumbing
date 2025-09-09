'use client';

import { useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(project => project.category === filter);

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/repair3.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Explore our portfolio of successful plumbing projects
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
              className="group backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105" 
              onClick={() => openLightbox(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Project Info Overlay - Only on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                    View Details
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-100 transition duration-300"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-sm leading-relaxed mb-2">{selectedImage.description}</p>
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
