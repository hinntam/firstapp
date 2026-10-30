import Image from "next/image";

const Hero = () => (
  <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
    <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
    <div className="pointer-events-none absolute left-1/3 top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Calgary, Alberta <span className="text-emerald-500">/</span> Open to IT support roles
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          IT support · Troubleshooting · Project delivery
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          John <span className="text-emerald-400">Nguyen</span>
        </h1>
        <h2 className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
          I solve technical problems and make technology easier to use.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          SAIT Software Development graduate with deployed projects I build and maintain, a structured approach to Windows and network troubleshooting, and a focus on patient, clear end-user support.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/IT-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            View my resume <span className="ml-2" aria-hidden="true">↗</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Explore my projects
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
          <a className="transition hover:text-emerald-300" href="mailto:mailtam62@gmail.com">mailtam62@gmail.com</a>
          <a className="transition hover:text-emerald-300" href="https://www.linkedin.com/in/hijohnnguyen/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="transition hover:text-emerald-300" href="https://github.com/hinntam" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:ml-auto">
        <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/5" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-900 shadow-2xl shadow-black/30">
          <Image
            src="/john.jpeg"
            alt="John Nguyen"
            width={560}
            height={560}
            priority
            className="aspect-square w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-6 pb-6 pt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">A practical, user-first approach</p>
            <p className="mt-2 text-xl font-semibold text-white">Listen. Troubleshoot. Verify. Document.</p>
          </div>
        </div>
        <div className="relative mt-5 grid grid-cols-3 gap-3">
          {[
            ["01", "User support"],
            ["02", "Networking"],
            ["03", "Secure access"]
          ].map(([number, label]) => (
            <div key={number} className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
              <span className="block text-xs font-semibold tracking-widest text-emerald-400">{number}</span>
              <span className="mt-1 block text-xs text-slate-300 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
