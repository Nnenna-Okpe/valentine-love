import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Scissors,
  ArrowRight,
  Flower,
  Sparkles,
  BookOpen,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

// --- Configuration & Data ---
const GARDEN_STOPS = [
  {
    id: "unfolding",
    title: "The Blank Sheet",
    guide:
      "Hello, lovely! I'm Pippin. Every great love story begins as a simple, blank sheet of paper. Shall we start folding yours into something magical?",
    color: "#ffb5a7",
  },
  {
    id: "creases",
    title: "Beautiful Creases",
    guide:
      "Every fold we make is a memory shared. Some are sharp, some are soft, but together they shape a unique masterpiece. Look at our progress!",
    color: "#fcd5ce",
  },
  {
    id: "ink",
    title: "Written in the Folds",
    guide:
      "Paper is patient; it keeps our secrets. Tell me what makes your heart skip a beat, and I'll help you ink a message that lasts forever.",
    color: "#f8ad9d",
  },
  {
    id: "gift",
    title: "The Paper Heart",
    guide:
      "I've folded a thousand cranes, but this one is the most precious. It carries a single, fluttering question for my favorite person...",
    color: "#f08080",
  },
  {
    id: "bloom",
    title: "The Eternal Garden",
    guide:
      "Our garden is in full bloom! Your love is a work of art made of a billion folds. May your Valentine's Day be as beautiful as this garden.",
    color: "#f4978e",
  },
];

// --- Sub-components ---

const PaperBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
    <div className="fold-line w-px h-full left-1/4" />
    <div className="fold-line w-px h-full left-1/2" />
    <div className="fold-line w-px h-full left-3/4" />
    <div className="fold-line h-px w-full top-1/3" />
    <div className="fold-line h-px w-full top-2/3" />
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-rose-300/40"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
          rotate: Math.random() * 360,
        }}
        animate={{
          y: -200,
          rotate: Math.random() * 360 + 360,
          x: `+=${Math.random() * 100 - 50}`,
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
      >
        <Heart
          size={16 + Math.random() * 24}
          fill={i % 3 === 0 ? "currentColor" : "none"}
        />
      </motion.div>
    ))}
  </div>
);

