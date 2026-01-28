import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./vals2.css";

// --- CONFIGURATION & DATA ---
const PARTNER_NAME = "Sarah";
const HERO_TITLE = "Our Love is a Universe";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=800&auto=format&fit=crop";

const MEMORIES = [
  {
    id: 1,
    title: "Celestial Beginning",
    date: "Spring 2022",
    desc: "When we first spoke, it felt like two stars finally aligning after eons of drifting.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Midnight Drives",
    date: "Summer 2023",
    desc: "The city lights were our only audience as we talked until the sun claimed the horizon.",
    img: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Silent Vow",
    date: "Winter 2024",
    desc: "In the quiet moments, I realized that home isn't a place, but the look in your eyes.",
    img: "https://images.unsplash.com/photo-1516339901600-2e1a62d0ed3c?q=80&w=600&auto=format&fit=crop",
  },
];

const REASONS = [
  {
    icon: "fa-star",
    label: "Brilliance",
    text: "Your intelligence challenges me and inspires me every single day.",
  },
  {
    icon: "fa-moon",
    label: "Serenity",
    text: "You are the calm in every storm I face.",
  },
  {
    icon: "fa-bolt",
    label: "Electric",
    text: "Your energy makes the mundane feel like a grand adventure.",
  },
  {
    icon: "fa-compass",
    label: "Direction",
    text: "You helped me find a version of myself I never knew existed.",
  },
];

// --- COMPONENTS ---

const Starfield = () => {
  const [stars, setStars] = useState([]);
  const [lanterns, setLanterns] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
    }));
    const l = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 15 + 15}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setStars(s);
    setLanterns(l);
  }, []);

  return (
    <div className="star-bg">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          // Casting style to React.CSSProperties to support custom '--duration' property
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            "--duration": star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="lantern"
          // Casting style to React.CSSProperties to support custom '--duration' property
          style={{
            left: lantern.left,
            "--duration": lantern.duration,
            animationDelay: lantern.delay,
          }}
        />
      ))}
    </div>
  );
};

const SectionReveal = ({ children }) => {
  const domRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`reveal ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
      <div className="text-2xl font-serif italic font-bold text-rose-500 tracking-tighter">
        MUSE
      </div>
      <div className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase font-semibold text-white/60">
        <a href="#nebula" className="hover:text-rose-500 transition">
          Memories
        </a>
        <a href="#constellations" className="hover:text-rose-500 transition">
          Reasons
        </a>
        <a href="#vow" className="hover:text-rose-500 transition">
          The Vow
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
    <SectionReveal>
      <div className="relative mb-12">
        <div className="absolute -inset-10 bg-rose-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <img
          src={HERO_IMAGE}
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border border-white/10 shadow-2xl relative z-10 brightness-90 contrast-110"
          alt="Hero"
        />
      </div>
      <h1 className="text-5xl md:text-8xl font-serif italic mb-4 tracking-tight">
        {HERO_TITLE}
      </h1>
      <p className="text-lg md:text-xl text-white/50 font-light tracking-widest uppercase mb-12">
        Dedicated to {PARTNER_NAME}
      </p>
      <a
        href="#nebula"
        className="inline-block border border-rose-500 text-rose-500 px-10 py-4 text-xs tracking-[0.3em] uppercase font-bold hover:bg-rose-500 hover:text-white transition-all duration-500 rounded-full"
      >
        Begin the Journey
      </a>
    </SectionReveal>
  </section>
);

const MemoriesNebula = () => (
  <section id="nebula" className="py-32 px-6 max-w-6xl mx-auto">
    <SectionReveal>
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-6">
          Nebula of Memories
        </h2>
        <div className="glow-line mx-auto max-w-xs"></div>
      </div>
    </SectionReveal>

    <div className="space-y-40">
      {MEMORIES.map((m, i) => (
        <SectionReveal key={m.id}>
          <div
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-24`}
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-purple-600/20 rounded-[4rem] blur-2xl group-hover:bg-rose-600/30 transition duration-700"></div>
              <img
                src={m.img}
                className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition duration-1000 border border-white/10"
                alt={m.title}
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center text-white font-serif italic text-2xl z-20 shadow-xl border-4 border-black">
                {i + 1}
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-rose-500 tracking-[0.4em] uppercase text-xs font-bold">
                {m.date}
              </span>
              <h3 className="text-4xl font-serif italic">{m.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light italic">
                "{m.desc}"
              </p>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

const Constellations = () => (
  <section id="constellations" className="py-32 px-6 bg-black/20">
    <div className="max-w-6xl mx-auto">
      <SectionReveal>
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">
            Why You are My Muse
          </h2>
          <p className="text-white/40 tracking-widest uppercase text-xs">
            A galaxy of reasons
          </p>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REASONS.map((r, i) => (
          <SectionReveal key={i}>
            <div className="glass-card p-10 h-full transition-all duration-500 group">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                <i
                  className={`fa-solid ${r.icon} text-rose-500 group-hover:text-white text-2xl`}
                ></i>
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tighter text-white group-hover:text-rose-400">
                {r.label}
              </h4>
              <p className="text-white/50 text-sm leading-loose">{r.text}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

const TheVow = () => (
  <footer id="vow" className="relative py-40 px-6 overflow-hidden">
    <SectionReveal>
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex justify-center gap-6 opacity-40">
          <i className="fa-solid fa-moon text-2xl animate-pulse"></i>
          <i className="fa-solid fa-star text-2xl animate-pulse delay-75"></i>
          <i className="fa-solid fa-moon text-2xl animate-pulse delay-150"></i>
        </div>
        <h2 className="text-5xl md:text-8xl font-serif italic leading-tight">
          To the Stars <br /> & Back Again
        </h2>
        <div className="glow-line mx-auto max-w-sm"></div>
        <p className="text-white/60 text-xl font-serif italic max-w-2xl mx-auto leading-relaxed px-4">
          "I didn't fall in love with you because I was lonely or lost. I fell
          in love with you because when I saw you, it was like for the first
          time, the universe made perfect sense."
        </p>
        <div className="pt-20 flex flex-col items-center gap-6">
          <div className="text-[10px] tracking-[0.6em] uppercase text-rose-500 font-black">
            ETERNAL VOW
          </div>
          <div className="text-white/20 text-xs font-light">
            EST. 2022 — {PARTNER_NAME.toUpperCase()} & ME
          </div>
        </div>
      </div>
    </SectionReveal>
  </footer>
);

const Vals2 = () => {
  return (
    <div className="vals2-theme relative flex flex-col items-center justify-center gap-12">
      <Starfield />
      <Navigation />
      <Hero />
      <div className="glow-line opacity-10"></div>
      <MemoriesNebula />
      <Constellations />
      <TheVow />
    </div>
  );
};

export default Vals2;
