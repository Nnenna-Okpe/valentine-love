import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Stars,
  Gift,
  Camera,
  Send,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Music,
  X,
} from "lucide-react";
import "./vals13.css";

// --- Constants ---
const STAGES = [
  { id: "welcome", title: "The Gateway of Hearts", color: "rose" },
  { id: "memories", title: "The Reflection Pool", color: "pink" },
  { id: "whisper", title: "The Love Letter", color: "fuchsia" },
  { id: "stars", title: "The Starlight Connection", color: "indigo" },
  { id: "final", title: "The Destination", color: "red" },
];

// --- Guide Character ---
const GuideCharacter = ({ message, isThinking, isOpen, toggleGuide }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-50 flex flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="guide-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-rose-100 max-w-[260px] mb-4 text-sm font-medium text-rose-600 relative"
          >
            <button
              onClick={toggleGuide}
              className="absolute top-2 right-2 text-rose-400 hover:text-rose-600"
            >
              <X size={16} />
            </button>

            {isThinking ? (
              <div className="flex space-x-1 justify-center p-2">
                <div className="w-2 h-2 bg-rose-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            ) : (
              message
            )}

            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white border-r border-b border-rose-100 rotate-45 transform origin-top-left"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guide Avatar */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative cursor-pointer"
        onClick={toggleGuide}
      >
        <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-pink-400 opacity-50"></div>
          <Heart className="text-white w-10 h-10 fill-current relative z-10" />

          {/* Eyes */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full flex items-center justify-center z-20">
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full flex items-center justify-center z-20">
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Heart Rain Background ---
const HeartRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{
            y: window.innerHeight + 100,
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 20}px)`,
            rotate: 360,
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
          className="absolute"
        >
          <Heart
            className="text-rose-400 fill-current"
            size={Math.random() * 20 + 10}
          />
        </motion.div>
      ))}
    </div>
  );
};

// --- Main App ---
export default function Vals13() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [letter, setLetter] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [guideMessage, setGuideMessage] = useState(
    "Hi there! I'm Val. I'll be your guide through this journey of love. Shall we begin?",
  );
  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const toggleGuide = () => setIsGuideOpen((prev) => !prev);

  const memories = [
    {
      id: 1,
      title: "Our First Day",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 2,
      title: "That Laugh",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
    {
      id: 3,
      title: "Forever Moments",
      img: "https://images.unsplash.com/photo-1500534314209-a26db0f5c1c2",
    },
  ];

  useEffect(() => {
    switch (step) {
      case 0:
        setGuideMessage(
          "Welcome to the Gateway! First, tell me who is embarking on this journey.",
        );
        break;
      case 1:
        setGuideMessage(
          `A beautiful name, ${userName}! Now, think about your special someone.`,
        );
        break;
      case 2:
        setGuideMessage(
          "Here is a heartfelt letter already written just for your love.",
        );
        break;
      case 3:
        setGuideMessage(
          "Look up! Our love is written in the stars. Take a moment to just be present.",
        );
        break;
      case 4:
        setGuideMessage(
          "We've reached the heart of the matter. It's time to ask the big question...",
        );
        break;
      default:
        break;
    }
  }, [step, userName]);

  const composeStoredLetter = () => {
    setIsThinking(true);
    setTimeout(() => {
      setLetter(
        `My dearest ${partnerName},\n\nFrom the moment you entered my life, everything changed. You bring light to my darkest days and joy to my quietest moments. I cherish every laugh, every memory, and every heartbeat we share.\n\nForever yours,\n${userName}`,
      );
      setIsThinking(false);
    }, 1000);
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPos({ x, y });
  };

  const nextStep = () => {
    if (step < STAGES.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="vals13 relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-rose-50 selection:bg-rose-200 selection:text-rose-900">
      <HeartRain />

      {/* Progress Indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white">
        {STAGES.map((s, idx) => (
          <div
            key={s.id}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx <= step ? "w-8 bg-rose-500" : "w-2 bg-rose-200"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="w-full max-w-4xl px-6 relative z-10 py-20"
        >
          {/* STOP 0: WELCOME */}
          {step === 0 && (
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block p-6 bg-white rounded-full shadow-2xl shadow-rose-200 border-4 border-rose-100"
              >
                <Heart className="w-16 h-16 text-rose-500 fill-current animate-pulse" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-romance text-rose-600">
                LoveQuest
              </h1>
              <p className="text-lg text-rose-400 font-medium max-w-md mx-auto">
                A journey through the landscapes of affection, guided by
                starlight and heartbeats.
              </p>

              <div className="max-w-sm mx-auto space-y-4 pt-10">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-rose-100 focus:border-rose-300 outline-none transition-all text-rose-600 text-center font-semibold text-lg"
                />
                <button
                  onClick={nextStep}
                  disabled={!userName}
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-200 text-white rounded-2xl font-bold shadow-lg shadow-rose-200 transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>Begin Journey</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* STOP 1: MEMORIES SECTION */}
          {step === 1 && (
            <div className="text-center space-y-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block p-4 bg-white rounded-3xl shadow-xl border border-rose-100"
              >
                <Camera className="w-12 h-12 text-pink-500" />
              </motion.div>
              <h2 className="text-4xl font-romance text-pink-600">
                The Reflection Pool
              </h2>
              <p className="text-lg text-rose-400">
                Who is the person that makes your heart skip a beat?
              </p>

              <div className="max-w-sm mx-auto space-y-4 pt-6">
                <input
                  type="text"
                  placeholder="Your Partner's Name..."
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-pink-100 focus:border-pink-300 outline-none transition-all text-pink-600 text-center font-semibold text-lg"
                />
              </div>

              {/* Memories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
                {memories.map((memory) => (
                  <div
                    key={memory.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                  >
                    <img
                      src={memory.img}
                      alt={memory.title}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {memory.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-10 gap-4">
                <button
                  onClick={prevStep}
                  className="p-4 bg-white border border-rose-100 text-rose-400 rounded-2xl hover:bg-rose-50 transition-all"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextStep}
                  disabled={!partnerName}
                  className="px-10 py-4 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-200 text-white rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Next Stop</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* STOP 2: LETTER */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-fuchsia-600">
                  <Sparkles size={28} />
                  <h2 className="text-4xl font-romance">The Love Letter</h2>
                </div>
                <p className="text-rose-400 leading-relaxed">
                  A heartfelt message crafted just for {partnerName}.
                </p>
                <button
                  onClick={composeStoredLetter}
                  disabled={isThinking}
                  className="w-full py-4 bg-fuchsia-600 text-white rounded-2xl font-bold shadow-lg hover:bg-fuchsia-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isThinking ? "Opening Letter..." : "Reveal Love Letter"}
                  <Send size={18} />
                </button>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-3xl shadow-2xl border border-fuchsia-100 min-h-[250px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4">
                    <Heart
                      className="text-fuchsia-100 fill-current"
                      size={60}
                    />
                  </div>
                  {letter ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative z-10"
                    >
                      <p className="text-fuchsia-700 italic font-medium leading-loose whitespace-pre-wrap">
                        {letter}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-rose-300">
                      <Stars className="animate-pulse mb-2" />
                      <p>Waiting for the words...</p>
                    </div>
                  )}
                </motion.div>

                {letter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex justify-end"
                  >
                    <button
                      onClick={nextStep}
                      className="px-8 py-3 bg-fuchsia-100 text-fuchsia-600 rounded-full font-bold hover:bg-fuchsia-200 transition-all flex items-center space-x-2"
                    >
                      <span>Continue Journey</span>
                      <ChevronRight size={18} />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* STOP 3: ATMOSPHERE */}
          {step === 3 && (
            <div className="text-center space-y-12">
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-full scale-150"
                />
                <div className="w-48 h-48 bg-indigo-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                  <Music className="text-white w-16 h-16 animate-bounce" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-romance text-indigo-700">
                  The Starlight Connection
                </h2>
                <p className="text-indigo-400 max-w-lg mx-auto italic">
                  "In all the world, there is no heart for me like yours. In all
                  the world, there is no love for you like mine."
                </p>
                <div className="flex justify-center pt-8">
                  <button
                    onClick={nextStep}
                    className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl hover:bg-indigo-700 transition-all transform hover:scale-105"
                  >
                    Step into the Light
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STOP 4: FINAL QUESTION */}
          {step === 4 && (
            <div className="text-center space-y-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-6"
              >
                <Gift className="w-16 h-16 text-red-500 mx-auto animate-bounce" />
                <h2 className="text-5xl md:text-6xl font-romance text-red-600">
                  The Moment of Truth
                </h2>
                <p className="text-xl text-rose-500 font-medium">
                  {partnerName}, after all our shared moments and cosmic
                  connections...
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-red-700 mt-4 px-4 leading-tight">
                  Will you be my Valentine?
                </h3>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 relative min-h-[150px]">
                <button
                  onClick={() => alert(`Yay! ❤️ ${partnerName} said YES!`)}
                  className="px-12 py-5 bg-gradient-to-r from-red-600 to-rose-500 text-white text-2xl font-bold rounded-3xl shadow-2xl hover:shadow-red-200 transition-all transform hover:scale-110 active:scale-95"
                >
                  Yes, Absolutely! ❤️
                </button>

                <motion.button
                  onHoverStart={moveNoButton}
                  onClick={moveNoButton}
                  animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                  className="px-10 py-4 bg-white border-2 border-rose-200 text-rose-400 text-lg font-bold rounded-2xl shadow-lg hover:bg-rose-50"
                >
                  Maybe next time?
                </motion.button>
              </div>
            </div>
          )}
        </motion.main>
      </AnimatePresence>

      <GuideCharacter
        message={guideMessage}
        isThinking={isThinking}
        isOpen={isGuideOpen}
        toggleGuide={toggleGuide}
      />

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 p-8 text-rose-200 pointer-events-none hidden md:block">
        <Heart size={120} className="opacity-20 rotate-12" />
      </div>
      <div className="fixed bottom-0 left-0 p-8 text-rose-200 pointer-events-none hidden md:block">
        <Stars size={100} className="opacity-20 -rotate-12" />
      </div>
    </div>
  );
}
