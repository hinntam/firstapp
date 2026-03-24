import Image from "next/image";

const Certificates = () => {
  const certificates = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      date: "Dec 2025 - Dec 2026",
      credentialId: "GA-CERT-2025",
      description: "Validated competency in analytics strategy, event-driven measurement, reporting, and optimization through Google Analytics.",
      image: "/assets/nextjs.jpeg",
      skills: ["GA4", "Event Tracking", "Attribution", "Performance Analysis"],
      verificationLink: "https://skillshop.credential.net/",
      color: "blue"
    },
    {
      title: "Google Ads Search Certification",
      issuer: "Google",
      date: "May 2025 - May 2026",
      credentialId: "GADS-SEARCH-2025",
      description: "Demonstrates applied capability in building and optimizing Google Search campaigns focused on qualified traffic and conversions.",
      image: "/assets/technicalseo.jpeg",
      skills: ["Search Campaigns", "Keyword Strategy", "Ad Copy", "Conversion Goals"],
      verificationLink: "https://skillshop.credential.net/",
      color: "emerald"
    },
    {
      title: "Google Ads Display Certification",
      issuer: "Google",
      date: "Sep 2023 - Sep 2024",
      credentialId: "GADS-DISPLAY-2023",
      description: "Certified in display campaign fundamentals including audience strategy, placements, creative formats, and optimization.",
      image: "/assets/aws.png",
      skills: ["Display Ads", "Audience Segments", "Remarketing", "Campaign Optimization"],
      verificationLink: "https://skillshop.credential.net/",
      color: "orange"
    },
    {
      title: "Software Development Diploma",
      issuer: "SAIT, Calgary",
      date: "Completed Apr 2025",
      credentialId: "GPA 3.83 / 4.00",
      description: "Diploma foundation in software analysis, UX, databases, security, and full-stack development that strengthens technical marketing execution.",
      image: "/assets/sait.jpg",
      skills: ["Software Analysis", "Web Development", "UX", "Testing & Deployment"],
      verificationLink: "https://www.sait.ca/",
      color: "purple"
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
          Credentials that validate practical expertise in analytics, paid media, and performance-focused digital execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className={`relative group bg-gray-900/50 backdrop-blur-sm rounded-2xl border-2 ${getColorClasses(cert.color)} transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden`}>
            
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
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-emerald-400 mb-2">{certificates.length}</div>
          <div className="text-gray-300">Completed Certifications</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
          <div className="text-gray-300">Technology Domains</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <div className="text-3xl font-bold text-purple-400 mb-2">2023-2026</div>
          <div className="text-gray-300">Recent Achievements</div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
