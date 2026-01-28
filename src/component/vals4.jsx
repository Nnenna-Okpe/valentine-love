import React, { useState } from "react";

export default function ValentinesDay() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);

  const createHeart = (e) => {
    const heart = {
      id: Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setHearts([...hearts, heart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heart.id));
    }, 1000);
  };

  const styles = `
        @keyframes float-up {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0.5);
            }
        }

        @keyframes gentle-pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        @keyframes shimmer {
            0% {
                background-position: -1000px 0;
            }
            100% {
                background-position: 1000px 0;
            }
        }

        .floating-heart {
            animation: float-up 1s ease-out forwards;
            pointer-events: none;
            position: fixed;
            font-size: 24px;
        }

        .card-flip {
            perspective: 1000px;
        }

        .card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
            width: 100%;
            height: 100%;
        }

        .card-flip.flipped .card-inner {
            transform: rotateY(180deg);
        }

        .card-front, .card-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }

        .card-back {
            transform: rotateY(180deg);
        }

        .pulse {
            animation: gentle-pulse 2s infinite;
        }

        .gradient-text {
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-container {
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .image-container:hover img {
            transform: scale(1.05);
        }

        .message-box {
            border-left: 4px solid #ff6b9d;
            padding-left: 24px;
        }

        .btn-custom {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .btn-custom::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transition: left 0.3s ease;
        }

        .btn-custom:hover::before {
            left: 100%;
        }

        .scroll-animation {
            opacity: 0;
            animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

  return (
    <div
      onClick={createHeart}
      className="w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden"
    >
      <style>{styles}</style>

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{ left: heart.x, top: heart.y }}
        >
          ❤
        </div>
      ))}

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="text-center mb-16 scroll-animation">
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              <span className="gradient-text font-bold">For You</span>
            </h1>
            <p className="text-gray-500 text-lg">
              A special message from someone who cares
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            {/* Image Section */}
            <div
              className="scroll-animation"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="image-container h-96 md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c006ae0f?w=600&h=600&fit=crop"
                  alt="Loved one"
                />
              </div>
            </div>

            {/* Message Section */}
            <div
              className="scroll-animation"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <div className="message-box">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Every moment with you feels like a beautiful dream. Your
                    smile brightens my darkest days, and your presence makes
                    everything feel right.
                  </p>
                </div>

                <div className="message-box">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Thank you for being the one who truly understands me, who
                    listens without judgment, and loves me for exactly who I am.
                  </p>
                </div>

                <button
                  onClick={() => setShowMessage(!showMessage)}
                  className="btn-custom mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  {showMessage
                    ? "Hide Secret Message"
                    : "Reveal Secret Message"}
                </button>

                {showMessage && (
                  <div
                    className="glass-effect p-6 rounded-lg mt-6 text-center scroll-animation"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <p className="text-gray-800 italic font-light text-lg">
                      You are my greatest adventure, my favorite person, and my
                      forever love.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="scroll-animation" style={{ animationDelay: "0.4s" }}>
            <div
              className={`card-flip cursor-pointer mb-16 ${
                isFlipped ? "flipped" : ""
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card-inner">
                {/* Front */}
                <div className="card-front glass-effect p-12 rounded-xl h-64 flex flex-col items-center justify-center text-center">
                  <div className="pulse text-5xl mb-4">❤️</div>
                  <p className="text-2xl font-light gradient-text">
                    Click to reveal
                  </p>
                </div>

                {/* Back */}
                <div className="card-back glass-effect p-12 rounded-xl h-64 flex items-center justify-center text-center">
                  <div>
                    <p className="text-xl font-light text-gray-800">
                      I love you more than words could ever express
                    </p>
                    <p className="text-gray-600 mt-4 text-sm">
                      Happy Valentine's Day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div
            className="text-center scroll-animation"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-gray-500 font-light">
              Click anywhere on the page to create magic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
