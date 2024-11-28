import Image from "next/image";

// components/Skills.js
const skills = [
    { name: 'JavaScript', icon: '/javascript.png', level: '90%' },
    { name: 'React', icon: '/icons/react.svg', level: '85%' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: '80%' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: '85%' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: '75%' },
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
              
                
              
                <h3 className="text-lg font-semibold">{skill.name}</h3>
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
  