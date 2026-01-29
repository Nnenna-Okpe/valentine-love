import React from "react";
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-200 px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Thank You Message */}
        <p className="text-sm md:text-base tracking-wide text-neutral-400">
          Thank you for browsing.
        </p>

        {/* WhatsApp Call-to-Action */}
        <p className="text-base md:text-lg font-medium max-w-xl text-neutral-300">
          Send me a message on WhatsApp to create a lovely experience for your
          loved one.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-2">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <Twitter size={20} />
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
            href="https://wa.me/234XXXXXXXXXX"
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
