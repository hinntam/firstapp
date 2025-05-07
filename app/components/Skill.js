import Image from "next/image";
import Link from "next/link";

// components/Skills.js
const skills = [
    { 
    name: 'Docker', icon: '/javascript.png', level: '90%', description:'Containerization and management using Docker, Creating and managing Docker images and containers.Docker Compose for multi-container applications.',
    link:'https://moviesapp-ftc6edcvf9gwh3a7.canadacentral-01.azurewebsites.net'
    },
    { 
      name: 'Azure', icon: '/javascript.png', level: '90%', description:'Deploying and managing cloud applications using Azure App Services and Azure Functions. Implementing Azure DevOps for CI/CD pipelines.Managing Azure Virtual Machines, Containers, and Kubernetes (AKS). Azure AI Services for AI/ML model deployment and monitoring.',
      link:'https://moviesapp-ftc6edcvf9gwh3a7.canadacentral-01.azurewebsites.net'
    },
    { name: 'Hugging Face & AI Deployment', icon: '/icons/react.svg', level: '85%',description:'•	Fine-tuning and deploying NLP models using Hugging Face Transformers. Using Hugging Face API and Model Hub for model management. Implementing AI/ML pipelines using Azure Machine Learning or AWS SageMaker.',
      link:'https://huggingface.co/spaces/johnnnguyen/generationcode/'
    },
    { name: 'CI/CD', icon: '/icons/react.svg', level: '85%',description:'•	Building CI/CD pipelines using GitHub Actions, Azure DevOps. Automating testing, deployment, and monitoring using CI/CD. Implementing containerized deployments using Docker and Kubernetes.',
      link:'https://github.com/hinntam/'
    },
    { name: 'React native', icon: '/icons/react.svg', level: '85%',description:'•	Created responsive mobile application, cross-device layouts to ensure seamless functionality on various screen sizes. •	Used RESTful API in Nodejs with Express and MongoDB',
      link:'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en'
    },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: '80%', description:'Implementing API routes and middleware for backend functionality. Managing state and optimizing performance using React hooks and context API. Integrating authentication and authorization using NextAuth or Firebase Auth.',
      link:'https://hinntam.vercel.app/dog-api'
    },
   
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: '75%', description:'Developing RESTful APIs and microservices using Express.js and Node.js. Managing asynchronous operations using Promises, Async/Await, and EventEmitter. Implementing middleware for logging, authentication, and error handling. Working with databases like MongoDB, PostgreSQL, or Firebase.',
      link:'https://github.com/hinntam/'
    },
     { name: 'Software testing', icon: '/icons/nodejs.svg', level: '95%', description:'Designing and executing test cases, test plans, and test scripts for functional, regression, and performance testing. API testing using Postman. Writing unit and integration tests using Jest. Implementing CI/CD testing pipelines for automated testing using GitHub Actions.'
      , link:'https://www.istqb.org/'
     },
     { name: 'Software security', icon: '/icons/nodejs.svg', level: '95%', description:'Implementing authentication and authorization mechanisms using OAuth. Applying secure coding practices to prevent SQL injection, XSS, and CSRF attacks. Monitoring application security using cloud-native tools like AWS GuardDuty or Azure Security Center.'
      , link:'https://www.istqb.org/'
     },
     { name: 'Firebase', icon: '/icons/firebase.svg', level: '80%', description:'Developing serverless applications using Firebase Cloud Functions. Implementing real-time data synchronization using Firebase Firestore and Realtime Database. Managing authentication and user management with Firebase Authentication.',
      link:'https://fireapp-59839.web.app/harvestnail.html'
    },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: '85%', description:'Building responsive and mobile-friendly user interfaces using Tailwind CSS. Utilizing utility-first CSS for faster and consistent UI development.Implementing accessibility and responsiveness using Tailwind’s flex, grid, and spacing utilities.',
      link:'https://tailwindcss.com/'
    },
    { name: 'JavaScript', icon: '/javascript.png', level: '90%', description:'Proficient in modern JavaScript (ES6+) features such as Promises, async/await, and destructuring. Developing interactive and dynamic web applications using Vanilla JavaScript, DOM manipulation. Working with APIs using Fetch API and Axios for data retrieval and management.',
      link:'https://www.harvestnailspa.com/'
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
  