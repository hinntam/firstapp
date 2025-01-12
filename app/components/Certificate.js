import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./Video";


// components/Projects.js
const certificate = [
  {
    title: 'NextJS',
    description: 'Next.js is a React framework that enables server-side rendering and static site generation for React applications.',
    image: '/assets/nextjs.jpeg', // Replace with your project screenshot
  },
  {
    title: 'Github',
    description: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.',
    image: '/assets/github.jpeg', // Replace with your project screenshot
  },
  {
    title: 'TechnicalSEO',
    description: 'Technical SEO refers to the process of optimizing your website for the crawling and indexing phase. With technical SEO, you can help search engines access, crawl, interpret and index your website without any problems.',
    image: '/assets/technicalseo.jpeg', // Replace with your project screenshot
  },
  {
    title: 'Nodejs',
    description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    image: '/assets/nodejs.png', // Replace with your project screenshot
  },
 
];

const Certificate = () => (
  <section id="projects" className="pb-4 lg:mb-35 items-center justify-center text-center max-w-7xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My certificate</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificate.map((project, index) => (
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

export default Certificate;
