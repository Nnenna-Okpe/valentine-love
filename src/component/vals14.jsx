import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Star,
  PenTool,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Wine,
  Flame,
  Heart,
  X,
} from "lucide-react";
import "./vals14.css";

// --- Constants ---
const STAGES = [
  { id: "foyer", title: "The Velvet Foyer" },
  { id: "essence", title: "The Essence of You" },
  { id: "alchemy", title: "Poetic Alchemy" },
  { id: "garden", title: "The Secret Garden" },
  { id: "toast", title: "The Final Toast" },
];

// --- Spirit Guide ---
const SpiritGuide = ({ message, isVisible, toggle }) => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-16 md:right-16 z-50 flex flex-col items-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="bg-[#3d0404] border border-[#d4af37]/30 p-5 rounded-2xl rounded-br-none shadow-2xl max-w-[280px] mb-6 text-sm italic text-[#f5e6be] leading-relaxed relative"
          >
            <button
              onClick={toggle}
              className="absolute top-2 right-2 text-[#d4af37]/70 hover:text-[#d4af37]"
            >
              <X size={16} />
            </button>

            <span className="font-serif-elegant">"{message}"</span>
            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-[#3d0404] border-r border-b border-[#d4af37]/30 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onClick={toggle}
        animate={{
          y: [0, -15, 0],
          filter: [
            "drop-shadow(0 0 5px #d4af37)",
            "drop-shadow(0 0 15px #d4af37)",
            "drop-shadow(0 0 5px #d4af37)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center cursor-pointer overflow-hidden relative"
      >
        <Sparkles size={20} className="text-[#2d0202]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent animate-pulse" />
      </motion.div>
    </div>
  );
};

// --- Ember Effect ---
const EmberFall = () => {
  const embers = Array.from({ length: 25 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {embers.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          animate={{
            y: -100,
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 10,
          }}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default function Vals14() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [guideMessage, setGuideMessage] = useState(
    "Greetings, traveler. I am Onyx. You've entered the Velvet Midnight.",
  );
  const [showGuide, setShowGuide] = useState(true);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const storedLetter =
    "Like moonlight on velvet, you are the quiet grace that fills my soul. Every heartbeat writes your name across my sky, and every night whispers how deeply I love you.";

  const memories = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Our First Trip",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      title: "Laughing Together",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1500534314209-a26db0f5c1c2",
      title: "Forever Moments",
    },
  ];

  useEffect(() => {
    switch (step) {
      case 0:
        setGuideMessage(
          "Greetings, traveler. You've entered the Velvet Midnight. Who seeks the path of love?",
        );
        break;
      case 1:
        setGuideMessage(
          `A distinguished name, ${userName}. Now, tell me... whose name is whispered in your heart?`,
        );
        break;
      case 2:
        setGuideMessage(
          "Excellent. Let us unveil the words your heart already knows.",
        );
        break;
      case 3:
        setGuideMessage(
          "Pause here. These embers represent memories yet to be born.",
        );
        break;
      case 4:
        setGuideMessage(
          "The moon is full, and the heart is ready. It is time for the final question.",
        );
        break;
      default:
        break;
    }
  }, [step, userName]);

  const handleNoHover = () => {
    setNoBtnPos({
      x: Math.random() * 300 - 150,
      y: Math.random() * 200 - 100,
    });
  };

  const next = () => step < STAGES.length - 1 && setStep(step + 1);
  const back = () => step > 0 && setStep(step - 1);
  const toggleGuide = () => setShowGuide((prev) => !prev);

  return (
    <div className="vals14 relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#120101] via-[#2d0202] to-black overflow-hidden p-4 text-white">
      <EmberFall />

      {/* Progress Bar */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={false}
            animate={{
              width: i === step ? 40 : 10,
              backgroundColor: i <= step ? "#d4af37" : "#4a0404",
              opacity: i <= step ? 1 : 0.4,
            }}
            className="h-1 rounded-full border border-[#d4af37]/20"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="w-full max-w-2xl text-center relative z-10"
        >
          {/* STEP 0 */}
          {step === 0 && (
            <div className="space-y-12">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="mx-auto w-32 h-32 border-2 border-[#d4af37] rounded-full flex items-center justify-center p-4 bg-[#2d0202] shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <Moon size={48} className="text-[#d4af37]" />
              </motion.div>

              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#d4af37]">
                  Velvet
                </h1>
                <h1 className="text-5xl md:text-7xl italic text-[#f5e6be] opacity-90">
                  Midnight
                </h1>
              </div>

              <div className="max-w-xs mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Identify yourself..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#d4af37]/30 py-3 text-center text-xl focus:border-[#d4af37] outline-none transition-colors text-[#f5e6be]"
                />
                <button
                  onClick={next}
                  disabled={!userName}
                  className="w-full py-4 mt-6 bg-[#d4af37] text-[#2d0202] font-bold text-lg hover:bg-[#f5e6be] transition-all disabled:opacity-20 transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  Enter the Night
                </button>
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-10">
              <div className="mx-auto w-24 h-24 border border-[#d4af37]/50 rotate-45 flex items-center justify-center bg-[#3d0404]">
                <div className="-rotate-45">
                  <Star size={32} className="text-[#d4af37]" />
                </div>
              </div>

              <h2 className="text-4xl font-bold text-[#d4af37]">
                The Essence of You
              </h2>

              <p className="text-lg text-[#f5e6be]/70 italic px-8">
                "In the gallery of my soul, whose portrait hangs in the center?"
              </p>

              <div className="max-w-xs mx-auto space-y-6">
                <input
                  type="text"
                  placeholder="Their name..."
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#d4af37]/30 py-3 text-center text-xl focus:border-[#d4af37] outline-none transition-colors text-[#f5e6be]"
                />

                <div className="flex space-x-4">
                  <button
                    onClick={back}
                    className="px-6 py-3 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={next}
                    disabled={!partnerName}
                    className="flex-1 py-3 bg-[#630d0d] border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#7a1212] transition-all disabled:opacity-30"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — LETTER */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-1 bg-[#d4af37]"></div>
                  <h2 className="text-3xl font-bold text-[#d4af37]">
                    Poetic Alchemy
                  </h2>
                </div>

                <p className="text-[#f5e6be]/80 leading-relaxed italic">
                  These are not words written by chance — they are the truth
                  your heart already knows about {partnerName}.
                </p>

                <div className="flex items-center space-x-3 text-[#d4af37]">
                  <PenTool size={20} />
                  <span className="border-b border-[#d4af37]">
                    Reveal the Letter
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#d4af37]/5 blur-3xl rounded-full"></div>

                <motion.div className="bg-[#3d0404] border border-[#d4af37]/30 p-10 rounded-lg shadow-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                  <div className="absolute top-2 right-4 opacity-10">
                    <Sparkles size={80} className="text-[#d4af37]" />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl italic text-[#f5e6be] leading-relaxed text-center"
                  >
                    {storedLetter}
                  </motion.p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={next}
                  className="mt-6 ml-auto flex items-center space-x-2 text-[#d4af37] font-bold hover:translate-x-2 transition-transform"
                >
                  <span>Proceed to the Garden</span>
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          )}

          {/* STEP 3 — MEMORIES */}
          {step === 3 && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-[#d4af37]">
                The Secret Garden
              </h2>

              <p className="text-[#f5e6be]/80 italic max-w-lg mx-auto">
                Here are moments that shaped your story — glowing like embers in
                the dark.
              </p>

              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {memories.map((memory) => (
                  <div
                    key={memory.id}
                    className="group relative overflow-hidden rounded-2xl bg-[#3d0404] shadow-lg cursor-pointer"
                  >
                    <img
                      src={memory.img}
                      alt={memory.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                      <h3 className="text-lg font-semibold text-[#f5e6be]">
                        {memory.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </section>

              <button
                onClick={next}
                className="mt-8 px-12 py-3 bg-[#d4af37] text-[#2d0202] font-bold hover:tracking-widest transition-all"
              >
                Face the Moon
              </button>
            </div>
          )}

          {/* STEP 4 — FINAL */}
          {step === 4 && (
            <div className="space-y-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-8"
              >
                <div className="flex justify-center">
                  <Heart
                    size={64}
                    className="text-[#630d0d] fill-[#d4af37] animate-pulse"
                  />
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-[#d4af37]">
                  The Final Toast
                </h2>

                <p className="text-xl text-[#f5e6be] italic max-w-md mx-auto">
                  {partnerName}, beneath this velvet midnight, I have one
                  question for you...
                </p>

                <h3 className="text-4xl md:text-6xl font-bold text-[#d4af37] py-4">
                  Will you be mine?
                </h3>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative min-h-[200px]">
                <button
                  onClick={() =>
                    alert(
                      `A toast to love! 🍷 ${partnerName} said YES under the velvet moon.`,
                    )
                  }
                  className="px-14 py-5 bg-[#d4af37] text-[#2d0202] text-2xl font-bold shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all transform hover:scale-110 active:scale-95 flex items-center space-x-3"
                >
                  <Wine size={24} />
                  <span>Always. ❤️</span>
                </button>

                <motion.button
                  onHoverStart={handleNoHover}
                  onClick={handleNoHover}
                  animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                  className="px-10 py-4 bg-transparent border-2 border-[#d4af37]/20 text-[#d4af37]/40 text-lg font-bold rounded hover:border-[#d4af37]/40 transition-colors"
                >
                  Not tonight...
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Spirit Guide */}
      <SpiritGuide
        message={guideMessage}
        isVisible={showGuide}
        toggle={toggleGuide}
      />

      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 p-12 opacity-10 pointer-events-none">
        <div className="w-64 h-64 border-l border-t border-[#d4af37]"></div>
      </div>
      <div className="fixed bottom-0 right-0 p-12 opacity-10 pointer-events-none">
        <div className="w-64 h-64 border-r border-b border-[#d4af37]"></div>
      </div>
    </div>
  );
}
