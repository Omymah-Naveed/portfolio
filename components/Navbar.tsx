"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/MyLogo.png"
              alt={`${profile.firstName} Naveed logo`}
              width={77}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-slate-100">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {profile.firstName}
              </span>
              <span className="text-slate-100"> Naveed</span>
            </span>
          </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/10"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-300 transition-colors hover:bg-white/10 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-cyan-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
