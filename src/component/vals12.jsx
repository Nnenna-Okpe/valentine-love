import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Heart,
  Star,
  Sparkles,
  Gift,
  Camera,
  Music,
  MapPin,
  ChevronDown,
} from "lucide-react";
import confetti from "canvas-confetti";
import "./vals12.css";

// --- Static Content ---
const REASONS = [
  "The way your eyes crinkle when you laugh.",
  "How you always know exactly what to say.",
  "Your unwavering kindness to everyone.",
  "The peaceful feeling of just being near you.",
  "How you make every ordinary day feel like an adventure.",
  "The way you believe in me even when I don't.",
];

const MEMORIES = [
  {
    id: 1,
    title: "Our First Date",
    icon: <Camera size={24} />,
    color: "bg-rose-100",
  },
  {
    id: 2,
    title: "That Rainy Afternoon",
    icon: <Music size={24} />,
    color: "bg-pink-100",
  },
  {
    id: 3,
    title: "Our Favorite Spot",
    icon: <MapPin size={24} />,
    color: "bg-red-100",
  },
];

const SURPRISE_COUPONS = [
  "One Free Bear Hug",
  "Homemade Dinner Date",
  "Movie Marathon Choice",
  "A Weekend Getaway",
  "Unlimited Kisses",
  "Coffee in Bed",
];

// --- Sub-components ---

const PaperHeartSVG = ({ color = "#ff4d6d", size = 100, rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    style={{ transform: `rotate(${rotate}deg)` }}
    className="paper-heart opacity-90"
  >
    <path
      d="M100 180 c-10-10-90-60-90-110 a40 40 0 0 1 80-10 a40 40 0 0 1 80 10 c0 50-80 100-90 110"
      fill={color}
    />
    <path
      d="M100 180 c-5-5-45-30-45-55 a20 20 0 0 1 40-5 c0 5-5 10-5 10"
      fill="rgba(0,0,0,0.1)"
    />
  </svg>
);

const HeartPopActivity = () => {
  const [popped, setPopped] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const popHeart = (index) => {
    if (popped.includes(index)) return;
    setPopped([...popped, index]);
    setCurrentMessage(SURPRISE_COUPONS[index % SURPRISE_COUPONS.length]);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ff4d6d", "#ff758f", "#ff8fa3"],
    });
  };

  return (
    <div className="vals12-theme w-full max-w-2xl mx-auto p-8 bg-white/50 rounded-[2rem] paper-layer text-center">
      <h3 className="text-2xl font-heading font-black mb-6 text-rose-800">
        Pop a Heart for a Surprise!
      </h3>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex justify-center items-center h-24 relative"
            onClick={() => popHeart(i)}
          >
            <AnimatePresence mode="wait">
              {!popped.includes(i) ? (
                <motion.div
                  key="full"
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PaperHeartSVG
                    color={i % 2 === 0 ? "#ff4d6d" : "#c9184a"}
                    size={80}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="popped"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-rose-500 font-bold text-xs uppercase"
                >
                  <Sparkles size={24} className="mx-auto mb-1" />
                  Claimed!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="min-h-[60px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentMessage && (
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg"
            >
              You've Unlocked: {currentMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Vals12() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heartOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background Hearts (Static but Layered) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-between px-4 md:px-20 py-10">
        <div className="flex flex-col gap-10">
          <PaperHeartSVG color="#ff4d6d" size={120} rotate={-15} />
          <PaperHeartSVG color="#ff758f" size={60} rotate={10} />
          <PaperHeartSVG color="#c9184a" size={180} rotate={-5} />
          <PaperHeartSVG color="#ff8fa3" size={90} rotate={20} />
        </div>
        <div className="flex flex-col gap-10 items-end mt-20">
          <PaperHeartSVG color="#c9184a" size={150} rotate={15} />
          <PaperHeartSVG color="#ff8fa3" size={80} rotate={-10} />
          <PaperHeartSVG color="#ff4d6d" size={110} rotate={5} />
          <PaperHeartSVG color="#800f2f" size={70} rotate={-25} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div style={{ opacity: heartOpacity }}>
          <PaperHeartSVG color="#ff4d6d" size={100} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-heading font-black tracking-[0.6em] uppercase text-rose-400 mt-8 mb-4"
        >
          To My Dearest
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-romantic text-rose-800"
        >
          Happy Valentine's Day
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-rose-300"
        >
          <ChevronDown size={32} />
          <p className="text-[10px] tracking-widest uppercase font-bold mt-2">
            Scroll to Begin
          </p>
        </motion.div>
      </section>

      {/* Reasons Why Section */}
      <section className="min-h-screen w-full flex items-center justify-center py-32 px-6 relative z-10">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-rose-900 mb-4 italic">
              6 Little Things
            </h2>
            <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REASONS.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl paper-layer border border-rose-100 flex gap-4"
              >
                <div className="text-rose-500 font-black text-2xl font-romantic">
                  0{i + 1}
                </div>
                <p className="text-rose-900/80 font-medium leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="min-h-screen w-full flex items-center justify-center py-32 px-6 bg-rose-50/30 relative z-10 overflow-hidden">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-rose-900 mb-2">
              Our Scrapbook
            </h2>
            <p className="text-rose-400 font-romantic text-2xl">
              The chapters we've written together
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {MEMORIES.map((item, i) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                className="w-64 h-80 bg-white p-4 pb-12 shadow-2xl border border-rose-50 flex flex-col relative"
              >
                <div
                  className={`w-full h-full ${item.color} flex items-center justify-center text-rose-400`}
                >
                  {item.icon}
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center font-romantic text-xl text-rose-800">
                  {item.title}
                </div>
                {/* Decorative Tape effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-rose-100/50 -rotate-3 border border-rose-200/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-32 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <Gift className="text-rose-500 mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-6xl font-heading font-black text-rose-900">
            A Small Treat
          </h2>
          <p className="text-rose-400 italic mt-2">
            Because you deserve all the magic today.
          </p>
        </motion.div>

        <HeartPopActivity />
      </section>

      {/* Finale Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative z-10 bg-[#1a0d0d]/5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <PaperHeartSVG color="#800f2f" size={150} />
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-romantic text-rose-900 mt-10 max-w-2xl leading-relaxed">
          "I didn't choose you. My heart chose you, and my soul decided to
          follow."
        </h2>
        <p className="mt-8 font-black tracking-widest text-rose-400 uppercase text-xs">
          Forever Yours,
        </p>
        <p className="mt-2 font-romantic text-4xl text-rose-700">Me</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-16 px-8 py-3 bg-white text-rose-500 border border-rose-200 rounded-full font-bold hover:bg-rose-500 hover:text-white transition-all shadow-md"
        >
          Return to Start
        </button>
      </section>

      {/* Floating Sparkles across the page */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -50],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star size={12 + Math.random() * 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
