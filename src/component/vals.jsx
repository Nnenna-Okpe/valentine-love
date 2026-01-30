import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Heart,
  Star,
  Sparkles,
  ArrowRight,
  Camera,
  Music,
  BookOpen,
  Quote,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";
import "./vals1.css";

// --- Narrative Data ---
const JOURNEY_STEPS = [
  {
    id: "prologue",
    title: "The Prologue",
    subtitle: "A Sudden Spark",
    content:
      "It started with a glance that lingered a second too long. A quiet gravity that pulled two worlds into one orbit.",
    icon: <Sparkles className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200",
    alignment: "left",
  },
  {
    id: "chapter-1",
    title: "The Resonance",
    subtitle: "Harmonies Found",
    content:
      "We discovered that our silences matched as perfectly as our laughter. Every shared word became a stone in our foundation.",
    icon: <Music className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=1200",
    alignment: "right",
  },
  {
    id: "chapter-2",
    title: "The Meridian",
    subtitle: "Uncharted Territory",
    content:
      "From the peaks of joy to the quiet valleys of understanding, every mile traveled together has been my favorite destination.",
    icon: <MapPin className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1522673607200-164883e758ef?auto=format&fit=crop&q=80&w=1200",
    alignment: "left",
  },
  {
    id: "epilogue",
    title: "The Infinite",
    subtitle: "The Final Vow",
    content:
      "There is no end to this story. Only a continuous loop of gratitude, respect, and a love that grows deeper with every dawn.",
    icon: <Heart className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=1200",
    alignment: "right",
  },
];

// --- Step Section Component ---
const StepSection = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="vals1-theme min-h-screen relative flex items-center justify-center overflow-hidden py-32 px-6"
    >
      <div
        className={`container mx-auto flex flex-col ${
          step.alignment === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12 lg:gap-24`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: step.alignment === "left" ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 z-10"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.5em] text-pink-500 uppercase">
              Act 0{index + 1}
            </span>
            <h2 className="text-6xl md:text-8xl font-luxury text-gray-900">
              {step.title}
            </h2>
            <p className="font-script text-4xl text-pink-600 opacity-80">
              {step.subtitle}
            </p>
          </div>

          <div className="relative">
            <Quote
              className="absolute -top-6 -left-6 text-pink-100 -z-10"
              size={64}
            />
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic border-l-2 border-pink-500 pl-8">
              "{step.content}"
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-pink-600 font-bold uppercase tracking-widest text-xs cursor-pointer group"
          >
            Explore this moment
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={16}
            />
          </motion.div>
        </motion.div>

        {/* Visual Frame */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: step.alignment === "left" ? 5 : -5,
          }}
          animate={
            isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0 }
          }
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative aspect-[4/5] max-w-lg w-full"
        >
          {/* Decorative frames */}
          <div className="absolute inset-4 border border-pink-500/30 -z-10 translate-x-4 translate-y-4" />
          <div className="absolute inset-0 border border-black/10 -z-20 -translate-x-4 -translate-y-4" />

          {/* Main Image */}
          <div className="w-full h-full overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-pink-900/10 mix-blend-overlay" />

            {/* Overlay Icon */}
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-pink-600 flex items-center justify-center rounded-full shadow-lg">
              {step.icon}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Main App ---
