"use client";

import React, { useState, useEffect } from "react";

const memories = [
  {
    id: 1,
    title: "Memory One",
    image: "https://picsum.photos/seed/love61/400/200",
    color: "from-rose-200 to-pink-200",
  },
  {
    id: 2,
    title: "Memory Two",
    image: "https://picsum.photos/seed/love62/400/200",
    color: "from-pink-200 to-red-200",
  },
  {
    id: 3,
    title: "Memory Three",
    image: "https://picsum.photos/seed/love63/400/200",
    color: "from-rose-100 to-pink-300",
  },
];

export default function Vals6() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const nextPage = (e) => {
    e.stopPropagation();
    if (currentPage < 2) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevPage = (e) => {
    e.stopPropagation();
    if (currentPage > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const nextMemory = (e) => {
    e.stopPropagation();
    setCurrentMemory((currentMemory + 1) % memories.length);
  };

  const prevMemory = (e) => {
    e.stopPropagation();
    setCurrentMemory((currentMemory - 1 + memories.length) % memories.length);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url(/flowers.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out;
        }
      `}</style>

      <div className="absolute inset-0 bg-black/10" />

      {/* Card Container */}
      <div
        onClick={handleCardClick}
        className="relative z-10 cursor-pointer"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative w-96 h-[450px] transition-transform duration-700 max-h-[80%]"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of Card */}
          <div
            className="absolute w-full h-full bg-white rounded-lg shadow-2xl p-12 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-300 to-pink-400 rounded-full flex items-center justify-center animate-pulse-soft">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>

              <div>
                <h1 className="text-5xl font-light text-gray-900 tracking-tight mb-2">
                  For You
                </h1>
                <div className="w-12 h-1 bg-gradient-to-r from-rose-300 to-pink-400 mx-auto" />
              </div>

              <p className="text-gray-600 text-lg font-light leading-relaxed">
                A moment to celebrate what we share
              </p>

              <p className="text-sm text-gray-400 pt-6">Click to continue</p>
            </div>
          </div>

          {/* Back of Card - Multi-page */}
          <div
            className="absolute w-full h-full bg-white rounded-lg shadow-2xl p-8 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Page 1: Message */}
            {currentPage === 0 && (
              <div
                className={`flex-1 flex flex-col items-center justify-center text-center space-y-8 ${isAnimating ? "animate-fade-out" : "animate-slide-in"}`}
              >
                <h2 className="text-4xl font-light text-gray-900 tracking-tight">
                  A Special Message
                </h2>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed font-light text-sm">
                    Every moment with you feels like a gift. Your kindness, your
                    laughter, your presence—they make my world brighter.
                  </p>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    Here's to celebrating you today and always.
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              </div>
            )}

            {/* Page 2: Memories Gallery */}
            {currentPage === 1 && (
              <div
                className={`flex-1 flex flex-col items-center justify-center space-y-6 ${isAnimating ? "animate-fade-out" : "animate-slide-in"}`}
              >
                <h2 className="text-3xl font-light text-gray-900 tracking-tight">
                  Our Memories
                </h2>

                <div
                  className={`w-full h-32 bg-gradient-to-br ${memories[currentMemory].color} rounded-lg flex items-center justify-center transition-all duration-500`}
                >
                  <img src={memories[currentMemory].image} alt="" />
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    onClick={prevMemory}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    ←
                  </button>
                  <div className="flex gap-2">
                    {memories.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-2 rounded-full transition-all ${
                          idx === currentMemory
                            ? "bg-rose-400 w-6"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextMemory}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            )}

            {/* Page 3: Special Wishes */}
            {currentPage === 2 && (
              <div
                className={`flex-1 flex flex-col items-center justify-center text-center space-y-6 ${isAnimating ? "animate-fade-out" : "animate-slide-in"}`}
              >
                <h2 className="text-3xl font-light text-gray-900 tracking-tight">
                  My Wishes for You
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-gray-700">
                      Endless happiness and joy
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-gray-700">Adventures together</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-gray-700">
                      A love that grows stronger
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-gray-700">Dreams coming true</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded-lg text-base font-light transition-all ${
                  currentPage === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              <div className="flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentPage ? "bg-rose-400 w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === 2}
                className={`px-4 py-2 rounded-lg text-base font-light transition-all ${
                  currentPage === 2
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
