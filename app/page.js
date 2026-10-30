import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Project';
import Skills from './components/Skill';
import Activity from './components/Activity';
import ChatWidget from './chatai/components/chatwidget';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Nguyen - IT Support & Help Desk | Calgary</title>
        <meta name="description" content="Entry-level IT support candidate in Calgary with a SAIT Software Development diploma and hands-on practice in Windows troubleshooting, network diagnostics, help desk ticket documentation, and user support." />
        <meta name="keywords" content="IT Support, Help Desk, Windows Troubleshooting, Network Diagnostics, Calgary, SAIT Software Development" />
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
