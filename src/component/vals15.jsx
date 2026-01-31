import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bird,
  Map,
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

// --- Guide Character: Kiri the Paper Crane ---
const KiriGuide = ({ message, isThinking, showMessage, setShowMessage }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-10 left-10 z-50 flex items-center space-x-4"
    >
      <div
        className="relative cursor-pointer"
        onClick={() => setShowMessage(!showMessage)}
      >
        <motion.div
          animate={{
            rotateY: [0, 10, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-white paper-shadow flex items-center justify-center rounded-lg"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        >
          <Bird size={40} className="text-rose-500" />
        </motion.div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-400 rounded-full animate-ping" />
      </div>

      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            key={message}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl rounded-bl-none shadow-lg max-w-[280px] border border-stone-200 relative"
          >
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-600"
            >
              <X size={16} />
            </button>
            {isThinking ? (
              <div className="flex space-x-1 py-1">
                <div className="w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            ) : (
              <p className="text-sm font-hand text-stone-700 leading-tight">
                "{message}"
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Background Scene Elements ---
const PaperClouds = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: -200 }}
        animate={{ x: "110vw" }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
          delay: i * 2,
        }}
        className="absolute"
        style={{ top: `${10 + i * 12}%` }}
      >
        <div
          className="w-32 h-10 bg-white rounded-full paper-shadow"
          style={{ opacity: 0.6 }}
        />
      </motion.div>
    ))}
  </div>
);

