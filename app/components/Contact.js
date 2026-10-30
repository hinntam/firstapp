const Contact = () => (
  <section id="contact" className="scroll-mt-24 border-t border-slate-800 bg-slate-900/35">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">Let&apos;s connect</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for a thoughtful, hands-on IT support teammate?
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              I&apos;m open to entry-level IT support and help desk opportunities in Calgary. I&apos;d be glad to talk about my project work, troubleshooting approach, and how I can contribute to your team.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="mailto:mailtam62@gmail.com" className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-300">
              Email John <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            <a href="/IT-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">
              View resume <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-800 px-7 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>Calgary, Alberta · Open to IT support opportunities</p>
          <div className="flex gap-5">
            <a href="tel:+18252880437" className="transition hover:text-emerald-300">(825) 288-0437</a>
            <a href="https://www.linkedin.com/in/hijohnnguyen/" target="_blank" rel="noopener noreferrer" className="transition hover:text-emerald-300">LinkedIn ↗</a>
            <a href="https://github.com/hinntam" target="_blank" rel="noopener noreferrer" className="transition hover:text-emerald-300">GitHub ↗</a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-600">© {new Date().getFullYear()} John Nguyen · IT Support &amp; Help Desk</p>
    </div>
  </section>
);

export default Contact;
