import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./Video";

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Alberta Driving Class 7',
      description: 'Comprehensive mobile application for Alberta Class 7 driving test preparation. Features interactive quizzes, practice tests, and detailed explanations. Built with React Native and full-stack backend.',
      longDescription: 'A complete learning management system for driving test preparation featuring user authentication, progress tracking, quiz management, and real-time score analytics. Includes offline support and multi-language capabilities.',
      technologies: ['React Native CLI', 'Node.js', 'MongoDB', 'Express.js', 'RESTful API', 'Kotlin', 'JWT Authentication'],
      image: '/assets/albertadrivingtest.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving&hl=en',
      codeLink: 'https://github.com/johnnguyen/alberta-driving',
      video: '/assets/albertadriving.mp4',
      category: 'Mobile Development',
      status: 'Published',
      downloads: '1K+',
      rating: 4.5,
      highlights: ['Published on Google Play Store', 'Real-time quiz system', 'Offline functionality', 'Multi-language support']
    },
    {
      title: 'GPS Tracking & Data Transfer System',
      description: 'Real-time GPS tracking system with WebSocket data transfer capabilities. Enables live location monitoring, route optimization, and data analytics for fleet management.',
      longDescription: 'Enterprise-grade GPS tracking solution with real-time data streaming, geofencing, route optimization, and comprehensive analytics dashboard. Supports multiple vehicle tracking with WebSocket communication.',
      technologies: ['Node.js', 'WebSocket', 'GPS API', 'PostgreSQL', 'React.js', 'Express.js', 'Redis', 'Docker'],
      image: '/assets/project.jpeg',
      demoLink: 'https://gps-tracking-demo.vercel.app',
      codeLink: 'https://github.com/johnnguyen/gps-tracking',
      video: '/assets/introduce.mp4',
      category: 'Full Stack Development',
      status: 'Enterprise',
      highlights: ['Real-time WebSocket communication', 'Geofencing capabilities', 'Route optimization', 'Fleet management dashboard']
    },
    {
      title: '600 GPLX Driver License App',
      description: 'Advanced driver license preparation app with 600+ practice questions. Features smart learning algorithms, mistake tracking, and personalized study plans.',
      longDescription: 'Intelligent learning platform for Vietnamese driver license preparation featuring adaptive learning algorithms, spaced repetition, detailed analytics, and personalized study recommendations.',
      technologies: ['React Native CLI', 'Node.js', 'MongoDB', 'Express.js', 'Machine Learning', 'Kotlin', 'Redux'],
      image: '/assets/movies.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.tododriver&hl=en',
      codeLink: 'https://github.com/johnnguyen/gplx-600',
      video: '/assets/gplx600.mp4',
      category: 'Mobile Development',
      status: 'Published',
      downloads: '5K+',
      rating: 4.7,
      highlights: ['AI-powered learning', '600+ questions database', 'Progress analytics', 'Offline study mode']
    },
    {
      title: 'Movies Discovery Platform',
      description: 'Modern movie discovery application with advanced search, personalized recommendations, and social features. Integrates multiple movie APIs for comprehensive data.',
      longDescription: 'Full-featured movie discovery platform with user authentication, watchlists, reviews, ratings, and social sharing. Features advanced filtering, recommendation engine, and responsive design.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Movie APIs', 'Prisma', 'PostgreSQL', 'Vercel'],
      image: '/assets/movies.png',
      demoLink: 'https://what-to-watch-blue.vercel.app/',
      codeLink: 'https://github.com/johnnguyen/what-to-watch',
      video: '/assets/whattowatch.mp4',
      category: 'Web Development',
      status: 'Live',
      highlights: ['Multiple API integration', 'Recommendation engine', 'Social features', 'Responsive design']
    },
    {
      title: 'Green Food Cooking Guide',
      description: 'Interactive cooking application with step-by-step instructions, ingredient management, and nutritional information. Features recipe search and meal planning.',
      longDescription: 'Comprehensive cooking companion app with recipe management, shopping lists, nutritional tracking, and social recipe sharing. Includes video tutorials and cooking timers.',
      technologies: ['React Native CLI', 'OpenAI API', 'Kotlin', 'Firebase', 'Nutrition API', 'Camera Integration'],
      image: '/assets/movies.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.codewithnguyen.todogreenfood&hl=en',
      codeLink: 'https://github.com/johnnguyen/green-food',
      video: '/assets/howtocook.mp4',
      category: 'Mobile Development',
      status: 'Published',
      downloads: '2K+',
      rating: 4.3,
      highlights: ['AI recipe suggestions', 'Nutritional tracking', 'Shopping list generator', 'Video tutorials']
    },
    {
      title: 'Parking Master - Smart Parking Solution',
      description: 'Intelligent parking management system with real-time availability tracking, reservation system, and payment integration. Uses Google Maps API for location services.',
      longDescription: 'Complete parking management ecosystem with real-time spot detection, reservation system, payment processing, and analytics dashboard for parking operators.',
      technologies: ['React Native', 'Google Maps API', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Socket.io'],
      image: '/assets/parkingmaster.jpg',
      demoLink: 'https://parking-master-demo.vercel.app',
      codeLink: 'https://github.com/manminder11/CPRG-303-Project',
      video: '/assets/parkingmaster.mp4',
      category: 'IoT & Smart City',
      status: 'Demo',
      highlights: ['Real-time availability', 'Payment integration', 'Smart notifications', 'Analytics dashboard']
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Published': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Live': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Demo': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Enterprise': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Mobile Development': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Web Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Full Stack Development': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'IoT & Smart City': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Featured <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A showcase of my recent work spanning mobile development, web applications, and enterprise solutions. 
          Each project demonstrates different aspects of my technical expertise and problem-solving abilities.
        </p>
      </div>

      {/* Project Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-1">{featuredProjects.length}</div>
          <div className="text-gray-300 text-sm">Projects</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">8K+</div>
          <div className="text-gray-300 text-sm">Downloads</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">4</div>
          <div className="text-gray-300 text-sm">Technologies</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">4.5★</div>
          <div className="text-gray-300 text-sm">Avg Rating</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            {/* Video/Image Section */}
            <div className="relative h-48 lg:h-56 overflow-hidden">
              {project.video ? (
                <VideoPlayer link={project.video} />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              {project.rating && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-yellow-400 text-sm font-medium">
                  ★ {project.rating}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                {project.downloads && (
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {project.downloads} downloads
                  </span>
                )}
              </div>

              <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              {project.highlights && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-400">
                        <svg className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-xs border border-gray-700 hover:border-emerald-500/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded-lg text-xs border border-gray-700">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm hover:scale-105"
                >
                  {project.status === 'Published' ? 'View on Store' : 'Live Demo'}
                </Link>
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm border border-gray-700 hover:border-emerald-500/50"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and exciting projects. 
            Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              href="#book-appointment"
              className="border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