export default function Vals15() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [haiku, setHaiku] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [guideMsg, setGuideMsg] = useState(
    "Hello! I'm Kiri. I fold dreams into reality. Who's joining me on this paper journey?",
  );
  const [showGuideMessage, setShowGuideMessage] = useState(true);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const msgs = [
      "I was once just a square of paper, until you arrived. What is your name, traveler?",
      `Ah, ${userName}, a name written in crisp ink. And who is the person you wish to fly toward?`,
      "The forest of folds. Let's create a poem as delicate as a cherry blossom for them.",
      "Cherished moments, captured in folds. Let's revisit some memories together.",
      "Look at these lanterns... each one a wish. We're almost at the heart of the journey.",
      "The final fold. I've prepared a question that only your heart can answer.",
    ];
    setGuideMsg(msgs[step] || "Follow the wind...");
  }, [step, userName]);

  const generateHaiku = () => {
    if (!partnerName) return;
    setIsGenerating(true);
    // Simulate generation with a pre-stored message
    setTimeout(() => {
      setHaiku(
        `Paper heart unfolds,\nBound by fate's soft crimson thread,\nYours forevermore.`,
      );
      setIsGenerating(false);
    }, 2000);
  };

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="relative w-screen h-screen overflow-hidden paper-texture">
      <PaperClouds />

      {/* The Horizontal World */}
      <div
        className="horizontal-container"
        style={{ transform: `translateX(-${step * 100}vw)` }}
      >
        {/* STOP 1: THE ORIGIN */}
        <section className="stop">
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-full max-w-xl p-12 bg-white/50 border-4 border-dashed border-rose-200 rounded-3xl paper-shadow relative"
          >
            <div className="absolute -top-10 -left-10 bg-rose-500 p-4 rounded-full paper-shadow text-white rotate-12">
              <Scissors size={32} />
            </div>
            <h1 className="text-6xl font-hand text-rose-500 mb-8">
              The Origami Heart
            </h1>
            <p className="text-stone-500 mb-8 font-medium">
              Step onto the page and let your story unfold.
            </p>
            <input
              type="text"
              placeholder="Your Name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-rose-300 py-4 text-3xl font-hand focus:border-rose-500 outline-none mb-8 text-rose-600 placeholder:text-rose-200"
            />
            {userName && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={next}
                className="group flex items-center space-x-3 bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all"
              >
                <span>Fold the First Page</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            )}
          </motion.div>
        </section>

        {/* STOP 2: THE DESTINATION */}
        <section className="stop">
          <div className="w-full max-w-2xl flex flex-col md:flex-row items-center gap-12 p-8">
            <div className="flex-1 space-y-6">
              <h2 className="text-5xl font-hand text-orange-600">
                The Recipient
              </h2>
              <p className="text-stone-500 italic">
                "A letter needs an address. A heart needs a home. Who is yours?"
              </p>
              <input
                type="text"
                placeholder="Their Name..."
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                className="w-full bg-transparent border-b-2 border-orange-300 py-4 text-3xl font-hand focus:border-orange-500 outline-none text-orange-600"
              />
              <div className="flex space-x-4">
                <button
                  onClick={prev}
                  className="p-4 rounded-full border border-orange-200 text-orange-400 hover:bg-orange-50"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={next}
                  disabled={!partnerName}
                  className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg disabled:opacity-30"
                >
                  Continue Flight
                </button>
              </div>
            </div>
            <div className="w-64 h-64 bg-white paper-shadow rounded-xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Feather size={100} className="text-orange-100" />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-orange-500" />
            </div>
          </div>
        </section>

        {/* STOP 3: THE HAIKU */}
        <section className="stop">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl w-full p-8">
            <div className="bg-white p-12 paper-shadow rounded-sm relative">
              <div
                className="absolute top-0 right-0 w-12 h-12 bg-stone-100"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />
              <h3 className="text-3xl font-hand text-stone-800 mb-8 border-b pb-4">
                The Vellum Verse
              </h3>
              <div className="min-h-[150px] flex items-center justify-center">
                {isGenerating ? (
                  <Wind className="animate-spin text-stone-300" size={48} />
                ) : haiku ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-hand text-rose-600 text-center whitespace-pre-line leading-relaxed"
                  >
                    {haiku}
                  </motion.p>
                ) : (
                  <p className="text-stone-300 italic">
                    Waiting for the ink to flow...
                  </p>
                )}
              </div>
              {haiku && (
                <button
                  onClick={next}
                  className="mt-8 w-full py-3 border-2 border-stone-800 font-bold hover:bg-stone-800 hover:text-white transition-all"
                >
                  Proceed
                </button>
              )}
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-rose-500">
                <Sparkles size={32} />
                <h2 className="text-4xl font-hand">Poetic Folding</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Traditional words are too heavy for our wings. Let Kiri distill
                your devotion into a Haiku—three lines of pure paper-thin love
                for {partnerName}.
              </p>
              <button
                onClick={generateHaiku}
                disabled={isGenerating}
                className="bg-stone-800 text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center justify-center space-x-3 hover:bg-black transition-all"
              >
                <Send size={18} />
                <span>Invoke the Verse</span>
              </button>
            </div>
          </div>
        </section>

        {/* STOP 4: MEMORIES */}
        <section className="stop">
          <div className="text-center space-y-12">
            <h2 className="text-5xl font-hand text-purple-600">
              Cherished Memories
            </h2>
            <p className="text-stone-500 italic">
              "Every fold holds a story. Let's look back at the moments that
              shaped us."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <img
                src="https://via.placeholder.com/200x200/rose-200/rose-500?text=Memory+1"
                alt="Memory 1"
                className="w-full h-48 object-cover rounded-lg paper-shadow"
              />
              <img
                src="https://via.placeholder.com/200x200/orange-200/orange-500?text=Memory+2"
                alt="Memory 2"
                className="w-full h-48 object-cover rounded-lg paper-shadow"
              />
              <img
                src="https://via.placeholder.com/200x200/purple-200/purple-500?text=Memory+3"
                alt="Memory 3"
                className="w-full h-48 object-cover rounded-lg paper-shadow"
              />
              <img
                src="https://via.placeholder.com/200x200/stone-200/stone-500?text=Memory+4"
                alt="Memory 4"
                className="w-full h-48 object-cover rounded-lg paper-shadow"
              />
            </div>
            <button
              onClick={next}
              className="px-12 py-4 bg-purple-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Continue the Journey
            </button>
          </div>
        </section>

        {/* STOP 5: LANTERNS */}
        <section className="stop bg-stone-900/5">
          <div className="text-center space-y-12">
            <h2 className="text-5xl font-hand text-stone-800">
              The Floating Lights
            </h2>
            <div className="flex justify-center space-x-8">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity }}
                  className="w-24 h-32 bg-orange-100 paper-shadow rounded-t-xl rounded-b-sm border-2 border-orange-200 flex flex-col items-center justify-between p-4"
                >
                  <div className="w-full h-1 bg-orange-300 rounded-full" />
                  <Heart className="text-orange-400 fill-current opacity-40" />
                  <div className="w-8 h-8 rounded-full bg-orange-400 blur-md animate-pulse" />
                </motion.div>
              ))}
            </div>
            <div className="max-w-md mx-auto p-8 bg-white paper-shadow italic font-hand text-xl text-stone-600">
              "Every lantern is a second I spent thinking of you. See how they
              fill the sky?"
            </div>
            <button
              onClick={next}
              className="px-12 py-4 bg-orange-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Arrive at the Center
            </button>
          </div>
        </section>

        {/* STOP 6: FINAL FOLD */}
        <section className="stop">
          <div className="text-center space-y-8 max-w-2xl px-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="w-40 h-40 bg-rose-500 mx-auto paper-shadow flex items-center justify-center rounded-3xl"
              style={{
                clipPath:
                  'path("M20,50 C20,20 50,20 50,45 C50,20 80,20 80,50 C80,85 50,100 50,100 C50,100 20,85 20,50 Z")',
              }}
            >
              <Heart size={60} className="text-white fill-current" />
            </motion.div>
            <h2 className="text-6xl font-hand text-rose-600">The Red String</h2>
            <p className="text-2xl font-hand text-stone-500">
              {partnerName}, our paths have folded together into something
              beautiful.
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-800 px-4">
              Will you be my Valentine?
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12 relative min-h-[100px]">
              <button
                onClick={() =>
                  alert(`🌸 Sealed with a fold! ${partnerName} said YES!`)
                }
                className="px-16 py-6 bg-rose-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:bg-rose-600 transform hover:scale-110 active:scale-95 transition-all"
              >
                Yes! ❤️
              </button>
              <motion.button
                onHoverStart={() =>
                  setNoPos({
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 100 - 50,
                  })
                }
                animate={{ x: noPos.x, y: noPos.y }}
                className="px-10 py-4 bg-white border-2 border-stone-200 text-stone-400 font-bold rounded-full"
              >
                Maybe?
              </motion.button>
            </div>
          </div>
        </section>
      </div>

      <KiriGuide
        message={guideMsg}
        isThinking={isGenerating}
        showMessage={showGuideMessage}
        setShowMessage={setShowGuideMessage}
      />

      {/* Navigation Arrows (Global) */}
      {step > 0 && (
        <button
          onClick={prev}
          className="fixed left-4 top-1/2 -translate-y-1/2 p-4 bg-white/50 hover:bg-white rounded-full paper-shadow transition-all z-40 text-stone-400"
        >
          <ChevronLeft size={32} />
        </button>
      )}
      {step < 6 && (
        <button
          onClick={next}
          className="fixed right-4 top-1/2 -translate-y-1/2 p-4 bg-white/50 hover:bg-white rounded-full paper-shadow transition-all z-40 text-stone-400"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Paper Border Decorations */}
      <div className="fixed top-0 inset-x-0 h-4 bg-stone-200/50 pointer-events-none border-b border-stone-300" />
      <div className="fixed bottom-0 inset-x-0 h-4 bg-stone-200/50 pointer-events-none border-t border-stone-300" />
    </div>
  );
}
