"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Activity = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const activities = [
    {
      id: 1,
      category: "education",
      title: "SAIT Software Development Diploma - Capstone Project",
      subtitle: "Sprout - AI-Powered Plant Care System",
      description: "Led a team of 4 developers to create an innovative plant care application using React Native, Node.js, and machine learning for automated plant health monitoring and care recommendations.",
      image: "/assets/capcon.jpeg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7322417779213533185/",
      date: "Dec 2024",
      achievements: ["Team Lead", "Full-Stack Development", "AI Integration", "Mobile App"],
      tech: ["React Native", "Node.js", "TensorFlow", "Firebase"],
      status: "completed"
    },
    {
      id: 2,
      category: "professional",
      title: "Google Search Central Certificate",
      subtitle: "Advanced SEO & Technical Implementation",
      description: "Completed comprehensive certification covering technical SEO, site architecture, mobile optimization, and search engine best practices for enterprise applications.",
      image: "/assets/technicalseo.jpeg",
      link: "https://developers.google.com/search",
      date: "Nov 2024",
      achievements: ["Technical SEO Expert", "Performance Optimization", "Mobile-First Design"],
      tech: ["SEO", "Web Performance", "Analytics", "Schema Markup"],
      status: "certified"
    },
    {
      id: 3,
      category: "community",
      title: "Open Source Contributor",
      subtitle: "Alberta Driving Test & GPS Applications",
      description: "Developed and maintain multiple open-source mobile applications serving the Alberta community, with over 8K+ combined downloads and active user engagement.",
      image: "/assets/github.jpeg",
      link: "https://github.com/hinntam",
      date: "Ongoing",
      achievements: ["8K+ Downloads", "Community Impact", "Open Source Maintainer"],
      tech: ["React Native", "Expo", "JavaScript", "GitHub"],
      status: "active"
    },
    {
      id: 4,
      category: "professional",
      title: "AWS Cloud Practitioner",
      subtitle: "Cloud Infrastructure & DevOps",
      description: "Certified in AWS cloud services, infrastructure management, and deployment strategies. Specialized in serverless architecture and cost optimization.",
      image: "/assets/aws.png",
      link: "https://aws.amazon.com/certification/",
      date: "Oct 2024",
      achievements: ["Cloud Architecture", "Cost Optimization", "Security Best Practices"],
      tech: ["AWS", "EC2", "S3", "Lambda", "CloudFormation"],
      status: "certified"
    },
    {
      id: 5,
      category: "education",
      title: "Advanced Node.js Development",
      subtitle: "Backend Architecture & Microservices",
      description: "Completed intensive training in Node.js ecosystem, focusing on scalable backend architecture, microservices design, and API development for enterprise applications.",
      image: "/assets/nodejs.png",
      link: "#",
      date: "Sep 2024",
      achievements: ["Microservices Architecture", "API Design", "Database Optimization"],
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      status: "completed"
    },
    {
      id: 6,
      category: "community",
      title: "Tech Mentorship Program",
      subtitle: "Guiding New Developers",
      description: "Actively mentoring junior developers and students transitioning into tech careers. Providing guidance on career development, technical skills, and industry best practices.",
      image: "/assets/sait.jpg",
      link: "#",
      date: "Ongoing",
      achievements: ["15+ Students Mentored", "Career Guidance", "Technical Training"],
      tech: ["Teaching", "Career Development", "Code Review", "Best Practices"],
      status: "active"
    }
  ];

  const categories = [
    { id: "all", name: "All Activities", icon: "🌟" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "professional", name: "Professional", icon: "💼" },
    { id: "community", name: "Community", icon: "🤝" }
  ];

  const filteredActivities = activeCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "completed": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "certified": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active": return "Active";
      case "completed": return "Completed";
      case "certified": return "Certified";
      default: return "In Progress";
    }
  };

  return (
    <section id="activities" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Professional <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Activities</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Showcasing my continuous learning journey, professional achievements, and contributions to the tech community.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg"
                : "bg-gray-900/50 text-gray-300 hover:text-white hover:bg-gray-800/70 border border-gray-700"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(activity.status)}`}>
                    {getStatusText(activity.status)}
                  </span>
                </div>
                <p className="text-emerald-400 font-medium mb-2">{activity.subtitle}</p>
                <p className="text-gray-400 text-sm">{activity.date}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={activity.image}
                alt={activity.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {activity.description}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
              <div className="flex flex-wrap gap-2">
                {activity.achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {activity.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            {activity.link && activity.link !== "#" && (
              <Link
                href={activity.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 pt-16 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-emerald-400 mb-2">6+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-blue-400 mb-2">8K+</div>
            <div className="text-gray-300">App Downloads</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Students Mentored</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
