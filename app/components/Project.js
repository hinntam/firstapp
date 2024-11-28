import Image from "next/image";


// components/Projects.js
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    image: '/assets/project.jpeg', // Replace with your project screenshot
    demoLink: 'https://myportfolio.com',
    codeLink: 'https://github.com/myportfolio',
  },
  {
    title: 'Task Manager App',
    description: 'A task management app for organizing daily tasks efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/project.jpeg',
    demoLink: 'https://taskmanager.com',
    codeLink: 'https://github.com/taskmanager',
  },
  {
    title: 'Task Manager App',
    description: 'A task management app for organizing daily tasks efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/project.jpeg',
    demoLink: 'https://taskmanager.com',
    codeLink: 'https://github.com/taskmanager',
  },
];

const Projects = () => (
  <section id="projects" className="pb-4 lg:mb-35 items-center justify-center text-center max-w-7xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            
            <img src={project.image} alt="Example" width={500} height={500} />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-bold">Technologies:</h4>
              <ul className="flex space-x-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-gray-200 text-sm px-2 py-1 rounded-lg text-black"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
