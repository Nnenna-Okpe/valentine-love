import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentinesJourney() {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");

  const journeySteps = [
    { title: "Meet Your Guide", section: "guide" },
    { title: "How It Started", section: "origin" },
    { title: "What Makes You Special", section: "traits" },
    { title: "Our Shared World", section: "world" },
    { title: "A Message From My Heart", section: "letter" },
    { title: "Where We’re Going", section: "future" },
    { title: "Final Surprise", section: "final" },
  ];

  const fullText = `If love were a road, I would walk it barefoot just to feel every step with you. You’ve turned ordinary moments into landmarks and simple days into stories worth keeping forever. This journey is just a glimpse of how deeply you matter to me.`;

  useEffect(() => {
    if (journeySteps[step]?.section === "letter") {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const guideBounce = {
    animate: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 text-gray-800 font-sans overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-white/40 z-50">
        <motion.div
          className="h-full bg-rose-600"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / journeySteps.length) * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Guide Character */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        variants={guideBounce}
        animate="animate"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 shadow-2xl flex items-center justify-center text-white text-2xl font-bold">
          A
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="pt-20 pb-32 px-6">
        <AnimatePresence mode="wait">
          {journeySteps[step]?.section === "guide" && (
            <motion.section
              key="guide"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                Welcome to Our Journey
              </h1>
              <p className="max-w-xl text-lg text-gray-700 mb-12">
                I’ll be your guide — through memories, emotions, and everything
                that makes us… us.
              </p>
              <button
                onClick={() => setStep(step + 1)}
                className="bg-rose-600 text-white px-12 py-4 rounded-full shadow-xl hover:bg-rose-700 transition-all duration-300 hover:scale-110"
              >
                Start the Journey
              </button>
            </motion.section>
          )}

          {journeySteps[step]?.section === "origin" && (
            <motion.section
              key="origin"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                How It All Began
              </h2>
              <p className="max-w-2xl text-lg text-gray-700 leading-relaxed mb-12">
                One moment. One conversation. One glance that quietly rewrote
                everything I thought I knew about connection, comfort, and love.
              </p>
              <div className="flex gap-6">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-100 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                >
                  Continue
                </button>
              </div>
            </motion.section>
          )}

          {journeySteps[step]?.section === "traits" && (
            <motion.section
              key="traits"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                What Makes You, You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl">
                {[
                  "Your kindness",
                  "Your mind",
                  "Your laughter",
                  "Your patience",
                  "Your heart",
                  "Your presence",
                ].map((trait, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                  >
                    <p className="text-lg font-semibold text-rose-700">
                      {trait}
                    </p>
                    <p className="text-gray-600 mt-4">
                      A chapter of you I never want to stop reading.
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-6 mt-14">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-100 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                >
                  Continue
                </button>
              </div>
            </motion.section>
          )}

          {journeySteps[step]?.section === "world" && (
            <motion.section
              key="world"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                Our Shared World
              </h2>
              <p className="max-w-2xl text-lg text-gray-700 mb-12">
                Every laugh, every quiet moment, every look — together, we’ve
                built something that feels like home.
              </p>
              <motion.div
                className="w-full max-w-4xl h-64 bg-gradient-to-r from-rose-200 to-pink-300 rounded-3xl shadow-inner flex items-center justify-center text-gray-700 text-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                This space can hold photos, memories, or moments that define us.
              </motion.div>
              <div className="flex gap-6 mt-14">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-100 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                >
                  Continue
                </button>
              </div>
            </motion.section>
          )}

          {journeySteps[step]?.section === "letter" && (
            <motion.section
              key="letter"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                A Message From My Heart
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-700 min-h-[200px]">
                {typedText}
                <span className="inline-block w-1 h-5 bg-rose-500 ml-1 animate-pulse"></span>
              </p>
              <div className="flex gap-6 mt-14">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-100 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                >
                  Continue
                </button>
              </div>
            </motion.section>
          )}

          {journeySteps[step]?.section === "future" && (
            <motion.section
              key="future"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                Where We’re Going
              </h2>
              <p className="max-w-2xl text-lg text-gray-700 leading-relaxed mb-12">
                Forward. Together. Into moments we haven’t imagined yet, but
                already feel destined to experience side by side.
              </p>
              <div className="flex gap-6">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-full border border-rose-400 text-rose-600 hover:bg-rose-100 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                >
                  Continue
                </button>
              </div>
            </motion.section>
          )}

          {journeySteps[step]?.section === "final" && (
            <motion.section
              key="final"
              className="min-h-[80vh] flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -40 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                One Last Stop
              </h2>
              <p className="max-w-xl text-lg text-gray-700 mb-12">
                This journey doesn’t end here — it simply continues beyond this
                screen, into every day we choose each other.
              </p>
              <motion.button
                className="bg-rose-600 text-white px-12 py-4 rounded-full shadow-xl hover:bg-rose-700 transition-all duration-300"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("This is where you look at me and smile.")}
              >
                Finish the Journey
              </motion.button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-rose-900 text-rose-100 text-center">
        <p className="text-sm tracking-wide">
          This journey was made for one person. You.
        </p>
      </footer>
    </div>
  );
}
