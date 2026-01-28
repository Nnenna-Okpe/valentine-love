import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Search,
  ArrowRight,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";
import "./vals11.css";

// --- Configuration ---
const STOPS = [
  {
    id: "intro",
    title: "Our Love Story",
    subtitle: "Eternal",
    guide:
      "Greetings, beloved. I am Valen, your guide. Click me to hide or show my whispers. Shall we begin our journey?",
    buttonText: "STEP INSIDE",
  },
  {
    id: "memories",
    title: "Captured Moments",
    subtitle: "Deeply Rooted",
    guide:
      "These images are fragments of our history. Scroll through the heart to see the beauty we've built together.",
    buttonText: "THE REFLECTION",
  },
  {
    id: "reflection",
    title: "Golden Vows",
    subtitle: "Soulful",
    guide:
      "Purest love needs no machine to write. It is written in our silence and our laughter. Select a vow that speaks to you.",
    buttonText: "THE ULTIMATE PROMISE",
  },
  {
    id: "vow",
    title: "The Final Vow",
    subtitle: "Forever",
    guide:
      "We have reached the sanctuary. I have one last question before the stars align. Are you ready?",
    buttonText: "YES, ALWAYS",
  },
  {
    id: "finale",
    title: "Always & Forever",
    subtitle: "Complete",
    guide:
      "Our story is a masterpiece that never ends. Every day is a new stroke of gold on our velvet canvas.",
    buttonText: "RESTART JOURNEY",
  },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522673607200-164883e758ef?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=800",
];

const PRESET_VOWS = [
  "In the velvet depth of our love, every heartbeat is a promise.",
  "You are the gold that illuminates my darkest nights.",
  "Our bond is an eternal dance of two souls becoming one.",
  "Every whisper of yours is a melody my heart knows by heart.",
];

// --- Components ---

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-red-600/20"
        initial={{
          x: Math.random() * 100 + "%",
          y: "110%",
          scale: 0.5 + Math.random(),
        }}
        animate={{
          y: "-20%",
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
      >
        <Heart fill="currentColor" size={20 + Math.random() * 30} />
      </motion.div>
    ))}
  </div>
);

