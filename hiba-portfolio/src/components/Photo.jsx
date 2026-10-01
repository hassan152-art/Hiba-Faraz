import { useState } from "react";

export default function Photo({ src, tone, className = "", label }) {
  const [bad, setBad] = useState(false);
  if (!src || bad)
    return (
      <div
        className={`grid place-items-center text-sm ${className}`}
        style={{ background: tone, color: "rgba(31,22,51,.5)" }}
        role="img"
        aria-label={label}
      >
        <span>Add photo</span>
      </div>
    );
  return <img src={src} alt={label} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />;
}

export const tones = ["#CDB8F0", "#F6C85F", "#9FC7A8", "#E9A9C6", "#B7C9F2", "#F2B38C"];
