"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/1234567890?text=Hi%20Nexopra%2C%20I%20want%20to%20join!";

const opportunities = [
  {
    icon: "💼",
    label: "Frontend Internship",
    sub: "Remote · Deadline: June 22",
    tag: "Internship",
  },
  {
    icon: "🏆",
    label: "AI Hackathon",
    sub: "$15k Prize Pool · Open Now",
    tag: "Hackathon",
  },
  {
    icon: "🌍",
    label: "Graduate Program",
    sub: "Google · 50 Slots Left",
    tag: "Career",
  },
  {
    icon: "🔐",
    label: "Cybersecurity Role",
    sub: "Remote · Full-Time",
    tag: "Job",
  },
  {
    icon: "🎨",
    label: "UI/UX Design Sprint",
    sub: "Remote · 3-day challenge",
    tag: "Hackathon",
  },
  {
    icon: "📊",
    label: "Data Science Fellowship",
    sub: "Meta · Paid · 6 months",
    tag: "Career",
  },
];

const steps = [
  {
    num: "01",
    title: "Join & Set Your Profile",
    desc: "Tell Nexopra your name, skill set — frontend, UI/UX, cybersecurity, data — and preferred delivery time.",
    icon: "◎",
  },
  {
    num: "02",
    title: "AI Scans the Web",
    desc: "Every day the engine scours job boards, hackathon platforms, and career portals for active openings in your field.",
    icon: "⟳",
  },
  {
    num: "03",
    title: "Smart Filtering",
    desc: "Expired, duplicate, and off-target listings are stripped out. Only verified, high-quality matches remain.",
    icon: "◈",
  },
  {
    num: "04",
    title: "Delivered to WhatsApp",
    desc: "A clean, personalized digest arrives in your WhatsApp every morning. No apps. No logins. Just opportunities.",
    icon: "◐",
  },
];

const features = [
  {
    icon: "◎",
    title: "Personalized Matching",
    desc: "Every result filtered to your exact skill and experience level.",
  },
  {
    icon: "◷",
    title: "Daily Automation",
    desc: "Zero effort — fresh picks delivered every single morning.",
  },
  {
    icon: "◈",
    title: "Hackathon Radar",
    desc: "Never miss a competition, grant, or prize pool again.",
  },
  {
    icon: "◑",
    title: "Internship Alerts",
    desc: "Early-stage alerts before deadlines close worldwide.",
  },
  {
    icon: "◐",
    title: "Remote-First",
    desc: "Global remote tech roles surfaced and ranked daily.",
  },
  {
    icon: "◻",
    title: "Zero Noise",
    desc: "Duplicates and expired listings are cut before they reach you.",
  },
];

