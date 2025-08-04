import Image from "next/image";
import Link from "next/link";

const Hero = () => (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="border-b border-neutral-800 pb-16 lg:pb-20">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 animate-pulse">
                  John Nguyen
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 mb-6">
                  Full Stack Software Engineer
                </h2>
                <div className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-lg lg:text-xl font-semibold tracking-tight text-transparent">
                  Calgary, Canada • SAIT Graduate • AWS Certified
                </div>
              </div>
              
              {/* Key Technologies */}
              <div className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-base lg:text-lg font-semibold tracking-tight text-transparent text-center lg:text-left">
                Node.js • React • TypeScript • AWS • Docker • Python • .NET • DevOps
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 max-w-2xl text-center lg:text-left">
                Experienced Full Stack Developer with expertise in modern web technologies, cloud infrastructure, and real-time systems. 
                AWS Certified Cloud Practitioner with proven experience in building scalable applications, GPS tracking systems, and 
                implementing secure coding practices. Proficient in Agile methodologies and DevOps workflows.
              </p>

              {/* Certifications */}
              <div className="w-full max-w-2xl">
                <h3 className="text-emerald-400 font-semibold mb-3 text-center lg:text-left text-sm lg:text-base">Recent Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs lg:text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="font-medium text-white">AWS Cloud Practitioner</div>
                    <div className="text-gray-400">Nov 2024</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="font-medium text-white">Google Search Certified</div>
                    <div className="text-gray-400">May 2025</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="font-medium text-white">Technical SEO</div>
                    <div className="text-gray-400">May 2024</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <div className="font-medium text-white">Node.js Certified</div>
                    <div className="text-gray-400">Nov 2023</div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="w-full max-w-2xl">
                <h3 className="text-emerald-400 font-semibold mb-3 text-center lg:text-left text-sm lg:text-base">Core Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-2 lg:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs lg:text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">React.js</span>
                  <span className="px-2 lg:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs lg:text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors">Node.js</span>
                  <span className="px-2 lg:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs lg:text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors">TypeScript</span>
                  <span className="px-2 lg:px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs lg:text-sm font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors">AWS</span>
                  <span className="px-2 lg:px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs lg:text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">Docker</span>
                  <span className="px-2 lg:px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs lg:text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors">Python</span>
                  <span className="px-2 lg:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs lg:text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors">MongoDB</span>
                  <span className="px-2 lg:px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs lg:text-sm font-medium border border-red-500/30 hover:bg-red-500/30 transition-colors">PostgreSQL</span>
                  <span className="px-2 lg:px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs lg:text-sm font-medium border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors">Kubernetes</span>
                  <span className="px-2 lg:px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs lg:text-sm font-medium border border-pink-500/30 hover:bg-pink-500/30 transition-colors">.NET</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <Link href="./assets/resume/resume.pdf" 
                      className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold px-6 lg:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Download Resume</span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-lg lg:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path>
                  </svg>
                </Link>
                
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/in/hijohnnguyen/" className="group" aria-label="LinkedIn Profile">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-3xl lg:text-4xl text-gray-400 hover:text-blue-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>   
                  
                  <Link href="https://github.com/hinntam" className="group" aria-label="GitHub Profile">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="text-3xl lg:text-4xl text-gray-400 hover:text-purple-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </Link>
                  
                  <Link href="mailto:mailtam62@gmail.com" className="group" aria-label="Email Contact">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-3xl lg:text-4xl text-gray-400 hover:text-emerald-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
              <Image 
                src="/john.jpeg" 
                alt="John Nguyen - Full Stack Software Engineer" 
                width={280} 
                height={280} 
                className="relative rounded-2xl shadow-2xl border-4 border-gray-700 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105 w-full max-w-xs lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Hero;