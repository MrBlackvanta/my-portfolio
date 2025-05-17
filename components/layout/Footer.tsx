"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Pyramid, Heart } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-egyptian-blue/95 text-papyrus">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Pyramid className="w-6 h-6 text-egyptian-gold" />
              <span className="font-cormorant text-xl font-bold">
                <span className="text-golden">Ankh</span>Folio
              </span>
            </Link>
            <p className="text-papyrus/80 mb-6">
              Creating elegant, functional web experiences with an ancient touch of wisdom and modern technology.
            </p>
            <div className="w-16 h-1 gold-gradient rounded-full" />
          </div>

          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4 text-golden">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-papyrus/80 hover:text-egyptian-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4 text-golden">
              Newsletter
            </h3>
            <p className="text-papyrus/80 mb-4">
              Subscribe to receive updates and news about my latest projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-papyrus/10 rounded-l-md py-2 px-4 outline-none focus:ring-1 focus:ring-egyptian-gold w-full"
              />
              <button className="bg-egyptian-gold text-white py-2 px-4 rounded-r-md hover:bg-egyptian-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-papyrus/20 text-center">
          <motion.p
            className="text-papyrus/60 flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} AnkhFolio. Made with{" "}
            <Heart className="h-4 w-4 text-egyptian-gold animate-slow-pulse" /> in San Francisco
          </motion.p>
        </div>
      </div>
    </footer>
  );
}