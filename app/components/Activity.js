"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Activity = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const activities = [
    {
      id: 1,
      category: "professional",
      title: "IT Support & Help Desk",
      subtitle: "Deluxe Nail Bar | Carrington, Calgary, AB | Present",
      description: "Maintain and troubleshoot IT systems and user support requests.",
      image: "/assets/onlinebookingsystem.jpg",
      link: "https://www.linkedin.com/in/hijohnnguyen/",
      date: "Present",
      achievements: [
        "Maintain business website content and functionality using WordPress",
        "Investigate website performance and usability issues, then test changes",
        "Translate business needs into practical technical updates",
        "Communicate progress and explain technical decisions in accessible language",
        "Coordinate ongoing tasks and follow through on requested changes"
      ],
      tech: ["WordPress", "Troubleshooting", "Communication", "Task Coordination"],
      status: "active"
    },
    
    {
      id: 3,
      category: "education",
      title: "SAIT Capstone Project",
      subtitle: "Mobile & Web Solution | Jan 2024 - Apr 2024",
      description: "Collaborated with a 4-member team to analyze requirements, communicate progress, and validate a Python solution against expected behavior.",
      image: "/assets/capcon.jpeg",
      link: "https://github.com/",
      date: "Jan 2024 - Apr 2024",
      achievements: [
        "Collaborated with a 4-member team to analyze requirements and develop a Python-based Book class",
        "Implemented version control using Git and GitHub with branch and merge workflows",
        "Developed and executed unit tests to validate functionality",
        "Coordinated through scheduled meetings and Microsoft Teams"
      ],
      tech: ["Python", "Visual Studio", "Git", "GitHub", "Unit Testing"],
      status: "completed"
    },
    {
      id: 4,
      category: "community",
      title: "Volunteer - Calgary Food Bank",
      subtitle: "Calgary, AB | Apr 2024 - Present",
      description: "Contributing to warehouse and event operations through reliable teamwork and safety-focused execution.",
      image: "/assets/calgaryfoodbank.jpg",
      link: "https://www.calgaryfoodbank.com/",
      date: "Apr 2024 - Present",
      achievements: [
        "Supported warehouse operations by sorting and organizing food donations",
        "Participated in major events including Purolator Tackle Hunger and Quarry Park Co-op Stampede Breakfast",
        "Followed safety procedures and collaborated effectively with team members"
      ],
      tech: ["Operations", "Coordination", "Safety Compliance"],
      status: "active"
    }
  ];

  const categories = [
    { id: "all", name: "All Activities", icon: "All" },
    { id: "education", name: "Education", icon: "Edu" },
    { id: "professional", name: "Professional", icon: "Work" },
    { id: "community", name: "Community", icon: "Volunteer" }
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
          Education &amp; <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A focused overview of my technical education, project collaboration, professional experience, and community contribution.
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
              <div className="flex flex-col gap-2">
                {activity.achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs font-medium"
                  >
                    - {achievement}
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
            <div className="text-3xl font-bold text-emerald-400 mb-2">3.83</div>
            <div className="text-gray-300">SAIT GPA / 4.00</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-gray-300">Completed Diploma</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-300">Network Commands Practiced</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2</div>
            <div className="text-gray-300">Languages: English &amp; Vietnamese</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
