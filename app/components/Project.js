import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Alberta Driving Class 7",
    category: "Independent application",
    image: "/assets/albertadrivingtest.png",
    description: "A deployed learner-driver study project that makes Alberta Class 7 test preparation easier to access and practice.",
    proof: "Built, deployed and maintained",
    tags: ["Web application", "User experience", "Ongoing maintenance"],
    href: "https://play.google.com/store/apps/details?id=com.codewithnguyen.todoalbertadriving",
    action: "Ask about this project"
  },
  {
    number: "02",
    name: "Online Book System",
    category: "Application development",
    image: "/assets/project.jpeg",
    description: "An online book-system project showcasing my ability to turn an idea into a working application and maintain it after launch.",
    proof: "Built, deployed and maintained",
    tags: ["Application development", "Problem solving", "Ongoing maintenance"],
    href: "https://fireapp-59839.web.app/deluxenailbar.html",
    action: "Ask about this project"
  },
  {
    number: "03",
    name: "Nail Salon Website",
    category: "Small-business website",
    image: "/web/nail.jpg",
    description: "A business website project with booking-focused content, designed around the needs of a local service business.",
    proof: "Deployed and maintained",
    tags: ["Website maintenance", "Booking experience", "Small business"],
    href: "https://deluxenailbar.ca/",
    action: "View website showcase"
  }
];

const Projects = () => (
  <section id="projects" className="scroll-mt-24 border-y border-slate-800/80 bg-slate-900/35">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">Selected work</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            I don&apos;t just build it. <span className="text-slate-400">I keep it working.</span>
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-slate-400">
          Projects demonstrate ownership beyond launch: building useful tools, considering the people who use them, and maintaining the experience over time.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.number} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-black/20">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-emerald-300/25 bg-slate-950/80 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur">
                {project.proof}
              </span>
              <span className="absolute bottom-4 left-4 font-mono text-sm text-white/75">{project.number} / 03</span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">{project.category}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300">{tag}</span>
                ))}
              </div>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                {project.action} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-sm font-semibold text-white">How I approach IT support</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">I bring the same ownership to support: understand the issue, communicate clearly, check the result, and document the next step.</p>
        </div>
        <a href="#skills" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
          See support capabilities <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
