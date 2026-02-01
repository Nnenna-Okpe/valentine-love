import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bird,
  Feather,
  Wind,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Send,
  Scissors,
  X,
} from "lucide-react";
import "./vals15.css";

// --- Local Verse Content ---
const PREDEFINED_VERSES = [
  "Paper heart unfolds,\nBound by fate's soft crimson thread,\nYours forevermore.",
  "Like a crane in flight,\nMy heart finds its home in you,\nLove in every fold.",
  "A square of paper,\nTransforming with every touch,\nInto love for you.",
  "Written on the wind,\nSoft as silk and strong as steel,\nMy devotion stays.",
  "Red string pulls us close,\nAcross the maps of the world,\nTo this single fold.",
  "Cherry blossoms fall,\nSoftly landing on the page,\nWhere I wrote your name.",
  "Every mountain peak,\nEvery valley deep and wide,\nFolds towards your soul.",
];

// --- Guide Component ---
const KiriGuide = ({ message, isVisible, setIsVisible }) => {
  return (
    <div className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-50 flex items-end space-x-3 pointer-events-none max-w-[90vw]">
      <div
        className="relative flex-shrink-0 pointer-events-auto cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <motion.div
          animate={{
            rotateY: [0, 15, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 bg-white paper-shadow flex items-center justify-center rounded-lg border border-stone-200"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        >
          <Bird size={32} className="text-rose-500" />
        </motion.div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-400 rounded-full animate-pulse" />
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="bg-white/95 backdrop-blur-md p-4 rounded-2xl rounded-bl-none shadow-xl max-w-[200px] md:max-w-[280px] border border-stone-200 pointer-events-auto relative mb-6"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="absolute -top-2 -right-2 bg-stone-100 p-1 rounded-full border border-stone-200 text-stone-500 hover:text-rose-500 transition-colors"
            >
              <X size={14} />
            </button>
            <p className="text-xs md:text-sm font-hand text-stone-700 leading-tight">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Background Scene ---
const PaperClouds = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: -200 }}
        animate={{ x: "110vw" }}
        transition={{
          duration: 30 + i * 10,
          repeat: Infinity,
          ease: "linear",
          delay: i * 5,
        }}
        className="absolute"
        style={{ top: `${15 + i * 18}%` }}
      >
        <div className="w-20 h-6 md:w-32 md:h-10 bg-white rounded-full paper-shadow" />
      </motion.div>
    ))}
  </div>
);

