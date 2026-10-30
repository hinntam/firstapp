"use client"
import { useState } from "react";

const navigation = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "IT support skills" },
  { href: "#activities", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 font-mono text-sm font-bold text-slate-950">JN</span>
          <span className="font-semibold tracking-tight text-white group-hover:text-emerald-300">John Nguyen</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-emerald-300">
              {item.label}
            </a>
          ))}
          <a href="/IT-Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10">
            Resume ↗
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 px-4 pb-4 pt-2 md:hidden">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-emerald-300">
              {item.label}
            </a>
          ))}
          <a href="/IT-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-2 block rounded-lg bg-emerald-400 px-3 py-3 text-center text-sm font-semibold text-slate-950">
            View resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
