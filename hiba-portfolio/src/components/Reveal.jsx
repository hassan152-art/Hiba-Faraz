import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </M>
  );
}

export function Letters({ text, delay = 0 }) {
  return (
    <span className="inline-block overflow-hidden pb-[.1em] align-bottom" aria-label={text}>
      {[...text].map((c, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export function Count({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(to, 10);
  const isNum = !Number.isNaN(num);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView || !isNum) return;
    const c = animate(0, num, { duration: 1.4, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, isNum, num]);
  return <span ref={ref}>{isNum ? v : to}</span>;
}

export function PageTitle({ title, children }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 pb-10">
      <h1 className="font-display font-extrabold tracking-tight text-5xl md:text-7xl">
        <Letters text={title} />
      </h1>
      {children && <p className="mt-4 max-w-xl text-lg">{children}</p>}
    </div>
  );
}
