// pages/index.js

import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Project';
import Skills from './components/Skill';
import Activity from './components/Activity';
import Certificate from './components/Certificate';
export default function Home() {
  return (
    <>
      
     
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mt-16  bg-neutral-950 text-cyan-50"> {/* Offset for fixed header */}
      
        {/* Hero Section */}
        <Hero/>
        <Skills/>
        <Certificate/>
        <Projects/>
        {/* Contact Section */}
        <Activity/>
        <Contact />
      </main>
    </>
  );
}
