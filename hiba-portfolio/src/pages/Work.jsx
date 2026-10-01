import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../data";
import Photo, { tones } from "../components/Photo";
import { PageTitle } from "../components/Reveal";

export default function Work() {
  const cats = ["All", ...new Set(SITE.work.map((w) => w.tag))];
  const [cat, setCat] = useState("All");
  const items = SITE.work.filter((w) => cat === "All" || w.tag === cat);
  return (
    <>
      <PageTitle title="Work">Reels and everyday stories. Tap a tile to watch it on Instagram.</PageTitle>
      <div className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className="relative rounded-full px-4 py-1.5 text-sm font-medium border border-[color:var(--ink)]/20">
              {cat === c && <motion.span layoutId="chip" className="absolute inset-0 rounded-full" style={{ background: "var(--lilac)" }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((w, i) => (
              <motion.li key={w.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                <a href={SITE.ig} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl">
                  <Photo src={w.src} tone={tones[i % tones.length]} label={w.title} className="aspect-[9/14] w-full transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 text-white" style={{ background: "linear-gradient(transparent, rgba(31,22,51,.9))" }}>
                    <b className="block">{w.title}</b>
                    <span className="text-sm">{w.tag}. Watch on Instagram</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
}
