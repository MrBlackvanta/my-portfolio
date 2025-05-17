"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Database, 
  Server, 
  Layout, 
  FileCode, 
  Share2, 
  Sprout
} from "lucide-react";

type TechItem = {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
};

const technologies: TechItem[] = [
  {
    name: "React",
    icon: <Code className="h-8 w-8" />,
    description: "Building interactive UIs with component-based architecture",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "JavaScript",
    icon: <FileCode className="h-8 w-8" />,
    description: "Core language for web development and interactive features",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Tailwind CSS",
    icon: <Layout className="h-8 w-8" />,
    description: "Utility-first CSS framework for rapid UI development",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Node.js",
    icon: <Server className="h-8 w-8" />,
    description: "JavaScript runtime for building scalable network applications",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "TypeScript",
    icon: <Cpu className="h-8 w-8" />,
    description: "Static typing for JavaScript to improve code quality",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "MongoDB",
    icon: <Database className="h-8 w-8" />,
    description: "NoSQL database for modern applications",
    color: "from-green-600 to-green-800",
  },
  {
    name: "Git",
    icon: <Share2 className="h-8 w-8" />,
    description: "Version control system for tracking code changes",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Next.js",
    icon: <Sprout className="h-8 w-8" />,
    description: "React framework for production-grade applications",
    color: "from-gray-700 to-gray-900",
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="tech" className="section-container bg-background/80">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="section-title">Tech Stack</h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-egyptian-blue/80">
          My toolkit features modern technologies that enable me to build powerful, 
          scalable, and beautiful web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group perspective"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.03, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative rounded-lg overflow-hidden transition-transform duration-700 transform-preserve-3d">
                {/* Front card */}
                <div className="egyptian-card flex flex-col items-center p-6 h-[240px]">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6 shadow-md text-white`}>
                    {tech.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-2 text-egyptian-blue">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-center text-egyptian-blue/80">
                    {tech.description}
                  </p>
                  
                  {/* Egyptian decorative element */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-10">
                    <div className="w-12 h-1 gold-gradient rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}