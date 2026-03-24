const Skills = () => {
  const skillCategories = [
    {
      title: "SEO",
      skills: [
        { name: "Technical SEO", level: 95, color: "emerald", description: "Site structure, crawlability, indexing, and schema optimization" },
        { name: "On-Page SEO", level: 93, color: "blue", description: "Titles, meta descriptions, keyword mapping, and content relevance" },
        { name: "Off-Page SEO", level: 89, color: "purple", description: "Backlink audits and white-hat link building practices" },
        { name: "Local SEO", level: 91, color: "cyan", description: "Local ranking optimization on Google and Bing" },
        { name: "Core Web Vitals", level: 88, color: "violet", description: "Page speed and mobile-first performance improvements" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "WordPress", level: 92, color: "green", description: "Site management, content workflows, and structural optimization" },
        { name: "Yoast SEO", level: 92, color: "gray", description: "On-page controls, metadata, and structured optimization workflow" },
        { name: "Semrush", level: 89, color: "yellow", description: "Competitor research, keyword intelligence, and auditing" },
        { name: "Ahrefs", level: 88, color: "emerald", description: "Backlink analysis and keyword gap discovery" },
        { name: "Google Search Console", level: 91, color: "purple", description: "High-impression query analysis and indexing diagnostics" }
      ]
    },
    {
      title: "Ads & Analytics",
      skills: [
        { name: "Google Ads Search", level: 92, color: "blue", description: "Campaign management for high-intent traffic" },
        { name: "Google Ads Display", level: 87, color: "green", description: "Audience and placement strategy for reach and remarketing" },
        { name: "GA4", level: 90, color: "orange", description: "Conversion measurement and performance reporting" },
        { name: "Google Tag Manager", level: 89, color: "red", description: "Reliable event and conversion tracking setup" },
        { name: "Remarketing", level: 88, color: "yellow", description: "Re-engagement strategy to improve ad spend efficiency" }
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "ChatGPT", level: 91, color: "orange", description: "Drafting and optimization support for SEO content workflows" },
        { name: "GenAI", level: 88, color: "blue", description: "AI-assisted keyword and content ideation" },
        { name: "Copilot", level: 89, color: "cyan", description: "Workflow acceleration for technical tasks and automation" },
        { name: "GA4 AI Insights", level: 86, color: "blue", description: "Insight generation for campaign and content improvements" },
        { name: "Ads AI", level: 85, color: "green", description: "Optimization support for ad strategy and execution" }
      ]
    },
    {
      title: "Web & Engineering Foundations",
      skills: [
        { name: "HTML/CSS/JavaScript", level: 88, color: "emerald", description: "Practical implementation for web optimization tasks" },
        { name: "WordPress Customization", level: 89, color: "purple", description: "Front-end and content structure improvements" },
        { name: "Git", level: 90, color: "blue", description: "Version-controlled workflow and collaboration" },
        { name: "GitHub", level: 90, color: "red", description: "Repository management and branch-based collaboration" },
        { name: "UX Design Foundations", level: 86, color: "gray", description: "User-centered design decisions from SAIT training" }
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
          Marketing & <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Practical capabilities across SEO, paid media, analytics, AI-assisted optimization, and software foundations that support measurable business growth.
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
            "Site Architecture", "Internal Linking", "Mobile Usability", "Backlink Analysis", "Competitor Research",
            "Schema Markup", "White-Hat SEO", "Keyword Optimization", "Conversion Tracking", "Performance Marketing",
            "English - Fluent", "Vietnamese - Fluent"
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
