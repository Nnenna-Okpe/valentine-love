"use client";

import React, { useState } from "react";

export default function ValCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
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
          className="relative w-96 h-[500px] transition-transform duration-700"
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
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-300 to-pink-400 rounded-full flex items-center justify-center">
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

          {/* Back of Card */}
          <div
            className="absolute w-full h-full bg-white rounded-lg shadow-2xl p-12 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-light text-gray-900 tracking-tight">
                A Special Message
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed font-light text-base">
                  Every moment with you feels like a gift. Your kindness, your
                  laughter, your presence—they make my world brighter.
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  Here's to celebrating you today and always.
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

              <p className="text-sm text-gray-400">Click to go back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
