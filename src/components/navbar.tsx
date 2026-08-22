"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Candidatos", href: "#candidatos" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Calendário", href: "#calendario" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#inicio"
          className={`text-lg font-bold tracking-tight flex items-center gap-2 transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          🗳️ Eleições 2026
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  scrolled ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://divulgacandcontas.tse.jus.br/divulga/#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
            >
              Portal TSE
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-slate-700" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-slate-700" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-slate-700" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          menuOpen ? "max-h-80 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://divulgacandcontas.tse.jus.br/divulga/#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg mt-2"
            >
              Portal TSE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
