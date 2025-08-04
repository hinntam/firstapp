// pages/index.js
import ChatWidget from "./components/chatwidget";

export default function Chat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            AI-Powered <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Assistant</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get instant answers about John Nguyen&apos;s experience, projects, and technical expertise. 
            Our AI assistant is trained with comprehensive knowledge about his software engineering background.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Technical Expertise</h3>
            <p className="text-gray-300">Ask about technologies, frameworks, and development approaches John specializes in.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Project Portfolio</h3>
            <p className="text-gray-300">Learn about John&apos;s recent projects, achievements, and real-world applications.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Career & Contact</h3>
            <p className="text-gray-300">Get information about availability, collaboration opportunities, and contact details.</p>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Try asking these questions:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h3 className="text-emerald-400 font-medium mb-2">💼 Professional Experience</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>&quot;What technologies does John work with?&quot;</li>
                <li>&quot;Tell me about John&apos;s certifications&quot;</li>
                <li>&quot;What&apos;s John&apos;s experience with AWS?&quot;</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h3 className="text-blue-400 font-medium mb-2">🚀 Projects & Apps</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>&quot;Show me John&apos;s mobile applications&quot;</li>
                <li>&quot;What&apos;s the Sprout project about?&quot;</li>
                <li>&quot;Tell me about the GPS tracking system&quot;</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h3 className="text-purple-400 font-medium mb-2">🎯 Skills & Expertise</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>&quot;What&apos;s John&apos;s full-stack experience?&quot;</li>
                <li>&quot;Does John work with React Native?&quot;</li>
                <li>&quot;Tell me about John&apos;s backend skills&quot;</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h3 className="text-emerald-400 font-medium mb-2">📞 Collaboration</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>&quot;How can I contact John for a project?&quot;</li>
                <li>&quot;Is John available for new opportunities?&quot;</li>
                <li>&quot;What services does John offer?&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/20 to-blue-600/20 rounded-2xl p-8 border border-emerald-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start a conversation?</h3>
            <p className="text-gray-300 mb-6">
              Click the chat icon in the bottom-right corner to begin talking with John&apos;s AI assistant.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Instant responses</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Expert knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