export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const ribbonWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const handleFinale = () => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ff2d75", "#ffffff", "#ffd700"],
    });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Editorial Progress UI */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-10 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <Heart size={24} fill="white" />
          <span className="font-bold tracking-widest text-xs uppercase">
            Eternal Velvet
          </span>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-60">
          The Journey of Us
        </div>
      </nav>

      {/* Progress Line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[60]">
        <motion.div
          style={{ width: ribbonWidth }}
          className="h-full bg-pink-600"
        />
      </div>

      {/* Chapter Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8">
        {JOURNEY_STEPS.map((_, i) => (
          <div key={i} className="group flex items-center gap-4 cursor-pointer">
            <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-pink-500 transition-all group-hover:w-12" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-pink-500">
              Act 0{i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center overflow-hidden bg-white">
        <div className="curve-bg" />

        <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 h-full">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="flex flex-col justify-center space-y-12 z-10"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-black tracking-[0.8em] text-pink-500 uppercase block"
              >
                14.02.2025
              </motion.span>
              <h1 className="text-7xl md:text-[10rem] font-luxury text-gray-900 leading-[0.85] tracking-tighter">
                A Letter <br />
                <span className="italic">To You</span>
              </h1>
            </div>

            <p className="text-gray-400 max-w-sm leading-relaxed font-light tracking-wide text-lg">
              Every chapter we've written together is my favorite one yet.
              Scroll down to revisit our story.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-300"
            >
              Scroll to begin
              <ArrowRight size={14} className="rotate-90" />
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative z-10 w-full max-w-md aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover grayscale brightness-125"
                alt="Main Hero"
              />
              <div className="absolute inset-0 border-[20px] border-white/20" />
            </motion.div>

            <div className="absolute top-1/4 right-0 text-white z-20">
              <Star className="animate-pulse" size={60} fill="white" />
              <div className="w-64 h-[1px] bg-gradient-to-r from-white to-transparent -rotate-12 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      {JOURNEY_STEPS.map((step, idx) => (
        <StepSection key={step.id} step={step} index={idx} />
      ))}

      {/* Finale */}
      <section className="min-h-screen bg-[#1a0d0d] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-600/20"
              animate={{
                y: [-20, -1000],
                x: Math.sin(i) * 100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 1,
              }}
              style={{ left: `${i * 10}%`, bottom: "-10%" }}
            >
              <Heart size={40 + i * 10} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-3xl space-y-12"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Heart
                size={100}
                className="text-pink-600 mx-auto drop-shadow-[0_0_20px_rgba(255,45,117,0.5)]"
                fill="currentColor"
              />
            </motion.div>
            <Sparkles className="absolute -top-4 -right-4 text-white" />
          </div>

          <h2 className="text-6xl md:text-8xl font-luxury text-white">
            Forever <br />
            <span className="font-script text-pink-500">Isn't Long Enough</span>
          </h2>

          <p className="text-gray-400 font-light text-xl leading-relaxed italic">
            "I didn't choose you. My heart chose you, and my soul decided to
            follow. Thank you for making every act of this life worth playing
            out."
          </p>

          <button
            onClick={handleFinale}
            className="group relative inline-flex items-center h-16 bg-pink-600 px-12 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="text-white font-bold tracking-[0.3em] uppercase text-xs z-10">
              Sign Our Vow
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
            <ArrowRight
              size={18}
              className="text-white ml-4 group-hover:translate-x-2 transition-transform"
            />
          </button>
        </motion.div>

        <div className="absolute bottom-12 left-0 w-full flex justify-center gap-10 text-[10px] font-black uppercase tracking-[0.5em] text-gray-700">
          <span>The Beginning</span>
          <span className="text-pink-600">•</span>
          <span>The Now</span>
          <span className="text-pink-600">•</span>
          <span>The Eternity</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-300 gap-8 bg-white">
        <div className="flex gap-12 font-bold text-[9px] tracking-[0.4em] uppercase">
          <span className="hover:text-pink-600 cursor-pointer transition-colors">
            Instagram
          </span>
          <span className="hover:text-pink-600 cursor-pointer transition-colors">
            Facebook
          </span>
          <span className="hover:text-pink-600 cursor-pointer transition-colors">
            Story
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:border-pink-600 transition-all cursor-pointer">
            <Camera size={16} />
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:border-pink-600 transition-all cursor-pointer">
            <BookOpen size={16} />
          </div>
        </div>
        <p className="text-[10px] tracking-widest font-black uppercase text-gray-400">
          Copyright © 2025 Eternal Romance
        </p>
      </footer>
    </div>
  );
}
