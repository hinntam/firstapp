"use client"
import { useState } from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: "🛡️" },
    { id: "information", title: "Information We Collect", icon: "📋" },
    { id: "sharing", title: "Information Sharing", icon: "🤝" },
    { id: "security", title: "Disclaimer", icon: "🔒" },
    { id: "rights", title: "Your Rights", icon: "⚖️" },
    { id: "contact", title: "Contact Us", icon: "📞" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Privacy Policy
              </h1>
              <p className="text-blue-100 text-lg">
                Asia: Recipe and Meal Plans
              </p>
            </div>
            {/* <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-xl px-4 py-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium">PIPEDA Compliant</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 sticky top-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeSection === section.id
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Info */}
              <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <h4 className="text-emerald-400 font-medium mb-2">Last Updated</h4>
                <p className="text-gray-300 text-sm">August 4, 2025</p>
                <h4 className="text-emerald-400 font-medium mb-2 mt-4">Effective Date</h4>
                <p className="text-gray-300 text-sm">August 4, 2025</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="space-y-8">
              {/* Overview Section */}
              <section id="overview" className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Privacy Overview</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Welcome to the Asia: Recipe and Meal Plans application. Your privacy is extremely important to us. 
                    This privacy policy explains how we collect, use, protect, and handle your personal information 
                    when you use our Asia: Recipe and Meal Plans application.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <h3 className="text-emerald-400 font-semibold mb-2">🔐 Secure</h3>
                      <p className="text-gray-300 text-sm">Industry-standard encryption protects your data</p>
                    </div>
                    {/* <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <h3 className="text-blue-400 font-semibold mb-2">🇨🇦 Compliant</h3>
                      <p className="text-gray-300 text-sm">Follows Canadian PIPEDA regulations</p>
                    </div> */}
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                      <h3 className="text-purple-400 font-semibold mb-2">📱 Minimal</h3>
                      <p className="text-gray-300 text-sm">We only collect necessary information</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information" className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Information</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong>Account Information:</strong> We do not collect any personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong>Test Progress:</strong> Quiz scores, practice test results, study progress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span><strong>Preferences:</strong> App settings, calendar, study goals</span>
                      </li>
                    </ul>
                  </div>
                  
                

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                    <h4 className="text-yellow-400 font-medium mb-2">⚠️ What We DON&apos;T Collect</h4>
                    <p className="text-gray-300 text-sm">
                      We do not collect your actual driver license information, Social Insurance Number, 
                      precise location data, or any sensitive personal identification beyond what&apos;s necessary for the app to function.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              

              {/* Information Sharing */}
              <section id="sharing" className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Information Sharing</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Our Commitment
                    </h3>
                    <p className="text-gray-300">
                      <strong>We do NOT sell, rent, or trade your personal information to third parties.</strong> 
                      Your study data and personal information remain private and are only used to improve your learning experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-semibold">Limited Sharing Scenarios:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-500/5 py-2">
                        <h4 className="text-yellow-400 font-medium">Service Providers</h4>
                        <p className="text-gray-300 text-sm">Analytics tools (anonymized data only) to improve app performance</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 bg-red-500/5 py-2">
                        <h4 className="text-red-400 font-medium">Legal Requirements</h4>
                        <p className="text-gray-300 text-sm">Only if required by Canadian law or court order</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-2">
                        <h4 className="text-blue-400 font-medium">Safety & Security</h4>
                        <p className="text-gray-300 text-sm">To protect against fraud, abuse, or security threats</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              
              <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Disclaimer</h3>
                  <p className="text-gray-300 mb-4">
                    Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.

NguyenDev. its subsidiaries, affiliates, and its licensors do not warrant that (a) the Service will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
                  </p>
                 
                </div>

              {/* Data Retention */}
             

              {/* Your Rights */}
              <section id="rights" className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h3 className="text-emerald-400 font-semibold mb-2">Access Your Data</h3>
                      <p className="text-gray-300 text-sm">Request a copy of all personal information we have about you</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-blue-400 font-semibold mb-2">Correct Your Data</h3>
                      <p className="text-gray-300 text-sm">Update or correct any inaccurate personal information</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-purple-400 font-semibold mb-2">Delete Your Data</h3>
                      <p className="text-gray-300 text-sm">Request deletion of your account and associated data</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="text-yellow-400 font-semibold mb-2">Withdraw Consent</h3>
                      <p className="text-gray-300 text-sm">Opt-out of non-essential data processing at any time</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="text-red-400 font-semibold mb-2">Data Portability</h3>
                      <p className="text-gray-300 text-sm">Export your data in a machine-readable format</p>
                    </div>
                    
                    <div className="border-l-4 border-gray-500 pl-4">
                      <h3 className="text-gray-400 font-semibold mb-2">File Complaints</h3>
                      <p className="text-gray-300 text-sm">Contact the Privacy Commissioner of Canada if needed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">How to Exercise Your Rights</h3>
                  <p className="text-gray-300 mb-4">
                    To exercise any of these rights, simply contact us using the information below. 
                    We will respond to your request within 30 days as required by Canadian privacy law.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:mailtam62@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
                      Email Privacy Team
                    </a>
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
                      View Contact Info
                    </a>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-emerald-400 font-semibold mb-3">Privacy Officer</h3>
                      <div className="space-y-2 text-gray-300">
                        <p><strong>John Nguyen</strong></p>
                        <p>Developer & Privacy Officer</p>
                        <p>Asia: Recipe and Meal Plans</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-blue-400 font-semibold mb-3">Contact Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <a href="mailto:mailtam62@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                            mailtam62@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                          <span className="text-gray-300">(825) 288-0437</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="text-gray-300">Calgary, Alberta, Canada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                
                </div>
              </section>

              {/* Footer */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Thank You for Trusting Us</h3>
                <p className="text-blue-100 mb-6">
                  From “What should I cook today?” to your next mouthwatering meal in minutes — our app has you covered. Browse step-by-step recipes for every taste and skill level, filter by cuisine, diet, or cooking time, and search by ingredients you already have at home. Build your grocery list instantly, save your favorites, and even shop for ingredients online with just a tap..
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    ← Back to Home
                  </Link>
                  <a href="mailto:mailtam62@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Contact Developer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
