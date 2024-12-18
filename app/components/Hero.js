import Link from "next/link";
import VideoPlayer from "./Video";

const Hero = () => (
    <section className="container mx-auto px-8">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-5xl font-thin tracking-tight lg:mt-16 lg:text-2xl">
            About me
            </h1>
            <span className="bg-gradient-to-r from-emerald-500 via-slate-500 to-indigo-700 bg-clip-text text-3xl tracking-tight text-transparent cursor-cell">
            Software Developer / Web Dev
            </span>
            <p className="text-lg mt-4 text-neutral-300">
            Hello! I’m passionate developer based in Calgary, Canada, currently pursuing a Software Development Diploma at the Southern Alberta Institute of Technology (SAIT). I have gained valuable experience working on a variety of projects that span both backend and frontend technologies. My diverse skill set allows me to tackle challenges effectively and contribute to innovative solutions. I’m excited to continue growing my expertise and making an impact in the tech community.
            </p>
          
          </div>
          <div className="flex flex-col">
            <div className="mr-6 flex flex-wrap items-center">
              <Link href="./assets/Resume_John.docx" className="border-cyan-50 rounded">
              <button className="" tabindex="0">
                    <span className="indigo-400 rounded border-cyan-50">
                      <div className="flex flex-row items-center justify-center">Download CV 
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg>
                      </div>
                    </span>
                    <span className="block absolute inset-0 rounded-full p-px linear-overlay">
                    </span>
              </button>
              </Link> 
              <Link href="#" className="m-2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-3xl text-slate-300 hover:text-emerald-400 active:bg-indigo-700 linear transition duration-300 ease-in-out transform hover:scale-110 active:scale-95" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </Link>   
              <Link href="#" className="m-2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-3xl text-slate-300 hover:text-emerald-400 active:bg-indigo-700 linear transition duration-300 ease-in-out transform hover:scale-110 active:scale-95" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </Link>
              <Link href="#" className="m-2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-3xl text-slate-300 hover:text-emerald-400 active:bg-indigo-700 linear transition duration-300 ease-in-out transform hover:scale-110 active:scale-95" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>
              </Link>      
            </div>
           
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 sm:mt-8">
          <VideoPlayer/>
        </div>
        </div>
      </div>
    </section>
  );
  
  export default Hero;