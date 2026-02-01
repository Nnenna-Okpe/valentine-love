import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./vals3.css";

// --- CONFIGURATION & DATA ---
const LOVER_NAME = "My Dearest Sarah";
const LOVER_IMAGE =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop";

const MEMORIES = [
  {
    id: 1,
    date: "February 2022",
    title: "The First Hello",
    desc: "That cold winter evening at the bookstore. You were looking for a poetry book, and I was looking for a reason to talk to you.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "July 2022",
    title: "Summer Sunsets",
    desc: "Our road trip to the coast. We spent hours just watching the waves crash against the shore, saying nothing but feeling everything.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "December 2023",
    title: "Our First December",
    desc: "Wrapped in blankets, sipping hot cocoa while the world turned white outside. I realized then that I never want to be anywhere else.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
  },
];

const REASONS = [
  {
    icon: "fa-face-grin-hearts",
    text: "The way your eyes light up when you see a puppy.",
  },
  {
    icon: "fa-mug-hot",
    text: "How you always make the perfect cup of tea when I am tired.",
  },
  {
    icon: "fa-music",
    text: "Your terrible singing that somehow sounds like my favorite song.",
  },
  {
    icon: "fa-hand-holding-heart",
    text: "The boundless kindness you show to every stranger.",
  },
  {
    icon: "fa-star",
    text: "Because you believe in me even when I forget to believe in myself.",
  },
  {
    icon: "fa-infinity",
    text: "Simply because you are you, and that is enough.",
  },
];

// --- HELPER COMPONENTS ---

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <i
          key={h.id}
          className="fa-solid fa-heart heart-particle"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
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
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`reveal ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

// --- MAIN APP SECTIONS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-cursive text-rose-600 font-bold">
          Forever Yours
        </h1>
        <div className="flex gap-6 text-sm font-medium text-rose-800">
          <a href="#memories" className="hover:text-rose-500 transition">
            Memories
          </a>

          <a href="#reasons" className="hover:text-rose-500 transition">
            Why You?
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
    <div className="relative mb-8 group">
      <div className="absolute -inset-4 bg-rose-400 rounded-full blur opacity-20 group-hover:opacity-40 transition animate-pulse"></div>
      <img
        src={LOVER_IMAGE}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
        alt="Loved One"
      />
      <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white p-4 rounded-full shadow-lg z-20 animate-bounce">
        <i className="fa-solid fa-heart text-xl"></i>
      </div>
    </div>
    <div className="text-center z-10 space-y-4">
      <h2 className="text-5xl md:text-7xl font-cursive text-rose-600 drop-shadow-sm">
        Happy Valentine's Day
      </h2>
      <p className="text-xl md:text-2xl font-light text-rose-900/70">
        {LOVER_NAME}
      </p>
      <div className="pt-8">
        <a
          href="#memories"
          className="bg-rose-500 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-rose-200 hover:bg-rose-600 transition-all hover:-translate-y-1 inline-block"
        >
          Explore Our Story
        </a>
      </div>
    </div>
  </header>
);

const MemoryLane = () => (
  <section id="memories" className="py-24 max-w-5xl mx-auto px-6">
    <SectionReveal>
      <div className="text-center mb-20">
        <h3 className="text-4xl md:text-5xl font-cursive text-rose-600 mb-4">
          Memory Lane
        </h3>
        <p className="text-rose-800/60 italic font-medium">
          The chapters of us that I cherish the most...
        </p>
        <div className="w-24 h-1 bg-rose-200 mx-auto mt-6 rounded-full"></div>
      </div>
    </SectionReveal>

    <div className="space-y-24">
      {MEMORIES.map((m, i) => (
        <SectionReveal key={m.id}>
          <div
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12 items-center`}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={m.img}
                className="w-full h-80 object-cover hover:scale-110 transition duration-1000"
                alt={m.title}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <span className="text-rose-400 font-bold tracking-widest text-xs uppercase bg-rose-50 px-3 py-1 rounded-full">
                {m.date}
              </span>
              <h4 className="text-3xl font-bold text-rose-900">{m.title}</h4>
              <p className="text-rose-800/70 leading-relaxed text-lg italic">
                "{m.desc}"
              </p>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

const ReasonsSection = () => (
  <section id="reasons" className="py-24 px-6 max-w-6xl mx-auto">
    <SectionReveal>
      <div className="text-center mb-16">
        <h3 className="text-4xl font-cursive text-rose-600 mb-4">
          Why I Love You
        </h3>
        <p className="text-rose-800/60 italic">
          Because a thousand pages wouldn't be enough...
        </p>
      </div>
    </SectionReveal>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {REASONS.map((r, i) => (
        <SectionReveal key={i}>
          <div className="p-10 bg-white rounded-3xl shadow-sm border border-rose-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-500 transition-colors duration-500">
              <i
                className={`fa-solid ${r.icon} text-rose-500 text-2xl group-hover:text-white transition-colors duration-500`}
              ></i>
            </div>
            <p className="text-rose-900 font-semibold text-lg leading-relaxed relative z-10">
              {r.text}
            </p>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-rose-600 py-4 text-center h-full justify-center flex items-center text-white relative overflow-hidden w-full">
    <div className="absolute inset-0 opacity-10 pointer-events-none my-6">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
      <div className="flex justify-center gap-6 mb-8">
        <i className="fa-solid fa-heart animate-pulse text-3xl"></i>
        <i className="fa-solid fa-heart animate-pulse delay-75 text-3xl"></i>
        <i className="fa-solid fa-heart animate-pulse delay-150 text-3xl"></i>
      </div>
      <h3 className="text-5xl md:text-6xl font-cursive">To Forever & Beyond</h3>
      <p className="text-rose-100 text-xl md:text-2xl italic max-w-2xl mx-auto">
        "In all the world, there is no heart for me like yours. In all the
        world, there is no love for you like mine."
      </p>
      <div className="pt-12 border-t border-rose-500/50 text-sm opacity-80 flex flex-col items-center gap-2">
        <p className="font-bold tracking-widest uppercase">
          Created with all my heart for {LOVER_NAME.split(" ").pop()}
        </p>
        <p>© 2025 Our Love Story</p>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

const Vals3 = () => {
  return (
    <div className="vals3-theme relative min-h-screen bg-rose-50/30 selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      <Navbar />
      <Hero />
      <MemoryLane />

      <ReasonsSection />
      <Footer />
    </div>
  );
};

export default Vals3;
