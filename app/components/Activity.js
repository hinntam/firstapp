import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./Video";


// components/Projects.js
const projects = [
  {
    title: 'Employer session -ELK resources',
    description: 'This session is open to all students and alumni from the following School of Health & Public Safety',
    image: '/assets/1000009409.jpg', // Replace with your project screenshot
  },
  {
    title: 'Employer session -ELK resources',
    description: 'This session is open to all students and alumni from the following School of Health & Public Safety',
    image: '/assets/1000009419.jpg', // Replace with your project screenshot
  },
  {
    title: 'Employer session -ELK resources',
    description: 'This session is open to all students and alumni from the following School of Health & Public Safety',
    image: '/assets/1000009420.jpg', // Replace with your project screenshot
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
            <Image src={project.image} alt={project.title} width={300} height={200} />
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
            </div>
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Activity;