const ValenGuide = ({ text, isVisible, toggleVisible, hideMessage }) => (
  <div className="fixed bottom-0 left-6 md:left-12 z-[60] flex items-center gap-4 max-w-[90vw] md:max-w-xl pointer-events-none">
    {/* Guide Character */}
    <motion.div
      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-yellow-700 to-yellow-200 rounded-full flex items-center justify-center gold-glow shadow-2xl relative pointer-events-auto cursor-pointer flex-shrink-0"
      onClick={toggleVisible}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Heart fill="#1a0d0d" className="text-[#1a0d0d]" size={32} />
      <Sparkles
        className="absolute -top-1 -right-1 text-yellow-100"
        size={16}
      />
    </motion.div>

    {/* Message Bubble */}
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          className="bg-[#1a0d0d]/95 border border-yellow-500/30 backdrop-blur-md p-4 rounded-2xl shadow-2xl pointer-events-auto cursor-pointer relative"
          onClick={hideMessage}
        >
          <X size={12} className="absolute top-2 right-2 text-yellow-500/50" />
          <p className="text-yellow-100 text-xs md:text-sm italic font-light leading-relaxed pr-4">
            "{text}"
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);
  const [showGuideMessage, setShowGuideMessage] = useState(true);
  const [selectedVow, setSelectedVow] = useState("");
  const [galleryIndex, setGalleryIndex] = useState(0);

  const current = STOPS[step];

  const handleNext = () => {
    if (step < STOPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setStep(0);
      setSelectedVow("");
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff1a1a", "#d4af37", "#ffffff"],
    });
    handleNext();
  };

  return (
    <div className="vals11-theme relative min-h-screen w-full flex flex-col items-center justify-center bg-[#1a0d0d] overflow-x-hidden select-none">
      <FloatingHearts />

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-900/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <Heart fill="#ff1a1a" className="text-[#ff1a1a]" size={28} />
          <span className="font-luxury text-xl md:text-2xl tracking-tighter">
            VelvetLove
          </span>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">
          <span
            className={`${step === 0 ? "text-red-600" : ""} transition-colors cursor-pointer`}
          >
            Story
          </span>
          <span
            className={`${step === 1 ? "text-red-600" : ""} transition-colors cursor-pointer`}
          >
            Gallery
          </span>
          <span
            className={`${step === 2 ? "text-red-600" : ""} transition-colors cursor-pointer`}
          >
            Vows
          </span>
          <span
            className={`${step === 3 ? "text-red-600" : ""} transition-colors cursor-pointer`}
          >
            Eternal
          </span>
        </div>
        <div className="w-10 h-10 bg-red-600/10 border border-red-600/30 rounded-full flex items-center justify-center text-red-600">
          <Search size={18} />
        </div>
      </nav>

      {/* Main Container - Adjusted sizing to prevent cutoff */}
      <main className="w-full max-w-7xl px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 z-10 relative">
        {/* Content Section */}
        <motion.div
          key={`content-${step}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6 md:space-y-10"
        >
          <div className="space-y-1">
            <h2 className="font-luxury text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-glow-red">
              {current.title}
            </h2>
            <p className="font-script text-5xl md:text-7xl text-red-600 italic">
              {current.subtitle}
            </p>
          </div>

          <div className="min-h-[120px] md:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              {current.id === "reflection" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 gap-3 w-full"
                >
                  {PRESET_VOWS.map((vow, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVow(vow)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        selectedVow === vow
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-red-600/50"
                      }`}
                    >
                      {vow}
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md"
                >
                  {current.id === "finale" && selectedVow
                    ? `We carry with us the truth we chose: "${selectedVow}"`
                    : "Every step in these velvet halls brings us closer to the heart of our journey. A bond that sparkles like gold and pulses with eternal life."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={current.id === "vow" ? handleConfetti : handleNext}
              className="group relative flex items-center h-14 md:h-16 bg-white rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <span className="px-8 md:px-12 py-4 text-[#1a0d0d] font-black tracking-widest uppercase text-xs md:text-sm pr-20">
                {current.buttonText}
              </span>
              <div className="absolute right-0 top-0 h-full w-14 md:w-16 bg-red-600 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={20} className="text-white" />
              </div>
            </button>

            <div className="flex gap-4 text-gray-500">
              <Instagram
                size={16}
                className="hover:text-red-600 cursor-pointer transition-colors"
              />
              <Facebook
                size={16}
                className="hover:text-red-600 cursor-pointer transition-colors"
              />
              <Twitter
                size={16}
                className="hover:text-red-600 cursor-pointer transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Visual Section - Heart Frame */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <motion.div
            key={`frame-${step}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square"
          >
            {/* Ambient Outer Glow */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full" />

            {/* Heart Frame Masking & Borders */}
            <div className="absolute inset-0 heart-frame-mask gold-glow bg-gradient-to-tr from-yellow-700 via-yellow-200 to-yellow-600" />
            <div className="absolute inset-[6px] heart-frame-mask bg-[#1a0d0d]" />
            <div className="absolute inset-[10px] heart-frame-mask gold-glow bg-gradient-to-tr from-yellow-700 via-yellow-200 to-yellow-600" />

            <div className="absolute inset-[14px] heart-frame-mask overflow-hidden bg-red-900/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id === "memories" ? galleryIndex : step}
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src={
                      current.id === "memories"
                        ? GALLERY_IMAGES[galleryIndex]
                        : GALLERY_IMAGES[step] || GALLERY_IMAGES[0]
                    }
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                    alt="Valentine Moment"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Gallery Controls within the frame */}
              {current.id === "memories" && (
                <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 z-20">
                  {GALLERY_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${galleryIndex === idx ? "bg-white scale-125" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Small Floating Hearts tied to frame */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500 pointer-events-none"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3 + i, repeat: Infinity }}
                style={{
                  top: `${20 + i * 15}%`,
                  left: i % 2 === 0 ? "-5%" : "95%",
                }}
              >
                <Heart fill="currentColor" size={16} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Progress & Pagination Footer */}
      <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 md:gap-12 z-50">
        <button
          onClick={handlePrev}
          className={`text-[10px] tracking-[0.3em] font-black transition-colors ${step === 0 ? "text-gray-800 pointer-events-none" : "text-gray-400 hover:text-white"}`}
        >
          PREV
        </button>

        <div className="flex items-center gap-4">
          <span className="text-red-600 font-bold text-xs tracking-tighter">
            0{step + 1}
          </span>
          <div className="w-24 md:w-40 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-red-600"
              animate={{ width: `${((step + 1) / STOPS.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
          <span className="text-gray-500 font-bold text-xs tracking-tighter">
            0{STOPS.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          className="text-[10px] tracking-[0.3em] font-black text-gray-400 hover:text-white"
        >
          NEXT
        </button>
      </footer>

      {/* Guide Character & Interaction */}
      <ValenGuide
        text={current.guide}
        isVisible={showGuideMessage}
        toggleVisible={() => setShowGuideMessage(!showGuideMessage)}
        hideMessage={() => setShowGuideMessage(false)}
      />
    </div>
  );
}
