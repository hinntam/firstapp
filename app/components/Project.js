import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./Video";


// components/Projects.js
const projects = [
  {
    title: 'Alberta Driving Class 7',
    description: 'The Alberta Driving Class 7 is a mobile application that helps users prepare for the Class 7 knowledge test. The application is developed using JavaScript, React, and Tailwind CSS for styling. The project leverages a mix of languages including HTML, CSS, and JavaScript.',
    technologies: ['React native CLI', 'NodeJS', 'RestfullAPI','MongoDB','Express','Kotlin'],
    image: '/assets/movies.png', // Replace with your project screenshot
    demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en',
    codeLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en',
    video:'/assets/albertadriving.mp4'
  },
  {
    title: 'How to cook',
    description: 'Instruction how to cook food with ingredients and steps.',
    technologies: ['React native CLI', 'OpenAPI','Kotlin'],
    image: '/assets/movies.png', // Replace with your project screenshot
    demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todogreenfood&hl=en',
    codeLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todogreenfood&hl=en',
    video:'/assets/howtocook.mp4'
  },
  {
    title: '600 GPLX APP',
    description: 'Review drivers license 600 with questions you can easily mistake and 60 points listed for use.',
    technologies: ['React native CLI', 'OpenAPI','Kotlin','NodeJS','MongoDB','Express'],
    image: '/assets/movies.png', // Replace with your project screenshot
    demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.tododriver&hl=en',
    codeLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.tododriver&hl=en',
    video:'/assets/gplx600.mp4'
  },
  {
    title: 'Movies search App',
    description: 'The WhatToWatch allows to search movies through the keywords. The results displayed 5 movies random',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript','API movies'],
    image: '/assets/movies.png', // Replace with your project screenshot
    demoLink: 'https://what-to-watch-blue.vercel.app/',
    codeLink: 'https://github.com/myportfoliohttps://github.com/ding-dong-qiang/what-to-watch',
    video:'/assets/whattowatch.mp4'
  },
  {
    title: 'Sprout App',
    description: 'An application help to take care plant.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    image: '/assets/albertadrivingtest.png',
    demoLink: '#',
    codeLink: '#',
    video:'/assets/sprout.mp4'
  },
  {
    title: 'Parking Master App',
    description: 'It designed to help users find parking spots with ease. The application is developed using JavaScript, React Native, and Expo, with CSS for styling. The project leverages a mix of languages including Kotlin, Ruby, Objective-C++, JavaScript, and Objective-C..',
    technologies: ['React', 'Nextjs', 'GoogleMap API', 'Tailwind CSS'],
    image: '/assets/parkingmaster.jpg',
    demoLink: 'https://github.com/manminder11/CPRG-303-Project',
    codeLink: 'https://github.com/manminder11/CPRG-303-Project',
    video:'/assets/parkingmaster.mp4'
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
            
            <VideoPlayer link={project.video}/>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-bold">Technologies:</h4>
              <ul className="flex space-x-2 mt-2 overflow-x-auto">
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
