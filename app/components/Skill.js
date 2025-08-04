import Image from "next/image";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "emerald", description: "Building modern, responsive web applications" },
        { name: "TypeScript", level: 90, color: "blue", description: "Type-safe JavaScript development" },
        { name: "Next.js", level: 88, color: "purple", description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: 92, color: "cyan", description: "Utility-first CSS framework" },
        { name: "Redux", level: 85, color: "violet", description: "State management for React apps" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 93, color: "green", description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 90, color: "gray", description: "Web application framework" },
        { name: "Python", level: 87, color: "yellow", description: "Versatile programming language" },
        { name: "Django", level: 82, color: "emerald", description: "Python web framework" },
        { name: ".NET", level: 80, color: "purple", description: "Microsoft development platform" },
        { name: "Java", level: 78, color: "orange", description: "Enterprise application development" }
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", level: 88, color: "blue", description: "Advanced relational database" },
        { name: "MongoDB", level: 85, color: "green", description: "NoSQL document database" },
        { name: "MySQL", level: 83, color: "orange", description: "Popular relational database" },
        { name: "Redis", level: 80, color: "red", description: "In-memory data structure store" },
        { name: "Firebase", level: 85, color: "yellow", description: "Google's mobile platform" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, color: "orange", description: "Amazon Web Services - EC2, S3, RDS" },
        { name: "Docker", level: 88, color: "blue", description: "Containerization platform" },
        { name: "Kubernetes", level: 82, color: "cyan", description: "Container orchestration" },
        { name: "Azure", level: 83, color: "blue", description: "Microsoft cloud platform" },
        { name: "CI/CD", level: 85, color: "green", description: "GitHub Actions, Azure DevOps" }
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "GPS Systems", level: 90, color: "emerald", description: "Real-time location tracking & data transfer" },
        { name: "WebSocket", level: 87, color: "purple", description: "Real-time bidirectional communication" },
        { name: "REST APIs", level: 92, color: "blue", description: "RESTful web service design" },
        { name: "JWT & OAuth2", level: 85, color: "red", description: "Authentication & authorization" },
        { name: "Security", level: 83, color: "gray", description: "XSS/CSRF prevention, OWASP standards" }
      ]
    }
  ];

  const getColorClasses = (color, level) => {
    const colors = {
      emerald: `bg-emerald-500/20 text-emerald-400 border-emerald-500/30`,
      blue: `bg-blue-500/20 text-blue-400 border-blue-500/30`,
      purple: `bg-purple-500/20 text-purple-400 border-purple-500/30`,
      cyan: `bg-cyan-500/20 text-cyan-400 border-cyan-500/30`,
      violet: `bg-violet-500/20 text-violet-400 border-violet-500/30`,
      green: `bg-green-500/20 text-green-400 border-green-500/30`,
      gray: `bg-gray-500/20 text-gray-400 border-gray-500/30`,
      yellow: `bg-yellow-500/20 text-yellow-400 border-yellow-500/30`,
      orange: `bg-orange-500/20 text-orange-400 border-orange-500/30`,
      red: `bg-red-500/20 text-red-400 border-red-500/30`
    };
    return colors[color] || colors.blue;
  };

  const getProgressColor = (color) => {
    const colors = {
      emerald: 'bg-emerald-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      cyan: 'bg-cyan-500',
      violet: 'bg-violet-500',
      green: 'bg-green-500',
      gray: 'bg-gray-500',
      yellow: 'bg-yellow-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500'
    };
    return colors[color] || 'bg-blue-500';
  };

  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Technical <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Comprehensive expertise across the full development stack, from frontend frameworks to cloud infrastructure and specialized systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(skill.color)} group-hover:scale-105 transition-transform`}>
                      {skill.name}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${getProgressColor(skill.color)} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Summary */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Additional Competencies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Agile/Scrum", "TDD/BDD", "Git/GitHub", "VS Code", "Eclipse", 
            "Postman", "Jest", "JMeter", "WCAG 2.2", "SEO Optimization",
            "React Native", "Mobile Development", "Progressive Web Apps"
          ].map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
