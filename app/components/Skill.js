import Image from "next/image";
import Link from "next/link";

// components/Skills.js
const skills = [
    { name: 'JavaScript', icon: '/javascript.png', level: '90%', description:'Made web with HTML, CSS and javascript',
      link:'https://hinntam.vercel.app/'
    },
    { name: 'React native', icon: '/icons/react.svg', level: '85%',description:'Made a mobile app with React Native and Firebase',
      link:'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en'
    },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: '80%', description:'Made this portfolio website with Next.js and Tailwind CSS',
      link:'https://nextjs.org/docs/getting-started'
    },
    { name: 'Firebase', icon: '/icons/firebase.svg', level: '80%', description:'Made authentication with Firebase and also made RestfulAPI with Firebase',
      link:'https://askcalgary.vercel.app/'
    },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: '85%', description:'Made this portfolio website with Tailwind CSS and React.js',
      link:'https://tailwindcss.com/docs/installation'
    },
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: '75%', description:'Made back-end server with Node.js and Express.js, and also made RestfulAPI with Node.js and Express.js',
      link:'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en'
    },
    { name: 'API', icon: '/icons/nodejs.svg', level: '95%', description:'RestfulAPI about about dogs such as list of dogs, list dogs by keywords,detail by ID and random dogs'
      , link:'https://hinntam.vercel.app/dog-api'
     },
     { name: 'Software testing', icon: '/icons/nodejs.svg', level: '95%', description:'Software testing and quality assurance process methodologies. Software testing in software development life cycle (SDLC)'
      , link:'https://www.istqb.org/'
     },
     { name: 'Software security', icon: '/icons/nodejs.svg', level: '95%', description:'Threat modelling, Secure coding practices, Web security, Access control, Cross-platform application security, Incident management, Emerging threats'
      , link:'https://www.istqb.org/'
     },
  ];
  
  const Skills = () => (
    <section id="skills" className="pb-4 lg:mb-35 items-center justify-center text-center max-w-7xl mx-auto px-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="my-20 text-center text-4xl">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4 mb-4">
              
                
              
                <h3 className="text-lg font-semibold text-black">{skill.name}</h3>
                

              </div>
              <div className="text-left">
                <div className="text-sm text-black">{skill.description}</div>
                <div className="  font-bold text-green-500"><Link href={skill.link}>Demo</Link></div>
              </div>
              <div>
                <div className="bg-gray-200 rounded-full h-3">
                
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-2">
                  {skill.level} Proficiency
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  