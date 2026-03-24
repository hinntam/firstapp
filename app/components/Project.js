import Image from "next/image";
import Link from "next/link";


const Projects = () => {
  const featuredProjects = [
    {
      title: 'Local SEO Growth Program',
      description: 'Executed a technical and on-page SEO program that improved crawl efficiency, strengthened indexing quality, and increased local search visibility.',
      longDescription: 'Rebuilt site structure, optimized internal links and metadata, and prioritized high-impression pages from Search Console to lift CTR quality and inbound intent.',
      technologies: ['Technical SEO', 'Google Search Console', 'Yoast SEO', 'Schema', 'Internal Linking', 'Keyword Optimization'],
      image: '/web/booking.png',
      demoLink: '/webstudio',
      codeLink: 'https://www.linkedin.com/in/hijohnnguyen/',
      video: '/assets/bookingmaster.mp4',
      category: 'SEO Strategy',
      status: 'Ongoing',
      highlights: ['Reduced crawl friction through architecture cleanup', 'Improved SERP click quality with metadata refresh', 'Expanded local discovery for service keywords', 'Aligned content with high-intent search behavior']
    },
    {
      title: 'Google Ads Search & Display Optimization',
      description: 'Managed Search and Display campaigns with conversion-focused targeting, improving lead quality and budget efficiency.',
      longDescription: 'Implemented campaign segmentation, refined keyword and audience structure, and used GA4 + GTM data to guide recurring ROI optimization decisions.',
      technologies: ['Google Ads Search', 'Google Ads Display', 'GA4', 'Google Tag Manager', 'Remarketing', 'Conversion Tracking'],
      image: '/web/stripe.jpeg',
      demoLink: '/webstudio',
      codeLink: 'https://www.linkedin.com/in/hijohnnguyen/',
      video: '/assets/bookingmaster.mp4',
      category: 'Paid Media',
      status: 'Active',
      highlights: ['Improved targeting precision across two channels', 'Re-engaged high-intent users with remarketing', 'Lifted qualified lead potential', 'Improved spend allocation using tracked outcomes']
    },
    {
      title: 'AI-Assisted SEO Content Optimization',
      description: 'Implemented AI-supported content workflows to scale optimization cycles, keyword alignment, and user experience improvements.',
      longDescription: 'Leveraged ChatGPT, GenAI, Copilot, GA4 AI Insights, Yoast AI, and Ads AI to increase optimization velocity while maintaining search-intent fit and quality controls.',
      technologies: ['ChatGPT', 'GenAI', 'Copilot', 'GA4 AI Insights', 'Yoast AI', 'Ads AI'],
      image: '/assets/movies.png',
      demoLink: '/webstudio',
      codeLink: 'https://github.com/hinntam',
      video: '/assets/whattowatch.mp4',
      category: 'AI Workflow',
      status: 'Operational',
      highlights: ['Scaled content optimization throughput', 'Improved keyword targeting consistency', 'Integrated AI into SEO workflow decisions', 'Protected content quality with repeatable checks']
    },
    {
      title: 'SAIT Capstone Project - Mobile & Web Solution',
      description: 'Collaborated in a 4-member team to analyze requirements, build a Python-based class solution, and validate functionality with unit tests.',
      longDescription: 'Delivered capstone outcomes by combining requirement analysis, Visual Studio implementation, Git/GitHub collaboration, and disciplined test execution.',
      technologies: ['Python', 'Visual Studio', 'Git', 'GitHub', 'Unit Testing', 'Team Collaboration'],
      image: '/assets/albertadrivingtest.png',
      demoLink: '/webstudio',
      codeLink: 'https://github.com/hinntam',
      video: '/assets/albertadriving.mp4',
      category: 'Education Project',
      status: 'Completed',
      highlights: ['Analyzed and translated project requirements', 'Built Python-based deliverables', 'Executed branch and merge collaboration', 'Validated expected behavior with tests']
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Published': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Live': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Demo': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Enterprise': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Ongoing': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Active': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Operational': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Delivered': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Completed': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Mobile Development': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Web Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Full Stack Development': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'IoT & Smart City': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'SEO Strategy': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Paid Media': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'AI Workflow': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Web Performance': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Education Project': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Featured <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Case Studies</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Resume-aligned project highlights across SEO delivery, paid campaign optimization, AI workflows, and academic software collaboration.
        </p>
      </div>

      {/* Project Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-1">{featuredProjects.length}</div>
          <div className="text-gray-300 text-sm">Projects</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">2</div>
          <div className="text-gray-300 text-sm">Markets</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">Search + Display</div>
          <div className="text-gray-300 text-sm">Ads Channels</div>
        </div>
        <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">GA4 + GTM</div>
          <div className="text-gray-300 text-sm">Measurement Stack</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            {/* Image Section (Responsive) */}
            <div className="relative w-full h-48 lg:h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority={index < 2}
              />
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
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm hover:scale-105"
                >
                  View Case
                </Link>
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm border border-gray-700 hover:border-emerald-500/50"
                >
                  Learn More
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
            Let&apos;s align SEO, paid media, and analytics into one measurable growth roadmap for your business.
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