export default function Vals15() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [verse, setVerse] = useState("");
  const [showGuide, setShowGuide] = useState(true);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const guideMessages = [
    "Hello! I'm Kiri. What is your name, traveler?",
    `Welcome, ${userName}. Whose name is written in your heart today?`,
    "Let's select a verse as delicate as a paper crane for them.",
    "Behold the lanterns... symbols of our shared wishes.",
    "The final fold. I have prepared the question for you.",
  ];

  const handleGenerateVerse = () => {
    let nextVerse = verse;
    // Ensure we pick a different verse than the current one to show button works
    while (nextVerse === verse && PREDEFINED_VERSES.length > 1) {
      const randomIndex = Math.floor(Math.random() * PREDEFINED_VERSES.length);
      nextVerse = PREDEFINED_VERSES[randomIndex];
    }
    setVerse(nextVerse);
    setShowGuide(true);
  };

  const next = () => {
    setStep((s) => Math.min(s + 1, 4));
    setShowGuide(true);
  };
  const prev = () => {
    setStep((s) => Math.max(s - 1, 0));
    setShowGuide(true);
  };

  return (
    <div className="vals15 relative w-full h-screen overflow-hidden paper-texture flex items-center justify-center p-4">
      <PaperClouds />

      <main className="w-full max-w-4xl max-h-[90vh] overflow-y-auto hide-scrollbar relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center py-4"
          >
            {/* STOP 0: WELCOME */}
            {step === 0 && (
              <div className="max-w-2xl bg-white/70 p-6 md:p-12 border-4 border-dashed border-rose-200 rounded-3xl paper-shadow relative text-center">
                <div className="absolute -top-6 -left-4 bg-rose-500 p-3 rounded-full paper-shadow text-white rotate-12">
                  <Scissors size={24} />
                </div>
                <h1 className="text-4xl md:text-6xl font-hand text-rose-500 mb-6">
                  Origami Heart
                </h1>
                <p className="text-stone-500 mb-8 font-medium text-sm md:text-base">
                  Let your love story unfold, one fold at a time.
                </p>
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-rose-300 py-3 text-2xl md:text-3xl font-hand focus:border-rose-500 outline-none text-rose-600 text-center placeholder:text-rose-200"
                  />
                  <button
                    onClick={next}
                    disabled={!userName}
                    className="w-full bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>Begin Journey</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* STOP 1: THE PARTNER */}
            {step === 1 && (
              <div className="max-w-2xl bg-white/70 p-6 md:p-12 border-4 border-dashed border-orange-200 rounded-3xl paper-shadow text-center">
                <h2 className="text-4xl font-hand text-orange-600 mb-6">
                  The Recipient
                </h2>
                <div className="mb-8 flex justify-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <Feather size={64} className="text-orange-300" />
                  </motion.div>
                </div>
                <input
                  type="text"
                  placeholder="Their Name..."
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-orange-300 py-3 text-2xl md:text-3xl font-hand focus:border-orange-500 outline-none text-orange-600 text-center placeholder:text-orange-200 mb-8"
                />
                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    className="flex-1 py-4 border-2 border-orange-200 rounded-full text-orange-500 font-bold hover:bg-orange-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={next}
                    disabled={!partnerName}
                    className="flex-[2] bg-orange-500 text-white py-4 rounded-full font-bold shadow-lg disabled:opacity-30"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* STOP 2: THE VERSE */}
            {step === 2 && (
              <div className="max-w-2xl flex flex-col gap-6 items-center">
                <div className="w-full bg-white p-6 md:p-10 paper-shadow rounded-sm relative border border-stone-100">
                  <div
                    className="absolute top-0 right-0 w-10 h-10 bg-stone-100"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                  <h3 className="text-2xl font-hand text-stone-800 mb-6 border-b pb-2">
                    The Vellum Verse
                  </h3>
                  <div className="min-h-[120px] flex items-center justify-center italic text-center text-xl md:text-2xl font-hand text-rose-600 whitespace-pre-line leading-relaxed">
                    {verse || "The paper is blank..."}
                  </div>
                  {verse && (
                    <button
                      onClick={next}
                      className="mt-6 w-full py-3 bg-stone-800 text-white rounded-lg font-bold hover:bg-black transition-colors"
                    >
                      Proceed
                    </button>
                  )}
                </div>
                <div className="w-full text-center space-y-6">
                  <div className="flex items-center justify-center space-x-3 text-rose-500">
                    <Sparkles size={24} />
                    <h2 className="text-3xl font-hand">Poetic Folding</h2>
                  </div>
                  <button
                    onClick={handleGenerateVerse}
                    className="w-full max-w-xs bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center space-x-3 mx-auto hover:bg-rose-600 active:scale-95 transition-all"
                  >
                    <Send size={18} />
                    <span>Invoke the Verse</span>
                  </button>
                </div>
              </div>
            )}

            {/* STOP 3:   Memories */}
            {step === 3 && (
              <section className="stop flex items-center justify-center p-4 sm:p-8 bg-stone-100">
                <div className="text-center space-y-8 sm:space-y-10 max-w-5xl w-full">
                  <h2 className="text-4xl sm:text-5xl font-serif text-stone-800">
                    The Memory Wall
                  </h2>
                  <p className="text-stone-500 italic">
                    "Every memory is a fold — and every fold holds a feeling."
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[1, 2, 3, 4].map((num) => (
                      <motion.div
                        key={num}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                      >
                        <img
                          src={`https://picsum.photos/300/300?random=${num}`}
                          alt="Memory"
                          className="w-full h-36 sm:h-48 object-cover"
                        />
                        <div className="p-3 sm:p-4 text-stone-600 text-xs sm:text-sm italic">
                          A moment we never want to forget.
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="px-10 sm:px-12 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
                  >
                    Arrive at the Center
                  </button>
                </div>
              </section>
            )}

            {/* STOP 4: FINAL QUESTION */}
            {step === 4 && (
              <div className="w-full text-center space-y-6 px-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-28 h-28 md:w-32 md:h-32 bg-rose-500 mx-auto paper-shadow flex items-center justify-center rounded-3xl"
                  style={{
                    clipPath:
                      'path("M20,50 C20,20 50,20 50,45 C50,20 80,20 80,50 C80,85 50,100 50,100 C50,100 20,85 20,50 Z")',
                  }}
                >
                  <Heart size={48} className="text-white fill-current" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-hand text-rose-600">
                  The Red String
                </h2>
                <p className="text-lg md:text-xl font-hand text-stone-500 italic">
                  {partnerName}, our journey has reached its final fold.
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
                  Will you be my Valentine?
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6 min-h-[160px] relative">
                  <button
                    onClick={() => alert(`🌸 Sealed! ${partnerName} said YES!`)}
                    className="w-full md:w-auto px-16 py-5 bg-rose-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Yes! ❤️
                  </button>
                  <motion.button
                    onHoverStart={() =>
                      setNoPos({
                        x:
                          (Math.random() - 0.5) *
                          (window.innerWidth < 768 ? 120 : 250),
                        y: (Math.random() - 0.5) * 80,
                      })
                    }
                    animate={{ x: noPos.x, y: noPos.y }}
                    className="w-full md:w-auto px-10 py-4 bg-white border-2 border-stone-200 text-stone-400 font-bold rounded-full"
                  >
                    Maybe?
                  </motion.button>
                </div>
                <button
                  onClick={() => {
                    setStep(0);
                    setVerse("");
                  }}
                  className="text-stone-400 font-hand hover:text-rose-500 pt-8 underline underline-offset-4"
                >
                  Start Over
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <KiriGuide
        message={guideMessages[step]}
        isVisible={showGuide}
        setIsVisible={setShowGuide}
      />

      {/* Responsive Borders */}
      <div className="fixed top-0 inset-x-0 h-2 bg-rose-200 opacity-30 z-50 pointer-events-none" />
      <div className="fixed bottom-0 inset-x-0 h-2 bg-rose-200 opacity-30 z-50 pointer-events-none" />
    </div>
  );
}
