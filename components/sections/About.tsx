"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AnchorIcon, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2019",
    title: "Bachelor's Degree in Computer Science",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <GraduationCap className="w-5 h-5 text-egyptian-gold" />,
  },
  {
    year: "2020",
    title: "Frontend Developer at Tech Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Briefcase className="w-5 h-5 text-egyptian-gold" />,
  },
  {
    year: "2022",
    title: "Senior Developer at Digital Agency",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Calendar className="w-5 h-5 text-egyptian-gold" />,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-container" ref={ref}>
      <h2 className="section-title">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-egyptian-gold">
            <Image
              src="https://images.pexels.com/photos/4491603/pexels-photo-4491603.jpeg"
              alt="About Me"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-egyptian-blue rounded-full opacity-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 gold-gradient rounded-full opacity-10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-cormorant text-3xl font-bold mb-4 text-egyptian-blue">
              Web Developer & <span className="text-golden">UI Designer</span>
            </h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum dolor, ultrices id mattis ac, aliquet ut lectus. Nullam feugiat bibendum ornare.
            </p>
            <p className="text-lg">
              Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo id nibh eget tincidunt.
            </p>
          </motion.div>

          <Separator className="my-8 bg-egyptian-gold/30" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="font-cormorant text-2xl font-semibold mb-4 text-egyptian-blue">
              My Journey
            </h3>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    {item.icon}
                  </div>
                  {index < timelineItems.length - 1 && (
                    <div className="w-0.5 h-full bg-egyptian-gold/30 absolute top-10" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-sm text-egyptian-blue/80 font-medium">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-cormorant font-semibold text-egyptian-blue">
                    {item.title}
                  </h4>
                  <p className="text-egyptian-blue/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}