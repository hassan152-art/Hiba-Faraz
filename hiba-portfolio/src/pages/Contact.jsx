import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../data";
import { PageTitle } from "../components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", brand: "", type: SITE.contactTypes[0], msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `Hi Hiba,\n\n${f.msg}\n\n${f.name}${f.brand ? " - " + f.brand : ""}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(f.type + ": " + (f.brand || f.name))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "w-full rounded-lg border border-[color:var(--ink)]/20 bg-white px-4 py-3 outline-none focus:border-[color:var(--plum)] focus:ring-2 focus:ring-[color:var(--lilac)] mt-1";

  return (
    <>
      <PageTitle title="Contact">Tell her about your brand. She replies within two working days.</PageTitle>
      <section className="mx-auto max-w-6xl px-5 pb-24 grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-lg">
          <p><a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><a className="underline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">Message on WhatsApp</a></p>
          <p><a className="underline" href={SITE.ig} target="_blank" rel="noreferrer">{SITE.handle} on Instagram</a></p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <label className="block">Your name<input required className={field} value={f.name} onChange={set("name")} /></label>
          <label className="block">Brand or company<input className={field} value={f.brand} onChange={set("brand")} /></label>
          <label className="block">What do you need?
            <select className={field} value={f.type} onChange={set("type")}>
              {SITE.contactTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="block">Tell her more<textarea required rows={4} className={field} value={f.msg} onChange={set("msg")} /></label>
          <motion.button whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }} className="rounded-full px-7 py-3 font-semibold text-white" style={{ background: "var(--plum)" }}>Send message</motion.button>
          <AnimatePresence>
            {sent && <motion.p role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg p-3 text-sm" style={{ background: "var(--lilac)" }}>Your email app should open with the message ready to send.</motion.p>}
          </AnimatePresence>
        </form>
      </section>
    </>
  );
}