export default function Home() {
  const [visible, setVisible] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const refs = useRef({});

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #05050a;
          --surface: #0c0c16;
          --surface2: #10101e;
          --border: rgba(124,58,237,0.12);
          --border2: rgba(255,255,255,0.06);
          --purple: #7c3aed;
          --indigo: #4f46e5;
          --cyan: #06b6d4;
          --cyan-light: #22d3ee;
          --grad: linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #06b6d4 100%);
          --grad-text: linear-gradient(90deg, #a78bfa 0%, #818cf8 45%, #22d3ee 100%);
          --text: #f0f0fa;
          --muted: #6b6b8a;
          --muted2: #9090b0;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* noise */
        body::after {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity:.4;
        }

        /* NAV */
        nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 48px; height:68px;
          transition: background 0.4s, border-color 0.4s;
          backdrop-filter: blur(20px);
        }
        .nav-scrolled { background:rgba(5,5,10,0.9); }
        .logo-img { width:120px; height:auto; object-fit:contain; display:block; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a { color:var(--muted2); font-size:0.875rem; font-weight:500; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:var(--text); }
        .nav-cta {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--grad); color:#fff;
          padding:10px 22px; border-radius:8px;
          font-weight:600; font-size:0.85rem; text-decoration:none;
          box-shadow:0 0 24px rgba(124,58,237,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover { transform:translateY(-2px); box-shadow:0 6px 34px rgba(124,58,237,0.55); }

        /* HERO */
        .hero {
          min-height:100vh; display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          text-align:center; padding:140px 24px 80px;
          position:relative; overflow:hidden;
        }
        .orb { position:absolute; pointer-events:none; border-radius:50%; }
        .orb-1 { top:-80px; left:50%; transform:translateX(-50%); width:900px; height:600px; background:radial-gradient(ellipse at 40% 40%, rgba(124,58,237,0.16) 0%, rgba(79,70,229,0.09) 45%, transparent 70%); }
        .orb-2 { top:15%; right:-180px; width:480px; height:480px; background:radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%); }
        .orb-3 { bottom:5%; left:-100px; width:380px; height:380px; background:radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%); }
        .hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px);
          background-size:64px 64px;
          mask-image:radial-gradient(ellipse at 50% 40%, black 20%, transparent 72%);
        }

        .eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          border:1px solid rgba(124,58,237,0.28); background:rgba(124,58,237,0.07);
          color:#a78bfa; font-size:0.76rem; font-weight:700;
          padding:7px 18px; border-radius:100px; margin-bottom:32px;
          letter-spacing:0.09em; text-transform:uppercase; position:relative; z-index:1;
        }
        .blink { width:6px; height:6px; border-radius:50%; background:var(--cyan-light); box-shadow:0 0 8px var(--cyan); animation:blink 2.5s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.35;transform:scale(0.65)} }

        h1 {
          font-family:'Outfit',sans-serif; font-weight:900;
          font-size:clamp(3rem,6.5vw,5.8rem); line-height:1.0;
          letter-spacing:-0.03em; margin-bottom:26px;
          max-width:860px; position:relative; z-index:1;
        }
        .plain { color:var(--text); display:block; }
        .grad-text {
          display:block; background:var(--grad-text);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .sub-plain { font-size:0.82em; font-weight:400; color:var(--muted2); letter-spacing:-0.01em; }

        .hero-sub { font-size:clamp(0.95rem,1.7vw,1.1rem); color:var(--muted2); max-width:490px; line-height:1.75; margin-bottom:48px; position:relative; z-index:1; }

        .cta-row { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; position:relative; z-index:1; }

        .btn-primary {
          display:inline-flex; align-items:center; gap:10px;
          background:var(--grad); color:#fff;
          padding:15px 32px; border-radius:10px;
          font-weight:700; font-size:0.95rem; text-decoration:none;
          box-shadow:0 0 40px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.12);
          transition:transform 0.25s, box-shadow 0.25s;
        }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:0 10px 50px rgba(124,58,237,0.55), inset 0 1px 0 rgba(255,255,255,0.12); }

        .btn-ghost {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid var(--border2); color:var(--muted2);
          padding:15px 28px; border-radius:10px;
          font-size:0.9rem; font-weight:500; text-decoration:none;
          transition:border-color 0.25s, color 0.25s, background 0.25s;
        }
        .btn-ghost:hover { border-color:rgba(124,58,237,0.35); color:var(--text); background:rgba(124,58,237,0.06); }

        /* PREVIEW */
        .preview-outer { position:relative; margin-top:80px; z-index:1; display:flex; justify-content:center; }
        .preview-halo { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:440px; height:440px; background:radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 65%); pointer-events:none; }
        .preview-card {
          background:rgba(10,10,20,0.92); border:1px solid rgba(124,58,237,0.22);
          border-radius:20px; width:360px; overflow:hidden;
          box-shadow:0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(124,58,237,0.08);
          backdrop-filter:blur(24px);
        }
        .card-bar { display:flex; align-items:center; gap:6px; padding:14px 18px; background:rgba(124,58,237,0.06); border-bottom:1px solid rgba(124,58,237,0.1); }
        .dot { width:10px; height:10px; border-radius:50%; }
        .dr{background:#ff5f56;} .dy{background:#ffbd2e;} .dg{background:#27c93f;}
        .bar-title { margin-left:8px; font-size:0.76rem; color:var(--muted); font-weight:500; letter-spacing:0.05em; }
        .card-body { padding:22px 20px; }
        .wa-head { display:flex; align-items:center; gap:12px; margin-bottom:18px; padding-bottom:14px; border-bottom:1px solid var(--border2); }
        .wa-av { width:38px; height:38px; border-radius:50%; background:var(--grad); display:flex; align-items:center; justify-content:center; font-size:1rem; box-shadow:0 0 18px rgba(124,58,237,0.45); flex-shrink:0; }
        .wa-n { font-weight:700; font-size:0.9rem; }
        .wa-s { font-size:0.71rem; color:var(--cyan-light); margin-top:2px; }
        .bubble { background:rgba(255,255,255,0.03); border:1px solid var(--border2); border-radius:12px; padding:16px; font-size:0.82rem; line-height:1.7; }
        .bgreet { color:#a78bfa; font-weight:600; display:block; margin-bottom:10px; }
        .bitem { margin:8px 0; padding:10px 12px; background:rgba(124,58,237,0.06); border:1px solid rgba(124,58,237,0.12); border-radius:8px; }
        .bi-title { font-weight:600; font-size:0.83rem; }
        .bi-meta { font-size:0.75rem; color:var(--muted); margin-top:3px; }
        .bi-link { font-size:0.75rem; color:var(--cyan-light); text-decoration:none; display:inline-block; margin-top:4px; }

        /* TICKER */
        .ticker { overflow:hidden; border-top:1px solid var(--border); border-bottom:1px solid var(--border); background:var(--surface); }
        .ticker-track { display:flex; width:max-content; animation:tick 30s linear infinite; padding:15px 0; }
        .ticker-track:hover { animation-play-state:paused; }
        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ti { display:inline-flex; align-items:center; gap:10px; padding:0 36px; white-space:nowrap; font-size:0.84rem; color:var(--muted2); }
        .ttag { background:rgba(124,58,237,0.1); color:#a78bfa; font-size:0.69rem; font-weight:700; padding:2px 10px; border-radius:100px; letter-spacing:0.05em; text-transform:uppercase; }
        .tsep { color:rgba(124,58,237,0.2); }

        /* SECTION */
        .section { padding:110px 24px; max-width:1120px; margin:0 auto; position:relative; z-index:1; }
        .label {
          font-size:0.71rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
          background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; display:inline-block; margin-bottom:16px;
        }
        h2 { font-family:'Outfit',sans-serif; font-size:clamp(2.2rem,4vw,3.4rem); font-weight:800; letter-spacing:-0.025em; line-height:1.08; margin-bottom:18px; }
        .sdesc { color:var(--muted2); font-size:1rem; line-height:1.75; max-width:480px; }

        /* STEPS */
        .steps { display:grid; grid-template-columns:repeat(4,1fr); margin-top:64px; gap:1px; background:var(--border); border:1px solid var(--border); border-radius:18px; overflow:hidden; }
        .step { background:var(--surface); padding:40px 28px; position:relative; overflow:hidden; transition:background 0.3s; }
        .step::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--grad); transform:scaleX(0); transform-origin:left; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .step:hover::before { transform:scaleX(1); }
        .step:hover { background:var(--surface2); }
        .snum { font-size:0.69rem; font-weight:700; letter-spacing:0.1em; color:var(--muted); margin-bottom:20px; text-transform:uppercase; }
        .sglyph { font-size:1.6rem; margin-bottom:16px; background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:block; }
        .stitle { font-weight:700; font-size:0.95rem; margin-bottom:12px; }
        .sdesc2 { font-size:0.84rem; color:var(--muted2); line-height:1.65; }

        /* STATS */
        .stats { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); border-radius:18px; overflow:hidden; margin-top:80px; }
        .stat { background:var(--surface); padding:52px 32px; text-align:center; }
        .stn { font-family:'Outfit',sans-serif; font-size:clamp(2.4rem,5vw,3.6rem); font-weight:900; letter-spacing:-0.03em; background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .stl { font-size:0.84rem; color:var(--muted); margin-top:8px; font-weight:500; }

        /* FEATURES */
        .feats { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:64px; }
        .fc { background:var(--surface); border:1px solid var(--border2); border-radius:16px; padding:32px; position:relative; overflow:hidden; transition:border-color 0.3s,transform 0.3s,box-shadow 0.3s; }
        .fc::after { content:''; position:absolute; bottom:-60px; right:-60px; width:120px; height:120px; background:radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%); opacity:0; transition:opacity 0.3s; }
        .fc:hover { border-color:rgba(124,58,237,0.3); transform:translateY(-4px); box-shadow:0 20px 50px rgba(0,0,0,0.35); }
        .fc:hover::after { opacity:1; }
        .fg { font-size:1.4rem; margin-bottom:18px; background:var(--grad-text); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:block; }
        .ft { font-weight:700; font-size:0.95rem; margin-bottom:10px; }
        .fd { font-size:0.84rem; color:var(--muted2); line-height:1.65; }

        /* FINAL CTA */
        .ctasec { position:relative; overflow:hidden; border-top:1px solid var(--border); padding:140px 24px; text-align:center; }
        .cta-glow { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:800px; height:400px; background:radial-gradient(ellipse, rgba(124,58,237,0.13) 0%, rgba(6,182,212,0.06) 50%, transparent 72%); pointer-events:none; }
        .ctainner { position:relative; z-index:1; max-width:640px; margin:0 auto; }
        .ctasec h2 { font-size:clamp(2.5rem,5vw,4rem); }
        .ctasub { color:var(--muted2); font-size:1rem; line-height:1.75; margin:20px auto 48px; max-width:460px; }

        /* FOOTER */
          .foot-logo { width:100px; height:auto; opacity:0.7; }

        @media(max-width:900px){
          .steps{grid-template-columns:repeat(2,1fr);}
          .feats{grid-template-columns:repeat(2,1fr);}
        }
        @media(max-width:640px){
          nav{padding:0 20px;}
          .nav-links{display:none;}
          .section{padding:70px 20px;}
          .steps{grid-template-columns:1fr;}
          .feats{grid-template-columns:1fr;}
          .stats{grid-template-columns:1fr 1fr;}
             }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Image
          src="/logo1.png"
          alt="Nexopra"
          className="logo-img"
          width={120}
          height={40}
          style={{ objectFit: "contain" }}
        />
        <ul className="nav-links">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          💬 Get Started
        </a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />

        <div className="eyebrow">
          <span className="blink" /> AI-Powered Opportunity Bot
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
          >
            💬 Start on WhatsApp — Free
          </a>
          <a href="#how" className="btn-ghost">
            How it works →
          </a>
        </div>

        <div className="preview-outer">
          <div className="preview-halo" />
          <div className="preview-card">
            <div className="card-bar">
              <span className="dot dr" />
              <span className="dot dy" />
              <span className="dot dg" />
              <span className="bar-title">Nexopra · WhatsApp</span>
            </div>
            <div className="card-body">
              <div className="wa-head">
                <div className="wa-av">🤖</div>
                <div>
                  <div className="wa-n">Nexopra Bot</div>
                  <div className="wa-s">● Delivering now</div>
                </div>
              </div>
              <div className="bubble">
                <span className="bgreet">✦ Good morning, Alex</span>
                Here are your picks for today:
                <div className="bitem">
                  <div className="bi-title">
                    💼 Frontend Internship — Remote
                  </div>
                  <div className="bi-meta">Deadline: June 22</div>
                  <a href="#" className="bi-link">
                    Apply →
                  </a>
                </div>
                <div className="bitem">
                  <div className="bi-title">🏆 AI Hackathon — $15k Prize</div>
                  <div className="bi-meta">Open Now · 200+ teams</div>
                  <a href="#" className="bi-link">
                    Apply →
                  </a>
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
              {o.icon} {o.label} · {o.sub}
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
            <div
              key={i}
              ref={reg(`s${i}`)}
              style={fade(`s${i}`, i * 0.1)}
              className="step"
            >
              <div className="snum">{s.num}</div>
              <div className="sglyph">{s.icon}</div>
              <div className="stitle">{s.title}</div>
              <div className="sdesc2">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div ref={reg("stats")} style={fade("stats")} className="stats">
          {[
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
            >
              <span className="fg">{f.icon}</span>
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
          >
            💬 Join Nexopra on WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER */}
            <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#05050a", position: "relative", zIndex: 10 }}>
 
        {/* Top */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 40px 48px", display: "flex", gap: 48, flexWrap: "wrap" }}>
 
          {/* Brand */}
          <div style={{ flex: "0 0 200px", minWidth: 160 }}>
            <Image src="/logo1.png" alt="Nexopra" width={110} height={36} style={{ objectFit: "contain", opacity: 0.85, display: "block", marginBottom: 16 }} />
            <p style={{ fontSize: 13, color: "#6b6b8a", lineHeight: 1.7, margin: 0 }}>
              Your personal opportunity radar — delivered to WhatsApp every day.
            </p>
          </div>
 
          {/* Spacer */}
          <div style={{ flex: 1 }} />
 
          {/* Product */}
          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b8a", margin: "0 0 20px" }}>Product</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["How it works", "#how"], ["Features", "#features"], ["Join for free", "#join"]].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 13, color: "#9090b0", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "#9090b0"}>{label}</a>
              ))}
            </div>
          </div>
 
          {/* Opportunities */}
          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b8a", margin: "0 0 20px" }}>Opportunities</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Tech Jobs", "Internships", "Hackathons", "Programs"].map(label => (
                <a key={label} href="#join" style={{ fontSize: 13, color: "#9090b0", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "#9090b0"}>{label}</a>
              ))}
            </div>
          </div>
 
          {/* Connect */}
          <div style={{ flex: "0 0 140px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b8a", margin: "0 0 20px" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#9090b0", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#9090b0"}>WhatsApp Bot</a>
              <a href="mailto:hello@nexopra.com" style={{ fontSize: 13, color: "#9090b0", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#9090b0"}>Contact</a>
            </div>
          </div>
        </div>
 
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 12, color: "#6b6b8a" }}>© {new Date().getFullYear()} Nexopra. All rights reserved.</span>
            <span style={{ fontSize: 12, color: "#6b6b8a" }}>
              Built by{" "}
              <a href="https://modred.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#9090b0", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#a78bfa"}
                onMouseLeave={e => e.target.style.color = "#9090b0"}>Modred</a>
            </span>
          </div>
        </div>
 
      </footer>

    </>
  );
}
