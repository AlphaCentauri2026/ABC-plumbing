import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
