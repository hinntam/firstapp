const skillGroups = [
  {
    number: "01",
    title: "End-user support",
    description: "Patient, structured troubleshooting that keeps the user informed.",
    items: ["Gather symptoms and impact", "Isolate and test likely causes", "Explain steps in plain language", "Verify the fix or escalate"]
  },
  {
    number: "02",
    title: "Networking",
    description: "Foundational connectivity diagnostics using common Windows tools.",
    items: ["IP configuration: ipconfig", "Reachability: ping", "Name resolution: nslookup", "Route tracing: tracert"]
  },
  {
    number: "03",
    title: "Systems & hardware",
    description: "Core support knowledge for everyday endpoint and application issues.",
    items: ["Windows and operating-system fundamentals", "Basic hardware and peripheral troubleshooting", "Application setup and issue isolation", "Clear notes for follow-up"]
  },
  {
    number: "04",
    title: "Accounts & access",
    description: "Understanding how identity and permissions affect access to systems.",
    items: ["Authentication verifies identity", "Authorization determines permitted access", "Basic account-access troubleshooting", "Security-aware handling of user information"]
  },
  {
    number: "05",
    title: "Security mindset",
    description: "Careful support practices that help protect users and their information.",
    items: ["Privacy and sensitive-data awareness", "Least-privilege fundamentals", "Recognize suspicious activity and escalate", "Document actions and outcomes"]
  },
  {
    number: "06",
    title: "Technical foundation",
    description: "Software development training strengthens my diagnostic and learning skills.",
    items: ["SAIT Software Development diploma", "Computer networks and operating systems", "Software security and testing", "Git, GitHub and technical documentation"]
  }
];

const Skills = () => (
  <section id="skills" className="scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">What I can bring to a support team</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          IT support skills with a <span className="text-slate-400">builder&apos;s mindset.</span>
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          A practical foundation for entry-level support: systematic troubleshooting, responsible access practices, and communication that helps people move forward.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.number} className="rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition hover:border-emerald-400/30">
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 font-mono text-sm font-semibold text-emerald-300">{group.number}</span>
              <span className="h-px flex-1 bg-slate-800 mx-4" />
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Capability</span>
            </div>
            <h3 className="text-lg font-bold text-white">{group.title}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-5 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        Network tools and support workflows reflect hands-on practice; account, hardware and security topics reflect foundational knowledge and a readiness to learn team procedures.
      </p>
    </div>
  </section>
);

export default Skills;
