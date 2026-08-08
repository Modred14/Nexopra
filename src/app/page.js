// File: src/app/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/2348149488987";

/* -------------------------------------------------------------------- */
/*  Minimal, consistent line-icon set (1.6 stroke, 24 grid)             */
/* -------------------------------------------------------------------- */
const ICON_PATHS = {
  briefcase:
    "M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18V8.5Z|M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7|M4 12.5h16",
  trophy:
    "M8 4h8v5a4 4 0 0 1-8 0V4Z|M8 5H5.5A1.5 1.5 0 0 0 4 6.5 3.5 3.5 0 0 0 7.5 10H8|M16 5h2.5A1.5 1.5 0 0 1 20 6.5 3.5 3.5 0 0 1 16.5 10H16|M12 13v3|M9 20h6|M10.5 16h3v1.5a1.5 1.5 0 0 1-1.5 1.5h0a1.5 1.5 0 0 1-1.5-1.5V16Z",
  globe:
    "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z|M4.5 9.5h15|M4.5 14.5h15|M12 4a12.5 12.5 0 0 1 0 16|M12 4a12.5 12.5 0 0 0 0 16",
  shield:
    "M12 3.5 19 6.2v5.1c0 4.4-3 7.7-7 9.2-4-1.5-7-4.8-7-9.2V6.2L12 3.5Z|M9.2 12.2l1.9 1.9 3.7-3.9",
  palette:
    "M12 4a8 8 0 1 0 3.2 15.35c.9-.4 1.3-1.5.7-2.3-.5-.7-.2-1.65.6-1.9A8 8 0 0 0 12 4Z|M8.3 10.2h.01|M11.4 7.6h.01|M15.1 8.6h.01|M15.9 12.4h.01",
  chart:
    "M4.5 19.5h15|M7.5 19.5v-6|M12 19.5v-10|M16.5 19.5v-4",
  target:
    "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z|M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M12 12.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z",
  scan:
    "M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8|M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8|M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16|M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16|M4 12h16",
  filter:
    "M4 5.5h16|M7 12h10|M10.3 18.5h3.4",
  send: "M20 4 10.5 13.5|M20 4l-6 16-3.5-7.5L3 9.5 20 4Z",
  bolt: "M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z",
  bell:
    "M7 9.5a5 5 0 0 1 10 0v3.6l1.4 2.6H5.6L7 13.1V9.5Z|M10.2 18.5a1.8 1.8 0 0 0 3.6 0",
  shieldCheck:
    "M12 3.5 19 6.2v5.1c0 4.4-3 7.7-7 9.2-4-1.5-7-4.8-7-9.2V6.2L12 3.5Z|M9.2 12.2l1.9 1.9 3.7-3.9",
  sparkle:
    "M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z",
  arrowRight: "M4.5 12h15|M13.5 6l6 6-6 6",
  check: "M5 12.5 9.5 17 19 6.5",
  chat:
    "M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z",
};

