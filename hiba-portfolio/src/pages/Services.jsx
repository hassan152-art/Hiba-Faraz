import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../data";
import { PageTitle } from "../components/Reveal";

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageTitle title="Services">Pick what you need. Everything is made and edited by Hiba herself.</PageTitle>
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <div className="divide-y divide-[color:var(--ink)]/15 border-y border-[color:var(--ink)]/15">
          {SITE.services.map(([t, d, list], i) => (
            <div key={t}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full py-6 flex items-center justify-between gap-4 text-left">
                <span className="font-display text-2xl md:text-3xl font-semibold">{t}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-3xl" aria-hidden="true">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="text-lg max-w-xl">{d}</p>
                    <ul className="mt-4 mb-6 space-y-1">
                      {list.map((x) => <li key={x}>+ {x}</li>)}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-10 inline-block rounded-full px-7 py-3 font-semibold text-white transition-transform hover:scale-105" style={{ background: "var(--plum)" }}>Ask about a service</Link>
      </section>
    </>
  );
}
