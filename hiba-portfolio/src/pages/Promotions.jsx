import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../data";
import Photo, { tones } from "../components/Photo";
import { PageTitle, Reveal } from "../components/Reveal";

export default function Promotions() {
  const cats = ["All", ...new Set(SITE.promos.map((p) => p.category))];
  const [cat, setCat] = useState("All");
  const items = SITE.promos.filter((p) => cat === "All" || p.category === cat);
  return (
    <>
      <PageTitle title="Promotions">Brands and products she has promoted, and how a PR collaboration works.</PageTitle>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter promotions">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className="relative rounded-full px-4 py-1.5 text-sm font-medium border border-[color:var(--ink)]/20">
              {cat === c && <motion.span layoutId="chip2" className="absolute inset-0 rounded-full" style={{ background: "var(--lilac)" }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.li key={p.product} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -6 }}>
                <Photo src={p.src} tone={tones[(i + 2) % tones.length]} label={p.product} className="aspect-square w-full rounded-2xl" />
                <p className="mt-2 font-semibold">{p.brand}</p>
                <p className="text-sm opacity-70">{p.product} ({p.category})</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>

      <section className="py-20" style={{ background: "var(--lilac)" }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal><h2 className="font-display text-4xl md:text-5xl font-bold">How a promotion works</h2></Reveal>
          <ol className="mt-10 grid md:grid-cols-5 gap-4">
            {SITE.process.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.1} className="rounded-2xl bg-white/80 p-5">
                <span className="font-display text-3xl font-bold" style={{ color: "var(--plum)" }}>{i + 1}</span>
                <h3 className="mt-2 font-semibold text-lg">{t}</h3>
                <p className="mt-1 text-sm">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-4xl font-bold">What you get</h2>
          <ul className="mt-6 space-y-3 text-lg">
            {SITE.deliverables.map((d) => (
              <li key={d} className="flex gap-3"><span aria-hidden="true" style={{ color: "var(--plum)" }}>+</span>{d}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="rounded-3xl p-8 text-white self-start" style={{ background: "var(--plum)" }}>
          <h3 className="font-display text-3xl font-bold">Request rates and media kit</h3>
          <p className="mt-3 opacity-90">Send your product and timeline. You will get a quote and a concept.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full px-6 py-3 font-semibold" style={{ background: "var(--sun)", color: "var(--ink)" }}>Get a quote</Link>
        </Reveal>
      </section>
    </>
  );
}