function Icon({ name, size = 18, className = "" }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.split("|").map((seg, i) => (
        <path key={i} d={seg} />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/*  Content                                                              */
/* -------------------------------------------------------------------- */
const opportunities = [
  { icon: "briefcase", label: "Frontend Internship", sub: "Remote · Deadline: June 22", tag: "Internship" },
  { icon: "trophy", label: "AI Hackathon", sub: "$15k Prize Pool · Open Now", tag: "Hackathon" },
  { icon: "globe", label: "Graduate Program", sub: "Google · 50 Slots Left", tag: "Career" },
  { icon: "shield", label: "Cybersecurity Role", sub: "Remote · Full-Time", tag: "Job" },
  { icon: "palette", label: "UI/UX Design Sprint", sub: "Remote · 3-day challenge", tag: "Hackathon" },
  { icon: "chart", label: "Data Science Fellowship", sub: "Meta · Paid · 6 months", tag: "Career" },
];

const steps = [
  {
    num: "01",
    title: "Join & Set Your Profile",
    desc: "Tell Nexopra your name, skill set — frontend, UI/UX, cybersecurity, data — and preferred delivery time.",
    icon: "target",
  },
  {
    num: "02",
    title: "AI Scans the Web",
    desc: "Every day the engine scours job boards, hackathon platforms, and career portals for active openings in your field.",
    icon: "scan",
  },
  {
    num: "03",
    title: "Smart Filtering",
    desc: "Expired, duplicate, and off-target listings are stripped out. Only verified, high-quality matches remain.",
    icon: "filter",
  },
  {
    num: "04",
    title: "Delivered to WhatsApp",
    desc: "A clean, personalized digest arrives in your WhatsApp every morning. No apps. No logins. Just opportunities.",
    icon: "send",
  },
];

const features = [
  { icon: "target", title: "Personalized Matching", desc: "Every result filtered to your exact skill and experience level." },
  { icon: "bolt", title: "Daily Automation", desc: "Zero effort — fresh picks delivered every single morning." },
  { icon: "trophy", title: "Hackathon Radar", desc: "Never miss a competition, grant, or prize pool again." },
  { icon: "bell", title: "Internship Alerts", desc: "Early-stage alerts before deadlines close worldwide." },
  { icon: "globe", title: "Remote-First", desc: "Global remote tech roles surfaced and ranked daily." },
  { icon: "shieldCheck", title: "Zero Noise", desc: "Duplicates and expired listings are cut before they reach you." },
];

export default function Home() {
  const [visible, setVisible] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const refs = useRef({});

  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  const tiltRef = useRef(null);
  const tiltRaf = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisible((v) => ({ ...v, [e.target.dataset.key]: true }));
        }),
      { threshold: 0.12 },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const reg = (key) => (el) => {
    refs.current[key] = el;
    if (el) el.dataset.key = key;
  };
  const fade = (key, delay = 0) => ({
    opacity: visible[key] ? 1 : 0,
    transform: visible[key] ? "translateY(0px)" : "translateY(28px)",
    transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  /* Cursor-reactive glow inside the hero (GPU-accelerated, rAF throttled) */
  const handleHeroMove = (e) => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      glow.style.transform = `translate3d(${x - 280}px, ${y - 280}px, 0)`;
    });
  };
  const handleHeroLeave = () => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  };
  const handleHeroEnter = () => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "1";
  };

  /* Subtle 3D tilt on the preview / radar card */
  const handleTiltMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 8;
    const ry = (px - 0.5) * 8;
    if (tiltRaf.current) cancelAnimationFrame(tiltRaf.current);
    tiltRaf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
  };
  const handleTiltLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  /* Magnetic pull for primary buttons */
  const handleMagnetMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
  };
  const handleMagnetLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  /* Click ripple */
  const createRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  /* Spotlight hover for feature cards */
  const handleSpotlight = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #050507;
          --surface: #0a0a10;
          --surface2: #0e0e17;
          --border: rgba(255,255,255,0.08);
          --border-soft: rgba(255,255,255,0.055);
          --border-accent: rgba(139,92,246,0.32);
          --violet: #8b5cf6;
          --indigo: #6366f1;
          --cyan: #22d3ee;
          --cyan-light: #67e8f9;
          --grad: linear-gradient(135deg, #8b5cf6 0%, #6366f1 52%, #22d3ee 100%);
          --grad-text: linear-gradient(90deg, #c4b5fd 0%, #a5b4fc 45%, #67e8f9 100%);
          --text: #f5f5fb;
          --muted: #6c6c86;
          --muted2: #9c9cb8;
          --ease: cubic-bezier(0.16,1,0.3,1);
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-bricolage), ui-sans-serif, system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        /* film grain */
        body::after {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity:.35;
        }

        button, a { font-family: inherit; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }

        /* ---------------- NAV ---------------- */
        nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 48px; height:72px;
          transition: background 0.4s var(--ease), border-color 0.4s var(--ease);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
        }
        .nav-scrolled { background:rgba(5,5,7,0.78); border-bottom-color: var(--border-soft); }
        .logo-wrap { display:flex; align-items:center; transition: transform 0.3s var(--ease), opacity 0.3s; }
        .logo-wrap:hover { transform: scale(1.03); opacity: 0.92; }
        .logo-img { width:118px; height:auto; object-fit:contain; display:block; }
        .nav-links { display:flex; gap:8px; list-style:none; }
        .nav-links a {
          position:relative; color:var(--muted2); font-size:0.875rem; font-weight:500; text-decoration:none;
          padding:8px 14px; border-radius:8px; transition:color 0.25s var(--ease), background 0.25s var(--ease);
        }
        .nav-links a:hover { color:var(--text); background: rgba(255,255,255,0.045); }
        .nav-cta {
          position:relative; overflow:hidden;
          display:inline-flex; align-items:center; gap:8px;
          background:var(--grad); color:#fff;
          padding:11px 22px; border-radius:10px;
          font-weight:600; font-size:0.85rem; text-decoration:none;
          box-shadow:0 0 0 1px rgba(255,255,255,0.08) inset, 0 8px 24px rgba(124,58,237,0.32);
          transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
          will-change: transform;
        }
        .nav-cta:hover { box-shadow:0 0 0 1px rgba(255,255,255,0.12) inset, 0 10px 34px rgba(124,58,237,0.5); }
        .nav-cta svg { flex-shrink:0; }

        .ripple {
          position:absolute; border-radius:50%; background:rgba(255,255,255,0.35);
          transform:scale(0); animation: rippleAnim 0.65s var(--ease) forwards;
          pointer-events:none;
        }
        @keyframes rippleAnim { to { transform: scale(1); opacity:0; } }

        /* ---------------- HERO ---------------- */
        .hero {
          min-height:100vh; display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          text-align:center; padding:150px 24px 90px;
          position:relative; overflow:hidden;
        }
        .cursor-glow {
          position:absolute; top:0; left:0; width:560px; height:560px;
          background:radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(34,211,238,0.06) 40%, transparent 70%);
          border-radius:50%; pointer-events:none; opacity:0; transition:opacity 0.6s var(--ease);
          will-change: transform; z-index:0;
        }
        .orb { position:absolute; pointer-events:none; border-radius:50%; }
        .orb-1 { top:-100px; left:50%; transform:translateX(-50%); width:940px; height:620px; background:radial-gradient(ellipse at 40% 40%, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.08) 45%, transparent 70%); animation: floatSlow 16s ease-in-out infinite; }
        .orb-2 { top:12%; right:-190px; width:500px; height:500px; background:radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%); animation: floatSlow 20s ease-in-out infinite reverse; }
        .orb-3 { bottom:2%; left:-110px; width:400px; height:400px; background:radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%); animation: floatSlow 18s ease-in-out infinite; }
        @keyframes floatSlow { 0%,100%{ transform: translate(0,0); } 50%{ transform: translate(24px,-26px); } }
        .hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:linear-gradient(rgba(139,92,246,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.045) 1px,transparent 1px);
          background-size:64px 64px;
          mask-image:radial-gradient(ellipse at 50% 38%, black 18%, transparent 70%);
        }

        .eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          border:1px solid var(--border-accent); background:rgba(139,92,246,0.07);
          color:#c4b5fd; font-size:0.76rem; font-weight:600;
          padding:7px 16px 7px 12px; border-radius:100px; margin-bottom:32px;
          letter-spacing:0.06em; position:relative; z-index:1;
          animation: heroIn 0.9s var(--ease) both;
        }
        .eyebrow svg { color:var(--cyan-light); }
        .blink { width:6px; height:6px; border-radius:50%; background:var(--cyan-light); box-shadow:0 0 8px var(--cyan); animation:blink 2.4s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.35;transform:scale(0.65)} }

        @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }

        h1 {
          font-weight:800; font-size:clamp(2.9rem,6.4vw,5.6rem); line-height:1.02;
          letter-spacing:-0.035em; margin-bottom:26px;
          max-width:880px; position:relative; z-index:1;
          animation: heroIn 0.9s var(--ease) 0.08s both;
        }
        .plain { color:var(--text); display:block; }
        .grad-text {
          display:block; background:var(--grad-text); background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
        .sub-plain { font-size:0.8em; font-weight:400; color:var(--muted2); letter-spacing:-0.01em; }

        .hero-sub {
          font-size:clamp(0.98rem,1.7vw,1.14rem); color:var(--muted2); max-width:520px; line-height:1.75;
          margin-bottom:44px; position:relative; z-index:1;
          animation: heroIn 0.9s var(--ease) 0.16s both;
        }

        .cta-row { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; position:relative; z-index:1; animation: heroIn 0.9s var(--ease) 0.24s both; }

        .btn-primary {
          position:relative; overflow:hidden; will-change:transform;
          display:inline-flex; align-items:center; gap:10px;
          background:var(--grad); color:#fff;
          padding:16px 32px; border-radius:12px;
          font-weight:700; font-size:0.95rem; text-decoration:none;
          box-shadow:0 0 0 1px rgba(255,255,255,0.1) inset, 0 12px 40px rgba(124,58,237,0.35);
          transition: box-shadow 0.35s var(--ease), transform 0.25s var(--ease);
        }
        .btn-primary:hover { box-shadow:0 0 0 1px rgba(255,255,255,0.14) inset, 0 16px 54px rgba(124,58,237,0.55); }
        .btn-primary svg { transition: transform 0.3s var(--ease); }
        .btn-primary:hover svg { transform: translateX(3px); }

        .btn-ghost {
          position:relative; overflow:hidden; will-change:transform;
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid var(--border); color:var(--muted2);
          padding:16px 28px; border-radius:12px;
          font-size:0.92rem; font-weight:500; text-decoration:none;
          transition:border-color 0.3s var(--ease), color 0.3s var(--ease), background 0.3s var(--ease), transform 0.25s var(--ease);
        }
        .btn-ghost:hover { border-color:rgba(139,92,246,0.4); color:var(--text); background:rgba(139,92,246,0.06); }
        .btn-ghost svg { transition: transform 0.3s var(--ease); }
        .btn-ghost:hover svg { transform: translateX(3px); }

        .trust-row {
          display:flex; align-items:center; gap:22px; flex-wrap:wrap; justify-content:center;
          margin-top:36px; position:relative; z-index:1; color:var(--muted); font-size:0.8rem;
          animation: heroIn 0.9s var(--ease) 0.32s both;
        }
        .trust-row span { display:inline-flex; align-items:center; gap:7px; }
        .trust-row svg { color:#4ade80; flex-shrink:0; }
        .trust-dot { width:3px; height:3px; border-radius:50%; background:var(--muted); opacity:0.6; }

        /* ---------------- RADAR / PREVIEW CARD ---------------- */
        .preview-outer { position:relative; margin-top:76px; z-index:1; display:flex; justify-content:center; animation: heroIn 1s var(--ease) 0.4s both; }
        .preview-halo { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:480px; height:480px; background:radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%); pointer-events:none; }

        .preview-frame { position:relative; padding:1.5px; border-radius:21.5px; }
        .preview-frame::before {
          content:''; position:absolute; inset:0; border-radius:inherit; padding:1.5px;
          background: conic-gradient(from var(--ang,0deg), rgba(139,92,246,0.7), rgba(34,211,238,0.55), rgba(99,102,241,0.6), rgba(139,92,246,0.7));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: rotateBorder 5s linear infinite;
          opacity:0.75;
        }
        @keyframes rotateBorder { to { --ang: 360deg; } }
        @property --ang { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

        .preview-card {
          background:rgba(9,9,16,0.94); border-radius:20px; width:368px; overflow:hidden;
          box-shadow:0 45px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.06);
          backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
        }
        .card-bar { display:flex; align-items:center; gap:6px; padding:14px 18px; background:rgba(139,92,246,0.055); border-bottom:1px solid var(--border-soft); }
        .dot { width:9px; height:9px; border-radius:50%; }
        .dr{background:#ff5f56;} .dy{background:#ffbd2e;} .dg{background:#27c93f;}
        .bar-title { margin-left:8px; font-size:0.75rem; color:var(--muted); font-weight:500; letter-spacing:0.04em; display:flex; align-items:center; gap:6px; }
        .card-body { padding:22px 20px; }
        .wa-head { display:flex; align-items:center; gap:12px; margin-bottom:18px; padding-bottom:14px; border-bottom:1px solid var(--border-soft); }
        .wa-av {
          width:38px; height:38px; border-radius:11px; background:var(--grad);
          display:flex; align-items:center; justify-content:center; color:#fff;
          box-shadow:0 0 18px rgba(124,58,237,0.45); flex-shrink:0;
        }
        .wa-n { font-weight:700; font-size:0.9rem; }
        .wa-s { font-size:0.71rem; color:#4ade80; margin-top:2px; display:flex; align-items:center; gap:5px; }
        .live-dot { width:6px; height:6px; border-radius:50%; background:#4ade80; box-shadow:0 0 6px #4ade80; animation: blink 2s ease-in-out infinite; }
        .bubble { background:rgba(255,255,255,0.025); border:1px solid var(--border-soft); border-radius:12px; padding:16px; font-size:0.82rem; line-height:1.7; }
        .bgreet { color:#c4b5fd; font-weight:600; display:flex; align-items:center; gap:6px; margin-bottom:10px; }
        .bitem {
          margin:8px 0; padding:11px 12px; background:rgba(139,92,246,0.055); border:1px solid rgba(139,92,246,0.14); border-radius:10px;
          display:flex; align-items:flex-start; gap:10px; transition: background 0.25s var(--ease), border-color 0.25s var(--ease);
        }
        .bitem:hover { background:rgba(139,92,246,0.1); border-color:rgba(139,92,246,0.26); }
        .bi-icon { width:26px; height:26px; border-radius:7px; background:rgba(139,92,246,0.14); color:#c4b5fd; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
        .bi-title { font-weight:600; font-size:0.82rem; }
        .bi-meta { font-size:0.73rem; color:var(--muted); margin-top:3px; }
        .bi-link { font-size:0.73rem; color:var(--cyan-light); text-decoration:none; display:inline-flex; align-items:center; gap:3px; margin-top:5px; font-weight:600; }

        /* ---------------- TICKER ---------------- */
        .ticker { overflow:hidden; border-top:1px solid var(--border-soft); border-bottom:1px solid var(--border-soft); background:var(--surface); position:relative; z-index:1; }
        .ticker::before, .ticker::after {
          content:''; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none;
        }
        .ticker::before { left:0; background:linear-gradient(90deg, var(--surface), transparent); }
        .ticker::after { right:0; background:linear-gradient(270deg, var(--surface), transparent); }
        .ticker-track { display:flex; width:max-content; animation:tick 32s linear infinite; padding:16px 0; }
        .ticker-track:hover { animation-play-state:paused; }
        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ti { display:inline-flex; align-items:center; gap:10px; padding:0 34px; white-space:nowrap; font-size:0.84rem; color:var(--muted2); }
        .ti svg { color:#a78bfa; flex-shrink:0; }
        .ttag { background:rgba(139,92,246,0.1); color:#c4b5fd; font-size:0.68rem; font-weight:700; padding:3px 10px; border-radius:100px; letter-spacing:0.05em; text-transform:uppercase; }
        .tsep { color:rgba(139,92,246,0.22); }

        /* ---------------- SECTION SHELL ---------------- */
        .section { padding:120px 24px; max-width:1120px; margin:0 auto; position:relative; z-index:1; }
        .label {
          font-size:0.71rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase;
          background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; display:inline-block; margin-bottom:16px;
        }
        h2 { font-weight:800; font-size:clamp(2.1rem,4vw,3.3rem); letter-spacing:-0.028em; line-height:1.08; margin-bottom:18px; }
        .sdesc { color:var(--muted2); font-size:1rem; line-height:1.75; max-width:480px; }

        /* ---------------- STEPS ---------------- */
        .steps { display:grid; grid-template-columns:repeat(4,1fr); margin-top:64px; gap:1px; background:var(--border-soft); border:1px solid var(--border-soft); border-radius:20px; overflow:hidden; }
        .step { background:var(--surface); padding:38px 26px; position:relative; overflow:hidden; transition:background 0.35s var(--ease); }
        .step::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--grad); transform:scaleX(0); transform-origin:left; transition:transform 0.5s var(--ease); }
        .step:hover::before { transform:scaleX(1); }
        .step:hover { background:var(--surface2); }
        .snum { font-size:0.68rem; font-weight:700; letter-spacing:0.12em; color:var(--muted); margin-bottom:22px; }
        .sicon {
          width:38px; height:38px; border-radius:10px; margin-bottom:18px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(139,92,246,0.09); border:1px solid rgba(139,92,246,0.18); color:#c4b5fd;
          transition: transform 0.35s var(--ease), background 0.35s var(--ease);
        }
        .step:hover .sicon { transform: scale(1.08) rotate(-4deg); background:rgba(139,92,246,0.16); }
        .stitle { font-weight:700; font-size:0.96rem; margin-bottom:11px; letter-spacing:-0.01em; }
        .sdesc2 { font-size:0.84rem; color:var(--muted2); line-height:1.68; }

        /* ---------------- STATS ---------------- */
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--border-soft); border:1px solid var(--border-soft); border-radius:20px; overflow:hidden; margin-top:84px; }
        .stat { background:var(--surface); padding:52px 30px; text-align:center; transition: background 0.35s var(--ease); }
        .stat:hover { background: var(--surface2); }
        .stn { font-size:clamp(2.3rem,5vw,3.5rem); font-weight:800; letter-spacing:-0.03em; background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .stl { font-size:0.83rem; color:var(--muted); margin-top:8px; font-weight:500; }

        /* ---------------- FEATURES ---------------- */
        .feats { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:64px; }
        .fc {
          background:var(--surface); border:1px solid var(--border-soft); border-radius:18px; padding:32px;
          position:relative; overflow:hidden; isolation:isolate;
          transition:border-color 0.35s var(--ease), transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
        }
        .fc::before {
          content:''; position:absolute; inset:0; border-radius:inherit; z-index:-1; opacity:0;
          background:radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.14), transparent 72%);
          transition:opacity 0.4s var(--ease);
        }
        .fc:hover::before { opacity:1; }
        .fc:hover { border-color:rgba(139,92,246,0.32); transform:translateY(-5px); box-shadow:0 24px 55px rgba(0,0,0,0.4); }
        .ficon {
          width:42px; height:42px; border-radius:11px; margin-bottom:20px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(139,92,246,0.09); border:1px solid rgba(139,92,246,0.18); color:#c4b5fd;
        }
        .ft { font-weight:700; font-size:0.97rem; margin-bottom:10px; letter-spacing:-0.01em; }
        .fd { font-size:0.85rem; color:var(--muted2); line-height:1.68; }

        /* ---------------- FINAL CTA ---------------- */
        .ctasec { position:relative; overflow:hidden; border-top:1px solid var(--border-soft); padding:150px 24px; text-align:center; }
        .cta-glow { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:820px; height:420px; background:radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, rgba(34,211,238,0.06) 50%, transparent 72%); pointer-events:none; animation: floatSlow 14s ease-in-out infinite; }
        .ctainner { position:relative; z-index:1; max-width:640px; margin:0 auto; }
        .ctasec h2 { font-size:clamp(2.4rem,5vw,4rem); }
        .ctasub { color:var(--muted2); font-size:1rem; line-height:1.75; margin:20px auto 46px; max-width:460px; }

        @media(max-width:900px){
          .steps{grid-template-columns:repeat(2,1fr);}
          .feats{grid-template-columns:repeat(2,1fr);}
        }
        @media(max-width:640px){
          nav{padding:0 20px;}
          .nav-links{display:none;}
          .hero{padding:130px 20px 70px;}
          .section{padding:76px 20px;}
          .steps{grid-template-columns:1fr;}
          .feats{grid-template-columns:1fr;}
          .stats{grid-template-columns:1fr 1fr;}
          .preview-card{width:100%; max-width:340px;}
          .trust-row{gap:14px; font-size:0.74rem;}
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Link href={"#"} className="logo-wrap">
          <Image
            src="/logo1.png"
            alt="Nexopra"
            className="logo-img"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#join">Join</a></li>
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          onMouseMove={handleMagnetMove}
          onMouseLeave={(e) => { handleMagnetLeave(e); }}
          onClick={createRipple}
        >
          <Icon name="chat" size={15} /> Get Started
        </a>
      </nav>

      {/* HERO */}
      <div
        className="hero"
        ref={heroRef}
        onMouseMove={handleHeroMove}
        onMouseEnter={handleHeroEnter}
        onMouseLeave={handleHeroLeave}
      >
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
        <div className="cursor-glow" ref={glowRef} />

        <div className="eyebrow">
          <Icon name="sparkle" size={13} />
          AI-Powered Opportunity Engine
          <span className="blink" />
        </div>

        <h1>
          <span className="plain">Your Personal</span>
          <span className="grad-text">Opportunity Radar</span>
          <span className="plain sub-plain">delivered to WhatsApp.</span>
        </h1>

        <p className="hero-sub">
          Nexopra automatically scans the web for jobs, internships, hackathons,
          and programs — then delivers the best matches to your WhatsApp every
          single day.
        </p>

        <div className="cta-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onMouseMove={handleMagnetMove}
            onMouseLeave={(e) => { handleMagnetLeave(e); }}
            onClick={createRipple}
          >
            <Icon name="chat" size={16} /> Start on WhatsApp — Free
          </a>
          <a
            href="#how"
            className="btn-ghost"
            onMouseMove={handleMagnetMove}
            onMouseLeave={(e) => { handleMagnetLeave(e); }}
          >
            How it works <Icon name="arrowRight" size={15} />
          </a>
        </div>

        <div className="trust-row">
          <span><Icon name="check" size={13} /> Free forever</span>
          <span className="trust-dot" />
          <span><Icon name="check" size={13} /> No app to download</span>
          <span className="trust-dot" />
          <span><Icon name="check" size={13} /> 2,000+ active users</span>
        </div>

        <div className="preview-outer">
          <div className="preview-halo" />
          <div className="preview-frame">
            <div
              className="preview-card"
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="card-bar">
                <span className="dot dr" />
                <span className="dot dy" />
                <span className="dot dg" />
                <span className="bar-title">
                  <Icon name="chat" size={12} /> Nexopra · WhatsApp
                </span>
              </div>
              <div className="card-body">
                <div className="wa-head">
                  <div className="wa-av"><Icon name="sparkle" size={17} /></div>
                  <div>
                    <div className="wa-n">Nexopra Bot</div>
                    <div className="wa-s"><span className="live-dot" /> Delivering now</div>
                  </div>
                </div>
                <div className="bubble">
                  <span className="bgreet"><Icon name="sparkle" size={13} /> Good morning, Alex</span>
                  Here are your picks for today:
                  <div className="bitem">
                    <span className="bi-icon"><Icon name="briefcase" size={13} /></span>
                    <div>
                      <div className="bi-title">Frontend Internship — Remote</div>
                      <div className="bi-meta">Deadline: June 22</div>
                      <a href="#" className="bi-link">Apply <Icon name="arrowRight" size={11} /></a>
                    </div>
                  </div>
                  <div className="bitem">
                    <span className="bi-icon"><Icon name="trophy" size={13} /></span>
                    <div>
                      <div className="bi-title">AI Hackathon — $15k Prize</div>
                      <div className="bi-meta">Open Now · 200+ teams</div>
                      <a href="#" className="bi-link">Apply <Icon name="arrowRight" size={11} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...opportunities, ...opportunities].map((o, i) => (
            <span key={i} className="ti">
              <Icon name={o.icon} size={14} /> {o.label} · {o.sub}
              <span className="ttag">{o.tag}</span>
              <span className="tsep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div ref={reg("how")} style={fade("how")}>
          <div className="label">How it works</div>
          <h2>
            From signup to your first
            <br />
            match in minutes
          </h2>
          <p className="sdesc">
            Four steps, fully automated. Nexopra runs quietly while you focus on
            what matters.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} ref={reg(`s${i}`)} style={fade(`s${i}`, i * 0.1)} className="step">
              <div className="snum">{s.num}</div>
              <div className="sicon"><Icon name={s.icon} size={19} /></div>
              <div className="stitle">{s.title}</div>
              <div className="sdesc2">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div ref={reg("stats")} style={fade("stats")} className="stats">
          {[
            { n: "2K+", l: "Active users" },
            { n: "500+", l: "Opportunities scanned daily" },
            { n: "10+", l: "Fields & skill sets" },
            { n: "100%", l: "Free — no app needed" },
          ].map((s, i) => (
            <div key={i} className="stat">
              <div className="stn">{s.n}</div>
              <div className="stl">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="section" id="features">
        <div ref={reg("feat")} style={fade("feat")}>
          <div className="label">Features</div>
          <h2>
            Built for builders.
            <br />
            Engineered for speed.
          </h2>
          <p className="sdesc">
            Everything you need to stay ahead — without spending hours
            searching.
          </p>
        </div>
        <div className="feats">
          {features.map((f, i) => (
            <div
              key={i}
              ref={reg(`f${i}`)}
              style={fade(`f${i}`, i * 0.07)}
              className="fc"
              onMouseMove={handleSpotlight}
            >
              <span className="ficon"><Icon name={f.icon} size={20} /></span>
              <div className="ft">{f.title}</div>
              <div className="fd">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="ctasec" id="join">
        <div className="cta-glow" />
        <div ref={reg("cta")} style={fade("cta")} className="ctainner">
          <div className="label">Get started today</div>
          <h2>
            Stop searching.
            <br />
            Let Nexopra find for you.
          </h2>
          <p className="ctasub">
            Join developers and students already receiving personalized
            opportunity updates daily — completely free on WhatsApp.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "18px 42px" }}
            onMouseMove={handleMagnetMove}
            onMouseLeave={(e) => { handleMagnetLeave(e); }}
            onClick={createRipple}
          >
            <Icon name="chat" size={17} /> Join Nexopra on WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050507", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 40px 48px", display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 200px", minWidth: 160 }}>
            <Image src="/logo1.png" alt="Nexopra" width={110} height={36} style={{ objectFit: "contain", opacity: 0.85, display: "block", marginBottom: 16 }} />
            <p style={{ fontSize: 13, color: "#6c6c86", lineHeight: 1.7, margin: 0 }}>
              Your personal opportunity radar — delivered to WhatsApp every day.
            </p>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6c6c86", margin: "0 0 20px" }}>Product</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["How it works", "#how"], ["Features", "#features"], ["Join for free", "#join"]].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 13, color: "#9c9cb8", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "#9c9cb8"}>{label}</a>
              ))}
            </div>
          </div>

          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6c6c86", margin: "0 0 20px" }}>Opportunities</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Tech Jobs", "Internships", "Hackathons", "Programs"].map(label => (
                <a key={label} href="#join" style={{ fontSize: 13, color: "#9c9cb8", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "#9c9cb8"}>{label}</a>
              ))}
            </div>
          </div>

          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6c6c86", margin: "0 0 20px" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#9c9cb8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#9c9cb8"}>WhatsApp Bot</a>
              <a href="mailto:hello@nexopra.com" style={{ fontSize: 13, color: "#9c9cb8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#9c9cb8"}>Contact</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 12, color: "#6c6c86" }}>© {new Date().getFullYear()} Nexopra. All rights reserved.</span>
            <span style={{ fontSize: 12, color: "#6c6c86" }}>
              Built by{" "}
              <a href="https://modred.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#9c9cb8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#c4b5fd"}
                onMouseLeave={e => e.target.style.color = "#9c9cb8"}>Modred</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}