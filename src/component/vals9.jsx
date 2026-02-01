import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Send,
  ArrowRight,
  MessageCircle,
  Music,
  Star,
  Loader2,
  RefreshCw,
  X, // ✅ ADDED: for close button
} from "lucide-react";
import confetti from "canvas-confetti";

// --- Data ---
const JOURNEY_STOPS = [
  {
    id: 0,
    title: "The Beginning of Us",
    characterLine:
      "Hello there, lovebird! I'm Cupid’s Assistant. I’ve been sent to guide you through a journey of the heart. Ready to explore?",
    type: "intro",
  },
  {
    id: 1,
    title: "A Spark in Time",
    characterLine:
      "Every great story starts with a single spark. Think about that first moment your eyes met. What did it feel like?",
    type: "memory",
  },
  {
    id: 2,
    title: "The Poetry of You",
    characterLine:
      "Sometimes, words fail us. But love never does. Let me share something special.",
    type: "message",
  },
  {
    id: 3,
    title: "The Big Question",
    characterLine:
      "We’ve reached the heart of the matter. I have one very important thing to ask you on behalf of someone special...",
    type: "question",
  },
  {
    id: 4,
    title: "Eternal Bloom",
    characterLine:
      "My job here is done! May your love continue to bloom forever and ever.",
    type: "finale",
  },
];

// --- Components ---

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev.slice(-20), Date.now()]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((id) => (
        <div
          key={id}
          className="heart-particle text-pink-200"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${10 + Math.random() * 30}px`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

// ✅ UPDATED: CupidGuide now supports show/hide and close button
const CupidGuide = ({ line }) => {
  const [showMessage, setShowMessage] = useState(true); // ✅ controls only the message bubble

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-10 left-10 z-50 flex items-end space-x-4 max-w-sm md:max-w-md"
    >
      {/* Guide Avatar — always visible */}
      <motion.div
        onClick={() => setShowMessage((prev) => !prev)} // ✅ toggle message on click
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-pink-100 overflow-hidden relative cursor-pointer"
      >
        <img
          src="https://picsum.photos/seed/cupid/200"
          alt="Cupid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply" />
      </motion.div>

      {/* Message Bubble — toggled only */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            key={line}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="bg-white p-4 rounded-2xl shadow-lg border-2 border-pink-50 relative before:content-[''] before:absolute before:bottom-4 before:-left-3 before:w-6 before:h-6 before:bg-white before:rotate-45 before:border-l-2 before:border-b-2 before:border-pink-50"
          >
            {/* ❌ Close button */}
            <button
              onClick={() => setShowMessage(false)} // ✅ closes message only
              className="absolute top-2 right-2 text-pink-400 hover:text-pink-600"
            >
              ✕
            </button>

            <p className="text-pink-700 text-sm md:text-base font-medium leading-relaxed pr-4">
              {line}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const StopContent = ({ stop, onNext }) => {
  const [userInput, setUserInput] = useState("");
  const [localMessage, setLocalMessage] = useState("");

  const romanticMessage = `You have this quiet magic about you — the kind that makes everything feel softer, brighter, and more meaningful. Being with you feels like home and adventure at the same time.`;

  const generateLocalMessage = () => {
    setLocalMessage(romanticMessage);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ffffff"],
    });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-2xl w-full mx-4 border border-white/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 text-pink-200">
        <Sparkles size={48} />
      </div>

      <h2 className="text-4xl md:text-5xl font-serif-fancy text-pink-800 mb-6">
        {stop.title}
      </h2>

      <div className="min-h-[200px] flex flex-col justify-center">
        {stop.type === "intro" && (
          <div className="space-y-6 text-center">
            <p className="text-gray-600 text-lg">
              Every heartbeat tells a story. This one is yours.
            </p>
            <button
              onClick={onNext}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold shadow-lg hover:shadow-pink-500/50 transition-all flex items-center space-x-2 mx-auto"
            >
              <span>Begin Journey</span>
              <ArrowRight size={20} />
            </button>
          </div>
        )}

        {stop.type === "memory" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-pink-50 rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src="https://picsum.photos/seed/love1/400"
                  alt="Memory 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="aspect-square bg-pink-50 rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src="https://picsum.photos/seed/love2/400"
                  alt="Memory 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
            <p className="italic text-pink-600 text-center">
              "Some memories are etched in gold."
            </p>
            <button
              onClick={onNext}
              className="w-full py-3 bg-pink-100 text-pink-600 rounded-full font-semibold hover:bg-pink-200 transition-colors"
            >
              Continue Down Memory Lane
            </button>
          </div>
        )}

        {stop.type === "message" && (
          <div className="space-y-4">
            {!localMessage ? (
              <>
                <p className="text-gray-600">
                  Write a few words about them — then let love do the rest:
                </p>

                <button
                  onClick={generateLocalMessage}
                  className="w-full py-3 bg-rose-500 text-white rounded-full font-bold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send size={20} />

                  <span>Reveal the Message</span>
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-4"
              >
                <div className="p-6 bg-pink-50 rounded-2xl border-2 border-dashed border-pink-200 font-cursive text-lg md:text-2xl text-pink-800 leading-relaxed">
                  {localMessage}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={onNext}
                    className="flex-1 py-3 bg-pink-500 text-white rounded-full font-bold"
                  >
                    It’s Perfect
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {stop.type === "question" && (
          <div className="text-center space-y-8 py-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-pink-600"
            >
              <Heart size={80} fill="currentColor" className="mx-auto" />
            </motion.div>
            <h3 className="text-3xl font-serif-fancy text-pink-900">
              Will you be my Love?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConfetti}
                className="px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform"
              >
                YES! A thousand times yes!
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-500 rounded-full font-semibold hover:opacity-0 transition-opacity">
                Maybe? (Don't click me)
              </button>
            </div>
          </div>
        )}

        {stop.type === "finale" && (
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4 mb-4">
              <Star className="text-yellow-400 fill-current" />
              <Heart className="text-red-500 fill-current" />
              <Star className="text-yellow-400 fill-current" />
            </div>
            <p className="text-2xl font-cursive text-pink-800">
              Together is a wonderful place to be.
            </p>
            <p className="text-gray-500">
              I hope this journey made you smile today.
            </p>
            <div className="h-40 w-full rounded-2xl overflow-hidden mt-4">
              <img
                src="https://picsum.photos/seed/happy/800/400"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-pink-400 hover:text-pink-600 underline text-sm"
            >
              Restart Journey
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function Vals9() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGuideOpen, setIsGuideOpen] = useState(true); // ✅ ADDED: control guide visibility
  const currentStop = JOURNEY_STOPS[currentStep];

  const handleNext = () => {
    if (currentStep < JOURNEY_STOPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setIsGuideOpen(true); // ✅ ADDED: auto-show guide on new step
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <FloatingHearts />

      {/* Dynamic Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Progress Indicator */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 flex space-x-3 z-50">
        {JOURNEY_STOPS.map((_, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              width: idx === currentStep ? 40 : 12,
              backgroundColor: idx <= currentStep ? "#f43f5e" : "#e2e8f0",
            }}
            className="h-2 rounded-full shadow-sm"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <StopContent key={currentStep} stop={currentStop} onNext={handleNext} />
      </AnimatePresence>

      {/* ✅ UPDATED: CupidGuide now toggleable */}
      <CupidGuide
        line={currentStop.characterLine}
        isOpen={isGuideOpen}
        onToggle={() => setIsGuideOpen((prev) => !prev)}
      />

      {/* Subtle Bottom Bar Icons */}
    </div>
  );
}
