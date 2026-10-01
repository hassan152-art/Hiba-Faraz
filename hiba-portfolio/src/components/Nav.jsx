import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../data";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/promotions", label: "Promotions" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--ink)]/10 backdrop-blur" style={{ background: "rgba(251,248,255,.88)" }}>
      <nav className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg" onClick={() => setOpen(false)}>{SITE.name}</Link>
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className="relative py-1">
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <motion.span layoutId="nav-ul" className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded" style={{ background: "var(--plum)" }} />}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full px-5 py-2 font-semibold text-white" style={{ background: "var(--plum)" }}>Collaborate</Link>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block w-6 h-0.5 bg-[color:var(--ink)] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[color:var(--ink)] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[color:var(--ink)]" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t border-[color:var(--ink)]/10">
            <div className="px-5 py-4 flex flex-col gap-4 text-lg">
              {[...links, { to: "/contact", label: "Collaborate" }].map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-8 text-center text-sm" style={{ opacity: 0.75 }}>
      <a href={SITE.ig} target="_blank" rel="noreferrer" className="underline">{SITE.handle}</a>
      <p className="mt-2">© {new Date().getFullYear()} {SITE.name}</p>
    </footer>
  );
}
