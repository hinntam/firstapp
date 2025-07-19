import Image from "next/image";
import Link from "next/link";

// components/Skills.js
const skills = [
    { 
    name: 'Docker', icon: '/javascript.png', level: '90%', description:'Containerization and management using Docker, Creating and managing Docker images and containers.Docker Compose for multi-container applications.',
    link:'https://moviesapp-ftc6edcvf9gwh3a7.canadacentral-01.azurewebsites.net',
    image:'/docker.png'
    },
    { 
      name: 'Azure', icon: '/javascript.png', level: '90%', description:'Deploying and managing cloud applications using Azure App Services and Azure Functions. Implementing Azure DevOps for CI/CD pipelines.Managing Azure Virtual Machines, Containers, and Kubernetes (AKS). Azure AI Services for AI/ML model deployment and monitoring.',
      link:'https://moviesapp-ftc6edcvf9gwh3a7.canadacentral-01.azurewebsites.net',
      image:'/azure.png'
    },
    { name: 'Hugging Face & AI Deployment', icon: '/icons/react.svg', level: '85%',description:'•	Fine-tuning and deploying NLP models using Hugging Face Transformers. Using Hugging Face API and Model Hub for model management. Implementing AI/ML pipelines using Azure Machine Learning or AWS SageMaker.',
      link:'https://huggingface.co/spaces/johnnnguyen/generationcode/',
      image:'/coder.png'
    },
  
    { name: 'React native', icon: '/icons/react.svg', level: '85%',description:'•	Created responsive mobile application, cross-device layouts to ensure seamless functionality on various screen sizes. •	Used RESTful API in Nodejs with Express and MongoDB',
      link:'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en',
      image:'/react-native.png'  
    },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: '80%', description:'Implementing API routes and middleware for backend functionality. Managing state and optimizing performance using React hooks and context API. Integrating authentication and authorization using NextAuth or Firebase Auth.',
      link:'https://hinntam.vercel.app/dog-api',
      image:'/nextjs.png'
    },
   
    
     { name: 'Firebase', icon: '/icons/firebase.svg', level: '80%', description:'Developing serverless applications using Firebase Cloud Functions. Implementing real-time data synchronization using Firebase Firestore and Realtime Database. Managing authentication and user management with Firebase Authentication.',
      link:'https://fireapp-59839.web.app/harvestnail.html',
      image:'/nail.png'
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
              <Image src={skill.image} alt="John Nguyen" width={400} height={400} className="rounded-t-lg" />

              <div className="flex items-center space-x-4 mb-4">

                
                <h3 className="text-lg font-semibold text-black">{skill.name}</h3>
                

              </div>
              <div className="text-left">
                <div className="text-sm text-black">{skill.description}</div>
                <div className="  font-bold text-green-500"><Link href={skill.link}>Demo</Link></div>
              </div>
              <div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  