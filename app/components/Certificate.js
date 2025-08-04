import Image from "next/image";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "November 11, 2024",
      credentialId: "AWS-CCP-2024-JN",
      description: "Foundational understanding of AWS Cloud, services, and terminology. Demonstrates knowledge of AWS architectural principles and value proposition.",
      image: "/assets/aws.png",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
      verificationLink: "https://aws.amazon.com/verification",
      color: "orange"
    },
    {
      title: "Google Search Certification",
      issuer: "Google",
      date: "May 18, 2025",
      credentialId: "GSC-2025-JN",
      description: "Advanced understanding of search algorithms, SEO best practices, and search engine optimization techniques.",
      image: "/assets/nextjs.jpeg",
      skills: ["SEO", "Search Algorithms", "Analytics", "Performance"],
      verificationLink: "https://google.com/verification",
      color: "blue"
    },
    {
      title: "Technical SEO",
      issuer: "LinkedIn Learning",
      date: "May 8, 2024",
      credentialId: "SEO-2024-JN",
      description: "Comprehensive knowledge of technical SEO implementation, site optimization, and search engine best practices.",
      image: "/assets/technicalseo.jpeg",
      skills: ["Technical SEO", "Site Speed", "Schema Markup", "Core Web Vitals"],
      verificationLink: "https://linkedin.com/learning/verification",
      color: "green"
    },
    {
      title: "Node.js Certification",
      issuer: "Code with Mosh",
      date: "November 11, 2023",
      credentialId: "NODEJS-2023-JN",
      description: "Advanced Node.js development skills including server-side programming, API development, and backend architecture.",
      image: "/assets/nodejs.png",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Database Integration"],
      verificationLink: "https://codewithmosh.com/verification",
      color: "emerald"
    },
    {
      title: "Learning Next.js",
      issuer: "LinkedIn Learning",
      date: "December 29, 2024",
      credentialId: "NEXTJS-2024-JN",
      description: "Modern React framework development including server-side rendering, static generation, and full-stack applications.",
      image: "/assets/nextjs.jpeg",
      skills: ["Next.js", "React", "SSR", "Static Generation"],
      verificationLink: "https://linkedin.com/learning/verification",
      color: "purple"
    },
    {
      title: "ISTQB Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      date: "Coming Soon",
      credentialId: "ISTQB-PENDING",
      description: "Foundation level certification in software testing principles, techniques, and best practices.",
      image: "/assets/istqb.png",
      skills: ["Software Testing", "Test Planning", "Quality Assurance", "Bug Tracking"],
      verificationLink: "#",
      color: "cyan",
      isPending: true
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: "border-orange-500/30 hover:border-orange-500 bg-orange-500/5",
      blue: "border-blue-500/30 hover:border-blue-500 bg-blue-500/5",
      green: "border-green-500/30 hover:border-green-500 bg-green-500/5",
      emerald: "border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/5",
      purple: "border-purple-500/30 hover:border-purple-500 bg-purple-500/5",
      cyan: "border-cyan-500/30 hover:border-cyan-500 bg-cyan-500/5"
    };
    return colors[color] || colors.blue;
  };

  const getBadgeColor = (color) => {
    const colors = {
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="certificates" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-950/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Professional <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Industry-recognized certifications demonstrating expertise in cloud computing, web development, and technical optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className={`relative group bg-gray-900/50 backdrop-blur-sm rounded-2xl border-2 ${getColorClasses(cert.color)} transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${cert.isPending ? 'opacity-80' : ''}`}>
            {cert.isPending && (
              <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded-full text-xs font-medium z-10">
                Coming Soon
              </div>
            )}
            
            <div className="relative h-48 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeColor(cert.color)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {!cert.isPending && (
                <div className="flex gap-2">
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg border ${getBadgeColor(cert.color)} hover:opacity-80 transition-opacity text-sm font-medium`}
                  >
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-emerald-400 mb-2">{certificates.filter(c => !c.isPending).length}</div>
          <div className="text-gray-300">Completed Certifications</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
          <div className="text-gray-300">Technology Domains</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-purple-400 mb-2">2024-2025</div>
          <div className="text-gray-300">Recent Achievements</div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
