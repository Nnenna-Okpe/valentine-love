import React from "react";
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Music } from "lucide-react";

const useBackgroundMusic = (musicUrl) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [musicUrl]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay blocked. User interaction required.");
      }
    }
  };

  return { isPlaying, toggleMusic };
};

export default function Footer() {
  const navigate = useNavigate();
  const { isPlaying, toggleMusic } = useBackgroundMusic("/loveSong.mp3");

  return (
    <footer className="w-full bg-neutral-950 text-neutral-200 px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Thank You Message */}
        <p className="text-sm md:text-base tracking-wide text-neutral-400">
          Thank you for browsing.
        </p>
        <div className="flex flex-row justify-center items-center gap-2">
          <button
            className="bg-black rounded-sm text-white px-4 py-2 rounded-full hover:bg-pink-900 transition"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <Music
            onClick={toggleMusic}
            className={`cursor-pointer transition-colors ${
              isPlaying ? "text-pink-500" : "text-pink-300"
            }`}
          />
        </div>
        {/* WhatsApp Call-to-Action */}
        <p className="text-base md:text-lg font-medium max-w-xl text-neutral-300">
          Send me a message on WhatsApp to create a lovely experience for your
          loved one by clicking the chat icon below.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-2">
          <a
            href="https://www.instagram.com/nenztech?igsh=MTN3eHlvaWFkNHJ1eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/2349121361644"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 pt-4">
          © {new Date().getFullYear()} Nenztech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