const PippinGuide = ({ text, isVisible, toggleVisible, hideMessage }) => (
  <motion.div
    className="fixed bottom-10  md:left-12 md:right-auto md:max-w-md z-50 flex flex-col md:flex-row items-center md:items-end gap-4 pointer-events-none"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    onClick={toggleVisible}
  >
    <motion.div
      className="crane-float w-24 h-24 md:w-32 md:h-32 flex-shrink-0 pointer-events-auto"
      animate={{
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <path
          d="M50 20 L80 50 L50 80 L20 50 Z"
          fill="#ffb5a7"
          stroke="#e63946"
          strokeWidth="1"
        />
        <path d="M50 20 L50 80" stroke="#e63946" strokeWidth="0.5" />
        <path d="M20 50 L80 50" stroke="#e63946" strokeWidth="0.5" />
        <path d="M50 20 L70 10 L80 20 Z" fill="#fcd5ce" />
        <circle cx="72" cy="14" r="1.5" fill="#e63946" />
        <path d="M20 50 L5 40 L15 30 Z" fill="#fcd5ce" />
      </svg>
    </motion.div>

    <div className="paper-texture p-6 rounded-2xl border-t-4 border-rose-500 shadow-2xl max-w-sm pointer-events-auto">
      <p className="text-rose-900 text-sm md:text-base italic font-semibold leading-relaxed">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={hideMessage}
            >
              <X
                size={12}
                className="absolute top-2 right-2 text-yellow-500/50"
              />
              "{text}"
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </div>
  </motion.div>
);

export default function Vals10() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState("");
  const [laterText, setLaterText] = useState("(Fold for later)");
  const [showGuideMessage, setShowGuideMessage] = useState(true);

  const currentStop = GARDEN_STOPS[step];

  const nextStep = () => {
    if (step < GARDEN_STOPS.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const generateLetter = () => {
    // Local romantic message generator (no AI)
    const localMessages = [
      `Every fold of my heart bends toward you. Our love is written in quiet moments and loud laughter, forever pressed into one beautiful story.`,
      `You are the crease that gave my life its shape. Together, we are a masterpiece folded by time and sealed with love.`,
      `In every corner of my heart, I find you. We are a perfect fold — soft, strong, and endlessly beautiful.`,
      `If love were paper, you’d be the fold that made it art. My heart is yours, now and always.`,
    ];

    setTimeout(() => {
      const randomMessage =
        localMessages[Math.floor(Math.random() * localMessages.length)];
      setLetter(randomMessage);
      setLoading(false);
    }, 1200);
  };

  const handleFinale = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#e63946", "#ffb5a7", "#f4978e", "#ffffff"],
      shapes: ["circle", "square"],
    });
    nextStep();
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-rose-50/50">
      <PaperBackground />

      {/* Progress Line */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        {GARDEN_STOPS.map((_, i) => (
          <React.Fragment key={i}>
            <motion.div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-700 ${i <= step ? "bg-rose-500 border-rose-600 scale-125" : "bg-transparent border-rose-200"}`}
              animate={{ scale: i === step ? [1, 1.3, 1] : 1 }}
              transition={{ repeat: i === step ? Infinity : 0, duration: 2 }}
            />
            {i < GARDEN_STOPS.length - 1 && (
              <div
                className={`h-0.5 w-8 md:w-16 transition-all duration-700 ${i < step ? "bg-rose-500" : "bg-rose-100"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="paper-texture w-full max-w-2xl p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(230,57,70,0.2)] relative z-20 overflow-hidden"
          initial={{ rotateY: -95, opacity: 0, scale: 0.9 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: 95, opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7, ease: "circOut" }}
        >
          {/* Decorative Corner Fold */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-rose-200/40 clip-path-[polygon(100%_0,100%_100%,0_0)] rotate-180 origin-top-right shadow-inner" />

          <header className="mb-10 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-rose-400 mb-2">
              Chapter {step + 1}
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif text-rose-800 italic font-bold">
              {currentStop.title}
            </h1>
          </header>

          <div className="min-h-[320px] flex flex-col justify-center items-center text-center">
            {currentStop.id === "unfolding" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 bg-rose-200/30 blur-2xl rounded-full"
                  />
                  <div className="w-32 h-32 border-2 border-dashed border-rose-300 rounded-2xl flex items-center justify-center mx-auto bg-white/60 relative z-10 shadow-sm">
                    <BookOpen className="text-rose-500" size={56} />
                  </div>
                </div>
                <p className="text-xl text-rose-900/80 font-medium max-w-md">
                  True love is a patient art. One fold, one memory, one
                  heartbeat at a time.
                </p>
                <button
                  onClick={nextStep}
                  className="px-14 py-5 bg-rose-500 text-white rounded-full font-black shadow-[0_10px_30px_-5px_rgba(230,57,70,0.5)] hover:bg-rose-600 active:scale-95 transition-all flex items-center gap-3 mx-auto group cursor-pointer"
                >
                  <span className="tracking-widest uppercase text-sm">
                    Pick up the Paper
                  </span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </motion.div>
            )}

            {currentStop.id === "creases" && (
              <div className="space-y-8 w-full">
                <div className="flex justify-center gap-6 overflow-x-auto pb-6 px-2 no-scrollbar">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                      className="w-44 h-56 bg-white flex-shrink-0 p-2 shadow-xl border border-rose-100 relative rounded-sm"
                    >
                      <img
                        src={`https://picsum.photos/seed/love_paper_${i}/400/500`}
                        className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.9]"
                        alt={`Memory ${i}`}
                      />
                      <div className="absolute inset-0 border-[6px] border-white pointer-events-none" />
                      <div className="absolute bottom-4 left-0 right-0 text-[11px] font-handwritten text-rose-900 bg-white/90 py-1 shadow-sm">
                        Chapter {i}: The Beginning
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-rose-700 italic font-medium">
                  "Every crease is a story we built together."
                </p>
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-rose-100 text-rose-600 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-rose-200 transition-colors shadow-sm cursor-pointer"
                >
                  The Next Fold <Scissors size={18} />
                </button>
              </div>
            )}

            {currentStop.id === "ink" && (
              <div className="w-full max-w-md space-y-6">
                {!letter ? (
                  <>
                    <button
                      onClick={generateLetter}
                      className="w-full py-5 bg-rose-500 text-white rounded-2xl font-black flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:bg-rose-600 transition-all cursor-pointer"
                    >
                      <Sparkles size={20} />
                      Write Our Story
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="p-10 bg-white border-4 border-double border-rose-200 rounded-xl shadow-2xl font-handwritten text-3xl text-rose-900 leading-relaxed text-left relative">
                      <div className="absolute top-2 right-4 text-rose-200 opacity-40">
                        <Heart fill="currentColor" size={32} />
                      </div>
                      {letter}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={nextStep}
                        className="flex-1 py-4 bg-rose-600 text-white rounded-full font-black shadow-xl hover:scale-105 transition-transform"
                      >
                        Fold the Letter
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {currentStop.id === "gift" && (
              <div className="space-y-10 py-6">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-52 h-52 bg-rose-500 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-[0_20px_50px_rgba(230,57,70,0.4)] relative transform rotate-45"
                >
                  <Heart
                    size={90}
                    className="text-white -rotate-45"
                    fill="currentColor"
                  />
                  <div className="absolute inset-3 border-2 border-white/40 rounded-[2rem]" />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-4xl font-serif text-rose-950 font-bold">
                    Will you be the one I fold my future with?
                  </h3>
                  <p className="text-rose-500 italic text-lg">
                    Do you love me?
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 justify-center pt-4">
                  <button
                    onClick={handleFinale}
                    className="px-20 py-6 bg-rose-600 text-white rounded-full font-black text-2xl tracking-[0.2em] shadow-2xl hover:bg-rose-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    YES!
                  </button>
                  <button
                    className="px-10 py-6 text-rose-300 hover:text-rose-400 font-black text-xs uppercase tracking-widest transition-opacity"
                    onClick={() => setLaterText("Say yes anyway")}
                  >
                    {laterText}
                  </button>
                </div>
              </div>
            )}

            {currentStop.id === "bloom" && (
              <div className="space-y-8 w-full">
                <div className="flex justify-center space-x-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: i * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Flower className="text-rose-500" size={36} />
                    </motion.div>
                  ))}
                </div>
                <h2 className="text-5xl font-handwritten text-rose-900 font-bold">
                  Our Garden is Eternal.
                </h2>
                <div className="relative w-full max-w-sm h-72 mx-auto rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Garden of Love"
                  />
                  <div className="absolute inset-0 bg-rose-600/20 mix-blend-overlay" />
                </div>
                <p className="text-rose-700 font-semibold text-lg italic">
                  "May every tomorrow be a new page we fold together."
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-10 py-4 border-2 border-rose-200 text-rose-400 rounded-full hover:border-rose-500 hover:text-rose-600 transition-all text-sm uppercase tracking-[0.3em] font-black"
                >
                  Refold the Journey
                </button>
              </div>
            )}
          </div>

          <div className="absolute bottom-6 left-6 opacity-10 -rotate-12 pointer-events-none">
            <Heart size={120} />
          </div>
        </motion.div>
      </AnimatePresence>

      <PippinGuide
        text={currentStop.guide}
        isVisible={showGuideMessage}
        toggleVisible={() => setShowGuideMessage(!showGuideMessage)}
        hideMessage={() => setShowGuideMessage(false)}
      />

      {/* Subtle Bottom Bar Icons */}
      <div className="fixed bottom-8 right-10 flex space-x-5 z-50">
        <div className="p-4 bg-white/90 rounded-2xl shadow-xl text-rose-500 hover:text-rose-700 cursor-pointer transition-all hover:-translate-y-1">
          <Heart size={22} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
