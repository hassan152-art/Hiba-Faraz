import { motion } from "framer-motion";
import { SITE } from "../data";
import Photo from "../components/Photo";
import { PageTitle, Reveal } from "../components/Reveal";

export default function About() {
  return (
    <>
      <PageTitle title="About" />
      <section className="mx-auto max-w-6xl px-5 pb-20 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <Photo src={SITE.about_photo} tone="#E9DFFA" label="Hiba at work" className="aspect-square w-full max-w-md rounded-[2rem]" />
        </Reveal>
        <div>
          {SITE.about.map((p, i) => (
            <Reveal key={p} delay={i * 0.1}><p className="mb-5 text-lg leading-relaxed max-w-prose">{p}</p></Reveal>
          ))}
          <dl className="mt-8 divide-y divide-[color:var(--ink)]/15 border-y border-[color:var(--ink)]/15">
            {SITE.facts.map(([k, v]) => (
              <div key={k} className="py-3 grid grid-cols-[8rem_1fr] gap-4"><dt className="opacity-60">{k}</dt><dd className="font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <section className="py-16" style={{ background: "var(--lilac)" }}>
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold">What she posts about</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SITE.pillars.map((p, i) => (
              <motion.li key={p} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ scale: 1.08, rotate: -2 }} className="rounded-full bg-white/85 px-5 py-2 font-medium">{p}</motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
