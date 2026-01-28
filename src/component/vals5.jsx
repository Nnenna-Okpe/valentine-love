"use client";

import { useState, useEffect } from "react";
import "./vals5.css";

export default function Vals5() {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const memories = [
    {
      title: "First Meeting",
      date: "March 15, 2022",
      description:
        "I still remember how you walked into the room and changed everything. Your smile made me believe in fate.",
    },
    {
      title: "Our First Kiss",
      date: "May 20, 2022",
      description:
        "Under the starlight, everything felt perfect. That moment is forever etched in my heart.",
    },
    {
      title: "Road Trip Adventure",
      date: "August 10, 2023",
      description:
        "Driving through landscapes with you, music playing, no destination. Just pure bliss.",
    },
    {
      title: "Movie Night",
      date: "December 1, 2023",
      description:
        "Cozy nights watching movies, your head on my shoulder, feeling completely at home.",
    },
    {
      title: "Every Day With You",
      date: "Forever",
      description:
        "From morning coffee to late-night talks, every moment with you is a memory I treasure.",
    },
  ];

  // Auto-rotate memories
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentMemory((prev) => (prev + 1) % memories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % memories.length);
    setIsAutoPlay(false);
  };

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + memories.length) % memories.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="valentine-container vals5-theme">
      {/* Header */}
      <header className="valentine-header">
        <h1>For You</h1>
        <p className="subtitle">A love letter in digital form</p>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="photo-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
            alt="My loved one"
            className="hero-image"
          />
          <div className="image-overlay"></div>
        </div>
      </section>

      {/* Love Message */}
      <section className="message-section">
        <div className="section-container">
          <h2>To My Love</h2>
          <p className="message-text">
            Every day with you feels like a dream I never want to wake up from.
            You fill my life with laughter, warmth, and endless love. Thank you
            for being my greatest adventure, my safe place, and my forever
            person. You are my today and all of my tomorrows.
          </p>
          <p className="signature-text">With all my love, Your Valentine</p>
        </div>
      </section>

      {/* Memory Lane */}
      <section className="memory-section">
        <div className="section-container">
          <h2>Our Story</h2>
          <p className="section-subtitle">Moments that made us</p>

          <div className="memory-carousel">
            <button
              className="memory-nav memory-nav-prev"
              onClick={prevMemory}
              aria-label="Previous memory"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="memory-content">
              <div key={currentMemory} className="memory-item-active">
                <h3>{memories[currentMemory].title}</h3>
                <p className="memory-date">{memories[currentMemory].date}</p>
                <p className="memory-description">
                  {memories[currentMemory].description}
                </p>
              </div>
            </div>

            <button
              className="memory-nav memory-nav-next"
              onClick={nextMemory}
              aria-label="Next memory"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="memory-dots">
            {memories.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMemory ? "active" : ""}`}
                onClick={() => {
                  setCurrentMemory(index);
                  setIsAutoPlay(false);
                }}
                aria-label={`Go to memory ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="reasons-section">
        <div className="section-container">
          <h2>Why I Love You</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <p>Your genuine kindness and beautiful heart</p>
            </div>
            <div className="reason-item">
              <p>The way you make me laugh until it hurts</p>
            </div>
            <div className="reason-item">
              <p>Your unwavering support and belief in me</p>
            </div>
            <div className="reason-item">
              <p>The comfort of just being in your presence</p>
            </div>
            <div className="reason-item">
              <p>Your strength and grace in everything</p>
            </div>
            <div className="reason-item">
              <p>The future I see when I look in your eyes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Meter */}
      <section className="love-meter-section">
        <div className="section-container centered">
          <h2>How Much I Love You</h2>
          <div className="love-meter-bar">
            <div className="love-meter-fill"></div>
          </div>
          <p className="meter-text">∞ INFINITE</p>
        </div>
      </section>

      {/* Closing Message */}
      <section className="closing-section">
        <div className="section-container centered">
          <h2>Forever and Always</h2>
          <p>
            You are my greatest blessing, my sweetest dream, and my favorite
            person in the whole world.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="valentine-footer">
        <p>Happy Valentine's Day to the love of my life</p>
        <p className="footer-symbol">❤</p>
      </footer>
    </div>
  );
}
