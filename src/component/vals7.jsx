import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentinesSite() {
  const [typedText, setTypedText] = useState("");
  const [revealReason, setRevealReason] = useState(null);

  const fullText = `From the moment you walked into my life, everything shifted. You brought warmth, laughter, comfort, and a peace I never knew I was missing. This space exists for one reason — to remind you how deeply you are loved, valued, and cherished every single day.`;

  const reasons = [
    "Your kindness",
    "Your smile",
    "Your intelligence",
    "Your laughter",
    "Your patience",
    "Your heart",
    "The way you make ordinary days feel magical",
    "How safe you make me feel",
    "Your beautiful mind",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  // Curtain reveal timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowCurtain(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100 text-gray-800 font-sans overflow-hidden">
      {/* Cinematic Curtain Animation */}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            To My Favorite Human
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-gray-600">
            You didn’t just walk into my life — you upgraded it.
          </p>
          <a
            href="#letter"
            className="inline-block bg-rose-600 text-white px-12 py-4 rounded-full shadow-xl hover:bg-rose-700 transition-all duration-300 hover:scale-110"
          >
            Enter My Heart
          </a>
        </motion.div>
      </section>

      {/* Love Letter Section with Typing Animation */}
      <section id="letter" className="py-28 px-6 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            A Letter for You
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light min-h-[200px]">
            {typedText}
            <span className="inline-block w-1 h-5 bg-rose-500 ml-1 animate-pulse"></span>
          </p>
        </motion.div>
      </section>

      {/* Memories Section */}
      <section className="py-28 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Greatest Hits
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="h-60 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src="https://picsum.photos/seed/love9/400/300"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-medium text-gray-700">
                    A moment I’ll never forget
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Love Story
          </motion.h2>
          <div className="space-y-14">
            {[
              {
                title: "The Day We Met",
                desc: "Plot twist: my life got better.",
              },
              { title: "First Date", desc: "I knew. I absolutely knew." },
              {
                title: "First I Love You",
                desc: "My heart never recovered (in the best way).",
              },
              { title: "Today", desc: "Still choosing you. No hesitation." },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="w-4 h-4 bg-rose-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section — Interactive */}
      <section className="py-28 px-6 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Reasons I’m Completely Obsessed With You
          </motion.h2>

          <p className="mb-8 text-gray-600">Click the button. I dare you.</p>

          <motion.button
            className="bg-rose-600 text-white px-10 py-4 rounded-full shadow-xl hover:bg-rose-700 transition-all duration-300 mb-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setRevealReason(
                reasons[Math.floor(Math.random() * reasons.length)],
              )
            }
          >
            Reveal a Reason
          </motion.button>

          <AnimatePresence>
            {revealReason && (
              <motion.div
                key={revealReason}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-white max-w-xl mx-auto p-10 rounded-3xl shadow-2xl"
              >
                <p className="text-xl font-semibold text-rose-700">
                  {revealReason}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-28 px-6 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Song</h2>
          <p className="mb-10 text-lg text-gray-600">
            Warning: may cause emotional damage.
          </p>
          <motion.div
            className="w-full h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Music player embed goes here
          </motion.div>
        </motion.div>
      </section>

      {/* Future Section */}
      <section className="py-28 px-6 bg-rose-50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-14">Our Future</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-700">
            I see a future filled with shared dreams, lazy mornings, spontaneous
            trips, deep conversations, and a love that only grows louder,
            stronger, and more ridiculous in the best way.
          </p>
        </motion.div>
      </section>

      {/* Surprise Section */}
      <section className="py-28 px-6 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            One Last Thing
          </h2>
          <p className="text-lg mb-10 text-gray-600">
            If loving you were a sport, I’d be undefeated.
          </p>
          <motion.button
            className="bg-rose-600 text-white px-12 py-4 rounded-full shadow-xl hover:bg-rose-700 transition-all duration-300"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("This is where you kiss me.")}
          >
            Click Me
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-rose-900 text-rose-100 text-center">
        <p className="text-sm tracking-wide">Forever yours. No refunds.</p>
      </footer>
    </div>
  );
}
