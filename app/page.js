// pages/index.js

import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Project';
import Skills from './components/Skill';
export default function Home() {
  return (
    <>
      {/* Page Head for metadata */}
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio of a software developer showcasing projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mt-16"> {/* Offset for fixed header */}
        {/* Hero Section */}
        <Hero />
        <Skills/>
        <Projects/>
        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
