"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proceso", label: "El laboratorio" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      id="hdr"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(7,8,10,.72)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--line)",
            }
          : {}
      }
    >
      <div
        className="flex items-center justify-between h-[74px] mx-auto px-7"
        style={{ maxWidth: 1180 }}
      >
        {/* Brand */}
        <Link
          href="#top"
          className="flex items-center gap-3 no-underline"
          style={{ color: "var(--ink)" }}
          onClick={closeMobile}
        >
          <Image
            src="/logo.png"
            alt="Grafeno Labs"
            width={120}
            height={32}
            style={{ height: 32, width: "auto", filter: "drop-shadow(0 0 9px rgba(95,180,255,.22))" }}
            priority
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 600,
              fontSize: "1.06rem",
              letterSpacing: "0.16em",
              color: "var(--ink)",
            }}
          >
            <strong>GRAFENO</strong>{" "}
            <span style={{ fontWeight: 300, color: "var(--ink-dim)" }}>
              LABS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative no-underline text-sm font-medium transition-colors duration-200 group"
              style={{ color: "var(--ink-dim)", letterSpacing: "0.01em" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--ink-dim)")
              }
            >
              {l.label}
              <span
                className="absolute left-0 bottom-[-6px] h-px w-0 group-hover:w-full transition-all duration-200"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block no-underline text-sm font-semibold transition-all duration-200"
          style={{
            fontFamily: "var(--display)",
            padding: "9px 18px",
            border: "1px solid var(--line-strong)",
            borderRadius: 9,
            color: "var(--ink)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--accent)";
            el.style.background = "rgba(95,180,255,.08)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--line-strong)";
            el.style.background = "";
          }}
        >
          Iniciar proyecto
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden bg-transparent border-0 cursor-pointer p-1.5"
          style={{ color: "var(--ink)" }}
          aria-label="Menú"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col gap-4 px-7 pb-6 pt-2"
          style={{
            background: "rgba(7,8,10,.95)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="no-underline text-base"
              style={{ color: "var(--ink-dim)", fontFamily: "var(--display)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMobile}
            className="btn btn-primary self-start"
          >
            Iniciar proyecto <span className="arrow">→</span>
          </a>
        </div>
      )}
    </header>
  );
}
