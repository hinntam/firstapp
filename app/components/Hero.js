import Link from "next/link";

const Hero = () => (
    <section className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold text-white">Hi, I&apos;m John</h1>
        <p className="text-lg text-gray-200 mt-4">Software Developer | Next.js | Tailwind CSS</p>
        <Link href="#projects" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full">View My Work</Link>
      </div>
    </section>
  );
  
  export default Hero;