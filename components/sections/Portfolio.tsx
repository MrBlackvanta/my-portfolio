"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

type ProjectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
};

const projects: ProjectType[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing and admin dashboard.",
    image: "https://images.pexels.com/photos/4426476/pexels-photo-4426476.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Travel Booking App",
    description: "Mobile-responsive travel booking application with real-time availability.",
    image: "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg",
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Personal fitness tracking application with progress visualization.",
    image: "https://images.pexels.com/photos/4327724/pexels-photo-4327724.jpeg",
    tags: ["React", "Chart.js", "TypeScript", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Recipe Sharing Platform",
    description: "Social platform for sharing and discovering cooking recipes.",
    image: "https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg",
    tags: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="section-container" ref={ref}>
      <h2 className="section-title">My Portfolio</h2>
      <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-egyptian-blue/80">
        Browse through my recent projects showcasing my skills in web development
        and design.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="portfolio-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="egyptian-card h-full flex flex-col group">
        <div className="relative h-48 w-full overflow-hidden rounded-t-md border-2 border-egyptian-gold mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <Link href={project.demoLink} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> Demo
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href={project.githubLink} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-1" /> Code
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="font-cormorant text-xl font-semibold mb-2 text-egyptian-blue">
            {project.title}
          </h3>
          <p className="text-egyptian-blue/80 mb-4 text-sm flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs py-1 px-2 rounded bg-egyptian-blue/10 text-egyptian-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};