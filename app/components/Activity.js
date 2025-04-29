import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./Video";


// components/Projects.js
const projects = [
  
  {
    title: 'Sprout - Plant Care System - SAIT Capstone 2025',
    description: 'I just completed my Software Development program at SAIT and wrapped up our capstone project',
    image: '/assets/capcon.jpeg', // Replace with your project screenshot
    link:'https://www.linkedin.com/feed/update/urn:li:activity:7322417779213533185/'
  },
  {
    title: 'Sprout - Plant Care System - SAIT Capstone 2025',
    description: 'I just completed my Software Development program at SAIT and wrapped up our capstone project',
    image: '/assets/capcon.jpeg', // Replace with your project screenshot
    link:'https://www.linkedin.com/feed/update/urn:li:activity:7322417779213533185/'
  },
  {
    title: 'Sprout - Plant Care System - SAIT Capstone 2025',
    description: 'I just completed my Software Development program at SAIT and wrapped up our capstone project',
    image: '/assets/capcon.jpeg', // Replace with your project screenshot
    link:'https://www.linkedin.com/feed/update/urn:li:activity:7322417779213533185/'
  },
 
];

const Activity = () => (
  <section id="projects" className="pb-4 lg:mb-35 items-center justify-center text-center max-w-7xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            
            <h3 className="text-xl font-semibold mb-2 text-gray-600">{project.title}</h3>
            <Image src={project.image} alt={project.title} quality={80} width={500} height={500}/>
            <p className="text-gray-600 text-justify">{project.description}</p>\
            {project.link && (
              <Link href={project.link} target="_blank" className="text-blue-500 hover:underline">
                See more details
                </Link>
            )}
          
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Activity;
