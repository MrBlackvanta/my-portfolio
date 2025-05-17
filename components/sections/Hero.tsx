"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-papyrus opacity-70 z-0">
        <div className="absolute inset-0 bg-egyptian-pattern opacity-5" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 z-20">
        <motion.div
          className="flex flex-col justify-center order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-cormorant text-egyptian-gold text-2xl mb-2">
            Welcome to my portfolio
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            I&apos;m <span className="text-golden">Abdelrhman</span>,
            <br /> Web Developer
          </h1>
          <p className="text-lg md:text-xl text-egyptian-blue mb-8 max-w-md">
            Crafting timeless digital experiences with modern web technologies
            and ancient wisdom.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" size="lg">
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-egyptian-gold text-egyptian-blue hover:bg-egyptian-gold/10"
              onClick={scrollToNext}
            >
              Explore My Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-[280px] h-[350px] md:w-[360px] md:h-[450px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-egyptian-gold p-1">
              <Image
                src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg"
                alt="Portrait"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-5 -left-5 w-20 h-20 gold-gradient rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-3 -right-3 w-16 h-16 bg-egyptian-blue rounded-full opacity-20"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-egyptian-blue text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-egyptian-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
