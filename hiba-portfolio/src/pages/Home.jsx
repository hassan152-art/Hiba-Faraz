import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE } from "../data";
import Photo, { tones } from "../components/Photo";
import { Reveal, Count, Letters } from "../components/Reveal";

export default function Home() {
  const loop = [...SITE.pillars, ...SITE.pillars];
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-20 grid md:grid-cols-[1.15fr_.85fr] gap-10 items-center">
        <div>
          <h1 className="font-display font-extrabold leading-[.92] tracking-tight text-[clamp(3.4rem,11vw,8.5rem)]">
            <Letters text="Hiba" /><br /><Letters text="Faraz" delay={0.25} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 font-display text-2xl md:text-3xl max-w-md" style={{ color: "var(--plum)" }}>{SITE.hero}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-4 max-w-md text-lg leading-relaxed">{SITE.sub}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full px-6 py-3 font-semibold text-white transition-transform hover:scale-105" style={{ background: "var(--plum)" }}>Work with me</Link>
            <Link to="/promotions" className="rounded-full px-6 py-3 font-semibold border border-[color:var(--ink)]/30 hover:bg-white transition-colors">See promotions</Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }} className="relative mx-auto w-full max-w-sm">
          <Photo src={SITE.hero_photo} tone="var(--lilac)" label="Hiba Faraz" className="aspect-[4/5] w-full rounded-[2rem]" />
          <motion.div animate={{ y: [0, -8, 0], rotate: [-3, -1, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-4 bottom-8 max-w-[15rem] rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-lg">
            Dosto ke sath chalte hain long drive par
          </motion.div>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-[color:var(--ink)]/10 py-4" style={{ background: "var(--sun)" }} aria-hidden="true">
        <div className="marquee flex w-max gap-10 font-display text-2xl font-bold">
          {loop.map((p, i) => <span key={i} className="whitespace-nowrap">{p}</span>)}
        </div>
      </div>

      <section className="bg-white">
        <dl className="mx-auto max-w-6xl px-5 py-10 grid grid-cols-3 gap-4 text-center">
          {SITE.stats.map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl md:text-6xl font-bold" style={{ color: "var(--plum)" }}><Count to={s.n} /></dt>
              <dd className="mt-1 text-sm md:text-base">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Recent work</h2>
          <Link to="/work" className="underline underline-offset-4 font-semibold">See all work</Link>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {SITE.work.slice(0, 3).map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 0.1}>
              <Link to="/work" className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <Photo src={w.src} tone={tones[i]} label={w.title} className="aspect-[9/14] w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-2 font-semibold">{w.title}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="py-20 text-white" style={{ background: "var(--plum)" }}>
        <Reveal className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold">Want your product in her next reel?</h2>
          <p className="mt-4 text-lg opacity-90">Tell her what you are launching and she will send an idea.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-full px-7 py-3 font-semibold transition-transform hover:scale-105" style={{ background: "var(--sun)", color: "var(--ink)" }}>Start a collaboration</Link>
        </Reveal>
      </section>
    </>
  );
}
