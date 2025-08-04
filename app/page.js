import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Project';
import Skills from './components/Skill';
import Activity from './components/Activity';
import Certificate from './components/Certificate';
import ChatWidget from './chatai/components/chatwidget';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Nguyen - Full Stack Software Engineer | Calgary</title>
        <meta name="description" content="Full Stack Software Engineer specializing in React, Node.js, AWS, and modern web technologies. Based in Calgary, Canada." />
        <meta name="keywords" content="Full Stack Developer, Software Engineer, React, Node.js, AWS, Calgary, Web Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="bg-neutral-950 text-cyan-50">
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <Hero/>
        </section>
        
        {/* Skills Section */}
        <Skills/>
        
        {/* Certificates Section */}
        <Certificate/>
        
        {/* Projects Section */}
        <Projects/>
        
        {/* Activities Section */}
        <Activity/>
        
        {/* Contact Section */}
        <Contact />
        <div className='text-black'>
        <ChatWidget OPENAI_API_KEY={process.env.OPENAI_API_KEY} OPENAI_URL={process.env.OPENAI_URL}/>
        </div>
       </main>
    </>
  );
}
