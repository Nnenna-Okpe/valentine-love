import React from "react";
import { useState } from "react";
import {
  Heart,
  Search,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center md:p-4">
        <div className="relative w-screen md:max-w-7xl">
          {/* Main Container */}
          <div className="relative bg-[#0b0b16]/90 backdrop-blur-xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Header */}
            <header className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Heart size={22} className="text-pink-400" />
                <span className="text-white text-lg md:text-xl font-semibold tracking-wide">
                  Nenztech
                </span>
              </div>

              <button className="bg-pink-500/10 text-pink-400 p-3 rounded-full hover:bg-pink-500/20 transition">
                <Search size={18} />
              </button>
            </header>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-10 py-16 md:py-24">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-8">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Valentine Web Templates
                </h1>

                <p className="text-2xl md:text-4xl font-light text-pink-400">
                  Designed by Nenztech. Built with emotion.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap flex-row items-center gap-1 md:gap-4">
                  <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-600 transition shadow-lg shadow-pink-500/20">
                    Browse Templates
                    <ChevronRight size={18} />
                  </button>

                  <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition flex items-center gap-2">
                    View Portfolio
                    <Globe size={18} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
                  I’m a web developer at Nenztech, and I’ve created 11 premium
                  Valentine web templates you can gift to your loved one. Each
                  design is built to feel personal, immersive, and unforgettable
                  — no apps, no downloads, just a beautiful experience in the
                  browser.
                </p>

                <p className="text-white/60 text-sm">
                  Need custom features, branding, or special requests? Reach out
                  — I create custom web experiences too.
                </p>

                {/* Social + Contact */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="border border-white/20 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="#"
                      className="border border-white/20 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      className="border border-white/20 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <Twitter size={16} />
                    </a>
                  </div>

                  <span className="text-white/60 text-sm">
                    @nenztech • DM for deals & custom builds
                  </span>
                </div>
              </div>

              {/* Right Visual */}
              <div className="flex items-center justify-center relative">
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                  {/* Glowing Heart Outline */}
                  <svg
                    viewBox="0 0 200 220"
                    className="absolute inset-0 w-full h-full opacity-90"
                    style={{
                      filter: "drop-shadow(0 0 30px rgba(236, 72, 153, 0.35))",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="softHeart"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100,190 C30,140 10,110 10,75 C10,50 25,35 45,35 C60,35 75,45 100,65 C125,45 140,35 155,35 C175,35 190,50 190,75 C190,110 170,140 100,190 Z"
                      fill="none"
                      stroke="url(#softHeart)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Glow Background */}
                  <div className="absolute inset-6 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-2xl" />

                  {/* Inner Message */}
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <p className="text-white/80 text-sm md:text-base italic leading-relaxed">
                      Every template is a handcrafted digital experience — built
                      to impress, connect, and last.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-10 py-6 border-t border-white/10">
              <span className="text-white/60 text-sm">
                © {new Date().getFullYear()} Nenztech — Web Experiences That
                Connect.
              </span>

              <div className="flex items-center gap-4">
                <span className="text-white font-semibold">3</span>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                <span className="text-pink-400 font-semibold">
                  Price Categories
                </span>
              </div>

              <button className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                View Templates →
              </button>
            </div>
          </div>
        </div>
      </div>

      <PricingPage />
    </div>
  );
}

const PRICE_TIERS = [
  {
    id: "basic",
    label: "Gentle Love",
    price: "₦7,000",
    description: "Simple, beautiful templates for sweet messages.",
    templates: [
      {
        id: 1,
        title: "Soft Bloom",
        image: "https://picsum.photos/seed/love1/400/300",
      },
      {
        id: 2,
        title: "Blush Note",
        image: "https://picsum.photos/seed/love2/400/300",
      },
      {
        id: 3,
        title: "Gentle Flame",
        image: "https://picsum.photos/seed/love3/400/300",
      },
    ],
  },
  {
    id: "premium",
    label: "Premium Passion",
    price: "₦10,000",
    description: "Interactive, animated designs with deeper emotion.",
    templates: [
      {
        id: 4,
        title: "Velvet Hearts",
        image: "https://picsum.photos/seed/love4/400/300",
      },
      {
        id: 5,
        title: "Crimson Night",
        image: "https://picsum.photos/seed/love5/400/300",
      },
      {
        id: 6,
        title: "Golden Whisper",
        image: "https://picsum.photos/seed/love6/400/300",
      },
      {
        id: 7,
        title: "Midnight Roses",
        image: "https://picsum.photos/seed/love7/400/300",
      },
    ],
  },
  {
    id: "luxury",
    label: "Luxury Forever",
    price: "₦15,000",
    description: "Cinematic, fully immersive love experiences.",
    templates: [
      {
        id: 8,
        title: "Eternal Flame",
        image: "https://picsum.photos/seed/love8/400/300",
      },
      {
        id: 9,
        title: "Royal Vows",
        image: "https://picsum.photos/seed/love9/400/300",
      },
      {
        id: 10,
        title: "Hearts Entwined",
        image: "https://picsum.photos/seed/love10/400/300",
      },
      {
        id: 11,
        title: "Forever & Always",
        image: "https://picsum.photos/seed/love11/400/300",
      },
    ],
  },
];

function PricingPage() {
  const navigate = useNavigate();
  const [activeTier, setActiveTier] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f0f14] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your Love Story
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Select a price category, then browse the Valentine templates
            available in that tier.
          </p>
        </div>

        {/* Price Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICE_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() =>
                setActiveTier(activeTier === tier.id ? null : tier.id)
              }
              className={`relative rounded-2xl border p-6 sm:p-8 text-left transition-all ${
                activeTier === tier.id
                  ? "border-pink-500 bg-pink-500/10"
                  : "border-white/10 bg-white/5 hover:border-pink-400/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart size={20} className="text-pink-400" />
                <h2 className="text-xl sm:text-2xl !text-white font-semibold">
                  {tier.label}
                </h2>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">
                {tier.price}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {tier.description}
              </p>

              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-pink-400 text-xs font-semibold tracking-wide">
                View Templates <ChevronRight size={14} />
              </div>
            </button>
          ))}
        </div>

        {/* Templates Section */}
        {activeTier && (
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                {PRICE_TIERS.find((t) => t.id === activeTier)?.label} Templates
              </h3>
              <button
                onClick={() => {
                  setActiveTier(null);
                }}
                className="text-sm text-white/60 hover:text-white underline"
              >
                Change Category
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRICE_TIERS.find((t) => t.id === activeTier)?.templates.map(
                (template) => (
                  <button
                    key={template.id}
                    onClick={() => navigate("/vals" + template.id)}
                    className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-pink-400/50 transition-all"
                  >
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {template.title}
                      </p>
                      <button className="text-xs text-white/60">
                        Click to preview
                      </button>
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
